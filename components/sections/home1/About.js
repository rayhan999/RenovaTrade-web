'use client'
import Link from "next/link"
export default function About() {
    return (
        <>
        {/*About One Start*/}
        <section className="about-three about-four">
            <div className="about-three__bg-box">
                <div className="about-three__bg"
                    style={{ backgroundImage: ' url(assets/images/resources/about_us.jpg)' }} >
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
        {/*About One End*/}
        
        </>
    )
}
