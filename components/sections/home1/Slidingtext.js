'use client'

import { CheckCircle2 } from "lucide-react"
import { Ring, Diamond } from "@/components/ui/Decor"
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
    <section className="bg-primary-dark py-5 overflow-hidden border-y border-white/10 relative" aria-label={t('home.slidingText.aria')}>
      <Ring tone="light" className="w-16 h-16 -left-4 top-1/2 -translate-y-1/2 opacity-30 hidden md:block" animate="animate-float" parallax={0.04} />
      <Diamond tone="light" className="w-2 h-2 right-[12%] top-1/2 -translate-y-1/2 opacity-40 hidden md:block" animate="animate-bob-y" parallax={0.04} />

      <div className="relative flex w-max animate-marquee" aria-hidden="false">
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
