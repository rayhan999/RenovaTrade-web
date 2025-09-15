'use client'
import Link from "next/link"
export default function Team() {
    return (
        <>
        {/*Team One Start*/}
        <section className="team-one">
            <div className="team-one__bg-box">
                <div className="team-one__bg" style={{ backgroundImage: ' url(assets/images/backgrounds/team-one-bg.jpg)' }} >
                </div>
            </div>
            <div className="container">
                <div className="section-title text-center">
                    <div className="section-title__tagline-box">
                        <div className="section-title__tagline-shape">
                            <img src="assets/images/shapes/section-title-tagline-shape_new.png" alt=""/>
                        </div>
                        <span className="section-title__tagline">Expert Members</span>
                    </div>
                    <h2 className="section-title__title">Meet Our Professtionals Team</h2>
                </div>
                <div className="row">
                    {/*Team One Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="100ms">
                        <div className="team-one__single">
                            <div className="team-one__img-box">
                                <div className="team-one__img">
                                    <img src="assets/images/team/team-1-1.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="team-one__content-inner">
                                <div className="team-one__content">
                                    <h3 className="team-one__name"><Link href="team-details">Leslie Alexander</Link></h3>
                                    <p className="team-one__sub-title">Digital Marketer</p>
                                    <div className="team-one__social">
                                        <Link href="team-details"><span className="icon-twitter"></span></Link>
                                        <Link href="team-details"><span className="icon-facebook"></span></Link>
                                        <Link href="team-details"><span className="icon-google-plus-logo"></span></Link>
                                        <Link href="team-details"><span className="icon-pinterest"></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Team One Single End*/}
                    {/*Team One Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="200ms">
                        <div className="team-one__single">
                            <div className="team-one__img-box">
                                <div className="team-one__img">
                                    <img src="assets/images/team/team-1-2.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="team-one__content-inner">
                                <div className="team-one__content">
                                    <h3 className="team-one__name"><Link href="team-details">Kendra Pual</Link></h3>
                                    <p className="team-one__sub-title">Developer</p>
                                    <div className="team-one__social">
                                        <Link href="team-details"><span className="icon-twitter"></span></Link>
                                        <Link href="team-details"><span className="icon-facebook"></span></Link>
                                        <Link href="team-details"><span className="icon-google-plus-logo"></span></Link>
                                        <Link href="team-details"><span className="icon-pinterest"></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Team One Single End*/}
                    {/*Team One Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInRight" data-wow-delay="300ms">
                        <div className="team-one__single">
                            <div className="team-one__img-box">
                                <div className="team-one__img">
                                    <img src="assets/images/team/team-1-3.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="team-one__content-inner">
                                <div className="team-one__content">
                                    <h3 className="team-one__name"><Link href="team-details">Devid L.Musilal</Link></h3>
                                    <p className="team-one__sub-title">Digital Marketer</p>
                                    <div className="team-one__social">
                                        <Link href="team-details"><span className="icon-twitter"></span></Link>
                                        <Link href="team-details"><span className="icon-facebook"></span></Link>
                                        <Link href="team-details"><span className="icon-google-plus-logo"></span></Link>
                                        <Link href="team-details"><span className="icon-pinterest"></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Team One Single End*/}
                </div>
            </div>
        </section>
        {/*Team One End*/}
        
            
        </>
    )
}
