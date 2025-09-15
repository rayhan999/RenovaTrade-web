'use client'
import CounterUp from "@/components/elements/CounterUp"
import Link from "next/link"
export default function About() {
    return (
        <>

        {/*About Two Start*/}
        <section className="about-two">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5">
                        <div className="about-two__left wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2500ms">
                            <div className="about-two__img">
                                <img src="assets/images/resources/about-two-img-1.png" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-7">
                        <div className="about-two__right">
                            <div className="section-title text-left">
                                <div className="section-title__tagline-box">
                                    <div className="section-title__tagline-shape">
                                        <img src="assets/images/shapes/section-title-tagline-shape_new.png" alt=""/>
                                    </div>
                                    <span className="section-title__tagline">Our Introduction</span>
                                </div>
                                <h2 className="section-title__title">Make it easy to do Business
                                    <br/> with you</h2>
                            </div>
                            <h4 className="about-two__text-1">Suspendisse vel iaculis leo. Curabitur scelerisque
                                mi porta justo fermentum porta.</h4>
                            <p className="about-two__text-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, set do
                                eiusmod tempor
                                insididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                nostrud exeracition ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <div className="about-two__client-info">
                                <div className="about-two__client-img-box">
                                    <div className="about-two__client-img">
                                        <img src="assets/images/resources/about-two-client-img.jpg" alt=""/>
                                    </div>
                                </div>
                                <div className="about-two__client-content">
                                    <p className="about-two__client-name">David Smith</p>
                                    <p className="about-two__client-sub-title">CEO & Founder</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*About Two End*/}

        
        </>
    )
}
