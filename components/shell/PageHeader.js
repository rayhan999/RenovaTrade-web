import Link from "next/link"
import { Ring, Diamond, DotGrid } from "@/components/ui/Decor"

export default function PageHeader({ title, breadcrumbs = [] }) {
  return (
    <section className="relative bg-primary py-20 md:py-28 overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url(/assets/images/backgrounds/renova_banner_1.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />

      {/* Decorative shapes (echo of the old template's page-header shapes) */}
      <Ring tone="light" className="w-48 h-48 -right-12 -top-16" animate="animate-float-slow" />
      <Ring tone="light" className="w-24 h-24 right-[18%] bottom-6 border" animate="animate-float" />
      <Diamond tone="light" className="w-3 h-3 right-[32%] top-10" animate="animate-sway" />
      <DotGrid tone="light" className="w-56 h-32 left-[55%] bottom-0 opacity-30 hidden md:block" />

      <div className="relative container-renova">
        <div className="max-w-3xl">
          <nav className="flex items-center gap-2 text-sm text-white/70 mb-4" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            {breadcrumbs.map((crumb, index) => (
              <span key={index} className="flex items-center gap-2">
                <span className="text-white/40">/</span>
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-white transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-white">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white">
            {title}
          </h1>
        </div>
      </div>
    </section>
  )
}
