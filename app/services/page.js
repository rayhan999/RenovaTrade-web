export const metadata = {
    title: 'Services - Renova Trade',
    description: 'Explore Renova Trade services: sourcing and trading ferrous and non-ferrous scrap including HMS, shredded scrap, aluminum, copper and stainless steel. Reliable inspection, logistics and timely delivery.',
    openGraph: {
        title: 'Renova Trade Services',
        description: 'Sourcing and trading ferrous and non-ferrous scrap: HMS, shredded scrap, aluminum, copper, stainless steel.',
        url: 'https://renovatrade.fi/services',
        images: ['/assets/images/services/service_1.jpeg'],
        siteName: 'Renova Trade',
        type: 'website'
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Renova Trade – Services',
        description: 'Ferrous and non-ferrous scrap trading services',
    }
}
import Link from "next/link"
import Layout from "@/components/layout/Layout"
import ServicePageClient from '@/components/sections/home1/ServicePageClient'

export default function Home() {
    return (
        <>
        <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Our services">
           <ServicePageClient />
        </Layout>
        </>
    )
}