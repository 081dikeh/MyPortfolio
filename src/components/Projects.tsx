import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { featuredProject, otherProjects } from '../data/projects'
import { useInView } from '../hooks/useInView'
import SectionHeading from './common/SectionHeading'
import FeaturedProject from './projects/FeaturedProject'
import ProjectCard from './projects/ProjectCard'

export default function Projects() {
  const { ref: sectionRef, inView } = useInView({ threshold: 0.05 })
  const previewProjects = otherProjects.slice(0, 3)

  return (
    <section id='projects' ref={sectionRef} className='py-section scroll-mt-24'>
      <SectionHeading
        title='Projects'
        show={inView}
        action={
          <Link
            to='/projects'
            className='text-muted text-sm hover:text-accent transition-colors flex items-center gap-1.5 whitespace-nowrap font-mono'
          >
            View all <ArrowRight size={14} />
          </Link>
        }
      />

      <FeaturedProject project={featuredProject} show={inView} />

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
        {previewProjects.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            show={inView}
            delay={120 + i * 100}
            maxStack={3}
            imageHeight='h-40'
          />
        ))}
      </div>
    </section>
  )
}
