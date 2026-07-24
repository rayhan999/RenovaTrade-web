import PageHeader from "@/components/shell/PageHeader"
import Service from "@/components/sections/home1/Service"
import Cta from "@/components/sections/home1/Cta"

export const metadata = {
  title: 'Services - Renova Trade',
  description: 'Explore Renova Trade services: metal scrap trading, heavy equipment & industrial machinery, and international sourcing & procurement.',
  openGraph: {
    title: 'Renova Trade Services',
    description: 'Metal scrap trading, heavy equipment, and international sourcing services connecting Europe with global markets.',
    url: 'https://renovatrade.fi/services',
    siteName: 'Renova Trade',
    type: 'website'
  },
  metadataBase: new URL('https://renovatrade.fi')
}

export default function ServicesPage() {
  return (
    <>
    <PageHeader title="Our Services" breadcrumbs={[{ label: "Our Services" }]} />
      <Service />
      <Cta />
    </>
  )
}
