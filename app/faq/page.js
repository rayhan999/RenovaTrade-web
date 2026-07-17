'use client'

import PageHeader from "@/components/shell/PageHeader"
import Link from "next/link"
import SectionTitle from "@/components/ui/SectionTitle"
import AnimatedSection from "@/components/ui/AnimatedSection"
import FaqAccordion from "@/components/faq/FaqAccordion"
import Cta from "@/components/sections/home1/Cta"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/components/i18n/LanguageProvider"

export default function FaqPage() {
  const { t } = useLanguage()
  const faqs = [
    { q: "Which Incoterms do you trade on?", a: "Most of our contracts are FOB (European port of loading), CFR, or CIF to a South Asian port of discharge. FOB suits buyers with their own freight arrangements; CFR/CIF means we book the ocean freight — and under CIF we also arrange marine cargo insurance. EXW, FCA, or CPT can be agreed for specific cargo. All references are to Incoterms 2020." },
    { q: "How long from quote to delivery?", a: "A complete requirement normally gets a quotation within 3–5 business days. After order confirmation, scrap cargo typically ships within 2–4 weeks and inspected heavy equipment within 3–6 weeks. Ocean transit from Northern Europe to South Asian ports adds roughly 4–6 weeks depending on routing. These are indicative ranges; the contract states committed dates." },
    { q: "What payment terms do you accept?", a: "Our standard for new relationships is an irrevocable Letter of Credit at sight from a recognized bank. For established clients we also work with telegraphic transfer (T/T) — usually a deposit with the balance against copies of shipping documents. Terms are always fixed in the sales contract before cargo is booked." },
    { q: "Which documents do you provide, and what do we handle as the buyer?", a: "Renova Trade prepares the commercial invoice, packing list, bill of lading, certificate of origin, and — where required — a pre-shipment inspection certificate, plus the EU export declaration and any waste-shipment notifications for regulated scrap. As the buyer, you handle your import registration/license, L/C opening, destination customs clearance, and local duties. We share document drafts before shipment so your bank and broker can verify them in advance." },
    { q: "Can we inspect the material or equipment before shipment?", a: "Yes — and we encourage it. For scrap, we support third-party inspection (e.g. loading supervision and weighbridge verification). For equipment, we arrange independent condition reports, photos, videos, and where practical, live video walkarounds before you commit." },
    { q: "What quantities can you supply?", a: "Scrap shipments typically start from single 20-ft container lots and scale to regular monthly programs; break-bulk is possible for structural and railway scrap. Equipment is sourced per unit or in fleet packages. Tell us your target volume and we will confirm feasibility with suppliers." },
    { q: "How do you make sure scrap quality matches the contract?", a: "Contracts reference international specifications (ISRI or equivalent EU grading terminology) with agreed tolerance for contamination. Suppliers are vetted before we offer their material, and loading photos, weighbridge tickets, and inspection reports document each shipment." },
    { q: "Is importing European scrap compliant with export regulations?", a: "Cross-border scrap movements from the EU are regulated under the EU Waste Shipment Regulation. We prepare shipments in line with those requirements, including notifications where applicable, and provide the paperwork your customs authority expects." },
    { q: "How do we start?", a: "Send your requirement through the quote form — product category, specification, quantity, and destination. You will get a named contact, follow-up questions if anything is unclear, and a structured quotation you can compare like for like." },
  ]

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((f) => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a },
    })),
  }

  return (
    <>
    <PageHeader title={t('nav.faq')} breadcrumbs={[{ label: t('nav.faq') }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className="section-padding bg-background">
        <div className="container-renova max-w-4xl">
          <AnimatedSection animation="fade-up">
            <SectionTitle
              tagline={t('page.faq.tagline')}
              title={t('page.faq.title')}
              description={t('page.faq.description')}
            />
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={100}>
            <FaqAccordion items={faqs} />
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={150} className="mt-12 text-center">
            <p className="text-secondary">
              {t('page.faq.notFound')}
            </p>
            <Link href="/contact" className="mt-2 inline-flex items-center gap-2 text-accent font-semibold link-draw">
              {t('page.faq.askDirectly')}
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
      <Cta />
    </>
  )
}
