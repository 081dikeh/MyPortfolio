// src/components/Experience.tsx
import SectionHeading from './common/SectionHeading'

const ROLES = [
  {
    title: 'Frontend Developer Intern',
    company: 'DumosTech',
    meta: 'Remote',
    dates: 'Oct 2025 – Jan 2026',
    points: [
      'Owned the frontend of the Bumpit dating app admin panel, from approved designs through API integration and deployment: dashboard, user and group management, moderation, payments, messaging, events, support, and settings.',
      'Integrated authentication, authorization, dashboard metrics, and module APIs with the backend, managing application state with Zustand in an established monorepo-style codebase.',
      'Worked through feature branches and pull requests with lead-engineer review, and shipped through GitHub CI/CD pipelines to a VPS.',
    ],
  },
  {
    title: 'Frontend Developer Intern',
    company: 'TEFEM Network',
    meta: 'Remote',
    dates: 'May 2023 – Oct 2023',
    points: [
      'Built and launched the organization’s responsive homepage from project requirements using HTML, CSS, and JavaScript, incorporating team feedback across the development cycle.',
    ],
  },
]

/** `plain` drops the section spacing and width so it can sit inside another page's layout. */
export default function Experience({ plain = false }: { plain?: boolean }) {
  return (
    <section id='experience' className={plain ? '' : 'wrap scroll-mt-20 py-section'}>
      <SectionHeading
        title='Experience'
        subtitle='Shipping frontend work in real teams, with code review and CI/CD.'
      />

      <ul className='border-t border-line'>
        {ROLES.map((role) => (
          <li
            key={role.company}
            className='grid gap-4 border-b border-line py-8 md:grid-cols-[17rem_1fr] md:gap-12 md:py-10'
          >
            <div>
              <h3 className='text-2xl font-bold leading-tight'>{role.company}</h3>
              <p className='mt-1.5 font-medium'>{role.title}</p>
              <p className='mt-0.5 text-[0.95rem] text-muted'>
                {role.dates} · {role.meta}
              </p>
            </div>
            <ul className='flex max-w-[40rem] flex-col gap-3'>
              {role.points.map((point) => (
                <li key={point} className='flex items-start gap-3 font-serif text-lg leading-relaxed text-ink/80 md:text-xl'>
                  <span className='mt-[0.7em] h-2 w-2 shrink-0 rounded-full bg-accent' aria-hidden='true' />
                  {point}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  )
}