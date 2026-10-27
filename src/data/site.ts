// src/data/site.ts
// One place for contact details and links used across the site.
export type SocialLink = {
  label: string
  href: string
  handle?: string
}

export const SITE = {
  name: 'Dikeh Daniel',
  email: 'dikehdaniel2020@gmail.com',
  resume: '/Dikeh_Daniel_Frontend_Engineer_Resume.pdf',
  github: 'https://github.com/081dikeh',
  linkedin: 'https://www.linkedin.com/in/dikeh081/',
  twitter: 'https://x.com/Danishadow081',
  x: 'https://x.com/Danishadow081',
  twitterHandle: '@Danishadow081',
  xHandle: '@Danishadow081',
  socials: [
    { label: 'GitHub', href: 'https://github.com/081dikeh' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/dikeh081/' },
    { label: 'X (Twitter)', href: 'https://x.com/Danishadow081', handle: '@Danishadow081' },
  ] satisfies SocialLink[],
} as const