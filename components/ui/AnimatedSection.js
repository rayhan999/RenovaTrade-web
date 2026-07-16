'use client'

import { useEffect, useState } from "react"
import { useInView } from "@/hooks/useInView"
import { useReducedMotion } from "@/hooks/useReducedMotion"

export default function AnimatedSection({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
  as: Component = "div",
  ...props
}) {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  const reducedMotion = useReducedMotion()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Use requestAnimationFrame to ensure the initial visible state is painted
    // before any animation classes are applied, preventing hydration flash.
    const raf = requestAnimationFrame(() => setMounted(true))
    return () => cancelAnimationFrame(raf)
  }, [])

  const animations = {
    "fade-up": "translate-y-8 opacity-0",
    "fade-down": "translate-y-[-2rem] opacity-0",
    "fade-left": "translate-x-[-2rem] opacity-0",
    "fade-right": "translate-x-8 opacity-0",
    "scale-in": "scale-95 opacity-0",
    "fade-in": "opacity-0",
  }

  const initialClass = animations[animation] || animations["fade-up"]

  // Always visible before mount to avoid SSR/hydration issues.
  // After mount, hide elements that are not yet in view (unless reduced motion).
  const isVisible = reducedMotion || inView || !mounted

  // Only animate when actually becoming visible. This prevents a visible-to-hidden
  // animation on initial mount for below-the-fold elements.
  const hasAnimated = inView || reducedMotion

  return (
    <Component
      ref={ref}
      className={`${
        isVisible
          ? "translate-x-0 translate-y-0 opacity-100 scale-100"
          : initialClass
      } ${
        hasAnimated ? "transition-all duration-700 ease-out" : "transition-none"
      } ${className}`}
      style={{
        transitionDelay: hasAnimated ? `${delay}ms` : 0,
      }}
      {...props}
    >
      {children}
    </Component>
  )
}
