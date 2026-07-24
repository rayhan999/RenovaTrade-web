import PageHeader from "@/components/shell/PageHeader"
import ServiceSidebar from "@/components/ui/ServiceSidebar"
import Cta from "@/components/sections/home1/Cta"
import AnimatedSection from "@/components/ui/AnimatedSection"
import TiltCard from "@/components/ui/TiltCard"
import { Check, Container, Forklift, Ship, Construction, Building2, Anchor, Warehouse, Cog, Package } from "lucide-react"

export const metadata = {
  title: 'Heavy Equipment & Industrial Machinery - Renova Trade',
  description: 'Renova Trade sources heavy equipment and industrial machinery for ports, logistics, construction, infrastructure, manufacturing, and recycling operations.',
  openGraph: {
    title: 'Heavy Equipment & Industrial Machinery - Renova Trade',
    description: 'European-sourced heavy equipment and industrial machinery for global infrastructure and industrial projects.',
    url: 'https://renovatrade.fi/services/heavy-equipment',
    siteName: 'Renova Trade',
    type: 'website'
  },
  metadataBase: new URL('https://renovatrade.fi')
}

// Equipment categories from the original content draft
const equipment = [
  { icon: Container, name: "Reach Stackers", text: "Container handling for ports and inland depots." },
  { icon: Forklift, name: "Forklifts", text: "Diesel, LPG, and electric — 1.5 t to 45 t capacity." },
  { icon: Ship, name: "Container Handlers", text: "Laden and empty handlers from European fleets." },
  { icon: Construction, name: "Mobile Cranes", text: "All-terrain and rough-terrain cranes, inspected before shipment." },
  { icon: Building2, name: "Construction Equipment", text: "Excavators, loaders, dozers, and compactors." },
  { icon: Anchor, name: "Port Equipment", text: "Terminal tractors, trailers, and spreaders." },
  { icon: Warehouse, name: "Warehouse Equipment", text: "Racking, pallet movers, and intralogistics systems." },
  { icon: Cog, name: "Industrial Machinery", text: "Machinery for manufacturing, recycling, and energy plants." },
  { icon: Package, name: "Material Handling", text: "Conveyors, hoppers, grabs, and attachments." },
]

const capabilities = [
  "New, used, and refurbished equipment from dealers, fleets, and auctions",
  "Independent pre-shipment inspection and condition reports",
  "Service history and documentation verification",
  "Transparent commercial terms — no hidden intermediary margins",
  "Dismantling, lashing, and RoRo / container / break-bulk shipping",
  "Spare parts sourcing for delivered machines",
]

export default function HeavyEquipmentPage() {
  return (
    <>
    <PageHeader title="Heavy Equipment & Industrial Machinery" breadcrumbs={[{ label: "Heavy Equipment & Industrial Machinery" }]} />
      <section className="section-padding bg-surface">
        <div className="container-renova">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <AnimatedSection animation="fade-left" className="lg:col-span-2 space-y-8">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/assets/real-images/real-port-cranes-yards-01.jpg"
                  alt="Heavy equipment and industrial machinery"
                  className="w-full h-80 object-cover"
                />
              </div>

              <div className="bg-background rounded-2xl p-8 shadow-md">
                <h2 className="text-3xl font-heading font-bold text-primary mb-6">
                  Heavy Equipment & Industrial Machinery
                </h2>
                <p className="text-secondary leading-relaxed mb-6">
                  We help clients source heavy equipment and industrial machinery from European manufacturers, dealers, and auction houses. From port handling equipment to manufacturing lines, we identify the right machines and manage the entire procurement process.
                </p>
                <p className="text-secondary leading-relaxed">
                  Our sourcing covers both new and used equipment, with a focus on reliability, documentation, and transparent commercial terms.
                </p>
              </div>

              {/* Equipment categories — interactive card grid */}
              <div>
                <h3 className="text-2xl font-heading font-bold text-primary mb-6">
                  Equipment We Source
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                  {equipment.map((item, index) => (
                    <AnimatedSection key={item.name} animation="fade-up" delay={index * 60}>
                      <TiltCard className="h-full">
                        <div className="group h-full bg-surface border border-border rounded-2xl p-5 shadow-sm hover:shadow-depth hover:border-accent/30 transition-all duration-300">
                          <div className="w-11 h-11 rounded-xl bg-primary/5 group-hover:bg-accent/10 flex items-center justify-center mb-4 transition-colors duration-300">
                            <item.icon className="w-5 h-5 text-primary group-hover:text-accent transition-colors duration-300" aria-hidden="true" />
                          </div>
                          <h4 className="font-heading font-semibold text-primary">{item.name}</h4>
                          <p className="mt-1.5 text-sm text-secondary leading-relaxed">{item.text}</p>
                        </div>
                      </TiltCard>
                    </AnimatedSection>
                  ))}
                </div>
              </div>

              {/* Capabilities */}
              <div className="bg-background rounded-2xl p-8 shadow-md">
                <h3 className="text-xl font-heading font-semibold text-primary mb-4">
                  What We Offer
                </h3>
                <ul className="space-y-3">
                  {capabilities.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-accent" aria-hidden="true" />
                      </div>
                      <span className="text-secondary">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-secondary leading-relaxed">
                Tell us your equipment requirements, and we will identify suitable suppliers, arrange inspections, and coordinate delivery to your destination.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-right" delay={150} className="lg:col-span-1">
              <ServiceSidebar currentHref="/services/heavy-equipment" />
            </AnimatedSection>
          </div>
        </div>
      </section>
      <Cta />
    </>
  )
}
