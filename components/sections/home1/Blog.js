'use client'
import Link from "next/link"
export default function Blog() {
    return (
        <>
        {/*Blog One Start */}
        <section className="blog-one">
            <div className="blog-one__bg float-bob-x"
                style={{ backgroundImage: ' url(assets/images/backgrounds/blog-one-bg.jpg)' }} ></div>
            <div className="blog-one__shape-1">
                <img src="assets/images/shapes/blog-one-shape-1.png" alt=""/>
            </div>
            <div className="blog-one__shape-2">
                <img src="assets/images/shapes/blog-one-shape-2.png" alt=""/>
            </div>
            <div className="container">
                <div className="section-title text-center">
                    <div className="section-title__tagline-box">
                        <div className="section-title__tagline-shape">
                            <img src="assets/images/shapes/section-title-tagline-shape_new.png" alt=""/>
                        </div>
                        <span className="section-title__tagline">Our Blog</span>
                    </div>
                    <h2 className="section-title__title">Industry Insights & Updates</h2>
                </div>
                <div className="row">
                    {/*Blog One Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="100ms">
                        <div className="blog-one__single">
                            <div className="blog-one__img-box">
                                <div className="blog-one__img">
                                    <img src="assets/images/blog/blog-1-2.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="blog-one__content">
                                <ul className="blog-one__meta list-unstyled">
                                    <li>
                                        <Link href="#"><span className="fas fa-calendar-alt"></span>20 Oct 2024</Link>
                                    </li>
                                    {/* <li>
                                        <Link href="#"><span className="fas fa-comments"></span>02 Comment</Link>
                                    </li> */}
                                </ul>
                                <h3 className="blog-one__title"><Link href="blog-details">Understanding Global Metal Scrap Grades</Link></h3>
                                <p className="blog-one__text">A practical guide to HMS, shredded scrap, and non-ferrous grades for international buyers.</p>
                            </div>
                        </div>
                    </div>
                    {/*Blog One Single End*/}
                    {/*Blog One Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="200ms">
                        <div className="blog-one__single">
                            <div className="blog-one__img-box">
                                <div className="blog-one__img">
                                    <img src="assets/images/blog/blog-1-3.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="blog-one__content">
                                <ul className="blog-one__meta list-unstyled">
                                    <li>
                                        <Link href="#"><span className="fas fa-calendar-alt"></span>20 Oct 2024</Link>
                                    </li>
                                    {/* <li>
                                        <Link href="#"><span className="fas fa-comments"></span>02 Comment</Link>
                                    </li> */}
                                </ul>
                                <h3 className="blog-one__title"><Link href="blog-details">Sourcing Heavy Equipment from Europe</Link></h3>
                                <p className="blog-one__text">Key considerations when purchasing used industrial machinery and port equipment abroad.</p>
                            </div>
                        </div>
                    </div>
                    {/*Blog One Single End*/}
                    {/*Blog One Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInRight" data-wow-delay="300ms">
                        <div className="blog-one__single">
                            <div className="blog-one__img-box">
                                <div className="blog-one__img">
                                    <img src="assets/images/blog/blog-1-1.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="blog-one__content">
                                <ul className="blog-one__meta list-unstyled">
                                    <li>
                                        <Link href="#"><span className="fas fa-calendar-alt"></span>20 Oct 2024</Link>
                                    </li>
                                    {/* <li>
                                        <Link href="#"><span className="fas fa-comments"></span>02 Comment</Link>
                                    </li> */}
                                </ul>
                                <h3 className="blog-one__title"><Link href="blog-details">Export Documentation Essentials</Link></h3>
                                <p className="blog-one__text">What documents you need for smooth international shipping and customs clearance.</p>
                            </div>
                        </div>
                    </div>
                    {/*Blog One Single End*/}
                </div>
            </div>
        </section>
        {/*Blog One End*/}

        </>
    )
}
