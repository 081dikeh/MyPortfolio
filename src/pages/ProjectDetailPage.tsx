// src/pages/ProjectDetailPage.tsx
import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowLeft, Github, ExternalLink } from 'lucide-react'
import { projects } from '../data/projects'
import PageLayout from '../components/common/PageLayout'
import StackPills from '../components/StackPills'
import Button from '../components/common/Button'
import FadeIn from '../components/common/FadeIn'
import ProjectPanel from '../components/projects/ProjectPanel'

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className='border-t border-line pt-6'>
      <h2 className='text-2xl font-bold md:text-3xl'>{title}</h2>
      <div className='mt-4'>{children}</div>
    </section>
  )
}

export default function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const project = projects.find((p) => p.slug === slug)

  // Unknown slug: send visitors back to the projects list instead of a broken page.
  if (!project) return <Navigate to='/projects' replace />

  const hasCaseStudy = Boolean(
    project.problem || project.approach || project.result || (project.features && project.features.length > 0),
  )
  const prose = 'max-w-[38rem] font-serif text-lg leading-relaxed text-ink/80 md:text-xl'

  return (
    <PageLayout className='pb-section pt-28 md:pt-36'>
      <Link
        to='/projects'
        className='mb-10 inline-flex items-center gap-2 text-[0.95rem] font-medium text-muted transition-colors hover:text-accent'
      >
        <ArrowLeft size={16} aria-hidden='true' /> Back to projects
      </Link>

      <FadeIn>
        <h1 className='max-w-4xl text-5xl font-bold leading-[1] md:text-7xl'>{project.title}</h1>
        <p className='mt-6 max-w-2xl font-serif text-xl leading-relaxed text-ink/80 md:text-2xl'>{project.subtitle}</p>
        <div className='mt-8 flex flex-wrap gap-3'>
          <Button href={project.liveLink} external>
            Live project <ExternalLink size={16} aria-hidden='true' />
          </Button>
          <Button href={project.githubLink} external variant='secondary'>
            <Github size={16} aria-hidden='true' /> GitHub source code
          </Button>
        </div>
      </FadeIn>

      <div className='group mt-12'>
        <ProjectPanel project={project} large />
      </div>

      <div className='mt-14 grid gap-12 lg:grid-cols-[1fr_17rem] lg:gap-20'>
        <div className='flex flex-col gap-10'>
          {hasCaseStudy ? (
            <>
              {project.summary && (
                <p className='max-w-[38rem] text-2xl font-medium leading-snug tracking-tight md:text-[1.75rem]'>
                  {project.summary}
                </p>
              )}
              {project.problem && (
                <Block title='The problem'>
                  <p className={prose}>{project.problem}</p>
                </Block>
              )}
              {project.approach && (
                <Block title='The approach'>
                  <p className={prose}>{project.approach}</p>
                </Block>
              )}
              {project.features && project.features.length > 0 && (
                <Block title='Key features'>
                  <ul className='flex max-w-[38rem] flex-col gap-3'>
                    {project.features.map((feature) => (
                      <li key={feature} className='flex items-start gap-3 font-serif text-lg leading-relaxed text-ink/80 md:text-xl'>
                        <span className='mt-[0.7em] h-2 w-2 shrink-0 rounded-full bg-accent' aria-hidden='true' />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Block>
              )}
              {project.result && (
                <Block title='The result'>
                  <p className={prose}>{project.result}</p>
                </Block>
              )}
            </>
          ) : (
            <p className={prose}>
              A full write-up for {project.title} isn’t ready yet. You can use the live project and source code links to
              see how it works.
            </p>
          )}
        </div>

        <aside className='lg:sticky lg:top-28 lg:self-start'>
          <h2 className='mb-4 text-xl font-bold'>Built with</h2>
          <StackPills stack={project.stack} />
        </aside>
      </div>
    </PageLayout>
  )
}