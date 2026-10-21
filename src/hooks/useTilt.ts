// src/hooks/useTilt.ts
import { useEffect, useRef } from 'react'
import { usePointerMotion } from './useMotion'

/**
 * Tilts an element toward the pointer. It listens on the nearest `.group` ancestor
 * (the whole card), because a stretched link can sit on top of the element itself.
 */
export function useTilt<T extends HTMLElement>(max = 6) {
  const ref = useRef<T>(null)
  const enabled = usePointerMotion()

  useEffect(() => {
    const el = ref.current
    if (!el || !enabled) return
    const host = el.closest<HTMLElement>('.group') ?? el
    let raf = 0

    const onMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect()
      const px = Math.min(Math.max((e.clientX - rect.left) / rect.width - 0.5, -0.5), 0.5)
      const py = Math.min(Math.max((e.clientY - rect.top) / rect.height - 0.5, -0.5), 0.5)
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        el.style.willChange = 'transform'
        el.style.transition = 'transform 120ms ease-out'
        el.style.transform = `perspective(1000px) rotateX(${(-py * max).toFixed(2)}deg) rotateY(${(px * max * 1.4).toFixed(2)}deg) translateZ(0)`
      })
    }
    const onLeave = () => {
      cancelAnimationFrame(raf)
      el.style.transition = 'transform 600ms cubic-bezier(0.16, 1, 0.3, 1)'
      el.style.transform = ''
      window.setTimeout(() => {
        if (!el.style.transform) el.style.willChange = ''
      }, 650)
    }

    host.addEventListener('pointermove', onMove)
    host.addEventListener('pointerleave', onLeave)
    return () => {
      cancelAnimationFrame(raf)
      host.removeEventListener('pointermove', onMove)
      host.removeEventListener('pointerleave', onLeave)
    }
  }, [enabled, max])

  return ref
}