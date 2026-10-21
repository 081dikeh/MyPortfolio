// src/components/effects/PageTransition.tsx
import { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { PALETTE } from '../../data/palette'
import { useReducedMotion } from '../../hooks/useMotion'

type Phase = 'idle' | 'in' | 'out'

const STAGGER = 20
const DURATION = 240
const COVER_MS = DURATION + STAGGER * (PALETTE.length - 1)

/**
 * A wipe of the eight palette colours between pages: the strips rise to cover the screen,
 * the new page loads underneath, and the strips lift away. Back and forward buttons, modified
 * clicks, downloads, external links and in-page anchors are left alone.
 */
export default function PageTransition() {
  const navigate = useNavigate()
  const navigateRef = useRef(navigate)
  navigateRef.current = navigate
  const { pathname, search } = useLocation()
  const reduced = useReducedMotion()
  const [phase, setPhase] = useState<Phase>('idle')
  const busy = useRef(false)
  const timers = useRef<number[]>([])
  const here = useRef(pathname + search)
  here.current = pathname + search

  useEffect(() => {
    if (reduced) return

    const later = (fn: () => void, ms: number) => {
      timers.current.push(window.setTimeout(fn, ms))
    }

    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
      const link = (e.target as Element | null)?.closest?.('a[href]') as HTMLAnchorElement | null
      if (!link) return
      if (link.target && link.target !== '_self') return
      if (link.hasAttribute('download')) return

      const url = new URL(link.href, window.location.href)
      if (url.origin !== window.location.origin) return
      const next = url.pathname + url.search
      if (next === here.current) return // same page, or an in-page anchor such as the skip link

      e.preventDefault()
      if (busy.current) return
      busy.current = true
      setPhase('in')
      later(() => {
        navigateRef.current(next + url.hash)
        later(() => {
          setPhase('out')
          later(() => {
            setPhase('idle')
            busy.current = false
          }, COVER_MS)
        }, 90)
      }, COVER_MS)
    }

    document.addEventListener('click', onClick, true)
    return () => {
      document.removeEventListener('click', onClick, true)
    }
  }, [reduced])

  // Clear pending timers only when this component goes away
  useEffect(
    () => () => {
      timers.current.forEach((t) => window.clearTimeout(t))
      timers.current = []
    },
    [],
  )

  // Safety net: the strips can never stay over the page
  useEffect(() => {
    if (phase === 'idle') return
    const guard = window.setTimeout(() => {
      setPhase('idle')
      busy.current = false
    }, 2500)
    return () => window.clearTimeout(guard)
  }, [phase])

  if (reduced) return null

  return (
    <div className='pt-layer' data-phase={phase} aria-hidden='true'>
      {PALETTE.map((p, i) => (
        <div
          key={p.name}
          className='pt-strip'
          style={{
            backgroundColor: p.color,
            boxShadow: `1px 0 0 ${p.color}`,
            transitionDelay: `${i * STAGGER}ms`,
            transitionDuration: `${DURATION}ms`,
          }}
        />
      ))}
    </div>
  )
}