'use client'

import { ShieldCheck, HeadphonesIcon, Globe2, Award } from "lucide-react"
import SectionTitle from "@/components/ui/SectionTitle"
import AnimatedSection from "@/components/ui/AnimatedSection"
import { useLanguage } from "@/components/i18n/LanguageProvider"

export default function Why() {
  const { t } = useLanguage()
  const reasons = [
    { icon: ShieldCheck, title: t('home.why.reason1.title'), text: t('home.why.reason1.text') },
    { icon: HeadphonesIcon, title: t('home.why.reason2.title'), text: t('home.why.reason2.text') },
    { icon: Globe2, title: t('home.why.reason3.title'), text: t('home.why.reason3.text') },
    { icon: Award, title: t('home.why.reason4.title'), text: t('home.why.reason4.text') },
  ]
  return (
    <section className="section-padding bg-primary relative overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "url(/assets/images/backgrounds/why-we-are-bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary-light" aria-hidden="true" />

      <div className="relative container-renova">
        <AnimatedSection animation="fade-up">
          <SectionTitle
            tagline={t('home.why.tagline')}
            title={t('home.why.title')}
            description={t('home.why.description')}
            dark
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <AnimatedSection
              key={reason.title}
              animation="fade-up"
              delay={index * 100}
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors duration-300 h-full">
                <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mb-5">
                  <reason.icon className="w-7 h-7 text-accent-light" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-white mb-3">
                  {reason.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {reason.text}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
