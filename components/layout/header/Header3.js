import Link from "next/link";
import Menu from "../Menu";
import MobileMenu from "../MobileMenu";

export default function Header2({ scroll, handlePopup, handleSidebar, handleMobileMenu }) {
  return (
    <>
      <header className="main-header-three">
        <div className="main-menu-three__top">
          <div className="main-menu-three__top-inner">
            <div className="main-menu-three__top-left">
              <div className="main-menu-three__social">
                <Link href="#">
                  <i className="icon-facebook"></i>
                </Link>
                <Link href="#">
                  <i className="icon-google-plus-logo"></i>
                </Link>
                <Link href="#">
                  <i className="icon-twitter"></i>
                </Link>
              </div>
              <ul className="list-unstyled main-menu-three__contact-list">
                {/* <li>
                                <div className="icon">
                                    <i className="icon-clock"></i>
                                </div>
                                <div className="text">
                                    <p>MON- FRI 8AM-6PM</p>
                                </div>
                            </li> */}
                <li>
                  <div className="icon">
                    <i className="icon-mail"></i>
                  </div>
                  <div className="text">
                    <p>
                      <Link href="mailto:needhelp@company.com">info@renovatrade.fi</Link>
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <i className="fa fa-phone-alt"></i>
                  </div>
                  <div className="text">
                    <p>
                      <Link href="tel:666-888-0000">+358-413171469</Link>
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <i className="icon-maps-and-flags"></i>
                  </div>
                  <div className="text">
                    <p>Keskussairaalantie 2 Jyväskylä</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="main-menu-three__top-right">
              <p className="main-menu-three__top-text">Rejuvenating the metal to new life 
</p>
            </div>
          </div>
        </div>
        <nav className="main-menu main-menu-three">
          <div className="main-menu-three__wrapper">
            <div className="main-menu-three__wrapper-inner">
              <div className="main-menu-three__left">
                <div className="main-menu-three__logo">
                  <Link href="/">
                    <img src="assets/images/resources/renova_logo.png" alt="" width={250} />
                  </Link>
                </div>
                <div className="main-menu-three__main-menu-box">
                  <Link href="#" className="mobile-nav__toggler" onClick={handleMobileMenu}>
                    <i className="fa fa-bars"></i>
                  </Link>
                  <Menu />
                </div>
              </div>
              {/* <div className="main-menu-three__right">
                            <div className="main-menu-three__search-box">
                                <Link href="#" className="main-menu-three__search search-toggler icon-magnifying-glass" onClick={handlePopup}></Link>
                            </div>
                            <div className="main-menu-three__call">
                                <div className="main-menu-three__call-icon">
                                    <span className="icon-chat-1"></span>
                                </div>
                                <div className="main-menu-three__call-number">
                                    <p>Call Anytime</p>
                                    <h5><Link href="tel:12466688899">+124 666 888 99</Link></h5>
                                </div>
                            </div>
                            <div className="main-menu-three__btn-box">
                                <Link href="contact" className="main-menu-three__btn thm-btn">Get Free Quote</Link>
                            </div>
                        </div> */}
            </div>
          </div>
        </nav>
      </header>

      <div className={`stricky-header stricked-menu main-menu main-menu-three ${scroll ? "stricky-fixed" : ""}`}>
        <div className="sticky-header__content">
          <nav className="main-menu main-menu-three">
            <div className="main-menu-three__wrapper">
              <div className="main-menu-three__wrapper-inner">
                <div className="main-menu-three__left">
                  <div className="main-menu-three__logo">
                    <Link href="/">
                      <img src="assets/images/resources/renova_logo.png" alt="" width={250} />
                    </Link>
                  </div>
                  <div className="main-menu-three__main-menu-box">
                    <Link href="#" className="mobile-nav__toggler" onClick={handleMobileMenu}>
                      <i className="fa fa-bars"></i>
                    </Link>
                    <Menu />
                  </div>
                </div>
                {/* <div className="main-menu-three__right">
                                <div className="main-menu-three__search-box">
                                    <Link href="#" className="main-menu-three__search search-toggler icon-magnifying-glass" onClick={handlePopup}></Link>
                                </div>
                                <div className="main-menu-three__call">
                                    <div className="main-menu-three__call-icon">
                                        <span className="icon-chat-1"></span>
                                    </div>
                                    <div className="main-menu-three__call-number">
                                        <p>Call Anytime</p>
                                        <h5><Link href="tel:12466688899">+124 666 888 99</Link></h5>
                                    </div>
                                </div>
                                <div className="main-menu-three__btn-box">
                                    <Link href="contact" className="main-menu-three__btn thm-btn">Get Free Quote</Link>
                                </div>
                            </div> */}
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/* /.stricky-header */}
      <MobileMenu handleMobileMenu={handleMobileMenu} />
    </>
  );
}
