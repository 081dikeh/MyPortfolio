import { ExternalLink, Code, ArrowRight } from 'lucide-react'
import type { Project } from '../../data/projects'
import StackPills from '../StackPills'
import FadeIn from '../common/FadeIn'

interface ProjectCardProps {
  project: Project
  show?: boolean
  delay?: number
  maxStack?: number
  imageHeight?: string
}

export default function ProjectCard({
  project,
  show = true,
  delay = 0,
  maxStack = 4,
  imageHeight = 'h-44',
}: ProjectCardProps) {
  return (
    <FadeIn show={show} delay={delay} className='h-full'>
      <article className='ring-1 ring-border flex flex-col h-full hover:ring-accent/60 transition-all duration-300 group card-lift overflow-hidden bg-surface/40'>
        <a
          href={project.liveLink}
          target='_blank'
          rel='noopener noreferrer'
          className='overflow-hidden relative block'
          aria-label={`View ${project.title} live`}
        >
          <img
            src={project.image}
            alt={`Screenshot of ${project.title}`}
            className={`w-full ${imageHeight} object-cover object-top group-hover:scale-105 transition-transform duration-500`}
            loading='lazy'
          />
          <div className='project-overlay'>
            <span className='text-white text-xs font-medium flex items-center gap-1.5'>
              View live <ArrowRight size={12} />
            </span>
          </div>
        </a>

        <div className='p-4 sm:p-5 flex flex-col gap-3 flex-1 justify-between'>
          <div>
            <h3 className='text-base text-white font-semibold mb-1.5'>{project.title}</h3>
            <p className='text-xs text-muted leading-relaxed line-clamp-3'>{project.subtitle}</p>
          </div>
          <div className='flex flex-col gap-3'>
            <StackPills stack={project.stack} max={maxStack} />
            <div className='flex gap-2 flex-wrap'>
              <a
                href={project.liveLink}
                target='_blank'
                rel='noopener noreferrer'
                className='text-white ring-1 ring-accent hover:bg-accent transition-colors duration-300 py-1.5 px-3.5 text-xs flex items-center gap-1.5 btn-lift'
              >
                <ExternalLink size={12} /> Live
              </a>
              <a
                href={project.githubLink}
                target='_blank'
                rel='noopener noreferrer'
                className='text-white ring-1 ring-border hover:ring-accent transition-colors duration-300 py-1.5 px-3.5 text-xs flex items-center gap-1.5 btn-lift'
              >
                <Code size={12} /> GitHub
              </a>
            </div>
          </div>
        </div>
      </article>
    </FadeIn>
  )
}
