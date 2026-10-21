// src/components/Nav.tsx
import { useState, useEffect, useRef } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import logoImg from '../assets/logoimg.png'
import { SITE } from '../data/site'
import ThemeToggle from './ThemeToggle'
import Effects from './effects/Effects'
import RollText from './common/RollText'

const NAV_LINKS = [
  { label: 'Projects', path: '/projects' },
  { label: 'About', path: '/about' },
]

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const lastY = useRef(0)
  const hiddenRef = useRef(false)
  const progressRef = useRef<HTMLDivElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 8)

      // Tuck the header away while reading down, bring it back on any scroll up
      const delta = y - lastY.current
      if (Math.abs(delta) > 6) {
        const shouldHide = delta > 0 && y > 140
        if (shouldHide !== hiddenRef.current) {
          hiddenRef.current = shouldHide
          setHidden(shouldHide)
        }
        lastY.current = y
      }
      if (y < 80 && hiddenRef.current) {
        hiddenRef.current = false
        setHidden(false)
      }
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const ratio = docHeight > 0 ? Math.min(window.scrollY / docHeight, 1) : 0
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${ratio})`
    }
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

  const isActive = (path: string) => (path === '/' ? pathname === '/' : pathname.startsWith(path))

  return (
    <>
      <Effects />

      <a href='#main-content' className='skip-link'>Skip to content</a>

      <div
        ref={progressRef}
        className='fixed inset-x-0 top-0 z-[60] h-[3px] origin-left scale-x-0 bg-accent'
        aria-hidden='true'
      />

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[transform,background-color,border-color] duration-300 focus-within:translate-y-0 ${
          hidden && !isMenuOpen ? '-translate-y-full' : 'translate-y-0'
        } ${
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

          <div className='flex items-center gap-1 md:gap-3'>
            <ul className='hidden items-center gap-8 pr-4 md:flex'>
              {NAV_LINKS.map(({ label, path }) => (
                <li key={path}>
                  <Link
                    to={path}
                    aria-current={isActive(path) ? 'page' : undefined}
                    className={`group inline-block bg-[linear-gradient(currentColor,currentColor)] bg-[position:0_100%] bg-no-repeat pb-1 text-[0.95rem] font-medium transition-[background-size,color] duration-300 hover:text-accent ${
                      isActive(path) ? 'bg-[length:100%_2px] text-accent' : 'bg-[length:0_2px] text-ink hover:bg-[length:100%_2px]'
                    }`}
                  >
                    <RollText>{label}</RollText>
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={SITE.resume}
                  download
                  className='group inline-block pb-1 text-[0.95rem] font-medium text-ink transition-colors hover:text-accent'
                >
                  <RollText>Resume</RollText>
                </a>
              </li>
            </ul>

            <ThemeToggle />

            <Link
              to='/contact'
              className='ml-1 hidden rounded-full bg-ink px-5 py-2.5 text-[0.95rem] font-semibold text-paper transition-colors hover:bg-accent md:inline-block'
            >
              Get in touch
            </Link>

            <button
              onClick={() => setIsMenuOpen((v) => !v)}
              className='-mr-2 p-2 md:hidden'
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
              aria-controls='mobile-menu'
            >
              {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
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
                    isActive(path) ? 'text-accent' : 'text-ink'
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