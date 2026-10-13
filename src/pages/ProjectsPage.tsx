import { featuredProject, otherProjects, projects } from '../data/projects'
import { useInView } from '../hooks/useInView'
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

  const { ref: sectionRef, inView } = useInView({ threshold: 0.05 })

  return (
    <PageLayout className='pt-24 pb-section'>
      <section ref={sectionRef}>
        <SectionHeading
          title='Projects'
          headingLevel='h1'
          prefix='/'
          subtitle={`${projects.length} projects — all live, all built solo`}
          show={inView}
          lineWidth='md:w-48'
        />

        <FeaturedProject project={featuredProject} show={inView} />

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
          {otherProjects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              show={inView}
              delay={80 + i * 60}
            />
          ))}
        </div>
      </section>
    </PageLayout>
  )
}
