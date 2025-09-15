import Link from "next/link"
import Layout from "@/components/layout/Layout"
export default function Home() {

    return (
        <>
        <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Team Details">
        {/*Team Details Start*/}
        <section className="team-details">
            <div className="container">
                <div className="team-details__top">
                    <div className="row">
                        <div className="col-xl-5 col-lg-5">
                            <div className="team-details__top-left">
                                <div className="team-details__top-img">
                                    <img src="assets/images/team/team-details-top-img-1.jpg" alt=""/>
                                    <div className="team-details__client-content">
                                        <p>Adviser</p>
                                        <h4>Bike D. Samire</h4>
                                    </div>
                                    <div className="team-details__social-and-share">
                                        <div className="team-details__social">
                                            <Link href="#"><span className="fab fa-facebook-f"></span></Link>
                                            <Link href="#"><span className="fab fa-twitter"></span></Link>
                                            <Link href="#"><span className="fab fa-linkedin-in"></span></Link>
                                            <Link href="#"><span className="fab fa-dribbble"></span></Link>
                                        </div>
                                        <div className="team-details__share">
                                            <Link href="#"><span className="fas fa-share-alt"></span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-7">
                            <div className="team-details__right">
                                <div className="section-title text-left">
                                    <div className="section-title__tagline-box">
                                        <div className="section-title__tagline-shape">
                                            <img src="assets/images/shapes/section-title-tagline-shape_new.png" alt=""/>
                                        </div>
                                        <span className="section-title__tagline">Get To Know Us</span>
                                    </div>
                                    <h2 className="section-title__title">Member Information</h2>
                                </div>
                                <p className="team-details__text">Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                    laboris nisi aliquip
                                    ex ea commodo consequat. Duis aute irure dolor reprehenderit in voluptate velits
                                    esse cillum dolore eu fugiat nulla pariatur. </p>
                                <ul className="team-details__points list-unstyled">
                                    <li>
                                        <div className="icon">
                                            <span className="icon-check"></span>
                                        </div>
                                        <p>Ut enim ad minim veniam, quis nostrud exercitation ut aliquip </p>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <span className="icon-check"></span>
                                        </div>
                                        <p>Duis aute irure dolor in reprehenderit in voluptate eu fugiat nulla </p>
                                    </li>
                                </ul>
                                <div className="team-details__call-box">
                                    <ul className="team-details__call-list list-unstyled">
                                        <li>
                                            <p>Phone : <Link href="tel:000325123">000-325-123</Link></p>
                                        </li>
                                        <li>
                                            <p>Email : <Link href="mailto:Example@gmail.com">Example@gmail.com</Link></p>
                                        </li>
                                        <li>
                                            <p>Gender : <span>Male</span></p>
                                        </li>
                                    </ul>
                                    <ul className="team-details__call-list team-details__call-list-2 list-unstyled">
                                        <li>
                                            <p>Website : <Link href="#">Webexample.com</Link></p>
                                        </li>
                                        <li>
                                            <p>Nationality : <span>American</span></p>
                                        </li>
                                        <li>
                                            <p>Address : <span>Raselina, New York</span></p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="team-details__bottom">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6">
                            <div className="team-details__bottom-left">
                                <div className="section-title text-left">
                                    <div className="section-title__tagline-box">
                                        <div className="section-title__tagline-shape">
                                            <img src="assets/images/shapes/section-title-tagline-shape_new.png" alt=""/>
                                        </div>
                                        <span className="section-title__tagline">What Offer You</span>
                                    </div>
                                    <h2 className="section-title__title">How We Help You</h2>
                                </div>
                                <p className="team-details__bottom-left-text">Penatibus pulvinar hac lacinia interdum
                                    fermentum tortor aite montes aecenas pretiun dignissim facilisi top level vehicula.
                                </p>
                                <div className="team-details__bottom-left-points-box">
                                    <ul className="team-details__bottom-left-points-list list-unstyled">
                                        <li>
                                            <div className="team-details__bottom-points-count"></div>
                                            <div className="team-details__bottom-points-content">
                                                <h3>Customer Support</h3>
                                                <p>Congue lacinia aenean venenatis arcu rutrum vitae sus<br/> pena tibus
                                                    lectus dapibus integer habitasses</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="team-details__bottom-points-count"></div>
                                            <div className="team-details__bottom-points-content">
                                                <h3>Execultive Member</h3>
                                                <p>Congue lacinia aenean venenatis arcu rutrum vitae sus<br/> pena tibus
                                                    lectus dapibus integer habitasses</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="team-details__bottom-points-count"></div>
                                            <div className="team-details__bottom-points-content">
                                                <h3>Creative Solution</h3>
                                                <p>Congue lacinia aenean venenatis arcu rutrum vitae sus<br/> pena tibus
                                                    lectus dapibus integer habitasses</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="team-details__bottom-img">
                                <img src="assets/images/team/team-details-bottom-img-1.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*Team Details End*/}


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