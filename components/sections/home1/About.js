'use client'

import { Check, ArrowRight } from "lucide-react"
import SectionTitle from "@/components/ui/SectionTitle"
import Button from "@/components/ui/Button"
import AnimatedSection from "@/components/ui/AnimatedSection"
import { DotGrid, Ring } from "@/components/ui/Decor"
import { useLanguage } from "@/components/i18n/LanguageProvider"

export default function About() {
  const { t } = useLanguage()
  const points = [
    t('home.about.point1'),
    t('home.about.point2'),
    t('home.about.point3'),
  ]
  return (
    <section className="section-padding bg-background">
      <div className="container-renova">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image side */}
          <AnimatedSection animation="fade-left" className="relative">
            {/* Decorative frame shapes behind the photo */}
            <DotGrid className="w-40 h-40 -top-6 -left-6 hidden md:block" aria-hidden="true" />
            <Ring className="w-28 h-28 -bottom-8 -right-8 hidden md:block" animate="animate-float-slow" />
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/assets/images/resources/about_us.jpg"
                alt="Renova Trade industrial operations"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>
          </AnimatedSection>

          {/* Content side */}
          <AnimatedSection animation="fade-right" delay={150} className="lg:pl-8">
            <SectionTitle
              tagline={t('home.about.tagline')}
              title={t('home.about.title')}
              description={t('home.about.description')}
              align="left"
              className="mb-8"
            />
            <p className="text-secondary leading-relaxed mb-6">
              {t('home.about.body')}
            </p>
            <ul className="space-y-4 mb-8">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-accent" aria-hidden="true" />
                  </div>
                  <span className="text-primary font-medium">{point}</span>
                </li>
              ))}
            </ul>
            <Button href="/about" variant="primary">
              {t('home.about.cta')}
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Button>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
