'use client'

import PageHeader from "@/components/shell/PageHeader"
import Contact from "@/components/sections/home1/Contact"
import TeamDirectory from "@/components/sections/contact/TeamDirectory"
import { useLanguage } from "@/components/i18n/LanguageProvider"

export default function ContactPage() {
  const { t } = useLanguage()
  return (
    <>
      <PageHeader title={t('nav.contact')} breadcrumbs={[{ label: t('nav.contact') }]} />
      <Contact />
      {/* Dedicated team contacts section below the form/info card. */}
      <TeamDirectory />
    </>
  )
}
