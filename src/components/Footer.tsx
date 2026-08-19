import { Github, Linkedin } from 'lucide-react'
import logoImg from '../assets/logoimg.png'
import { Link } from 'react-router-dom'

const SOCIAL = [
  { href: 'https://github.com/081dikeh', label: 'GitHub', icon: Github },
  { href: 'https://www.linkedin.com/in/daniel-dikeh', label: 'LinkedIn', icon: Linkedin },
  { href: 'https://twitter.com/Danishadow081', label: 'X (Twitter)', icon: null },
]

export default function Footer() {
  return (
    <footer className='border-t border-border mt-section'>
      <div className='mx-4 md:mx-16 lg:mx-16 xl:mx-32 2xl:mx-44 py-8'>
        <div className='flex flex-col sm:flex-row items-center justify-between gap-6'>
          <Link
            to='/'
            className='flex items-center gap-2.5 text-white hover:text-accent transition-colors duration-200'
            aria-label='Home'
          >
            <img src={logoImg} className='w-6 h-6' alt='' />
            <span className='font-mono font-bold text-sm'>Dikeh<span className='text-accent'>.</span></span>
          </Link>

          <nav className='flex items-center gap-6 text-xs text-muted' aria-label='Footer navigation'>
            <Link to='/projects' className='hover:text-accent transition-colors'>Projects</Link>
            <Link to='/about' className='hover:text-accent transition-colors'>About</Link>
            <Link to='/contact' className='hover:text-accent transition-colors'>Contact</Link>
          </nav>

          <div className='flex items-center gap-4'>
            {SOCIAL.map(({ href, label, icon: Icon }) => (
              <a
                key={href}
                href={href}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={label}
                className='text-muted hover:text-accent transition-all duration-200 hover:-translate-y-0.5'
              >
                {Icon ? <Icon size={17} /> : (
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                )}
              </a>
            ))}
          </div>
        </div>

        <div className='mt-6 pt-6 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted/70'>
          <p>© {new Date().getFullYear()} Dikeh Daniel. All rights reserved.</p>
          <p className='font-mono'>Built with React · TypeScript · Tailwind</p>
        </div>
      </div>
    </footer>
  )
}
