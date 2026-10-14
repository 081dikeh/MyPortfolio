// src/components/common/PageLayout.tsx
import type { ReactNode } from 'react'

interface PageLayoutProps {
  children: ReactNode
  className?: string
  /** Skip the centred content width; sections bring their own `.wrap`. */
  fullWidth?: boolean
}

export default function PageLayout({ children, className = '', fullWidth = false }: PageLayoutProps) {
  return (
    <div className='page-enter'>
      <main id='main-content' className={`${fullWidth ? '' : 'wrap'} ${className}`}>
        {children}
      </main>
    </div>
  )
}