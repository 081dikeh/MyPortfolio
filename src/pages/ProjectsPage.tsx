// src/pages/ProjectsPage.tsx
import { featuredProject, otherProjects } from '../data/projects'
import PageLayout from '../components/common/PageLayout'
import SectionHeading from '../components/common/SectionHeading'
import FeaturedProject from '../components/projects/FeaturedProject'
import ProjectCard from '../components/projects/ProjectCard'

export default function ProjectsPage() {
  return (
    <PageLayout className='pb-section pt-32 md:pt-40'>
      <SectionHeading
        as='h1'
        title='Projects'
        subtitle={`${otherProjects.length + 1} projects. All live, all built solo.`}
      />

      <FeaturedProject project={featuredProject} />

      <div className='mt-20 grid gap-x-8 gap-y-16 md:grid-cols-2 md:gap-x-10'>
        {otherProjects.map((project, i) => (
          <ProjectCard key={project.id} project={project} className={i % 2 === 1 ? 'md:mt-16' : ''} />
        ))}
      </div>
    </PageLayout>
  )
}