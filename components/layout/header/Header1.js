import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"

export default function Header1({ scroll, handlePopup, handleMobileMenu, handleSidebar }) {
    return (
        <>


        <header className="main-header">
            <div className="main-menu__top">
                <div className="container">
                    <div className="main-menu__top-inner">
                        <div className="main-menu__top-left">
                            <div className="main-menu__social">
                                <Link href="#"><i className="icon-facebook"></i></Link>
                                <Link href="#"><i className="icon-google-plus-logo"></i></Link>
                                <Link href="#"><i className="icon-twitter"></i></Link>
                            </div>
                            <ul className="list-unstyled main-menu__contact-list">
                                <li>
                                    <div className="icon">
                                        <i className="icon-phone-call"></i>
                                    </div>
                                    <div className="text">
                                        <p><Link href="tel:0012346823705">+00 (1234) 682 3705</Link>
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <i className="icon-mail"></i>
                                    </div>
                                    <div className="text">
                                        <p><Link href="mailto:needhelp@company.com">needhelp@company.com</Link>
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <i className="icon-maps-and-flags"></i>
                                    </div>
                                    <div className="text">
                                        <p>80 Broklyn Golden Street UK</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="main-menu__top-right">
                            <p className="main-menu__top-text">We Provide High Quality & Cost Effective Services</p>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="main-menu">
                <div className="main-menu__wrapper">
                    <div className="container">
                        <div className="main-menu__wrapper-inner">
                            <div className="main-menu__left">
                                <div className="main-menu__logo">
                                    <Link href="/"><img src="assets/images/resources/logo-1.png" alt=""/></Link>
                                </div>
                                <div className="main-menu__main-menu-box">
                                    <Link href="#" className="mobile-nav__toggler" onClick={handleMobileMenu}><i className="fa fa-bars"></i></Link>
                                    <Menu/>
                                </div>
                            </div>
                            <div className="main-menu__right">
                                <div className="main-menu__cart-search-box">
                                    <Link href="#" className="main-menu__search search-toggler icon-magnifying-glass" onClick={handlePopup}></Link>
                                    <Link href="#" className="main-menu__cart"><span className="icon-shopping-cart"></span></Link>
                                </div>
                                <div className="main-menu__btn-box">
                                    <Link href="contact" className="main-menu__btn thm-btn">Get Free Quote</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
        <div className={`stricky-header stricked-menu main-menu ${scroll ? "stricky-fixed" : ""}`}>
            <div className="sticky-header__content">
                <nav className="main-menu">
                    <div className="main-menu__wrapper">
                        <div className="container">
                            <div className="main-menu__wrapper-inner">
                                <div className="main-menu__left">
                                    <div className="main-menu__logo">
                                        <Link href="/"><img src="assets/images/resources/logo-1.png" alt=""/></Link>
                                    </div>
                                    <div className="main-menu__main-menu-box">
                                        <Link href="#" className="mobile-nav__toggler" onClick={handleMobileMenu}><i className="fa fa-bars"></i></Link>
                                        <Menu/>
                                    </div>
                                </div>
                                <div className="main-menu__right">
                                    <div className="main-menu__cart-search-box">
                                        <Link href="#" className="main-menu__search search-toggler icon-magnifying-glass" onClick={handlePopup}></Link>
                                        <Link href="#" className="main-menu__cart"><span className="icon-shopping-cart"></span></Link>
                                    </div>
                                    <div className="main-menu__btn-box">
                                        <Link href="contact" className="main-menu__btn thm-btn">Get Free Quote</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>



        <MobileMenu handleMobileMenu={handleMobileMenu} />

        </>
    )
}
