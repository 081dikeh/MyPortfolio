export interface SkillGroup {
  category: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  { category: 'Languages',    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript'] },
  { category: 'Frameworks',   skills: ['React', 'Next.js'] },
  { category: 'Styling',      skills: ['Tailwind CSS'] },
  { category: 'Backend / DB', skills: ['Supabase', 'Neon Postgres'] },
  { category: 'Tools',        skills: ['Git', 'GitHub', 'Vercel', 'VS Code'] },
  { category: 'APIs',         skills: ['OpenAI', 'Vexflow'] },
]
