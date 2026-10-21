// src/pages/HomePage.tsx
import Hero from '../components/Hero'
import MarqueeBand from '../components/MarqueeBand'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import MusicTeaser from '../components/MusicTeaser'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'
import Skills from '../components/Skills'
import AboutMe from '../components/AboutMe'
import Contact from '../components/Contact'
import PageLayout from '../components/common/PageLayout'

export default function HomePage() {
  return (
    <PageLayout fullWidth>
      <Hero />
      <MarqueeBand />
      <Projects />
      <Experience />
      <Services />
      <Skills />
      <MusicTeaser />
      <Testimonials />
      <AboutMe />
      <Contact />
    </PageLayout>
  )
}