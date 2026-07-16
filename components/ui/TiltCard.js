'use client'

import { useRef, useCallback } from "react"
import { useReducedMotion } from "@/hooks/useReducedMotion"

/**
 * Subtle 3D tilt-toward-cursor wrapper (ui-ux-pro-max: transform/opacity only,
 * no layout-shifting hovers). Max tilt is deliberately small (5deg) to stay
 * on-brand for a trust-first B2B site.
 *
 * Gracefully degrades: no tilt for touch devices (hover:none) or
 * prefers-reduced-motion — children still get their own hover styles.
 */
export default function TiltCard({ children, className = "", maxTilt = 5 }) {
  const ref = useRef(null)
  const frame = useRef(null)
  const reducedMotion = useReducedMotion()

  const handleMove = useCallback((e) => {
    if (reducedMotion) return
    // Skip on coarse pointers (mobile/tablet)
    if (window.matchMedia && window.matchMedia("(hover: none)").matches) return
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    if (frame.current) cancelAnimationFrame(frame.current)
    frame.current = requestAnimationFrame(() => {
      el.style.transform = `perspective(900px) rotateY(${px * maxTilt}deg) rotateX(${-py * maxTilt}deg) translateZ(0)`
    })
  }, [maxTilt, reducedMotion])

  const handleLeave = useCallback(() => {
    const el = ref.current
    if (!el) return
    if (frame.current) cancelAnimationFrame(frame.current)
    el.style.transform = "perspective(900px) rotateY(0deg) rotateX(0deg)"
  }, [])

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`tilt-surface transition-transform duration-300 ease-out ${className}`}
    >
      {children}
    </div>
  )
}
