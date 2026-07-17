import { Landmark, Network, FileCheck2, ShieldCheck } from "lucide-react"
import SectionTitle from "@/components/ui/SectionTitle"
import AnimatedSection from "@/components/ui/AnimatedSection"
import { BUSINESS_ID } from "@/lib/constants"

/**
 * Trust & credibility section (About page).
 *
 * Content policy:
 * - Legal/registration statements are real and generic (Finland-registered,
 *   EU-regulated) — add the actual Business ID before launch (marked below).
 * - Supplier-network and years figures are PLACEHOLDERS (SampleTag marked).
 * - Compliance items are phrased as standards we operate under / align with,
 *   NOT certifications we hold — do not change wording to claim certificates
 *   unless Renova Trade actually holds them.
 */

const pillars = [
  {
    icon: Landmark,
    title: "Registered in Finland, Regulated by the EU",
    text: (
      <>
        Renova Trade is a private limited company registered in Finland and
        listed in the Finnish Trade Register. Business ID (Y-tunnus): {BUSINESS_ID}.
        {" "}Operating from inside the EU means our contracts, invoicing, and
        export procedures follow European commercial law — giving buyers in
        South Asia a counterparty they can verify.
      </>
    ),
  },
  {
    icon: Network,
    title: "What Our Supplier Network Actually Means",
    text: (
      <>
        Our network is not a mailing list. It is a maintained roster of
        European scrap yards, recyclers, equipment dealers, and manufacturers —
        concentrated in Finland, the Baltics, Scandinavia, and Central Europe —
        that we have transacted with or vetted for company registration,
        export capability, and material quality before ever offering their
        cargo to a client.
      </>
    ),
  },
  {
    icon: FileCheck2,
    title: "Compliance Built Into Every Shipment",
    text: (
      <>
        Cross-border scrap movements are regulated. We prepare shipments in
        line with the EU Waste Shipment Regulation, use internationally
        recognized scrap specifications (ISRI / EU grading terminology) in
        contracts, trade on Incoterms 2020, and provide complete document
        sets — commercial invoice, packing list, B/L, certificate of origin,
        and pre-shipment inspection where required.
      </>
    ),
  },
  {
    icon: ShieldCheck,
    title: "Verification You Can Do Yourself",
    text: (
      <>
        We encourage due diligence: our company registration can be checked in
        the Finnish Trade Register (YTJ), and we are happy to share references,
        past shipment documentation samples, and supplier audit summaries under
        NDA on request.
      </>
    ),
  },
]



export default function Credibility() {
  return (
    <section className="section-padding bg-background" aria-labelledby="credibility-heading">
      <div className="container-renova">
        <AnimatedSection animation="fade-up">
          <SectionTitle
            tagline="Why Buyers Trust Us"
            title="Credibility You Can Verify"
            description="International trade runs on trust — so we make ours checkable: legal registration, a real supplier network, and compliance on every shipment."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar, index) => (
            <AnimatedSection key={pillar.title} animation="fade-up" delay={index * 100}>
              <div className="h-full bg-surface border border-border rounded-2xl p-8 shadow-md hover:shadow-depth transition-shadow duration-300">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                  <pillar.icon className="w-6 h-6 text-accent" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-primary mb-3">
                  {pillar.title}
                </h3>
                <p className="text-secondary text-sm leading-relaxed">{pillar.text}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>


      </div>
    </section>
  )
}
