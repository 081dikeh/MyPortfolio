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
    id: 2,
    slug: 'faithscore',
    image: faithScoreFrontpage,
    stack: 'React, Tailwind CSS, Vexflow',
    title: 'FaithScore',
    subtitle: 'Create and rehearse music in staff notation or tonic sol-fa, with two-way conversion, playback, lyrics, and print-ready scores.',
    summary: 'FaithScore keeps staff notation and tonic sol-fa connected to the same score, rather than treating them as separate documents.',
    problem: 'Choirs that use both staff notation and tonic sol-fa need a reliable way to move between the two. Re-entering a score by hand takes extra work and can leave the versions out of sync.',
    approach: 'I modeled scores as structured musical data and used that representation to power notation rendering, two-way conversion, playback, lyrics, and multiple parts.',
    features: [
      'Staff notation rendered from structured score data',
      'Two-way conversion between staff notation and tonic sol-fa',
      'Playback of entered music',
      'Support for lyrics and multiple parts',
      'Print-ready score output',
    ],
    result: 'The editor supports score creation, conversion between both notation systems, rehearsal playback, and print-ready output in one workflow.',
    liveLink: 'https://faithscorewebsite.vercel.app/',
    githubLink: 'https://github.com/081dikeh/Faithscore',
    featured: true,
  },
  {
    id: 1,
    slug: 'faithlibrary',
    image: faithlibraryHero,
    stack: 'Next.js, TypeScript, Tailwind CSS, Supabase, Vercel',
    title: 'FaithLibrary',
    subtitle: 'A shared, searchable choir-score library for uploading, organizing, reading, and saving music.',
    summary: 'FaithLibrary gives choir members and music directors one place to find and manage scores.',
    problem: 'When scores live in PDFs, messaging apps, and personal folders, members have to know where a file was shared before they can find it.',
    approach: 'I built an authenticated library with uploads, search and filtering, an in-browser PDF viewer, bookmarks, and collections, using Next.js, TypeScript, and Supabase.',
    features: [
      'Authenticated accounts for music directors and choir members',
      'Uploads and organization for scores and PDFs',
      'Filtering and search across the library',
      'In-browser PDF viewing',
      'Bookmarks and collections for saved or grouped scores',
    ],
    result: 'Music directors can add and organize scores; members can search the library, read PDFs, and save scores for later.',
    liveLink: 'https://faith-library.vercel.app/',
    githubLink: 'https://github.com/081dikeh/FaithLibrary',
  },
  {
    id: 5,
    slug: 'fina-dashboard',
    image: project1,
    stack: 'React, Tailwind CSS, Recharts',
    title: 'Fina Dashboard',
    subtitle: 'A financial dashboard for exploring revenue breakdowns and customer growth through interactive charts.',
    liveLink: 'https://fina-inc.vercel.app/',
    githubLink: 'https://github.com/081dikeh/FinaInc',
  },
  {
    id: 4,
    slug: 'st-william-parish',
    image: stWilliamImg,
    stack: 'React, Tailwind CSS',
    title: 'St. William Parish',
    subtitle: 'A parish website that brings service schedules, announcements, and ministry information together for the community.',
    liveLink: 'https://st-edward-parish.vercel.app/',
    githubLink: 'https://github.com/081dikeh/StEdward-ParishApp',
  },
  {
    id: 11,
    slug: 'faithbeat',
    image: faithbeatHero,
    stack: 'Next.js, TypeScript, Tailwind CSS, Neon Postgres, Neon Auth, OpenAI API, Vercel',
    title: 'Faithbeat',
    subtitle: 'Draft hymns in English, Igbo, Yoruba, or Hausa, then create SATB arrangements, play the score, and export a PDF.',
    summary: 'Faithbeat connects hymn drafting with the steps needed to prepare a score for choir use.',
    problem: 'Turning a hymn idea into choir-ready music can involve separate tools for lyrics, vocal parts, notation, playback, and sharing.',
    approach: 'I connected AI-assisted hymn writing to SATB arrangements, playable sheet music, and PDF export in one app, using Next.js, TypeScript, Neon, and the OpenAI API.',
    features: [
      'Generate original hymns in English, Igbo, Yoruba, and Hausa',
      'Create SATB choral arrangements',
      'View and play sheet music in the browser',
      'Export scores as PDFs',
    ],
    result: 'The implemented flow takes a hymn from an AI-assisted draft to a playable SATB score and a downloadable PDF.',
    liveLink: 'https://faithbeat.vercel.app/',
    githubLink: 'https://github.com/081dikeh/Faithbeat',
  },
  {
    id: 9,
    slug: 'danid-shop',
    image: project6,
    stack: 'HTML, CSS, JavaScript',
    title: 'DaniD Shop',
    subtitle: 'A vanilla JavaScript shopping cart with add/remove controls, quantity updates, and live price totals.',
    liveLink: 'https://dani-cart-shop.vercel.app/',
    githubLink: 'https://github.com/081dikeh/daniCartShop',
  },
  {
    id: 3,
    slug: 'furnidan',
    image: project3,
    stack: 'React',
    title: 'Furnidan',
    subtitle: 'A furniture storefront concept with product showcases and category browsing.',
    liveLink: 'https://furni-dan-7jn6.vercel.app/',
    githubLink: 'https://github.com/081dikeh/FurniDan',
  },
  {
    id: 7,
    slug: 'portfolio',
    image: project2,
    stack: 'React, TypeScript',
    title: 'Portfolio',
    subtitle: 'A personal portfolio featuring project showcases, scroll animations, a typewriter effect, and a contact form.',
    liveLink: 'https://my-portfolio-orpin-ten-19.vercel.app/',
    githubLink: 'https://github.com/081dikeh/MyPortfolio',
  },
  {
    id: 8,
    slug: 'tefem',
    image: project5,
    stack: 'HTML, CSS, JavaScript',
    title: 'Tefem',
    subtitle: 'A programme website explaining a student initiative, its eligibility criteria, and how to apply.',
    liveLink: 'https://081dikeh.github.io/tefem-II/',
    githubLink: 'https://github.com/081dikeh/tefem-II',
  },
  {
    id: 6,
    slug: 'metabnb',
    image: project4,
    stack: 'React',
    title: 'MetaBNB',
    subtitle: 'A metaverse property-booking interface for browsing and reserving virtual spaces.',
    liveLink: 'https://metabnb-app-eosin.vercel.app/',
    githubLink: 'https://github.com/081dikeh/MetabnbApp',
  },
]

export const featuredProject = projects.find(p => p.featured) ?? projects[0]
export const otherProjects = projects.filter(p => !p.featured)