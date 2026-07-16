'use client'

/**
 * Decorative shape primitives — the "eye-soothing" ambient elements
 * (floating rings, soft gradient blobs, rotated squares, dot grids,
 * crosses, arcs, and plus signs) that give sections visual depth,
 * echoing the original template's shapes but on-brand for the
 * Nordic Navy & Azure system.
 *
 * Rules (per ui-ux-pro-max):
 * - All purely decorative: aria-hidden, pointer-events-none.
 * - Transform/opacity animations only; parent section needs
 *   `relative overflow-hidden`.
 * - Motion stops automatically under prefers-reduced-motion
 *   (global override in globals.css).
 * - Keep to 1–2 ANIMATED shapes per section; static shapes are cheap.
 */

import { useParallax } from "@/hooks/useParallax"

/** Hollow circle outline. tone: "light" for dark sections, "dark" for light ones. */
export function Ring({ className = "", tone = "dark", animate = "", parallax = 0 }) {
  const toneClass = tone === "light" ? "border-white/10" : "border-accent/15"
  const { ref, style } = useParallax(parallax)
  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`absolute rounded-full border-2 pointer-events-none ${toneClass} ${animate} ${className}`}
      style={style}
    />
  )
}

/** Soft blurred gradient blob. color: "accent" | "steel" | "eco" */
export function Blob({ className = "", color = "accent", animate = "", parallax = 0 }) {
  const colors = {
    accent: "bg-accent/10",
    steel: "bg-steel/10",
    eco: "bg-eco/10",
  }
  const { ref, style } = useParallax(parallax)
  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`absolute rounded-full blur-3xl pointer-events-none ${colors[color] || colors.accent} ${animate} ${className}`}
      style={style}
    />
  )
}

/** Small rotated square (diamond) — accent mark. */
export function Diamond({ className = "", tone = "dark", animate = "", parallax = 0 }) {
  const toneClass = tone === "light" ? "bg-white/10" : "bg-accent/20"
  const { ref, style } = useParallax(parallax)
  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`absolute rotate-45 rounded-sm pointer-events-none ${toneClass} ${animate} ${className}`}
      style={style}
    />
  )
}

/** Plus / cross shape made of two bars. */
export function Plus({ className = "", tone = "dark", animate = "", parallax = 0 }) {
  const toneClass = tone === "light" ? "bg-white/15" : "bg-accent/25"
  const { ref, style } = useParallax(parallax)
  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`absolute pointer-events-none ${animate} ${className}`}
      style={style}
    >
      <span className={`absolute inset-y-0 left-1/2 -translate-x-1/2 w-0.5 rounded-full ${toneClass}`} />
      <span className={`absolute inset-x-0 top-1/2 -translate-y-1/2 h-0.5 rounded-full ${toneClass}`} />
    </div>
  )
}

/** Dotted grid patch. tone: "light" (white dots) | "dark" (slate dots) */
export function DotGrid({ className = "", tone = "dark", size = 22, parallax = 0 }) {
  const dotColor = tone === "light" ? "rgba(255,255,255,0.35)" : "rgba(51,65,92,0.35)"
  const { ref, style } = useParallax(parallax)
  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`absolute pointer-events-none ${className}`}
      style={{
        ...style,
        backgroundImage: `radial-gradient(circle, ${dotColor} 1.5px, transparent 1.5px)`,
        backgroundSize: `${size}px ${size}px`,
      }}
    />
  )
}

/** Curved arc / quarter-circle decoration using border only. */
export function Arc({ className = "", tone = "dark", animate = "", parallax = 0 }) {
  const toneClass = tone === "light" ? "border-white/10" : "border-accent/15"
  const { ref, style } = useParallax(parallax)
  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`absolute rounded-full border-2 pointer-events-none ${toneClass} ${animate} ${className}`}
      style={{ ...style, clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
    />
  )
}

/**
 * Pre-composed background shape field.
 * Drop this inside a `relative overflow-hidden` section to get a balanced
 * scattering of rings, blobs, dots, diamonds, and plus signs.
 */
export function ShapeField({ variant = "light", density = "normal" }) {
  const isDark = variant === "dark"
  const tone = isDark ? "light" : "dark"

  if (density === "minimal") {
    return (
      <>
        <Blob color={isDark ? "steel" : "accent"} className="w-[24rem] h-[24rem] -top-24 -right-24 opacity-60" animate="animate-sway" parallax={-0.08} />
        <Ring tone={tone} className="w-28 h-28 -left-8 top-1/4 hidden md:block" animate="animate-float-slow" parallax={0.12} />
        <DotGrid tone={tone} className="w-32 h-32 right-[8%] bottom-[10%] opacity-50 hidden md:block" parallax={-0.05} />
      </>
    )
  }

  return (
    <>
      <Blob color={isDark ? "steel" : "accent"} className="w-[28rem] h-[28rem] -top-32 -right-32 opacity-60" animate="animate-sway" parallax={-0.1} />
      <Blob color={isDark ? "eco" : "steel"} className="w-[20rem] h-[20rem] -bottom-24 -left-24 opacity-50 hidden md:block" animate="animate-float-slow" parallax={-0.06} />
      <Ring tone={tone} className="w-32 h-32 -left-10 top-24 hidden md:block" animate="animate-float-slow" parallax={0.1} />
      <Ring tone={tone} className="w-20 h-20 right-[8%] top-16 hidden md:block" animate="animate-float" parallax={0.14} />
      <Diamond tone={tone} className="w-3.5 h-3.5 left-[10%] bottom-[15%] hidden md:block" animate="animate-float" parallax={0.08} />
      <Diamond tone={tone} className="w-2.5 h-2.5 right-[18%] bottom-[20%] hidden md:block" animate="animate-bob-y" parallax={0.12} />
      <Plus tone={tone} className="w-6 h-6 left-[6%] top-[20%] hidden md:block" animate="animate-bob-x" parallax={0.1} />
      <Plus tone={tone} className="w-5 h-5 right-[12%] top-[40%] hidden md:block" animate="animate-bob-y" parallax={0.06} />
      <DotGrid tone={tone} className="w-40 h-40 right-[5%] bottom-[8%] opacity-40 hidden md:block" parallax={-0.04} />
    </>
  )
}
