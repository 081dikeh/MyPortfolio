// src/pages/MusicPage.tsx
import { Link } from 'react-router-dom'
import musicPortrait from '../assets/music-portrait.webp'
import { projects } from '../data/projects'
import PageLayout from '../components/common/PageLayout'
import SectionHeading from '../components/common/SectionHeading'
import Button from '../components/common/Button'
import SolfaPlayground from '../components/music/SolfaPlayground'
import StaffDivider from '../components/music/StaffDivider'
import FeaturedProject from '../components/projects/FeaturedProject'
import ProjectCard from '../components/projects/ProjectCard'
import { usePageMetadata } from '../hooks/usePageMetadata'

const AREAS = [
  {
    title: 'Notation and playback',
    description:
      'Editors that treat music as structured data: staff notation and tonic sol-fa, pitch and rhythm handling, lyrics, multiple parts, playback, and print-ready output.',
    slug: 'faithscore',
    linkLabel: 'FaithScore',
  },
  {
    title: 'Music libraries for choirs',
    description:
      'Searchable, database-backed libraries with accounts, uploads, in-browser PDF viewing, bookmarks, and collections, so scores are easy to find and share.',
    slug: 'faithlibrary',
    linkLabel: 'FaithLibrary',
  },
  {
    title: 'AI-assisted hymn writing',
    description:
      'Tools that generate hymns in English, Igbo, Yoruba, and Hausa, with SATB arrangements, playable sheet music, and PDF export.',
    slug: 'faithbeat',
    linkLabel: 'Faithbeat',
  },
]

const TOOLS = ['VexFlow', 'Music notation', 'PDF workflows', 'Authentication', 'Search', 'File storage']

const MUSIC_SLUGS = ['faithscore', 'faithlibrary', 'faithbeat']

export default function MusicPage() {
  usePageMetadata({
    title: 'Music & Notation Products | Dikeh Daniel',
    description:
      'Dikeh Daniel builds web software for musicians and choirs, including a notation editor, a choir music library, and an AI hymn-writing platform.',
  })

  const musicProjects = MUSIC_SLUGS.map((slug) => projects.find((p) => p.slug === slug)).filter(
    (p): p is NonNullable<typeof p> => Boolean(p),
  )
  const [lead, ...rest] = musicProjects

  return (
    <PageLayout className='pb-section pt-32 md:pt-40'>
      <div className='grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16'>
        <div>
          <SectionHeading
            headingLevel='h1'
            title='Music & notation products'
            subtitle='A specialization alongside my general frontend work: web software for musicians, choirs, and worship teams.'
          />

          <p className='max-w-[38rem] font-serif text-xl leading-relaxed text-ink/80 md:text-2xl md:leading-snug'>
            Most of my work is general frontend engineering. Music is the area where I go deepest, building notation
            editors, choir libraries, and tools that help worship teams write, arrange, and share music.
          </p>
        </div>

        <div className='relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[2rem] bg-[#5B83BE] lg:max-w-none'>
          {/* five staff lines above the portrait */}
          <div aria-hidden='true' className='absolute inset-x-0 top-[13%]'>
            {[0, 1, 2, 3, 4].map((n) => (
              <div key={n} className='mb-[1.1rem] h-px bg-white/45' />
            ))}
          </div>
          <img
            src={musicPortrait}
            alt='Dikeh Daniel'
            width={770}
            height={627}
            className='absolute bottom-[-10] left-1/2 w-[100%] max-w-none -translate-x-1/2'
          />
        </div>
      </div>

      <section className='mt-section' aria-labelledby='music-play'>
        <h2 id='music-play' className='text-3xl font-bold md:text-4xl'>Play with tonic sol-fa</h2>
        <p className='mb-8 mt-3 max-w-xl font-serif text-lg text-muted md:text-xl'>
          Sol-fa names the notes of a scale: do, re, mi, and so on. Play a few, or let it play a tune.
        </p>
        <SolfaPlayground />
      </section>

      <section className='mt-section' aria-labelledby='music-areas'>
        <h2 id='music-areas' className='mb-8 text-3xl font-bold md:text-4xl'>What I build</h2>
        <ul className='border-t border-line'>
          {AREAS.map(({ title, description, slug, linkLabel }) => (
            <li key={slug} className='grid gap-3 border-b border-line py-8 md:grid-cols-[1fr_1.1fr] md:gap-12 md:py-10'>
              <h3 className='text-2xl font-bold leading-tight md:text-[1.85rem]'>{title}</h3>
              <div>
                <p className='font-serif text-lg leading-relaxed text-ink/75 md:text-xl'>{description}</p>
                <Link to={`/projects/${slug}`} className='text-link mt-4 inline-block font-medium'>
                  See {linkLabel}
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className='mt-section grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20' aria-labelledby='music-depth'>
        <h2 id='music-depth' className='text-3xl font-bold md:text-4xl'>Why it’s more than a UI</h2>
        <div>
          <p className='max-w-[38rem] font-serif text-lg leading-relaxed text-ink/80 md:text-xl'>
            I like building complex interfaces that still feel simple to use. Underneath these products are systems
            for musical notation, pitch and rhythm handling, state management, playback, and conversion between
            different musical representations, plus the usual product work of search, authentication, file handling,
            performance, testing, and deployment.
          </p>
          <ul className='mt-6 flex flex-wrap gap-1.5' aria-label='Specialized tools and skills'>
            {TOOLS.map((tool) => (
              <li key={tool} className='rounded-full bg-ink/[0.06] px-3 py-1 text-[0.8125rem] font-medium text-ink/75'>
                {tool}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className='mt-section' aria-labelledby='music-work'>
        <h2 id='music-work' className='mb-10 text-3xl font-bold md:text-4xl'>The work</h2>
        {lead && <FeaturedProject project={lead} position={0} />}
        {rest.length > 0 && (
          <div className='mt-20 grid gap-x-8 gap-y-16 md:grid-cols-2 md:gap-x-10'>
            {rest.map((project, i) => (
              <ProjectCard key={project.id} project={project} position={i + 1} className={i % 2 === 1 ? 'md:mt-16' : ''} />
            ))}
          </div>
        )}
      </section>

      <section className='mt-section'>
        <div className='mb-12'>
          <StaffDivider />
        </div>
        <h2 className='max-w-2xl text-3xl font-bold md:text-4xl'>Building something for musicians or a choir?</h2>
        <p className='mt-4 max-w-xl font-serif text-xl leading-relaxed text-ink/75'>
          Tell me what you have in mind and I’ll reply within 24 hours.
        </p>
        <div className='mt-7 flex flex-wrap gap-3'>
          <Button to='/contact'>Let’s talk</Button>
          <Button to='/projects' variant='secondary'>All projects</Button>
        </div>
      </section>
    </PageLayout>
  )
}