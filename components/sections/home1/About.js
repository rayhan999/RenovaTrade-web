'use client'
import Link from "next/link"
export default function About() {
    return (
        <>
        {/*About One Start*/}
        <section className="about-one">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5">
                        <div className="about-one__left wow fadeInLeft" data-wow-delay="100ms">
                            <div className="about-one__img">
                                <img src="assets/images/resources/about_us.jpg" alt=""/>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-xl-7">
                        <div className="about-one__right wow fadeInRight" data-wow-delay="300ms">
                            <div className="section-title text-left">
                                <div className="section-title__tagline-box">
                                    <div className="section-title__tagline-shape">
                                        <img src="assets/images/shapes/section-title-tagline-shape_new.png" alt=""/>
                                    </div>
                                    <span className="section-title__tagline">About us</span>
                                </div>
                                <h2 className="section-title__title">Scrap Metal Merchants</h2>
                            </div>
                            {/* <p className="about-one__big-text">Suspendisse vel iaculis leo.Curabitur scelerisque mi porta
                                justo fermentum porta.</p> */}
                            <p className="about-one__text">Over the decades, we have expanded our operations into different sectors within the metals industry, including smelting, shredding and granulation. We currently handle over 100,000 tonne of non-ferrous a year. Our aim is to provide a premier service to our customers and suppliers alike, while maintaining an environmentally business model.

From our base in London, we work with clients of all sizes including scrap metal merchants, car breakers and demolition contractors. We operate sustainable business practices and have all the necessary licenses and accreditations in place. Giving you the comfort of dealing with a responsible scrap metal trader, who go over and above the industry standards.</p>
                            {/* <ul className="about-one__points list-unstyled">
                                <li>
                                    <div className="icon">
                                        <span className="icon-profit"></span>
                                    </div>
                                    <h4>Best Quality
                                        <br/> Project</h4>
                                </li>
                                <li>
                                    <div className="icon">
                                        <span className="icon-discussion"></span>
                                    </div>
                                    <h4>Get Free
                                        <br/> Consultation</h4>
                                </li>
                            </ul> */}
                            <div className="about-one__btn-box">
                                <Link href="contact" className="about-one__btn thm-btn">Contact us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*About One End*/}
        
        </>
    )
}
