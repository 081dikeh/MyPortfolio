import { ExternalLink, Code, ArrowRight } from 'lucide-react'
import type { Project } from '../../data/projects'
import StackPills from '../StackPills'
import FadeIn from '../common/FadeIn'

interface FeaturedProjectProps {
  project: Project
  show?: boolean
}

export default function FeaturedProject({ project, show = true }: FeaturedProjectProps) {
  return (
    <FadeIn show={show}>
      <article className='mb-5 ring-1 ring-accent/50 group card-lift overflow-hidden bg-surface/40'>
        <div className='flex flex-col lg:flex-row'>
          <div className='lg:w-2/5 p-6 sm:p-8 flex flex-col justify-between gap-6'>
            <div className='flex flex-col gap-4'>
              <span className='featured-badge'>Featured Project</span>
              <h3 className='text-xl sm:text-2xl text-white font-bold'>{project.title}</h3>
              <p className='text-muted text-sm leading-relaxed'>{project.subtitle}</p>
            </div>
            <div className='flex flex-col gap-4'>
              <StackPills stack={project.stack} />
              <div className='flex gap-3 flex-wrap'>
                <a
                  href={project.liveLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-white ring-1 ring-accent hover:bg-accent transition-colors duration-300 py-2 px-5 text-sm flex items-center gap-2 btn-lift'
                >
                  <ExternalLink size={14} /> Live Demo
                </a>
                <a
                  href={project.githubLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-white ring-1 ring-border hover:ring-accent transition-colors duration-300 py-2 px-5 text-sm flex items-center gap-2 btn-lift'
                >
                  <Code size={14} /> Source
                </a>
              </div>
            </div>
          </div>

          <a
            href={project.liveLink}
            target='_blank'
            rel='noopener noreferrer'
            className='lg:w-3/5 overflow-hidden relative block'
            aria-label={`View ${project.title} live`}
          >
            <img
              src={project.image}
              alt={`Screenshot of ${project.title}`}
              className='w-full h-56 lg:h-full min-h-[240px] object-cover object-top group-hover:scale-105 transition-transform duration-500'
            />
            <div className='project-overlay'>
              <span className='text-white text-sm font-medium flex items-center gap-2'>
                View live <ArrowRight size={14} />
              </span>
            </div>
          </a>
        </div>
      </article>
    </FadeIn>
  )
}
