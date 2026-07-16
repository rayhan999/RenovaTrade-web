import Link from "next/link"
import { ArrowRight, Phone } from "lucide-react"

const services = [
  { title: "Metal Scrap Trading", href: "/services/metal-scrap-trading" },
  { title: "Heavy Equipment & Industrial Machinery", href: "/services/heavy-equipment" },
  { title: "International Sourcing & Procurement", href: "/services/international-sourcing" },
]

export default function ServiceSidebar({ currentHref }) {
  return (
    <aside className="space-y-8">
      {/* Services list */}
      <div className="bg-surface rounded-2xl p-6 shadow-md">
        <h3 className="text-lg font-heading font-semibold text-primary mb-4">
          All Services
        </h3>
        <ul className="space-y-2">
          {services.map((service) => {
            const isActive = service.href === currentHref
            return (
              <li key={service.href}>
                <Link
                  href={service.href}
                  className={`group flex items-center justify-between gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-accent text-white"
                      : "bg-background text-secondary hover:bg-accent/10 hover:text-accent"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  <span>{service.title}</span>
                  <ArrowRight
                    className={`w-4 h-4 flex-shrink-0 transition-transform duration-200 ${
                      isActive ? "text-white" : "text-secondary group-hover:text-accent"
                    }`}
                  />
                </Link>
              </li>
            )
          })}
        </ul>
      </div>

      {/* Help card */}
      <div className="relative overflow-hidden rounded-2xl p-6 text-white bg-primary">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent" />
        <div className="relative">
          <h3 className="text-lg font-heading font-semibold mb-2">
            Need Help?
          </h3>
          <p className="text-white/80 text-sm mb-5 leading-relaxed">
            Prefer speaking with a human? Call our office and we will connect you with a team member who can help.
          </p>
          <a
            href="tel:+358413171469"
            className="inline-flex items-center gap-2 text-white font-semibold hover:text-accent-light transition-colors"
          >
            <Phone className="w-4 h-4" />
            +358 41 317 1469
          </a>
        </div>
      </div>
    </aside>
  )
}
