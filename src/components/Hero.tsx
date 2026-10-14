// src/components/Hero.tsx
import portrait from '../assets/hero-portrait.webp'
import FadeIn from './common/FadeIn'
import Button from './common/Button'

export default function Hero() {
  return (
    <section className='wrap pb-12 pt-28 md:pt-36 lg:pb-6'>
      <div className='grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16'>
        <div>
          <FadeIn delay={60}>
            <h1 className='text-[2.6rem] font-bold leading-[1] sm:text-6xl lg:text-[4.4rem]'>
              Hi, I’m Daniel. I build useful web products that feel easy to&nbsp;use.
            </h1>
          </FadeIn>

          <FadeIn delay={180}>
            <p className='mt-7 max-w-[34rem] font-serif text-xl leading-relaxed text-ink/80 md:text-[1.375rem]'>
              I’m a frontend engineer in Lagos, Nigeria, focused on building useful, interactive products with React,
              TypeScript, and Next.js. I turn ideas into clear, high-quality experiences that solve real problems.
            </p>
          </FadeIn>

          <FadeIn delay={300}>
            <div className='mt-9 flex flex-wrap gap-3'>
              <Button to='/projects'>View projects</Button>
              <Button to='/contact' variant='secondary'>Hire me</Button>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={240}>
          <div className='relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[2rem] bg-[#EE8A3F] lg:max-w-none'>
            <div
              aria-hidden='true'
              className='absolute left-1/2 top-[9%] aspect-square w-[78%] -translate-x-1/2 rounded-full bg-white/20'
            />
            <img
              src={portrait}
              alt='Portrait of Dikeh Daniel'
              width={900}
              height={886}
              className='absolute bottom-0 left-1/2 w-[112%] max-w-none -translate-x-1/2'
            />
            <p className='absolute left-4 top-4 flex items-center gap-2.5 rounded-full bg-paper px-3.5 py-2 text-sm font-medium'>
              <span className='status-dot' aria-hidden='true' />
              Open to work
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}