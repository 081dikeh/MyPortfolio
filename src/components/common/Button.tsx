// src/components/common/Button.tsx
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import type { ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost' | 'light'

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
  /** Adds an arrow that slides right on hover. */
  arrow?: boolean
  onClick?: () => void
}

const variants: Record<Variant, string> = {
  primary: 'bg-ink text-paper hover:bg-accent',
  secondary: 'text-ink ring-1 ring-inset ring-ink/30 hover:ring-ink hover:bg-ink/[0.04]',
  ghost: 'text-ink hover:bg-ink/[0.06]',
  // for use on dark panels
  light: 'bg-on-panel text-panel hover:bg-on-panel/85',
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
  arrow,
  onClick,
}: ButtonProps) {
  const base = `group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[0.95rem] font-semibold transition-[background-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 active:translate-y-0 ${variants[variant]} ${className}`
  const content = (
    <>
      {children}
      {arrow && <ArrowRight size={17} aria-hidden='true' className='transition-transform duration-200 group-hover:translate-x-1' />}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={base}>
        {content}
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
        {content}
      </a>
    )
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${base} disabled:cursor-not-allowed disabled:opacity-50`}
    >
      {content}
    </button>
  )
}