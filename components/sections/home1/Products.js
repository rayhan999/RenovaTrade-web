'use client'

import Link from "next/link"
import { ArrowRight, Recycle, Forklift, Cog } from "lucide-react"
import SectionTitle from "@/components/ui/SectionTitle"
import AnimatedSection from "@/components/ui/AnimatedSection"
import { useLanguage } from "@/components/i18n/LanguageProvider"

/**
 * Homepage "Services & Solutions" preview — first 3 of the 10-tile catalog
 * at /services-and-solutions with a "Show more" CTA pointing there.
 *
 * This section unifies the homepage's old Products and Core Services
 * sections into a single 3-tile preview, matching the canonical
 * "Services & Solutions" identity on the catalog page.
 *
 * The 3 tiles below are the catalog's first 3 entries: Metal Scrap,
 * Heavy Equipment, Industrial Machinery. They are product tiles by
 * coincidence — the catalog's first 3 positions are all products, with
 * the 3 Core Service tiles appended at positions 8–10. The SectionTitle
 * "Our Services & Solutions" intentionally covers the wider catalog, so
 * the 3 visible tile labels read as products while the section title and
 * "Show more" destination span both.
 *
 * Filename & default export stay as `Products` to minimize file-system
 * churn; the SectionTitle + CTA copy carry the conceptual rename. Full
 * 10-tile catalog lives at /services-and-solutions.
 */
export default function Products() {
  const { t } = useLanguage()
  const products = [
    { title: t('product.1.title'), description: t('product.1.text'), link: "/services/metal-scrap-trading", image: "/assets/real-images/real-scrap-yard-hero-01.jpg", icon: Recycle },
    { title: t('product.2.title'), description: t('product.2.text'), link: "/services/heavy-equipment", image: "/assets/real-images/real-forklift-yard-01.jpg", icon: Forklift },
    { title: t('product.3.title'), description: t('product.3.text'), link: "/services/heavy-equipment", image: "/assets/real-images/real-reach-stacker-01.jpg", icon: Cog },
  ]
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="relative container-renova">
        <AnimatedSection animation="fade-up">
          <SectionTitle
            tagline={t('home.products.tagline')}
            title={t('home.products.title')}
            description={t('home.products.description')}
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <AnimatedSection
              key={product.title}
              animation="fade-up"
              delay={index * 80}
            >
              <Link
                href={product.link}
                aria-label={product.title}
                className="group relative block h-72 md:h-80 rounded-2xl overflow-hidden shadow-md hover:shadow-depth-lg transition-shadow duration-300"
              >
                {/* Full-bleed image */}
                <img
                  src={product.image}
                  alt={product.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Navy scrim for legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/95 via-primary/50 to-primary/10 transition-opacity duration-300 group-hover:from-primary-dark/95 group-hover:via-primary/60" aria-hidden="true" />

                {/* Index watermark */}
                <span
                  className="absolute top-3 right-5 font-heading text-6xl font-bold text-white/10 group-hover:text-accent-light/25 transition-colors duration-300 select-none"
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Frosted-glass icon chip */}
                <div className="absolute top-4 left-4 w-11 h-11 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-all duration-300 group-hover:bg-accent group-hover:border-accent">
                  <product.icon className="w-5 h-5" aria-hidden="true" />
                </div>

                {/* Bottom-anchored content */}
                <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                  <h3 className="text-lg md:text-xl font-heading font-semibold text-white leading-snug">
                    {product.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-white/70 leading-relaxed line-clamp-2">
                    {product.description}
                  </p>
                </div>

                {/* Accent underline draws on hover */}
                <span
                  className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-steel to-accent-light transition-all duration-500 ease-out group-hover:w-full"
                  aria-hidden="true"
                />
              </Link>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fade-up" className="mt-10 text-center">
          <Link
            href="/services-and-solutions"
            className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
          >
            {t('home.products.showMore')}
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}
