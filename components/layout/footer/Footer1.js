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
                                    <Link href="/"><img src="assets/images/resources/renova_logo_white.png" alt="Renova Trade" width={260}/></Link>
                                </div>
                                <p className="footer-widget__about-text">Your trusted partner for international sourcing, metal trading, heavy equipment, and export solutions. Delivering reliability across global markets.</p>
                                <div className="site-footer__social-box">
                                    <h3 className="site-footer__social-title">Follow On</h3>
                                    <div className="site-footer__social">
                                        <Link href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></Link>
                                        <Link href="#" aria-label="Facebook"><i className="fab fa-facebook"></i></Link>
                                        <Link href="#" aria-label="Pinterest"><i className="fab fa-pinterest-p"></i></Link>
                                        <Link href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></Link>
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
                                    <li><Link href="services">Services</Link></li>
                                    <li><Link href="products">Products</Link></li>
                                    <li><Link href="about">About us</Link></li>
                                    <li><Link href="blog">Blog</Link></li>
                                    <li><Link href="contact">Contact us</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
                            <div className="footer-widget__column footer-widget__newsletter">
                                <div className="footer-widget__title-box">
                                    <h3 className="footer-widget__title">Newsletter</h3>
                                </div>
                                <p className="footer-widget__newsletter-text">Subscribe for industry insights, market updates, and the latest from Renova Trade.</p>
                                <form className="footer-widget__newsletter-form mc-form" data-url="MC_FORM_URL"
                                    >
                                    <div className="footer-widget__newsletter-form-input-box">
                                        <input type="email" placeholder="Enter Email Address" name="email"/>
                                        <button type="submit" aria-label="Subscribe to newsletter" className="footer-widget__newsletter-btn"><span
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
                                            <Link href="tel:12455689008">+358-413171469</Link>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
        {/*Site Footer End*/}
        
        </>
    )
}
