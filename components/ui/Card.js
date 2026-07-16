export default function Card({ children, className = "", hover = true }) {
  return (
    <div
      className={`bg-surface rounded-xl p-6 transition-all duration-200 ${
        hover ? "hover:shadow-lg hover:-translate-y-1" : ""
      } ${className}`}
    >
      {children}
    </div>
  )
}
