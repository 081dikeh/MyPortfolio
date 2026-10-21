// src/components/Skill.tsx
import { skillGroups } from '../data/skills'
import Reveal from './common/Reveal'

export default function Skill() {
  return (
    <dl className='border-t border-line'>
      {skillGroups.map((group, i) => (
        <Reveal
          key={group.category}
          delay={(i % 3) * 70}
          className='grid gap-2 border-b border-line py-5 sm:grid-cols-[12rem_1fr] sm:gap-8 sm:py-6'
        >
          <dt className='text-[0.95rem] font-medium text-muted sm:pt-2'>{group.category}</dt>
          <dd className='flex flex-wrap gap-x-6 gap-y-1 font-display text-xl font-semibold tracking-tight md:text-2xl'>
            {group.skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </dd>
        </Reveal>
      ))}
    </dl>
  )
}