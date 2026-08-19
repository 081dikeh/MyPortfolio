import { featuredProject, otherProjects } from '../data/projects'
import { useInView } from '../hooks/useInView'
import PageLayout from '../components/common/PageLayout'
import SectionHeading from '../components/common/SectionHeading'
import FeaturedProject from '../components/projects/FeaturedProject'
import ProjectCard from '../components/projects/ProjectCard'

export default function ProjectsPage() {
  const { ref: sectionRef, inView } = useInView({ threshold: 0.05 })

  return (
    <PageLayout className='pt-24 pb-section'>
      <section ref={sectionRef}>
        <SectionHeading
          title='Projects'
          prefix='/'
          subtitle={`${otherProjects.length + 1} projects — all live, all built solo`}
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
