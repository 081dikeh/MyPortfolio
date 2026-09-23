// src/pages/ProjectDetailPage.tsx
import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowLeft, Code, ExternalLink } from 'lucide-react'
import { projects } from '../data/projects'
import { useInView } from '../hooks/useInView'
import PageLayout from '../components/common/PageLayout'
import SectionHeading from '../components/common/SectionHeading'
import FadeIn from '../components/common/FadeIn'
import StackPills from '../components/StackPills'
import Button from '../components/common/Button'

export default function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const { ref: sectionRef, inView } = useInView({ threshold: 0.05 })

  const project = projects.find((p) => p.slug === slug)

  // Invalid or unknown slug — send visitors back to the projects index
  // instead of rendering a broken page.
  if (!project) {
    return <Navigate to='/projects' replace />
  }

  const hasCaseStudy = Boolean(
    project.problem || project.approach || project.result || (project.features && project.features.length > 0)
  )

  return (
    <PageLayout className='pt-24 pb-section'>
      <section ref={sectionRef}>
        <FadeIn show={inView} direction='left'>
          <Link
            to='/projects'
            className='inline-flex items-center gap-2 text-xs text-muted hover:text-accent transition-colors duration-300 mb-8'
          >
            <ArrowLeft size={14} /> Back to projects
          </Link>
        </FadeIn>

        <SectionHeading
          title={project.title}
          prefix='/'
          subtitle={project.subtitle}
          show={inView}
          lineWidth='md:w-48'
        />

        <FadeIn show={inView} delay={80}>
          <div className='overflow-hidden ring-1 ring-border mb-8'>
            <img
              src={project.image}
              alt={`Screenshot of ${project.title}`}
              className='w-full max-h-[440px] object-cover object-top'
            />
          </div>
        </FadeIn>

        <FadeIn show={inView} delay={120}>
          <div className='flex flex-wrap gap-3 mb-10'>
            <Button href={project.liveLink} external variant='primary'>
              <ExternalLink size={14} /> Live project
            </Button>
            <Button href={project.githubLink} external variant='secondary'>
              <Code size={14} /> GitHub / Source
            </Button>
          </div>
        </FadeIn>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
          <div className='lg:col-span-2 flex flex-col gap-8'>
            {hasCaseStudy ? (
              <>
                {project.summary && (
                  <FadeIn show={inView} delay={140}>
                    <p className='text-white/90 text-base leading-relaxed'>{project.summary}</p>
                  </FadeIn>
                )}

                {project.problem && (
                  <FadeIn show={inView} delay={160}>
                    <div>
                      <h3 className='text-accent text-xs font-mono uppercase tracking-wider mb-2'>Problem</h3>
                      <p className='text-muted text-sm leading-relaxed'>{project.problem}</p>
                    </div>
                  </FadeIn>
                )}

                {project.approach && (
                  <FadeIn show={inView} delay={180}>
                    <div>
                      <h3 className='text-accent text-xs font-mono uppercase tracking-wider mb-2'>Approach</h3>
                      <p className='text-muted text-sm leading-relaxed'>{project.approach}</p>
                    </div>
                  </FadeIn>
                )}

                {project.features && project.features.length > 0 && (
                  <FadeIn show={inView} delay={200}>
                    <div>
                      <h3 className='text-accent text-xs font-mono uppercase tracking-wider mb-3'>Key features</h3>
                      <ul className='flex flex-col gap-2'>
                        {project.features.map((feature) => (
                          <li key={feature} className='text-muted text-sm leading-relaxed flex items-start gap-2.5'>
                            <span className='mt-1.5 w-1 h-1 rounded-full bg-accent flex-shrink-0' />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </FadeIn>
                )}

                {project.result && (
                  <FadeIn show={inView} delay={220}>
                    <div>
                      <h3 className='text-accent text-xs font-mono uppercase tracking-wider mb-2'>Result</h3>
                      <p className='text-muted text-sm leading-relaxed'>{project.result}</p>
                    </div>
                  </FadeIn>
                )}
              </>
            ) : (
              // No detailed case-study content yet for this project —
              // fall back to the information already on the project card.
              <FadeIn show={inView} delay={140}>
                <p className='text-muted text-sm leading-relaxed'>{project.subtitle}</p>
              </FadeIn>
            )}
          </div>

          <FadeIn show={inView} delay={160}>
            <div className='ring-1 ring-border p-5 bg-surface/40 flex flex-col gap-3'>
              <h3 className='text-white text-xs font-mono uppercase tracking-wider'>Technology stack</h3>
              <StackPills stack={project.stack} />
            </div>
          </FadeIn>
        </div>

        <FadeIn show={inView} delay={240}>
          <div className='mt-14 pt-8 border-t border-border'>
            <Link
              to='/projects'
              className='inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors duration-300'
            >
              <ArrowLeft size={14} /> Back to all projects
            </Link>
          </div>
        </FadeIn>
      </section>
    </PageLayout>
  )
}