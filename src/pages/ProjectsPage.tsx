// src/pages/ProjectsPage.tsx
import { featuredProject, otherProjects, projects } from '../data/projects'
import PageLayout from '../components/common/PageLayout'
import SectionHeading from '../components/common/SectionHeading'
import FeaturedProject from '../components/projects/FeaturedProject'
import ProjectCard from '../components/projects/ProjectCard'
import { usePageMetadata } from '../hooks/usePageMetadata'

export default function ProjectsPage() {
  usePageMetadata({
    title: 'Projects | Dikeh Daniel, Frontend Engineer',
    description: 'Explore web applications and product projects built by Dikeh Daniel, including music, finance, e-commerce, and community platforms.',
  })

  return (
    <PageLayout className='pb-section pt-32 md:pt-40'>
      <SectionHeading
        headingLevel='h1'
        title='Projects'
        subtitle={`${projects.length} projects. All live, all built solo.`}
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