'use client'

import AnimatedSection from "@/components/ui/AnimatedSection"
import { Ring, DotGrid } from "@/components/ui/Decor"
import { ShieldCheck, Globe2, FileCheck2, Scale } from "lucide-react"
import { useLanguage } from "@/components/i18n/LanguageProvider"

export default function TrustBar() {
  const { t } = useLanguage()
  const badges = [
    { icon: ShieldCheck, label: t('home.trustBar.badge1') },
    { icon: Globe2, label: t('home.trustBar.badge2') },
    { icon: FileCheck2, label: t('home.trustBar.badge3') },
    { icon: Scale, label: t('home.trustBar.badge4') },
  ]
  return (
    <section className="relative -mt-2 pb-4 bg-background" aria-label="Trust signals">
      <div className="container-renova">
        <AnimatedSection animation="fade-up">
          <div className="relative bg-primary rounded-2xl shadow-depth-lg px-6 py-8 md:px-10 md:py-10 -translate-y-10 md:-translate-y-14 overflow-hidden">
            {/* Subtle panel decoration */}
            <Ring tone="light" className="w-36 h-36 -left-12 -bottom-16" animate="animate-float-slow" />
            <DotGrid tone="light" className="w-40 h-24 right-6 -top-4 opacity-25" size={16} />
            <dl className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {badges.map((badge) => (
                <div key={badge.label} className="text-center">
                  <div className="flex justify-center mb-3">
                    <badge.icon className="w-8 h-8 text-accent-light" aria-hidden="true" />
                  </div>
                  <dt className="text-sm md:text-base text-white font-medium uppercase tracking-wide">
                    {badge.label}
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
