import secHeroImg from '../assets/secHeroImg.png';
import dots from '../assets/Dots.png'
import Skill from '../components/Skill';


export default function AboutMePage() {
  return (
    <div>

      <section className="font-fira mt-24 mb-24 mx-4 md:mx-16 lg:mx-16 xl:mx-32 2xl:mx-44">

        <div className="mb-12">
          <h2 className="text-3xl text-white flex items-center font-bold"><span className="text-brand-700">/</span>Who am i?</h2>
          <p className="text-white">Frontend Developer | Building Fast, Beautiful Web Experiences</p>
        </div>

        <div className='flex flex-col md:flex-row justify-between items-center gap-16  mx-4 md:mx-0 lg:mx-0'>
            <div className='flex flex-col gap-6 md:w-1/2 w-full'>          

                <div className='flex flex-col gap-4 text-base text-brand-500'>
                    <p>Hello, I’m Daniel!</p>
                    <p>I’m a self-taught front-end developer based in Lagos, Nigeria. I specialize in building responsive websites from the ground up, transforming them into modern, user-friendly web experiences. </p>
                    <p>Turning my creativity and expertise into websites has been my passion for over a year. I’ve been assisting various clients in establishing their online presence. I’m always eager to explore and master the latest technologies and frameworks.</p>
                </div>
            </div>

            <div className='md:w-1/2 w-full flex justify-end relative'>
                <div className='w-[fit-content] relative'>
                    <img src={secHeroImg} className='w-96 z-10 relative' alt="" />
                    <img src={dots} alt="" className='absolute z-20 right-0 bottom-[30%] w-[25%]' />
                    <img src={dots} alt="" className='absolute z-20 left-0 top-[10%] w-[25%]' />
                    <hr className='w-full ring-1 ring-brand-600'/>
                </div>       
            </div>
        </div>

        <div className='mt-32'>
            <div className='grid md:grid-cols-4 gap-2 '>
              <Skill />
            </div>
        </div>

      </section>

    </div>
  )
}    
