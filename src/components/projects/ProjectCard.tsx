// src/components/projects/ProjectCard.tsx
import { Link } from 'react-router-dom'
import { ExternalLink, Github } from 'lucide-react'
import type { Project } from '../../data/projects'
import StackPills from '../StackPills'
import ProjectPanel from './ProjectPanel'

export default function ProjectCard({ project, className = '' }: { project: Project; className?: string }) {
  const caseStudy = `/projects/${project.slug}`

  return (
    <article className={`group relative ${className}`}>
      <ProjectPanel project={project} />

      <div className='mt-5'>
        <h3 className='text-2xl font-bold leading-tight md:text-[1.75rem]'>
          <Link to={caseStudy} className="after:absolute after:inset-0 after:content-['']">
            {project.title}
          </Link>
        </h3>
        <p className='mt-2 line-clamp-3 font-serif text-[1.0625rem] leading-relaxed text-ink/75'>{project.subtitle}</p>
        <div className='mt-4'>
          <StackPills stack={project.stack} max={4} />
        </div>

        <div className='relative z-10 mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-[0.95rem] font-medium'>
          <Link to={caseStudy} className='text-link'>View case study</Link>
          <a
            href={project.liveLink}
            target='_blank'
            rel='noopener noreferrer'
            className='text-link inline-flex items-center gap-1.5'
          >
            Live <ExternalLink size={14} aria-hidden='true' />
          </a>
          <a
            href={project.githubLink}
            target='_blank'
            rel='noopener noreferrer'
            className='text-link inline-flex items-center gap-1.5'
          >
            GitHub <Github size={14} aria-hidden='true' />
          </a>
        </div>
      </div>
    </article>
  )
}