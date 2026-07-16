'use client'

import { useEffect, useRef, useState } from "react"
import { useReducedMotion } from "@/hooks/useReducedMotion"

/**
 * useParallax — performant scroll-based parallax.
 *
 * Returns a ref to attach to the element and a style object with a
 * `transform: translateY(...)` offset. The offset is calculated from the
 * element's position relative to the viewport, so shapes in different
 * sections move at different rates as the user scrolls.
 *
 * @param {number} speed - pixels of movement per pixel of scroll.
 *                         Positive = moves with scroll (foreground).
 *                         Negative = moves against scroll (background).
 *                         Typical range: -0.15 to 0.25.
 */
function isMobileDevice() {
  if (typeof window === "undefined") return false
  const isTouch = window.matchMedia("(pointer: coarse)").matches
  const isSmall = window.innerWidth < 768
  return isTouch || isSmall
}

export function useParallax(speed = 0.1) {
  const ref = useRef(null)
  const reducedMotion = useReducedMotion()
  const [offset, setOffset] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return

    function updateMobile() {
      setIsMobile(isMobileDevice())
    }

    updateMobile()

    const media = window.matchMedia("(pointer: coarse)")
    media.addEventListener("change", updateMobile)
    window.addEventListener("resize", updateMobile, { passive: true })

    return () => {
      media.removeEventListener("change", updateMobile)
      window.removeEventListener("resize", updateMobile)
    }
  }, [])

  useEffect(() => {
    if (reducedMotion) return
    if (isMobile) return

    let rafId = null

    function update() {
      rafId = null
      if (!ref.current) return

      const rect = ref.current.getBoundingClientRect()
      const viewportHeight = window.innerHeight
      const elementCenter = rect.top + rect.height / 2
      const viewportCenter = viewportHeight / 2
      const distanceFromCenter = elementCenter - viewportCenter

      setOffset(distanceFromCenter * speed)
    }

    function handleScroll() {
      if (rafId !== null) return
      rafId = requestAnimationFrame(update)
    }

    // Initial calculation
    update()

    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", update, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", update)
      if (rafId !== null) cancelAnimationFrame(rafId)
    }
  }, [speed, reducedMotion, isMobile])

  const style = reducedMotion ? {} : { transform: `translateY(${offset}px)` }

  return { ref, style }
}
