import project1 from '../assets/projectAssets/project1.png'
import project2 from '../assets/projectAssets/project2.png'
import project3 from '../assets/projectAssets/project3.png'
import project4 from '../assets/projectAssets/project4.png'
import project5 from '../assets/projectAssets/project5.png'
import project6 from '../assets/projectAssets/Slate — port.png'
import faithbeatHero from '../assets/projectAssets/faithbeatHero.png'
import notationHero from '../assets/projectAssets/notationHero.png'
import faithlibraryHero from '../assets/projectAssets/FaithLibrary — port.png'
import stWilliamImg from '../assets/projectAssets/St William Parish-img.png'


export type Project = {
  id: number
  image: string
  stack: string
  title: string
  subtitle: string
  liveLink: string
  githubLink: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: 1,
    image: faithlibraryHero,
    stack: 'Next.js, TypeScript, Tailwind CSS, Supabase, Vercel',
    title: 'FaithLibrary',
    subtitle: 'Full-stack choir management platform where music directors upload scores and choir members access sheet music by voice part. Built with Next.js, Supabase auth & storage, deployed on Vercel.',
    liveLink: 'https://faith-library.vercel.app/',
    githubLink: 'https://github.com/081dikeh/FaithLibrary',
    featured: true,
  },
  {
    id: 2,
    image: notationHero,
    stack: 'React, Tailwind CSS, Vexflow',
    title: 'FaithScore',
    subtitle: 'Browser-based music notation app that renders sheet music in real time using Vexflow. A lightweight, no-install alternative to desktop notation software for choir musicians.',
    liveLink: 'https://faithscore-6c35.vercel.app/',
    githubLink: 'https://github.com/081dikeh/Faithscore',
  },
  {
    id: 5,
    image: project1,
    stack: 'React, Tailwind CSS, Recharts',
    title: 'Fina Dashboard',
    subtitle: 'Financial analytics dashboard with interactive charts, revenue breakdowns, and customer growth tracking. Complex data visualisation built cleanly with React and Recharts.',
    liveLink: 'https://fina-inc.vercel.app/',
    githubLink: 'https://github.com/081dikeh/FinaInc',
  },
  {
    id: 4,
    image: stWilliamImg,
    stack: 'React, Tailwind CSS',
    title: 'St. William Parish',
    subtitle: 'Community web portal for a Catholic parish — service schedules, announcements, and ministry information. A clean, accessible digital home for the congregation.',
    liveLink: 'https://st-edward-parish.vercel.app/',
    githubLink: 'https://github.com/081dikeh/StEdward-ParishApp',
  },
  {
    id: 11,
    image: faithbeatHero,
    stack: 'Next.js, TypeScript, Tailwind CSS, Neon Postgres, Neon Auth, OpenAI API, Vercel',
    title: 'Faithbeat',
    subtitle: 'AI-powered hymn-writing platform for African church worship — generates original hymns in English, Igbo, Yoruba, and Hausa with SATB choral arrangements, playable sheet music, and PDF export.',
    liveLink: 'https://faithbeat.vercel.app/',
    githubLink: 'https://github.com/081dikeh/Faithbeat',
  },
  {
    id: 3,
    image: project3,
    stack: 'React',
    title: 'Furnidan',
    subtitle: 'E-commerce landing page for a premium furniture brand — visual storytelling and conversion-friendly layout with product showcases and category browsing.',
    liveLink: 'https://furni-dan-7jn6.vercel.app/',
    githubLink: 'https://github.com/081dikeh/FurniDan',
  },
  {
    id: 9,
    image: project6,
    stack: 'HTML, CSS, JavaScript',
    title: 'DaniD Shop',
    subtitle: 'Shopping cart app with add-to-cart, quantity controls, and live price totals. Built in vanilla JavaScript to demonstrate core DOM manipulation without a framework.',
    liveLink: 'https://dani-cart-shop.vercel.app/',
    githubLink: 'https://github.com/081dikeh/daniCartShop',
  },
  {
    id: 7,
    image: project2,
    stack: 'React, TypeScript',
    title: 'Portfolio',
    subtitle: 'Personal developer portfolio designed and built from scratch — scroll animations, typewriter effect, contact form, and live project showcases.',
    liveLink: 'https://my-portfolio-orpin-ten-19.vercel.app/',
    githubLink: 'https://github.com/081dikeh/MyPortfolio',
  },
  {
    id: 8,
    image: project5,
    stack: 'HTML, CSS, JavaScript',
    title: 'Tefem',
    subtitle: 'Campus ambassador programme website for a student empowerment initiative — programme details, eligibility criteria, and a clear application CTA.',
    liveLink: 'https://081dikeh.github.io/tefem-II/',
    githubLink: 'https://github.com/081dikeh/tefem-II',
  },
  {
    id: 6,
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
