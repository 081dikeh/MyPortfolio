// src/components/Services.tsx
import SectionHeading from './common/SectionHeading'

const SERVICES = [
  {
    title: 'Frontend development',
    description:
      'Building clean, responsive interfaces with React, Next.js, and TypeScript for products that need to feel polished and perform well.',
  },
  {
    title: 'UI implementation',
    description:
      'Translating design systems and product ideas into real, accessible interfaces with thoughtful UX, spacing, and interaction patterns.',
  },
  {
    title: 'Product MVPs & dashboards',
    description:
      'Creating launch-ready web experiences for startups and teams that need usable, scalable interfaces with strong product thinking behind them.',
  },
]

export default function Services() {
  return (
    <section id='services' className='wrap scroll-mt-20 py-section'>
      <SectionHeading
        title='Services'
        subtitle='I help businesses and founders turn product ideas into usable, fast, polished web experiences.'
      />

      <ul className='border-t border-line'>
        {SERVICES.map(({ title, description }) => (
          <li key={title} className='grid gap-3 border-b border-line py-8 md:grid-cols-[1fr_1.1fr] md:gap-12 md:py-10'>
            <h3 className='text-2xl font-bold leading-tight md:text-[2rem]'>{title}</h3>
            <p className='font-serif text-lg leading-relaxed text-ink/75 md:text-xl'>{description}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}