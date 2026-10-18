// src/components/Footer.tsx
import { Github, Linkedin } from 'lucide-react'
import { Link } from 'react-router-dom'
import { SITE } from '../data/site'

const SOCIAL = [
  { href: SITE.github, label: 'GitHub', icon: Github },
  { href: SITE.linkedin, label: 'LinkedIn', icon: Linkedin },
  { href: SITE.twitter, label: 'X (Twitter)', icon: null },
]

export default function Footer() {
  return (
    <footer className='mt-section border-t border-line'>
      <div className='wrap flex flex-col gap-8 py-10 md:flex-row md:items-center md:justify-between'>
        <p className='flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted'>
          <span>© {new Date().getFullYear()} {SITE.name}</span>
          <span>{SITE.location}</span>
        </p>

        <nav className='flex flex-wrap items-center gap-x-7 gap-y-2 text-sm font-medium' aria-label='Footer navigation'>
          <Link to='/projects' className='transition-colors hover:text-accent'>Projects</Link>
          <Link to='/about' className='transition-colors hover:text-accent'>About</Link>
          <Link to='/music' className='transition-colors hover:text-accent'>Music &amp; notation</Link>
          <Link to='/contact' className='transition-colors hover:text-accent'>Contact</Link>
        </nav>

        <div className='flex items-center gap-5'>
          {SOCIAL.map(({ href, label, icon: Icon }) => (
            <a
              key={href}
              href={href}
              target='_blank'
              rel='noopener noreferrer'
              aria-label={label}
              className='text-ink/70 transition-colors hover:text-accent'
            >
              {Icon ? (
                <Icon size={20} />
              ) : (
                <svg width='19' height='19' viewBox='0 0 24 24' fill='currentColor' aria-hidden='true'>
                  <path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' />
                </svg>
              )}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}