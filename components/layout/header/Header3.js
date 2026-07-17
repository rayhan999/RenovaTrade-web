import Link from "next/link";
import Menu from "../Menu";
import MobileMenu from "../MobileMenu";
import { ADDRESS } from "@/lib/constants";

export default function Header2({ scroll, handlePopup, handleSidebar, handleMobileMenu }) {
  return (
    <>
      <header className="main-header-three">
        <div className="main-menu-three__top">
          <div className="main-menu-three__top-inner">
            <div className="main-menu-three__top-left">
              <div className="main-menu-three__social">
                <Link href="#" aria-label="Facebook">
                  <i className="icon-facebook"></i>
                </Link>
                <Link href="#" aria-label="Google Plus">
                  <i className="icon-google-plus-logo"></i>
                </Link>
                <Link href="#" aria-label="Twitter">
                  <i className="icon-twitter"></i>
                </Link>
              </div>
              <ul className="list-unstyled main-menu-three__contact-list">
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
                    <p>{ADDRESS}</p>
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
                  <Link href="/" aria-label="Renova Trade home">
                    <img src="assets/images/resources/renova_logo.png" alt="Renova Trade" width={250} />
                  </Link>
                </div>
                <div className="main-menu-three__main-menu-box">
                  <Link href="#" className="mobile-nav__toggler" onClick={handleMobileMenu} aria-label="Open mobile menu">
                    <i className="fa fa-bars"></i>
                  </Link>
                  <Menu />
                </div>
              </div>
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
                    <Link href="/" aria-label="Renova Trade home">
                      <img src="assets/images/resources/renova_logo.png" alt="Renova Trade" width={250} />
                    </Link>
                  </div>
                  <div className="main-menu-three__main-menu-box">
                    <Link href="#" className="mobile-nav__toggler" onClick={handleMobileMenu} aria-label="Open mobile menu">
                      <i className="fa fa-bars"></i>
                    </Link>
                    <Menu />
                  </div>
                </div>
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
