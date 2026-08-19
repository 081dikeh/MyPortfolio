import type { ReactNode } from 'react'
import FadeIn from './FadeIn'

interface SectionHeadingProps {
  title: string
  prefix?: '#' | '/'
  subtitle?: string
  show?: boolean
  action?: ReactNode
  lineWidth?: string
}

export default function SectionHeading({
  title,
  prefix = '#',
  subtitle,
  show = true,
  action,
  lineWidth = 'md:w-40 lg:w-64',
}: SectionHeadingProps) {
  return (
    <div className='flex items-end justify-between gap-4 mb-10'>
      <div>
        <FadeIn show={show} direction='left'>
          <h2 className='text-2xl sm:text-3xl text-white font-semibold flex items-center'>
            <span className='text-accent'>{prefix}</span>
            {title}
            <span className={`hidden sm:inline-block ring-1 ring-accent/40 ${lineWidth} h-px ml-6`} />
          </h2>
        </FadeIn>
        {subtitle && (
          <FadeIn show={show} direction='left' delay={100}>
            <p className='text-muted text-sm mt-2'>{subtitle}</p>
          </FadeIn>
        )}
      </div>
      {action && (
        <FadeIn show={show} direction='right' delay={150}>
          {action}
        </FadeIn>
      )}
    </div>
  )
}
