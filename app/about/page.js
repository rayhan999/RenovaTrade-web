'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import ModalVideo from 'react-modal-video'
import { useState } from 'react'
export default function Home() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
        <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="About Us">
    
        {/*About Three Start*/}
        <section className="about-three about-four">
            <div className="about-three__bg-box">
                <div className="about-three__bg"
                    style={{ backgroundImage: ' url(assets/images/backgrounds/about_us_bg.jpg)' }} >
                    {/* <div className="about-three__shape-2"
                        style={{ backgroundImage: ' url(assets/images/shapes/about-three-shape-2.png)' }} ></div> */}
                    {/* <div className="about-three__video-link">
                        <a onClick={() => setOpen(true)} className="video-popup">
                            <div className="about-three__video-icon">
                                <span className="icon-play-button"></span>
                                <i className="ripple"></i>
                            </div>
                        </a>
                    </div> */}
                </div>
                <div className="about-three__shape-1">
                    <img src="assets/images/shapes/about-three-shape-1.jpg" alt=""/>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 col-lg-5"></div>
                    <div className="col-xl-7 col-lg-7">
                        <div className="about-three__right">
                            <div className="section-title text-left">
                                <div className="section-title__tagline-box">
                                    <div className="section-title__tagline-shape">
                                        <img src="assets/images/shapes/section-title-tagline-shape_new.png" alt=""/>
                                    </div>
                                    <span className="section-title__tagline">Get to know us</span>
                                </div>
                                <h2 className="section-title__title">Scrap Metal Merchants</h2>
                            </div>
                            {/* <h4 className="about-three__text-1">Suspendisse vel iaculis leo.Curabitur scelerisque mi porta
                                justo fermentum porta.</h4> */}
                           <p className="about-one__text">We bring the best value in managing the scrap metal having multiple sourcing and with the destinations across Europe and South Asia. renova Trade focuses on sourcing recyclable raw scrap metals from Europe and selling to the South Asian markets where it finds a new form to serve new purposes. We specialize in exporting the heavy metal scraps that includes HMS1, HMS2, along with different grades of stainless steels and re-rollable metals. 
</p>
                            <div className="about-three__points-and-year">
                                <ul className="about-three__points list-unstyled">
                                    <li>
                                        <div className="icon">
                                            <span className="icon-tick"></span>
                                        </div>
                                        <p>Best prices paid for all metal</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-tick"></span>
                                        </div>
                                        <p>Same day payments</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-tick"></span>
                                        </div>
                                        <p>Efficient and friendly service</p>
                                    </li>
                                </ul>
                                <div className="about-three__year">
                                    <div className="about-three__year-shape"></div>
                                    <p>Since
                                        <br/> 2025</p>
                                </div>
                            </div>
                            <div className="about-three__btn-box">
                                <Link href="contact" className="about-three__btn thm-btn">Contact us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*About Three End*/}
        

        {/*Contact One Start*/}
        {/* <section className="contact-one">
            <div className="contact-one__bg" style={{ backgroundImage: ' url(assets/images/backgrounds/contact-one-bg.jpg)' }} >
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 col-lg-5">
                        <div className="contact-one__left wow slideInLeft" data-wow-delay="100ms"
                            data-wow-duration="2500ms">
                            <div className="contact-one__from-shape-1">
                                <img src="assets/images/shapes/contact-one-form-shape-1.png" alt=""/>
                            </div>
                            <form className="contact-form-validated contact-one__form"
                                method="post" >
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="contact-one__input-box">
                                            <input type="text" name="username" placeholder="Your Name" required=""/>
                                            <div className="contact-one__input-box-icon">
                                                <span className="icon-people"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-12">
                                        <div className="contact-one__input-box">
                                            <input type="email" name="email" placeholder="Email Address" required=""/>
                                            <div className="contact-one__input-box-icon">
                                                <span className="icon-open-mail"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-12">
                                        <div className="contact-one__input-box">
                                            <input type="text" name="phone" placeholder="Phone Number" required=""/>
                                            <div className="contact-one__input-box-icon">
                                                <span className="icon-phone-call"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-12">
                                        <div className="contact-one__input-box">
                                            <div className="contact-one__input-box-icon">
                                                <span className="icon-edit"></span>
                                            </div>
                                            <div className="select-box">
                                                <select className="wide">
                                                    <option data-display="Select Subject">Subject</option>
                                                    <option>Select Subject 01</option>
                                                    <option>Select Subject 02</option>
                                                    <option>Select Subject 03</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-12">
                                        <div className="contact-one__btn-box">
                                            <button type="submit" className="thm-btn contact-one__btn">Submit Now</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div className="result"></div>
                        </div>
                    </div>
                    <div className="col-xl-8 col-lg-7">
                        <div className="contact-one__right">
                            <div className="contact-one__video-link wow zoomIn" data-wow-delay="100ms"
                                data-wow-duration="3500ms">
                                <a onClick={() => setOpen(true)} className="video-popup">
                                    <div className="contact-one__video-icon">
                                        <span className="icon-play-button"></span>
                                        <i className="ripple"></i>
                                    </div>
                                </a>
                                <h4 className="contact-one__video-text">Better Digital Marketing Solution
                                    <br/> & Services Fingertips</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> */}
        {/*Contact One End*/}

        {/*Sliding Text Start*/}
        {/* <section className="sliding-text">
            <div className="sliding-text__inner">
                <ul className="sliding-text__list marquee_mode-1 list-unstyled">
                    <li>
                        <div className="icon">
                            <img src="assets/images/resources/sliding-text-img-1.png" alt=""/>
                        </div>
                        <p>Cretive Agency</p>
                    </li>
                    <li>
                        <div className="icon">
                            <img src="assets/images/resources/sliding-text-img-1.png" alt=""/>
                        </div>
                        <p>Digital Marketing</p>
                    </li>
                    <li>
                        <div className="icon">
                            <img src="assets/images/resources/sliding-text-img-1.png" alt=""/>
                        </div>
                        <p>Design & Development Craft</p>
                    </li>
                    <li>
                        <div className="icon">
                            <img src="assets/images/resources/sliding-text-img-1.png" alt=""/>
                        </div>
                        <p>Transofrm Ideas Into Reality</p>
                    </li>
                    <li>
                        <div className="icon">
                            <img src="assets/images/resources/sliding-text-img-1.png" alt=""/>
                        </div>
                        <p>It Consulting</p>
                    </li>
                    <li>
                        <div className="icon">
                            <img src="assets/images/resources/sliding-text-img-1.png" alt=""/>
                        </div>
                        <p>Seo Optimization</p>
                    </li>
                </ul>
            </div>
        </section> */}
        {/*Sliding Text End*/}

        {/*Blog Three Start*/}
        
        {/*Blog Three End*/}

        {/*CTA One Start*/}
        {/* <section className="cta-one">
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
        </section> */}
        {/*CTA One End*/}
        {/* <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Get7rqXYrbQ" onClose={() => setOpen(false)} /> */}
        </Layout>
        </>
    )
}


