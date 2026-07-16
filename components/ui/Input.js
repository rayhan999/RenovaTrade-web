export default function Input({ className = "", ...props }) {
  return (
    <input
      className={`w-full px-4 py-3 rounded-lg border border-border bg-surface text-primary placeholder:text-secondary/60 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all duration-200 ${className}`}
      {...props}
    />
  )
}
