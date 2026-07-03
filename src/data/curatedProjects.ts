import faithlibraryHero from '../assets/projectAssets/faithlibraryHero.png'
import notationHero from '../assets/projectAssets/notationHero.png'
import project1 from '../assets/projectAssets/project1.png'
import project2 from '../assets/projectAssets/project2.png'
import project3 from '../assets/projectAssets/project3.png'
import project4 from '../assets/projectAssets/project4.png'

export type CuratedProject = {
    id: number,
    image: string,
    stack: string,
    title: string,
    subtitle: string,
    liveLink: string,
    githubLink: string,
    description: string,
}

export const curatedProjects: CuratedProject[] = [
    {   
        id: 1,
        image: faithlibraryHero,
        stack: 'Next.js, TypeScript, Tailwind CSS, Supabase, Vercel',
        title: 'FaithLibrary',
        subtitle: 'Digital choir score library & notation platform',
        description: 'A comprehensive platform for managing and sharing digital choir scores with collaborative features and advanced notation support.',
        liveLink: "https://faith-library.vercel.app/",
        githubLink: "https://github.com/081dikeh/FaithLibrary",
    },
    {   
        id: 2,
        image: notationHero,
        stack: 'React, Tailwind CSS, Music Theory',
        title: 'FaithScore',
        subtitle: 'Notation app for musicians',
        description: 'An intuitive notation app designed for composers and musicians to create, edit, and share musical scores digitally.',
        liveLink: "https://faithscore-6c35.vercel.app/",
        githubLink: "https://github.com/081dikeh/Faithscore",
    },
    {   
        id: 3,
        image: project1,
        stack: 'React, Tailwind CSS',
        title: 'Fina Inc',
        subtitle: 'Financial Dashboard',
        description: 'A modern financial dashboard showcasing data visualization, transaction management, and analytics capabilities.',
        liveLink: "https://fina-inc.vercel.app/",
        githubLink: "https://github.com/081dikeh/FinaInc",
    },
    {   
        id: 4,
        image: project3,
        stack: 'React, Tailwind CSS, E-commerce',
        title: 'Furnidan',
        subtitle: 'Premium furniture marketplace',
        description: 'An elegant e-commerce platform showcasing premium furniture with advanced filtering and product discovery features.',
        liveLink: "https://furni-dan-7jn6.vercel.app/",
        githubLink: "https://github.com/081dikeh/FurniDan",
    },
    {   
        id: 5,
        image: project4,
        stack: 'React, Tailwind CSS, Web3',
        title: 'MetaBNB',
        subtitle: 'Metaverse booking platform',
        description: 'A Web3-ready booking platform for discovering and reserving unique metaverse properties and experiences.',
        liveLink: "https://metabnb-app-eosin.vercel.app/",
        githubLink: "https://github.com/081dikeh/MetabnbApp",
    },
    {   
        id: 6,
        image: project2,
        stack: 'React, TypeScript',
        title: 'Portfolio',
        subtitle: 'Personal portfolio site',
        description: 'A polished portfolio showcasing design and development skills with smooth animations and modern interactions.',
        liveLink: "https://my-portfolio-orpin-ten-19.vercel.app/",
        githubLink: "https://github.com/081dikeh/MyPortfolio",
    },
]
