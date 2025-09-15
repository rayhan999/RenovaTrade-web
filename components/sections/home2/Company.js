'use client'
import Link from "next/link"
export default function Company() {
    return (
        <>
        {/*Company Benefits Start*/}
        <section className="company-benefits">
            <div className="company-benefits__bg"
                style={{ backgroundImage: ' url(assets/images/backgrounds/company-benefits-bg.jpg)' }} ></div>
            <div className="company-benefits__shape-2">
                <img src="assets/images/shapes/company-benefits-shape-2.png" alt=""/>
            </div>
            <div className="company-benefits__shape-4 float-bob-y">
                <img src="assets/images/shapes/company-benefits-shape-4.png" alt=""/>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6">
                        <div className="company-benefits__left">
                            <div className="company-benefits__img">
                                <img src="assets/images/resources/company-benefits-img-1.png" alt=""
                                    className="wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2500ms"/>
                                <p className="company-benefits__client-name">Smith Hardson</p>
                                <div className="company-benefits__shape-1">
                                    <img src="assets/images/shapes/company-benefits-shape-1.png" alt=""/>
                                </div>
                                <div className="company-benefits__shape-3">
                                    <img src="assets/images/shapes/company-benefits-shape-3.png" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="company-benefits__right">
                            <div className="section-title text-left">
                                <div className="section-title__tagline-box">
                                    <div className="section-title__tagline-shape">
                                        <img src="assets/images/shapes/section-title-tagline-shape_new.png" alt=""/>
                                    </div>
                                    <span className="section-title__tagline">Company Benefits</span>
                                </div>
                                <h2 className="section-title__title">We're Best Our Website
                                    Create & Solution.</h2>
                            </div>
                            <p className="company-benefits__text">There are many variations of available but the majority
                                have
                                suffered. Alteration in some form, lipsum is simply free text by
                                injected humou or randomised words even believable.</p>
                            <ul className="company-benefits__points list-unstyled">
                                <li>
                                    <div className="icon">
                                        <span className="icon-coding"></span>
                                    </div>
                                    <div className="content">
                                        <h3><Link href="services">Business Process Outsourcing</Link></h3>
                                        <p>Lorem ipsum dolor sit amet,consectetur notted
                                            adipsicing elit sed do eiusmod tempor incididunt.</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="icon-tiles"></span>
                                    </div>
                                    <div className="content">
                                        <h3><Link href="services">Business Process Outsourcing</Link></h3>
                                        <p>Lorem ipsum dolor sit amet,consectetur notted
                                            adipsicing elit sed do eiusmod tempor incididunt.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*Company Benefits End*/}
    
        </>
    )
}
