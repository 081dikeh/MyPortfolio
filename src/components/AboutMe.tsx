// src/components/AboutMe.tsx
import secHeroImg from '../assets/secHeroImg.png'
import { SITE } from '../data/site'
import { projects } from '../data/projects'
import { skillGroups } from '../data/skills'
import Button from './common/Button'
import StatsBar from './common/StatsBar'
import ScrollWords from './common/ScrollWords'
import Reveal from './common/Reveal'

const FOCUS = ['Frontend UI', 'Product thinking', 'Search & auth', 'Complex state', 'Accessible UX', 'AI products']

export default function AboutMe() {
  const technologyCount = skillGroups.reduce((total, group) => total + group.skills.length, 0)

  return (
    <section id='about' className='wrap scroll-mt-20 py-section'>
      <div className='grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20'>
        <Reveal className='relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[2rem] bg-[#E7B53B] lg:max-w-none'>
          <img
            src={secHeroImg}
            alt='Dikeh Daniel'
            width={803}
            height={958}
            loading='lazy'
            decoding='async'
            className='absolute -bottom-[4%] left-1/2 w-[104%] max-w-none -translate-x-1/2'
          />
        </Reveal>

        <Reveal delay={120}>
          <h2 className='text-4xl font-bold leading-[1.02] md:text-6xl'>About me</h2>

          <div className='mt-8'>
            <StatsBar
              stats={[
                { value: projects.length, label: 'Projects shipped' },
                { value: technologyCount, label: 'Technologies' },
                { value: '100%', label: 'Solo-built' },
              ]}
            />
          </div>

          <div className='mt-8 flex max-w-[36rem] flex-col gap-5 font-serif text-lg leading-relaxed text-ink/80 md:text-xl'>
            <ScrollWords
              text='I’m a Frontend Engineer who likes building things that are actually useful.'
              className='text-2xl leading-snug text-ink md:text-[1.7rem]'
            />
            <p>
              I’m Dikeh Daniel, a frontend engineer focused on building modern, interactive web applications with React,
              Next.js, TypeScript, JavaScript, and Tailwind CSS.
            </p>
            <p>
              I enjoy taking an idea from a blank screen and turning it into a working product, from designing the
              interface and structuring the application to connecting APIs, managing state, handling authentication,
              testing features, and getting the app live.
            </p>
          </div>

          <ul className='mt-7 flex max-w-[36rem] flex-wrap gap-1.5' aria-label='Areas of focus'>
            {FOCUS.map((item) => (
              <li key={item} className='rounded-full bg-ink/[0.06] px-3 py-1 text-[0.8125rem] font-medium text-ink/75'>
                {item}
              </li>
            ))}
          </ul>

          <div className='mt-9 flex flex-wrap gap-3'>
            <Button to='/about'>Read more</Button>
            <Button href={SITE.resume} download variant='secondary'>Resume</Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}