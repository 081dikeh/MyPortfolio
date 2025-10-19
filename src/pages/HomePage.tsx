import Nav from "../components/Nav"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Projects from "../components/Projects"
import Skills from "../components/Skills"


export default function HomePage() {

  return (
    <div className="min-h-screen flex flex-col ">
      <Nav/>
      <main className="">
        <Hero/>
        <Projects/>
        <Skills/>
      </main>
      <Footer/>
    </div>
  )
}