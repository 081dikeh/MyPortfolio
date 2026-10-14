// src/components/StackPills.tsx
import type { ReactNode } from 'react'
import {
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss,
  SiSupabase, SiVercel, SiJavascript, SiHtml5, SiCss3,
  SiGit, SiGithub, SiOpenai, SiPostgresql,
} from 'react-icons/si'

const ICONS: Record<string, ReactNode> = {
  'Next.js': <SiNextdotjs size={12} />,
  'React': <SiReact size={12} />,
  'ReactJs': <SiReact size={12} />,
  'TypeScript': <SiTypescript size={12} />,
  'Tailwind CSS': <SiTailwindcss size={12} />,
  'Supabase': <SiSupabase size={12} />,
  'Neon Postgres': <SiPostgresql size={12} />,
  'Neon Auth': <SiPostgresql size={12} />,
  'Vercel': <SiVercel size={12} />,
  'JavaScript': <SiJavascript size={12} />,
  'HTML': <SiHtml5 size={12} />,
  'CSS': <SiCss3 size={12} />,
  'Git': <SiGit size={12} />,
  'GitHub': <SiGithub size={12} />,
  'OpenAI API': <SiOpenai size={12} />,
  'OpenAI': <SiOpenai size={12} />,
  'HTML, CSS and JavaScript': <SiJavascript size={12} />,
}

function parseTech(stack: string): string[] {
  return stack.split(/,\s*|\s+and\s+/).map((s) => s.trim()).filter(Boolean)
}

export default function StackPills({ stack, max, onDark = false }: { stack: string; max?: number; onDark?: boolean }) {
  const techs = parseTech(stack)
  const shown = max ? techs.slice(0, max) : techs
  const remaining = max && techs.length > max ? techs.length - max : 0
  const pill = onDark ? 'bg-paper/10 text-paper/85' : 'bg-ink/[0.06] text-ink/75'

  return (
    <ul className='flex flex-wrap gap-1.5' aria-label='Technologies used'>
      {shown.map((tech) => (
        <li key={tech} className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[0.8125rem] font-medium ${pill}`}>
          {ICONS[tech]}
          {tech}
        </li>
      ))}
      {remaining > 0 && (
        <li className={`inline-flex items-center rounded-full px-3 py-1 text-[0.8125rem] font-medium ${pill}`}>
          +{remaining} more
        </li>
      )}
    </ul>
  )
}