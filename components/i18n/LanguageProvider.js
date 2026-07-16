'use client'

import { createContext, useCallback, useContext, useEffect, useState } from "react"
import { translations } from "@/lib/translations"

const LanguageContext = createContext({
  lang: 'en',
  setLang: () => {},
  t: (key) => key,
})

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState('en')

  // Restore saved preference after mount (SSR always renders English).
  useEffect(() => {
    const saved = typeof window !== 'undefined' ? window.localStorage.getItem('renova-lang') : null
    if (saved && translations[saved]) {
      setLangState(saved)
      document.documentElement.lang = saved
    }
  }, [])

  const setLang = useCallback((code) => {
    if (!translations[code]) return
    setLangState(code)
    try {
      window.localStorage.setItem('renova-lang', code)
    } catch (_) { /* private mode */ }
    document.documentElement.lang = code
  }, [])

  const t = useCallback(
    (key) => translations[lang]?.[key] ?? translations.en[key] ?? key,
    [lang]
  )

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
