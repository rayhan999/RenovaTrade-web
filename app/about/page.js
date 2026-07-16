import Layout from "@/components/layout/Layout"
import Link from "next/link"

export const metadata = {
    title: 'About Us - Renova Trade',
    description: 'Renova Trade provides professional sourcing, procurement, trading, and export solutions, connecting European suppliers with businesses across Bangladesh and South Asia.',
    openGraph: {
        title: 'About Us - Renova Trade',
        description: 'Learn about Renova Trade, a Finland-based international sourcing, procurement, and metal trading company.',
        url: 'https://renovatrade.fi/about',
        siteName: 'Renova Trade',
        type: 'website'
    },
    metadataBase: new URL('https://renovatrade.fi')
}

export default function AboutPage() {
    return (
        <>
        <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="About Us">
        {/*About Three Start*/}
        <section className="about-three about-four">
            <div className="about-three__bg-box">
                <div className="about-three__bg"
                    style={{ backgroundImage: ' url(assets/images/backgrounds/about_us_bg.jpg)' }} >
                </div>
                <div className="about-three__shape-1">
                    <img src="assets/images/shapes/about-three-shape-1.jpg" alt=""/>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 col-lg-5"></div>
                    <div className="col-xl-7 col-lg-7">
                        <div className="about-three__right">
                            <div className="section-title text-left">
                                <div className="section-title__tagline-box">
                                    <div className="section-title__tagline-shape">
                                        <img src="assets/images/shapes/section-title-tagline-shape_new.png" alt=""/>
                                    </div>
                                    <span className="section-title__tagline">Get to know us</span>
                                </div>
                                <h2 className="section-title__title">Your Trusted Sourcing & Trading Partner</h2>
                            </div>
                            <p className="about-one__text">Renova Trade provides professional sourcing, procurement, trading, and export solutions for businesses looking to source quality products from Europe.</p>
                            <p className="about-one__text">Our primary focus is metal scrap trading, supported by international sourcing for heavy equipment, industrial machinery, engineering products, and other industrial goods. We work with trusted manufacturers and suppliers across Europe's leading industrial regions to help customers secure reliable products, competitive pricing, and dependable supply chains.</p>
                            <p className="about-one__text">Our approach is built on transparency, professionalism, responsiveness, and long-term business relationships.</p>
                            <div className="about-three__points-and-year">
                                <ul className="about-three__points list-unstyled">
                                    <li>
                                        <div className="icon">
                                            <span className="icon-tick"></span>
                                        </div>
                                        <p>Transparency & professionalism</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-tick"></span>
                                        </div>
                                        <p>Responsive communication</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-tick"></span>
                                        </div>
                                        <p>Long-term business relationships</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="about-three__btn-box">
                                <Link href="/services" className="about-three__btn thm-btn">Our Services</Link>
                                <Link href="/contact" className="about-three__btn thm-btn" style={{ marginLeft: '15px' }}>Contact Us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*About Three End*/}
        </Layout>
        </>
    )
}
