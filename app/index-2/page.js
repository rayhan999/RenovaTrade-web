
import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/home2/Banner"
import Blog from "@/components/sections/home2/Blog"
import Brand from "@/components/sections/home2/Brand"
import Team from "@/components/sections/home2/Team"
import Testimonial from "@/components/sections/home2/Testimonial"
import Feature from "@/components/sections/home2/Feature"
import Pricing from "@/components/sections/home2/Pricing"
import About from "@/components/sections/home2/About"
import Project from "@/components/sections/home2/Project"
import Company from "@/components/sections/home2/Company"
import Cta from "@/components/sections/home2/Cta"
import Video from "@/components/sections/home2/video"
export default function Home() {

    return (
        <>
            <Layout headerStyle={2} footerStyle={1}>
                <Banner />
                <Feature />
                <About />
                <Video />
                <Project />
                <Company />
                <Team />
                <Testimonial />
                <Brand />
                <Pricing />
                <Blog />
                <Cta />
            </Layout>
        </>
    )
}