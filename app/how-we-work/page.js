'use client'

import PageHeader from "@/components/shell/PageHeader"
import Link from "next/link"
import SectionTitle from "@/components/ui/SectionTitle"
import AnimatedSection from "@/components/ui/AnimatedSection"
import ProcessTimeline from "@/components/process/ProcessTimeline"
import Cta from "@/components/sections/home1/Cta"
import { FileText, Ship, CreditCard, ArrowRight } from "lucide-react"
import { useLanguage } from "@/components/i18n/LanguageProvider"

export default function HowWeWorkPage() {
  const { t } = useLanguage()
  const tradeFacts = [
    {
      icon: Ship,
      title: t('page.howWeWork.tradeTerms.title'),
      items: [
        "FOB (Free On Board) — you arrange main freight; we deliver cleared cargo on board at the European port.",
        "CFR (Cost & Freight) — we book and pay ocean freight to your named South Asian port.",
        "CIF (Cost, Insurance & Freight) — as CFR, plus marine cargo insurance arranged by us.",
        "Other terms (EXW, FCA, CPT) available by agreement for specific cargo.",
      ],
    },
    {
      icon: CreditCard,
      title: t('page.howWeWork.tradeTerms.title'),
      items: [
        "Irrevocable Letter of Credit (L/C) at sight — our standard for new relationships.",
        "Telegraphic Transfer (T/T) — deposit + balance against shipping documents, for established clients.",
        "All terms confirmed in the sales contract before any cargo is booked.",
      ],
    },
    {
      icon: FileText,
      title: t('page.howWeWork.tradeTerms.title'),
      items: [
        "Renova Trade provides: commercial invoice, packing list, bill of lading, certificate of origin, and pre-shipment inspection certificate where required.",
        "Renova Trade manages: EU export declaration and waste-shipment notifications for regulated scrap movements.",
        "Client handles: import license/IRC, L/C opening, destination customs clearance, and local duties & taxes.",
        "We share document drafts before shipment so your bank and customs broker can verify everything in advance.",
      ],
    },
  ]

  return (
    <>
    <PageHeader title={t('nav.howWeWork')} breadcrumbs={[{ label: t('nav.howWeWork') }]} />
      <section className="section-padding bg-surface">
        <div className="container-renova">
          <AnimatedSection animation="fade-up">
            <SectionTitle
              tagline={t('home.process.tagline')}
              title={t('home.process.title')}
              description={t('home.process.description')}
            />
          </AnimatedSection>
          <ProcessTimeline />
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-renova">
          <AnimatedSection animation="fade-up">
            <SectionTitle
              tagline={t('home.corridor.tagline')}
              title={t('page.howWeWork.tradeTerms.title')}
              description={t('page.howWeWork.tradeTerms.description')}
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {tradeFacts.map((fact, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                <div className="h-full bg-surface border border-border rounded-2xl p-8 shadow-md hover:shadow-depth transition-shadow duration-300">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                    <fact.icon className="w-6 h-6 text-accent" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-primary mb-4">{fact.title}</h3>
                  <ul className="space-y-3">
                    {fact.items.map((item) => (
                      <li key={item} className="text-sm text-secondary leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-accent/60">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection animation="fade-up" delay={200}>
            <div className="mt-12 bg-primary rounded-2xl p-8 md:p-10 text-center shadow-depth-lg">
              <h3 className="text-2xl font-heading font-bold text-white">{t('page.howWeWork.leadTimes.title')}</h3>
              <p className="mt-4 text-white/80 max-w-3xl mx-auto leading-relaxed">
                {t('page.howWeWork.leadTimes.text')} <strong className="text-accent-light">{t('page.howWeWork.leadTimes.scrap')}</strong> {t('home.service.text')} <strong className="text-accent-light">{t('page.howWeWork.leadTimes.equipment')}</strong> {t('home.service.text')} <strong className="text-accent-light">{t('page.howWeWork.leadTimes.transit')}</strong> {t('home.corridor.description')} <strong className="text-accent-light">{t('page.howWeWork.leadTimes.quote')}</strong>
              </p>
              <p className="mt-3 text-xs text-white/50">
                {t('page.howWeWork.leadTimes.note')}
              </p>
              <Link
                href="/faq"
                className="mt-6 inline-flex items-center gap-2 text-accent-light font-semibold link-draw"
              >
                {t('page.howWeWork.leadTimes.faq')}
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Cta />
    </>
  )
}
