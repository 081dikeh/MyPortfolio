// src/data/showcase.ts
import { projects, type Project } from './projects'

// The order projects appear in across the site. Edit this list to reorder them.
const ORDER = [
  'faithscore',
  'faithlibrary',
  'fina-dashboard',
  'st-william-parish',
  'faithbeat',
  'furnidan',
  'metabnb',
  'danid-shop',
  'tefem',
  'portfolio',
]

const listed = ORDER.map((slug) => projects.find((p) => p.slug === slug)).filter((p): p is Project => Boolean(p))
const unlisted = projects.filter((p) => !ORDER.includes(p.slug))

export const showcase: Project[] = [...listed, ...unlisted]

// What each project is, in a few words, so range is visible at a glance.
const KINDS: Record<string, string> = {
  'fina-dashboard': 'Analytics dashboard',
  faithscore: 'Interactive notation editor',
  'st-william-parish': 'Community portal',
  furnidan: 'E-commerce landing page',
  metabnb: 'Booking platform',
  faithlibrary: 'Searchable content library',
  faithbeat: 'AI-assisted web app',
  'danid-shop': 'Shopping cart app',
  tefem: 'Programme website',
  portfolio: 'Personal website',
}

export const kindOf = (project: Project) => KINDS[project.slug] ?? ''

export const hasCaseStudy = (project: Project) =>
  Boolean(project.problem || project.approach || project.result || (project.features && project.features.length > 0))