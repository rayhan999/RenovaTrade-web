'use client'

import CountUp from "@/components/ui/CountUp"
import SampleTag from "@/components/ui/SampleTag"
import AnimatedSection from "@/components/ui/AnimatedSection"
import { Ring, DotGrid } from "@/components/ui/Decor"
import { useLanguage } from "@/components/i18n/LanguageProvider"

export default function TrustBar() {
  const { t } = useLanguage()
  const stats = [
    { end: 5, suffix: "+", label: t('home.trustBar.stat1.label') },
    { end: 40, suffix: "+", label: t('home.trustBar.stat2.label') },
    { end: 6, suffix: "", label: t('home.trustBar.stat3.label') },
    { end: 10, suffix: "+", label: t('home.trustBar.stat4.label') },
  ]
  return (
    <section className="relative -mt-2 pb-4 bg-background" aria-label="Company statistics">
      <div className="container-renova">
        <AnimatedSection animation="fade-up">
          <div className="relative bg-primary rounded-2xl shadow-depth-lg px-6 py-8 md:px-10 md:py-10 -translate-y-10 md:-translate-y-14 overflow-hidden">
            {/* Subtle panel decoration */}
            <Ring tone="light" className="w-36 h-36 -left-12 -bottom-16" animate="animate-float-slow" />
            <DotGrid tone="light" className="w-40 h-24 right-6 -top-4 opacity-25" size={16} />
            <div className="absolute top-3 right-4">
              <SampleTag dark label={t('home.trustBar.sampleLabel')} />
            </div>
            <dl className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <dd className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white order-first">
                    <CountUp end={stat.end} suffix={stat.suffix} />
                  </dd>
                  <dt className="mt-2 text-xs md:text-sm text-white/70 font-medium uppercase tracking-wide">
                    {stat.label}
                  </dt>
                </div>
              ))}
            </dl>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
