// src/components/common/Magnetic.tsx
import { useRef, type ReactNode } from 'react'
import { usePointerMotion } from '../../hooks/useMotion'

/** Pulls its content gently toward the pointer when the pointer is close. */
export default function Magnetic({ children, strength = 0.32 }: { children: ReactNode; strength?: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const enabled = usePointerMotion()

  if (!enabled) return <>{children}</>

  const onMove = (e: React.PointerEvent<HTMLSpanElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const dx = e.clientX - (rect.left + rect.width / 2)
    const dy = e.clientY - (rect.top + rect.height / 2)
    el.style.transition = 'transform 120ms ease-out'
    el.style.transform = `translate(${(dx * strength).toFixed(1)}px, ${(dy * strength).toFixed(1)}px)`
  }
  const onLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.transition = 'transform 550ms cubic-bezier(0.16, 1, 0.3, 1)'
    el.style.transform = ''
  }

  return (
    <span ref={ref} onPointerMove={onMove} onPointerLeave={onLeave} className='-m-3 inline-block p-3'>
      {children}
    </span>
  )
}