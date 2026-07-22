import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import logoImg from '../assets/logoimg.png'
import { Link, useLocation } from 'react-router-dom'

const NAV_LINKS = [
  { label: 'home',     path: '/'        },
  { label: 'projects', path: '/projects' },
  { label: 'aboutme',  path: '/aboutme'  },
  { label: 'contact',  path: '/contact'  },
]

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled]     = useState(false)
  const { pathname } = useLocation()

  // Blur nav on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on route change
  useEffect(() => { setIsMenuOpen(false) }, [pathname])

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isMenuOpen])

  const isActive = (path: string) =>
    path === '/' ? pathname === '/' : pathname.startsWith(path)

  return (
    <nav className={`py-4 font-fira px-4 md:px-16 lg:px-16 xl:px-32 2xl:px-44 fixed top-0 left-0 right-0 z-50 ${scrolled ? 'nav-scrolled' : 'nav-default'}`}>
      <div className='text-white flex justify-between items-center'>

        {/* Logo */}
        <Link to='/' className='flex items-center gap-2 font-bold text-base hover:text-brand-700 transition-colors duration-200'>
          <img src={logoImg} className='w-6' alt='logo' />
          <span>DaniD</span>
        </Link>

        {/* Desktop links */}
        <div className='hidden md:flex items-center gap-6'>
          {/* Open to work indicator */}
          <span className='flex items-center gap-2 text-xs text-brand-500'>
            <span className='otw-dot' />
            Open to work
          </span>

          <ul className='flex gap-6 lowercase'>
            {NAV_LINKS.map(({ label, path }) => (
              <li key={label}>
                <Link
                  to={path}
                  className={`nav-link text-sm ${isActive(path) ? 'active' : 'text-white'} hover:text-brand-700 transition-colors duration-200`}
                >
                  <span className='text-brand-700 font-bold'>#</span>{label}
                </Link>
              </li>
            ))}
          </ul>

          <a
            href='/Daniel-Dikeh-CV.pdf'
            download
            className='text-sm px-4 py-1.5 ring-1 ring-brand-700 text-white hover:bg-brand-700 transition-colors duration-300 btn-lift whitespace-nowrap'
          >
            Download CV
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsMenuOpen(v => !v)}
          className='md:hidden text-white hover:text-brand-700 transition-colors p-1'
          aria-label='Toggle navigation'
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile overlay */}
      <div className={`fixed inset-0 top-[57px] bg-[#282C33]/95 backdrop-blur-md z-40 md:hidden transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <ul className='flex flex-col gap-8 p-8 mt-4 lowercase'>
          {NAV_LINKS.map(({ label, path }) => (
            <li key={label}>
              <Link
                to={path}
                className={`text-3xl font-fira transition-colors duration-200 ${isActive(path) ? 'text-brand-700' : 'text-white hover:text-brand-700'}`}
              >
                <span className='text-brand-700 font-bold'>#</span>{label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href='/Daniel-Dikeh-CV.pdf'
              download
              className='text-2xl text-brand-500 hover:text-brand-700 transition-colors duration-200'
            >
              <span className='text-brand-700 font-bold'>#</span>download-cv
            </a>
          </li>
        </ul>
        <div className='px-8'>
          <span className='flex items-center gap-2 text-sm text-brand-500'>
            <span className='otw-dot' />
            Currently available for work
          </span>
        </div>
      </div>
    </nav>
  )
}
