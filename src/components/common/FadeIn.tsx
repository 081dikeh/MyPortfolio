import type { ReactNode, CSSProperties } from 'react'

type Direction = 'up' | 'down' | 'left' | 'right' | 'none'

interface FadeInProps {
  children: ReactNode
  show?: boolean
  direction?: Direction
  delay?: number
  className?: string
  style?: CSSProperties
}

const directionClass: Record<Direction, string> = {
  up: 'animate-fade-in-up',
  down: 'animate-fade-in-down',
  left: 'animate-fade-in-left',
  right: 'animate-fade-in-right',
  none: 'animate-fade-in',
}

export default function FadeIn({
  children,
  show = true,
  direction = 'up',
  delay = 0,
  className = '',
  style,
}: FadeInProps) {
  return (
    <div
      className={`${show ? `opacity-0 ${directionClass[direction]}` : 'opacity-0'} ${className}`}
      style={{ animationDelay: `${delay}ms`, ...style }}
    >
      {children}
    </div>
  )
}
