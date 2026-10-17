// src/components/Projects.tsx
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { showcase } from '../data/showcase'
import SectionHeading from './common/SectionHeading'
import FeaturedProject from './projects/FeaturedProject'
import ProjectCard from './projects/ProjectCard'
import Button from './common/Button'

export default function Projects() {
  const [lead, ...others] = showcase
  const preview = others.slice(0, 4)
  const total = showcase.length

  return (
    <section id='projects' className='wrap scroll-mt-20 py-section'>
      <SectionHeading
        title='Projects'
        subtitle='Dashboards, e-commerce, community platforms, and web apps I’ve designed, built, and shipped.'
        action={
          <Link to='/projects' className='group inline-flex items-center gap-3 font-medium'>
            All projects
            <span className='grid h-10 w-10 place-items-center rounded-xl bg-panel text-on-panel transition-transform duration-200 group-hover:-translate-y-0.5'>
              <ArrowUpRight size={18} aria-hidden='true' />
            </span>
          </Link>
        }
      />

      <FeaturedProject project={lead} />

      <div className='mt-20 grid gap-x-8 gap-y-16 md:grid-cols-2 md:gap-x-10'>
        {preview.map((project, i) => (
          <ProjectCard key={project.id} project={project} className={i % 2 === 1 ? 'md:mt-16' : ''} />
        ))}
      </div>

      <div className='mt-20 flex justify-center md:mt-28'>
        <Button to='/projects' variant='secondary'>See all {total} projects</Button>
      </div>
    </section>
  )
}