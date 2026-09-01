import secHeroImg from '../assets/secHeroImg.png'
import Skill from '../components/Skill'
import { useInView } from '../hooks/useInView'
import { useCounter } from '../hooks/useCounter'
import PageLayout from '../components/common/PageLayout'
import SectionHeading from '../components/common/SectionHeading'
import StatsBar from '../components/common/StatsBar'
import FadeIn from '../components/common/FadeIn'
import Button from '../components/common/Button'

export default function AboutPage() {
  const { ref: sectionRef, inView } = useInView({ threshold: 0.05 })
  const { ref: imgRef, inView: imgVisible } = useInView({ threshold: 0.08 })
  const { ref: skillRef, inView: skillVisible } = useInView({ threshold: 0.04 })

  const projectCount = useCounter(10, 1400, inView)

  return (
    <PageLayout className='pt-24 pb-section'>
      <section ref={sectionRef}>
        <SectionHeading
          title='About'
          prefix='/'
          subtitle='Frontend Engineer · Lagos, Nigeria · Available for freelance & full-time'
          show={inView}
          lineWidth='md:w-48'
        />

        <div className='flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-16 mb-20'>
          <div className='w-full lg:w-1/2 flex flex-col gap-6'>
            <StatsBar
              show={inView}
              stats={[
                { value: `${projectCount}+`, label: 'Shipped projects' },
                { value: '1+', label: 'Years building' },
                { value: '100%', label: 'Solo-built' },
              ]}
            />

            <FadeIn show={inView} direction='left' delay={150}>
              <div className='flex flex-col gap-4 text-muted text-sm leading-relaxed'>
                <p className='text-white font-medium text-base'>Hello, I'm Daniel.</p>
                <p>
                  I'm a self-taught frontend engineer who has shipped{' '}
                  <span className='text-white'>{projectCount} live projects</span> across
                  music, finance, e-commerce, and community apps — without a bootcamp or CS degree.
                  I work primarily with React, TypeScript, Next.js, and Tailwind CSS, deploying
                  everything on Vercel with Supabase or Neon on the backend when needed.
                </p>
                <p>
                  I started from zero and built everything through consistency and a genuine
                  obsession with how the web works. Every project is fully live, has a public
                  GitHub repo, and was built entirely by me.
                </p>
                <p>
                  I'm currently open to frontend developer roles and freelance projects.
                  If you're building something and need someone who ships, let's talk.
                </p>
              </div>
            </FadeIn>

            <FadeIn show={inView} direction='left' delay={250}>
              <Button href='/Dikeh_Daniel_Frontend_Developer_Resume (2).pdf' download>Download resume</Button>
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
