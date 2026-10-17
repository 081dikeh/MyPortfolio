// src/pages/AboutPage.tsx
import { Link } from 'react-router-dom'
import secHeroImg from '../assets/secHeroImg.png'
import { SITE } from '../data/site'
import { projects } from '../data/projects'
import { skillGroups } from '../data/skills'
import Skill from '../components/Skill'
import Experience from '../components/Experience'
import PageLayout from '../components/common/PageLayout'
import SectionHeading from '../components/common/SectionHeading'
import StatsBar from '../components/common/StatsBar'
import Button from '../components/common/Button'
import { usePageMetadata } from '../hooks/usePageMetadata'

function Heading({ children }: { children: React.ReactNode }) {
  return <h2 className='mt-6 font-display text-2xl font-bold text-ink md:text-3xl'>{children}</h2>
}

export default function AboutPage() {
  usePageMetadata({
    title: 'About Dikeh Daniel | Frontend Engineer',
    description: 'Learn about Dikeh Daniel, a Lagos-based frontend engineer building useful web applications with React, Next.js, and TypeScript.',
  })

  const technologyCount = skillGroups.reduce((total, group) => total + group.skills.length, 0)

  return (
    <PageLayout className='pb-section pt-32 md:pt-40'>
      <div className='grid items-start gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20'>
        <div>
          <SectionHeading
            headingLevel='h1'
            title='About me'
            subtitle='Frontend Engineer · Lagos, Nigeria · Available for full-time & freelance work'
          />

          <StatsBar
            stats={[
              { value: projects.length, label: 'Projects shipped' },
              { value: technologyCount, label: 'Technologies' },
              { value: '100%', label: 'Solo-built' },
            ]}
          />

          <div className='mt-10 flex max-w-[38rem] flex-col gap-5 font-serif text-lg leading-relaxed text-ink/80 md:text-xl'>
            <p className='text-2xl leading-snug text-ink md:text-[1.7rem]'>
              I’m a Frontend Engineer who likes building things that are actually useful.
            </p>
            <p>
              I’m <span className='font-medium text-ink'>Dikeh Daniel</span>, a frontend engineer focused on building
              modern, interactive web applications with React, Next.js, TypeScript, JavaScript, and Tailwind CSS.
            </p>
            <p>
              I enjoy taking an idea from a blank screen and turning it into a working product, from designing the
              interface and structuring the application to connecting APIs, managing state, handling authentication,
              testing features, and getting the app live.
            </p>
            <p>
              Most of my strongest experience has come from building real products rather than simply following
              tutorials. Projects like <span className='font-medium text-ink'>FaithScore</span> and{' '}
              <span className='font-medium text-ink'>FaithLibrary</span> have challenged me to work beyond conventional
              UI development and solve problems involving complex application state, structured data, search,
              authentication, file handling, performance, testing, and deployment.
            </p>

            <Heading>How I approach development</Heading>
            <p>
              I care about more than making an interface look good. I try to understand why a feature exists, how users
              will interact with it, and how the implementation can remain maintainable as the product grows.
            </p>
            <p>
              When working on a problem, I usually break it into smaller systems, understand the data and user flow,
              build reusable components, test the important paths, and iterate based on what works and what doesn’t.
              I’m also comfortable working independently, but I value code review and collaboration because good
              engineering is rarely about finding the first solution. It’s about finding one that others can
              understand, improve, and maintain.
            </p>

            <Heading>What I build</Heading>
            <p>
              My work spans different types of applications, including interactive web apps, SaaS platforms, admin
              dashboards, digital content platforms, music and notation software, e-commerce interfaces, and
              AI-assisted products.
            </p>
            <p>
              One area I particularly enjoy is building complex interfaces that still feel simple to use. FaithScore is
              a good example of this. Underneath its interface are systems for musical notation, pitch and rhythm
              handling, state management, playback, and conversion between different musical representations.
            </p>
            <p>
              Music is a specialization of mine.{' '}
              <Link to='/music' className='text-link font-medium text-ink'>See my music and notation work</Link>.
            </p>

            <Heading>Beyond the code</Heading>
            <p>
              My background isn’t the traditional computer science route. I studied Microbiology at Nnamdi Azikiwe
              University, but my interest in software development led me to build my skills through internships,
              self-directed learning, and hands-on project work.
            </p>
            <p>
              That background shaped how I learn. I’m comfortable starting with something I don’t fully understand,
              breaking it down, researching, experimenting, and gradually turning it into something I can build with
              confidence.
            </p>
            <p>
              I’m currently focused on growing as a frontend engineer, working with strong engineering teams, and
              building products that solve real problems.
            </p>

            <Heading>My current toolkit</Heading>
            <ul className='flex flex-col gap-2 text-lg md:text-xl'>
              <li><span className='font-medium text-ink'>Frontend:</span> React · Next.js · TypeScript · JavaScript · Tailwind CSS · HTML · CSS</li>
              <li><span className='font-medium text-ink'>State &amp; Data:</span> Zustand · React Query · REST APIs · Supabase · PostgreSQL</li>
              <li><span className='font-medium text-ink'>Engineering &amp; Tools:</span> Git · GitHub · GitHub Actions · Vite · Vitest · Postman · Vercel · Sentry</li>
              <li><span className='font-medium text-ink'>Specialized:</span> VexFlow · Music notation · PDF workflows · Authentication · Search · File storage</li>
            </ul>
            <p>
              I’m looking for opportunities where I can contribute to real products, learn from experienced engineers,
              and take ownership of meaningful frontend work. I’m especially interested in teams that value good
              engineering, thoughtful interfaces, continuous learning, and building products that people genuinely
              find useful.
            </p>
          </div>

          <div className='mt-10'>
            <Button href={SITE.resume} download>Download resume</Button>
          </div>
        </div>

        <div className='relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[2rem] bg-[#E7B53B] lg:sticky lg:top-28 lg:max-w-none'>
          <img
            src={secHeroImg}
            alt='Dikeh Daniel'
            width={803}
            height={958}
            className='absolute -bottom-[4%] left-1/2 w-[104%] max-w-none -translate-x-1/2'
          />
        </div>
      </div>

      <div className='mt-section'>
        <Experience plain />
      </div>

      <div className='mt-section'>
        <SectionHeading title='Skills' subtitle='The tools and practices I use to ship.' />
        <Skill />
      </div>
    </PageLayout>
  )
}