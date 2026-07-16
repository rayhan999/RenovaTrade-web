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
                        <span className="section-title__tagline">Our Team</span>
                    </div>
                    <h2 className="section-title__title">Meet the People Behind Renova</h2>
                </div>
                <div className="row justify-content-center">
                    {/*Team One Single Start*/}
                    <div className="col-xl-4 col-lg-4 col-md-8 wow fadeInUp" data-wow-delay="100ms">
                        <div className="team-one__single">
                            <div className="team-one__img-box">
                                <div className="team-one__img">
                                    <img src="assets/images/team/team-2-1.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="team-one__content-inner">
                                <div className="team-one__content">
                                    <h3 className="team-one__name"><Link href="team-details">Markus Virtanen</Link></h3>
                                    <p className="team-one__sub-title">Founder &amp; CEO</p>
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
