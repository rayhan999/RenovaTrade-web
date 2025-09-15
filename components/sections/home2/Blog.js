import Link from "next/link"
export default function Blog() {
    return (
        <>
        
        {/*Blog Two Start*/}
        <section className="blog-two">
            <div className="container">
                <div className="section-title text-center">
                    <div className="section-title__tagline-box">
                        <div className="section-title__tagline-shape">
                            <img src="assets/images/shapes/section-title-tagline-shape_new.png" alt=""/>
                        </div>
                        <span className="section-title__tagline">Blog & News</span>
                    </div>
                    <h2 className="section-title__title">Our Latest From The Blog</h2>
                </div>
                <div className="row">
                    {/*Blog Two Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="100ms">
                        <div className="blog-two__single">
                            <div className="blog-two__img-box">
                                <div className="blog-two__img">
                                    <img src="assets/images/blog/blog-2-1.jpg" alt=""/>
                                </div>
                                <div className="blog-two__arrow">
                                    <Link href="#"><span className="icon-right-arrow"></span></Link>
                                </div>
                                <div className="blog-two__tag">
                                    <p>Strategy Business</p>
                                </div>
                            </div>
                            <div className="blog-two__content">
                                <ul className="blog-two__meta list-unstyled">
                                    <li>
                                        <Link href="#"><span className="fas fa-calendar-alt"></span>20 Oct 2024</Link>
                                    </li>
                                    <li>
                                        <Link href="#"><span className="fas fa-comments"></span>02 Comment</Link>
                                    </li>
                                </ul>
                                <div className="blog-two__title-box">
                                    <div className="blog-two__content-shape">
                                        <img src="assets/images/shapes/blog-two-content-shape-1.png" alt=""/>
                                    </div>
                                    <h3 className="blog-two__title"><Link href="blog-details">What is the 2024 trend for
                                            Graphic Design ?</Link></h3>
                                    <p className="blog-two__text">Business is the activity of making one's
                                        livcing or buying & selling products.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Blog Two Single End*/}
                    {/*Blog Two Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInUp" data-wow-delay="200ms">
                        <div className="blog-two__single">
                            <div className="blog-two__img-box">
                                <div className="blog-two__img">
                                    <img src="assets/images/blog/blog-2-2.jpg" alt=""/>
                                </div>
                                <div className="blog-two__arrow">
                                    <Link href="#"><span className="icon-right-arrow"></span></Link>
                                </div>
                                <div className="blog-two__tag">
                                    <p>Business Solution</p>
                                </div>
                            </div>
                            <div className="blog-two__content">
                                <ul className="blog-two__meta list-unstyled">
                                    <li>
                                        <Link href="#"><span className="fas fa-calendar-alt"></span>20 Oct 2024</Link>
                                    </li>
                                    <li>
                                        <Link href="#"><span className="fas fa-comments"></span>02 Comment</Link>
                                    </li>
                                </ul>
                                <div className="blog-two__title-box">
                                    <div className="blog-two__content-shape">
                                        <img src="assets/images/shapes/blog-two-content-shape-1.png" alt=""/>
                                    </div>
                                    <h3 className="blog-two__title"><Link href="blog-details">How To Start a Consulting
                                            Business In 2024</Link></h3>
                                    <p className="blog-two__text">Business is the activity of making one's
                                        livcing or buying & selling products.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Blog Two Single End*/}
                    {/*Blog Two Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInRight" data-wow-delay="300ms">
                        <div className="blog-two__single">
                            <div className="blog-two__img-box">
                                <div className="blog-two__img">
                                    <img src="assets/images/blog/blog-2-3.jpg" alt=""/>
                                </div>
                                <div className="blog-two__arrow">
                                    <Link href="#"><span className="icon-right-arrow"></span></Link>
                                </div>
                                <div className="blog-two__tag">
                                    <p>Marketing Solution</p>
                                </div>
                            </div>
                            <div className="blog-two__content">
                                <ul className="blog-two__meta list-unstyled">
                                    <li>
                                        <Link href="#"><span className="fas fa-calendar-alt"></span>20 Oct 2024</Link>
                                    </li>
                                    <li>
                                        <Link href="#"><span className="fas fa-comments"></span>02 Comment</Link>
                                    </li>
                                </ul>
                                <div className="blog-two__title-box">
                                    <div className="blog-two__content-shape">
                                        <img src="assets/images/shapes/blog-two-content-shape-1.png" alt=""/>
                                    </div>
                                    <h3 className="blog-two__title"><Link href="blog-details">We are delivering the best
                                            IT Services</Link></h3>
                                    <p className="blog-two__text">Business is the activity of making one's
                                        livcing or buying & selling products.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Blog Two Single End*/}
                </div>
            </div>
        </section>
        {/*Blog Two End*/}
       
        </>
    )
}
