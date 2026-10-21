// src/hooks/useMotion.ts
import { useEffect, useState } from 'react'

function useMedia(query: string) {
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches)

  useEffect(() => {
    const mq = window.matchMedia(query)
    const update = () => setMatches(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [query])

  return matches
}

/** True when the visitor has asked their device for less motion. */
export const useReducedMotion = () => useMedia('(prefers-reduced-motion: reduce)')

/** True for a mouse or trackpad (not a touch screen). */
export const useFinePointer = () => useMedia('(hover: hover) and (pointer: fine)')

/** True when decorative effects that follow the pointer are appropriate. */
export function usePointerMotion() {
  const reduced = useReducedMotion()
  const fine = useFinePointer()
  return !reduced && fine
}