'use client'
import Link from "next/link";
import { useState } from "react";
import { ADDRESS } from "@/lib/constants";

const MobileMenu = ({ isSidebar, handleMobileMenu, handleSidebar }) => {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
    subMenuKey: "",
  });

  const handleToggle = (key, subMenuKey = "") => {
    if (isActive.key === key && isActive.subMenuKey === subMenuKey) {
      setIsActive({
        status: false,
        key: "",
        subMenuKey: "",
      });
    } else {
      setIsActive({
        status: true,
        key,
        subMenuKey,
      });
    }
  };

  return (
    <>
      <div className="mobile-nav__wrapper">
        <div className="mobile-nav__overlay mobile-nav__toggler" onClick={handleMobileMenu} ></div>
        <div className="mobile-nav__content">
          <span className="mobile-nav__close mobile-nav__toggler" onClick={handleMobileMenu} ><i className="fa fa-times"></i></span>

          <div className="logo-box">
            <Link href="/" aria-label="Renova Trade home"><img src="assets/images/resources/renova_logo_white.png" width="200" alt="Renova Trade" /></Link>
          </div>

          <div className="mobile-nav__container">
            <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
              <ul className="main-menu__list">
                <li><Link href="/" onClick={handleMobileMenu}>Home</Link></li>
                <li><Link href="/about" onClick={handleMobileMenu}>About Us</Link></li>
                <li className={isActive.key == 1 ? "dropdown current" : "dropdown"}>
                  <Link href="/services">Services</Link>
                  <ul style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                    <li><Link href="/services" onClick={handleMobileMenu}>All Services</Link></li>
                    <li><Link href="/services/metal-scrap-trading" onClick={handleMobileMenu}>Metal Scrap Trading</Link></li>
                    <li><Link href="/services/heavy-equipment" onClick={handleMobileMenu}>Heavy Equipment & Industrial Machinery</Link></li>
                    <li><Link href="/services/international-sourcing" onClick={handleMobileMenu}>International Sourcing & Procurement</Link></li>
                  </ul>
                  <button className={isActive.key == 1 ? "expanded open" : ""} onClick={() => handleToggle(1)}><span className="fa fa-angle-right" /></button>
                </li>
                <li><Link href="/products" onClick={handleMobileMenu}>Products</Link></li>
                <li><Link href="/blog" onClick={handleMobileMenu}>Blog</Link></li>
                <li><Link href="/contact" onClick={handleMobileMenu}>Contact Us</Link></li>
              </ul>
            </div>
          </div>
          <ul className="mobile-nav__contact list-unstyled">
            <li>
              <i className="fa fa-envelope"></i>
              <Link href="mailto:info@renovatrade.fi">info@renovatrade.fi</Link>
            </li>
            <li>
              <i className="fa fa-phone-alt"></i>
              <Link href="tel:+358413171469">+358-413171469</Link>
            </li>
            <li>
              <i className="icon-maps-and-flags"></i>
              <p>{ADDRESS}</p>
            </li>
          </ul>
          <div className="mobile-nav__top">
            <div className="mobile-nav__social">
              <Link href="#" aria-label="Twitter" className="fab fa-twitter"></Link>
              <Link href="#" aria-label="Facebook" className="fab fa-facebook-square"></Link>
              <Link href="#" aria-label="Pinterest" className="fab fa-pinterest-p"></Link>
              <Link href="#" aria-label="Instagram" className="fab fa-instagram"></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MobileMenu;
