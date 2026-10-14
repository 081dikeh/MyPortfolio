// src/components/common/StatsBar.tsx
interface Stat {
  value: string | number
  label: string
}

interface StatsBarProps {
  stats: Stat[]
  // Accepted so older call sites keep compiling; no longer used.
  show?: boolean
}

export default function StatsBar({ stats }: StatsBarProps) {
  return (
    <dl className='grid max-w-xl grid-cols-3 border-y border-line'>
      {stats.map((stat, i) => (
        <div key={stat.label} className={`py-5 ${i > 0 ? 'border-l border-line pl-5 sm:pl-8' : ''}`}>
          <dd className='font-display text-4xl font-bold tracking-tight tabular-nums md:text-5xl'>{stat.value}</dd>
          <dt className='mt-1 text-sm text-muted'>{stat.label}</dt>
        </div>
      ))}
    </dl>
  )
}