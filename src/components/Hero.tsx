import { useEffect, useState } from 'react'
import dots from '../assets/Dots.png'
import heroback from '../assets/heroback.png'
import mainHeroImg from '../assets/mainHeroImg.png'
import { Link } from 'react-router-dom'
import { useTypewriter } from '../hooks/useTypewriter'

const ROLES = ['front-end developer', 'React developer', 'NextJs developer', 'UI builder']

export default function Hero() {
  const role = useTypewriter(ROLES, { speed: 85, deleteSpeed: 40, pause: 2000 })

  // Staggered mount animation for text elements
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80)
    return () => clearTimeout(t)
  }, [])

  const delay = (ms: number) => ({ animationDelay: `${ms}ms` })

  return (
    <section className='min-h-screen flex items-center justify-center pt-12 md:pt-20 overflow-hidden'>
      <div className='container mx-auto max-w-7xl'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center'>

          {/* ── Text Content ─────────────────────────────── */}
          <div className='md:text-left order-2 md:order-1 font-fira'>

            {/* Greeting badge */}
            <div
              className={`inline-flex items-center gap-2 text-xs text-brand-500 mb-4 border border-brand-400 px-3 py-1
                ${visible ? 'opacity-0 animate-fade-in-left' : 'opacity-0'}`}
              style={delay(0)}
            >
              <span className='w-2 h-2 rounded-full bg-green-400 animate-pulse'></span>
              Available for work
            </div>

            <h1
              className={`text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white
                ${visible ? 'opacity-0 animate-fade-in-left' : 'opacity-0'}`}
              style={delay(150)}
            >
              Dikeh Daniel is a{' '}
              <span className='text-brand-700 block mt-1'>
                {role}
                <span className='typewriter-cursor' aria-hidden='true' />
              </span>
            </h1>

            <p
              className={`text-base sm:text-lg md:text-xl mb-6 text-brand-500
                ${visible ? 'opacity-0 animate-fade-in-left' : 'opacity-0'}`}
              style={delay(300)}
            >
              He crafts responsive websites where technologies meet creativity
            </p>

            <div
              className={`flex flex-col sm:flex-row gap-4
                ${visible ? 'opacity-0 animate-fade-in-left' : 'opacity-0'}`}
              style={delay(450)}
            >
              <button className='w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 text-white ring-1 ring-brand-700 hover:bg-brand-700 transition-colors duration-300'>
                <Link to='/contact' className='block w-full text-center'>Contact Me !!</Link>
              </button>
              <button className='w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 text-brand-500 ring-1 ring-brand-400 hover:ring-brand-700 hover:text-white transition-colors duration-300'>
                <Link to='/projects' className='block w-full text-center'>View Projects</Link>
              </button>
            </div>
          </div>

          {/* ── Image Section ────────────────────────────── */}
          <div
            className={`relative w-full max-w-sm mx-auto md:max-w-md lg:max-w-lg order-1 md:order-2
              ${visible ? 'opacity-0 animate-fade-in-right' : 'opacity-0'}`}
            style={delay(200)}
          >
            {/* Subtle purple glow */}
            <div className='hero-glow' />

            <img
              src={heroback}
              alt=''
              className='absolute z-0 top-[5%] left-0 w-[30%] opacity-50 md:opacity-100'
            />

            {/* Floating hero image */}
            <img
              src={mainHeroImg}
              alt='Daniel'
              className='w-full z-10 relative animate-float'
            />

            <img
              src={dots}
              alt=''
              className='absolute z-20 right-0 bottom-[30%] w-[18%]'
            />

            <div className='p-2 ring-1 ring-brand-200 mt-0.5 bg-[#282C33]/80 backdrop-blur-sm'>
              <p className='text-white font-fira text-sm'>
                <span className='w-[10px] h-[10px] bg-brand-700 px-3.5 py-1 mr-2 inline-block'></span>
                Currently working on Portfolio
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
