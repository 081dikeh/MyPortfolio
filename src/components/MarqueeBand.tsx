// src/components/MarqueeBand.tsx
import { useEffect, useRef } from 'react'
import { PALETTE } from '../data/palette'
import { useReducedMotion } from '../hooks/useMotion'

const ITEMS = [
  'Dashboards',
  'E-commerce',
  'Community platforms',
  'Booking platforms',
  'Content libraries',
  'AI-assisted apps',
  'Notation editors',
]

/** A slow ticker of the kinds of products I build. It speeds up while you scroll. */
export default function MarqueeBand() {
  const rootRef = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()

  useEffect(() => {
    const root = rootRef.current
    const track = trackRef.current
    if (!root || !track || reduced) return

    const animation = track.animate(
      [{ transform: 'translateX(0)' }, { transform: 'translateX(-50%)' }],
      { duration: 50000, iterations: Infinity, easing: 'linear' },
    )

    let lastY = window.scrollY
    let lastT = performance.now()
    let boost = 0
    let raf = 0
    let visible = true

    const tick = (now: number) => {
      const y = window.scrollY
      const speed = Math.abs(y - lastY) / Math.max(now - lastT, 1) // px per ms
      lastY = y
      lastT = now
      boost += (Math.min(speed * 6, 8) - boost) * 0.08
      animation.playbackRate = 1 + boost
      raf = visible ? requestAnimationFrame(tick) : 0
    }

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
      if (visible && !raf) {
        boost = 0
        lastY = window.scrollY
        lastT = performance.now()
        raf = requestAnimationFrame(tick)
      }
    })
    observer.observe(root)
    raf = requestAnimationFrame(tick)

    return () => {
      observer.disconnect()
      cancelAnimationFrame(raf)
      animation.cancel()
    }
  }, [reduced])

  const label = `I build ${ITEMS.join(', ')}.`

  if (reduced) {
    return (
      <section aria-label='What I build' className='border-y border-line py-8'>
        <ul className='wrap flex flex-wrap gap-x-8 gap-y-2 font-display text-2xl font-bold tracking-tight'>
          {ITEMS.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    )
  }

  return (
    <section ref={rootRef} aria-label='What I build' className='overflow-hidden border-y border-line py-5 md:py-7'>
      <p className='sr-only'>{label}</p>
      <div ref={trackRef} aria-hidden='true' className='flex w-max'>
        {[0, 1].map((copy) => (
          <ul key={copy} className='flex shrink-0 items-center'>
            {ITEMS.map((item, i) => (
              <li key={item} className='flex items-center'>
                <span className='whitespace-nowrap px-6 font-display text-4xl font-bold tracking-tight md:px-9 md:text-6xl'>
                  {item}
                </span>
                <span
                  className='h-3 w-3 shrink-0 rounded-full md:h-4 md:w-4'
                  style={{ backgroundColor: PALETTE[i % PALETTE.length].color }}
                />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  )
}