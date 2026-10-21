// src/components/projects/ProjectPanel.tsx
import type { Project } from '../../data/projects'
import { showcase } from '../../data/showcase'
import { PALETTE } from '../../data/palette'
import { useTilt } from '../../hooks/useTilt'

// A project's number and colour come from its place in the showcase order.
// Pass `position` to number a smaller list (like the music page) from 01.
export function positionOf(project: Project) {
  return Math.max(0, showcase.findIndex((p) => p.id === project.id))
}

export default function ProjectPanel({
  project,
  large = false,
  position,
}: {
  project: Project
  large?: boolean
  position?: number
}) {
  const tiltRef = useTilt<HTMLDivElement>(6)
  const place = position ?? positionOf(project)
  const color = PALETTE[(place + 4) % PALETTE.length].color
  const number = String(place + 1).padStart(2, '0')

  return (
    <div ref={tiltRef} className='relative [backface-visibility:hidden]'>
      <div
        className={`relative overflow-hidden rounded-[1.75rem] ${large ? 'aspect-[16/9] md:rounded-[2.25rem]' : 'aspect-[16/10]'}`}
        style={{ backgroundColor: color }}
      >
        <img
          src={project.image}
          alt=''
          loading='lazy'
          decoding='async'
          className='absolute left-[8%] top-[14%] w-[118%] max-w-none rounded-tl-2xl shadow-[0_28px_50px_-14px_rgba(20,32,43,0.45)] transition-transform duration-500 ease-out group-hover:-translate-y-2 group-hover:scale-[1.015]'
        />
      </div>
      <span
        aria-hidden='true'
        className={`absolute right-5 rounded-2xl bg-panel font-display font-bold tabular-nums text-on-panel shadow-[0_14px_30px_-14px_rgba(20,32,43,0.7)] ${
          large ? '-bottom-5 px-5 py-3 text-3xl md:right-8 md:text-4xl' : '-bottom-4 px-4 py-2.5 text-xl md:text-2xl'
        }`}
      >
        {number}
      </span>
    </div>
  )
}