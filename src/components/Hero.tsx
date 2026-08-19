import { useEffect, useState } from 'react'
import { ArrowDown } from 'lucide-react'
import mainHeroImg from '../assets/mainHeroImg.png'
import { useTypewriter } from '../hooks/useTypewriter'
import FadeIn from './common/FadeIn'
import Button from './common/Button'

const ROLES = [
  'frontend engineer',
  'React developer',
  'Next.js developer',
  'UI builder',
]

export default function Hero() {
  const role = useTypewriter(ROLES, { speed: 75, deleteSpeed: 35, pause: 2200 })
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className='relative min-h-[calc(100vh-4rem)] flex items-center pt-24 pb-16 overflow-hidden hero-grid'>
      <div className='hero-glow' aria-hidden='true' />

      <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10'>

        {/* Text */}
        <div className='order-2 lg:order-1'>
          <FadeIn show={visible} direction='left' delay={0}>
            <div className='inline-flex items-center gap-2.5 text-xs text-muted mb-6 px-3 py-1.5 border border-border bg-surface/50 backdrop-blur-sm'>
              <span className='otw-dot' aria-hidden='true' />
              Available for work · Lagos, Nigeria
            </div>
          </FadeIn>

          <FadeIn show={visible} direction='left' delay={100}>
            <p className='font-mono text-accent text-sm mb-3'>Hi, my name is</p>
          </FadeIn>

          <FadeIn show={visible} direction='left' delay={180}>
            <h1 className='text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-white leading-[1.1] mb-4'>
              Dikeh Daniel.
            </h1>
          </FadeIn>

          <FadeIn show={visible} direction='left' delay={260}>
            <p className='text-2xl sm:text-3xl lg:text-4xl font-mono text-muted/80 mb-6 min-h-[1.3em]'>
              I build{' '}
              <span className='text-accent'>
                {role}
                <span className='typewriter-cursor' aria-hidden='true' />
              </span>
            </p>
          </FadeIn>

          <FadeIn show={visible} direction='left' delay={340}>
            <p className='text-base text-muted leading-relaxed max-w-lg mb-8'>
              I craft fast, accessible web applications with React, TypeScript, and Next.js.
              10+ shipped projects — from AI-powered platforms to finance dashboards.
            </p>
          </FadeIn>

          <FadeIn show={visible} direction='left' delay={420}>
            <div className='flex flex-wrap gap-3'>
              <Button to='/contact'>Get in touch</Button>
              <Button to='/projects' variant='secondary'>View projects</Button>
              <Button href='/Daniel-Dikeh-CV.pdf' download variant='secondary'>Resume</Button>
            </div>
          </FadeIn>
        </div>

        {/* Image */}
        <FadeIn show={visible} direction='right' delay={200} className='order-1 lg:order-2'>
          <div className='relative w-full max-w-md mx-auto lg:max-w-lg'>
            <div className='absolute inset-4 border border-accent/20 pointer-events-none' aria-hidden='true' />
            <div className='absolute -inset-4 border border-border/50 pointer-events-none translate-x-3 translate-y-3' aria-hidden='true' />

            <div className='relative bg-surface/30 backdrop-blur-sm p-1 ring-1 ring-border'>
              <img
                src={mainHeroImg}
                alt='Dikeh Daniel — Frontend Developer'
                className='w-full relative z-10 animate-float'
                width={480}
                height={480}
              />
            </div>

            <div className='hidden lg:flex absolute -bottom-4 -left-4 px-4 py-2.5 bg-canvas/90 backdrop-blur-sm border border-border text-xs font-mono text-muted items-center gap-2'>
              <span className='otw-dot' aria-hidden='true' />
              Recently shipped Faithbeat
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Scroll indicator */}
      <FadeIn show={visible} direction='none' delay={800} className='absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block'>
        <a
          href='#projects'
          className='flex flex-col items-center gap-2 text-muted/50 hover:text-accent transition-colors text-xs font-mono'
          aria-label='Scroll to projects'
        >
          <span>scroll</span>
          <ArrowDown size={14} className='animate-bounce' />
        </a>
      </FadeIn>
    </section>
  )
}
