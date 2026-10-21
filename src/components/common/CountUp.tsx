// src/components/common/CountUp.tsx
import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from '../../hooks/useMotion'

/** Counts up to a number the first time it is on screen. Handles values like "100%". */
export default function CountUp({ value, duration = 1100 }: { value: number | string; duration?: number }) {
  const match = String(value).match(/^(\d+)(.*)$/)
  const hasNumber = Boolean(match)
  const target = match ? parseInt(match[1], 10) : 0
  const suffix = match ? match[2] : ''
  const reduced = useReducedMotion()
  const ref = useRef<HTMLSpanElement>(null)
  const [n, setN] = useState(reduced || !hasNumber ? target : 0)

  useEffect(() => {
    if (!hasNumber) return
    if (reduced) {
      setN(target)
      return
    }
    const el = ref.current
    if (!el) return
    let raf = 0
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        const start = performance.now()
        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1)
          setN(Math.round(target * (1 - Math.pow(1 - t, 3))))
          if (t < 1) raf = requestAnimationFrame(tick)
        }
        raf = requestAnimationFrame(tick)
      },
      { threshold: 0.6 },
    )
    observer.observe(el)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [hasNumber, target, duration, reduced])

  if (!hasNumber) return <span>{value}</span>
  return (
    <span ref={ref} className='tabular-nums'>
      {n}
      {suffix}
    </span>
  )
}