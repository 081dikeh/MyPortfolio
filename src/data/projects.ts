import project1 from '../assets/projectAssets/project1.png'
import project2 from '../assets/projectAssets/project2.png'
import project3 from '../assets/projectAssets/project3.png'
import project4 from '../assets/projectAssets/project4.png'
import project5 from '../assets/projectAssets/project5.png'
import project6 from '../assets/projectAssets/project6.png'
import project7 from '../assets/projectAssets/project7.png'
import project8 from '../assets/projectAssets/project8.png'
import project9 from '../assets/projectAssets/project9.png'

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
        image: project1,
        stack: 'ReactJs, Tailwind CSS ',
        title: 'Fina Inc',
        subtitle: 'Dashboard',
        liveLink: "https://fina-inc.vercel.app/",
        githubLink: "https://github.com/081dikeh/FinaInc",
    },
    {   
        id: 2,
        image: project3,
        stack: 'ReactJs',
        title: 'Furnidan',
        subtitle: 'Where the best furniture meets the best eyes',
        liveLink: "https://furni-dan-7jn6.vercel.app/",
        githubLink: "https://github.com/081dikeh/FurniDan",
    },
    {   
        id: 3,
        image: project4,
        stack: 'ReactJs',
        title: 'MetaBNB',
        subtitle: 'Book a room',
        liveLink: "https://metabnb-app-eosin.vercel.app/",
        githubLink: "https://github.com/081dikeh/MetabnbApp",
    },
    {   
        id: 4,
        image: project2,
        stack: 'ReactJs, TypeScript',
        title: 'Portfolio',
        subtitle: 'Meet me',
        liveLink: "https://my-portfolio-orpin-ten-19.vercel.app/",
        githubLink: "https://github.com/081dikeh/MyPortfolio",
    },
    {   
        id: 5,
        image: project5,
        stack: 'HTML, CSS and JavaScript',
        title: 'Tefem',
        subtitle: 'Student empowerment',
        liveLink: "https://081dikeh.github.io/tefem-II/",
        githubLink: "https://github.com/081dikeh/tefem-II",
    },
    {   
        id: 6,
        image: project6,
        stack: 'HTML, CSS and JavaScript',
        title: 'DaniD Shop',
        subtitle: 'What do we know!!',
        liveLink: "https://dani-cart-shop.vercel.app/",
        githubLink: "https://github.com/081dikeh/daniCartShop",
    },
    {   
        id: 7,
        image: project7,
        stack: 'HTML, CSS',
        title: 'Danik Project',
        subtitle: 'What do we know!!',
        liveLink: "https://081dikeh.github.io/danik-project/",
        githubLink: "https://github.com/081dikeh/danik-project",
    },
    {   
        id: 8,
        image: project8,
        stack: 'ReactJs, Tailwind CSS',
        title: 'Tailwind Portfolio',
        subtitle: 'Meet me',
        liveLink: "https://first-react-portfolio-three.vercel.app/",
        githubLink: "https://github.com/081dikeh/first-react-portfolio-",
    },
    {   
        id: 9,
        image: project9,
        stack: 'HTML, CSS and JavaScript',
        title: 'Hair Studio',
        subtitle: 'Look Good',
        liveLink: "https://081dikeh.github.io/barb-websie/",
        githubLink: "https://github.com/081dikeh/barb-websie",
    }
]