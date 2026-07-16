'use client'

import PageHeader from "@/components/shell/PageHeader"
import Link from "next/link"
import { Calendar, User, ArrowLeft } from "lucide-react"
import Cta from "@/components/sections/home1/Cta"
import AnimatedSection from "@/components/ui/AnimatedSection"
import { useLanguage } from "@/components/i18n/LanguageProvider"

const recentPosts = [
  { title: "Sourcing Heavy Equipment from Europe: What Buyers Should Know", href: "/blog-details", image: "/assets/images/blog/blog-1-2.jpg" },
  { title: "Building Reliable Supply Chains Between Europe and South Asia", href: "/blog-details", image: "/assets/images/blog/blog-1-3.jpg" },
]

export default function BlogDetailsPage() {
  const { t } = useLanguage()
  return (
    <>
    <PageHeader title={t('page.blogDetails.backToNews')} breadcrumbs={[{ label: t('page.blogDetails.backToNews') }]} />
      <article className="section-padding bg-surface">
        <div className="container-renova">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <AnimatedSection animation="fade-left" className="lg:col-span-2">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-accent hover:text-accent-dark font-medium mb-6"
              >
                <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                {t('page.blogDetails.backToNews')}
              </Link>

              <div className="bg-background rounded-2xl overflow-hidden shadow-md">
                <img
                  src="/assets/images/blog/blog-1-1.jpg"
                  alt="Global metal scrap market trends"
                  className="w-full h-80 object-cover"
                />
                <div className="p-8">
                  <div className="flex flex-wrap items-center gap-4 text-secondary text-sm mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" aria-hidden="true" />
                      <span>15 Oct 2024</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" aria-hidden="true" />
                      <span>Renova Trade</span>
                    </div>
                  </div>

                  <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
                    Global Metal Scrap Market Trends for 2024
                  </h1>

                  <div className="max-w-none text-secondary leading-relaxed space-y-4">
                    <p>
                      The global metal scrap market continues to evolve in 2024, shaped by shifting supply chains, energy transition policies, and changing demand patterns across major economies. For buyers and sellers in South Asia, understanding these trends is essential for making informed procurement decisions.
                    </p>
                    <p>
                      Ferrous scrap prices have remained volatile throughout the year, responding to fluctuations in steel production, construction activity, and currency movements. European suppliers have maintained steady flows of HMS and shredded scrap, though tighter environmental regulations have increased processing and documentation requirements.
                    </p>
                    <p>
                      Non-ferrous scrap markets have shown more resilience. Copper and aluminum scrap continue to benefit from electrification trends, while stainless steel and brass scrap remain in steady demand across manufacturing sectors. Buyers who work with verified European suppliers are better positioned to secure consistent quality and competitive pricing.
                    </p>
                    <p>
                      At Renova Trade, we monitor these market dynamics closely to help our customers source the right materials at the right time. Our focus on transparency, supplier verification, and logistics coordination ensures that our partners can navigate market uncertainty with confidence.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-right" delay={150} className="lg:col-span-1">
              <aside className="bg-background rounded-2xl p-6 shadow-md">
                <h3 className="text-lg font-heading font-semibold text-primary mb-4">
                  {t('page.blogDetails.recentPosts')}
                </h3>
                <ul className="space-y-4">
                  {recentPosts.map((post) => (
                    <li key={post.title}>
                      <Link
                        href={post.href}
                        className="group flex items-start gap-4"
                      >
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                        />
                        <span className="text-sm font-medium text-primary group-hover:text-accent transition-colors line-clamp-2">
                          {post.title}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </aside>
            </AnimatedSection>
          </div>
        </div>
      </article>
      <Cta />
    </>
  )
}
