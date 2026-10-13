import { useEffect } from 'react'

interface PageMetadata {
  title: string
  description: string
}

export function usePageMetadata({ title, description }: PageMetadata) {
  useEffect(() => {
    document.title = title

    const setMetaContent = (selector: string, content: string) => {
      const element = document.head.querySelector<HTMLMetaElement>(selector)
      if (element) element.content = content
    }

    const canonicalUrl = `${window.location.origin}${window.location.pathname}`

    setMetaContent('meta[name="description"]', description)
    setMetaContent('meta[property="og:title"]', title)
    setMetaContent('meta[property="og:description"]', description)
    setMetaContent('meta[property="og:url"]', canonicalUrl)
    setMetaContent('meta[name="twitter:title"]', title)
    setMetaContent('meta[name="twitter:description"]', description)

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.append(canonical)
    }
    canonical.href = canonicalUrl
  }, [title, description])
}
