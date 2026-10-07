import secHeroImg from '../assets/secHeroImg.png'
import Skill from '../components/Skill'
import { useInView } from '../hooks/useInView'
import { useCounter } from '../hooks/useCounter'
import PageLayout from '../components/common/PageLayout'
import SectionHeading from '../components/common/SectionHeading'
import StatsBar from '../components/common/StatsBar'
import FadeIn from '../components/common/FadeIn'
import Button from '../components/common/Button'
import { projects } from '../data/projects'
import { skillGroups } from '../data/skills'

export default function AboutPage() {
  const { ref: sectionRef, inView } = useInView({ threshold: 0.05 })
  const { ref: imgRef, inView: imgVisible } = useInView({ threshold: 0.08 })
  const { ref: skillRef, inView: skillVisible } = useInView({ threshold: 0.04 })

  const projectCount = useCounter(projects.length, 1400, inView)
  const technologyCount = useCounter(
    skillGroups.reduce((total, group) => total + group.skills.length, 0),
    1400,
    inView,
  )

  return (
    <PageLayout className='pt-24 pb-section'>
      <section ref={sectionRef}>
        <SectionHeading
          title='About'
          prefix='/'
          subtitle='Frontend Developer · Lagos, Nigeria · Open to full-time roles & freelance projects'
          show={inView}
          lineWidth='md:w-48'
        />

        <div className='flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-16 mb-20'>
          <div className='w-full lg:w-1/2 flex flex-col gap-6'>
            <StatsBar
              show={inView}
              stats={[
                { value: `${projectCount}`, label: 'Projects shipped' },
                { value: `${technologyCount}`, label: 'Technologies' },
                { value: '100%', label: 'Solo-built' },
              ]}
            />

            <FadeIn show={inView} direction='left' delay={150}>
              <div className='flex flex-col gap-4 text-muted text-sm leading-relaxed'>
                <p className='text-white font-medium text-base'>Hello, I'm Daniel.</p>
                <p>
                  I'm a frontend developer based in Lagos, Nigeria. I've shipped{' '}
                  <span className='text-white'>{projectCount} live projects</span> across music,
                  finance, e-commerce, and community platforms. I build with React, TypeScript,
                  Next.js, and Tailwind CSS, and use Supabase or Neon when a project needs a backend.
                </p>
                <p>
                  I care about making products useful as well as polished, with accessible,
                  responsive interfaces, thoughtful interactions, and reliable delivery.
                </p>
                <p>
                  I'm open to frontend developer roles and freelance projects. If you're building
                  something, let's talk.
                </p>
              </div>
            </FadeIn>

            <FadeIn show={inView} direction='left' delay={250}>
              <Button href='/Dikeh_Daniel_Frontend_Engineer_Resume.pdf' download>Download resume</Button>
            </FadeIn>
          </div>

          <FadeIn show={imgVisible} direction='right' className='w-full lg:w-2/5 flex justify-center lg:justify-end'>
            <div ref={imgRef} className='relative'>
              <div className='absolute inset-3 border border-accent/15 pointer-events-none' aria-hidden='true' />
              <img
                src={secHeroImg}
                className='w-72 sm:w-80 lg:w-96 relative z-10 animate-float ring-1 ring-border'
                alt='Dikeh Daniel portrait'
              />
            </div>
          </FadeIn>
        </div>

        <div ref={skillRef}>
          <SectionHeading title='Skills' show={skillVisible} lineWidth='md:w-64' />
          <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3'>
            <Skill inView={skillVisible} />
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
