// src/components/projects/FeaturedProject.tsx
import { Link } from 'react-router-dom'
import { ExternalLink, Github } from 'lucide-react'
import type { Project } from '../../data/projects'
import StackPills from '../StackPills'
import { hasCaseStudy, kindOf } from '../../data/showcase'
import ProjectPanel from './ProjectPanel'

export default function FeaturedProject({ project, position }: { project: Project; position?: number }) {
  const caseStudy = `/projects/${project.slug}`
  const kind = kindOf(project)

  return (
    <article className='group relative'>
      <ProjectPanel project={project} large position={position} />

      <div className='mt-7 grid gap-7 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14'>
        <div>
          {kind && <p className='mb-2 text-sm font-medium text-muted'>{kind}</p>}
          <h3 className='text-4xl font-bold leading-none md:text-5xl'>
            <Link to={caseStudy} className="after:absolute after:inset-0 after:content-['']">
              {project.title}
            </Link>
          </h3>
          <div className='mt-5'>
            <StackPills stack={project.stack} />
          </div>
        </div>

        <div>
          <p className='font-serif text-xl leading-relaxed text-ink/80'>{project.summary ?? project.subtitle}</p>
          <div className='relative z-10 mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 font-medium'>
            <Link
              to={caseStudy}
              className='inline-flex items-center rounded-full bg-ink px-6 py-3 text-[0.95rem] font-semibold text-paper transition-colors hover:bg-accent'
            >
              {hasCaseStudy(project) ? 'View case study' : 'View details'}
            </Link>
            <a
              href={project.liveLink}
              target='_blank'
              rel='noopener noreferrer'
              className='text-link inline-flex items-center gap-1.5'
            >
              Live site <ExternalLink size={15} aria-hidden='true' />
            </a>
            <a
              href={project.githubLink}
              target='_blank'
              rel='noopener noreferrer'
              className='text-link inline-flex items-center gap-1.5'
            >
              Source code <Github size={15} aria-hidden='true' />
            </a>
          </div>
        </div>
      </div>
    </article>
  )
}