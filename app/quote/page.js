'use client'

import PageHeader from "@/components/shell/PageHeader"
import Link from "next/link"
import QuoteForm from "@/components/forms/QuoteForm"
import AnimatedSection from "@/components/ui/AnimatedSection"
import { Clock, UserCheck, FileCheck2, ArrowRight } from "lucide-react"
import { useLanguage } from "@/components/i18n/LanguageProvider"

export default function QuotePage() {
  const { t } = useLanguage()
  const reassurance = [
    { icon: Clock, title: t('page.quote.reassurance.time.title'), text: t('page.quote.reassurance.time.text') },
    { icon: UserCheck, title: t('page.quote.reassurance.contact.title'), text: t('page.quote.reassurance.contact.text') },
    { icon: FileCheck2, title: t('page.quote.reassurance.noObligation.title'), text: t('page.quote.reassurance.noObligation.text') },
  ]

  return (
    <>
    <PageHeader title={t('nav.requestQuote')} breadcrumbs={[{ label: t('nav.requestQuote') }]} />
      <section className="section-padding bg-background">
        <div className="container-renova">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <AnimatedSection animation="fade-up" className="lg:col-span-2">
              <QuoteForm />
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={150} className="lg:col-span-1">
              <div className="lg:sticky lg:top-28 space-y-4">
                {reassurance.map((item) => (
                  <div key={item.title} className="flex items-start gap-4 bg-surface border border-border rounded-2xl p-5 shadow-sm">
                    <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-accent" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-primary">{item.title}</h3>
                      <p className="mt-1 text-sm text-secondary leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
                <div className="bg-primary rounded-2xl p-6 text-white">
                  <h3 className="font-heading font-semibold">{t('page.quote.preferToTalk')}</h3>
                  <p className="mt-2 text-sm text-white/70 leading-relaxed">
                    {t('page.quote.preferToTalk.email')} <a href="mailto:info@renovatrade.fi" className="text-accent-light hover:underline">info@renovatrade.fi</a> {t('page.quote.preferToTalk.call')} <a href="tel:+358413171469" className="text-accent-light hover:underline">+358 41 317 1469</a>.
                  </p>
                  <Link href="/faq" className="mt-4 inline-flex items-center gap-2 text-accent-light font-semibold text-sm link-draw">
                    {t('page.quote.faqLink')}
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  )
}
