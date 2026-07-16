'use client'

import PageHeader from "@/components/shell/PageHeader"
import SectionTitle from "@/components/ui/SectionTitle"
import AnimatedSection from "@/components/ui/AnimatedSection"
import TiltCard from "@/components/ui/TiltCard"
import Cta from "@/components/sections/home1/Cta"
import TradeCorridor from "@/components/sections/home1/TradeCorridor"
import { useLanguage } from "@/components/i18n/LanguageProvider"
import {
  Factory, Ship, HardHat, Recycle, Warehouse, Zap, Wrench, Building2, Container, Cog,
} from "lucide-react"

export default function IndustriesPage() {
  const { t } = useLanguage()
  const industries = [
    { icon: Factory, name: t('industries.steel.name'), text: t('industries.steel.text') },
    { icon: Recycle, name: t('industries.recycling.name'), text: t('industries.recycling.text') },
    { icon: Ship, name: t('industries.ports.name'), text: t('industries.ports.text') },
    { icon: HardHat, name: t('industries.construction.name'), text: t('industries.construction.text') },
    { icon: Warehouse, name: t('industries.logistics.name'), text: t('industries.logistics.text') },
    { icon: Cog, name: t('industries.manufacturing.name'), text: t('industries.manufacturing.text') },
    { icon: Zap, name: t('industries.energy.name'), text: t('industries.energy.text') },
    { icon: Container, name: t('industries.shipbreaking.name'), text: t('industries.shipbreaking.text') },
    { icon: Building2, name: t('industries.trading.name'), text: t('industries.trading.text') },
    { icon: Wrench, name: t('industries.engineering.name'), text: t('industries.engineering.text') },
  ]

  return (
    <>
    <PageHeader title={t('nav.industries')} breadcrumbs={[{ label: t('nav.industries') }]} />
      <section className="section-padding bg-surface">
        <div className="container-renova">
          <AnimatedSection animation="fade-up">
            <SectionTitle
              tagline={t('page.industries.tagline')}
              title={t('page.industries.title')}
              description={t('page.industries.description')}
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <AnimatedSection key={industry.name} animation="fade-up" delay={index * 60}>
                <TiltCard className="h-full">
                  <div className="group h-full bg-background border border-border rounded-2xl p-6 shadow-sm hover:shadow-depth hover:border-accent/30 transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-primary/5 group-hover:bg-accent/10 flex items-center justify-center mb-5 transition-colors duration-300">
                      <industry.icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors duration-300" aria-hidden="true" />
                    </div>
                    <h3 className="text-lg font-heading font-semibold text-primary mb-2">
                      {industry.name}
                    </h3>
                    <p className="text-sm text-secondary leading-relaxed">
                      {industry.text}
                    </p>
                  </div>
                </TiltCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <TradeCorridor />
      <Cta />
    </>
  )
}
