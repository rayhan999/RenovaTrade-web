'use client'

import { useEffect, useRef, useState } from "react"
import { useInView } from "@/hooks/useInView"
import { useReducedMotion } from "@/hooks/useReducedMotion"

/**
 * Animated number counter — counts up when scrolled into view.
 * Static fallback (final value rendered immediately) for prefers-reduced-motion.
 * Uses rAF + eased progress; renders text only, so zero layout shift.
 */
export default function CountUp({ end, duration = 1800, prefix = "", suffix = "", className = "" }) {
  const [ref, inView] = useInView({ threshold: 0.4, triggerOnce: true })
  const reducedMotion = useReducedMotion()
  const [value, setValue] = useState(0)
  const rafRef = useRef(null)

  useEffect(() => {
    if (!inView) return
    if (reducedMotion) {
      setValue(end)
      return
    }
    const start = performance.now()
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3) // ease-out cubic
      setValue(Math.round(eased * end))
      if (p < 1) rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [inView, end, duration, reducedMotion])

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {prefix}{value.toLocaleString()}{suffix}
    </span>
  )
}
