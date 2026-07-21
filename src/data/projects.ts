import project1 from '../assets/projectAssets/project1.png'
import project2 from '../assets/projectAssets/project2.png'
import project3 from '../assets/projectAssets/project3.png'
import project4 from '../assets/projectAssets/project4.png'
import project5 from '../assets/projectAssets/project5.png'
import project6 from '../assets/projectAssets/project6.png'
import faithbeatHero from '../assets/projectAssets/faithbeatHero.png'
import notationHero from '../assets/projectAssets/notationHero.png'
import faithlibraryHero from '../assets/projectAssets/faithlibraryHero.png'
import stWilliamImg from '../assets/projectAssets/St William Parish-img.png'

type Project = {
    id: number,
    image: string,
    stack: string,
    title: string,
    subtitle: string,
    liveLink: string,
    githubLink: string,
}

export const projects: Project[] = [
    {
        id: 1,
        image: faithlibraryHero,
        stack: 'Next.js, TypeScript, Tailwind CSS, Supabase, Vercel',
        title: 'FaithLibrary',
        subtitle: 'A full-stack choir management platform where music directors upload scores and choir members access sheet music by voice part. Built with Next.js, Supabase for auth and file storage, and deployed on Vercel.',
        liveLink: "https://faith-library.vercel.app/",
        githubLink: "https://github.com/081dikeh/FaithLibrary",
    },
    {
        id: 2,
        image: notationHero,
        stack: 'ReactJs, Tailwind CSS',
        title: 'FaithScore',
        subtitle: 'A browser-based music notation app that renders sheet music in real time using the Vexflow library. Built for choir musicians who need a lightweight, no-install alternative to desktop notation software.',
        liveLink: "https://faithscore-6c35.vercel.app/",
        githubLink: "https://github.com/081dikeh/Faithscore",
    },
    {
        id: 5,
        image: project1,
        stack: 'ReactJs, Tailwind CSS',
        title: 'Fina Inc',
        subtitle: 'A financial analytics dashboard with interactive charts, revenue breakdowns, and customer growth tracking. Demonstrates complex data visualisation built cleanly with React and Recharts.',
        liveLink: "https://fina-inc.vercel.app/",
        githubLink: "https://github.com/081dikeh/FinaInc",
    },
    {
        id: 4,
        image: stWilliamImg,
        stack: 'ReactJs, Tailwind CSS',
        title: 'St. William Parish',
        subtitle: 'A community web portal for a Catholic parish, featuring service schedules, announcements, and ministry information. Built to give the congregation a clean, accessible digital home.',
        liveLink: "https://st-edward-parish.vercel.app/",
        githubLink: "https://github.com/081dikeh/StEdward-ParishApp",
    },
    {
        id: 3,
        image: project3,
        stack: 'ReactJs',
        title: 'Furnidan',
        subtitle: 'An e-commerce landing page for a premium furniture brand, focused on visual storytelling and a conversion-friendly layout. Features product showcases, category browsing, and a clean checkout flow.',
        liveLink: "https://furni-dan-7jn6.vercel.app/",
        githubLink: "https://github.com/081dikeh/FurniDan",
    },
    {
        id: 11,
        image: faithbeatHero,
        stack: 'Next.js, TypeScript, Tailwind CSS, Neon Postgres, Neon Auth, OpenAI API, Vercel',
        title: 'Faithbeat',
        subtitle: 'AI-powered hymn-writing platform for African church worship that generates original hymns in English, Igbo, Yoruba, and Hausa. Features SATB choral arrangements, playable sheet music, PDF export, and a public hymn discovery feed. Built with Next.js, Neon, and Vercel.',
        liveLink: "https://faithbeat.vercel.app/",
        githubLink: "https://github.com/081dikeh/Faithbeat",
    },
    {
        id: 9,
        image: project6,
        stack: 'HTML, CSS and JavaScript',
        title: 'DaniD Shop',
        subtitle: 'A shopping cart app with add-to-cart functionality, quantity controls, and a live price total. Built in vanilla JavaScript to demonstrate core DOM manipulation and state management without a framework.',
        liveLink: "https://dani-cart-shop.vercel.app/",
        githubLink: "https://github.com/081dikeh/daniCartShop",
    },
    {
        id: 7,
        image: project2,
        stack: 'ReactJs, TypeScript',
        title: 'Portfolio',
        subtitle: 'My personal developer portfolio — designed and built from scratch with React and TypeScript. Features scroll animations, a typewriter effect, a working contact form, and 10 live project showcases.',
        liveLink: "https://my-portfolio-orpin-ten-19.vercel.app/",
        githubLink: "https://github.com/081dikeh/MyPortfolio",
    },
    {
        id: 8,
        image: project5,
        stack: 'HTML, CSS and JavaScript',
        title: 'Tefem',
        subtitle: 'A campus ambassador programme website for a student empowerment initiative. Showcases programme details, eligibility criteria, and a clear application CTA — built in vanilla HTML, CSS and JavaScript.',
        liveLink: "https://081dikeh.github.io/tefem-II/",
        githubLink: "https://github.com/081dikeh/tefem-II",
    },
    {
        id: 6,
        image: project4,
        stack: 'ReactJs',
        title: 'MetaBNB',
        subtitle: 'A metaverse real estate booking platform where users can browse and reserve virtual properties. Built with a Web3 aesthetic and a room-browsing UI inspired by Airbnb.',
        liveLink: "https://metabnb-app-eosin.vercel.app/",
        githubLink: "https://github.com/081dikeh/MetabnbApp",
    },
    
]