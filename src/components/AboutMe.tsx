import secHeroImg from '../assets/secHeroImg.png'
import dots from '../assets/Dots.png'
import { Link } from 'react-router-dom'

export default function AboutMe() {
  return (
    <section className="text-white font-fira items-center gap-2 py-8 md:py-16 lg:py-24 mt-40">
      <h2 className="text-3xl text-white flex items-center font-[500]">
        <span className="text-brand-700">#</span>About me
        <span className="ring-1 ring-brand-700 w-0 md:w-96 h-[0px] inline-block ml-6"></span>
      </h2>

      <div className='flex flex-col md:flex-row justify-between items-center gap-16 mt-4 mx-4 md:mx-0 lg:mx-0'>
        <div className='flex flex-col gap-6 md:w-1/2 w-full'>

          {/* ✅ FIX 2 & 3: Stronger bio + why hire me */}
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
              and turn it into something real, fast. If you need a developer who can work independently,
              communicate clearly, and deliver on time, I'm your person.
            </p>
          </div>

          <div className='flex gap-3 flex-wrap'>
            <button className='px-6 py-3 md:px-8 md:py-4 text-white ring-1 ring-brand-700 hover:bg-brand-700 transition-colors duration-300 w-full sm:w-fit'>
              <Link to="/aboutme">Read More</Link>
            </button>
            {/* ✅ FIX 5: CV download in homepage About section too */}
            <a
              href="/Daniel-Dikeh-CV.pdf"
              download
              className='px-6 py-3 md:px-8 md:py-4 text-brand-500 ring-1 ring-brand-400 hover:ring-brand-700 hover:text-white transition-colors duration-300 w-full sm:w-fit text-center'
            >
              Download CV
            </a>
          </div>

        </div>

        <div className='md:w-1/2 w-full flex justify-end relative'>
          <div className='w-[fit-content] relative'>
            <img src={secHeroImg} className='w-96 z-10 relative' alt="Daniel" />
            <img src={dots} alt="" className='absolute z-20 right-0 bottom-[30%] w-[25%]' />
            <img src={dots} alt="" className='absolute z-20 left-0 top-[10%] w-[25%]' />
            <hr className='w-full ring-1 ring-brand-600 border-0' />
          </div>
        </div>
      </div>
    </section>
  )
}
