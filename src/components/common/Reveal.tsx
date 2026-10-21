// src/components/common/Reveal.tsx
import { createElement, useEffect, useRef, useState, type ReactNode } from 'react'
import { useReducedMotion } from '../../hooks/useMotion'

type Tag = 'div' | 'li' | 'article' | 'section' | 'figure' | 'p' | 'ul'

/** Fades and lifts its content into place the first time it scrolls into view. */
export default function Reveal({
  as = 'div',
  className = '',
  delay = 0,
  children,
}: {
  as?: Tag
  className?: string
  delay?: number
  children: ReactNode
}) {
  const ref = useRef<HTMLElement | null>(null)
  const reduced = useReducedMotion()
  const [shown, setShown] = useState(false)

  useEffect(() => {
    if (reduced) {
      setShown(true)
      return
    }
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [reduced])

  return createElement(
    as,
    {
      ref,
      className: `reveal ${shown ? 'is-in' : ''} ${className}`,
      style: delay ? { transitionDelay: `${delay}ms` } : undefined,
    },
    children,
  )
}