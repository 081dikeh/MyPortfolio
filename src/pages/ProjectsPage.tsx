// src/pages/ProjectsPage.tsx
import { showcase } from '../data/showcase'
import PageLayout from '../components/common/PageLayout'
import SectionHeading from '../components/common/SectionHeading'
import FeaturedProject from '../components/projects/FeaturedProject'
import ProjectCard from '../components/projects/ProjectCard'
import Reveal from '../components/common/Reveal'
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
        subtitle={`${showcase.length} projects. All live, all built solo.`}
      />

      <Reveal>
        <FeaturedProject project={showcase[0]} />
      </Reveal>

      <div className='mt-20 grid gap-x-8 gap-y-16 md:grid-cols-2 md:gap-x-10'>
        {showcase.slice(1).map((project, i) => (
          <Reveal key={project.id} delay={(i % 2) * 90}>
            <ProjectCard project={project} className={i % 2 === 1 ? 'md:mt-16' : ''} />
          </Reveal>
        ))}
      </div>
    </PageLayout>
  )
}