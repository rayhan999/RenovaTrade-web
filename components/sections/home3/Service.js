'use client'
import Link from "next/link"
export default function Service() {
    return (
        <>
       {/*Services Two Start*/}
       <section className="service-two">
            <div className="container">
                <div className="section-title text-center">
                    <div className="section-title__tagline-box">
                        <div className="section-title__tagline-shape">
                            <img src="assets/images/shapes/section-title-tagline-shape_new.png" alt=""/>
                        </div>
                        <span className="section-title__tagline">What We Offer</span>
                    </div>
                    <h2 className="section-title__title">Our Recent Business Projects</h2>
                </div>
                <div className="row">
                    {/*service Two Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="100ms">
                        <div className="service-two__single">
                            <div className="service-two__content-inner">
                                <div className="service-two__content">
                                    <div className="service-two__icon">
                                        <span className="icon-profit"></span>
                                    </div>
                                    <h3><Link href="digital-marketing">Investment
                                            Planning</Link></h3>
                                </div>
                                <p className="service-two__text">Design professionals,there's a bit of controversy
                                    surrounding the filler text</p>
                                <div className="service-two__read-more">
                                    <Link href="digital-marketing">Read More<span
                                            className="fas fa-arrow-circle-right"></span></Link>
                                </div>
                            </div>
                            <div className="service-two__img-box">
                                <div className="service-two__img-box-bg"
                                    style={{ backgroundImage: ' url(assets/images/shapes/service-two-img-box-bg.png)' }} >
                                </div>
                                <div className="service-two__img-box-bg-2"
                                    style={{ backgroundImage: ' url(assets/images/shapes/service-two-img-box-hover-bg.png)' }} >
                                </div>
                                <div className="service-two__img">
                                    <img src="assets/images/services/services-2-1.jpg" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*service Two Single End*/}
                    {/*service Two Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="200ms">
                        <div className="service-two__single">
                            <div className="service-two__content-inner">
                                <div className="service-two__content">
                                    <div className="service-two__icon">
                                        <span className="icon-responsible"></span>
                                    </div>
                                    <h3><Link href="ui-ux-designing">High Quality
                                            Services</Link></h3>
                                </div>
                                <p className="service-two__text">Design professionals,there's a bit of controversy
                                    surrounding the filler text</p>
                                <div className="service-two__read-more">
                                    <Link href="ui-ux-designing">Read More<span
                                            className="fas fa-arrow-circle-right"></span></Link>
                                </div>
                            </div>
                            <div className="service-two__img-box">
                                <div className="service-two__img-box-bg"
                                    style={{ backgroundImage: ' url(assets/images/shapes/service-two-img-box-bg.png)' }} >
                                </div>
                                <div className="service-two__img-box-bg-2"
                                    style={{ backgroundImage: ' url(assets/images/shapes/service-two-img-box-hover-bg.png)' }} >
                                </div>
                                <div className="service-two__img">
                                    <img src="assets/images/services/services-2-2.jpg" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*service Two Single End*/}
                    {/*service Two Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInRight" data-wow-delay="300ms">
                        <div className="service-two__single">
                            <div className="service-two__content-inner">
                                <div className="service-two__content">
                                    <div className="service-two__icon">
                                        <span className="icon-creative"></span>
                                    </div>
                                    <h3><Link href="website-development">Perfect Web
                                            Solution</Link></h3>
                                </div>
                                <p className="service-two__text">Design professionals,there's a bit of controversy
                                    surrounding the filler text</p>
                                <div className="service-two__read-more">
                                    <Link href="website-development">Read More<span
                                            className="fas fa-arrow-circle-right"></span></Link>
                                </div>
                            </div>
                            <div className="service-two__img-box">
                                <div className="service-two__img-box-bg"
                                    style={{ backgroundImage: ' url(assets/images/shapes/service-two-img-box-bg.png)' }} >
                                </div>
                                <div className="service-two__img-box-bg-2"
                                    style={{ backgroundImage: ' url(assets/images/shapes/service-two-img-box-hover-bg.png)' }} >
                                </div>
                                <div className="service-two__img">
                                    <img src="assets/images/services/services-2-3.jpg" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*service Two Single End*/}
                </div>
            </div>
        </section>
        {/*Services Two End*/}
       
        </>
    )
}
