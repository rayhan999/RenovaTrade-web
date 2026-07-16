import Link from "next/link"

const variants = {
  primary: "bg-accent text-white hover:bg-accent-dark focus-visible:ring-accent",
  secondary: "bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-white focus-visible:ring-primary",
  ghost: "bg-transparent text-primary hover:bg-muted focus-visible:ring-primary",
}

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className = "",
  ...props
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
