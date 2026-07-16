'use client'

import { useMemo } from "react"
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps"
import { geoMercator, geoPath } from "d3-geo"
import { Anchor, Ship, MapPin } from "lucide-react"
import SectionTitle from "@/components/ui/SectionTitle"
import AnimatedSection from "@/components/ui/AnimatedSection"
import { useReducedMotion } from "@/hooks/useReducedMotion"
import { useLanguage } from "@/components/i18n/LanguageProvider"

/**
 * Trade Corridor — accurate map visualization using react-simple-maps
 * with Natural Earth TopoJSON. Shows the Europe → South Asia sourcing
 * corridor with precise pin placement and animated routes.
 *
 * Pins always sit at their true geographic coordinates (no offset tricks).
 * Where two hubs are close enough that their text labels would overlap
 * (Helsinki / Baltic & Nordic suppliers, Chattogram / Dhaka), only the
 * LABEL TEXT gets a small vertical nudge (`labelDy`) — the pin dot itself
 * never moves, so the map stays accurate at a glance.
 */

const geoUrl = "/assets/data/world-110m.json"

// Fixed SVG canvas size used for both the map and label positioning.
const MAP_WIDTH = 800
const MAP_HEIGHT = 400

// Mercator projection tuned to show Europe through South Asia.
// Frames lon ≈ -22°…122°, lat ≈ 12°N…64°N on the 800×400 canvas, so
// Helsinki (60.2°N) and Chattogram (22.4°N) both sit comfortably inside.
const PROJECTION_CENTER = [50, 43]
const PROJECTION_SCALE = 320

const originHubs = [
  // Helsinki and Baltic & Nordic suppliers are only ~150km apart, so their
  // two-line labels would otherwise overlap — nudge them apart vertically.
  { name: "Helsinki", detail: "HQ & coordination", coordinates: [24.9384, 60.1699], labelDy: -10 },
  { name: "Baltic & Nordic suppliers", detail: "Scrap yards & recyclers", coordinates: [24.0, 59.0], labelDy: 14 },
  { name: "Central Europe", detail: "Machinery & equipment", coordinates: [15.0, 50.0] },
]

const destinationHubs = [
  // Chattogram and Dhaka are only ~210km apart — same label-nudge treatment.
  { name: "Chattogram", detail: "Primary port of discharge", coordinates: [91.7832, 22.3569], labelDy: 12 },
  { name: "Dhaka", detail: "Buyer coordination", coordinates: [90.4125, 23.8103], labelAbove: true, labelDy: -12 },
  { name: "South Asia", detail: "Regional markets", coordinates: [78.9629, 20.5937] },
]

const routes = [
  { from: originHubs[0].coordinates, to: destinationHubs[0].coordinates },
  { from: originHubs[1].coordinates, to: destinationHubs[1].coordinates },
  { from: originHubs[2].coordinates, to: destinationHubs[2].coordinates },
]

// Note: these are real lon/lat — [85, 35] would be Tibet, not South Asia.
const regionLabels = [
  { name: "EUROPE", coordinates: [15, 57] },        // southern Scandinavia / Baltic
  { name: "SOUTH ASIA", coordinates: [76, 16] },    // peninsular India
]

function useProjection() {
  return useMemo(() => {
    return geoMercator()
      .center(PROJECTION_CENTER)
      .scale(PROJECTION_SCALE)
      .translate([MAP_WIDTH / 2, MAP_HEIGHT / 2])
  }, [])
}

function coordsToPercent(projection, coordinates) {
  const [x, y] = projection(coordinates)
  return {
    left: (x / MAP_WIDTH) * 100,
    top: (y / MAP_HEIGHT) * 100,
  }
}

export default function TradeCorridor() {
  const reducedMotion = useReducedMotion()
  const { t } = useLanguage()
  const projection = useProjection()
  const pathGenerator = useMemo(() => geoPath().projection(projection), [projection])

  const allHubs = [
    ...originHubs.map((h) => ({ ...h, side: "origin" })),
    ...destinationHubs.map((h) => ({ ...h, side: "destination" })),
  ]

  const routePaths = routes.map((route) => ({
    ...route,
    d: pathGenerator({ type: "LineString", coordinates: [route.from, route.to] }),
  }))

  return (
    <section className="section-padding bg-primary relative overflow-hidden" aria-labelledby="trade-corridor-heading">
      {/* Dotted grid backdrop */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: "radial-gradient(circle, #94A3B8 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />

      <div className="relative container-renova">
        <AnimatedSection animation="fade-up">
          <SectionTitle
            tagline={t('home.corridor.tagline')}
            title={t('home.corridor.title')}
            description={t('home.corridor.description')}
            dark
          />
        </AnimatedSection>

        <AnimatedSection animation="scale-in" delay={150}>
          <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-2 md:p-6 shadow-depth-lg overflow-visible">
            <div className="relative aspect-[3/1] md:aspect-[2/1]">
              {/*
                Pass the SAME projection function used for the HTML label
                overlays and route paths, so map, markers, routes, and
                labels always agree on where things are.
              */}
              <ComposableMap
                projection={projection}
                width={MAP_WIDTH}
                height={MAP_HEIGHT}
                viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`}
                className="absolute inset-0 w-full h-full"
              >
                <defs>
                  <linearGradient id="corridor-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#489FC7" />
                    <stop offset="100%" stopColor="#70BC91" />
                  </linearGradient>
                </defs>

                <Geographies geography={geoUrl}>
                  {({ geographies }) =>
                    geographies.map((geo) => (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill="#ffffff"
                        fillOpacity={0.18}
                        stroke="none"
                      />
                    ))
                  }
                </Geographies>

                {/* Routes */}
                {routePaths.map((route, i) => (
                  <path
                    key={i}
                    d={route.d}
                    fill="none"
                    stroke="url(#corridor-grad)"
                    strokeWidth={i === 0 ? 2 : 1.5}
                    strokeDasharray="3 5"
                    opacity="0.8"
                    className={reducedMotion ? "" : "animate-dash-flow"}
                    style={reducedMotion ? undefined : { animationDuration: `${4 + i * 1.5}s` }}
                  />
                ))}

                {/* Moving cargo dots */}
                {!reducedMotion &&
                  routePaths.map((route, i) => (
                    <circle key={`dot-${i}`} r="2" fill="#70BC91">
                      <animateMotion
                        dur={`${7 + i * 2}s`}
                        repeatCount="indefinite"
                        path={route.d}
                      />
                    </circle>
                  ))}

                {/* Hub dots — always at true coordinates */}
                {allHubs.map((hub) => (
                  <Marker key={hub.name} coordinates={hub.coordinates}>
                    <g>
                      <circle
                        r={hub.side === "origin" ? 3 : 3.5}
                        fill={hub.side === "origin" ? "#489FC7" : "#70BC91"}
                        opacity="0.25"
                        className={reducedMotion ? "" : "animate-pulse-soft"}
                      />
                      <circle
                        r="1.75"
                        fill={hub.side === "origin" ? "#489FC7" : "#70BC91"}
                      />
                    </g>
                  </Marker>
                ))}
              </ComposableMap>

              {/* HTML overlays for region labels */}
              {regionLabels.map((label) => {
                const pos = coordsToPercent(projection, label.coordinates)
                return (
                  <div
                    key={label.name}
                    className="absolute -translate-x-1/2 -translate-y-1/2 text-[10px] md:text-xs font-semibold tracking-[0.15em] text-white/50 uppercase pointer-events-none hidden md:block"
                    style={{ left: `${pos.left}%`, top: `${pos.top}%` }}
                  >
                    {label.name}
                  </div>
                )
              })}

              {/* HTML overlays for hub labels — pin position is always the
                  true coordinate; `labelDy` only shifts the text block. */}
              {allHubs.map((hub) => {
                const pos = coordsToPercent(projection, hub.coordinates)
                const isOrigin = hub.side === "origin"
                const dy = hub.labelDy || 0
                const baseTranslateY = hub.labelAbove ? "-100%" : "-50%"
                return (
                  <div
                    key={hub.name}
                    className={`absolute pointer-events-none ${
                      isOrigin
                        ? "text-right pr-2"
                        : hub.labelAbove
                          ? "pb-1"
                          : "pl-2"
                    }`}
                    style={{
                      ...(isOrigin
                        ? { right: `${100 - pos.left}%` }
                        : { left: `${pos.left}%` }),
                      top: `${pos.top}%`,
                      transform: `translateY(calc(${baseTranslateY} + ${dy}px))`,
                    }}
                  >
                    <div className="text-xs md:text-sm font-semibold text-white/90 whitespace-nowrap">
                      {hub.name}
                    </div>
                    <div className="text-[10px] md:text-xs text-white/60 whitespace-nowrap hidden md:block">
                      {hub.detail}
                    </div>
                  </div>
                )
              })}
            </div>
            <p className="mt-3 text-right text-xs text-white/40">
              {t('home.corridor.attribution')}
            </p>
          </div>
        </AnimatedSection>

        {/* Corridor facts */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Anchor, title: t('home.corridor.fact1.title'), text: t('home.corridor.fact1.text') },
            { icon: Ship, title: t('home.corridor.fact2.title'), text: t('home.corridor.fact2.text') },
            { icon: MapPin, title: t('home.corridor.fact3.title'), text: t('home.corridor.fact3.text') },
          ].map((item, i) => (
            <AnimatedSection key={item.title} animation="fade-up" delay={i * 100}>
              <div className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl p-5 h-full">
                <div className="w-11 h-11 rounded-xl bg-steel/15 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-steel" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-base font-heading font-semibold text-white">{item.title}</h3>
                  <p className="mt-1 text-sm text-white/70 leading-relaxed">{item.text}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
