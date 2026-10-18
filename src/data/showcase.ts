// src/data/showcase.ts
import { featuredProject, otherProjects, type Project } from './projects'

// The order projects appear in across the site: the same arrangement as projects.ts
// (the featured project first, then the rest in the order they are listed there).
export const showcase: Project[] = [featuredProject, ...otherProjects]

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