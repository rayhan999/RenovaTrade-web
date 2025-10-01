'use client'
import Link from "next/link"
export default function Process() {
    return (
        <>
        {/*Process One Start*/}
        <section className="process-one">
            <div className="container">
                <div className="section-title text-center">
                    <div className="section-title__tagline-box">
                        <div className="section-title__tagline-shape">
                            <img src="assets/images/shapes/section-title-tagline-shape_new.png" alt=""/>
                        </div>
                        <span className="section-title__tagline">Core Values</span>
                    </div>
                    <h2 className="section-title__title">4 Principles We Stand By</h2>
                </div>
                <div className="row" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'stretch' }}>
                    {/*Process One Single Start*/}
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="100ms" style={{ display: 'flex' }}>
                        <div className="process-one__single-inner" style={{ flex: 1 }}>
                            <div className="process-one__single-shape"></div>
                            <div className="process-one__single" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                                <div className="process-one__single-bg"
                                    style={{ backgroundImage: ' url(assets/images/resources/process-one-single-bg.jpg)' }} >
                                </div>
                                <div className="process-one__icon">
                                    <span className="icon-coding"></span>
                                </div>
                                <h3 className="process-one__title">Excellence on a go</h3>
                                <p className="process-one__text">Renova Trade signifies the excellence in ensuring the accurate product, measurement, and in-time delivery. The goal is to uphold the business with satisfied stakeholders.  
</p>
                                <div className="process-one__count"></div>
                            </div>
                        </div>
                    </div>
                    {/*Process One Single End*/}
                    {/*Process One Single Start*/}
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="200ms" style={{ display: 'flex' }}>
                        <div className="process-one__single-inner" style={{ flex: 1 }}>
                            <div className="process-one__single-shape"></div>
                            <div className="process-one__single" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                                <div className="process-one__single-bg"
                                    style={{ backgroundImage: ' url(assets/images/resources/process-one-single-bg.jpg)' }} >
                                </div>
                                <div className="process-one__icon">
                                    <span className="icon-curve"></span>
                                </div>
                                <h3 className="process-one__title">Commitment</h3>
                                <p className="process-one__text">We commit the accuracy of products, smooth transaction and business volume to.</p>
                                <div className="process-one__count"></div>
                            </div>
                        </div>
                    </div>
                    {/*Process One Single End*/}
                    {/*Process One Single Start*/}
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="300ms" style={{ display: 'flex' }}>
                        <div className="process-one__single-inner" style={{ flex: 1 }}>
                            <div className="process-one__single-shape"></div>
                            <div className="process-one__single" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                                <div className="process-one__single-bg"
                                    style={{ backgroundImage: ' url(assets/images/resources/process-one-single-bg.jpg)' }} >
                                </div>
                                <div className="process-one__icon">
                                    <span className="icon-like"></span>
                                </div>
                                <h3 className="process-one__title">Quality Conscious</h3>
                                <p className="process-one__text">Ensuring the quality assurance for different financial documents like- LC. </p>
                                <div className="process-one__count"></div>
                            </div>
                        </div>
                    </div>
                    {/*Process One Single End*/}
                    {/*Process One Single Start*/}
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="400ms" style={{ display: 'flex' }}>
                        <div className="process-one__single-inner" style={{ flex: 1 }}>
                            <div className="process-one__single-shape"></div>
                            <div className="process-one__single" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                                <div className="process-one__single-bg"
                                    style={{ backgroundImage: ' url(assets/images/resources/process-one-single-bg.jpg)' }} >
                                </div>
                                <div className="process-one__icon">
                                    <span className="icon-bullhorn"></span>
                                </div>
                                <h3 className="process-one__title">Prompt Response</h3>
                                <p className="process-one__text">The right response at the right time is at the core of our communication motto. We try to save time and resources with prompt communication. 
</p>
                                <div className="process-one__count"></div>
                            </div>
                        </div>
                    </div>
                    {/*Process One Single End*/}
                </div>
            </div>
        </section>
        {/*Process One End*/}
        
            
        </>
    )
}
