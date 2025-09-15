'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {
    return (
        <>
        <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Project">
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
                    <h2 className="section-title__title">Our Recent Project Gallery</h2>
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
                                    <h3 className="project-one__title"><Link href="project-details">Consultant Service</Link>
                                    </h3>
                                    <p className="project-one__sub-title">Digital Marketing</p>
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
                                    <h3 className="project-one__title"><Link href="project-details">Business Strategy</Link>
                                    </h3>
                                    <p className="project-one__sub-title">Digital Marketing</p>
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
                                    <h3 className="project-one__title"><Link href="project-details">Consultant Service</Link>
                                    </h3>
                                    <p className="project-one__sub-title">Managing Director</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Project One Single End*/}
                    {/*Project One Single Start*/}
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="400ms">
                        <div className="project-one__single">
                            <div className="project-one__img-box">
                                <div className="project-one__img">
                                    <img src="assets/images/project/project-1-4.jpg" alt=""/>
                                </div>
                                <div className="project-one__content">
                                    <h3 className="project-one__title"><Link href="project-details">UI/UX
                                            Designing</Link></h3>
                                    <p className="project-one__sub-title">Digital Marketing</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Project One Single End*/}
                    {/*Project One Single Start*/}
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="500ms">
                        <div className="project-one__single">
                            <div className="project-one__img-box">
                                <div className="project-one__img">
                                    <img src="assets/images/project/project-1-5.jpg" alt=""/>
                                </div>
                                <div className="project-one__content">
                                    <h3 className="project-one__title"><Link href="project-details">Webside
                                            Development</Link></h3>
                                    <p className="project-one__sub-title">Managing Director</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Project One Single End*/}
                    {/*Project One Single Start*/}
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInRight" data-wow-delay="600ms">
                        <div className="project-one__single">
                            <div className="project-one__img-box">
                                <div className="project-one__img">
                                    <img src="assets/images/project/project-1-6.jpg" alt=""/>
                                </div>
                                <div className="project-one__content">
                                    <h3 className="project-one__title"><Link href="project-details">Mobile
                                            Application</Link></h3>
                                    <p className="project-one__sub-title">Managing Director</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Project One Single End*/}
                </div>
            </div>
        </section>
        {/*Project One End*/}

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