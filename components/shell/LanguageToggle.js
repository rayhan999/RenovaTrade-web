'use client'

import { useLanguage } from "@/components/i18n/LanguageProvider"
import { LANGUAGES } from "@/lib/translations"

/**
 * EN / বাংলা segmented toggle. English content is fully wired; Bengali strings
 * live in lib/translations.js and can be completed without touching this UI.
 * `dark` renders the variant used on the navy top bar.
 */
export default function LanguageToggle({ dark = false }) {
  const { lang, setLang } = useLanguage()

  return (
    <div
      role="group"
      aria-label="Select language"
      className={`inline-flex items-center rounded-full p-0.5 text-xs font-semibold ${
        dark ? "bg-white/10 border border-white/15" : "bg-muted border border-border"
      }`}
    >
      {LANGUAGES.map((l) => {
        const active = lang === l.code
        return (
          <button
            key={l.code}
            type="button"
            onClick={() => setLang(l.code)}
            aria-pressed={active}
            lang={l.code}
            className={`px-2.5 py-1 rounded-full cursor-pointer transition-colors duration-200 min-w-[2.75rem] text-base ${
              active
                ? "bg-accent text-white shadow-sm"
                : dark
                  ? "text-white/70 hover:text-white"
                  : "text-secondary hover:text-primary"
            }`}
          >
            {l.label}
          </button>
        )
      })}
    </div>
  )
}
