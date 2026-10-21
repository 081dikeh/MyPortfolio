// src/components/common/ScrollWords.tsx
import { useEffect, useRef } from 'react'
import { useReducedMotion } from '../../hooks/useMotion'

/** A sentence whose words light up one by one as you scroll it into the middle of the screen. */
export default function ScrollWords({ text, className = '' }: { text: string; className?: string }) {
  const rootRef = useRef<HTMLParagraphElement>(null)
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([])
  const reduced = useReducedMotion()
  const words = text.split(' ')

  useEffect(() => {
    if (reduced) {
      wordRefs.current.forEach((w) => w && (w.style.opacity = '1'))
      return
    }
    let raf = 0
    const update = () => {
      raf = 0
      const el = rootRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight
      const start = vh * 0.92
      const end = vh * 0.45
      const progress = Math.min(Math.max((start - rect.top) / (start - end + rect.height * 0.5), 0), 1)
      const count = words.length
      wordRefs.current.forEach((word, i) => {
        if (!word) return
        const local = Math.min(Math.max(progress * (count + 3) - i, 0), 3) / 3
        word.style.opacity = String(0.22 + 0.78 * local)
      })
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [reduced, words.length])

  return (
    <p ref={rootRef} className={className}>
      {words.map((word, i) => (
        <span
          key={i}
          ref={(el) => {
            wordRefs.current[i] = el
          }}
          style={{ opacity: reduced ? 1 : 0.22 }}
        >
          {word}
          {i < words.length - 1 ? ' ' : ''}
        </span>
      ))}
    </p>
  )
}