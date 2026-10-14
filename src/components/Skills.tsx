// src/components/Skills.tsx
import Skill from './Skill'
import SectionHeading from './common/SectionHeading'

export default function Skills() {
  return (
    <section id='skills' className='wrap scroll-mt-20 py-section'>
      <SectionHeading title='Skills' subtitle='The tools and practices I use to ship.' />
      <Skill />
    </section>
  )
}