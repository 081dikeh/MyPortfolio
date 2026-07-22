import secHeroImg from '../assets/secHeroImg.png'
import dots from '../assets/Dots.png'
import Skill from '../components/Skill'
import { useInView } from '../hooks/useInView'
import { useCounter } from '../hooks/useCounter'

export default function AboutMePage() {
  const { ref: headerRef, inView: headerVisible } = useInView()
  const { ref: textRef,   inView: textVisible   } = useInView({ threshold: 0.08 })
  const { ref: imgRef,    inView: imgVisible    } = useInView({ threshold: 0.08 })
  const { ref: skillRef,  inView: skillVisible  } = useInView({ threshold: 0.04 })

  const projectCount = useCounter(10, 1400, textVisible)

  return (
    <div className='page-enter'>
      <section className='font-fira mt-24 mb-24 mx-4 md:mx-16 lg:mx-16 xl:mx-32 2xl:mx-44'>

        <div ref={headerRef} className='mb-10'>
          <h2 className={`text-3xl text-white font-bold
            ${headerVisible ? 'opacity-0 animate-fade-in-up' : 'opacity-0'}`}>
            <span className='text-brand-700'>/</span>Who am I?
          </h2>
          <p className={`text-brand-500 text-sm mt-1
            ${headerVisible ? 'opacity-0 animate-fade-in-up' : 'opacity-0'}`}
            style={{ animationDelay: '100ms' }}>
            Frontend Developer · Lagos, Nigeria · Available for freelance & full-time
          </p>
        </div>

        <div className='flex flex-col md:flex-row justify-between items-center gap-16'>

          <div
            ref={textRef}
            className={`flex flex-col gap-6 w-full md:w-1/2
              ${textVisible ? 'opacity-0 animate-fade-in-left' : 'opacity-0'}`}
          >
            {/* Counters */}
            <div className='flex gap-8 mb-2'>
              <div>
                <span className='text-4xl font-bold text-brand-700'>{projectCount}+</span>
                <p className='text-xs text-brand-500'>Shipped projects</p>
              </div>
              <div className='w-px bg-brand-400' />
              <div>
                <span className='text-4xl font-bold text-brand-700'>1+</span>
                <p className='text-xs text-brand-500'>Year building</p>
              </div>
            </div>

            <div className='flex flex-col gap-4 text-sm text-brand-500 leading-relaxed'>
              <p>Hello, I'm Daniel!</p>
              <p>
                I'm a self-taught frontend developer who has shipped{' '}
                <span className='text-white'>{projectCount} live projects</span> across
                music, finance, e-commerce, and community apps — without a bootcamp or CS degree.
                I work primarily with React, TypeScript, Next.js, and Tailwind CSS, and I deploy
                everything on Vercel with Supabase or Neon on the backend when needed.
              </p>
              <p>
                I started from zero and built everything through consistency and a genuine
                obsession with how the web works. Every project is fully live, has a public
                GitHub repo, and was built entirely by me.
              </p>
              <p>
                I'm currently open to frontend developer roles and freelance projects.
                If you're building something and need someone who ships, let's talk.
              </p>
            </div>

            <a
              href='/Daniel-Dikeh-CV.pdf'
              download
              className='px-7 py-3 text-white ring-1 ring-brand-700 hover:bg-brand-700 transition-colors duration-300 w-fit btn-lift'
            >
              Download CV
            </a>
          </div>

          <div
            ref={imgRef}
            className={`w-full md:w-1/2 flex justify-center md:justify-end relative
              ${imgVisible ? 'opacity-0 animate-fade-in-right' : 'opacity-0'}`}
          >
            <div className='relative'>
              <img src={secHeroImg} className='w-72 sm:w-80 md:w-96 z-10 relative animate-float' alt='Daniel' />
              <img src={dots} alt='' className='absolute z-20 right-0 bottom-[30%] w-[25%]' />
              <img src={dots} alt='' className='absolute z-20 left-0 top-[10%] w-[25%]' />
              <hr className='w-full ring-1 ring-brand-600 border-0' />
            </div>
          </div>
        </div>

        {/* Skills grid */}
        <div ref={skillRef} className='mt-20'>
          <h3 className={`text-xl text-white font-[500] mb-6
            ${skillVisible ? 'opacity-0 animate-fade-in-up' : 'opacity-0'}`}>
            <span className='text-brand-700'>#</span>My skills
          </h3>
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2'>
            <Skill inView={skillVisible} />
          </div>
        </div>

      </section>
    </div>
  )
}
