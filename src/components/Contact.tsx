import { Mail, Linkedin, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useInView } from '../hooks/useInView'
import SectionHeading from './common/SectionHeading'
import FadeIn from './common/FadeIn'
import Button from './common/Button'

const CONTACT_LINKS = [
  {
    href: 'mailto:dikehdaniel2020@gmail.com',
    label: 'dikehdaniel2020@gmail.com',
    icon: Mail,
  },
  {
    href: 'https://www.linkedin.com/in/daniel-dikeh',
    label: 'Daniel Dikeh',
    icon: Linkedin,
    external: true,
  },
]

export default function Contact() {
  const { ref: sectionRef, inView } = useInView({ threshold: 0.1 })

  return (
    <section id='contact' ref={sectionRef} className='py-section scroll-mt-24'>
      <SectionHeading
        title='Contact'
        show={inView}
        subtitle="Have a project in mind? Let's talk."
        lineWidth='md:w-64 lg:w-96'
      />

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 items-start'>
        <FadeIn show={inView} direction='left'>
          <p className='text-muted leading-relaxed mb-6'>
            I'm actively seeking freelance opportunities and full-time frontend roles.
            Whether you have a specific project, a question, or just want to say hi —
            my inbox is always open.
          </p>
          <Button to='/contact'>
            Send a message <ArrowRight size={14} />
          </Button>
        </FadeIn>

        <FadeIn show={inView} direction='right' delay={120}>
          <div className='ring-1 ring-border p-6 bg-surface/30 hover:ring-accent/40 transition-colors duration-300'>
            <h3 className='text-white font-mono text-sm font-semibold mb-5'>Reach me directly</h3>
            <div className='flex flex-col gap-4'>
              {CONTACT_LINKS.map(({ href, label, icon: Icon, external }) => (
                <a
                  key={href}
                  href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  className='flex items-center gap-3 text-muted text-sm hover:text-accent transition-colors duration-200 group'
                >
                  <Icon size={16} className='text-accent/70 group-hover:text-accent transition-colors' />
                  {label}
                </a>
              ))}
              <a
                href='https://twitter.com/Danishadow081'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-3 text-muted text-sm hover:text-accent transition-colors duration-200 group'
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className='text-accent/70 group-hover:text-accent transition-colors' aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                @Danishadow081
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
