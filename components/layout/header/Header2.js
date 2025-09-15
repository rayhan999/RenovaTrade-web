
import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"

export default function Header2({ scroll, handlePopup, handleSidebar, handleMobileMenu }) {
    return (
        <>

        <header className="main-header-two">
            <div className="main-header-two__wrapper">
                <div className="container">
                    <div className="main-header-two__wrapper-inner">
                        <div className="main-menu-two__logo">
                            <Link href="/"><img src="assets/images/resources/logo-1.png" alt=""/></Link>
                        </div>
                        <div className="main-menu-two__top">
                            <div className="main-menu-two__social">
                                <Link href="#"><i className="icon-twitter"></i></Link>
                                <Link href="#"><i className="icon-facebook"></i></Link>
                                <Link href="#"><i className="icon-pinterest"></i></Link>
                                <Link href="#"><i className="icon-instagram"></i></Link>
                            </div>
                            <ul className="list-unstyled main-menu-two__contact-list">
                                <li>
                                    <div className="icon">
                                        <i className="icon-maps-and-flags"></i>
                                    </div>
                                    <div className="text">
                                        <p>80 Broklyn Golden Street UK</p>
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
                            </ul>
                        </div>
                        <nav className="main-menu main-menu-two">
                            <div className="main-menu-two__wrapper">
                                <div className="main-menu-two__wrapper-inner">
                                    <div className="main-menu-two__left">
                                        <div className="main-menu-two__main-menu-box">
                                            <Link href="#" className="mobile-nav__toggler" onClick={handleMobileMenu}><i className="fa fa-bars"></i></Link>
                                            <Menu/>
                                        </div>
                                    </div>
                                    <div className="main-menu-two__right">
                                        <div className="main-menu-two__search-box">
                                            <Link href="#"
                                                className="main-menu-two__search search-toggler icon-magnifying-glass" onClick={handlePopup}></Link>
                                        </div>
                                        <div className="main-menu-two__btn-box">
                                            <Link href="contact" className="main-menu-two__btn thm-btn">Get Free Quote</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>

        <div className={`stricky-header stricked-menu main-menu main-menu-two ${scroll ? "stricky-fixed" : ""}`}>
            <div className="sticky-header__content">
                <nav className="main-menu main-menu-two">
                    <div className="main-menu-two__wrapper">
                        <div className="main-menu-two__wrapper-inner">
                            <div className="main-menu-two__left">
                                <div className="main-menu-two__main-menu-box">
                                    <Link href="#" className="mobile-nav__toggler" onClick={handleMobileMenu}><i className="fa fa-bars"></i></Link>
                                    <Menu/>
                                </div>
                            </div>
                            <div className="main-menu-two__right">
                                <div className="main-menu-two__search-box">
                                    <Link href="#"
                                        className="main-menu-two__search search-toggler icon-magnifying-glass" onClick={handlePopup}></Link>
                                </div>
                                <div className="main-menu-two__btn-box">
                                    <Link href="contact" className="main-menu-two__btn thm-btn">Get Free Quote</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>{/* /.sticky-header__content */}
        </div>{/* /.stricky-header */}
        <MobileMenu handleMobileMenu={handleMobileMenu} />
        

        </>
    )
}
