'use client'
import Link from "next/link"
export default function Service2() {
    return (
        <>
       {/*Service Three Start*/}
       <section className="service-three">
            <div className="service-three__bg"
                style={{ backgroundImage: ' url(assets/images/backgrounds/service-three-bg.jpg)' }} ></div>
            <div className="service-three__img wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2500ms">
                <img src="assets/images/services/service-three-img-1.png" alt=""/>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 wow fadeInUp" data-wow-delay="100ms">
                        <div className="service-three__left">
                            <div className="section-title text-left">
                                <div className="section-title__tagline-box">
                                    <div className="section-title__tagline-shape">
                                        <img src="assets/images/shapes/section-title-tagline-shape_new.png" alt=""/>
                                    </div>
                                    <span className="section-title__tagline">Our Best Service</span>
                                </div>
                                <h2 className="section-title__title">What we're Offering to
                                    <br/> Our Customers</h2>
                            </div>
                            <p className="service-three__text">We are committed to providing our customers with exceptional
                                <br/> service while offering our employees the best training.</p>
                        </div>
                    </div>
                    {/*Services Three Single Start*/}
                    <div className="col-xl-3 col-lg-3 col-md-6 wow fadeInLeft" data-wow-delay="200ms">
                        <div className="service-three__single">
                            <div className="service-three__count"></div>
                            <div className="service-three__shape-1">
                                <img src="assets/images/shapes/service-three-shape-1.png" alt=""/>
                            </div>
                            <div className="service-three__icon">
                                <span className="icon-development"></span>
                            </div>
                            <h3 className="service-three__title"><Link href="website-development">Website
                                    <br/> Development</Link></h3>
                        </div>
                    </div>
                    {/*Services Three Single End*/}
                    {/*Services Three Single Start*/}
                    <div className="col-xl-3 col-lg-3 col-md-6 wow fadeInLeft" data-wow-delay="300ms">
                        <div className="service-three__single">
                            <div className="service-three__count"></div>
                            <div className="service-three__shape-1">
                                <img src="assets/images/shapes/service-three-shape-1.png" alt=""/>
                            </div>
                            <div className="service-three__icon">
                                <span className="icon-bullhorn"></span>
                            </div>
                            <h3 className="service-three__title"><Link href="digital-marketing">Digital
                                    <br/> Marketing</Link></h3>
                        </div>
                    </div>
                    {/*Services Three Single End*/}
                    {/*Services Three Single Start*/}
                    <div className="col-xl-3 col-lg-3 col-md-6 wow fadeInLeft" data-wow-delay="400ms">
                        <div className="service-three__single">
                            <div className="service-three__count"></div>
                            <div className="service-three__shape-1">
                                <img src="assets/images/shapes/service-three-shape-1.png" alt=""/>
                            </div>
                            <div className="service-three__icon">
                                <span className="icon-analytics"></span>
                            </div>
                            <h3 className="service-three__title"><Link href="digital-marketing">Marketing
                                    <br/> Analysis</Link></h3>
                        </div>
                    </div>
                    {/*Services Three Single End*/}
                    {/*Services Three Single Start*/}
                    <div className="col-xl-3 col-lg-3 col-md-6 wow fadeInLeft" data-wow-delay="500ms">
                        <div className="service-three__single">
                            <div className="service-three__count"></div>
                            <div className="service-three__shape-1">
                                <img src="assets/images/shapes/service-three-shape-1.png" alt=""/>
                            </div>
                            <div className="service-three__icon">
                                <span className="icon-curve"></span>
                            </div>
                            <h3 className="service-three__title"><Link href="graphic-designing">Graphic
                                    <br/> Designing</Link></h3>
                        </div>
                    </div>
                    {/*Services Three Single End*/}
                    {/*Services Three Single Start*/}
                    <div className="col-xl-3 col-lg-3 col-md-6 wow fadeInLeft" data-wow-delay="600ms">
                        <div className="service-three__single">
                            <div className="service-three__count"></div>
                            <div className="service-three__shape-1">
                                <img src="assets/images/shapes/service-three-shape-1.png" alt=""/>
                            </div>
                            <div className="service-three__icon">
                                <span className="icon-seo"></span>
                            </div>
                            <h3 className="service-three__title"><Link href="seo-content-writting">SEO & Content
                                    <br/> Writing</Link></h3>
                        </div>
                    </div>
                    {/*Services Three Single End*/}
                    {/*Services Three Single Start*/}
                    <div className="col-xl-3 col-lg-3 col-md-6 wow fadeInLeft" data-wow-delay="700ms">
                        <div className="service-three__single">
                            <div className="service-three__count"></div>
                            <div className="service-three__shape-1">
                                <img src="assets/images/shapes/service-three-shape-1.png" alt=""/>
                            </div>
                            <div className="service-three__icon">
                                <span className="icon-application"></span>
                            </div>
                            <h3 className="service-three__title"><Link href="app-development">Application
                                    <br/> Development</Link></h3>
                        </div>
                    </div>
                    {/*Services Three Single End*/}
                </div>
            </div>
        </section>
        {/*Service Three End*/}
       
        </>
    )
}
