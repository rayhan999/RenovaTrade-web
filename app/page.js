import Banner from "@/components/sections/home1/Banner"
import TrustBar from "@/components/sections/home1/TrustBar"
import About from "@/components/sections/home1/About"
import TradeCorridor from "@/components/sections/home1/TradeCorridor"
import Why from "@/components/sections/home1/Why"
import Process from "@/components/sections/home1/Process"
import Industries from "@/components/sections/home1/Industries"
import Products from "@/components/sections/home1/Products"
import Sustainability from "@/components/sections/home1/Sustainability"
import Team from "@/components/sections/home1/Team"
import Blog from "@/components/sections/home1/Blog"
import Contact from "@/components/sections/home1/Contact"
import Slidingtext from "@/components/sections/home1/Slidingtext"
import Cta from "@/components/sections/home1/Cta"

export const metadata = {
    title: 'Renova Trade - International Sourcing & Metal Trading',
    description: 'Renova Trade is a Finland-based international sourcing, procurement, trading, and export company connecting European manufacturers with businesses across global industrial markets.',
    openGraph: {
        title: 'Renova Trade - International Sourcing & Metal Trading',
        description: 'Connecting European Industries with Global Markets.',
        url: 'https://renovatrade.fi',
        siteName: 'Renova Trade',
        type: 'website'
    },
    metadataBase: new URL('https://renovatrade.fi')
}

export default function Home() {
    return (
        <>
            <Banner />
            {/* <TrustBar /> */}
            <About />
            <TradeCorridor />
            <Process />
            <Industries />
            <Products />
            <Why />
            <Sustainability />
            <Team />
            <Blog />
            <Contact />
            <Slidingtext />
            <Cta />
        </>
    )
}