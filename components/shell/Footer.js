'use client'

import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"
import { useLanguage } from "@/components/i18n/LanguageProvider"
import { BUSINESS_ID, EMAIL, PHONE, ADDRESS } from "@/lib/constants"

export default function Footer() {
  const { t } = useLanguage()
  const usefulLinks = [
    { name: t('nav.about'), href: "/about" },
    { name: t('nav.services'), href: "/services" },
    { name: t('nav.products'), href: "/products" },
    { name: t('nav.industries'), href: "/industries" },
    { name: t('nav.howWeWork'), href: "/how-we-work" },
    { name: t('nav.insights'), href: "/blog" },
    { name: t('nav.faq'), href: "/faq" },
    { name: t('nav.requestQuote'), href: "/quote" },
    { name: t('nav.contact'), href: "/contact" },
  ]

  const services = [
    { name: t('services.metalScrap.title'), href: "/services/metal-scrap-trading" },
    { name: t('services.heavyEquipment.title'), href: "/services/heavy-equipment" },
    { name: t('services.sourcing.title'), href: "/services/international-sourcing" },
  ]

  return (
    <footer className="bg-primary text-white">
      <div className="container-renova py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Company info */}
          <div className="lg:col-span-1">
            <Link href="/" aria-label="Renova Trade home">
              <img
                src="/assets/images/resources/renova_logo_white.png"
                alt="Renova Trade"
                className="h-10 md:h-12 w-auto mb-6"
              />
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              {t('footer.description')}
            </p>
            <p className="text-white/50 text-xs leading-relaxed mb-2">
              {t('footer.registered')}
            </p>
            <p className="text-white/50 text-xs leading-relaxed mb-6">
              Business ID (Y-tunnus): {BUSINESS_ID}
            </p>
            <div className="flex items-center gap-3">
              <a href="https://twitter.com/renovatrade" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.518l-5.215-6.82-5.964 6.82H.469l7.73-8.835L.535 2.25H7.18l4.795 6.336 5.57-6.336zm-1.26 16.06h1.83L7.084 4.126H5.117l11.867 14.184z" />
                </svg>
              </a>
              <a href="https://facebook.com/renovatrade" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://linkedin.com/company/renovatrade" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://instagram.com/renovatrade" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.379.06 3.808 0 2.43-.013 2.784-.06 3.808-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.379.06-3.808.06-2.43 0-2.784-.013-3.808-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.379-.06-3.808 0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465 1.024-.048 1.379-.06 3.808-.06zm0 1.838c-2.525 0-2.842.012-3.833.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.299.882-.344 1.857-.046.991-.058 1.308-.058 3.833s.012 2.842.058 3.833c.045.975.207 1.504.344 1.857.182.467.398.8.748 1.15.35.35.683.566 1.15.748.353.137.882.299 1.857.344.991.046 1.308.058 3.833.058s2.842-.012 3.833-.058c.975-.045 1.504-.207 1.857-.344.467-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.299-.882.344-1.857.046-.991.058-1.308.058-3.833s-.012-2.842-.058-3.833c-.045-.975-.207-1.504-.344-1.857-.182-.467-.398-.8-.748-1.15-.35-.35-.683-.566-1.15-.748-.353-.137-.882-.299-1.857-.344-.991-.046-1.308-.058-3.833-.058zm0 5.838a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 8.468a3.333 3.333 0 100-6.666 3.333 3.333 0 000 6.666zm6.538-8.671a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Useful links */}
          <div>
            <h3 className="text-lg font-semibold mb-5">{t('footer.usefulLinks')}</h3>
            <ul className="space-y-3">
              {usefulLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-accent-light transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-5">{t('footer.services')}</h3>
            <ul className="space-y-3">
              {services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-accent-light transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-5">{t('footer.newsletter')}</h3>
            <p className="text-white/70 text-sm mb-4">
              {t('footer.newsletter.text')}
            </p>
            <form className="mb-6" onSubmit={(e) => e.preventDefault()}>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder={t('footer.newsletter.placeholder')}
                  className="flex-1 px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-accent text-sm"
                />
                <button
                  type="submit"
                  aria-label="Subscribe to newsletter"
                  className="px-4 py-2.5 bg-accent text-white rounded-lg font-medium hover:bg-accent-dark transition-colors"
                >
                  {t('footer.newsletter.subscribe')}
                </button>
              </div>
            </form>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3 text-white/70">
                <Phone className="w-4 h-4 text-accent-light" />
                <a href={`tel:${PHONE.replace(/-/g, '')}`} className="hover:text-white text-accent-light transition-colors">{PHONE}</a>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <Mail className="w-4 h-4 text-accent-light" />
                <a href={`mailto:${EMAIL}`} className="hover:text-white text-accent-light transition-colors">{EMAIL}</a>
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <MapPin className="w-4 h-4 text-accent-light mt-0.5" />
                <span>{ADDRESS}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-renova py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-white/60">
          <p>&copy; {new Date().getFullYear()} Renova Trade. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">{t('footer.privacy')}</Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">{t('footer.terms')}</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
