import AboutMe from "../components/AboutMe"
import Hero from "../components/Hero"
import Projects from "../components/Projects"
import Skills from "../components/Skills"


export default function HomePage() {

  return (
    <div className="min-h-screen flex flex-col ">
      <main className="">
        <Hero/>
        <Projects/>
        <Skills/>
        <AboutMe/>
      </main>
    </div>
  )
}