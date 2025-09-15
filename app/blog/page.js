
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Blog">
            {/*Blog Three Start*/}
        <section className="blog-three">
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
                    {/*Blog Three Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="100ms">
                        <div className="blog-three__single">
                            <div className="blog-three__img-box">
                                <div className="blog-three__img">
                                    <img src="assets/images/blog/blog-3-1.jpg" alt=""/>
                                </div>
                                <div className="blog-three__tag">
                                    <p>Marketing Solution</p>
                                </div>
                                <div className="blog-three__content">
                                    <ul className="blog-three__meta list-unstyled">
                                        <li>
                                            <Link href="#"><span className="fas fa-calendar-alt"></span>20 Oct 2024</Link>
                                        </li>
                                        <li>
                                            <Link href="#"><span className="fas fa-comments"></span>02 Comment</Link>
                                        </li>
                                    </ul>
                                    <h3 className="blog-three__title"><Link href="blog-details">We are delivering the best
                                            IT Services</Link></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Blog Three Single End*/}
                    {/*Blog Three Single Two Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="300ms">
                        <div className="blog-three__single-2">
                            <ul className="blog-three__meta-2 list-unstyled">
                                <li>
                                    <Link href="#"><span className="fas fa-calendar-alt"></span>20 Oct 2024</Link>
                                </li>
                                <li>
                                    <Link href="#"><span className="fas fa-comments"></span>02 Comment</Link>
                                </li>
                            </ul>
                            <div className="blog-three__title-box">
                                <div className="blog-three__content-shape-1">
                                    <img src="assets/images/shapes/blog-three-content-shape-1.png" alt=""/>
                                </div>
                                <h3 className="blog-three__title-2"><Link href="blog-details">Making a change on this
                                        internet
                                        business</Link></h3>
                                <p className="blog-three__text-2">Business is the activity of making one's
                                    livcing or buying & selling products.</p>
                                <div className="blog-three__read-more">
                                    <Link href="blog-details">READ MORE<span className="icon-right-arrow"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Blog Three Single Two End*/}
                    {/*Blog Three Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="500ms">
                        <div className="blog-three__single blog-three__single-3">
                            <div className="blog-three__img-box">
                                <div className="blog-three__img">
                                    <img src="assets/images/blog/blog-3-2.jpg" alt=""/>
                                </div>
                                <div className="blog-three__tag">
                                    <p>Web Development</p>
                                </div>
                                <div className="blog-three__content">
                                    <ul className="blog-three__meta list-unstyled">
                                        <li>
                                            <Link href="#"><span className="fas fa-calendar-alt"></span>20 Oct 2024</Link>
                                        </li>
                                        <li>
                                            <Link href="#"><span className="fas fa-comments"></span>02 Comment</Link>
                                        </li>
                                    </ul>
                                    <h3 className="blog-three__title"><Link href="blog-details">Necessity may give us best
                                            virtual court</Link></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Blog Three Single End*/}
                    {/*Blog Three Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="700ms">
                        <div className="blog-three__single">
                            <div className="blog-three__img-box">
                                <div className="blog-three__img">
                                    <img src="assets/images/blog/blog-3-3.jpg" alt=""/>
                                </div>
                                <div className="blog-three__tag">
                                    <p>Business Solution</p>
                                </div>
                                <div className="blog-three__content">
                                    <ul className="blog-three__meta list-unstyled">
                                        <li>
                                            <Link href="#"><span className="fas fa-calendar-alt"></span>20 Oct 2024</Link>
                                        </li>
                                        <li>
                                            <Link href="#"><span className="fas fa-comments"></span>02 Comment</Link>
                                        </li>
                                    </ul>
                                    <h3 className="blog-three__title"><Link href="blog-details">Revenue growth for your
                                            business</Link></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Blog Three Single End*/}
                    {/*Blog Three Single Two Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="900ms">
                        <div className="blog-three__single-2">
                            <ul className="blog-three__meta-2 list-unstyled">
                                <li>
                                    <Link href="#"><span className="fas fa-calendar-alt"></span>20 Oct 2024</Link>
                                </li>
                                <li>
                                    <Link href="#"><span className="fas fa-comments"></span>02 Comment</Link>
                                </li>
                            </ul>
                            <div className="blog-three__title-box">
                                <div className="blog-three__content-shape-1">
                                    <img src="assets/images/shapes/blog-three-content-shape-1.png" alt=""/>
                                </div>
                                <h3 className="blog-three__title-2"><Link href="blog-details">Working together,ideas come
                                        to life</Link></h3>
                                <p className="blog-three__text-2">Business is the activity of making one's
                                    livcing or buying & selling products.</p>
                                <div className="blog-three__read-more">
                                    <Link href="blog-details">READ MORE<span className="icon-right-arrow"></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Blog Three Single Two End*/}
                    {/*Blog Three Single Start*/}
                    <div className="col-xl-4 col-lg-4 wow fadeInLeft" data-wow-delay="1100ms">
                        <div className="blog-three__single blog-three__single-3">
                            <div className="blog-three__img-box">
                                <div className="blog-three__img">
                                    <img src="assets/images/blog/blog-3-4.jpg" alt=""/>
                                </div>
                                <div className="blog-three__tag">
                                    <p>Strategy Business</p>
                                </div>
                                <div className="blog-three__content">
                                    <ul className="blog-three__meta list-unstyled">
                                        <li>
                                            <Link href="#"><span className="fas fa-calendar-alt"></span>20 Oct 2024</Link>
                                        </li>
                                        <li>
                                            <Link href="#"><span className="fas fa-comments"></span>02 Comment</Link>
                                        </li>
                                    </ul>
                                    <h3 className="blog-three__title"><Link href="blog-details">Get a few solutions to
                                            hire a best candidate</Link></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Blog Three Single End*/}
                </div>
            </div>
        </section>
        {/*Blog Three End*/}

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