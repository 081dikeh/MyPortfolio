import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import AboutMe from '../components/AboutMe'
import Contact from '../components/Contact'
import PageLayout from '../components/common/PageLayout'

export default function HomePage() {
  return (
    <PageLayout>
      <Hero />
      <Projects />
      <Skills />
      <AboutMe />
      <Contact />
    </PageLayout>
  )
}
