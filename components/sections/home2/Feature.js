'use client'
import Link from "next/link"
export default function Features() {
    return (
        <>
       {/*Feature One Start*/}
       <section className="feature-one">
            <div className="container">
                <div className="row">
                    {/*Feature One Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="100ms">
                        <div className="feature-one__single">
                            <div className="feature-one__icon-and-title">
                                <div className="feature-one__icon">
                                    <span className="icon-web-design"></span>
                                </div>
                                <h3 className="feature-one__title"><Link href="ui-ux-designing">UI/UX
                                        <br/> Designing</Link></h3>
                            </div>
                            <p className="feature-one__text">Creative agencies create high-quality videos, including
                                explainer</p>
                            <Link href="ui-ux-designing" className="feature-one__read-more">Read More<span
                                    className="fas fa-arrow-circle-right"></span></Link>
                        </div>
                    </div>
                    {/*Feature One Single End*/}
                    {/*Feature One Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="200ms">
                        <div className="feature-one__single">
                            <div className="feature-one__icon-and-title">
                                <div className="feature-one__icon">
                                    <span className="icon-coding"></span>
                                </div>
                                <h3 className="feature-one__title"><Link href="website-development">Website
                                        <br/> Development</Link></h3>
                            </div>
                            <p className="feature-one__text">Creative agencies create high-quality videos, including
                                explainer</p>
                            <Link href="website-development" className="feature-one__read-more">Read More<span
                                    className="fas fa-arrow-circle-right"></span></Link>
                        </div>
                    </div>
                    {/*Feature One Single End*/}
                    {/*Feature One Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInRight" data-wow-delay="300ms">
                        <div className="feature-one__single">
                            <div className="feature-one__icon-and-title">
                                <div className="feature-one__icon">
                                    <span className="icon-application"></span>
                                </div>
                                <h3 className="feature-one__title"><Link href="app-development">Mobile
                                        <br/> Application</Link></h3>
                            </div>
                            <p className="feature-one__text">Creative agencies create high-quality videos, including
                                explainer</p>
                            <Link href="app-development" className="feature-one__read-more">Read More<span
                                    className="fas fa-arrow-circle-right"></span></Link>
                        </div>
                    </div>
                    {/*Feature One Single End*/}
                </div>
            </div>
        </section>
        {/*Feature One End*/}
       
        </>
    )
}
