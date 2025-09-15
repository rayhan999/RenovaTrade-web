'use client'
import Link from "next/link"

export default function Team() {
    return (
        <>
        
        {/*Team Three Start*/}
        <section className="team-three">
            <div className="container">
                <div className="section-title text-center">
                    <div className="section-title__tagline-box">
                        <div className="section-title__tagline-shape">
                            <img src="assets/images/shapes/section-title-tagline-shape_new.png" alt=""/>
                        </div>
                        <span className="section-title__tagline">Team Members</span>
                    </div>
                    <h2 className="section-title__title">Meet Our Expert People</h2>
                </div>
                <div className="row">
                    {/*Team Three Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="100ms">
                        <div className="team-three__single">
                            <div className="team-three__img-box">
                                <div className="team-three__img">
                                    <img src="assets/images/team/team-3-1.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="team-three__content-inner">
                                <div className="team-three__content">
                                    <h3 className="team-three__title"><Link href="team-details">Subrom Monalisa Era</Link>
                                    </h3>
                                    <p className="team-three__sub-title">Senior Manager</p>
                                    <div className="team-three__social">
                                        <Link href="#"><span className="icon-facebook"></span></Link>
                                        <Link href="#"><span className="icon-twitter"></span></Link>
                                        <Link href="#"><span className="icon-instagram"></span></Link>
                                        <Link href="#"><span className="icon-pinterest"></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Team Three Single End*/}
                    {/*Team Three Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="200ms">
                        <div className="team-three__single">
                            <div className="team-three__img-box">
                                <div className="team-three__img">
                                    <img src="assets/images/team/team-3-2.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="team-three__content-inner">
                                <div className="team-three__content">
                                    <h3 className="team-three__title"><Link href="team-details">Raymond Horn</Link>
                                    </h3>
                                    <p className="team-three__sub-title">Senior Manager</p>
                                    <div className="team-three__social">
                                        <Link href="#"><span className="icon-facebook"></span></Link>
                                        <Link href="#"><span className="icon-twitter"></span></Link>
                                        <Link href="#"><span className="icon-instagram"></span></Link>
                                        <Link href="#"><span className="icon-pinterest"></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Team Three Single End*/}
                    {/*Team Three Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInRight" data-wow-delay="300ms">
                        <div className="team-three__single">
                            <div className="team-three__img-box">
                                <div className="team-three__img">
                                    <img src="assets/images/team/team-3-3.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="team-three__content-inner">
                                <div className="team-three__content">
                                    <h3 className="team-three__title"><Link href="team-details">Liam Olivia Emma</Link>
                                    </h3>
                                    <p className="team-three__sub-title">Senior Manager</p>
                                    <div className="team-three__social">
                                        <Link href="#"><span className="icon-facebook"></span></Link>
                                        <Link href="#"><span className="icon-twitter"></span></Link>
                                        <Link href="#"><span className="icon-instagram"></span></Link>
                                        <Link href="#"><span className="icon-pinterest"></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Team Three Single End*/}
                </div>
            </div>
        </section>
        {/*Team Three End*/}
        
        </>
    )
}
