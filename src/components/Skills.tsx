import Skill from './Skill'
import { useInView } from '../hooks/useInView'
import SectionHeading from './common/SectionHeading'
import FadeIn from './common/FadeIn'

export default function Skills() {
  const { ref: sectionRef, inView } = useInView({ threshold: 0.08 })
  const { ref: codeRef, inView: codeVisible } = useInView({ threshold: 0.1 })

  return (
    <section id='skills' ref={sectionRef} className='py-section scroll-mt-24'>
      <SectionHeading title='Skills' show={inView} lineWidth='md:w-64 lg:w-[28rem]' />

      <div className='flex flex-col lg:flex-row gap-10 lg:gap-16'>
        {/* Code snippet */}
        <div ref={codeRef} className='hidden lg:flex lg:w-[42%] items-center justify-center'>
          <FadeIn show={codeVisible} direction='left' className='w-full'>
            <div className='relative border border-border bg-surface/60 p-6 font-mono text-xs leading-7 select-none'>
              <div className='flex items-center gap-2 mb-4 pb-3 border-b border-border/60'>
                <span className='w-2.5 h-2.5 rounded-full bg-red-400/70' />
                <span className='w-2.5 h-2.5 rounded-full bg-yellow-400/70' />
                <span className='w-2.5 h-2.5 rounded-full bg-green-400/70' />
                <span className='text-muted/50 ml-2 text-[10px]'>developer.ts</span>
              </div>
              <p className='text-muted/60 mb-1'>{'// Who I am'}</p>
              <p><span className='text-accent'>const</span> <span className='text-white'>developer</span> <span className='text-muted'>= {'{'}</span></p>
              <p className='ml-4'><span className='text-error'>name</span><span className='text-muted'>: </span><span className='text-green-400'>'Dikeh Daniel'</span><span className='text-muted'>,</span></p>
              <p className='ml-4'><span className='text-error'>role</span><span className='text-muted'>: </span><span className='text-green-400'>'Frontend Engineer'</span><span className='text-muted'>,</span></p>
              <p className='ml-4'><span className='text-error'>stack</span><span className='text-muted'>: [</span></p>
              <p className='ml-8'><span className='text-green-400'>'React', 'Next.js', 'TypeScript'</span></p>
              <p className='ml-4'><span className='text-muted'>],</span></p>
              <p className='ml-4'><span className='text-error'>focus</span><span className='text-muted'>: </span><span className='text-green-400'>'shipping quality UI'</span></p>
              <p><span className='text-muted'>{'}'}</span></p>
            </div>
          </FadeIn>
        </div>

        {/* Skills grid */}
        <div className='w-full lg:w-[55%]'>
          <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3'>
            <Skill inView={inView} />
          </div>
        </div>
      </div>
    </section>
  )
}
