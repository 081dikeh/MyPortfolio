// src/components/Testimonials.tsx
import SectionHeading from './common/SectionHeading'
import Reveal from './common/Reveal'

const TESTIMONIALS = [
  {
    quote:
      'Daniel built a polished, functional product experience with real thought behind the UX. The final result felt premium and intentional.',
    name: 'Client / Product Lead',
    role: 'Product collaboration',
  },
  {
    quote:
      'His ability to turn an idea into a working interface, then iterate quickly, is exactly what teams need from a frontend developer.',
    name: 'Project Partner',
    role: 'Product & UI feedback',
  },
]

export default function Testimonials() {
  return (
    <section id='testimonials' className='wrap scroll-mt-20 py-section'>
      <SectionHeading
        title='Testimonials'
        subtitle='A few short notes from working relationships and collaboration experiences.'
      />

      <div className='grid gap-6 md:grid-cols-2'>
        {TESTIMONIALS.map(({ quote, name, role }, i) => (
          <Reveal as='figure' key={name} delay={i * 100} className='flex h-full flex-col rounded-[1.75rem] bg-surface p-8 md:p-10'>
            <blockquote className='font-serif text-xl leading-snug md:text-2xl'>“{quote}”</blockquote>
            <figcaption className='mt-8 pt-2'>
              <div className='font-semibold'>{name}</div>
              <div className='text-sm text-muted'>{role}</div>
            </figcaption>
          </Reveal>
        ))}
      </div>
    </section>
  )
}