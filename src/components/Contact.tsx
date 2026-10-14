// src/components/Contact.tsx
import { Github, Linkedin } from 'lucide-react'
import { SITE } from '../data/site'
import { TONES } from '../data/tones'
import Button from './common/Button'

export default function Contact() {
  return (
    <section id='contact' className='wrap scroll-mt-20'>
      <div className='on-dark relative overflow-hidden rounded-[2rem] bg-ink px-6 py-14 text-paper md:rounded-[2.5rem] md:px-14 md:py-20'>
        <div aria-hidden='true' className='absolute inset-x-0 top-0 flex h-2'>
          {TONES.map((t, i) => (
            <span key={i} className='flex-1' style={{ backgroundColor: t.color }} />
          ))}
        </div>

        <h2 className='max-w-4xl text-4xl font-bold leading-[1] md:text-7xl'>
          Have a project or a role in mind?
        </h2>
        <p className='mt-6 max-w-xl font-serif text-xl leading-relaxed text-paper/75'>
          I’m open to freelance work and full-time frontend roles. Send a message and I’ll reply within 24 hours.
        </p>

        <a
          href={`mailto:${SITE.email}`}
          className='mt-10 inline-block break-all font-display text-2xl font-semibold underline decoration-paper/40 decoration-2 underline-offset-8 transition-colors hover:decoration-paper md:text-4xl'
        >
          {SITE.email}
        </a>

        <div className='mt-10 flex flex-wrap items-center gap-3'>
          <Button to='/contact' variant='light'>Send a message</Button>
          <a
            href={SITE.linkedin}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-2 rounded-full px-5 py-3 text-[0.95rem] font-semibold ring-1 ring-inset ring-paper/30 transition-colors hover:ring-paper'
          >
            <Linkedin size={17} aria-hidden='true' /> LinkedIn
          </a>
          <a
            href={SITE.github}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-2 rounded-full px-5 py-3 text-[0.95rem] font-semibold ring-1 ring-inset ring-paper/30 transition-colors hover:ring-paper'
          >
            <Github size={17} aria-hidden='true' /> GitHub
          </a>
        </div>
      </div>
    </section>
  )
}