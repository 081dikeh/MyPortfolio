import dots from '../assets/Dots.png'
import heroback from '../assets/heroback.png'
import mainHeroImg from '../assets/mainHeroImg.png'



export default function Hero() {
  return (
    <section className='min-h-screen flex items-center justify-center pt-12 md:pt-20'>
  <div className='container mx-auto max-w-7xl'>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center'>
      
      {/* Text Content */}
      <div className='md:text-left order-2 md:order-1 font-fira'>
        <h1 className='text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white'>
          Dikeh Daniel is a <span className='text-brand-700'>front-end developer</span>
        </h1>
        <p className='text-base sm:text-lg md:text-xl mb-6 text-white'>
          He crafts responsive websites where technologies meet creativity
        </p>
        <button 
          className='px-6 py-3 md:px-8 md:py-4 text-white ring-1 ring-brand-700 hover:bg-brand-700 transition-colors duration-300 w-full sm:w-auto'
        >
          Contact Me !!
        </button>
      </div>
      
      {/* Image Section */}

      <div className='relative w-full max-w-sm mx-auto md:max-w-md lg:max-w-lg order-1 md:order-2'>
        <img 
          src={heroback} 
          alt="" 
          className='absolute z-0 top-[5%] left-0 w-[30%] opacity-50 md:opacity-100'
        />
        <img 
          src={mainHeroImg} 
          alt="Hero" 
          className='w-full z-10 relative'
        />
        <img 
          src={dots} 
          alt="" 
          className='absolute z-20 right-0 bottom-[30%] w-[18%]' 
        />
        <div className='p-2 ring-1 ring-brand-200 mt-0.5'>
          <p className='text-white font-fira'><span className='w-[10px] h-[10px] bg-brand-700 px-3.5 py-1 mr-2'></span>Currently working on Portfolio</p>
        </div>
      </div>
      
    </div>
  </div>
</section>
  )
}      