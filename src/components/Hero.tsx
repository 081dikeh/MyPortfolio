// src/components/Hero.tsx
import type { CSSProperties } from 'react'
import portrait from '../assets/hero-portrait.webp'
import { projects } from '../data/projects'
import FadeIn from './common/FadeIn'
import Button from './common/Button'

const HEADLINE = ['Hi, I’m Daniel.', 'I build useful web', 'products that feel', 'easy to use.']

const TAGS = [
  { label: 'React', style: 'bg-sun text-[#14202B]' },
  { label: 'Next.js', style: 'bg-ink text-paper' },
  { label: 'TypeScript', style: 'bg-ink/10 text-ink' },
  { label: 'JavaScript', style: 'bg-sun text-[#14202B]' },
]

// The portrait is visible above the disk's centre line, but below it only inside the circle,
// so the head breaks out of the shape while the shoulders are cut by it.
const portraitMask: CSSProperties = {
  maskImage:
    'radial-gradient(circle closest-side at 50% 50%, #000 99.5%, transparent 100%), linear-gradient(#000, #000)',
  maskSize: '100% 72.46%, 100% 63.77%',
  maskPosition: '0 100%, 0 0',
  maskRepeat: 'no-repeat',
  WebkitMaskImage:
    'radial-gradient(circle closest-side at 50% 50%, #000 99.5%, transparent 100%), linear-gradient(#000, #000)',
  WebkitMaskSize: '100% 72.46%, 100% 63.77%',
  WebkitMaskPosition: '0 100%, 0 0',
  WebkitMaskRepeat: 'no-repeat',
}

export default function Hero() {
  return (
    <section className='relative overflow-hidden'>
      {/* soft glow, then the diagonal band, both behind the content */}
      <div
        aria-hidden='true'
        className='pointer-events-none absolute -right-[20%] top-[52%] h-[48%] w-[100%] bg-[radial-gradient(closest-side,rgb(var(--sun)/0.22),transparent)] lg:right-[-4%] lg:top-[4%] lg:h-[100%] lg:w-[56%]'
      />
      <div
        aria-hidden='true'
        className='absolute -right-[28%] top-[44%] h-[80%] w-[78%] rotate-[32deg] animate-band-shift rounded-[3.5rem] bg-[linear-gradient(135deg,rgb(var(--sun))_0%,#F6A25A_50%,rgb(var(--sun))_100%)] bg-[length:220%_220%] lg:-top-[2%] lg:right-[1%] lg:h-[84%] lg:w-[30%]'
      />

      <div className='wrap relative pb-16 pt-28 md:pt-36 lg:pb-24'>
        <div className='grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10'>
          <div>
            <h1 className='text-[2.35rem] font-bold leading-[1] sm:text-6xl lg:text-[4.4rem]'>
              {HEADLINE.map((line, i) => (
                <span
                  key={line}
                  className='block animate-fade-in-up opacity-0'
                  style={{ animationDelay: `${i * 70}ms` }}
                >
                  {line}
                </span>
              ))}
            </h1>

            <FadeIn delay={290}>
              <p className='mt-7 max-w-[34rem] font-serif text-xl leading-relaxed text-ink/80 md:text-[1.375rem]'>
                I’m a frontend engineer in Lagos, Nigeria, focused on React, Next.js, and TypeScript. I turn complex
                ideas into responsive, intuitive web experiences, combining thoughtful UI design with the logic that
                makes products work.
              </p>
            </FadeIn>

            <FadeIn delay={350}>
              <div className='mt-9 flex flex-wrap gap-3'>
                <Button to='/projects' arrow>View projects</Button>
                <Button to='/contact' variant='secondary'>Hire me</Button>
              </div>
            </FadeIn>

            <FadeIn delay={410}>
              <ul className='mt-10 flex flex-wrap gap-2.5' aria-label='Main technologies'>
                {TAGS.map(({ label, style }) => (
                  <li key={label} className={` px-4 py-2 font-display text-base font-medium md:text-lg ${style}`}>
                    {label}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>

          <FadeIn delay={180} direction='none' className='animate-scale-in'>
            <div className='relative mx-auto w-full max-w-[24rem] lg:max-w-none'>
              <div className='relative aspect-square animate-float'>
                <div
                  aria-hidden='true'
                  className='absolute inset-0 rounded-full bg-[#1F8A7A] shadow-[0_36px_70px_-26px_rgba(20,32,43,0.6)]'
                />
                <div className='absolute inset-x-0 bottom-0 h-[138%]' style={portraitMask}>
                  <img
                    src={portrait}
                    alt='Portrait of Dikeh Daniel'
                    width={900}
                    height={886}
                    className='absolute bottom-0 left-1/2 w-[108%] max-w-none -translate-x-1/2'
                  />
                </div>

                <div className='absolute -left-3 bottom-[20%] rounded-2xl bg-panel px-5 py-3 text-on-panel shadow-[0_18px_40px_-18px_rgba(20,32,43,0.7)] md:-left-8'>
                  <span className='block font-display text-4xl font-bold leading-none md:text-5xl'>{projects.length}</span>
                  <span className='mt-1 block text-sm text-on-panel/80'>projects shipped</span>
                </div>

                <p className='absolute left-[2%] top-[14%] flex items-center gap-2.5 rounded-full bg-paper px-3.5 py-2 text-sm font-medium shadow-[0_10px_30px_-14px_rgba(20,32,43,0.5)]'>
                  <span className='status-dot' aria-hidden='true' />
                  Open to work
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}