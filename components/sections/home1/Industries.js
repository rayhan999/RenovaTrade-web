'use client'

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import SectionTitle from "@/components/ui/SectionTitle"
import AnimatedSection from "@/components/ui/AnimatedSection"
import { Blob, Ring } from "@/components/ui/Decor"
import { useLanguage } from "@/components/i18n/LanguageProvider"
import {
  Factory,
  Ship,
  HardHat,
  Recycle,
  Warehouse,
  Zap,
  Wrench,
  Building2,
  Container,
  Cog,
} from "lucide-react"

export default function Industries() {
  const { t } = useLanguage()
  const industries = [
    { icon: Factory, name: t('industries.steel.name') },
    { icon: Recycle, name: t('industries.recycling.name') },
    { icon: Ship, name: t('industries.ports.name') },
    { icon: HardHat, name: t('industries.construction.name') },
    { icon: Warehouse, name: t('industries.logistics.name') },
    { icon: Cog, name: t('industries.manufacturing.name') },
    { icon: Zap, name: t('industries.energy.name') },
    { icon: Container, name: t('industries.shipbreaking.name') },
  ]
  return (
    <section className="section-padding bg-background relative overflow-hidden" aria-labelledby="industries-heading">
      {/* Ambient decorative shapes */}
      <Blob color="eco" className="w-96 h-96 -bottom-32 -right-24" animate="animate-sway" />
      <Ring className="w-24 h-24 left-[6%] top-16" animate="animate-float" />

      <div className="relative container-renova">
        <AnimatedSection animation="fade-up">
          <SectionTitle
            tagline={t('home.industries.tagline')}
            title={t('home.industries.title')}
            description={t('home.industries.description')}
          />
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {industries.slice(0, 8).map((industry, index) => (
            <AnimatedSection key={industry.name} animation="fade-up" delay={index * 60}>
              <div className="group h-full bg-surface border border-border rounded-2xl p-5 md:p-6 text-center shadow-sm hover:shadow-depth hover:border-accent/30 hover:-translate-y-1 transition-all duration-300">
                <div className="mx-auto w-12 h-12 rounded-xl bg-primary/5 group-hover:bg-accent/10 flex items-center justify-center transition-colors duration-300">
                  <industry.icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors duration-300" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-sm md:text-base font-heading font-semibold text-primary leading-snug">
                  {industry.name}
                </h3>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fade-up" delay={200} className="mt-10 text-center">
          <Link href="/industries" className="inline-flex items-center gap-2 text-accent font-semibold link-draw">
            {t('home.industries.seeAll')}
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}
