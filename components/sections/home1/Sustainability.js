'use client'

import { Recycle, Leaf, Factory, ArrowRight } from "lucide-react"
import Link from "next/link"
import AnimatedSection from "@/components/ui/AnimatedSection"
import CountUp from "@/components/ui/CountUp"
import SampleTag from "@/components/ui/SampleTag"
import { Ring, Diamond, DotGrid } from "@/components/ui/Decor"
import { useLanguage } from "@/components/i18n/LanguageProvider"

export default function Sustainability() {
  const { t } = useLanguage()
  const pillars = [
    { icon: Recycle, title: t('home.sustainability.pillar1.title'), text: t('home.sustainability.pillar1.text') },
    { icon: Leaf, title: t('home.sustainability.pillar2.title'), text: t('home.sustainability.pillar2.text') },
    { icon: Factory, title: t('home.sustainability.pillar3.title'), text: t('home.sustainability.pillar3.text') },
  ]
  return (
    <section className="section-padding bg-surface relative overflow-hidden" aria-labelledby="sustainability-heading">
      <Ring className="w-32 h-32 -right-10 top-20 hidden md:block" animate="animate-float-slow" parallax={0.1} />
      <Diamond className="w-3 h-3 left-[6%] top-[18%] hidden md:block" animate="animate-bob-y" parallax={0.06} />
      <DotGrid className="w-40 h-40 right-[8%] bottom-[12%] opacity-30 hidden md:block" parallax={-0.04} />

      <div className="relative container-renova">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <AnimatedSection animation="fade-left">
            <span className="inline-flex items-center gap-2 text-emerald-700 font-medium text-sm uppercase tracking-wider">
              <Leaf className="w-4 h-4" aria-hidden="true" />
              {t('home.sustainability.label')}
            </span>
            <h2 id="sustainability-heading" className="mt-3 text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary leading-tight">
              {t('home.sustainability.title')}
            </h2>
            <p className="mt-5 text-secondary leading-relaxed">
              {t('home.sustainability.body')}
            </p>
            <ul className="mt-8 space-y-6">
              {pillars.map((pillar) => (
                <li key={pillar.title} className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center flex-shrink-0">
                    <pillar.icon className="w-5 h-5 text-emerald-700" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-primary">{pillar.title}</h3>
                    <p className="mt-1 text-sm text-secondary leading-relaxed">{pillar.text}</p>
                  </div>
                </li>
              ))}
            </ul>
            <Link
              href="/services/metal-scrap-trading"
              className="mt-8 inline-flex items-center gap-2 text-accent font-semibold link-draw"
            >
              {t('home.sustainability.cta')}
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </AnimatedSection>

          {/* Visual + impact stat */}
          <AnimatedSection animation="fade-right" delay={150}>
            <div className="relative">
              <div className="rounded-2xl bg-primary p-8 md:p-10 shadow-depth-lg overflow-hidden relative">
                <div
                  className="absolute inset-0 opacity-[0.07]"
                  style={{
                    backgroundImage: "radial-gradient(circle, #70BC91 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }}
                  aria-hidden="true"
                />
                <div className="relative">
                  <Recycle className="w-10 h-10 text-eco mb-6" aria-hidden="true" />
                  <p className="text-white/80 leading-relaxed">
                    {t('home.sustainability.stat.intro')}
                  </p>
                  <div className="mt-4 space-y-4">
                    <div>
                      <span className="text-4xl md:text-5xl font-heading font-bold text-eco">
                        <CountUp end={1100} suffix=" kg" />
                      </span>
                      <p className="text-sm text-white/60 mt-1">{t('home.sustainability.stat.ore')}</p>
                    </div>
                    <div>
                      <span className="text-4xl md:text-5xl font-heading font-bold text-eco">
                        <CountUp end={58} suffix="%" />
                      </span>
                      <p className="text-sm text-white/60 mt-1">{t('home.sustainability.stat.co2')}</p>
                    </div>
                  </div>
                  <p className="mt-6 text-xs text-white/40">
                    {t('home.sustainability.stat.note')}
                  </p>
                  <div className="mt-3">
                    <SampleTag dark label={t('home.sustainability.stat.verify')} />
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
