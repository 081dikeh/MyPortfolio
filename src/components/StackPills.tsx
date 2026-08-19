import type { ReactNode } from 'react'
import {
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss,
  SiSupabase, SiVercel, SiJavascript, SiHtml5, SiCss3,
  SiGit, SiGithub, SiOpenai, SiPostgresql
} from 'react-icons/si'

interface TechInfo {
  icon: ReactNode
  bg: string
  text: string
}

const TECH_MAP: Record<string, TechInfo> = {
  'Next.js':         { icon: <SiNextdotjs size={11} />,    bg: 'bg-white/8',        text: 'text-white' },
  'React':           { icon: <SiReact size={11} />,         bg: 'bg-cyan-500/10',    text: 'text-cyan-400' },
  'ReactJs':         { icon: <SiReact size={11} />,         bg: 'bg-cyan-500/10',    text: 'text-cyan-400' },
  'TypeScript':      { icon: <SiTypescript size={11} />,    bg: 'bg-blue-500/10',    text: 'text-blue-400' },
  'Tailwind CSS':    { icon: <SiTailwindcss size={11} />,   bg: 'bg-teal-500/10',    text: 'text-teal-400' },
  'Supabase':        { icon: <SiSupabase size={11} />,      bg: 'bg-green-500/10',   text: 'text-green-400' },
  'Neon Postgres':   { icon: <SiPostgresql size={11} />,    bg: 'bg-green-500/10',   text: 'text-green-400' },
  'Neon Auth':       { icon: <SiPostgresql size={11} />,    bg: 'bg-green-500/10',   text: 'text-green-400' },
  'Vercel':          { icon: <SiVercel size={11} />,        bg: 'bg-white/8',        text: 'text-white' },
  'JavaScript':      { icon: <SiJavascript size={11} />,    bg: 'bg-yellow-500/10',  text: 'text-yellow-400' },
  'HTML':            { icon: <SiHtml5 size={11} />,         bg: 'bg-orange-500/10',  text: 'text-orange-400' },
  'CSS':             { icon: <SiCss3 size={11} />,          bg: 'bg-blue-400/10',    text: 'text-blue-300' },
  'Git':             { icon: <SiGit size={11} />,           bg: 'bg-red-500/10',     text: 'text-red-400' },
  'GitHub':          { icon: <SiGithub size={11} />,        bg: 'bg-white/8',        text: 'text-white' },
  'OpenAI API':      { icon: <SiOpenai size={11} />,        bg: 'bg-emerald-500/10', text: 'text-emerald-400' },
  'OpenAI':          { icon: <SiOpenai size={11} />,        bg: 'bg-emerald-500/10', text: 'text-emerald-400' },
  'Recharts':        { icon: null,                          bg: 'bg-purple-500/10',  text: 'text-purple-400' },
  'Vexflow':         { icon: null,                          bg: 'bg-indigo-500/10',  text: 'text-indigo-400' },
  'HTML, CSS and JavaScript': { icon: <SiJavascript size={11} />, bg: 'bg-yellow-500/10', text: 'text-yellow-400' },
}

function parseTech(stack: string): string[] {
  return stack.split(/,\s*|\s+and\s+/).map(s => s.trim()).filter(Boolean)
}

export default function StackPills({ stack, max }: { stack: string; max?: number }) {
  const techs = parseTech(stack)
  const shown = max ? techs.slice(0, max) : techs
  const remaining = max && techs.length > max ? techs.length - max : 0

  return (
    <div className='flex flex-wrap gap-1.5'>
      {shown.map((tech) => {
        const info = TECH_MAP[tech]
        return (
          <span
            key={tech}
            className={`inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-mono
              ${info ? `${info.bg} ${info.text}` : 'bg-border/40 text-muted'}`}
          >
            {info?.icon}
            {tech}
          </span>
        )
      })}
      {remaining > 0 && (
        <span className='inline-flex items-center px-2 py-0.5 text-[10px] font-mono bg-border/30 text-muted'>
          +{remaining}
        </span>
      )}
    </div>
  )
}
