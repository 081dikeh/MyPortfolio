import dots from '../assets/Dots.png'
import heroback from '../assets/heroback.png'
import Skill from './Skill'
import { useInView } from '../hooks/useInView'

export default function Skills() {
  const { ref: titleRef, inView: titleVisible } = useInView()
  const { ref: leftRef,  inView: leftVisible  } = useInView({ threshold: 0.1 })
  const { ref: gridRef,  inView: gridVisible  } = useInView({ threshold: 0.08 })

  return (
    <div className='flex flex-col font-fira mt-16 sm:mt-28 md:mt-60'>

      <div ref={titleRef}>
        <h2 className={`text-3xl text-white flex items-center font-[500]
          ${titleVisible ? 'opacity-0 animate-fade-in-up' : 'opacity-0'}`}>
          <span className='text-brand-700'>#</span>Skills
          <span className='ring-1 ring-brand-700 w-0 md:w-64 lg:w-96 h-[0px] inline-block ml-6' />
        </h2>
      </div>

      <div className='flex flex-col md:flex-row justify-between mt-10 gap-10'>

        {/* Code snippet decoration */}
        <div ref={leftRef} className='relative hidden md:flex md:w-[40%] items-center justify-center min-h-[320px]'>
          <img src={dots}     alt='' className='absolute z-20 right-0 bottom-[30%] w-[15%]' />
          <img src={dots}     alt='' className='absolute z-20 left-0 top-[10%] w-[15%]' />
          <img src={heroback} alt='' className='absolute z-0 bottom-0 left-0 w-[30%] opacity-60' />
          <div className={`relative z-10 border border-brand-500 bg-[#1e2127] p-5 w-[85%] text-xs leading-6 rounded-sm select-none
            ${leftVisible ? 'opacity-0 animate-fade-in-left' : 'opacity-0'}`}>
            <p className='text-brand-200 mb-1'>{'// My stack'}</p>
            <p><span className='text-brand-700'>const</span> <span className='text-white'>Daniel</span> <span className='text-brand-500'>= {'{'}</span></p>
            <p className='ml-4'><span className='text-brand-900'>languages</span><span className='text-brand-500'>: [</span><span className='text-green-400'>'HTML', 'CSS', 'JS', 'TS'</span><span className='text-brand-500'>],</span></p>
            <p className='ml-4'><span className='text-brand-900'>frameworks</span><span className='text-brand-500'>: [</span><span className='text-green-400'>'React', 'Next.js'</span><span className='text-brand-500'>],</span></p>
            <p className='ml-4'><span className='text-brand-900'>backend</span><span className='text-brand-500'>: [</span><span className='text-green-400'>'Supabase', 'Neon'</span><span className='text-brand-500'>],</span></p>
            <p className='ml-4'><span className='text-brand-900'>passion</span><span className='text-brand-500'>: </span><span className='text-green-400'>'building great UIs'</span></p>
            <p><span className='text-brand-500'>{'}'}</span></p>
          </div>
        </div>

        {/* Skills grid staggered */}
        <div ref={gridRef} className='w-full md:w-[58%]'>
          <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2'>
            <Skill inView={gridVisible} />
          </div>
        </div>

      </div>
    </div>
  )
}
