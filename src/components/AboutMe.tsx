import secHeroImg from '../assets/secHeroImg.png'
import { useInView } from '../hooks/useInView'
import { useCounter } from '../hooks/useCounter'
import SectionHeading from './common/SectionHeading'
import StatsBar from './common/StatsBar'
import FadeIn from './common/FadeIn'
import Button from './common/Button'

export default function AboutMe() {
  const { ref: sectionRef, inView } = useInView({ threshold: 0.08 })
  const { ref: imgRef, inView: imgVisible } = useInView({ threshold: 0.1 })

  const projectCount = useCounter(10, 1400, inView)
  const techCount = useCounter(12, 1000, inView)

  return (
    <section id='about' ref={sectionRef} className='py-section scroll-mt-24'>
      <SectionHeading title='About me' show={inView} lineWidth='md:w-96' />

      <div className='flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-16'>
        <div className='w-full lg:w-1/2 flex flex-col gap-6'>
          <StatsBar
            show={inView}
            stats={[
              { value: `${projectCount}+`, label: 'Shipped projects' },
              { value: `${techCount}+`, label: 'Technologies' },
              { value: '100%', label: 'Solo-built' },
            ]}
          />

          <FadeIn show={inView} direction='left' delay={150}>
            <div className='flex flex-col gap-4 text-muted leading-relaxed'>
              <p className='text-white font-medium'>Hello, I'm Daniel.</p>
              <p>
                I'm a frontend developer building clear, performant interfaces for products and businesses.
                I’ve shipped <span className='text-white'>10 live projects</span> across music, finance,
                community platforms, and e-commerce — all designed and built with React, TypeScript,
                and modern web tooling.
              </p>
              <p>
                I care about product thinking as much as code quality: responsive layouts, accessible UX,
                thoughtful interactions, and fast delivery. My work is shaped by the idea that a website
                should not just look good — it should help people take action.
              </p>
            </div>
          </FadeIn>

          <FadeIn show={inView} direction='left' delay={250}>
            <div className='flex flex-wrap gap-2 text-xs font-mono text-muted mb-4'>
              {['Frontend UI', 'Product thinking', 'Responsive design', 'Clean code', 'Fast iteration', 'Accessible UX'].map((item) => (
                <span key={item} className='border border-border px-2.5 py-1.5 bg-surface/40'>{item}</span>
              ))}
            </div>
            <div className='flex gap-3 flex-wrap'>
              <Button to='/about'>Read more</Button>
              <Button href='/Daniel-Dikeh-CV.pdf' download variant='secondary'>Resume</Button>
            </div>
          </FadeIn>
        </div>

        <FadeIn show={imgVisible} direction='right' className='w-full lg:w-2/5 flex justify-center lg:justify-end'>
          <div ref={imgRef} className='relative'>
            <div className='absolute inset-3 border border-accent/15 pointer-events-none' aria-hidden='true' />
            <img
              src={secHeroImg}
              className='w-72 sm:w-80 lg:w-96 relative z-10 animate-float ring-1 ring-border'
              alt='Dikeh Daniel portrait'
              width={384}
              height={384}
            />
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
