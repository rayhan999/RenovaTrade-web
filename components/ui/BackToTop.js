'use client'

import { useState, useEffect } from "react"
import { ArrowUp } from "lucide-react"
import { useReducedMotion } from "@/hooks/useReducedMotion"

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: reducedMotion ? "auto" : "smooth",
    })
  }

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-50 p-3 bg-accent text-white rounded-full shadow-lg hover:bg-accent-dark focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      style={{ transitionDuration: reducedMotion ? "0ms" : undefined }}
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  )
}
