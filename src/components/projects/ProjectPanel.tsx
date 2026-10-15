// src/components/projects/ProjectPanel.tsx
import { projects, type Project } from '../../data/projects'
import { PALETTE } from '../../data/palette'

// Each project sits on one colour from the logo palette, in list order.
// The offset starts the featured project on orange.
export function projectTone(project: Project) {
  const index = Math.max(0, projects.findIndex((p) => p.id === project.id))
  return PALETTE[(index + 4) % PALETTE.length]
}

export default function ProjectPanel({ project, large = false }: { project: Project; large?: boolean }) {
  const { color } = projectTone(project)
  const number = String(Math.max(0, projects.findIndex((p) => p.id === project.id)) + 1).padStart(2, '0')

  return (
    <div className='relative'>
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