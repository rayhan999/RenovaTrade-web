'use client'

import Link from "next/link"
import { useState, useEffect, useLayoutEffect, useRef } from "react"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown, Phone, Mail, MapPin } from "lucide-react"
import LanguageToggle from "./LanguageToggle"
import { useLanguage } from "@/components/i18n/LanguageProvider"
import { ADDRESS, PHONE, EMAIL } from "@/lib/constants"

// Labels are translation keys — resolved through useLanguage() so the
// EN / বাংলা toggle can localize navigation without structural changes.
//
// "Services & Solutions" is the canonical primary landing tab. With the
// URL move to /services-and-solutions (turn 19), the tab lands on the
// 10-tile combined catalog page. The dropdown lists:
//   - All Services & Solutions (the canonical catalog at /services-and-solutions)
//   - Each individual Core Service detail page
//   - Work approach (→ /how-we-work), per the user's turn-1 brief that the
//     work-approach page nests under Services & Solutions rather than as a
//     top-level tab.
// alsoActive keeps the tab lit when the user is on any of the individual
// service detail pages (/services/metal-scrap-trading etc.) so they can
// see where they are in the dropdown tree.
const navLinks = [
  { key: "nav.home", href: "/" },
  {
    key: "nav.servicesSolutions",
    href: "/services-and-solutions",
    children: [
      { key: "nav.allServices", href: "/services-and-solutions" },
      // { key: "nav.metalScrap", href: "/services/metal-scrap-trading" },
      // { key: "nav.heavyEquipment", href: "/services/heavy-equipment" },
      // { key: "nav.sourcing", href: "/services/international-sourcing" },
      { key: "nav.workApproach", href: "/how-we-work" },
    ],
  },
  { key: "nav.about", href: "/about" },
  { key: "nav.industries", href: "/industries" },
  { key: "nav.contact", href: "/contact" },
]

function getFocusableElements(container) {
  if (!container) return []
  return Array.from(
    container.querySelectorAll(
      'a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])'
    )
  ).filter((el) => !el.hasAttribute("disabled") && !el.getAttribute("aria-hidden"))
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [spacerHeight, setSpacerHeight] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const pathname = usePathname()
  const { t } = useLanguage()
  const headerRef = useRef(null)
  const lastScrollY = useRef(0)
  const mobileMenuRef = useRef(null)
  const mobileToggleRef = useRef(null)
  const lastFocusedElement = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY <= 0) {
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setIsVisible(false)
      } else if (currentScrollY < lastScrollY.current) {
        setIsVisible(true)
      }

      setIsScrolled(currentScrollY > 20)
      lastScrollY.current = currentScrollY
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useLayoutEffect(() => {
    const el = headerRef.current
    if (!el) return
    setSpacerHeight(el.offsetHeight)
    const ro = new ResizeObserver(() => setSpacerHeight(el.offsetHeight))
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
      lastFocusedElement.current = document.activeElement
      // Focus the close button after a short delay to allow the menu to render
      const timer = setTimeout(() => {
        const focusable = getFocusableElements(mobileMenuRef.current)
        focusable[0]?.focus()
      }, 50)
      return () => clearTimeout(timer)
    } else {
      document.body.style.overflow = ""
      if (lastFocusedElement.current && typeof lastFocusedElement.current.focus === "function") {
        lastFocusedElement.current.focus()
      }
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMobileMenuOpen])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isMobileMenuOpen) return

      if (e.key === "Escape") {
        e.preventDefault()
        setIsMobileMenuOpen(false)
        return
      }

      if (e.key === "Tab") {
        const focusable = getFocusableElements(mobileMenuRef.current)
        if (focusable.length === 0) return

        const firstElement = focusable[0]
        const lastElement = focusable[focusable.length - 1]

        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault()
          lastElement.focus()
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault()
          firstElement.focus()
        }
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener("keydown", handleKeyDown)
      return () => document.removeEventListener("keydown", handleKeyDown)
    }
  }, [isMobileMenuOpen])

  // A top-level link with a dropdown stays active when:
  //   - pathname starts with its href, OR
  //   - pathname matches any child href.
  // The Services & Solutions dropdown covers both /services-and-solutions
  // (the catalog landing) and all /services/* detail routes (the three
  // Core Services) plus /how-we-work — so any of those keeps the tab lit.
  const isActive = (href, children) => {
    if (href === "/") return pathname === "/"
    if (pathname.startsWith(href)) return true
    if (children?.some((child) => pathname === child.href || pathname.startsWith(child.href + "/"))) {
      return true
    }
    return false
  }

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-transform duration-300 ease-in-out ${
          isVisible || isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Top bar — hidden on mobile, shown on md+ */}
        <div className="hidden md:block bg-primary text-white py-2.5 text-sm">
          <div className="container-renova flex items-center justify-between">
            <div className="hidden md:flex items-center gap-6">
              <a href="mailto:info@renovatrade.fi" className="flex items-center gap-2 text-white/90 hover:text-accent-light transition-colors">
                <Mail className="w-4 h-4" aria-hidden="true" />
                <span>info@renovatrade.fi</span>
              </a>
              <a href="tel:+358413171469" className="flex items-center gap-2 text-white/90 hover:text-accent-light transition-colors">
                <Phone className="w-4 h-4" aria-hidden="true" />
                <span>+358-413171469</span>
              </a>
            </div>
            <div className="flex-1 md:flex-none flex items-center justify-end gap-4">
              <span className="text-white/80 hidden lg:inline">{t('header.tagline')}</span>
              <LanguageToggle dark />
            </div>
          </div>
        </div>

        {/* Main nav */}
        <nav
          className={`transition-all duration-300 ${
            isScrolled ? "bg-white/95 backdrop-blur-md shadow-md py-2" : "bg-white py-2.5"
          }`}
          aria-label="Main navigation"
        >
          <div className="container-renova flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 lg:mr-8" aria-label="Renova Trade home">
              <img
                src="/assets/images/resources/renova_logo.png"
                alt="Renova Trade"
                className="h-8 md:h-10 w-auto"
              />
            </Link>

            {/* Desktop nav */}
            <ul className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.map((link) => (
                <li key={link.key} className="relative">
                  {link.children ? (
                    <DesktopDropdown
                      link={link}
                      isActive={isActive(link.href, link.children)}
                      isOpen={openDropdown === link.key}
                      onToggle={() =>
                        setOpenDropdown(openDropdown === link.key ? null : link.key)
                      }
                      onClose={() => setOpenDropdown(null)}
                    />
                  ) : (
                    <Link
                      href={link.href}
                      className={`font-medium text-sm xl:text-base transition-colors link-draw ${
                        isActive(link.href)
                          ? "text-accent"
                          : "text-primary hover:text-accent"
                      }`}
                    >
                      {t(link.key)}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            {/* CTA + Mobile toggle */}
            <div className="flex items-center gap-4">
              <Link
                href="/quote"
                className="hidden md:inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-accent text-white rounded-lg font-semibold text-sm hover:bg-accent-dark hover:shadow-accent-glow transition-all duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent"
              >
                {t('nav.requestQuote')}
              </Link>
              <button
                ref={mobileToggleRef}
                onClick={() => setIsMobileMenuOpen(true)}
                className="lg:hidden p-2 text-primary hover:text-accent transition-colors"
                aria-label="Open mobile menu"
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
              >
                <Menu className="w-6 h-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile menu — rendered as a sibling of <header> (not inside it) so the
          `fixed inset-0` backdrop wrapper fills the viewport.
          Why outside <header>? The header applies `transition-transform` and a
          `translateY(...)` for the hide-on-scroll animation. Per the CSS spec,
          any `transform` on an ancestor creates a containing block for its
          `position: fixed` descendants — so nesting the menu inside <header>
          collapsed the wrapper to the header's ~70px height, leaving the hero
          to bleed through. Keeping it as a sibling restores the intended
          full-screen overlay.
          We toggle `inert` (not aria-hidden) so the browser auto-moves focus
          out of the drawer when it closes — avoids the
          "aria-hidden on focused element" a11y warning. */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-[100] transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none"
        }`}
        inert={!isMobileMenuOpen ? "" : undefined}
      >
        {/* Backdrop — heavy dim + blur so the hero behind it doesn't compete with the drawer */}
        <div
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
        {/* Drawer panel — slides in from the right edge */}
        <div
          ref={mobileMenuRef}
          className={`absolute top-0 right-0 h-full w-full max-w-sm bg-primary text-white shadow-2xl ring-1 ring-white/10 transform transition-transform duration-300 ease-out ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="flex items-center justify-between p-5 border-b border-white/10 bg-primary-dark/30">
            <span className="inline-flex items-center gap-2 text-lg font-semibold">
              <span className="text-white/60 text-xs uppercase tracking-[0.18em] font-medium">Menu</span>
            </span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 -mr-2 text-white hover:text-accent-light hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Close mobile menu"
            >
              <X className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
          <nav
            className="p-5 overflow-y-auto"
            aria-label="Mobile menu"
            style={{ maxHeight: "calc(100dvh - 13rem)" }}
          >
            <ul className="space-y-1">
              {navLinks.map((link) => (
                <li key={link.key}>
                  {link.children ? (
                    <MobileDropdown link={link} isActive={isActive(link.href, link.children)} onClose={() => setIsMobileMenuOpen(false)} />
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}                        className={`block py-3 px-3 rounded-lg font-medium transition-colors ${
                        isActive(link.href, link.children)
                          ? "bg-accent text-white"
                          : "text-white/90 hover:bg-white/10"
                      }`}
                    >
                      {t(link.key)}
                    </Link>
                  )}
                </li>
              ))}
              <li>
                <Link
                  href="/quote"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 py-3 px-3 mt-4 text-center bg-accent text-white rounded-lg font-semibold hover:bg-accent-dark transition-colors"
                >
                  {t('nav.requestQuote')}
                  <span aria-hidden="true">→</span>
                </Link>
              </li>
              <li className="pt-4 flex justify-center">
                <LanguageToggle dark upward />
              </li>
            </ul>
          </nav>
          <div className="absolute bottom-0 left-0 right-0 p-5 border-t border-white/10 bg-primary-dark/40">
            <div className="space-y-3 text-sm text-white/80">
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-4 h-4" aria-hidden="true" />
                {EMAIL}
              </a>
              <a href={`tel:${PHONE.replace(/-/g, '')}`} className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-4 h-4" aria-hidden="true" />
                {PHONE}
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" aria-hidden="true" />
                {ADDRESS}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div aria-hidden="true" style={{ height: spacerHeight }} />
    </>
  )
}

function DesktopDropdown({ link, isActive, isOpen, onToggle, onClose }) {
  const pathname = usePathname()
  const dropdownRef = useRef(null)
  const buttonRef = useRef(null)
  const { t } = useLanguage()

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onClose()
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
      return () => document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen, onClose])

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      onClose()
      buttonRef.current?.focus()
    }
  }

  return (
    <div ref={dropdownRef} className="relative">
      <button
        ref={buttonRef}
        onClick={onToggle}
        onKeyDown={handleKeyDown}
        onBlur={(e) => {
          if (!dropdownRef.current?.contains(e.relatedTarget)) {
            onClose()
          }
        }}
        className={`flex items-center gap-1 font-medium text-sm xl:text-base transition-colors cursor-pointer ${
          isActive ? "text-accent" : "text-primary hover:text-accent"
        }`}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {t(link.key)}
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} aria-hidden="true" />
      </button>
      {isOpen && (
        <div
          className="absolute top-full left-0 pt-2 z-50"
          onMouseLeave={onClose}
          onBlur={(e) => {
            if (!dropdownRef.current?.contains(e.relatedTarget)) {
              onClose()
            }
          }}
        >
          <div className="bg-white rounded-lg shadow-lg border border-border py-2 min-w-[280px]">
            {link.children.map((child) => (
              <Link
                key={child.key}
                href={child.href}
                onClick={onClose}
                className={`block px-4 py-2.5 text-sm transition-colors ${
                  pathname === child.href
                    ? "text-accent bg-background"
                    : "text-secondary hover:text-accent hover:bg-background"
                }`}
              >
                {t(child.key)}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

function MobileDropdown({ link, isActive, onClose }) {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const { t } = useLanguage()

  // Auto-open the dropdown when the user is on one of the child routes
  // (e.g. /services/metal-scrap-trading) so they can see where they are
  // without an extra tap.
  useEffect(() => {
    if (isActive) setIsOpen(true)
  }, [isActive])

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between py-3 px-3 rounded-lg font-medium transition-colors cursor-pointer ${
          isActive ? "bg-accent/15 text-white" : "text-white/90 hover:bg-white/10"
        }`}
        aria-expanded={isOpen}
      >
        {t(link.key)}
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} aria-hidden="true" />
      </button>
      {isOpen && (
        <div className="ml-4 mt-1 space-y-1">
          {link.children.map((child) => (
            <Link
              key={child.key}
              href={child.href}
              onClick={onClose}
              className={`block py-2 px-3 rounded-lg text-sm transition-colors ${
                pathname === child.href
                  ? "bg-accent text-white"
                  : "text-white/80 hover:bg-white/10"
              }`}
            >
              {t(child.key)}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
