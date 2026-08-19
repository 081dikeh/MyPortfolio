import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'

interface ButtonProps {
  children: ReactNode
  variant?: Variant
  href?: string
  to?: string
  download?: boolean
  external?: boolean
  className?: string
  type?: 'button' | 'submit'
  disabled?: boolean
  onClick?: () => void
}

const variants: Record<Variant, string> = {
  primary: 'text-white ring-1 ring-accent hover:bg-accent',
  secondary: 'text-muted ring-1 ring-border hover:ring-accent hover:text-white',
  ghost: 'text-accent hover:text-white ring-1 ring-transparent hover:ring-accent/50',
}

export default function Button({
  children,
  variant = 'primary',
  href,
  to,
  download,
  external,
  className = '',
  type = 'button',
  disabled,
  onClick,
}: ButtonProps) {
  const base = `inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium transition-all duration-300 btn-lift ${variants[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={base}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a
        href={href}
        download={download}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={base}
      >
        {children}
      </a>
    )
  }

  return (
    <button type={type} disabled={disabled} onClick={onClick} className={`${base} disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none`}>
      {children}
    </button>
  )
}
