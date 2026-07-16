'use client'

import Link from "next/link"
import SectionTitle from "@/components/ui/SectionTitle"
import AnimatedSection from "@/components/ui/AnimatedSection"
import SampleTag from "@/components/ui/SampleTag"
import { useLanguage } from "@/components/i18n/LanguageProvider"

const teamMembers = [
  {
    name: "Markus Virtanen",
    role: "Founder & CEO",
    image: "/assets/images/team/team-2-1.jpg",
  },
]

export default function Team() {
  const { t } = useLanguage()
  return (
    <section className="section-padding bg-background">
      <div className="container-renova">
        <AnimatedSection animation="fade-up">
          <SectionTitle
            tagline={t('home.team.tagline')}
            title={t('home.team.title')}
            description={t('home.team.description')}
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <AnimatedSection
              key={member.name}
              animation="fade-up"
              delay={index * 100}
            >
              <div className="group bg-surface rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6 text-center">
                  <div className="mb-2"><SampleTag /></div>
                  <h3 className="text-xl font-heading font-semibold text-primary mb-1">
                    {member.name}
                  </h3>
                  <p className="text-secondary text-sm mb-4">{member.role}</p>
                  <div className="flex items-center justify-center gap-3">
                    <Link
                      href="#"
                      aria-label={`${member.name} LinkedIn`}
                      className="w-9 h-9 rounded-full bg-background flex items-center justify-center text-secondary hover:bg-accent hover:text-white transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.461v6.759zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </Link>
                    <Link
                      href="#"
                      aria-label={`${member.name} Twitter`}
                      className="w-9 h-9 rounded-full bg-background flex items-center justify-center text-secondary hover:bg-accent hover:text-white transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.518l-5.215-6.82-5.964 6.82H.469l7.73-8.835L.535 2.25H7.18l4.795 6.336 5.57-6.336zm-1.26 16.06h1.83L7.084 4.126H5.117l11.867 14.184z" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
