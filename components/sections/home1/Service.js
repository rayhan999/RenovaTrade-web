'use client'
import Link from "next/link"
export default function Service() {
    const services = [
        {
            title: "Metal Scrap Trading",
            text: "Ferrous and non-ferrous scrap including HMS, shredded scrap, copper, aluminum, stainless steel, and brass.",
            image: "assets/images/services/service_1.jpeg",
            icon: "icon-coding",
            link: "/services/metal-scrap-trading"
        },
        {
            title: "Heavy Equipment & Industrial Machinery",
            text: "Equipment for ports, logistics, construction, infrastructure, manufacturing, recycling, and industrial operations.",
            image: "assets/images/services/service_2.jpg",
            icon: "icon-curve",
            link: "/services/heavy-equipment"
        },
        {
            title: "International Product Sourcing",
            text: "We help you find the right European supplier for your required product, from requirement review to delivery support.",
            image: "assets/images/services/service_3.jpg",
            icon: "icon-creative",
            link: "/services/international-sourcing"
        },
        {
            title: "Procurement & Supply Chain Support",
            text: "End-to-end procurement support including supplier coordination, negotiation, and supply chain management.",
            image: "assets/images/services/services-1-1.jpg",
            icon: "icon-productivity",
            link: "/services/heavy-equipment"
        },
        {
            title: "Export Coordination",
            text: "Complete export documentation, logistics coordination, and delivery support for international shipments.",
            image: "assets/images/services/services-1-2.jpg",
            icon: "icon-bullhorn",
            link: "/services/international-sourcing"
        },
        {
            title: "Trade Consultancy",
            text: "Expert guidance on international trade, supplier selection, commercial terms, and market entry.",
            image: "assets/images/services/services-1-3.jpg",
            icon: "icon-like",
            link: "/services/international-sourcing"
        }
    ]

    return (
        <>
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
                    <h2 className="section-title__title">Core Services</h2>
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
                                    </div>                                        <div className="services-one__content" style={{ flex: 1 }}>
                                            <h3 className="services-one__title"><Link href={service.link}>{service.title}</Link></h3>
                                            <p className="services-one__text">{service.text}</p>
                                        </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        {/*Services One End*/}
        </>
    )
}
