import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/home1/Banner"
import About from "@/components/sections/home1/About"
// import About from "@/components/sections/home3/About"
import Service from "@/components/sections/home1/Service"
import Testimonial from "@/components/sections/home1/Testimonial"
import Team from "@/components/sections/home1/Team"
import Contact from "@/components/sections/home1/Contact"
import Blog from "@/components/sections/home1/Blog"
import Why from "@/components/sections/home1/Why"
import Slidingtext from "@/components/sections/home1/Slidingtext"
import Process from "@/components/sections/home1/Process"
import Cta from "@/components/sections/home1/Cta"
import Project from "@/components/sections/home2/Project"

export default function Home() {
// ns2.domainhotelli.fi
// ns1.domainhotelli.fi
    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                {/* <Banner /> */}
                 <Banner />   
                <About />
                <Service />
                <Process />
                 {/* <Project /> */}
                {/* <Blog /> */}
                {/* <Team /> */}
                <Contact />
                <Slidingtext />
                {/* <Why /> */}
                {/* <Testimonial /> */}
                {/* <Blog /> */}
                <Cta /> 
            </Layout>

        </>
    )
}