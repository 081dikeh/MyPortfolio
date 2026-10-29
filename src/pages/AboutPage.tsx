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
import ScrollWords from '../components/common/ScrollWords'
import Button from '../components/common/Button'
import { usePageMetadata } from '../hooks/usePageMetadata'

function Heading({ children }: { children: React.ReactNode }) {
  return <h2 className='mt-6 font-display text-2xl font-bold text-ink md:text-3xl'>{children}</h2>
}

export default function AboutPage() {
  usePageMetadata({
    title: 'About Dikeh Daniel | Frontend Engineer',
    description: 'Learn about Dikeh Daniel, a frontend engineer building useful web applications with React, Next.js, and TypeScript.',
  })

  const technologyCount = skillGroups.reduce((total, group) => total + group.skills.length, 0)

  return (
    <PageLayout className='pb-section pt-32 md:pt-40'>
      <div className='grid items-start gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20'>
        <div>
          <SectionHeading
            headingLevel='h1'
            title='About me'
            subtitle='Frontend Engineer · Available for full-time & freelance work'
          />

          <StatsBar
            stats={[
              { value: projects.length, label: 'Projects shipped' },
              { value: technologyCount, label: 'Technologies' },
              { value: '2', label: 'Team internships' },
            ]}
          />

          <div className='mt-10 flex max-w-[38rem] flex-col gap-5 font-serif text-lg leading-relaxed text-ink/80 md:text-xl'>
            <ScrollWords
              text='I build interfaces for complex workflows, from dashboards to music tools.'
              className='text-2xl leading-snug text-ink md:text-[1.7rem]'
            />
            <p>
              I’m <span className='font-medium text-ink'>Dikeh Daniel</span>, a frontend engineer working with React,
              Next.js, TypeScript, and Tailwind CSS. I’m especially interested in interfaces that make complex
              workflows easier to understand and use.
            </p>
            <p>
              I take ideas from interface design through implementation: connecting APIs, managing state, handling
              authentication, testing key flows, and preparing the app for release.
            </p>
            <p>
              My projects have taken me beyond static interfaces. In{' '}
              <span className='font-medium text-ink'>FaithScore</span>, I work with structured musical data and
              notation; in <span className='font-medium text-ink'>FaithLibrary</span>, I built search, authentication,
              and score-file workflows.
            </p>

            <Heading>How I approach development</Heading>
            <p>
              I start by understanding the user flow and the data a feature needs to handle. Then I break the work into
              smaller pieces, build reusable components, and test the important paths.
            </p>
            <p>
              I’m comfortable working independently and have also contributed in code-reviewed team environments.
              I value clear communication and maintainable solutions that teammates can understand and build on.
            </p>

            <Heading>What I build</Heading>
            <p>
              I’ve built interactive web apps, dashboards, content platforms, music and notation software, e-commerce
              interfaces, and AI-assisted products.
            </p>
            <p>
              Music software is a particular interest. FaithScore brings notation, playback, and conversion between
              staff notation and tonic sol-fa into one editing workflow.
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
              That change of direction taught me to get comfortable with unfamiliar problems: break them down,
              research, experiment, and build understanding through practice.
            </p>
            <p>
              I’m looking to contribute to product teams where I can take ownership of frontend work, learn from
              experienced engineers, and help build useful products.
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