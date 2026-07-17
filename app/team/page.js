'use client'

import PageHeader from "@/components/shell/PageHeader"
import SectionTitle from "@/components/ui/SectionTitle"
import Cta from "@/components/sections/home1/Cta"
import AnimatedSection from "@/components/ui/AnimatedSection"
import { teamMembers, memberInitials } from "@/lib/team"
import { useLanguage } from "@/components/i18n/LanguageProvider"

export default function TeamPage() {
  const { t } = useLanguage()
  return (
    <>
    <PageHeader title={t('page.team.title')} breadcrumbs={[{ label: t('page.team.title') }]} />
      <section className="section-padding bg-surface">
        <div className="container-renova">
          <AnimatedSection animation="fade-up">
            <SectionTitle
              tagline={t('page.team.tagline')}
              title={t('page.team.heading')}
              description={t('page.team.description')}
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
                  <div className="relative h-80 overflow-hidden bg-gradient-to-br from-primary via-primary-light to-steel">
                    {member.image ? (
                      <>
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
                      </>
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-white font-heading font-semibold text-7xl tracking-tight select-none" aria-hidden="true">
                        {memberInitials(member.name)}
                      </div>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <h3 className="text-xl font-heading font-semibold text-white">
                        {member.name}
                      </h3>
                      <p className="text-white/80 text-sm">{member.role}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-secondary text-sm leading-relaxed">{member.bio}</p>
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
