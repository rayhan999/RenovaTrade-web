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
 * with Natural Earth TopoJSON.
 *
 * Frames a global sourcing & trade lane: European supplier hubs on the
 * left, multi-region buyer / destination pins on the right covering
 * South Asia, wider Asia, the Middle East, Africa, and North America.
 *
 * Each hub label is placed in one of four quadrants relative to its
 * pin (above / below × left / right) so neighbouring labels never
 * collide on the 800×400 world canvas:
 *   labelAbove  → block sits ABOVE  pin         (-100% translateY)
 *   labelBelow  → block sits BELOW  pin         (  0% translateY)
 *   default     → block sits to RIGHT of pin   (-50% translateY)
 *   labelLeft   → block sits to LEFT  of pin   (text-right, anchored
 *                                                  to pin.x — same mode
 *                                                  used by origin hubs)
 * A subtle bg-primary-dark backdrop + backdrop-blur keeps labels
 * legible over varied coastlines and ocean colors.
 */

const geoUrl = "/assets/data/world-110m.json"

const MAP_WIDTH = 800
const MAP_HEIGHT = 400

// World-view Mercator.
const PROJECTION_CENTER = [10, 25]
const PROJECTION_SCALE = 145

// Origin hubs (Europe-only). With per-hub subtext removed, every label
// is placed flush against its pin — no extra gap. `labelAbove` /
// `labelBelow` still pick whether the label sits above or below its
// pin so neighbouring hubs in the European cluster don't collide.
const originHubs = [
  // Baltic label sits ABOVE its pin, flush against it.
  { name: "Baltic & Nordic suppliers", coordinates: [24.0, 59.0], labelAbove: true },
  // Helsinki label sits BELOW its pin, flush against it.
  { name: "Helsinki", coordinates: [24.9384, 60.1699], labelBelow: true },
  // Central Europe label sits to the RIGHT of its pin (default anchor).
  { name: "Central Europe", coordinates: [15.0, 50.0] },
]

// Destination pins. All hubs (origin + destination) show only the place
// name — subtext was removed so every label sits in a single line and
// never collides on the 800×400 canvas. role-level detail lives in the
// Corridor facts row beneath the map. labelDy values are tuned so each
// hub occupies its OWN y-band with the origin cluster cleared out of
// the way.

const destinationHubs = [
  // ── South Asia (lat 19-24°N, lon 73-91°E) ──
  // Mumbai: BELOW, flush against the pin.
  { name: "Mumbai", coordinates: [72.8777, 19.0760], labelBelow: true },
  // Dhaka: ABOVE, flush against the pin.
  { name: "Dhaka", coordinates: [90.4125, 23.8103], labelAbove: true },
  // ── Wider Asia ──
  // Shanghai: ABOVE, flush against the pin.
  { name: "Shanghai", coordinates: [121.4737, 31.2304], labelAbove: true },
  // Singapore: extend LEFT so the label sits flush left of the pin over
  // the Malay peninsula, avoiding any right-edge clip on the 800px canvas.
  { name: "Singapore", coordinates: [103.8198, 1.3521], labelLeft: true },
  // ── Africa ──
  // Casablanca: ABOVE + LEFT, flush against the pin.
  { name: "Casablanca", coordinates: [-7.5898, 33.5731], labelAbove: true, labelLeft: true },
  // Lagos: default RIGHT-of-pin, flush against it.
  { name: "Lagos", coordinates: [3.3792, 6.5244] },
  // ── North America ──
  // Houston: ABOVE + LEFT, flush against the pin.
  { name: "Houston", coordinates: [-95.3698, 29.7604], labelAbove: true, labelLeft: true },
]

// originHubs order: [0]=Baltic, [1]=Helsinki, [2]=Central Europe
// destinationHubs order: [0]Mumbai [1]Dhaka [2]Shanghai [3]Singapore
//                       [4]Casablanca [5]Lagos [6]Houston
const routes = [
  // ── Baltic & Nordic → South Asia (scrap / re-rolling) ──
  { from: originHubs[0].coordinates, to: destinationHubs[1].coordinates }, // Baltic → Dhaka
  // ── Central Europe → South Asia + wider Asia + Americas (machinery) ──
  { from: originHubs[2].coordinates, to: destinationHubs[0].coordinates }, // Central EU → Mumbai
  { from: originHubs[2].coordinates, to: destinationHubs[2].coordinates }, // Central EU → Shanghai
  { from: originHubs[2].coordinates, to: destinationHubs[3].coordinates }, // Central EU → Singapore
  { from: originHubs[2].coordinates, to: destinationHubs[6].coordinates }, // Central EU → Houston
  // ── Helsinki → Africa (Nordic reach to West African ports) ──
  { from: originHubs[1].coordinates, to: destinationHubs[4].coordinates }, // Helsinki → Casablanca
  { from: originHubs[1].coordinates, to: destinationHubs[5].coordinates }, // Helsinki → Lagos
]

const regionLabels = [
  // EUROPE pulled south so it clears Helsinki's text block (which
  // sits below its pin near y≈80-115). At lat=48 it lands y≈150,
  // safely below Helsinki and below Central Europe's label band.
  { name: "EUROPE",        coordinates: [-15, 48] },
  // SOUTH ASIA repositioned over the Arabian Sea (lon=60) so it
  // sits in a column of its own, clear of Mumbai's label block to
  // the east, while lat=-8 keeps it below Mumbai's y-band.
  { name: "SOUTH ASIA",    coordinates: [60, -8] },
  { name: "ASIA",          coordinates: [115, 42] },
  // AFRICA moved inland away from Lagos's right-extending label.
  { name: "AFRICA",        coordinates: [24, -5] },
  { name: "NORTH AMERICA", coordinates: [-95, 45] },
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
          <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-2 md:p-6 shadow-depth-lg">
            <div className="relative" style={{ aspectRatio: MAP_WIDTH / MAP_HEIGHT }}>
              <ComposableMap
                projection={projection}
                width={MAP_WIDTH}
                height={MAP_HEIGHT}
                viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`}
                className="absolute inset-0 w-full h-full"
              >
                <defs>
                  <linearGradient id="corridor-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#38BDF8" />
                    <stop offset="100%" stopColor="#34D399" />
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
                    <circle key={`dot-${i}`} r="2" fill="#34D399">
                      <animateMotion
                        dur={`${7 + i * 2}s`}
                        repeatCount="indefinite"
                        path={route.d}
                      />
                    </circle>
                  ))}

                {/* Hub dots */}
                {allHubs.map((hub) => (
                  <Marker key={hub.name} coordinates={hub.coordinates}>
                    <g>
                      <circle
                        r={hub.side === "origin" ? 3 : 3.5}
                        fill={hub.side === "origin" ? "#38BDF8" : "#34D399"}
                        opacity="0.25"
                        className={reducedMotion ? "" : "animate-pulse-soft"}
                      />
                      <circle
                        r="1.75"
                        fill={hub.side === "origin" ? "#38BDF8" : "#34D399"}
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
                    className="absolute -translate-x-1/2 -translate-y-1/2 text-[10px] md:text-xs font-semibold tracking-[0.15em] text-white/50 uppercase pointer-events-none"
                    style={{ left: `${pos.left}%`, top: `${pos.top}%` }}
                  >
                    {label.name}
                  </div>
                )
              })}

              {/* HTML overlays for hub labels. Each block has a subtle
                  bg-primary-dark/40 + backdrop-blur so it stays legible
                  on top of varied coastlines and ocean colors regardless
                  of where the map projects it. */}
              {allHubs.map((hub) => {
                const pos = coordsToPercent(projection, hub.coordinates)
                const isOrigin = hub.side === "origin"
                const labelLeft = !isOrigin && hub.labelLeft
                const dy = hub.labelDy || 0
                const baseTranslateY = hub.labelAbove
                  ? "-100%"
                  : hub.labelBelow
                    ? "0%"
                    : "-50%"

                // Origin hubs and labelLeft destinations anchor to the
                // right of the pin (text extends LEFT); other destinations
                // anchor to the left of the pin (text extends RIGHT).
                const posStyle = (isOrigin || labelLeft)
                  ? { right: `${100 - pos.left}%` }
                  : { left: `${pos.left}%` }

                // No padding here — labels are deliberately placed flush against
                // the pin, since per-hub subtext was removed and the second-line
                // spacing budget is no longer needed.
                const alignClass = labelLeft ? "text-right" : ""

                return (
                  <div
                    key={hub.name}
                    className={`absolute pointer-events-none ${alignClass}`}
                    style={{
                      ...posStyle,
                      top: `${pos.top}%`,
                      transform: `translateY(calc(${baseTranslateY} + ${dy}px))`,
                    }}
                  >
                    <div className="text-xs md:text-sm font-semibold text-white whitespace-nowrap bg-primary-dark/40 backdrop-blur-[2px] px-2 py-0.5 rounded">
                      {hub.name}
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
