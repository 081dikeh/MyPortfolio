import { useEffect, useState } from 'react'
import dots from '../assets/Dots.png'
import heroback from '../assets/heroback.png'
import mainHeroImg from '../assets/mainHeroImg.png'
import { Link } from 'react-router-dom'
import { useTypewriter } from '../hooks/useTypewriter'

const ROLES = [
  'front-end developer',
  'React developer',
  'Next.js developer',
  'UI/UX builder',
]

export default function Hero() {
  const role = useTypewriter(ROLES, { speed: 80, deleteSpeed: 40, pause: 2000 })

  // Staggered mount — elements reveal one after another
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(t)
  }, [])

  const delay = (ms: number) => ({ animationDelay: `${ms}ms` })

  return (
    <section className='min-h-screen flex items-center justify-center pt-12 md:pt-20 overflow-hidden'>
      <div className='w-full'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center'>

          {/* ── Left: text ─────────────────────────────────────────────── */}
          <div className='order-2 md:order-1 font-fira'>

            {/* Badge */}
            <div
              className={`inline-flex items-center gap-2 text-xs text-brand-500 mb-5 border border-brand-400 px-3 py-1
                ${visible ? 'opacity-0 animate-fade-in-left' : 'opacity-0'}`}
              style={delay(0)}
            >
              <span className='otw-dot' />
              Available for work · Lagos, Nigeria
            </div>

            {/* Headline with typewriter */}
            <h1
              className={`text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold mb-4 text-white leading-tight
                ${visible ? 'opacity-0 animate-fade-in-left' : 'opacity-0'}`}
              style={delay(150)}
            >
              Dikeh Daniel is a{' '}
              <span className='text-brand-700 block mt-1 min-h-[1.2em]'>
                {role}
                <span className='typewriter-cursor' aria-hidden='true' />
              </span>
            </h1>

            <p
              className={`text-base md:text-lg mb-2 text-brand-500 leading-relaxed
                ${visible ? 'opacity-0 animate-fade-in-left' : 'opacity-0'}`}
              style={delay(300)}
            >
              I build fast, responsive web apps that solve real problems —
              using React, TypeScript, and Next.js.
            </p>

            <p
              className={`text-sm mb-8 text-brand-500
                ${visible ? 'opacity-0 animate-fade-in-left' : 'opacity-0'}`}
              style={delay(380)}
            >
              10 shipped projects · Open to freelance & full-time roles
            </p>

            <div
              className={`flex flex-wrap gap-3
                ${visible ? 'opacity-0 animate-fade-in-left' : 'opacity-0'}`}
              style={delay(460)}
            >
              <Link
                to='/contact'
                className='px-7 py-3 text-white ring-1 ring-brand-700 hover:bg-brand-700 transition-colors duration-300 btn-lift'
              >
                Contact Me
              </Link>
              <Link
                to='/projects'
                className='px-7 py-3 text-brand-500 ring-1 ring-brand-400 hover:ring-brand-700 hover:text-white transition-colors duration-300 btn-lift'
              >
                View Projects
              </Link>
              <a
                href='/Daniel-Dikeh-CV.pdf'
                download
                className='px-7 py-3 text-brand-500 ring-1 ring-brand-400 hover:ring-brand-700 hover:text-white transition-colors duration-300 btn-lift'
              >
                Download CV
              </a>
            </div>
          </div>

          {/* ── Right: image ───────────────────────────────────────────── */}
          <div
            className={`relative w-full max-w-sm mx-auto md:max-w-md lg:max-w-lg order-1 md:order-2
              ${visible ? 'opacity-0 animate-fade-in-right' : 'opacity-0'}`}
            style={delay(200)}
          >
            <div className='hero-glow' />
            <img src={heroback} alt='' className='absolute z-0 top-[5%] left-0 w-[30%] opacity-50 md:opacity-100' />
            <img
              src={mainHeroImg}
              alt='Daniel Dikeh'
              className='w-full z-10 relative animate-float'
            />
            <img src={dots} alt='' className='absolute z-20 right-0 bottom-[30%] w-[18%]' />

            {/* Status badge */}
            <div className='p-2 ring-1 ring-brand-400 mt-0.5 bg-[#282C33]/80 backdrop-blur-sm'>
              <p className='text-white font-fira text-sm flex items-center gap-2'>
                <span className='otw-dot' />
                Open to work · Recently shipped Faithbeat
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
