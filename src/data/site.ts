// src/data/site.ts
// One place for contact details and links used across the site.
export type SocialLink = {
  platform: 'github' | 'linkedin' | 'x'
  label: string
  href: string
  handle?: string
}

export const SITE = {
  name: 'Dikeh Daniel',
  email: 'dikehdaniel2020@gmail.com',
  resume: '/Dikeh_Daniel_Frontend_Engineer_Resume.pdf',
  socials: {
    github: { platform: 'github', label: 'GitHub', href: 'https://github.com/081dikeh' },
    linkedin: { platform: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/dikeh081/' },
    x: { platform: 'x', label: 'X', href: 'https://x.com/Danishadow081', handle: '@Danishadow081' },
  } satisfies Record<SocialLink['platform'], SocialLink>,
} as const