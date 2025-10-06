'use client'
import Link from "next/link"
import ModalVideo from 'react-modal-video'
import { useState } from 'react'
export default function About() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>

        {/*About Three Start*/}
        <section className="about-three">
            <div className="about-three__bg-box">
                <div className="about-three__bg"
                    style={{ backgroundImage: ' url(assets/images/backgrounds/about-three-bg.jpg)' }} >
                    <div className="about-three__shape-2"
                        style={{ backgroundImage: ' url(assets/images/shapes/about-three-shape-2.png)' }} ></div>
                    <div className="about-three__video-link">
                        <a onClick={() => setOpen(true)} className="video-popup">
                            <div className="about-three__video-icon">
                                <span className="icon-play-button"></span>
                                <i className="ripple"></i>
                            </div>
                        </a>
                    </div>
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
                                <h2 className="section-title__title">Professional and Dedicated
                                    <br/> Consulting Services</h2>
                            </div>
                            <h4 className="about-three__text-1">Suspendisse vel iaculis leo.Curabitur scelerisque mi porta
                                justo fermentum porta.</h4>
                            <p className="about-three__text-2">Aliquam eros justo,Posuere lobortis viverr augue mattis
                                fermentum non ullamcorper
                                viverra laoreet augue.Aliquam eros justo,posuere lobortis non,viverra laoreet augue
                                mattis fermentum non ullamcorper</p>
                            <div className="about-three__points-and-year">
                                <ul className="about-three__points list-unstyled">
                                    <li>
                                        <div className="icon">
                                            <span className="icon-tick"></span>
                                        </div>
                                        <p>24/7 Call Services Available</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-tick"></span>
                                        </div>
                                        <p>How to improve business</p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-tick"></span>
                                        </div>
                                        <p>Great Skilled Consultant</p>
                                    </li>
                                </ul>
                                <div className="about-three__year">
                                    <div className="about-three__year-shape"></div>
                                    <p>Visionary
                                        <br/> Solutions</p>
                                </div>
                            </div>
                            <div className="about-three__btn-box">
                                <Link href="contact" className="about-three__btn thm-btn">Get Free Quote</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*About Three End*/}

        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Get7rqXYrbQ" onClose={() => setOpen(false)} />
        </>
    )
}
