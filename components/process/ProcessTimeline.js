'use client'

import { useEffect, useRef, useState } from "react"
import AnimatedSection from "@/components/ui/AnimatedSection"
import { useReducedMotion } from "@/hooks/useReducedMotion"
import { useLanguage } from "@/components/i18n/LanguageProvider"
import { Search, Users, FileText, Scale, Handshake, Truck, PackageCheck } from "lucide-react"

/**
 * Animated vertical timeline / stepper for the 7-step process.
 * An azure progress line fills (transform: scaleY — GPU-friendly) as the
 * user scrolls through the steps; each step card reveals via AnimatedSection.
 * Under prefers-reduced-motion the line renders fully filled and static.
 */
export default function ProcessTimeline({ dark = false }) {
  const containerRef = useRef(null)
  const [progress, setProgress] = useState(0)
  const reducedMotion = useReducedMotion()
  const { t } = useLanguage()
  const processSteps = [
    { icon: Search, title: t('process.step1.title'), text: t('process.step1.text') },
    { icon: Users, title: t('process.step2.title'), text: t('process.step2.text') },
    { icon: FileText, title: t('process.step3.title'), text: t('process.step3.text') },
    { icon: Scale, title: t('process.step4.title'), text: t('process.step4.text') },
    { icon: Handshake, title: t('process.step5.title'), text: t('process.step5.text') },
    { icon: Truck, title: t('process.step6.title'), text: t('process.step6.text') },
    { icon: PackageCheck, title: t('process.step7.title'), text: t('process.step7.text') },
  ]

  useEffect(() => {
    if (reducedMotion) {
      setProgress(1)
      return
    }
    let raf = null
    const update = () => {
      raf = null
      const el = containerRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const viewH = window.innerHeight
      // Fill from when the top enters 75% viewport until the bottom reaches 60%.
      const total = rect.height + viewH * 0.35
      const passed = viewH * 0.75 - rect.top
      setProgress(Math.min(1, Math.max(0, passed / total)))
    }
    const onScroll = () => {
      if (raf === null) raf = requestAnimationFrame(update)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll, { passive: true })
    update()
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [reducedMotion])

  const lineBase = dark ? "bg-white/15" : "bg-border"
  const cardBase = dark
    ? "bg-white/5 border border-white/10 hover:bg-white/10"
    : "bg-surface border border-border shadow-md hover:shadow-depth"
  const titleColor = dark ? "text-white" : "text-primary"
  const textColor = dark ? "text-white/70" : "text-secondary"

  return (
    <div ref={containerRef} className="relative max-w-3xl mx-auto">
      {/* Track */}
      <div className={`absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 md:-translate-x-1/2 ${lineBase}`} aria-hidden="true" />
      {/* Progress fill */}
      <div
        className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 md:-translate-x-1/2 bg-gradient-to-b from-steel to-accent origin-top"
        style={{ transform: `scaleY(${progress})` }}
        aria-hidden="true"
      />

      <ol className="space-y-10 md:space-y-14">
        {processSteps.map((step, index) => {
          const isLeft = index % 2 === 0
          return (
            <li key={step.title} className="relative">
              {/* Node */}
              <div
                className={`absolute left-6 md:left-1/2 top-6 -translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center font-heading font-bold text-sm z-10 border-4 transition-colors duration-500 ${
                  progress >= (index + 0.5) / processSteps.length
                    ? "bg-accent text-white border-accent/30"
                    : dark
                      ? "bg-primary-light text-white/60 border-white/10"
                      : "bg-muted text-secondary border-background"
                }`}
                aria-hidden="true"
              >
                {index + 1}
              </div>

              {/* Card */}
              <AnimatedSection
                animation={isLeft ? "fade-left" : "fade-right"}
                delay={80}
                className={`ml-16 md:ml-0 md:w-[calc(50%-3rem)] ${isLeft ? "md:mr-auto" : "md:ml-auto"}`}
              >
                <div className={`rounded-2xl p-6 transition-all duration-300 ${cardBase}`}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${dark ? "bg-steel/15" : "bg-accent/10"}`}>
                      <step.icon className={`w-5 h-5 ${dark ? "text-steel" : "text-accent"}`} aria-hidden="true" />
                    </div>
                    <span className={`text-xs font-semibold uppercase tracking-wider ${dark ? "text-white/50" : "text-secondary/70"}`}>
                      Step {index + 1} of {processSteps.length}
                    </span>
                  </div>
                  <h3 className={`text-lg md:text-xl font-heading font-semibold ${titleColor}`}>
                    {step.title}
                  </h3>
                  <p className={`mt-2 text-sm leading-relaxed ${textColor}`}>
                    {step.text}
                  </p>
                </div>
              </AnimatedSection>
            </li>
          )
        })}
      </ol>
    </div>
  )
}
