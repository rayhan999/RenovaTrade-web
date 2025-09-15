'use client'
import Link from "next/link"

export default function Project() {
    return (
        <>
        {/*Project One Start*/}
        <section className="project-one">
            <div className="container">
                <div className="section-title text-center">
                    <div className="section-title__tagline-box">
                        <div className="section-title__tagline-shape">
                            <img src="assets/images/shapes/section-title-tagline-shape_new.png" alt=""/>
                        </div>
                        <span className="section-title__tagline">Our Portfolio</span>
                    </div>
                    <h2 className="section-title__title">Our Recent Meetups</h2>
                </div>
                <div className="row">
                    {/*Project One Single Start*/}
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="100ms">
                        <div className="project-one__single">
                            <div className="project-one__img-box">
                                <div className="project-one__img">
                                    <img src="assets/images/project/project-1-1.jpg" alt=""/>
                                </div>
                                <div className="project-one__content">
                                    <h3 className="project-one__title"><Link href="project-details">Spring Welcome</Link>
                                    </h3>
                                    <p className="project-one__sub-title">General Meeting</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Project One Single End*/}
                    {/*Project One Single Start*/}
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                        <div className="project-one__single">
                            <div className="project-one__img-box">
                                <div className="project-one__img">
                                    <img src="assets/images/project/project-1-2.jpg" alt=""/>
                                </div>
                                <div className="project-one__content">
                                    <h3 className="project-one__title"><Link href="project-details">Road To Laajavuori</Link>
                                    </h3>
                                    <p className="project-one__sub-title">Hiking Trip</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Project One Single End*/}
                    {/*Project One Single Start*/}
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="300ms">
                        <div className="project-one__single">
                            <div className="project-one__img-box">
                                <div className="project-one__img">
                                    <img src="assets/images/project/project-1-3.jpg" alt=""/>
                                </div>
                                <div className="project-one__content">
                                    <h3 className="project-one__title"><Link href="project-details">Chefs soufflé!</Link>
                                    </h3>
                                    <p className="project-one__sub-title">Cooking Session</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Project One Single End*/}
                    
                </div>
            </div>
        </section>
        {/*Project One End*/}

        </>
    )
}
