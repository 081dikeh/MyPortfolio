import secHeroImg from '../assets/secHeroImg.png';

export default function AboutMe() {
  return (
    <section className="text-white font-fira flex flex-col gap-6 py-8"> 
        <div></div>
        <div>
            <img src={secHeroImg} alt="" />
        </div>
    </section>
  )
}    