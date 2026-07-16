'use client'

import { useState } from "react"
import { ChevronDown } from "lucide-react"

/**
 * Accessible accordion — button + region pattern, animated with the
 * CSS grid-rows trick (GPU-cheap, no height measurement, reduced-motion safe
 * via the global transition override).
 */
export default function FaqAccordion({ items, defaultOpen = 0 }) {
  const [openIndex, setOpenIndex] = useState(defaultOpen)

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        return (
          <div
            key={item.q}
            className={`bg-surface border rounded-2xl shadow-sm transition-all duration-300 ${
              isOpen ? "border-accent/40 shadow-md" : "border-border hover:border-secondary/30"
            }`}
          >
            <h3>
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${index}`}
                id={`faq-button-${index}`}
                className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 cursor-pointer focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent rounded-2xl"
              >
                <span className="font-heading font-semibold text-primary text-base md:text-lg">
                  {item.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-accent flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  aria-hidden="true"
                />
              </button>
            </h3>
            <div
              id={`faq-panel-${index}`}
              role="region"
              aria-labelledby={`faq-button-${index}`}
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-6 pb-6 text-secondary text-sm md:text-base leading-relaxed">
                  {item.a}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
