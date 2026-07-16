/**
 * Decorative shape primitives — the "eye-soothing" ambient elements
 * (floating rings, soft gradient blobs, rotated squares, dot grids)
 * that give sections visual depth, echoing the original template's shapes
 * but on-brand for the Nordic Navy & Azure system.
 *
 * Rules (per ui-ux-pro-max):
 * - All purely decorative: aria-hidden, pointer-events-none.
 * - Transform/opacity animations only; parent section needs
 *   `relative overflow-hidden`.
 * - Motion stops automatically under prefers-reduced-motion
 *   (global override in globals.css).
 * - Keep to 1–2 ANIMATED shapes per section; static shapes are cheap.
 */

/** Hollow circle outline. tone: "light" for dark sections, "dark" for light ones. */
export function Ring({ className = "", tone = "dark", animate = "" }) {
  const toneClass = tone === "light" ? "border-white/10" : "border-accent/15"
  return (
    <div
      aria-hidden="true"
      className={`absolute rounded-full border-2 pointer-events-none ${toneClass} ${animate} ${className}`}
    />
  )
}

/** Soft blurred gradient blob. color: "accent" | "steel" | "eco" */
export function Blob({ className = "", color = "accent", animate = "" }) {
  const colors = {
    accent: "bg-accent/10",
    steel: "bg-steel/10",
    eco: "bg-eco/10",
  }
  return (
    <div
      aria-hidden="true"
      className={`absolute rounded-full blur-3xl pointer-events-none ${colors[color] || colors.accent} ${animate} ${className}`}
    />
  )
}

/** Small rotated square (diamond) — accent mark. */
export function Diamond({ className = "", tone = "dark", animate = "" }) {
  const toneClass = tone === "light" ? "bg-white/10" : "bg-accent/20"
  return (
    <div
      aria-hidden="true"
      className={`absolute rotate-45 rounded-sm pointer-events-none ${toneClass} ${animate} ${className}`}
    />
  )
}

/** Dotted grid patch. tone: "light" (white dots) | "dark" (slate dots) */
export function DotGrid({ className = "", tone = "dark", size = 22 }) {
  const dotColor = tone === "light" ? "rgba(255,255,255,0.35)" : "rgba(51,65,92,0.35)"
  return (
    <div
      aria-hidden="true"
      className={`absolute pointer-events-none ${className}`}
      style={{
        backgroundImage: `radial-gradient(circle, ${dotColor} 1.5px, transparent 1.5px)`,
        backgroundSize: `${size}px ${size}px`,
      }}
    />
  )
}
