'use client'

import Link from "next/link"
import { ArrowRight, Recycle, Truck, Globe } from "lucide-react"
import SectionTitle from "@/components/ui/SectionTitle"
import AnimatedSection from "@/components/ui/AnimatedSection"
import TiltCard from "@/components/ui/TiltCard"
import { Blob, Ring, Diamond } from "@/components/ui/Decor"
import { useLanguage } from "@/components/i18n/LanguageProvider"

export default function Service() {
  const { t } = useLanguage()
  const services = [
    {
      title: t('services.metalScrap.title'),
      text: t('services.metalScrap.text'),
      image: "/assets/real_Images/real-port-cranes-yards-01.jpg",
      link: "/services/metal-scrap-trading",
      icon: Recycle,
      highlights: [t('services.metalScrap.highlight1'), t('services.metalScrap.highlight2'), t('services.metalScrap.highlight3'), t('services.metalScrap.highlight4')],
    },
    {
      title: t('services.heavyEquipment.title'),
      text: t('services.heavyEquipment.text'),
      image: "/assets/real_Images/real-shredder-line-01.jpg",
      link: "/services/heavy-equipment",
      icon: Truck,
      highlights: [t('services.heavyEquipment.highlight1'), t('services.heavyEquipment.highlight2'), t('services.heavyEquipment.highlight3'), t('services.heavyEquipment.highlight4')],
    },
    {
      title: t('services.sourcing.title'),
      text: t('services.sourcing.text'),
      image: "/assets/real_Images/real-container-scrap-01.jpg",
      link: "/services/international-sourcing",
      icon: Globe,
      highlights: [t('services.sourcing.highlight1'), t('services.sourcing.highlight2'), t('services.sourcing.highlight3'), t('services.sourcing.highlight4')],
    },
  ]
  return (
    <section className="section-padding bg-surface relative overflow-hidden">
      {/* Ambient decorative shapes */}
      <Blob color="steel" className="w-[28rem] h-[28rem] -top-32 -left-32" animate="animate-sway" />
      <Ring className="w-32 h-32 -right-10 top-24" animate="animate-float-slow" />
      <Diamond className="w-3.5 h-3.5 left-[10%] bottom-[15%]" animate="animate-float" />

      <div className="relative container-renova">
        <AnimatedSection animation="fade-up">
          <SectionTitle
            tagline={t('home.service.tagline')}
            title={t('home.service.title')}
            description={t('home.service.description')}
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedSection key={service.title} animation="fade-up" delay={index * 100}>
              <TiltCard className="h-full">
                <Link
                  href={service.link}
                  aria-label={`Learn more about ${service.title}`}
                  className="group flex flex-col bg-background rounded-2xl overflow-visible shadow-md hover:shadow-depth-lg transition-shadow duration-300 h-full"
                >
                  <div className="relative h-48">
                    <div className="absolute inset-0 overflow-hidden rounded-t-2xl">
                      <img
                        src={service.image}
                        alt={service.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    {/* Floating icon chip — centered on the image/text boundary */}
                    <div className="absolute left-6 bottom-0 translate-y-1/2 w-12 h-12 rounded-xl bg-accent text-white flex items-center justify-center shadow-accent-glow transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 z-10">
                      <service.icon className="w-6 h-6" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="p-6 pt-10 flex flex-col flex-1">
                    <h3 className="text-xl font-heading font-semibold text-primary mb-3 group-hover:text-accent transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-secondary text-sm leading-relaxed mb-4">
                      {service.text}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {service.highlights.map((tag) => (
                        <span key={tag} className="text-xs font-medium text-secondary bg-muted rounded-full px-2.5 py-1">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="mt-auto inline-flex items-center gap-1 text-accent font-semibold text-sm group-hover:gap-2 transition-all">
                      {t('home.service.learnMore')}
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              </TiltCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
