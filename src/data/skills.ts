export interface SkillGroup {
  category: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  { category: 'Frontend', skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'] },
  { category: 'State & Data', skills: ['Zustand', 'React Query', 'REST APIs', 'Supabase', 'PostgreSQL'] },
  { category: 'Engineering', skills: ['Git', 'GitHub', 'GitHub Actions', 'Vite', 'Vitest', 'Postman', 'Vercel', 'Sentry'] },
  { category: 'Specialized', skills: ['VexFlow', 'Music notation', 'PDF workflows', 'Authentication', 'Search', 'File storage'] },
  { category: 'Product', skills: ['Responsive design', 'UX strategy', 'Component systems', 'Product thinking', 'Accessibility'] },
  { category: 'AI & Apps', skills: ['AI-assisted products', 'Dashboard UX', 'SaaS interfaces', 'Admin tools', 'E-commerce UI'] },
]
