import PageHeader from "@/components/shell/PageHeader"
import ServiceSidebar from "@/components/ui/ServiceSidebar"
import Cta from "@/components/sections/home1/Cta"
import AnimatedSection from "@/components/ui/AnimatedSection"
import TiltCard from "@/components/ui/TiltCard"
import { Check, Layers, Cable, Boxes, CircuitBoard, TrainFront, Building, Recycle, Combine, Magnet } from "lucide-react"

export const metadata = {
  title: 'Metal Scrap Trading - Renova Trade',
  description: 'Renova Trade sources and trades ferrous and non-ferrous metal scrap including HMS, shredded scrap, copper, aluminum, stainless steel, and brass.',
  openGraph: {
    title: 'Metal Scrap Trading - Renova Trade',
    description: 'Reliable metal scrap trading and export from Europe to global industrial markets.',
    url: 'https://renovatrade.fi/services/metal-scrap-trading',
    siteName: 'Renova Trade',
    type: 'website'
  },
  metadataBase: new URL('https://renovatrade.fi')
}

// Product grades from the original content draft
const grades = [
  { icon: Layers, name: "HMS 1 & HMS 2", text: "Heavy melting steel per ISRI 200-206 specifications." },
  { icon: Combine, name: "Shredded Scrap", text: "Homogeneous shredded steel (ISRI 210/211) for efficient melting." },
  { icon: Cable, name: "Copper Scrap", text: "Millberry, Berry/Candy, and mixed copper grades." },
  { icon: Boxes, name: "Aluminium Scrap", text: "Extrusions, UBC, taint/tabor, and cast aluminium." },
  { icon: Magnet, name: "Stainless Steel Scrap", text: "304/316 solids and turnings, sorted and graded." },
  { icon: Recycle, name: "Brass Scrap", text: "Honey, yellow brass, and mixed brass grades." },
  { icon: CircuitBoard, name: "Electric Motor Scrap", text: "Mixed electric motors for copper recovery." },
  { icon: TrainFront, name: "Railway Scrap", text: "Rails (R50/R65) and rolling stock material, subject to origin documentation." },
  { icon: Building, name: "Structural Steel Scrap", text: "Beams, plate, and demolition steel, cut to charge-box size." },
]

const services = [
  "Supplier identification across European scrap yards and recyclers",
  "Quality-focused sourcing with grading and inspection support",
  "Commercial negotiation tied to international market indices",
  "Export documentation: invoice, packing list, B/L, certificate of origin",
  "Logistics coordination — containerized and break-bulk shipments",
  "Long-term supply programs with scheduled monthly volumes",
]

export default function MetalScrapTradingPage() {
  return (
    <>
    <PageHeader title="Metal Scrap Trading" breadcrumbs={[{ label: "Metal Scrap Trading" }]} />
      <section className="section-padding bg-surface">
        <div className="container-renova">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <AnimatedSection animation="fade-left" className="lg:col-span-2 space-y-8">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/assets/real_Images/real-scrap-yard-hero-01.jpg"
                  alt="Metal scrap trading"
                  className="w-full h-80 object-cover"
                />
              </div>

              <div className="bg-background rounded-2xl p-8 shadow-md">
                <h2 className="text-3xl font-heading font-bold text-primary mb-6">
                  Metal Scrap Trading
                </h2>
                <p className="text-secondary leading-relaxed mb-6">
                  Renova Trade specializes in sourcing and trading ferrous and non-ferrous metal scrap from trusted European suppliers. We connect recyclers, foundries, and manufacturers across global industrial markets with reliable scrap streams that meet international quality standards.
                </p>
                <p className="text-secondary leading-relaxed">
                  Our team manages supplier verification, quality inspection, pricing, documentation, and logistics coordination so our customers receive consistent material on competitive terms.
                </p>
              </div>

              {/* Product grades — interactive card grid */}
              <div>
                <h3 className="text-2xl font-heading font-bold text-primary mb-6">
                  Grades We Trade
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                  {grades.map((grade, index) => (
                    <AnimatedSection key={grade.name} animation="fade-up" delay={index * 60}>
                      <TiltCard className="h-full">
                        <div className="group h-full bg-surface border border-border rounded-2xl p-5 shadow-sm hover:shadow-depth hover:border-accent/30 transition-all duration-300">
                          <div className="w-11 h-11 rounded-xl bg-primary/5 group-hover:bg-accent/10 flex items-center justify-center mb-4 transition-colors duration-300">
                            <grade.icon className="w-5 h-5 text-primary group-hover:text-accent transition-colors duration-300" aria-hidden="true" />
                          </div>
                          <h4 className="font-heading font-semibold text-primary">{grade.name}</h4>
                          <p className="mt-1.5 text-sm text-secondary leading-relaxed">{grade.text}</p>
                        </div>
                      </TiltCard>
                    </AnimatedSection>
                  ))}
                </div>
              </div>

              {/* Services */}
              <div className="bg-background rounded-2xl p-8 shadow-md">
                <h3 className="text-xl font-heading font-semibold text-primary mb-4">
                  How We Support Your Purchase
                </h3>
                <ul className="space-y-3">
                  {services.map((item) => (
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
                Whether you need containerized shipments of HMS, shredded scrap, or specific non-ferrous grades, we work to match your volume, specification, and delivery requirements.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-right" delay={150} className="lg:col-span-1">
              <ServiceSidebar currentHref="/services/metal-scrap-trading" />
            </AnimatedSection>
          </div>
        </div>
      </section>
      <Cta />
    </>
  )
}
