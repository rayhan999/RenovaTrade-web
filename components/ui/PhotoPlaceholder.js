import { ImageIcon } from "lucide-react"

/**
 * [REPLACE WITH REAL PHOTO] — layout placeholder for real operations
 * photography (warehouses, ports, equipment, supplier facilities).
 * Swap for a real <img>/<Image> with the same aspect ratio before launch.
 */
export default function PhotoPlaceholder({ label, aspect = "aspect-[4/3]", className = "" }) {
  return (
    <div
      className={`relative ${aspect} w-full overflow-hidden rounded-2xl border-2 border-dashed border-secondary/30 bg-gradient-to-br from-muted to-border flex flex-col items-center justify-center text-center p-6 ${className}`}
      role="img"
      aria-label={`Placeholder for photo: ${label}`}
    >
      <ImageIcon className="w-8 h-8 text-secondary/50 mb-3" aria-hidden="true" />
      <span className="text-xs font-bold uppercase tracking-wider text-secondary/70">
        [Replace with real photo]
      </span>
      <span className="mt-1 text-sm text-secondary/80 max-w-[24ch]">{label}</span>
    </div>
  )
}
