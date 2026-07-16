'use client'

import Link from "next/link"
import { useEffect, useState } from "react"
import { FileText } from "lucide-react"

/**
 * Floating "Request a Quote" CTA — appears after the user scrolls past the
 * hero and stays accessible throughout service/product pages.
 * Positioned bottom-left so it never collides with BackToTop (bottom-right).
 * On mobile it becomes a slim full-width bottom bar.
 */
export default function StickyQuoteCTA() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480)
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div
      className={`fixed z-40 transition-all duration-300 bottom-0 left-0 right-0 sm:bottom-6 sm:left-6 sm:right-auto ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"
      }`}
      aria-hidden={!visible}
    >
      <Link
        href="/quote"
        tabIndex={visible ? 0 : -1}
        className="flex sm:inline-flex items-center justify-center gap-2 bg-accent text-white font-semibold text-sm px-6 py-4 sm:py-3.5 sm:rounded-full shadow-accent-glow hover:bg-accent-dark transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent"
      >
        <FileText className="w-4 h-4" aria-hidden="true" />
        Request a Quote
      </Link>
    </div>
  )
}
