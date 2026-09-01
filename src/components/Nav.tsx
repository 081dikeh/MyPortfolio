import { useState, useEffect, useRef } from 'react'
import { Menu, X } from 'lucide-react'
import logoImg from '../assets/logoimg.png'
import { Link, useLocation } from 'react-router-dom'

const NAV_LINKS = [
  { label: 'Home',     path: '/'        },
  { label: 'Projects', path: '/projects' },
  { label: 'About',    path: '/about'    },
  { label: 'Contact',  path: '/contact'  },
]

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const menuRef = useRef<HTMLDivElement>(null)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setIsMenuOpen(false) }, [pathname])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isMenuOpen])

  // Focus trap for mobile menu
  useEffect(() => {
    if (!isMenuOpen || !menuRef.current) return
    const focusable = menuRef.current.querySelectorAll<HTMLElement>('a, button')
    focusable[0]?.focus()
  }, [isMenuOpen])

  const isActive = (path: string) =>
    path === '/' ? pathname === '/' : pathname.startsWith(path)

  return (
    <>
      <a href='#main-content' className='skip-link'>Skip to content</a>

      <div
        className='scroll-progress'
        style={{ width: `${scrollProgress}%` }}
        aria-hidden='true'
      />

      <nav
        className={`py-3.5 px-4 md:px-16 lg:px-16 xl:px-32 2xl:px-44 fixed top-0 left-0 right-0 z-50 ${scrolled ? 'nav-scrolled' : 'nav-default'}`}
        aria-label='Main navigation'
      >
        <div className='text-white flex justify-between items-center'>
          <Link
            to='/'
            className='flex items-center gap-2.5 font-mono font-bold text-sm hover:text-accent transition-colors duration-200'
            aria-label='Dikeh Daniel — Home'
          >
            <img src={logoImg} className='w-7 h-7' alt='' />
            <span>Dikeh<span className='text-accent'>.</span></span>
          </Link>

          {/* Desktop */}
          <div className='hidden md:flex items-center gap-8'>
            <span className='flex items-center gap-2 text-xs text-muted'>
              <span className='otw-dot' aria-hidden='true' />
              Open to work
            </span>

            <ul className='flex gap-7' role='list'>
              {NAV_LINKS.map(({ label, path }) => (
                <li key={path}>
                  <Link
                    to={path}
                    className={`nav-link ${isActive(path) ? 'active text-accent' : 'text-white/90 hover:text-accent'} transition-colors duration-200`}
                  >
                    <span className='text-accent/70 mr-0.5'>#</span>{label.toLowerCase()}
                  </Link>
                </li>
              ))}
            </ul>

            <a
              href='/Dikeh_Daniel_Frontend_Developer_Resume (2).pdf'
              download
              className='text-xs font-medium px-4 py-2 ring-1 ring-accent text-white hover:bg-accent transition-all duration-300 btn-lift whitespace-nowrap'
            >
              Resume
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMenuOpen(v => !v)}
            className='md:hidden text-white hover:text-accent transition-colors p-2 -mr-2'
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls='mobile-menu'
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div
          className='fixed inset-0 z-40 md:hidden menu-backdrop'
          onClick={() => setIsMenuOpen(false)}
          aria-hidden='true'
        />
      )}
      <div
        id='mobile-menu'
        ref={menuRef}
        className={`fixed inset-y-0 right-0 w-[min(320px,85vw)] bg-canvas border-l border-border z-50 md:hidden transition-transform duration-300 ease-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        aria-hidden={!isMenuOpen}
      >
        <div className='flex flex-col h-full pt-20 px-8 pb-8'>
          <ul className='flex flex-col gap-6' role='list'>
            {NAV_LINKS.map(({ label, path }) => (
              <li key={path}>
                <Link
                  to={path}
                  className={`font-mono text-2xl transition-colors duration-200 ${isActive(path) ? 'text-accent' : 'text-white hover:text-accent'}`}
                >
                  <span className='text-accent/70'>#</span>{label.toLowerCase()}
                </Link>
              </li>
            ))}
            <li className='pt-4 border-t border-border'>
              <a
                href='/Daniel-Dikeh-CV.pdf'
                download
                className='font-mono text-lg text-muted hover:text-accent transition-colors duration-200'
              >
                <span className='text-accent/70'>#</span>resume
              </a>
            </li>
          </ul>
          <div className='mt-auto'>
            <span className='flex items-center gap-2 text-sm text-muted'>
              <span className='otw-dot' aria-hidden='true' />
              Available for work
            </span>
          </div>
        </div>
      </div>
    </>
  )
}
