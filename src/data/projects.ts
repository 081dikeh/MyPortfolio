// src/data/projects.ts
import project1 from '../assets/projectAssets/project1.png'
import project2 from '../assets/projectAssets/project2.png'
import project3 from '../assets/projectAssets/project3.png'
import project4 from '../assets/projectAssets/project4.png'
import project5 from '../assets/projectAssets/project5.png'
import project6 from '../assets/projectAssets/Slateport.png'
import faithbeatHero from '../assets/projectAssets/faithbeatHero.png'
import faithScoreFrontpage from '../assets/projectAssets/FaithScorefrontpage.png'
import faithlibraryHero from '../assets/projectAssets/FaithLibraryport.png'
import stWilliamImg from '../assets/projectAssets/St William Parish-img.png'


export type Project = {
  id: number
  slug: string
  image: string
  stack: string
  title: string
  subtitle: string
  summary?: string
  problem?: string
  approach?: string
  features?: string[]
  result?: string
  liveLink: string
  githubLink: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: 1,
    slug: 'faithlibrary',
    image: faithlibraryHero,
    stack: 'Next.js, TypeScript, Tailwind CSS, Supabase, Vercel',
    title: 'FaithLibrary',
    subtitle: 'A searchable choir music library for organizing scores, PDFs, uploads, and community access in one place.',
    summary: 'Designed to replace scattered score folders and fragmented choir file-sharing with a single, searchable library for music directors and members.',
    problem: 'Choir teams were relying on PDFs, messaging apps, and personal folders, which made score discovery, organization, and access difficult as libraries grew.',
    approach: 'I built a database-backed platform with authentication, uploads, filtering, PDF viewing, bookmarks, and collections so that music could be managed and accessed with clarity.',
    features: [
      'Authenticated accounts for music directors and choir members',
      'Uploads and organization for scores and PDFs',
      'Filtering and search across the library',
      'In-browser PDF viewing',
      'Bookmarks and collections for saved or grouped scores',
    ],
    result: 'The product became a usable music-management platform that consolidated score storage and access into a single workflow.',
    liveLink: 'https://faith-library.vercel.app/',
    githubLink: 'https://github.com/081dikeh/FaithLibrary',
    featured: true,
  },
  {
    id: 2,
    slug: 'faithscore',
    image: faithScoreFrontpage,
    stack: 'React, Tailwind CSS, Vexflow',
    title: 'FaithScore',
    subtitle: 'A browser-based music notation editor for creating, converting, and rehearsing staff and tonic sol-fa music in one interface.',
    summary: 'Built to solve the split workflow between notation writing and sol-fa conversion by giving musicians a single editing environment with structured musical data.',
    problem: 'Most tools separate staff notation and tonic sol-fa workflows, which forces musicians to manually convert information and risks inconsistency in rhythm, pitch, and score structure.',
    approach: 'I modeled the editor around structured musical data so the app could support notation rendering, playback, lyrics, multiple parts, and two-way staff/sol-fa conversion within one system.',
    features: [
      'Staff notation rendering built on structured musical data',
      'Two-way conversion between staff notation and tonic sol-fa',
      'Playback of entered music',
      'Support for lyrics and multiple parts',
      'Print-ready score output',
    ],
    result: 'The project evolved into a working notation workflow that supports staff-to-sol-fa and sol-fa-to-staff conversion alongside playback and print-ready output.',
    liveLink: 'https://faithscorewebsite.vercel.app/',
    githubLink: 'https://github.com/081dikeh/Faithscore',
  },
  {
    id: 5,
    slug: 'fina-dashboard',
    image: project1,
    stack: 'React, Tailwind CSS, Recharts',
    title: 'Fina Dashboard',
    subtitle: 'Financial analytics dashboard with interactive charts, revenue breakdowns, and customer growth tracking. Complex data visualisation built cleanly with React and Recharts.',
    liveLink: 'https://fina-inc.vercel.app/',
    githubLink: 'https://github.com/081dikeh/FinaInc',
  },
  {
    id: 4,
    slug: 'st-william-parish',
    image: stWilliamImg,
    stack: 'React, Tailwind CSS',
    title: 'St. William Parish',
    subtitle: 'Community web portal for a Catholic parish — service schedules, announcements, and ministry information. A clean, accessible digital home for the congregation.',
    liveLink: 'https://st-edward-parish.vercel.app/',
    githubLink: 'https://github.com/081dikeh/StEdward-ParishApp',
  },
  {
    id: 11,
    slug: 'faithbeat',
    image: faithbeatHero,
    stack: 'Next.js, TypeScript, Tailwind CSS, Neon Postgres, Neon Auth, OpenAI API, Vercel',
    title: 'Faithbeat',
    subtitle: 'AI-powered hymn-writing platform for African church worship — generates original hymns in English, Igbo, Yoruba, and Hausa with SATB choral arrangements, playable sheet music, and PDF export.',
    liveLink: 'https://faithbeat.vercel.app/',
    githubLink: 'https://github.com/081dikeh/Faithbeat',
  },
  {
    id: 9,
    slug: 'danid-shop',
    image: project6,
    stack: 'HTML, CSS, JavaScript',
    title: 'DaniD Shop',
    subtitle: 'Shopping cart app with add-to-cart, quantity controls, and live price totals. Built in vanilla JavaScript to demonstrate core DOM manipulation without a framework.',
    liveLink: 'https://dani-cart-shop.vercel.app/',
    githubLink: 'https://github.com/081dikeh/daniCartShop',
  },
  {
    id: 3,
    slug: 'furnidan',
    image: project3,
    stack: 'React',
    title: 'Furnidan',
    subtitle: 'E-commerce landing page for a premium furniture brand — visual storytelling and conversion-friendly layout with product showcases and category browsing.',
    liveLink: 'https://furni-dan-7jn6.vercel.app/',
    githubLink: 'https://github.com/081dikeh/FurniDan',
  },
  {
    id: 7,
    slug: 'portfolio',
    image: project2,
    stack: 'React, TypeScript',
    title: 'Portfolio',
    subtitle: 'Personal developer portfolio designed and built from scratch — scroll animations, typewriter effect, contact form, and live project showcases.',
    liveLink: 'https://my-portfolio-orpin-ten-19.vercel.app/',
    githubLink: 'https://github.com/081dikeh/MyPortfolio',
  },
  {
    id: 8,
    slug: 'tefem',
    image: project5,
    stack: 'HTML, CSS, JavaScript',
    title: 'Tefem',
    subtitle: 'Campus ambassador programme website for a student empowerment initiative — programme details, eligibility criteria, and a clear application CTA.',
    liveLink: 'https://081dikeh.github.io/tefem-II/',
    githubLink: 'https://github.com/081dikeh/tefem-II',
  },
  {
    id: 6,
    slug: 'metabnb',
    image: project4,
    stack: 'React',
    title: 'MetaBNB',
    subtitle: 'Metaverse real estate booking platform — browse and reserve virtual properties with a Web3 aesthetic and room-browsing UI inspired by Airbnb.',
    liveLink: 'https://metabnb-app-eosin.vercel.app/',
    githubLink: 'https://github.com/081dikeh/MetabnbApp',
  },
]

export const featuredProject = projects.find(p => p.featured) ?? projects[0]
export const otherProjects = projects.filter(p => !p.featured)