import Layout from "@/components/layout/Layout"
import Link from "next/link"
import Cta from "@/components/sections/home1/Cta"

export const metadata = {
    title: 'International Sourcing & Procurement - Renova Trade',
    description: 'Renova Trade helps businesses find the right European supplier. Our sourcing process covers requirement review, supplier identification, quotation collection, negotiation, and delivery support.',
    openGraph: {
        title: 'International Sourcing & Procurement - Renova Trade',
        description: 'End-to-end international sourcing and procurement support from Europe to South Asia.',
        url: 'https://renovatrade.fi/services/international-sourcing',
        siteName: 'Renova Trade',
        type: 'website'
    },
    metadataBase: new URL('https://renovatrade.fi')
}

const steps = [
    "Requirement review",
    "Supplier identification",
    "Quotation collection",
    "Technical comparison",
    "Commercial negotiation",
    "Supplier coordination",
    "Export planning",
    "Delivery support"
]

export default function InternationalSourcingPage() {
    return (
        <>
        <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="International Sourcing & Procurement">
            {/*Service Details Start*/}
            <section className="service-details">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-7">
                            <div className="service-details__left">
                                <div className="service-details__img">
                                    <img src="assets/images/services/service_3.jpg" alt="International Sourcing"/>
                                </div>
                                <h3 className="service-details__title-1">International Sourcing & Procurement</h3>
                                <p className="service-details__text-1">If your required product is manufactured in Europe, we help you find the right supplier. Our sourcing process is designed to save you time, reduce risk, and ensure reliable supply.</p>
                                <p className="service-details__text-2">We support you from the first requirement review through to delivery, including supplier identification, quotation collection, technical and commercial comparison, negotiation, and logistics coordination.</p>
                                <div className="service-details__img-and-point-box">
                                    <div className="service-details__point-img">
                                        <img src="assets/images/services/service_1.jpeg" alt="Sourcing Process"/>
                                    </div>
                                    <div className="service-details__points-box">
                                        <h3 className="service-details__point-title">Our Sourcing Process</h3>
                                        <ul className="service-details__point list-unstyled">
                                            {steps.map((step, index) => (
                                                <li key={index}>
                                                    <div className="icon">
                                                        <span className="icon-check"></span>
                                                    </div>
                                                    <p>{step}</p>
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
                                    <h3 className="sidebar__title">Our Services</h3>
                                    <ul className="service-details__service-list list-unstyled">
                                        <li><Link href="/services/metal-scrap-trading">Metal Scrap Trading<span className="fas fa-angle-right"></span></Link></li>
                                        <li><Link href="/services/heavy-equipment">Heavy Equipment & Industrial Machinery<span className="fas fa-angle-right"></span></Link></li>
                                        <li className="active"><Link href="/services/international-sourcing">International Sourcing & Procurement<span className="fas fa-angle-right"></span></Link></li>
                                    </ul>
                                </div>
                                <div className="sidebar__single service-details__need-help">
                                    <div className="service-details__need-help-bg"
                                        style={{ backgroundImage: ' url(assets/images/backgrounds/about_us_bg.jpg)' }} >
                                    </div>
                                    <h3 className="service-details__need-help-title">Need Help?</h3>
                                    <p className="service-details__need-help-text">Contact our team to discuss your sourcing requirements and receive a tailored solution.</p>
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
