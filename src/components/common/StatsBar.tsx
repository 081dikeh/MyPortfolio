import FadeIn from './FadeIn'

interface Stat {
  value: string | number
  label: string
}

interface StatsBarProps {
  stats: Stat[]
  show?: boolean
}

export default function StatsBar({ stats, show = true }: StatsBarProps) {
  return (
    <FadeIn show={show} direction='up' className='flex flex-wrap gap-6 sm:gap-8 mb-2'>
      {stats.map((stat, i) => (
        <div key={stat.label} className='flex items-center gap-6 sm:gap-8'>
          {i > 0 && <div className='w-px h-10 bg-border hidden sm:block' />}
          <div className='flex flex-col'>
            <span className='text-3xl sm:text-4xl font-bold text-accent tabular-nums'>{stat.value}</span>
            <span className='text-xs text-muted mt-0.5'>{stat.label}</span>
          </div>
        </div>
      ))}
    </FadeIn>
  )
}
