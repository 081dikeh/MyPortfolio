import type { ReactNode } from 'react'

interface PageLayoutProps {
  children: ReactNode
  className?: string
  fullWidth?: boolean
}

export default function PageLayout({ children, className = '', fullWidth = false }: PageLayoutProps) {
  return (
    <div className={`page-enter ${fullWidth ? '' : 'mx-4 md:mx-16 lg:mx-16 xl:mx-32 2xl:mx-44'} ${className}`}>
      <main id='main-content'>{children}</main>
    </div>
  )
}
