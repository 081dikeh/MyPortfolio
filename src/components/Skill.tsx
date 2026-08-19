import { skillGroups } from '../data/skills'
import FadeIn from './common/FadeIn'

interface SkillProps {
  inView?: boolean
}

export default function Skill({ inView = true }: SkillProps) {
  return (
    <>
      {skillGroups.map((group, i) => (
        <FadeIn key={group.category} show={inView} delay={i * 80} className='h-full'>
          <div className='border border-border flex flex-col h-full card-lift bg-surface/20 hover:border-accent/30 transition-colors duration-300'>
            <h3 className='text-white py-2.5 px-4 font-mono font-semibold border-b border-border text-xs tracking-wide'>
              {group.category}
            </h3>
            <ul className='py-3 px-4 flex flex-col gap-1.5 flex-1'>
              {group.skills.map((skill) => (
                <li key={skill} className='text-muted text-sm skill-tag'>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      ))}
    </>
  )
}
