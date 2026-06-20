interface SkillProps {
  inView?: boolean
}

const skillGroups = [
  { category: 'Languages',    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript'] },
  { category: 'Frameworks',   skills: ['ReactJs', 'NextJs'] },
  { category: 'Styling',      skills: ['Tailwind CSS'] },
  { category: 'Backend / DB', skills: ['Supabase'] },
  { category: 'Tools',        skills: ['Git', 'GitHub', 'Vercel', 'VS Code'] },
  { category: 'Other',        skills: ['Vexflow'] },
]

export default function Skill({ inView = true }: SkillProps) {
  return (
    <>
      {skillGroups.map((group, i) => (
        <div
          key={group.category}
          className={`border border-brand-500 flex flex-col card-lift
            ${inView ? 'opacity-0 animate-fade-in-up' : 'opacity-0'}`}
          style={{ animationDelay: `${i * 90}ms` }}
        >
          <h2 className='text-white py-2 px-4 font-bold border-b border-brand-500 text-sm'>
            {group.category}
          </h2>
          <ul className='py-2 px-4 flex flex-col gap-1'>
            {group.skills.map((skill) => (
              <li key={skill} className='text-brand-500 text-sm leading-relaxed skill-tag'>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  )
}
