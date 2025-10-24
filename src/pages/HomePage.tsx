import AboutMe from "../components/AboutMe"
import Contact from "../components/Contact"
import Hero from "../components/Hero"
import Projects from "../components/Projects"
import Skills from "../components/Skills"


export default function HomePage() {

  return (
    <div className="flex flex-col mx-4 md:mx-16 lg:mx-32 xl:mx-48 2xl:mx-64">
      <main className="">
        <Hero/>
        <Projects/>
        <Skills/>
        <AboutMe/>
        <Contact/>
      </main>
    </div>
  )
}