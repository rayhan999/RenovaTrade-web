import PageHeader from "@/components/shell/PageHeader"
import Link from "next/link"
import ServiceSidebar from "@/components/ui/ServiceSidebar"
import Cta from "@/components/sections/home1/Cta"
import AnimatedSection from "@/components/ui/AnimatedSection"
import ProcessTimeline from "@/components/process/ProcessTimeline"
import { Check, ArrowRight } from "lucide-react"

export const metadata = {
  title: 'International Sourcing & Procurement - Renova Trade',
  description: 'End-to-end international sourcing and procurement support from requirement review to supplier identification, negotiation, and delivery.',
  openGraph: {
    title: 'International Sourcing & Procurement - Renova Trade',
    description: 'European supplier sourcing and procurement support for businesses across global industrial markets.',
    url: 'https://renovatrade.fi/services/international-sourcing',
    siteName: 'Renova Trade',
    type: 'website'
  },
  metadataBase: new URL('https://renovatrade.fi')
}

const steps = [
  "Requirement review and product specification",
  "Supplier identification and verification in Europe",
  "Quotation, negotiation, and commercial terms",
  "Quality control and inspection coordination",
  "Documentation, logistics, and delivery support",
]

export default function InternationalSourcingPage() {
  return (
    <>
    <PageHeader title="International Sourcing & Procurement" breadcrumbs={[{ label: "International Sourcing & Procurement" }]} />
      <section className="section-padding bg-surface">
        <div className="container-renova">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <AnimatedSection animation="fade-left" className="lg:col-span-2 space-y-8">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/assets/real_Images/real-banner-cinematic-wide-01.jpg"
                  alt="International sourcing and procurement"
                  className="w-full h-80 object-cover"
                />
              </div>

              <div className="bg-background rounded-2xl p-8 shadow-md">
                <h2 className="text-3xl font-heading font-bold text-primary mb-6">
                  International Sourcing & Procurement
                </h2>
                <p className="text-secondary leading-relaxed mb-6">
                  Renova Trade acts as your procurement partner in Europe. We help businesses across global industrial markets find reliable European suppliers, negotiate competitive terms, and manage the complexities of international purchasing.
                </p>
                <p className="text-secondary leading-relaxed mb-8">
                  From the first requirement to final delivery, we provide hands-on coordination to reduce risk, save time, and ensure transparency.
                </p>

                <h3 className="text-xl font-heading font-semibold text-primary mb-4">
                  How We Work
                </h3>
                <ul className="space-y-3 mb-8">
                  {steps.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-accent" aria-hidden="true" />
                      </div>
                      <span className="text-secondary">{item}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-secondary leading-relaxed">
                  Whether you are sourcing raw materials, components, or finished industrial products, we bring the right European suppliers to your table.
                </p>
              </div>

              {/* Full 7-step process as an animated timeline */}
              <div>
                <h3 className="text-2xl font-heading font-bold text-primary mb-8">
                  Our Seven-Step Sourcing Process
                </h3>
                <ProcessTimeline />
                <div className="mt-8">
                  <Link href="/how-we-work" className="inline-flex items-center gap-2 text-accent font-semibold link-draw">
                    Incoterms, lead times & documentation details
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-right" delay={150} className="lg:col-span-1">
              <ServiceSidebar currentHref="/services/international-sourcing" />
            </AnimatedSection>
          </div>
        </div>
      </section>
      <Cta />
    </>
  )
}
