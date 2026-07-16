import Link from "next/link"
import { Calendar, ArrowRight } from "lucide-react"
import SectionTitle from "@/components/ui/SectionTitle"
import AnimatedSection from "@/components/ui/AnimatedSection"
import { posts as allPosts } from "@/lib/posts"

// Latest three from the shared insights hub data (placeholder-marked there).
const posts = allPosts.slice(0, 3)

export default function Blog() {
  return (
    <section className="section-padding bg-background">
      <div className="container-renova">
        <AnimatedSection animation="fade-up">
          <SectionTitle
            tagline="News & Market Insights"
            title="Industry Insights & Updates"
            description="Stay informed with the latest trends, market updates, and best practices in international trade."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <AnimatedSection
              key={post.title}
              animation="fade-up"
              delay={index * 100}
            >
              <Link
                href={post.href}
                className="group block bg-surface rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-secondary text-sm mb-3">
                    <Calendar className="w-4 h-4" aria-hidden="true" />
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-primary mb-3 group-hover:text-accent transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-secondary text-sm leading-relaxed mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1 text-accent font-semibold text-sm group-hover:gap-2 transition-all">
                    Read More
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
