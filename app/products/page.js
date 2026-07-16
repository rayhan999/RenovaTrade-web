import Layout from "@/components/layout/Layout"
import Link from "next/link"
import Cta from "@/components/sections/home1/Cta"

export const metadata = {
    title: 'Products - Renova Trade',
    description: 'Renova Trade supplies metal scrap, heavy equipment, industrial machinery, material handling equipment, engineering products, and industrial components.',
    openGraph: {
        title: 'Products - Renova Trade',
        description: 'Metal scrap, heavy equipment, industrial machinery, and engineering products from Europe.',
        url: 'https://renovatrade.fi/products',
        siteName: 'Renova Trade',
        type: 'website'
    },
    metadataBase: new URL('https://renovatrade.fi')
}

const products = [
    {
        title: "Metal Scrap",
        description: "Ferrous and non-ferrous scrap including HMS, shredded scrap, copper, aluminum, stainless steel, and brass.",
        link: "/services/metal-scrap-trading",
        image: "assets/images/services/service_1.jpeg",
        icon: "icon-coding"
    },
    {
        title: "Heavy Equipment",
        description: "Reach stackers, forklifts, container handlers, mobile cranes, and construction equipment.",
        link: "/services/heavy-equipment",
        image: "assets/images/services/service_2.jpg",
        icon: "icon-curve"
    },
    {
        title: "Industrial Machinery",
        description: "Machinery for manufacturing, recycling, energy, and industrial plants.",
        link: "/services/heavy-equipment",
        image: "assets/images/services/service_3.jpg",
        icon: "icon-creative"
    },
    {
        title: "Material Handling Equipment",
        description: "Warehouse and port equipment for logistics and material movement.",
        link: "/services/heavy-equipment",
        image: "assets/images/services/services-1-1.jpg",
        icon: "icon-productivity"
    },
    {
        title: "Engineering Products",
        description: "Specialized engineering products sourced from trusted European manufacturers.",
        link: "/services/international-sourcing",
        image: "assets/images/services/services-1-2.jpg",
        icon: "icon-bullhorn"
    },
    {
        title: "Industrial Components",
        description: "Components and spare parts for industrial operations and infrastructure.",
        link: "/services/international-sourcing",
        image: "assets/images/services/services-1-3.jpg",
        icon: "icon-like"
    },
    {
        title: "Custom Sourcing Projects",
        description: "Tailored sourcing solutions for specific product requirements and projects.",
        link: "/services/international-sourcing",
        image: "assets/images/services/services-1-4.jpg",
        icon: "icon-check"
    }
]

export default function ProductsPage() {
    return (
        <>
        <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Products">
            {/*Services One Start*/}
            <section className="services-one">
                <div className="container">
                    <div className="section-title text-center">
                        <div className="section-title__tagline-box">
                            <div className="section-title__tagline-shape">
                                <img src="assets/images/shapes/section-title-tagline-shape_new.png" alt=""/>
                            </div>
                            <span className="section-title__tagline">What We Supply</span>
                        </div>
                        <h2 className="section-title__title">Our Products</h2>
                    </div>
                    <div className="row justify-center" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'stretch', justifyContent:'center' }}>
                        {products.map((product, index) => (
                            <div key={index} className="col-xl-4 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay={`${100 + (index * 100)}ms`} style={{ display: 'flex' }}>
                                <div className="services-one__single" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                                    <div className="services-one__img-box">
                                        <div className="services-one__img">
                                            <img src={product.image} alt={product.title}/>
                                        </div>
                                    </div>
                                    <div className="services-one__content-wrap" style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                                        <div className="services-one__icon">
                                            <span className={product.icon}></span>
                                        </div>
                                        <div className="services-one__content" style={{ flex: 1 }}>
                                            <h3 className="services-one__title"><Link href={product.link}>{product.title}</Link></h3>
                                            <p className="services-one__text">{product.description}</p>
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
