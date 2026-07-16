'use client'

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import SectionTitle from "@/components/ui/SectionTitle"
import AnimatedSection from "@/components/ui/AnimatedSection"
import ProcessTimeline from "@/components/process/ProcessTimeline"
import { ShapeField, Ring, Diamond } from "@/components/ui/Decor"
import { useLanguage } from "@/components/i18n/LanguageProvider"

export default function Process() {
  const { t } = useLanguage()
  return (
    <section className="section-padding bg-surface relative overflow-hidden" aria-labelledby="process-heading">
      <ShapeField variant="light" density="minimal" />
      <Ring className="w-24 h-24 right-[6%] top-20 hidden md:block" animate="animate-float" parallax={0.1} />
      <Diamond className="w-3 h-3 left-[8%] bottom-24 hidden md:block" animate="animate-bob-y" parallax={0.06} />

      <div className="relative container-renova">
        <AnimatedSection animation="fade-up">
          <SectionTitle
            tagline={t('home.process.tagline')}
            title={t('home.process.title')}
            description={t('home.process.description')}
            accent
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
