// src/components/effects/CustomCursor.tsx
import { useEffect, useRef } from 'react'
import { usePointerMotion } from '../../hooks/useMotion'

const INTERACTIVE = 'a, button, [role="button"], summary, label, select, [data-cursor]'
const TEXT_FIELDS = 'input, textarea, [contenteditable="true"]'

/**
 * A ring that trails the mouse, grows over links and shows a "View" label over project cards.
 * The normal cursor stays visible; this is an addition, not a replacement. Mouse users only.
 */
export default function CustomCursor() {
  const enabled = usePointerMotion()
  const ringRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)
  const labelRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (!enabled) return
    const ring = ringRef.current
    const dot = dotRef.current
    const label = labelRef.current
    if (!ring || !dot || !label) return

    let x = -100
    let y = -100
    let rx = -100
    let ry = -100
    let raf = 0
    let seen = false

    const setVariant = (variant: string, text = '') => {
      ring.dataset.variant = variant
      dot.dataset.variant = variant
      label.textContent = text
    }

    const loop = () => {
      rx += (x - rx) * 0.2
      ry += (y - ry) * 0.2
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0)`
      dot.style.transform = `translate3d(${x}px, ${y}px, 0)`
      raf = requestAnimationFrame(loop)
    }

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') return
      x = e.clientX
      y = e.clientY
      if (!seen) {
        seen = true
        rx = x
        ry = y
        if (ring.dataset.variant === 'hidden') setVariant('default')
      }
    }

    const onOver = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') return
      const target = e.target as Element | null
      if (!target || !target.closest) return
      if (target.closest(TEXT_FIELDS)) return setVariant('hidden')
      const el = target.closest<HTMLElement>(INTERACTIVE)
      if (!el) return setVariant('default')
      const text = el.dataset.cursor
      if (text) setVariant('view', text)
      else setVariant('hover')
    }

    const onDown = () => {
      ring.classList.add('is-down')
    }
    const onUp = () => {
      ring.classList.remove('is-down')
    }
    const onLeaveWindow = () => setVariant('hidden')
    const onEnterWindow = () => {
      if (seen) setVariant('default')
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    document.addEventListener('pointerover', onOver, { passive: true })
    window.addEventListener('pointerdown', onDown)
    window.addEventListener('pointerup', onUp)
    document.documentElement.addEventListener('mouseleave', onLeaveWindow)
    document.documentElement.addEventListener('mouseenter', onEnterWindow)
    raf = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('pointermove', onMove)
      document.removeEventListener('pointerover', onOver)
      window.removeEventListener('pointerdown', onDown)
      window.removeEventListener('pointerup', onUp)
      document.documentElement.removeEventListener('mouseleave', onLeaveWindow)
      document.documentElement.removeEventListener('mouseenter', onEnterWindow)
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <>
      <div ref={ringRef} className='cursor-layer' data-variant='hidden' aria-hidden='true'>
        <div className='cursor-ring'>
          <span ref={labelRef} className='cursor-label' />
        </div>
      </div>
      <div ref={dotRef} className='cursor-layer' data-variant='hidden' aria-hidden='true'>
        <div className='cursor-dot' />
      </div>
    </>
  )
}