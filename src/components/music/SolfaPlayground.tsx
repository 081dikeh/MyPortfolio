// src/components/music/SolfaPlayground.tsx
import { useCallback, useEffect, useRef, useState } from 'react'
import { Play, Square, Volume2, VolumeX } from 'lucide-react'
import { SOLFA, TUNES, type Tune } from '../../data/solfa'

type AudioCtor = typeof AudioContext
type PlayedNote = { id: number; n: number }

const CAPACITY = 9
const CAPACITY_COMPACT = 6
const BEAT_MS = 420

// ---- the same notes, written two ways -------------------------------------------------
function Notation({ notes, width }: { notes: PlayedNote[]; width: number }) {
  const lineGap = 16
  const top = 36
  const bottom = top + lineGap * 4
  const half = lineGap / 2
  const spacing = 62
  const startX = 78

  return (
    <svg
      viewBox={`0 0 ${width} 200`}
      className='w-full max-w-[44rem]'
      role='img'
      aria-label={
        notes.length
          ? `Notes played, in staff notation and tonic sol-fa: ${notes.map(({ n }) => SOLFA[n].syllable).join(', ')}`
          : 'An empty staff. Play a note to see it written down.'
      }
    >
      <text x='6' y='20' fontSize='13' className='fill-muted'>Staff notation</text>
      {[0, 1, 2, 3, 4].map((i) => (
        <line key={i} x1='6' x2={width - 6} y1={top + i * lineGap} y2={top + i * lineGap} className='stroke-ink/35' strokeWidth='1.5' />
      ))}
      <text x='6' y={bottom + 98} fontSize='13' className='fill-muted'>Tonic sol-fa</text>

      {notes.length === 0 && (
        <text x={width / 2} y={top + 2 * lineGap + 5} textAnchor='middle' fontSize='15' className='fill-muted'>
          Play a note to write it down
        </text>
      )}

      {notes.map(({ id, n }, i) => {
        const note = SOLFA[n]
        const cy = bottom - note.step * half
        const stemDown = note.step >= 4
        return (
          <g key={id} style={{ transform: `translate(${startX + i * spacing}px, 0px)`, transition: 'transform 0.3s ease' }}>
            <g className='animate-fade-in-up opacity-0'>
              {note.step === -2 && <line x1='-15' x2='15' y1={cy} y2={cy} className='stroke-ink/35' strokeWidth='1.5' />}
              <line
                x1={stemDown ? -8 : 8}
                x2={stemDown ? -8 : 8}
                y1={cy}
                y2={stemDown ? cy + 36 : cy - 36}
                className='stroke-ink'
                strokeWidth='1.5'
              />
              <ellipse cx='0' cy={cy} rx='9.5' ry='7' transform={`rotate(-20 0 ${cy})`} fill={note.color} className='stroke-ink' strokeWidth='1.5' />
              <text x='0' y={bottom + 62} textAnchor='middle' fontSize='22' fontWeight='700' className='fill-ink font-display'>
                {note.letter}
              </text>
            </g>
          </g>
        )
      })}
    </svg>
  )
}

// ---- the playground ------------------------------------------------------------------
export default function SolfaPlayground() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const ctxRef = useRef<AudioContext | null>(null)
  const mutedRef = useRef(false)
  const releaseTimer = useRef<number | undefined>(undefined)
  const tuneTimers = useRef<number[]>([])
  const nextId = useRef(0)
  const swept = useRef(false)

  const [muted, setMuted] = useState(false)
  const [lit, setLit] = useState<number | null>(null)
  const [sweep, setSweep] = useState(-1)
  const [played, setPlayed] = useState<PlayedNote[]>([])
  const [playingTune, setPlayingTune] = useState<string | null>(null)
  const [onScreen, setOnScreen] = useState(false)
  const [compact, setCompact] = useState(false)
  const capacityRef = useRef(CAPACITY)

  useEffect(() => { mutedRef.current = muted }, [muted])

  // Phones show fewer, larger notes
  useEffect(() => {
    const query = window.matchMedia('(max-width: 639px)')
    const update = () => {
      setCompact(query.matches)
      capacityRef.current = query.matches ? CAPACITY_COMPACT : CAPACITY
      setPlayed((prev) => prev.slice(-capacityRef.current))
    }
    update()
    query.addEventListener('change', update)
    return () => query.removeEventListener('change', update)
  }, [])

  const sound = useCallback((index: number) => {
    if (mutedRef.current) return
    try {
      const Ctor: AudioCtor | undefined =
        window.AudioContext ?? (window as unknown as { webkitAudioContext?: AudioCtor }).webkitAudioContext
      if (!Ctor) return
      const ctx = ctxRef.current ?? (ctxRef.current = new Ctor())
      if (ctx.state === 'suspended') void ctx.resume()

      const now = ctx.currentTime
      const { freq } = SOLFA[index]
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
      // Sound is a bonus; the keys and notation still work without it.
    }
  }, [])

  const press = useCallback(
    (index: number) => {
      setLit(index)
      window.clearTimeout(releaseTimer.current)
      releaseTimer.current = window.setTimeout(() => setLit(null), 260)
      setPlayed((prev) => [...prev, { id: nextId.current++, n: index }].slice(-capacityRef.current))
      sound(index)
    },
    [sound],
  )

  const stopTune = useCallback(() => {
    tuneTimers.current.forEach((t) => window.clearTimeout(t))
    tuneTimers.current = []
    setPlayingTune(null)
  }, [])

  const playTune = useCallback(
    (tune: Tune) => {
      stopTune()
      setPlayed([])
      setPlayingTune(tune.name)
      let t = 120
      tune.notes.forEach(([n, beats]) => {
        tuneTimers.current.push(window.setTimeout(() => press(n), t))
        t += beats * BEAT_MS
      })
      tuneTimers.current.push(window.setTimeout(() => setPlayingTune(null), t))
    },
    [press, stopTune],
  )

  const pressByHand = useCallback(
    (index: number) => {
      stopTune()
      press(index)
    },
    [press, stopTune],
  )

  // Know when the playground is on screen (for the intro sweep and the 1-8 shortcuts)
  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => setOnScreen(entry.isIntersecting), { threshold: 0.35 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  // The keys light up once, left to right, the first time they scroll into view
  useEffect(() => {
    if (!onScreen || swept.current) return
    swept.current = true
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let i = 0
    const interval = window.setInterval(() => {
      setSweep(i)
      i += 1
      if (i > SOLFA.length + 1) {
        window.clearInterval(interval)
        setSweep(-1)
      }
    }, 95)
    return () => window.clearInterval(interval)
  }, [onScreen])

  // Number keys 1-8 play the notes while the playground is in view
  useEffect(() => {
    if (!onScreen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey || e.repeat) return
      const target = e.target as HTMLElement | null
      if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable)) return
      const index = '12345678'.indexOf(e.key)
      if (index >= 0) pressByHand(index)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onScreen, pressByHand])

  useEffect(
    () => () => {
      tuneTimers.current.forEach((t) => window.clearTimeout(t))
      window.clearTimeout(releaseTimer.current)
    },
    [],
  )

  const lastSyllable = played.length ? SOLFA[played[played.length - 1].n].syllable : ''

  return (
    <div ref={sectionRef} className='rounded-[2rem] bg-surface p-5 md:rounded-[2.5rem] md:p-10'>
      <Notation notes={played} width={compact ? 420 : 600} />
      <p className='sr-only' aria-live='polite'>{lastSyllable}</p>

      <div role='group' aria-label='Tonic sol-fa keys' className='mt-8 grid grid-cols-8 gap-1.5 sm:gap-2.5'>
        {SOLFA.map((note, i) => {
          const on = lit === i || sweep === i
          return (
            <button
              key={i}
              type='button'
              aria-label={`Play ${note.syllable}${i === 7 ? ' (high)' : ''}`}
              data-on={on}
              onPointerDown={(e) => { if (e.pointerType !== 'mouse' || e.button === 0) pressByHand(i) }}
              onClick={(e) => { if (e.detail === 0) pressByHand(i) }}
              style={{ '--c': note.color, '--t': note.text, '--r': note.tint } as React.CSSProperties}
              className='relative flex h-24 touch-manipulation select-none flex-col items-center justify-end rounded-b-2xl rounded-t-md border-b-[5px] border-[var(--c)] bg-[var(--r)] pb-3 text-sm font-semibold text-[#14202B]/75 transition-[background-color,color,transform] duration-150 hover:bg-[var(--c)] hover:text-[var(--t)] data-[on=true]:translate-y-1 data-[on=true]:border-b-[1px] data-[on=true]:bg-[var(--c)] data-[on=true]:text-[var(--t)] sm:h-32 sm:text-lg'
            >
              <span aria-hidden='true' className='absolute top-2.5 hidden text-xs font-medium opacity-60 sm:block'>{i + 1}</span>
              {note.syllable}
            </button>
          )
        })}
      </div>

      <div className='mt-7 flex flex-wrap items-center gap-2.5'>
        {TUNES.map((tune) => {
          const active = playingTune === tune.name
          return (
            <button
              key={tune.name}
              type='button'
              onClick={() => (active ? stopTune() : playTune(tune))}
              aria-label={active ? `Stop ${tune.name}` : `Play ${tune.name}`}
              className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[0.95rem] font-semibold transition-colors ${
                active ? 'bg-ink text-paper' : 'text-ink ring-1 ring-inset ring-ink/25 hover:bg-ink/[0.05] hover:ring-ink'
              }`}
            >
              {active ? <Square size={14} fill='currentColor' aria-hidden='true' /> : <Play size={14} fill='currentColor' aria-hidden='true' />}
              {tune.name}
            </button>
          )
        })}

        <button
          type='button'
          onClick={() => setMuted((m) => !m)}
          aria-pressed={muted}
          className='ml-auto inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-[0.95rem] font-medium text-muted transition-colors hover:text-ink'
        >
          {muted ? <VolumeX size={18} aria-hidden='true' /> : <Volume2 size={18} aria-hidden='true' />}
          {muted ? 'Sound off' : 'Sound on'}
        </button>
      </div>

      <p className='mt-6 max-w-[40rem] text-sm text-muted'>
        Tap the keys or press 1 to 8. Tonic sol-fa writes each note as a letter, and staff notation writes it on the
        lines. FaithScore converts between the two.
      </p>
    </div>
  )
}