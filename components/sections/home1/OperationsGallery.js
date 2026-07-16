'use client'

import SectionTitle from "@/components/ui/SectionTitle"
import AnimatedSection from "@/components/ui/AnimatedSection"
import PhotoPlaceholder from "@/components/ui/PhotoPlaceholder"
import { useLanguage } from "@/components/i18n/LanguageProvider"

const shots = [
  { label: "Scrap yard loading at a European supplier facility", aspect: "aspect-[4/3]" },
  { label: "Container stuffing / weighbridge documentation", aspect: "aspect-[4/3]" },
  { label: "Port of loading — Nordic/Baltic terminal", aspect: "aspect-[4/3]" },
  { label: "Heavy equipment pre-shipment inspection", aspect: "aspect-[4/3]" },
  { label: "Vessel loading or transit", aspect: "aspect-[4/3]" },
  { label: "Delivery at Chattogram / client site", aspect: "aspect-[4/3]" },
]

export default function OperationsGallery() {
  const { t } = useLanguage()

  return (
    <section className="section-padding bg-background" aria-labelledby="operations-heading">
      <div className="container-renova">
        <AnimatedSection animation="fade-up">
          <SectionTitle
            tagline={t('home.gallery.tagline')}
            title={t('home.gallery.title')}
            description={t('home.gallery.description')}
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {shots.map((shot, index) => (
            <AnimatedSection key={shot.label} animation="fade-up" delay={index * 80}>
              <PhotoPlaceholder label={shot.label} aspect={shot.aspect} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
