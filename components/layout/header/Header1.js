import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"
import { ADDRESS } from "@/lib/constants"

export default function Header1({ scroll, handlePopup, handleMobileMenu, handleSidebar }) {
    return (
        <>


        <header className="main-header">
            <div className="main-menu__top">
                <div className="container">
                    <div className="main-menu__top-inner">
                        <div className="main-menu__top-left">
                            <div className="main-menu__social">
                                <Link href="#" aria-label="Facebook"><i className="fab fa-facebook"></i></Link>
                                <Link href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></Link>
                                <Link href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></Link>
                            </div>
                            <ul className="list-unstyled main-menu__contact-list">
                                <li>
                                    <div className="icon">
                                        <i className="icon-phone-call"></i>
                                    </div>
                                    <div className="text">
                                        <p><Link href="tel:+358413171469">+358-413171469</Link>
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <i className="icon-mail"></i>
                                    </div>
                                    <div className="text">
                                        <p><Link href="mailto:info@renovatrade.fi">info@renovatrade.fi</Link>
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="icon">
                                        <i className="icon-maps-and-flags"></i>
                                    </div>
                                    <div className="text">
                                        <p>{ADDRESS}</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="main-menu__top-right">
                            <p className="main-menu__top-text">Global Sourcing · Metal Trading · Export Solutions</p>
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
                                    <Link href="/"><img src="assets/images/resources/renova_logo_white.png" alt="Renova Trade" width="200"/></Link>
                                </div>
                                <div className="main-menu__main-menu-box">
                                    <Link href="#" className="mobile-nav__toggler" onClick={handleMobileMenu}><i className="fa fa-bars"></i></Link>
                                    <Menu/>
                                </div>
                            </div>
                            <div className="main-menu__right">
                                <div className="main-menu__cart-search-box">
                                    <Link href="#" className="main-menu__search search-toggler icon-magnifying-glass" onClick={handlePopup} aria-label="Search"></Link>
                                </div>
                                <div className="main-menu__btn-box">
                                    <Link href="contact" className="main-menu__btn thm-btn">Get in Touch</Link>
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
                                        <Link href="/"><img src="assets/images/resources/renova_logo.png" alt="Renova Trade" width="200"/></Link>
                                    </div>
                                    <div className="main-menu__main-menu-box">
                                        <Link href="#" className="mobile-nav__toggler" onClick={handleMobileMenu}><i className="fa fa-bars"></i></Link>
                                        <Menu/>
                                    </div>
                                </div>
                                <div className="main-menu__right">
                                    <div className="main-menu__cart-search-box">
                                        <Link href="#" className="main-menu__search search-toggler icon-magnifying-glass" onClick={handlePopup} aria-label="Search"></Link>
                                        <Link href="#" className="main-menu__cart" aria-label="Cart"><span className="icon-shopping-cart"></span></Link>
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
