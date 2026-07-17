'use client'

import { useState, useRef, useEffect, useCallback } from "react"
import { ChevronDown, Globe } from "lucide-react"
import { useLanguage } from "@/components/i18n/LanguageProvider"
import { LANGUAGES } from "@/lib/translations"

/**
 * Language selector dropdown. English content is fully wired; Bengali strings
 * live in lib/translations.js and can be completed without touching this UI.
 * `dark` renders the variant used on the navy top bar.
 */
export default function LanguageToggle({ dark = false, upward = false }) {
  const { lang, setLang } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(-1)
  const containerRef = useRef(null)
  const buttonRef = useRef(null)
  const optionRefs = useRef([])

  const currentLanguage = LANGUAGES.find((l) => l.code === lang) || LANGUAGES[0]

  const closeDropdown = useCallback(() => {
    setIsOpen(false)
    setActiveIndex(-1)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        closeDropdown()
      }
    }
    const handleScroll = () => closeDropdown()
    const handleResize = () => closeDropdown()

    document.addEventListener("mousedown", handleClickOutside)
    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleResize)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
    }
  }, [closeDropdown])

  useEffect(() => {
    if (isOpen && activeIndex >= 0) {
      optionRefs.current[activeIndex]?.focus()
    }
  }, [isOpen, activeIndex])

  const handleSelect = (code) => {
    setLang(code)
    closeDropdown()
    buttonRef.current?.focus()
  }

  const handleButtonKeyDown = (e) => {
    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      e.preventDefault()
      setIsOpen(true)
      setActiveIndex(0)
    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      e.preventDefault()
      setIsOpen(true)
      setActiveIndex(LANGUAGES.length - 1)
    } else if (e.key === "Escape") {
      closeDropdown()
    }
  }

  const handleOptionKeyDown = (e, index) => {
    if (e.key === "ArrowDown") {
      e.preventDefault()
      const nextIndex = (index + 1) % LANGUAGES.length
      setActiveIndex(nextIndex)
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      const prevIndex = (index - 1 + LANGUAGES.length) % LANGUAGES.length
      setActiveIndex(prevIndex)
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault()
      handleSelect(LANGUAGES[index].code)
    } else if (e.key === "Escape") {
      e.preventDefault()
      closeDropdown()
      buttonRef.current?.focus()
    } else if (e.key === "Tab" && !e.shiftKey && index === LANGUAGES.length - 1) {
      closeDropdown()
    }
  }

  return (
    <div ref={containerRef} className="relative inline-block">
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={handleButtonKeyDown}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label="Select language"
        className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-semibold transition-colors cursor-pointer ${
          dark
            ? "bg-white/10 border border-white/15 text-white hover:bg-white/20"
            : "bg-muted border border-border text-primary hover:bg-border"
        }`}
      >
        <Globe className="w-4 h-4" aria-hidden="true" />
        <span>{currentLanguage.label}</span>
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>

      {isOpen && (
        <div
          role="listbox"
          aria-label="Languages"
          className={`absolute right-0 min-w-[10rem] rounded-xl shadow-lg border z-50 overflow-hidden ${
            upward ? "bottom-full mb-2" : "mt-2 top-full"
          } ${
            dark ? "bg-primary border-white/15" : "bg-white border-border"
          }`}
        >
          {LANGUAGES.map((l, index) => {
            const active = lang === l.code
            return (
              <button
                key={l.code}
                ref={(el) => { optionRefs.current[index] = el }}
                type="button"
                role="option"
                aria-selected={active}
                tabIndex={-1}
                onClick={() => handleSelect(l.code)}
                onKeyDown={(e) => handleOptionKeyDown(e, index)}
                lang={l.code}
                className={`w-full text-left px-4 py-2.5 text-sm font-medium transition-colors cursor-pointer ${
                  active
                    ? dark
                      ? "bg-accent text-white"
                      : "bg-accent/10 text-accent"
                    : dark
                      ? "text-white/80 hover:bg-white/10"
                      : "text-secondary hover:bg-muted"
                }`}
              >
                {l.label}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
