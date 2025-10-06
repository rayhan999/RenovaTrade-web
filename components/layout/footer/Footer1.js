import Link from "next/link"

export default function Footer1() {
    return (
        <>
           
        {/*Site Footer Start*/}
        <footer className="site-footer">
            <div className="site-footer__bg" 
            // style={{ backgroundImage: ' url(assets/images/backgrounds/site-footer-bg.jpg)' }} 
            >
            </div>
            <div className="site-footer__top">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
                            <div className="footer-widget__column footer-widget__about">
                                <div className="footer-widget__logo">
                                    <Link href="/"><img src="assets/images/resources/renova_logo_white.png" alt="" width={260}/></Link>
                                </div>
                                <p className="footer-widget__about-text">Rejuvenating       the metal to new life by connecting industries with scrap metals needs 
</p>
                                <div className="site-footer__social-box">
                                    <h3 className="site-footer__social-title">Follow On</h3>
                                    <div className="site-footer__social">
                                        <Link href="#"><i className="fab fa-twitter"></i></Link>
                                        <Link href="#"><i className="fab fa-facebook"></i></Link>
                                        <Link href="#"><i className="fab fa-pinterest-p"></i></Link>
                                        <Link href="#"><i className="fab fa-instagram"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">
                            <div className="footer-widget__column footer-widget__link">
                                <div className="footer-widget__title-box">
                                    <h3 className="footer-widget__title">Useful Link</h3>
                                </div>
                                <ul className="footer-widget__link-list list-unstyled">
                                    <li><Link href="team">Meet the Team</Link></li>
                                    <li><Link href="services">Services List</Link></li>
                                    <li><Link href="about">Simple Process</Link></li>
                                    <li><Link href="blog">Latest News</Link></li>
                                    <li><Link href="contact">Contact</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                            <div className="footer-widget__column footer-widget__newsletter">
                                <div className="footer-widget__title-box">
                                    <h3 className="footer-widget__title">Newsletter</h3>
                                </div>
                                <p className="footer-widget__newsletter-text">Subscribe to our newsletter & keep up with all
                                    the latest of us.</p>
                                <form className="footer-widget__newsletter-form mc-form" data-url="MC_FORM_URL"
                                    >
                                    <div className="footer-widget__newsletter-form-input-box">
                                        <input type="email" placeholder="Enter Email Address" name="email"/>
                                        <button type="submit" className="footer-widget__newsletter-btn"><span
                                                className="fas fa-paper-plane"></span></button>
                                    </div>
                                </form>
                                <div className="mc-form__response"></div>
                                <ul className="footer-widget__Contact-list list-unstyled">
                                    <li>
                                        <div className="icon">
                                            <span className="icon-telephone"></span>
                                        </div>
                                        <div className="contact">
                                            <p>Call Anytime</p>
                                            <Link href="tel:12455689008">+124 556 890 08</Link>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="500ms">
                            <div className="footer-widget__column footer-widget__Gallery">
                                <div className="footer-widget__title-box">
                                    <h3 className="footer-widget__title">Gallery</h3>
                                </div>
                                <ul className="footer-widget__Gallery-list list-unstyled clearfix">
                                    <li>
                                        <div className="footer-widget__Gallery-img">
                                            <img src="assets/images/project/footer-widget-Gallery-img-1.jpg" alt=""/>
                                            <Link href="#"><span className="fab fa-instagram"></span></Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="footer-widget__Gallery-img">
                                            <img src="assets/images/project/footer-widget-Gallery-img-2.jpg" alt=""/>
                                            <Link href="#"><span className="fab fa-instagram"></span></Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="footer-widget__Gallery-img">
                                            <img src="assets/images/project/footer-widget-Gallery-img-3.jpg" alt=""/>
                                            <Link href="#"><span className="fab fa-instagram"></span></Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="footer-widget__Gallery-img">
                                            <img src="assets/images/project/footer-widget-Gallery-img-4.jpg" alt=""/>
                                            <Link href="#"><span className="fab fa-instagram"></span></Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="footer-widget__Gallery-img">
                                            <img src="assets/images/project/footer-widget-Gallery-img-5.jpg" alt=""/>
                                            <Link href="#"><span className="fab fa-instagram"></span></Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="footer-widget__Gallery-img">
                                            <img src="assets/images/project/footer-widget-Gallery-img-6.jpg" alt=""/>
                                            <Link href="#"><span className="fab fa-instagram"></span></Link>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>

            {/* <div className="site-footer__bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="site-footer__bottom-inner">

                                <p className="site-footer__bottom-text">
                                    Copyright © 2025 <Link href="#">Zefxa. </Link>
                                    All Rights Reserved.
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

        </footer>
        {/*Site Footer End*/}
        
        </>
    )
}
