'use client'

import Link from "next/link"
import { Shield, Globe, Factory, ArrowRight } from "lucide-react"
import { useReducedMotion } from "@/hooks/useReducedMotion"
import { useLanguage } from "@/components/i18n/LanguageProvider"

/**
 * Hero — layered parallax-style background:
 *  1. Photo with slow Ken Burns pan (transform-only, GPU-friendly)
 *  2. Steel-navy gradient overlays for text contrast
 *  3. Subtle animated SVG trade-route arcs (Europe → South Asia motif)
 * All motion disabled under prefers-reduced-motion; arcs hidden on mobile.
 */
export default function Banner() {
  const reducedMotion = useReducedMotion()
  const { t } = useLanguage()

  return (
    <section
      className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden bg-primary"
      aria-label="Hero"
    >
      {/* Background image with slow pan (static under reduced motion) */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat ${reducedMotion ? "" : "animate-kenburns"}`}
          style={{ backgroundImage: "url(/assets/images/backgrounds/renova_banner_2.webp)" }}
        />
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-primary/80" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" aria-hidden="true" />

      {/* Animated trade-route arcs — decorative, desktop only */}
      <svg
        className="absolute inset-0 w-full h-full hidden md:block opacity-30 pointer-events-none"
        viewBox="0 0 1440 700"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="route-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#489FC7" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#70BC91" stopOpacity="0.9" />
          </linearGradient>
        </defs>
        {/* Europe (left) → South Asia (right) arcs */}
        <path d="M 180 210 Q 720 -40 1260 330" fill="none" stroke="url(#route-grad)" strokeWidth="1.5" strokeDasharray="6 10" className={reducedMotion ? "" : "animate-dash-flow"} />
        <path d="M 240 320 Q 720 120 1200 420" fill="none" stroke="url(#route-grad)" strokeWidth="1" strokeDasharray="4 12" className={reducedMotion ? "" : "animate-dash-flow"} style={{ animationDuration: "5s" }} />
        <path d="M 140 440 Q 700 260 1240 520" fill="none" stroke="url(#route-grad)" strokeWidth="1" strokeDasharray="3 14" className={reducedMotion ? "" : "animate-dash-flow"} style={{ animationDuration: "7s" }} />
        {/* Origin / destination nodes */}
        <circle cx="180" cy="210" r="5" fill="#489FC7" className={reducedMotion ? "" : "animate-pulse-soft"} />
        <circle cx="240" cy="320" r="4" fill="#489FC7" className={reducedMotion ? "" : "animate-pulse-soft"} style={{ animationDelay: "0.8s" }} />
        <circle cx="140" cy="440" r="4" fill="#489FC7" className={reducedMotion ? "" : "animate-pulse-soft"} style={{ animationDelay: "1.4s" }} />
        <circle cx="1260" cy="330" r="6" fill="#70BC91" className={reducedMotion ? "" : "animate-pulse-soft"} style={{ animationDelay: "0.4s" }} />
        <circle cx="1200" cy="420" r="4" fill="#70BC91" className={reducedMotion ? "" : "animate-pulse-soft"} style={{ animationDelay: "1.1s" }} />
        <circle cx="1240" cy="520" r="4" fill="#70BC91" className={reducedMotion ? "" : "animate-pulse-soft"} style={{ animationDelay: "1.8s" }} />
      </svg>

      {/* Content */}
      <div className="relative z-10 container-renova py-20 md:py-28 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight text-balance">
            {t('home.banner.title.raw')}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            {t('home.banner.subtitle')}
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white rounded-lg font-semibold text-base hover:bg-accent-dark hover:-translate-y-0.5 hover:shadow-accent-glow transition-all duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent focus-visible:ring-offset-primary w-full sm:w-auto"
            >
              {t('home.banner.cta.quote')}
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold text-base hover:bg-white/10 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white focus-visible:ring-offset-primary w-full sm:w-auto"
            >
              {t('home.banner.cta.services')}
            </Link>
          </div>

          {/* Trust signals */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
              {[
                { icon: Shield, text: t('home.banner.trust.finland') },
                { icon: Globe, text: t('home.banner.trust.route') },
                { icon: Factory, text: t('home.banner.trust.network') },
              ].map((signal) => (
                <div key={signal.text} className="flex items-center gap-3 text-white/90">
                  <div className="w-10 h-10 rounded-full bg-steel/15 flex items-center justify-center flex-shrink-0">
                    <signal.icon className="w-5 h-5 text-steel" aria-hidden="true" />
                  </div>
                  <span className="text-sm font-medium">{signal.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" aria-hidden="true" />
    </section>
  )
}
