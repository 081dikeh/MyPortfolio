// src/components/Nav.tsx
import { useState, useEffect, useRef } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import logoImg from '../assets/logoimg.png'
import { SITE } from '../data/site'

const NAV_LINKS = [
  { label: 'Projects', path: '/projects' },
  { label: 'About', path: '/about' },
]

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setIsMenuOpen(false) }, [pathname])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isMenuOpen])

  useEffect(() => {
    if (!isMenuOpen) return
    menuRef.current?.querySelector<HTMLElement>('a')?.focus()
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setIsMenuOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isMenuOpen])

  const isActive = (path: string) => pathname.startsWith(path)

  return (
    <>
      <a href='#main-content' className='skip-link'>Skip to content</a>

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          scrolled || isMenuOpen
            ? 'border-b border-line bg-paper/85 backdrop-blur-md'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <nav className='wrap flex h-[72px] items-center justify-between' aria-label='Main navigation'>
          <Link to='/' className='flex items-center gap-3' aria-label={`${SITE.name} — home`}>
            <img src={logoImg} className='h-8 w-auto' alt='' width={30} height={32} />
            <span className='font-display text-lg font-semibold tracking-tight'>{SITE.name}</span>
          </Link>

          <div className='hidden items-center gap-8 md:flex'>
            <ul className='flex items-center gap-8'>
              {NAV_LINKS.map(({ label, path }) => (
                <li key={path}>
                  <Link
                    to={path}
                    aria-current={isActive(path) ? 'page' : undefined}
                    className={`text-[0.95rem] font-medium underline-offset-[10px] decoration-2 transition-colors hover:text-accent ${
                      isActive(path) ? 'text-accent underline' : 'text-ink'
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={SITE.resume}
                  download
                  className='text-[0.95rem] font-medium text-ink transition-colors hover:text-accent'
                >
                  Resume
                </a>
              </li>
            </ul>
            <Link
              to='/contact'
              className='rounded-full bg-ink px-5 py-2.5 text-[0.95rem] font-semibold text-paper transition-colors hover:bg-accent'
            >
              Get in touch
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen((v) => !v)}
            className='-mr-2 p-2 md:hidden'
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls='mobile-menu'
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </nav>
      </header>

      <div
        id='mobile-menu'
        ref={menuRef}
        className={`fixed inset-0 z-40 bg-paper pt-[72px] transition-opacity duration-200 md:hidden ${
          isMenuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        aria-hidden={!isMenuOpen}
        {...(!isMenuOpen ? { inert: true } : {})}
      >
        <div className='wrap flex h-full flex-col pb-10 pt-8'>
          <ul className='flex flex-col'>
            {[{ label: 'Home', path: '/' }, ...NAV_LINKS, { label: 'Contact', path: '/contact' }].map(({ label, path }) => (
              <li key={path} className='border-b border-line'>
                <Link
                  to={path}
                  className={`block py-5 font-display text-4xl font-bold tracking-tight ${
                    (path === '/' ? pathname === '/' : isActive(path)) ? 'text-accent' : 'text-ink'
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <a href={SITE.resume} download className='block py-5 font-display text-4xl font-bold tracking-tight'>
                Resume
              </a>
            </li>
          </ul>
          <p className='mt-auto flex items-center gap-2.5 text-muted'>
            <span className='status-dot' aria-hidden='true' />
            Open to freelance work and full-time roles
          </p>
        </div>
      </div>
    </>
  )
}