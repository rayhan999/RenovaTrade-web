'use client'

import PageHeader from "@/components/shell/PageHeader"
import Link from "next/link"
import { ArrowUpRight, Recycle, Forklift, Cog, Package, Wrench, CircuitBoard, Search } from "lucide-react"
import SectionTitle from "@/components/ui/SectionTitle"
import AnimatedSection from "@/components/ui/AnimatedSection"
import Cta from "@/components/sections/home1/Cta"
import { Blob, Ring, Diamond } from "@/components/ui/Decor"
import { useLanguage } from "@/components/i18n/LanguageProvider"

/**
 * Products — "catalog tile" design, deliberately DIFFERENT from the
 * Core Services cards (which are image-top + floating icon chip + tag row):
 * here each product is a full-bleed image tile with a navy gradient scrim,
 * a large index-number watermark, a frosted-glass icon chip, bottom-anchored
 * copy, a corner arrow, and an accent underline that draws on hover.
 * First tile is featured (2 columns) for editorial rhythm.
 */
export default function ProductsPage() {
    const { t } = useLanguage()
    const products = [
        { title: t('product.1.title'), description: t('product.1.text'), link: "/services/metal-scrap-trading", image: "/assets/images/services/service_1.jpeg", icon: Recycle },
        { title: t('product.2.title'), description: t('product.2.text'), link: "/services/heavy-equipment", image: "/assets/images/services/service_2.jpg", icon: Forklift },
        { title: t('product.3.title'), description: t('product.3.text'), link: "/services/heavy-equipment", image: "/assets/images/services/service_3.jpg", icon: Cog },
        { title: t('product.4.title'), description: t('product.4.text'), link: "/services/heavy-equipment", image: "/assets/images/services/services-1-1.jpg", icon: Package },
        { title: t('product.5.title'), description: t('product.5.text'), link: "/services/international-sourcing", image: "/assets/images/services/services-1-2.jpg", icon: Wrench },
        { title: t('product.6.title'), description: t('product.6.text'), link: "/services/international-sourcing", image: "/assets/images/services/services-1-3.jpg", icon: CircuitBoard },
        { title: t('product.7.title'), description: t('product.7.text'), link: "/services/international-sourcing", image: "/assets/images/services/services-1-4.jpg", icon: Search },
    ]

    return (
        <>
        <PageHeader title={t('nav.products')} breadcrumbs={[{ label: t('nav.products') }]} />
            <section className="section-padding bg-surface relative overflow-hidden">
                {/* Ambient shapes */}
                <Blob color="steel" className="w-96 h-96 -top-24 -right-24" animate="animate-sway" />
                <Ring className="w-40 h-40 -left-14 top-1/3" animate="animate-float-slow" />
                <Diamond className="w-4 h-4 right-[8%] bottom-[12%]" animate="animate-float" />

                <div className="relative container-renova">
                    <AnimatedSection animation="fade-up">
                        <SectionTitle
                            tagline={t('page.products.tagline')}
                            title={t('page.products.title')}
                            description={t('page.products.description')}
                        />
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {products.map((product, index) => (
                            <AnimatedSection
                                key={product.title}
                                animation="fade-up"
                                delay={index * 80}
                                className={index === 0 ? "md:col-span-2" : ""}
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
                                        <span className="mt-3 inline-flex items-center gap-1.5 text-accent-light font-semibold text-sm">
                                            {t('page.products.request')}
                                            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                                        </span>
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
                </div>
            </section>
            <Cta />
        </>
    )
}
