'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function Home() {
    return (
        <>
        <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Seo Content Writting">
        {/*Service Details Start*/}
        <section className="service-details">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-7">
                        <div className="service-details__left">
                            <div className="service-details__img">
                                <img src="assets/images/services/service-details-img-5.jpg" alt=""/>
                            </div>
                            <h3 className="service-details__title-1">SEO & Content Writting</h3>
                            <p className="service-details__text-1">Need something changed or is there something not quite
                                working the way you envisaged? Is your
                                van a little old and tired and need refreshing? Lorem Ipsum is simply dummy text of the
                                printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                                it to make a type specimen book. It has survived not only five centuries, but also the
                                leap into electronic typesetting,
                                remaining essentially unchanged.</p>
                            <div className="service-details__img-and-point-box">
                                <div className="service-details__point-img">
                                    <img src="assets/images/services/service-details-point-img.jpg" alt=""/>
                                </div>
                                <div className="service-details__points-box">
                                    <h3 className="service-details__point-title">Financial Planning</h3>
                                    <p className="service-details__point-text">Lorem Ipsum is simply dummy text of the
                                        printing
                                        and typesetting industry.</p>
                                    <ul className="service-details__point list-unstyled">
                                        <li>
                                            <div className="icon">
                                                <span className="icon-check"></span>
                                            </div>
                                            <p>Marketing options and rates</p>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-check"></span>
                                            </div>
                                            <p>How to improve business</p>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <span className="icon-check"></span>
                                            </div>
                                            <p>Great Skilled Consultant</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <p className="service-details__text-2">Need something changed or is there something not quite
                                working the way you envisaged? Is your van a little old and tired and need refreshing?
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text ever since the 1500s, when an unknown
                                printer took a galley of type and scrambled it to make a type specimen book. It has
                                survived not only five centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged.</p>
                            <p className="service-details__text-3">Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                                specimen book. It has survived not only five centuries, but also the leap into
                                electronic typesetting, remaining essentially unchanged.</p>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-5">
                        <div className="sidebar">
                            <div className="sidebar__single service-details__service-box">
                                <h3 className="sidebar__title">All Services</h3>
                                <ul className="service-details__service-list list-unstyled">
                                    <li>
                                        <Link href="digital-marketing">Digital Marketing<span
                                                className="fas fa-angle-right"></span></Link>
                                    </li>
                                    <li>
                                        <Link href="ui-ux-designing">UI/UX Designing<span
                                                className="fas fa-angle-right"></span></Link>
                                    </li>
                                    <li>
                                        <Link href="app-development">App Development<span
                                                className="fas fa-angle-right"></span></Link>
                                    </li>
                                    <li>
                                        <Link href="graphic-designing">Graphic Designing<span
                                                className="fas fa-angle-right"></span></Link>
                                    </li>
                                    <li>
                                        <Link href="website-development">Website Development<span
                                                className="fas fa-angle-right"></span></Link>
                                    </li>
                                    <li className="active">
                                        <Link href="seo-content-writting">SEO & Content Writting<span
                                                className="fas fa-angle-right"></span></Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="sidebar__single service-details__need-help">
                                <div className="service-details__need-help-bg"
                                    style={{ backgroundImage: ' url(assets/images/services/service-details-need-help-bg.jpg)' }} >
                                </div>
                                <h3 className="service-details__need-help-title">Need Zefxa Help?</h3>
                                <p className="service-details__need-help-text">Prefer speaking with a human to filling
                                    out a form? call corporate office & we
                                    will connect you with a team member
                                    who can help.</p>
                                <div className="service-details__need-help-number">
                                    <div className="icon">
                                        <span className="icon-telephone"></span>
                                    </div>
                                    <Link href="tel:01666444999">01-666 444 999</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*Service Details End*/}


        {/*CTA One Start*/}
        <section className="cta-one">
            <div className="cta-one__bg" style={{ backgroundImage: ' url(assets/images/backgrounds/cta-one-bg.jpg)' }} ></div>
            <div className="container">
                <div className="row">
                    <div className="cta-one__inner">
                        <h3 className="cta-one__title">Let's discuss about how we can help
                            <br/> make your business better</h3>
                        <div className="cta-one__btn-box">
                            <Link href="about" className="cta-one__btn thm-btn">Let's Start</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*CTA One End*/}

        </Layout>
        </>
    )
}