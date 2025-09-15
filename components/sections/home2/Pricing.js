'use client'
import Link from "next/link"
export default function Pricing() {
    
    return (
        <>
        
        {/*Pricing One Start*/}
        <section className="pricing-one">
            <div className="container">
                <div className="section-title text-center">
                    <div className="section-title__tagline-box">
                        <div className="section-title__tagline-shape">
                            <img src="assets/images/shapes/section-title-tagline-shape_new.png" alt=""/>
                        </div>
                        <span className="section-title__tagline">Pricing Plans</span>
                    </div>
                    <h2 className="section-title__title">The Terms Pricing Package</h2>
                </div>
                <div className="row">
                    {/*Pricing One Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="100ms">
                        <div className="pricing-one__single">
                            <div className="pricing-one__title-box">
                                <div className="pricing-one__title-box-bg"
                                    style={{ backgroundImage: ' url(assets/images/backgrounds/pricing-one-title-box-bg.jpg)' }} >
                                </div>
                                <h3 className="pricing-one__title">Basic Plan</h3>
                                <h4 className="pricing-one__price">$40.00 <span>[Monthly]</span></h4>
                            </div>
                            <div className="pricing-one__points-box">
                                <ul className="pricing-one__points list-unstyled">
                                    <li>
                                        <div className="icon">
                                            <span className="icon-check"></span>
                                        </div>
                                        <p>Analyzer Solution business</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-check"></span>
                                        </div>
                                        <p>Market Growth Solution</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-check"></span>
                                        </div>
                                        <p>Team Best Support</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-check"></span>
                                        </div>
                                        <p>Complete Documentation</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-check"></span>
                                        </div>
                                        <p>24/7 Consultant Service</p>
                                    </li>
                                </ul>
                                <div className="pricing-one__btn-box">
                                    <Link href="pricing" className="pricing-one__btn thm-btn">See More<span
                                            className="fas fa-angle-right"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Pricing One Single End*/}
                    {/*Pricing One Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="200ms">
                        <div className="pricing-one__single">
                            <div className="pricing-one__title-box">
                                <div className="pricing-one__title-box-bg"
                                    style={{ backgroundImage: ' url(assets/images/backgrounds/pricing-one-title-box-bg.jpg)' }} >
                                </div>
                                <h3 className="pricing-one__title">Standard</h3>
                                <h4 className="pricing-one__price">$65.00 <span>[Monthly]</span></h4>
                            </div>
                            <div className="pricing-one__points-box">
                                <ul className="pricing-one__points list-unstyled">
                                    <li>
                                        <div className="icon">
                                            <span className="icon-check"></span>
                                        </div>
                                        <p>Analyzer Solution business</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-check"></span>
                                        </div>
                                        <p>Market Growth Solution</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-check"></span>
                                        </div>
                                        <p>Team Best Support</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-check"></span>
                                        </div>
                                        <p>Complete Documentation</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-check"></span>
                                        </div>
                                        <p>24/7 Consultant Service</p>
                                    </li>
                                </ul>
                                <div className="pricing-one__btn-box">
                                    <Link href="pricing" className="pricing-one__btn thm-btn">See More<span
                                            className="fas fa-angle-right"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Pricing One Single End*/}
                    {/*Pricing One Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInRight" data-wow-delay="300ms">
                        <div className="pricing-one__single">
                            <div className="pricing-one__title-box">
                                <div className="pricing-one__title-box-bg"
                                    style={{ backgroundImage: ' url(assets/images/backgrounds/pricing-one-title-box-bg.jpg)' }} >
                                </div>
                                <h3 className="pricing-one__title">Premium</h3>
                                <h4 className="pricing-one__price">$90.00 <span>[Monthly]</span></h4>
                            </div>
                            <div className="pricing-one__points-box">
                                <ul className="pricing-one__points list-unstyled">
                                    <li>
                                        <div className="icon">
                                            <span className="icon-check"></span>
                                        </div>
                                        <p>Analyzer Solution business</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-check"></span>
                                        </div>
                                        <p>Market Growth Solution</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-check"></span>
                                        </div>
                                        <p>Team Best Support</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-check"></span>
                                        </div>
                                        <p>Complete Documentation</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-check"></span>
                                        </div>
                                        <p>24/7 Consultant Service</p>
                                    </li>
                                </ul>
                                <div className="pricing-one__btn-box">
                                    <Link href="pricing" className="pricing-one__btn thm-btn">See More<span
                                            className="fas fa-angle-right"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Pricing One Single End*/}
                </div>
            </div>
        </section>
        {/*Pricing One End*/}

        </>
    )
}
