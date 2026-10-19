// src/components/Contact.tsx
import { Github, Linkedin } from 'lucide-react'
import { SITE } from '../data/site'
import { PALETTE } from '../data/palette'
import Button from './common/Button'

export default function Contact() {
  return (
    <section id='contact' className='wrap scroll-mt-20'>
      <div className='on-panel relative overflow-hidden rounded-[2rem] bg-panel px-6 py-14 text-on-panel md:rounded-[2.5rem] md:px-14 md:py-20'>
        <div aria-hidden='true' className='absolute inset-x-0 top-0 flex h-2'>
          {PALETTE.map((p) => (
            <span key={p.name} className='flex-1' style={{ backgroundColor: p.color }} />
          ))}
        </div>

        <h2 className='max-w-4xl text-4xl font-bold leading-[1] md:text-7xl'>Have a project in mind? Let’s talk.</h2>
        <p className='mt-6 max-w-xl font-serif text-xl leading-relaxed text-on-panel/75'>
          I’m actively seeking freelance opportunities and full-time frontend roles. Whether you have a specific
          project, a question, or just want to say hi, my inbox is always open.
        </p>

        <a
          href={`mailto:${SITE.email}`}
          className='mt-10 inline-block break-all font-display text-2xl font-semibold underline decoration-on-panel/40 decoration-2 underline-offset-8 transition-colors hover:decoration-on-panel md:text-4xl'
        >
          {SITE.email}
        </a>

        <div className='mt-10 flex flex-wrap items-center gap-3'>
          <Button to='/contact' variant='light'>Send a message</Button>
          <a
            href={SITE.linkedin}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-2 rounded-full px-5 py-3 text-[0.95rem] font-semibold ring-1 ring-inset ring-on-panel/30 transition-colors hover:ring-on-panel'
          >
            <Linkedin size={17} aria-hidden='true' /> LinkedIn
          </a>
          <a
            href={SITE.github}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-2 rounded-full px-5 py-3 text-[0.95rem] font-semibold ring-1 ring-inset ring-on-panel/30 transition-colors hover:ring-on-panel'
          >
            <Github size={17} aria-hidden='true' /> GitHub
          </a>
        </div>
      </div>
    </section>
  )
}