import secHeroImg from '../assets/secHeroImg.png';
import dots from '../assets/Dots.png'
import Skill from '../components/Skill';

export default function AboutMePage() {
  return (
    <div>
      <section className="font-fira mt-24 mb-24 mx-4 md:mx-16 lg:mx-16 xl:mx-32 2xl:mx-44">

        <div className="mb-10">
          <h2 className="text-3xl text-white flex items-center font-bold">
            <span className="text-brand-700">/</span>Who am i?
          </h2>
          <p className="text-brand-500 text-sm mt-1">Frontend Developer | Building Fast, Beautiful Web Experiences</p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-12 md:gap-16">
          {/* Bio */}
          <div className="flex flex-col gap-6 w-full md:w-1/2">
            <div className="flex flex-col gap-4 text-sm text-brand-500 leading-relaxed">
              <p>Hello, I'm Daniel!</p>
              <p>
                I'm a self-taught front-end developer based in Lagos, Nigeria. I specialize in
                building responsive websites from the ground up, transforming ideas into modern,
                user-friendly web experiences.
              </p>
              <p>
                Turning creativity and expertise into websites has been my passion for over a year.
                I've been helping clients establish their online presence and I'm always eager to
                explore and master the latest technologies and frameworks.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end relative">
            <div className="w-fit relative">
              <img src={secHeroImg} className="w-72 sm:w-80 md:w-96 z-10 relative" alt="Daniel" />
              <img src={dots} alt="" className="absolute z-20 right-0 bottom-[30%] w-[25%]" />
              <img src={dots} alt="" className="absolute z-20 left-0 top-[10%] w-[25%]" />
              <hr className="w-full ring-1 ring-brand-600 border-0" />
            </div>
          </div>
        </div>

        {/* Skills grid */}
        <div className="mt-20">
          <h3 className="text-xl text-white font-[500] mb-6">
            <span className="text-brand-700">#</span>My skills
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
            <Skill />
          </div>
        </div>

      </section>
    </div>
  );
}
