import secHeroImg from '../assets/secHeroImg.png'
import dots from '../assets/Dots.png'
import Skill from '../components/Skill'

export default function AboutMePage() {
  return (
    <div>
      <section className="font-fira mt-24 mb-24 mx-4 md:mx-16 lg:mx-16 xl:mx-32 2xl:mx-44">

        <div className="mb-12">
          <h2 className="text-3xl text-white flex items-center font-bold">
            <span className="text-brand-700">/</span>Who am I?
          </h2>
          <p className="text-brand-500 text-sm mt-1">
            Frontend Developer · Lagos, Nigeria · Available for freelance & full-time
          </p>
        </div>

        <div className='flex flex-col md:flex-row justify-between items-center gap-16 mx-4 md:mx-0 lg:mx-0'>
          <div className='flex flex-col gap-6 md:w-1/2 w-full'>

            {/* ✅ FIX 2 & 3: Stronger bio on the about page too */}
            <div className='flex flex-col gap-4 text-base text-brand-500'>
              <p>Hello, I'm Daniel!</p>
              <p>
                I'm a self-taught frontend developer who has shipped <span className='text-white'>10 live projects</span> across
                music, finance, e-commerce, and real estate — without a bootcamp or CS degree.
                I work primarily with React, TypeScript, Next.js, and Tailwind CSS, and I deploy
                everything on Vercel with Supabase on the backend when needed.
              </p>
              <p>
                I started from zero and built everything through consistency and a genuine
                obsession with how the web works. Every project in my portfolio is fully live,
                has a public GitHub repo, and was built entirely by me.
              </p>
              <p>
                I'm currently open to frontend developer roles and freelance projects.
                If you're building something and need someone who ships, let's talk.
              </p>
            </div>

            {/* ✅ FIX 5: CV download on the about page */}
            <a
              href="/Daniel-Dikeh-CV.pdf"
              download
              className='px-6 py-3 md:px-8 md:py-4 text-white ring-1 ring-brand-700 hover:bg-brand-700 transition-colors duration-300 w-full sm:w-fit text-center'
            >
              Download CV
            </a>

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

        <div className='mt-32'>
          <div className='grid md:grid-cols-4 gap-2'>
            <Skill />
          </div>
        </div>

      </section>
    </div>
  )
}
