'use client'

import { CheckCircle2 } from "lucide-react"
import { useLanguage } from "@/components/i18n/LanguageProvider"

export default function Slidingtext() {
  const { t } = useLanguage()
  const items = [
    t('home.slidingText.item1'),
    t('home.slidingText.item2'),
    t('home.slidingText.item3'),
    t('home.slidingText.item4'),
    t('home.slidingText.item5'),
    t('home.slidingText.item6'),
  ]
  const row = [...items, ...items]

  return (
    <section className="bg-primary-dark py-5 overflow-hidden border-y border-white/10" aria-label={t('home.slidingText.aria')}>
      <div className="flex w-max animate-marquee" aria-hidden="false">
        {row.map((text, i) => (
          <div
            key={`${text}-${i}`}
            className="flex items-center gap-3 px-8 whitespace-nowrap"
            aria-hidden={i >= items.length}
          >
            <CheckCircle2 className="w-5 h-5 text-accent-light flex-shrink-0" aria-hidden="true" />
            <span className="text-white/80 font-heading font-medium text-lg tracking-tight">{text}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
