import Layout from "@/components/layout/Layout"
import Link from "next/link"
import Cta from "@/components/sections/home1/Cta"

export const metadata = {
    title: 'Services - Renova Trade',
    description: 'Explore Renova Trade services: metal scrap trading, heavy equipment & industrial machinery, and international sourcing & procurement.',
    openGraph: {
        title: 'Renova Trade Services',
        description: 'Metal scrap trading, heavy equipment, and international sourcing services connecting Europe with South Asia.',
        url: 'https://renovatrade.fi/services',
        siteName: 'Renova Trade',
        type: 'website'
    },
    metadataBase: new URL('https://renovatrade.fi')
}

const services = [
    {
        title: "Metal Scrap Trading",
        description: "Ferrous and non-ferrous scrap trading including HMS 1 & 2, shredded scrap, copper, aluminum, stainless steel, and brass.",
        link: "/services/metal-scrap-trading",
        image: "assets/images/services/service_1.jpeg",
        icon: "icon-coding"
    },
    {
        title: "Heavy Equipment & Industrial Machinery",
        description: "Sourcing equipment for ports, logistics, construction, infrastructure, manufacturing, recycling, and industrial operations.",
        link: "/services/heavy-equipment",
        image: "assets/images/services/service_2.jpg",
        icon: "icon-curve"
    },
    {
        title: "International Sourcing & Procurement",
        description: "End-to-end sourcing and procurement support from requirement review to supplier identification, negotiation, and delivery.",
        link: "/services/international-sourcing",
        image: "assets/images/services/service_3.jpg",
        icon: "icon-creative"
    }
]

export default function ServicesPage() {
    return (
        <>
        <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Our Services">
            {/*Services One Start*/}
            <section className="services-one">
                <div className="container">
                    <div className="section-title text-center">
                        <div className="section-title__tagline-box">
                            <div className="section-title__tagline-shape">
                                <img src="assets/images/shapes/section-title-tagline-shape_new.png" alt=""/>
                            </div>
                            <span className="section-title__tagline">What We Offer</span>
                        </div>
                        <h2 className="section-title__title">Our Services</h2>
                    </div>
                    <div className="row justify-center" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'stretch', justifyContent:'center' }}>
                        {services.map((service, index) => (
                            <div key={index} className="col-xl-4 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay={`${100 + (index * 100)}ms`} style={{ display: 'flex' }}>
                                <div className="services-one__single" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                                    <div className="services-one__img-box">
                                        <div className="services-one__img">
                                            <img src={service.image} alt={service.title}/>
                                        </div>
                                    </div>
                                    <div className="services-one__content-wrap" style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                                        <div className="services-one__icon">
                                            <span className={service.icon}></span>
                                        </div>
                                        <div className="services-one__content" style={{ flex: 1 }}>
                                            <h3 className="services-one__title"><Link href={service.link}>{service.title}</Link></h3>
                                            <p className="services-one__text">{service.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/*Services One End*/}
            <Cta />
        </Layout>
        </>
    )
}
