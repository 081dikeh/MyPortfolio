// src/components/Hero.tsx
import portrait from '../assets/hero-portrait.webp'
import { SITE } from '../data/site'
import FadeIn from './common/FadeIn'
import Button from './common/Button'
import SolfaKeys from './SolfaKeys'

export default function Hero() {
  return (
    <section className='wrap pb-12 pt-28 md:pt-36 lg:pb-20'>
      <div className='grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16'>
        <div>
          <FadeIn delay={60}>
            <h1 className='text-[2.6rem] font-bold leading-[1] sm:text-6xl lg:text-[4.4rem]'>
              Hi, I’m Daniel. I build web apps that make music easier to write, share, and sing.
            </h1>
          </FadeIn>

          <FadeIn delay={180}>
            <p className='mt-7 max-w-[34rem] font-serif text-xl leading-relaxed text-ink/80 md:text-[1.375rem]'>
              I’m a frontend developer in Nigeria working with React, TypeScript, and Next.js. I’ve shipped 10 live
              projects, from a notation editor for choirs to a finance dashboard.
            </p>
          </FadeIn>

          <FadeIn delay={300}>
            <div className='mt-9 flex flex-wrap gap-3'>
              <Button to='/projects'>See my projects</Button>
              <Button href={SITE.resume} download variant='secondary'>Download resume</Button>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={240}>
          <div className='relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[2rem] bg-[#EE8A3F] lg:max-w-none'>
            {/* five staff lines and a whole note behind the portrait */}
            <div aria-hidden='true' className='absolute inset-x-0 top-[17%]'>
              {[0, 1, 2, 3, 4].map((n) => (
                <div key={n} className='mb-[1.1rem] h-px bg-ink/20' />
              ))}
            </div>
            <div aria-hidden='true' className='absolute left-[9%] top-[17%]'>
              {/* a quarter note sitting on the staff */}
              <div className='absolute left-0 top-[2.3rem] h-[0.95rem] w-[1.4rem] -rotate-[20deg] rounded-[50%] bg-ink' />
              <div className='absolute left-[1.22rem] top-[-0.9rem] h-[3.4rem] w-[2.5px] bg-ink' />
            </div>
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

      <div className='mt-14 lg:mt-20'>
        <SolfaKeys />
      </div>
    </section>
  )
}