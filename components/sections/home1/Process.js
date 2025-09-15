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
                        <span className="section-title__tagline">Simple Process</span>
                    </div>
                    <h2 className="section-title__title">4 Easy Working Steps</h2>
                </div>
                <div className="row">
                    {/*Process One Single Start*/}
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="100ms">
                        <div className="process-one__single-inner">
                            <div className="process-one__single-shape"></div>
                            <div className="process-one__single">
                                <div className="process-one__single-bg"
                                    style={{ backgroundImage: ' url(assets/images/resources/process-one-single-bg.jpg)' }} >
                                </div>
                                <div className="process-one__icon">
                                    <span className="icon-coding"></span>
                                </div>
                                <h3 className="process-one__title">Web Development</h3>
                                <p className="process-one__text">There’re many variation of
                                    passage of avilale.</p>
                                <div className="process-one__count"></div>
                            </div>
                        </div>
                    </div>
                    {/*Process One Single End*/}
                    {/*Process One Single Start*/}
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="200ms">
                        <div className="process-one__single-inner">
                            <div className="process-one__single-shape"></div>
                            <div className="process-one__single">
                                <div className="process-one__single-bg"
                                    style={{ backgroundImage: ' url(assets/images/resources/process-one-single-bg.jpg)' }} >
                                </div>
                                <div className="process-one__icon">
                                    <span className="icon-curve"></span>
                                </div>
                                <h3 className="process-one__title">Industry Design</h3>
                                <p className="process-one__text">There’re many variation of
                                    passage of avilale.</p>
                                <div className="process-one__count"></div>
                            </div>
                        </div>
                    </div>
                    {/*Process One Single End*/}
                    {/*Process One Single Start*/}
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="300ms">
                        <div className="process-one__single-inner">
                            <div className="process-one__single-shape"></div>
                            <div className="process-one__single">
                                <div className="process-one__single-bg"
                                    style={{ backgroundImage: ' url(assets/images/resources/process-one-single-bg.jpg)' }} >
                                </div>
                                <div className="process-one__icon">
                                    <span className="icon-like"></span>
                                </div>
                                <h3 className="process-one__title">Satisfied Design</h3>
                                <p className="process-one__text">There’re many variation of
                                    passage of avilale.</p>
                                <div className="process-one__count"></div>
                            </div>
                        </div>
                    </div>
                    {/*Process One Single End*/}
                    {/*Process One Single Start*/}
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="400ms">
                        <div className="process-one__single-inner">
                            <div className="process-one__single-shape"></div>
                            <div className="process-one__single">
                                <div className="process-one__single-bg"
                                    style={{ backgroundImage: ' url(assets/images/resources/process-one-single-bg.jpg)' }} >
                                </div>
                                <div className="process-one__icon">
                                    <span className="icon-bullhorn"></span>
                                </div>
                                <h3 className="process-one__title">Digital Strategy</h3>
                                <p className="process-one__text">There’re many variation of
                                    passage of avilale.</p>
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
