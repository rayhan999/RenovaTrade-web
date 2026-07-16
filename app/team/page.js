import PageHeader from "@/components/shell/PageHeader"
import SectionTitle from "@/components/ui/SectionTitle"
import Cta from "@/components/sections/home1/Cta"
import AnimatedSection from "@/components/ui/AnimatedSection"

export const metadata = {
  title: 'Our Team - Renova Trade',
  description: 'Meet the experienced team behind Renova Trade, connecting European suppliers with South Asian markets.',
  openGraph: {
    title: 'Our Team - Renova Trade',
    description: 'Meet the Renova Trade team of sourcing, procurement, and trading professionals.',
    url: 'https://renovatrade.fi/team',
    siteName: 'Renova Trade',
    type: 'website'
  },
  metadataBase: new URL('https://renovatrade.fi')
}

const teamMembers = [
  {
    name: "Md Mahedi Hasan Refat",
    role: "Founder & Procurement Manager",
    image: "assets/images/team/team-2-1.jpg",
  },
]

export default function TeamPage() {
  return (
    <>
    <PageHeader title="Our Team" breadcrumbs={[{ label: "Our Team" }]} />
      <section className="section-padding bg-surface">
        <div className="container-renova">
          <AnimatedSection animation="fade-up">
            <SectionTitle
              tagline="Our Smart People"
              title="Meet Expert & Professional Team Members"
              description="The people behind Renova Trade bring together deep experience in international sourcing, procurement, and industrial trading."
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <AnimatedSection
                key={member.name}
                animation="fade-up"
                delay={index * 100}
              >
                <div className="group bg-background rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <h3 className="text-xl font-heading font-semibold text-white">
                        {member.name}
                      </h3>
                      <p className="text-white/80 text-sm">{member.role}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      <Cta />
    </>
  )
}
