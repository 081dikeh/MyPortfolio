import secHeroImg from '../assets/secHeroImg.png';
import dots from '../assets/Dots.png'


export default function AboutMe() {
  return (
    <section className="text-white font-fira items-center gap-2 py-8 md:py-16 lg:py-24 flex flex-col md:flex-row justify-between"> 
        <div className='flex flex-col gap-6 md:w-1/2 w-full'>
            <h2 className="text-3xl text-white flex items-center font-[500]"><span className="text-brand-700">#</span>About me<span className="ring-1 ring-brand-700 w-96 h-[0px] inline-block ml-6"></span></h2>

            <div className='flex flex-col gap-4 text-base text-brand-500'>
                <p>Hello, I’m Daniel!</p>
                <p>I’m a self-taught front-end developer based in Lagos, Nigeria. I specialize in building responsive websites from the ground up, transforming them into modern, user-friendly web experiences. </p>
                <p>Turning my creativity and expertise into websites has been my passion for over a year. I’ve been assisting various clients in establishing their online presence. I’m always eager to explore and master the latest technologies and frameworks.</p>
            </div>

            <button 
                className='px-6 py-3 md:px-8 md:py-4 text-white ring-1 ring-brand-700 hover:bg-brand-700 transition-colors duration-300 w-full sm:w-[fit-content]'
                >
                Read More 
            </button>
        </div>
        <div className='md:w-1/2 w-full flex justify-end relative'>
            <div className='w-[fit-content] relative'>
                <img src={secHeroImg} className='w-96 z-10 relative' alt="" />
                <img src={dots} alt="" className='absolute z-20 right-0 bottom-[30%] w-[25%]' />
                <img src={dots} alt="" className='absolute z-20 left-0 top-[10%] w-[25%]' />
                <hr className='w-full ring-1 ring-brand-600'/>
            </div>
        

        </div>
    </section>
  )
}    