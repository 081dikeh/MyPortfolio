import secHeroImg from '../assets/secHeroImg.png'
import Skill from '../components/Skill'
import { useInView } from '../hooks/useInView'
import { useCounter } from '../hooks/useCounter'
import PageLayout from '../components/common/PageLayout'
import SectionHeading from '../components/common/SectionHeading'
import StatsBar from '../components/common/StatsBar'
import FadeIn from '../components/common/FadeIn'
import Button from '../components/common/Button'
import { projects } from '../data/projects'
import { skillGroups } from '../data/skills'

export default function AboutPage() {
  const { ref: sectionRef, inView } = useInView({ threshold: 0.05 })
  const { ref: imgRef, inView: imgVisible } = useInView({ threshold: 0.08 })
  const { ref: skillRef, inView: skillVisible } = useInView({ threshold: 0.04 })

  const projectCount = useCounter(projects.length, 1400, inView)
  const technologyCount = useCounter(
    skillGroups.reduce((total, group) => total + group.skills.length, 0),
    1400,
    inView,
  )

  return (
    <PageLayout className='pt-24 pb-section'>
      <section ref={sectionRef}>
        <SectionHeading
          title='About Me'
          prefix='/'
          subtitle='Frontend Engineer · Lagos, Nigeria · Available for full-time & freelance work'
          show={inView}
          lineWidth='md:w-48'
        />

        <div className='flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-16 mb-20'>
          <div className='w-full lg:w-1/2 flex flex-col gap-6'>
            <StatsBar
              show={inView}
              stats={[
                { value: `${projectCount}`, label: 'Projects shipped' },
                { value: `${technologyCount}`, label: 'Technologies' },
                { value: '100%', label: 'Solo-built' },
              ]}
            />

            <FadeIn show={inView} direction='left' delay={150}>
              <div className='flex flex-col gap-4 text-muted text-sm leading-relaxed'>
                <p className='text-white font-medium text-base'>I’m a Frontend Engineer who likes building things that are actually useful.</p>

                <p>
                  I’m <span className='text-white'>Dikeh Daniel</span>, a frontend engineer focused on
                  building modern, interactive web applications with React, Next.js, TypeScript,
                  JavaScript, and Tailwind CSS.
                </p>

                <p>
                  I enjoy taking an idea from a blank screen and turning it into a working product —
                  from designing the interface and structuring the application to connecting APIs,
                  managing state, handling authentication, testing features, and getting the app live.
                </p>

                <p>
                  Most of my strongest experience has come from building real products rather than simply
                  following tutorials. Projects like <span className='text-white'>FaithScore</span> and
                  <span className='text-white'> FaithLibrary</span> have challenged me to work beyond
                  conventional UI development and solve problems involving complex application state,
                  structured data, search, authentication, file handling, performance, testing, and
                  deployment.
                </p>

                <div className='pt-2'>
                  <p className='text-white font-medium text-base mb-2'>How I approach development</p>
                  <p>
                    I care about more than making an interface look good. I try to understand why a
                    feature exists, how users will interact with it, and how the implementation can
                    remain maintainable as the product grows.
                  </p>
                </div>

                <p>
                  When working on a problem, I usually break it into smaller systems, understand the
                  data and user flow, build reusable components, test the important paths, and iterate
                  based on what works and what doesn't. I’m also comfortable working independently, but
                  I value code review and collaboration because good engineering is rarely about finding
                  the first solution — it’s about finding one that others can understand, improve, and
                  maintain.
                </p>

                <div className='pt-2'>
                  <p className='text-white font-medium text-base mb-2'>What I build</p>
                  <p>
                    My work spans different types of applications, including interactive web apps, SaaS
                    platforms, admin dashboards, digital content platforms, music and notation software,
                    e-commerce interfaces, and AI-assisted products.
                  </p>
                </div>

                <p>
                  One area I particularly enjoy is building complex interfaces that still feel simple to
                  use. FaithScore is a good example of this — underneath its interface are systems for
                  musical notation, pitch and rhythm handling, state management, playback, and
                  conversion between different musical representations.
                </p>

                <div className='pt-2'>
                  <p className='text-white font-medium text-base mb-2'>Beyond the code</p>
                  <p>
                    My background isn’t the traditional computer science route. I studied Microbiology at
                    Nnamdi Azikiwe University, but my interest in software development led me to build my
                    skills through internships, self-directed learning, and hands-on project work.
                  </p>
                </div>

                <p>
                  That background shaped how I learn. I’m comfortable starting with something I don’t
                  fully understand, breaking it down, researching, experimenting, and gradually turning
                  it into something I can build with confidence.
                </p>

                <p>
                  I’m currently focused on growing as a frontend engineer, working with strong engineering
                  teams, and building products that solve real problems.
                </p>

                <div className='pt-2'>
                  <p className='text-white font-medium text-base mb-2'>My current toolkit</p>
                  <p>
                    <span className='text-white'>Frontend:</span> React · Next.js · TypeScript · JavaScript ·
                    Tailwind CSS · HTML · CSS
                  </p>
                  <p>
                    <span className='text-white'>State & Data:</span> Zustand · React Query · REST APIs ·
                    Supabase · PostgreSQL
                  </p>
                  <p>
                    <span className='text-white'>Engineering & Tools:</span> Git · GitHub · GitHub Actions ·
                    Vite · Vitest · Postman · Vercel · Sentry
                  </p>
                  <p>
                    <span className='text-white'>Specialized:</span> VexFlow · Music notation · PDF workflows ·
                    Authentication · Search · File storage
                  </p>
                </div>

                <p>
                  I’m looking for opportunities where I can contribute to real products, learn from
                  experienced engineers, and take ownership of meaningful frontend work. I’m especially
                  interested in teams that value good engineering, thoughtful interfaces, continuous
                  learning, and building products that people genuinely find useful.
                </p>
              </div>
            </FadeIn>

            <FadeIn show={inView} direction='left' delay={250}>
              <Button href='/Dikeh_Daniel_Frontend_Engineer_Resume.pdf' download>Download resume</Button>
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
