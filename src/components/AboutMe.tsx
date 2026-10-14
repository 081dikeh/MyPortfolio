// src/components/AboutMe.tsx
import secHeroImg from '../assets/secHeroImg.png'
import { SITE } from '../data/site'
import Button from './common/Button'

export default function AboutMe() {
  return (
    <section id='about' className='wrap scroll-mt-20 py-section'>
      <div className='grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20'>
        <div className='relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[2rem] bg-[#E7B53B] lg:max-w-none'>
          <img
            src={secHeroImg}
            alt='Dikeh Daniel'
            width={803}
            height={958}
            loading='lazy'
            decoding='async'
            className='absolute -bottom-[4%] left-1/2 w-[104%] max-w-none -translate-x-1/2'
          />
        </div>

        <div>
          <h2 className='text-4xl font-bold leading-[1.02] md:text-6xl'>About me</h2>
          <div className='mt-8 flex max-w-[36rem] flex-col gap-5 font-serif text-lg leading-relaxed text-ink/80 md:text-xl'>
            <p className='text-2xl leading-snug text-ink md:text-[1.7rem]'>
              I’m a frontend developer building clear, performant interfaces for products and businesses.
            </p>
            <p>
              I’ve shipped 10 live projects across music, finance, community platforms, and e-commerce, all designed and
              built with React, TypeScript, and modern web tooling.
            </p>
            <p>
              I care about product thinking as much as code quality: responsive layouts, accessible UX, thoughtful
              interactions, and fast delivery. A website should not just look good. It should help people take action.
            </p>
          </div>
          <div className='mt-9 flex flex-wrap gap-3'>
            <Button to='/about'>Read more</Button>
            <Button href={SITE.resume} download variant='secondary'>Download resume</Button>
          </div>
        </div>
      </div>
    </section>
  )
}