import secHeroImg from '../assets/secHeroImg.png'
import dots from '../assets/Dots.png'
import { useInView } from '../hooks/useInView'

export default function AboutMe() {
  const { ref: titleRef, inView: titleVisible } = useInView()
  const { ref: textRef,  inView: textVisible  } = useInView({ threshold: 0.1 })
  const { ref: imgRef,   inView: imgVisible   } = useInView({ threshold: 0.1 })

  return (
    <section className='text-white font-fira items-center gap-2 py-8 md:py-16 lg:py-24 mt-40'>

      {/* Title */}
      <div ref={titleRef}>
        <h2 className={`text-3xl text-white flex items-center font-[500]
          ${titleVisible ? 'opacity-0 animate-fade-in-up' : 'opacity-0'}`}>
          <span className='text-brand-700'>#</span>About me
          <span className='ring-1 ring-brand-700 w-0 md:w-96 h-[0px] inline-block ml-6'></span>
        </h2>
      </div>

      <div className='flex flex-col md:flex-row justify-between items-center gap-16 mt-4 mx-4 md:mx-0 lg:mx-0'>

        {/* Text block */}
        <div
          ref={textRef}
          className={`flex flex-col gap-6 md:w-1/2 w-full
            ${textVisible ? 'opacity-0 animate-fade-in-left' : 'opacity-0'}`}
        >
          <div className='flex flex-col gap-4 text-base text-brand-500'>
            <p>Hello, I'm Daniel!</p>
            <p>
              I'm a self-taught front-end developer based in Lagos, Nigeria. I specialize in
              building responsive websites from the ground up, transforming them into modern,
              user-friendly web experiences.
            </p>
            <p>
              Turning my creativity and expertise into websites has been my passion for over a year.
              I've been assisting various clients in establishing their online presence. I'm always
              eager to explore and master the latest technologies and frameworks.
            </p>
          </div>
          <button className='px-6 py-3 md:px-8 md:py-4 text-white ring-1 ring-brand-700 hover:bg-brand-700 transition-colors duration-300 w-full sm:w-fit'>
            Read More
          </button>
        </div>

        {/* Image */}
        <div
          ref={imgRef}
          className={`md:w-1/2 w-full flex justify-end relative
            ${imgVisible ? 'opacity-0 animate-fade-in-right' : 'opacity-0'}`}
        >
          <div className='w-fit relative'>
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
