// src/components/MusicTeaser.tsx
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import Button from './common/Button'

const WORK = [
  {
    slug: 'faithscore',
    title: 'FaithScore',
    description: 'A notation editor for staff notation and tonic sol-fa, with playback.',
  },
  {
    slug: 'faithlibrary',
    title: 'FaithLibrary',
    description: 'A searchable music library for choirs, with uploads and PDF viewing.',
  },
  {
    slug: 'faithbeat',
    title: 'Faithbeat',
    description: 'AI-assisted hymn writing in English, Igbo, Yoruba, and Hausa.',
  },
]

export default function MusicTeaser() {
  return (
    <section id='music' className='wrap scroll-mt-20 py-section' aria-labelledby='music-teaser-title'>
      <div className='relative overflow-hidden rounded-[2rem] bg-[#3A58A4] px-6 py-12 text-white md:rounded-[2.5rem] md:px-14 md:py-16'>
        {/* faint ring in the corner, clear of the text */}
        <div
          aria-hidden='true'
          className='pointer-events-none absolute -bottom-28 -right-20 h-80 w-80 rounded-full border-[36px] border-white/[0.07] md:-bottom-32 md:-right-16 md:h-96 md:w-96'
        />

        <div className='relative grid items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16'>
          <div>
            <h2 id='music-teaser-title' className='text-4xl font-bold leading-[1.02] md:text-6xl'>
              My specialty: software for musicians and choirs.
            </h2>
            <p className='mt-6 max-w-[30rem] font-serif text-xl leading-relaxed text-white/80'>
              I build all kinds of frontends. Music is the niche where I’ve gone deepest: notation editors, choir
              libraries, and tools for worship teams.
            </p>
            <div className='mt-8'>
              <Button to='/music' variant='light' arrow>Explore music &amp; notation</Button>
            </div>
          </div>

          <ul className='flex flex-col gap-3'>
            {WORK.map(({ slug, title, description }) => (
              <li key={slug}>
                <Link
                  to={`/projects/${slug}`}
                  className='group flex items-start justify-between gap-4 rounded-2xl bg-white/10 p-5 transition-colors duration-200 hover:bg-white/[0.17] md:p-6'
                >
                  <span>
                    <span className='block font-display text-2xl font-bold leading-tight'>{title}</span>
                    <span className='mt-1.5 block font-serif text-lg leading-snug text-white/75'>{description}</span>
                  </span>
                  <ArrowUpRight
                    size={22}
                    aria-hidden='true'
                    className='mt-1 shrink-0 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5'
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}