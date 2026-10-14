// src/components/ThemeToggle.tsx
import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'

export default function ThemeToggle() {
  const { theme, toggle } = useTheme()
  const next = theme === 'dark' ? 'light' : 'dark'

  return (
    <button
      type='button'
      onClick={toggle}
      aria-label={`Switch to ${next} theme`}
      title={`Switch to ${next} theme`}
      className='inline-flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-ink/[0.07]'
    >
      {theme === 'dark' ? <Sun size={19} aria-hidden='true' /> : <Moon size={19} aria-hidden='true' />}
    </button>
  )
}