// src/components/common/SectionHeading.tsx
import type { ReactNode } from 'react'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  action?: ReactNode
  /** Use h1 on pages where this is the page title. */
  as?: 'h1' | 'h2'
  // Accepted so older call sites keep compiling; no longer used.
  prefix?: string
  show?: boolean
  lineWidth?: string
}

export default function SectionHeading({ title, subtitle, action, as: Tag = 'h2' }: SectionHeadingProps) {
  return (
    <div className='mb-10 flex flex-wrap items-end justify-between gap-x-6 gap-y-3 md:mb-14'>
      <div>
        <Tag className='text-4xl font-bold leading-[1.02] md:text-6xl'>{title}</Tag>
        {subtitle && <p className='mt-3 max-w-xl font-serif text-lg text-muted md:text-xl'>{subtitle}</p>}
      </div>
      {action && <div className='pb-1'>{action}</div>}
    </div>
  )
}