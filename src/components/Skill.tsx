// src/components/Skill.tsx
import { skillGroups } from '../data/skills'

export default function Skill() {
  return (
    <dl className='border-t border-line'>
      {skillGroups.map((group) => (
        <div
          key={group.category}
          className='grid gap-2 border-b border-line py-5 sm:grid-cols-[11rem_1fr] sm:gap-8 sm:py-6'
        >
          <dt className='text-[0.95rem] font-medium text-muted sm:pt-2'>{group.category}</dt>
          <dd className='flex flex-wrap gap-x-6 gap-y-1 font-display text-2xl font-semibold tracking-tight md:text-[2rem]'>
            {group.skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </dd>
        </div>
      ))}
    </dl>
  )
}