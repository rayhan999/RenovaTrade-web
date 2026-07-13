import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/home1/Banner"
import About from "@/components/sections/home1/About"
import Service from "@/components/sections/home1/Service"
import Contact from "@/components/sections/home1/Contact"
import Slidingtext from "@/components/sections/home1/Slidingtext"
import Process from "@/components/sections/home1/Process"
import Cta from "@/components/sections/home1/Cta"

export const metadata = {
    title: 'Renova Trade - International Sourcing & Metal Trading',
    description: 'Renova Trade is a Finland-based international sourcing, procurement, trading, and export company connecting European manufacturers with businesses across Bangladesh and South Asia.',
    openGraph: {
        title: 'Renova Trade - International Sourcing & Metal Trading',
        description: 'Connecting European Industry with South Asian Markets.',
        url: 'https://renovatrade.fi',
        siteName: 'Renova Trade',
        type: 'website'
    },
    metadataBase: new URL('https://renovatrade.fi')
}

export default function Home() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <Banner />
                <About />
                <Service />
                <Process />
                <Contact />
                <Slidingtext />
                <Cta />
            </Layout>
        </>
    )
}