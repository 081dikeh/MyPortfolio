import secHeroImg from '../assets/secHeroImg.png'
import dots from '../assets/Dots.png'
import { Link } from 'react-router-dom'
import { useInView } from '../hooks/useInView'
import { useCounter } from '../hooks/useCounter'

export default function AboutMe() {
  const { ref: titleRef, inView: titleVisible } = useInView()
  const { ref: textRef,  inView: textVisible  } = useInView({ threshold: 0.1 })
  const { ref: imgRef,   inView: imgVisible   } = useInView({ threshold: 0.1 })

  // Animated counters — trigger when text section is in view
  const projectCount = useCounter(10, 1400, textVisible)
  const yearCount    = useCounter(1,  900,  textVisible)

  return (
    <section className='text-white font-fira items-center gap-2 py-6 md:py-16 lg:py-24 mt-16 sm:mt-28 md:mt-40'>

      <div ref={titleRef}>
        <h2 className={`text-3xl text-white flex items-center font-[500]
          ${titleVisible ? 'opacity-0 animate-fade-in-up' : 'opacity-0'}`}>
          <span className='text-brand-700'>#</span>About me
          <span className='ring-1 ring-brand-700 w-0 md:w-96 h-[0px] inline-block ml-6' />
        </h2>
      </div>

      <div className='flex flex-col md:flex-row justify-between items-center gap-16 mt-8'>

        {/* Text + counters */}
        <div
          ref={textRef}
          className={`flex flex-col gap-6 md:w-1/2 w-full
            ${textVisible ? 'opacity-0 animate-fade-in-left' : 'opacity-0'}`}
        >
          {/* Stat counters */}
          <div className='flex gap-8 mb-2'>
            <div className='flex flex-col'>
              <span className='text-4xl font-bold text-brand-700'>{projectCount}+</span>
              <span className='text-xs text-brand-500'>Shipped projects</span>
            </div>
            <div className='w-px bg-brand-400' />
            <div className='flex flex-col'>
              <span className='text-4xl font-bold text-brand-700'>{yearCount}+</span>
              <span className='text-xs text-brand-500'>Year building</span>
            </div>
            <div className='w-px bg-brand-400' />
            <div className='flex flex-col'>
              <span className='text-4xl font-bold text-brand-700'>∞</span>
              <span className='text-xs text-brand-500'>Cups of coffee</span>
            </div>
          </div>

          <div className='flex flex-col gap-4 text-base text-brand-500'>
            <p>Hello, I'm Daniel!</p>
            <p>
              I'm a self-taught front-end developer based in Lagos, Nigeria who has shipped
              <span className='text-white'> 10 live projects</span> — from music notation tools
              to finance dashboards and e-commerce storefronts. I specialize in React, TypeScript,
              and Next.js, and I care deeply about writing clean code that looks great on every device.
            </p>
            <p>
              What sets me apart isn't just the tech stack — it's the ability to take a vague idea
              and turn it into something real, fast. If you need a developer who works independently,
              communicates clearly, and delivers, I'm your person.
            </p>
          </div>

          <div className='flex gap-3 flex-wrap'>
            <Link
              to='/aboutme'
              className='px-7 py-3 text-white ring-1 ring-brand-700 hover:bg-brand-700 transition-colors duration-300 btn-lift'
            >
              Read More
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

        {/* Floating image */}
        <div
          ref={imgRef}
          className={`md:w-1/2 w-full flex justify-end relative
            ${imgVisible ? 'opacity-0 animate-fade-in-right' : 'opacity-0'}`}
        >
          <div className='relative'>
            <img src={secHeroImg} className='w-96 z-10 relative animate-float' alt='Daniel' />
            <img src={dots} alt='' className='absolute z-20 right-0 bottom-[30%] w-[25%]' />
            <img src={dots} alt='' className='absolute z-20 left-0 top-[10%] w-[25%]' />
            <hr className='w-full ring-1 ring-brand-600 border-0' />
          </div>
        </div>
      </div>
    </section>
  )
}
