// src/components/SolfaKeys.tsx
import { useCallback, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { TONES } from '../data/tones'

type AudioCtor = typeof AudioContext

/**
 * Eight keys, one per note of the tonic sol-fa scale. Press one to hear it.
 * On load the keys light up once, left to right, so people notice they're keys.
 */
export default function SolfaKeys() {
  const ctxRef = useRef<AudioContext | null>(null)
  const releaseTimer = useRef<number | undefined>(undefined)
  const [pressed, setPressed] = useState<number | null>(null)
  const [sweep, setSweep] = useState<number>(-1)

  // One-time introduction sweep (skipped when the visitor prefers reduced motion)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let i = 0
    let interval: number | undefined
    const start = window.setTimeout(() => {
      interval = window.setInterval(() => {
        setSweep(i)
        i += 1
        if (i > TONES.length + 1) {
          window.clearInterval(interval)
          setSweep(-1)
        }
      }, 95)
    }, 900)
    return () => {
      window.clearTimeout(start)
      window.clearInterval(interval)
    }
  }, [])

  useEffect(() => () => window.clearTimeout(releaseTimer.current), [])

  const play = useCallback((index: number) => {
    setPressed(index)
    window.clearTimeout(releaseTimer.current)
    releaseTimer.current = window.setTimeout(() => setPressed(null), 260)

    try {
      const Ctor: AudioCtor | undefined =
        window.AudioContext ?? (window as unknown as { webkitAudioContext?: AudioCtor }).webkitAudioContext
      if (!Ctor) return
      const ctx = ctxRef.current ?? (ctxRef.current = new Ctor())
      if (ctx.state === 'suspended') void ctx.resume()

      const now = ctx.currentTime
      const { freq } = TONES[index]
      const master = ctx.createGain()
      master.gain.setValueAtTime(0.0001, now)
      master.gain.exponentialRampToValueAtTime(0.2, now + 0.01)
      master.gain.exponentialRampToValueAtTime(0.0001, now + 1.1)
      master.connect(ctx.destination)

      const body = ctx.createOscillator()
      body.type = 'triangle'
      body.frequency.value = freq
      body.connect(master)

      const shimmerGain = ctx.createGain()
      shimmerGain.gain.value = 0.35
      shimmerGain.connect(master)
      const shimmer = ctx.createOscillator()
      shimmer.type = 'sine'
      shimmer.frequency.value = freq * 2
      shimmer.connect(shimmerGain)

      body.start(now)
      shimmer.start(now)
      body.stop(now + 1.2)
      shimmer.stop(now + 1.2)
    } catch {
      // Audio is a bonus; the keys still light up without it.
    }
  }, [])

  return (
    <div>
      <div role='group' aria-label='Tonic sol-fa keys' className='grid grid-cols-8 gap-1.5 sm:gap-2.5'>
        {TONES.map((tone, i) => {
          const on = pressed === i || sweep === i
          return (
            <button
              key={i}
              type='button'
              aria-label={`Play ${tone.syllable}${i === 7 ? ' (high)' : ''}`}
              data-on={on}
              onPointerDown={(e) => { if (e.pointerType !== 'mouse' || e.button === 0) play(i) }}
              onClick={(e) => { if (e.detail === 0) play(i) }}
              style={{ '--c': tone.color, '--t': tone.text, '--r': tone.tint } as React.CSSProperties}
              className='relative flex h-20 touch-manipulation select-none items-end justify-center rounded-b-2xl rounded-t-md border-b-[5px] border-[var(--c)] bg-[var(--r)] pb-3 text-sm font-semibold text-ink/70 transition-[background-color,color,transform] duration-150 hover:bg-[var(--c)] hover:text-[var(--t)] data-[on=true]:translate-y-1 data-[on=true]:border-b-[1px] data-[on=true]:bg-[var(--c)] data-[on=true]:text-[var(--t)] sm:h-24 sm:text-base'
            >
              {tone.syllable}
            </button>
          )
        })}
      </div>
      <p className='mt-4 max-w-xl text-sm text-muted'>
        Tap the keys. This is tonic sol-fa, the notation behind{' '}
        <Link to='/projects/faithscore' className='text-link font-medium text-ink'>FaithScore</Link>.
      </p>
    </div>
  )
}