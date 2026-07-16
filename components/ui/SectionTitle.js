export default function SectionTitle({ tagline, title, description, align = "center", dark = false, accent = false, className = "" }) {
  const alignClass = align === "left" ? "text-left" : align === "right" ? "text-right" : "text-center"
  const descAlignClass = align === "left" ? "mx-0" : align === "right" ? "ml-auto mr-0" : "mx-auto"
  
  return (
    <div className={`mb-10 md:mb-14 ${alignClass} ${className}`}>
      {tagline && (
        <span className={`inline-flex items-center gap-2.5 font-medium text-sm uppercase tracking-wider ${
          dark ? "text-accent-light" : "text-accent"
        }`}>
          {/* Decorative tagline marks — echo of the old template's tagline shape */}
          <span className="inline-flex items-center gap-1" aria-hidden="true">
            <span className={`h-px w-6 ${dark ? "bg-accent-light/60" : "bg-accent/50"}`} />
            <span className={`w-1.5 h-1.5 rotate-45 ${dark ? "bg-accent-light" : "bg-accent"}`} />
          </span>
          {tagline}
          <span className="inline-flex items-center gap-1" aria-hidden="true">
            <span className={`w-1.5 h-1.5 rotate-45 ${dark ? "bg-accent-light" : "bg-accent"}`} />
            <span className={`h-px w-6 ${dark ? "bg-accent-light/60" : "bg-accent/50"}`} />
          </span>
        </span>
      )}
      {title && (
        <h2 className={`mt-3 text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight ${
          dark ? "text-white" : "text-primary"
        }`}>
          {title}
        </h2>
      )}
      {accent && (
        <span className="mt-4 inline-flex items-center justify-center" aria-hidden="true">
          <span className={`w-2 h-2 rotate-45 ${dark ? "bg-accent-light" : "bg-accent"}`} />
          <span className={`w-16 h-px mx-2 ${dark ? "bg-white/30" : "bg-accent/30"}`} />
          <span className={`w-1.5 h-1.5 rotate-45 ${dark ? "bg-white/50" : "bg-accent/50"}`} />
        </span>
      )}
      {description && (
        <p className={`mt-4 max-w-2xl text-base md:text-lg ${
          dark ? "text-white/80" : "text-secondary"
        } ${descAlignClass}`}>
          {description}
        </p>
      )}
    </div>
  )
}
