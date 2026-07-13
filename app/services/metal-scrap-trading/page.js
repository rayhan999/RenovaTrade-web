import Layout from "@/components/layout/Layout"
import Link from "next/link"
import Cta from "@/components/sections/home1/Cta"

export const metadata = {
    title: 'Metal Scrap Trading - Renova Trade',
    description: 'Renova Trade sources and trades high-quality ferrous and non-ferrous metal scrap from Europe to South Asia. HMS, shredded scrap, copper, aluminum, stainless steel, brass, and more.',
    openGraph: {
        title: 'Metal Scrap Trading - Renova Trade',
        description: 'Ferrous and non-ferrous metal scrap trading: HMS, shredded scrap, copper, aluminum, stainless steel, brass.',
        url: 'https://renovatrade.fi/services/metal-scrap-trading',
        siteName: 'Renova Trade',
        type: 'website'
    },
    metadataBase: new URL('https://renovatrade.fi')
}

const products = [
    "HMS 1 & HMS 2",
    "Shredded Scrap",
    "Copper Scrap",
    "Aluminium Scrap",
    "Stainless Steel Scrap",
    "Brass Scrap",
    "Electric Motor Scrap",
    "Railway Scrap",
    "Structural Steel Scrap"
]

const services = [
    "Supplier identification",
    "Quality-focused sourcing",
    "Commercial negotiation",
    "Export documentation",
    "Logistics coordination",
    "Long-term supply support"
]

export default function MetalScrapTradingPage() {
    return (
        <>
        <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Metal Scrap Trading">
            {/*Service Details Start*/}
            <section className="service-details">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-7">
                            <div className="service-details__left">
                                <div className="service-details__img">
                                    <img src="assets/images/services/service_1.jpeg" alt="Metal Scrap Trading"/>
                                </div>
                                <h3 className="service-details__title-1">Metal Scrap Trading</h3>
                                <p className="service-details__text-1">Metal scrap trading is one of our core business divisions. We source and trade high-quality ferrous and non-ferrous scrap from trusted European suppliers, delivering reliable materials to customers across Bangladesh and South Asia.</p>
                                <p className="service-details__text-2">Our team focuses on quality, consistency, and transparent commercial terms. We coordinate supplier identification, inspection, documentation, and logistics to ensure smooth deliveries.</p>
                                <div className="service-details__img-and-point-box">
                                    <div className="service-details__point-img">
                                        <img src="assets/images/services/service_2.jpg" alt="Metal Scrap"/>
                                    </div>
                                    <div className="service-details__points-box">
                                        <h3 className="service-details__point-title">Our Services</h3>
                                        <ul className="service-details__point list-unstyled">
                                            {services.map((service, index) => (
                                                <li key={index}>
                                                    <div className="icon">
                                                        <span className="icon-check"></span>
                                                    </div>
                                                    <p>{service}</p>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-5">
                            <div className="sidebar">
                                <div className="sidebar__single service-details__service-box">
                                    <h3 className="sidebar__title">Products</h3>
                                    <ul className="service-details__service-list list-unstyled">
                                        {products.map((product, index) => (
                                            <li key={index}>
                                                <span>{product}<span className="fas fa-angle-right"></span></span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="sidebar__single service-details__need-help">
                                    <div className="service-details__need-help-bg"
                                        style={{ backgroundImage: ' url(assets/images/services/service-details-need-help-bg.jpg)' }} >
                                    </div>
                                    <h3 className="service-details__need-help-title">Need Help?</h3>
                                    <p className="service-details__need-help-text">Contact our team to discuss your metal scrap requirements and receive a tailored quote.</p>
                                    <div className="service-details__need-help-number">
                                        <div className="icon">
                                            <span className="icon-telephone"></span>
                                        </div>
                                        <Link href="/contact">Contact Us</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*Service Details End*/}
            <Cta />
        </Layout>
        </>
    )
}
