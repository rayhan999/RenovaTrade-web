import Layout from "@/components/layout/Layout"
import Link from "next/link"
import Cta from "@/components/sections/home1/Cta"

export const metadata = {
    title: 'Heavy Equipment & Industrial Machinery - Renova Trade',
    description: 'Renova Trade sources heavy equipment and industrial machinery for ports, logistics, construction, infrastructure, manufacturing, recycling, and industrial operations.',
    openGraph: {
        title: 'Heavy Equipment & Industrial Machinery - Renova Trade',
        description: 'Sourcing heavy equipment and industrial machinery from Europe for South Asian industries.',
        url: 'https://renovatrade.fi/services/heavy-equipment',
        siteName: 'Renova Trade',
        type: 'website'
    },
    metadataBase: new URL('https://renovatrade.fi')
}

const equipment = [
    "Reach Stackers",
    "Forklifts",
    "Container Handlers",
    "Mobile Cranes",
    "Construction Equipment",
    "Port Equipment",
    "Warehouse Equipment",
    "Industrial Machinery",
    "Material Handling Equipment"
]

export default function HeavyEquipmentPage() {
    return (
        <>
        <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Heavy Equipment & Industrial Machinery">
            {/*Service Details Start*/}
            <section className="service-details">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-7">
                            <div className="service-details__left">
                                <div className="service-details__img">
                                    <img src="assets/images/services/service_2.jpg" alt="Heavy Equipment"/>
                                </div>
                                <h3 className="service-details__title-1">Heavy Equipment & Industrial Machinery</h3>
                                <p className="service-details__text-1">We source equipment for ports, logistics, construction, infrastructure, manufacturing, recycling, and industrial operations. Our network of European suppliers allows us to find the right machinery for your project needs.</p>
                                <p className="service-details__text-2">From reach stackers and forklifts to cranes and warehouse equipment, we help you identify suitable options, compare offers, and coordinate delivery.</p>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-5">
                            <div className="sidebar">
                                <div className="sidebar__single service-details__service-box">
                                    <h3 className="sidebar__title">Equipment Examples</h3>
                                    <ul className="service-details__service-list list-unstyled">
                                        {equipment.map((item, index) => (
                                            <li key={index}>
                                                <span>{item}<span className="fas fa-angle-right"></span></span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="sidebar__single service-details__need-help">
                                    <div className="service-details__need-help-bg"
                                        style={{ backgroundImage: ' url(assets/images/services/service-details-need-help-bg.jpg)' }} >
                                    </div>
                                    <h3 className="service-details__need-help-title">Need Help?</h3>
                                    <p className="service-details__need-help-text">Contact our team to discuss your equipment requirements and receive a tailored quote.</p>
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
