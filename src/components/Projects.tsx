import { projects } from '../data/projects'
import { ExternalLink, Code, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useInView } from '../hooks/useInView'

const featured = projects.slice(0, 4)

export default function Projects() {
  const { ref: titleRef, inView: titleVisible } = useInView()
  const { ref: gridRef,  inView: gridVisible  } = useInView({ threshold: 0.05 })

  return (
    <section className='font-fira mt-32 sm:mt-40 md:mt-52'>

      {/* Title */}
      <div ref={titleRef} className='flex items-center justify-between mb-10'>
        <h2 className={`text-3xl text-white flex items-center font-[500]
          ${titleVisible ? 'opacity-0 animate-fade-in-left' : 'opacity-0'}`}>
          <span className='text-brand-700'>#</span>Projects
          <span className='ring-1 ring-brand-700 w-0 md:w-40 lg:w-64 h-[0px] inline-block ml-6'></span>
        </h2>
        <Link
          to='/projects'
          className={`text-brand-500 text-sm hover:text-brand-700 transition-colors flex items-center gap-1 whitespace-nowrap
            ${titleVisible ? 'opacity-0 animate-fade-in-right' : 'opacity-0'}`}
          style={{ animationDelay: '150ms' }}
        >
          View all <ArrowRight size={14} />
        </Link>
      </div>

      {/* Cards grid — staggered */}
      <div ref={gridRef} className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
        {featured.map((project, i) => (
          <div
            key={project.id}
            className={`ring-1 ring-brand-500 flex flex-col hover:ring-brand-700 transition-all duration-300 group card-lift
              ${gridVisible ? 'opacity-0 animate-fade-in-up' : 'opacity-0'}`}
            style={{ animationDelay: `${i * 110}ms` }}
          >
            <div className='overflow-hidden'>
              <img
                src={project.image}
                alt={project.title}
                className='w-full h-44 object-cover object-top group-hover:scale-105 transition-transform duration-500'
              />
            </div>

            <p className='text-brand-500 px-3 py-2 border-t border-b border-brand-500 text-xs'>
              {project.stack}
            </p>

            <div className='p-4 flex flex-col gap-3 flex-1 justify-between'>
              <div>
                <h3 className='text-lg text-white font-semibold'>{project.title}</h3>
                <p className='text-sm text-brand-500 mt-1'>{project.subtitle}</p>
              </div>
              <div className='flex gap-3'>
                <a
                  href={project.liveLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-white ring-1 ring-brand-700 hover:bg-brand-700 transition-colors duration-300 py-1.5 px-4 text-sm flex items-center gap-2'
                >
                  <ExternalLink size={14} /> Live
                </a>
                <a
                  href={project.githubLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-white ring-1 ring-brand-500 hover:ring-brand-700 transition-colors duration-300 py-1.5 px-4 text-sm flex items-center gap-2'
                >
                  <Code size={14} /> GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
