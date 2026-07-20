'use client'

import { Mail, Phone } from "lucide-react"
import SectionTitle from "@/components/ui/SectionTitle"
import AnimatedSection from "@/components/ui/AnimatedSection"
import { teamMembers, memberInitials } from "@/lib/team"
import { useLanguage } from "@/components/i18n/LanguageProvider"

/**
 * TeamDirectory — dedicated team contacts section on the Contact page.
 *
 * Sits below the dark Contact form/info card and lists every team member
 * from `lib/team.js` as a clickable contact card (mailto + tel). Uses
 * `bg-surface` so it alternates with the dark Contact section above.
 *
 * Cards are intentionally compact (no bio, no oversized photo) so the
 * three-up grid stays balanced on desktop and the focus stays on
 * "reach the right person directly".
 */
export default function TeamDirectory() {
  const { t } = useLanguage()
  return (
    <section
      className="section-padding bg-surface relative"
    >
      <div className="container-renova">
        <AnimatedSection animation="fade-up">
          <SectionTitle
            tagline={t('contact.team.tagline')}
            title={t('contact.team.heading')}
            description={t('contact.team.description')}
          />
        </AnimatedSection>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <AnimatedSection
              key={member.name}
              animation="fade-up"
              delay={index * 100}
            >
              <div className="group bg-background rounded-2xl p-6 border border-secondary/10 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                {/* Portrait if `member.image` is set; gradient initials fallback otherwise. */}
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    decoding="async"
                    width="80"
                    height="80"
                    className="w-20 h-20 rounded-full object-cover mb-5 shadow-md group-hover:shadow-lg transition-shadow ring-2 ring-white"
                  />
                ) : (
                  <div
                    className="w-20 h-20 rounded-full bg-gradient-to-br from-primary via-primary-light to-steel flex items-center justify-center text-white font-heading font-semibold text-2xl mb-5 select-none shadow-md group-hover:shadow-lg transition-shadow"
                    aria-hidden="true"
                  >
                    {memberInitials(member.name)}
                  </div>
                )}

                <h3 className="text-lg font-heading font-semibold text-primary">
                  {member.name}
                </h3>
                <p className="text-sm text-secondary/70 mt-1 mb-5">
                  {member.role}
                </p>

                {/* Push the contact links to the bottom of the card so all
                    cards align their buttons on the same baseline. */}
                <div className="space-y-2 text-sm mt-auto">
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-start gap-2 text-secondary hover:text-accent hover:underline underline-offset-2 transition-colors"
                    aria-label={`Email ${member.name}`}
                  >
                    <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span      className="break-words">{member.email}</span>
                  </a>
                  <a
                    href={`tel:${member.phone.replace(/[\s-]/g, '')}`}
                    className="flex items-center gap-2 text-secondary hover:text-accent hover:underline underline-offset-2 transition-colors"
                    aria-label={`Call ${member.name}`}
                  >
                    <Phone className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                    {member.phone}
                  </a>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
