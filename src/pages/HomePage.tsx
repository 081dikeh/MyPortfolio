// src/pages/HomePage.tsx
import Hero from '../components/Hero'
import Projects from '../components/Projects'
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
      <Projects />
      <Services />
      <Testimonials />
      <Skills />
      <AboutMe />
      <Contact />
    </PageLayout>
  )
}