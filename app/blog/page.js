'use client'

import PageHeader from "@/components/shell/PageHeader"
import Link from "next/link"
import { Calendar, Clock, ArrowRight, Send } from "lucide-react"
import SectionTitle from "@/components/ui/SectionTitle"
import Cta from "@/components/sections/home1/Cta"
import AnimatedSection from "@/components/ui/AnimatedSection"
import SampleTag from "@/components/ui/SampleTag"
import { posts, categories } from "@/lib/posts"
import { useLanguage } from "@/components/i18n/LanguageProvider"

export default function BlogPage() {
  const { t } = useLanguage()
  const featured = posts.find((p) => p.featured) || posts[0]
  const rest = posts.filter((p) => p !== featured)

  return (
    <>
    <PageHeader title={t('page.blog.hubTitle')} breadcrumbs={[{ label: t('page.blog.hubTitle') }]} />
      <section className="section-padding bg-surface">
        <div className="container-renova">
          <AnimatedSection animation="fade-up">
            <SectionTitle
              tagline={t('page.blog.hubTagline')}
              title={t('page.blog.hubTitle')}
              description={t('page.blog.hubDescription')}
            />
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={80}>
            <div className="flex flex-wrap justify-center gap-2 mb-12" aria-label="Article categories">
              {categories.map((cat, i) => (
                <span
                  key={cat}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors duration-200 ${
                    i === 0
                      ? "bg-primary text-white border-primary"
                      : "bg-surface text-secondary border-border hover:border-accent/40 hover:text-accent"
                  }`}
                >
                  {cat}
                </span>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={120}>
            <Link
              href={featured.href}
              className="group grid grid-cols-1 lg:grid-cols-2 bg-background rounded-2xl overflow-hidden shadow-md hover:shadow-depth-lg transition-shadow duration-300 mb-12"
              aria-label={featured.title}
            >
              <div className="relative h-64 lg:h-auto overflow-hidden">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 bg-accent text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                  {t('page.blog.featured')}
                </span>
              </div>
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <div className="flex items-center flex-wrap gap-3 text-sm text-secondary mb-4">
                  <span className="text-accent font-semibold">{featured.category}</span>
                  <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" aria-hidden="true" />{featured.date}</span>
                  <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" aria-hidden="true" />{featured.readTime}</span>
                  {featured.sample && <SampleTag />}
                </div>
                <h3 className="text-2xl lg:text-3xl font-heading font-bold text-primary group-hover:text-accent transition-colors leading-tight">
                  {featured.title}
                </h3>
                <p className="mt-4 text-secondary leading-relaxed">{featured.excerpt}</p>
                <span className="mt-6 inline-flex items-center gap-1 text-accent font-semibold group-hover:gap-2 transition-all">
                  {t('common.readArticle')}
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </span>
              </div>
            </Link>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((post, index) => (
              <AnimatedSection key={post.title} animation="fade-up" delay={index * 80}>
                <Link
                  href={post.href}
                  aria-label={post.title}
                  className="group flex flex-col bg-background rounded-2xl overflow-hidden shadow-md hover:shadow-depth-lg hover:-translate-y-1 transition-all duration-300 h-full"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute top-4 left-4 bg-primary/85 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center flex-wrap gap-3 text-secondary text-xs mb-3">
                      <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" aria-hidden="true" />{post.date}</span>
                      <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" aria-hidden="true" />{post.readTime}</span>
                      {post.sample && <SampleTag />}
                    </div>
                    <h3 className="text-lg font-heading font-semibold text-primary mb-3 group-hover:text-accent transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-secondary text-sm leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <span className="mt-auto inline-flex items-center gap-1 text-accent font-semibold text-sm group-hover:gap-2 transition-all">
                      {t('common.readMore')}
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection animation="fade-up" delay={150}>
            <div className="mt-16 bg-primary rounded-2xl p-8 md:p-12 text-center shadow-depth-lg">
              <Send className="w-8 h-8 text-accent-light mx-auto mb-4" aria-hidden="true" />
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-white">
                {t('page.blog.newsletter.title')}
              </h3>
              <p className="mt-3 text-white/70 max-w-xl mx-auto">
                {t('page.blog.newsletter.text')}
              </p>
              <form className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <label htmlFor="hub-newsletter-email" className="sr-only">{t('page.blog.newsletter.emailLabel')}</label>
                <input
                  id="hub-newsletter-email"
                  type="email"
                  autoComplete="email"
                  placeholder={t('page.blog.newsletter.placeholder')}
                  className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-accent-light"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-accent-dark hover:shadow-accent-glow transition-all duration-200 cursor-pointer"
                >
                  {t('page.blog.newsletter.subscribe')}
                </button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </section>
      <Cta />
    </>
  )
}
