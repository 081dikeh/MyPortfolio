// src/components/Projects.tsx
import { Link } from 'react-router-dom'
import { featuredProject, otherProjects } from '../data/projects'
import SectionHeading from './common/SectionHeading'
import FeaturedProject from './projects/FeaturedProject'
import ProjectCard from './projects/ProjectCard'
import Button from './common/Button'

export default function Projects() {
  const preview = otherProjects.slice(0, 4)
  const total = otherProjects.length + 1

  return (
    <section id='projects' className='wrap scroll-mt-20 py-section'>
      <SectionHeading
        title='Projects'
        subtitle='A notation editor, a choir library, and the other things I’ve shipped.'
        action={<Link to='/projects' className='text-link font-medium'>See all {total}</Link>}
      />

      <FeaturedProject project={featuredProject} />

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