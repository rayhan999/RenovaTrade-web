'use client'

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import AnimatedSection from "@/components/ui/AnimatedSection"
import { Ring, Diamond } from "@/components/ui/Decor"
import { useLanguage } from "@/components/i18n/LanguageProvider"

export default function Cta() {
  const { t } = useLanguage()

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Top accent divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-steel/40 to-transparent" aria-hidden="true" />

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/assets/images/backgrounds/renova_banner_1.jpg)",
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-primary/55" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/70 to-primary/50" aria-hidden="true" />

      {/* Floating decorative shapes */}
      <Ring tone="light" className="w-40 h-40 -left-10 top-8" animate="animate-float-slow" />
      <Ring tone="light" className="w-16 h-16 right-[10%] top-10 border" animate="animate-float" />
      <Diamond tone="light" className="w-4 h-4 left-[15%] bottom-12" animate="animate-sway" />
      <Diamond tone="light" className="w-2.5 h-2.5 right-[22%] bottom-16" animate="animate-float" />

      {/* Content */}
      <div className="relative z-10 container-renova">
        <AnimatedSection animation="scale-in" className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white leading-tight mb-6">
            {t('home.cta.title')}
          </h2>
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            {t('home.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white rounded-lg font-semibold text-base hover:bg-accent-dark hover:-translate-y-0.5 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent focus-visible:ring-offset-primary w-full sm:w-auto"
            >
              {t('home.cta.quote')}
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold text-base hover:bg-white/10 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white focus-visible:ring-offset-primary w-full sm:w-auto"
            >
              {t('home.cta.services')}
            </Link>
          </div>
        </AnimatedSection>
      </div>

      {/* Bottom accent divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-steel/40 to-transparent" aria-hidden="true" />
    </section>
  )
}
