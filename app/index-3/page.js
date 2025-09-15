
import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/home3/Banner"
import Blog from "@/components/sections/home3/Blog"
import Service from "@/components/sections/home3/Service"
import About from "@/components/sections/home3/About"
import Faq from "@/components/sections/home3/Faq"
import Service2 from "@/components/sections/home3/Service2"
import Team from "@/components/sections/home3/Team"
import Testimonial from "@/components/sections/home3/Testimonial"
import Business from "@/components/sections/home3/Business"
import Contact from "@/components/sections/home3/Contact"
import Cta from "@/components/sections/home3/Cta"
import Slidingtext from "@/components/sections/home3/Slidingtext"
export default function Home() {

    return (
        <>
            <Layout headerStyle={3} footerStyle={1}>
                <Banner />                
                <Service />
                <About />
                <Service2 />
                <Team />
                <Testimonial />
                <Faq />
                <Slidingtext />
                <Business />
                <Blog />
                <Contact />
                <Cta />
            </Layout>
        </>
    )
}