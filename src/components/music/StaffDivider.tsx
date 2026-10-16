// src/components/music/StaffDivider.tsx
import { SOLFA } from '../../data/solfa'

/** Five staff lines with the eight notes of the scale climbing across them. Decorative. */
export default function StaffDivider() {
  const lineGap = 12
  const top = 14
  const bottom = top + lineGap * 4
  const half = lineGap / 2

  return (
    <svg viewBox='0 -10 1000 100' className='w-full' aria-hidden='true'>
      {[0, 1, 2, 3, 4].map((i) => (
        <line key={i} x1='0' x2='1000' y1={top + i * lineGap} y2={top + i * lineGap} className='stroke-ink/30' strokeWidth='1.5' />
      ))}
      {SOLFA.map((note, i) => {
        const cx = 90 + i * 118
        const cy = bottom - note.step * half
        return (
          <g key={i}>
            {note.step === -2 && <line x1={cx - 15} x2={cx + 15} y1={cy} y2={cy} className='stroke-ink/30' strokeWidth='1.5' />}
            <ellipse cx={cx} cy={cy} rx='9' ry='6.5' transform={`rotate(-20 ${cx} ${cy})`} fill={note.color} className='stroke-ink' strokeWidth='1.5' />
            <line x1={cx + 8} x2={cx + 8} y1={cy} y2={cy - 34} className='stroke-ink' strokeWidth='1.5' />
          </g>
        )
      })}
    </svg>
  )
}