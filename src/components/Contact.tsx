import { Mail, Linkedin, Twitter } from 'lucide-react'
import { useInView } from '../hooks/useInView'

export default function Contact() {
  const { ref: titleRef, inView: titleVisible } = useInView()
  const { ref: bodyRef,  inView: bodyVisible  } = useInView({ threshold: 0.1 })

  return (
    <section className='font-fira gap-8 mt-20 mb-20'>

      {/* Title */}
      <div ref={titleRef}>
        <h2 className={`text-3xl text-white flex items-center font-[500]
          ${titleVisible ? 'opacity-0 animate-fade-in-up' : 'opacity-0'}`}>
          <span className='text-brand-700'>#</span>Contacts
          <span className='ring-1 ring-brand-700 w-0 md:w-64 lg:w-96 h-[0px] inline-block ml-6'></span>
        </h2>
      </div>

      <div ref={bodyRef} className='flex flex-col md:flex-row justify-between gap-8 mt-8'>

        {/* Description */}
        <div className={`md:w-[50%]
          ${bodyVisible ? 'opacity-0 animate-fade-in-left' : 'opacity-0'}`}>
          <p className='text-base text-brand-500 leading-relaxed'>
            I'm actively seeking freelance opportunities to create impactful web solutions.
            If you have any questions, specific requests, or exciting projects in mind,
            please don't hesitate to reach out!
          </p>
        </div>

        {/* Contact card */}
        <div
          className={`flex md:w-[50%] justify-start md:justify-end
            ${bodyVisible ? 'opacity-0 animate-fade-in-right' : 'opacity-0'}`}
          style={{ animationDelay: '120ms' }}
        >
          <div className='w-fit ring-1 ring-brand-500 p-5 flex flex-col gap-4 hover:ring-brand-700 transition-colors duration-300'>
            <h3 className='text-white text-base font-semibold'>Message me here</h3>
            <div className='flex flex-col gap-3 text-brand-500 text-sm'>
              <a
                href='mailto:dikehdaniel2020@gmail.com'
                className='flex items-center gap-3 hover:text-brand-700 transition-colors duration-200 group'
              >
                <Mail size={16} className='group-hover:scale-110 transition-transform duration-200' />
                dikehdaniel2020@gmail.com
              </a>
              <a
                href='https://www.linkedin.com/in/daniel-dikeh'
                target='_blank' rel='noopener noreferrer'
                className='flex items-center gap-3 hover:text-brand-700 transition-colors duration-200 group'
              >
                <Linkedin size={16} className='group-hover:scale-110 transition-transform duration-200' />
                Daniel Dikeh
              </a>
              <a
                href='https://twitter.com/Danishadow081'
                target='_blank' rel='noopener noreferrer'
                className='flex items-center gap-3 hover:text-brand-700 transition-colors duration-200 group'
              >
                <Twitter size={16} className='group-hover:scale-110 transition-transform duration-200' />
                @Danishadow081
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
