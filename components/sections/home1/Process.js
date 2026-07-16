'use client'

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import SectionTitle from "@/components/ui/SectionTitle"
import AnimatedSection from "@/components/ui/AnimatedSection"
import ProcessTimeline from "@/components/process/ProcessTimeline"
import { useLanguage } from "@/components/i18n/LanguageProvider"

export default function Process() {
  const { t } = useLanguage()
  return (
    <section className="section-padding bg-surface" aria-labelledby="process-heading">
      <div className="container-renova">
        <AnimatedSection animation="fade-up">
          <SectionTitle
            tagline={t('home.process.tagline')}
            title={t('home.process.title')}
            description={t('home.process.description')}
          />
        </AnimatedSection>

        <ProcessTimeline />

        <AnimatedSection animation="fade-up" delay={150} className="mt-12 text-center">
          <Link href="/how-we-work" className="inline-flex items-center gap-2 text-accent font-semibold link-draw">
            {t('home.process.seeFull')}
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}
