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
  return (
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
  )
}