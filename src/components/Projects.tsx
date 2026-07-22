import { projects } from '../data/projects'
import { ExternalLink, Code, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useInView } from '../hooks/useInView'
import StackPills from './StackPills'

// First project is featured, next 3 go in the grid
const [featured, ...rest] = projects
const gridProjects = rest.slice(0, 3)

export default function Projects() {
  const { ref: titleRef,    inView: titleVisible    } = useInView()
  const { ref: featuredRef, inView: featuredVisible } = useInView({ threshold: 0.08 })
  const { ref: gridRef,     inView: gridVisible     } = useInView({ threshold: 0.05 })

  return (
    <section className='font-fira mt-32 sm:mt-40 md:mt-52'>

      {/* Title row */}
      <div ref={titleRef} className='flex items-center justify-between mb-10'>
        <h2 className={`text-3xl text-white flex items-center font-[500]
          ${titleVisible ? 'opacity-0 animate-fade-in-left' : 'opacity-0'}`}>
          <span className='text-brand-700'>#</span>Projects
          <span className='ring-1 ring-brand-700 w-0 md:w-40 lg:w-64 h-[0px] inline-block ml-6' />
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

      {/* ── Featured project (FaithLibrary) ─────────────────────────── */}
      <div
        ref={featuredRef}
        className={`mb-5 ring-1 ring-brand-700 group card-lift overflow-hidden
          ${featuredVisible ? 'opacity-0 animate-fade-in-up' : 'opacity-0'}`}
      >
        <div className='flex flex-col md:flex-row'>

          {/* Left: info */}
          <div className='md:w-2/5 p-7 flex flex-col justify-between gap-6 bg-[#1e2127]/60'>
            <div className='flex flex-col gap-4'>
              <span className='featured-badge'>Featured Project</span>
              <h3 className='text-2xl text-white font-bold'>{featured.title}</h3>
              <p className='text-brand-500 text-sm leading-relaxed'>{featured.subtitle}</p>
            </div>
            <div className='flex flex-col gap-4'>
              <StackPills stack={featured.stack} />
              <div className='flex gap-3'>
                <a
                  href={featured.liveLink}
                  target='_blank' rel='noopener noreferrer'
                  className='text-white ring-1 ring-brand-700 hover:bg-brand-700 transition-colors duration-300 py-2 px-5 text-sm flex items-center gap-2 btn-lift'
                >
                  <ExternalLink size={14} /> Live
                </a>
                <a
                  href={featured.githubLink}
                  target='_blank' rel='noopener noreferrer'
                  className='text-white ring-1 ring-brand-500 hover:ring-brand-700 transition-colors duration-300 py-2 px-5 text-sm flex items-center gap-2 btn-lift'
                >
                  <Code size={14} /> GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Right: image with overlay */}
          <div className='md:w-3/5 overflow-hidden relative'>
            <img
              src={featured.image}
              alt={featured.title}
              className='w-full h-56 md:h-full object-cover object-top group-hover:scale-105 transition-transform duration-500'
            />
            <div className='project-overlay'>
              <span className='text-white text-sm font-fira flex items-center gap-2'>
                View Project <ArrowRight size={14} />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Secondary cards grid ─────────────────────────────────────── */}
      <div ref={gridRef} className='grid grid-cols-1 sm:grid-cols-3 gap-5'>
        {gridProjects.map((project, i) => (
          <div
            key={project.id}
            className={`ring-1 ring-brand-500 flex flex-col hover:ring-brand-700 transition-all duration-300 group card-lift overflow-hidden
              ${gridVisible ? 'opacity-0 animate-fade-in-up' : 'opacity-0'}`}
            style={{ animationDelay: `${i * 110}ms` }}
          >
            <div className='overflow-hidden relative'>
              <img
                src={project.image}
                alt={project.title}
                className='w-full h-40 object-cover object-top group-hover:scale-105 transition-transform duration-500'
              />
              <div className='project-overlay'>
                <span className='text-white text-xs font-fira flex items-center gap-1'>
                  View Project <ArrowRight size={12} />
                </span>
              </div>
            </div>

            <div className='p-4 flex flex-col gap-3 flex-1 justify-between'>
              <div>
                <h3 className='text-base text-white font-semibold mb-1'>{project.title}</h3>
                <p className='text-xs text-brand-500 leading-relaxed line-clamp-3'>{project.subtitle}</p>
              </div>
              <div className='flex flex-col gap-3'>
                <StackPills stack={project.stack} max={3} />
                <div className='flex gap-2'>
                  <a
                    href={project.liveLink}
                    target='_blank' rel='noopener noreferrer'
                    className='text-white ring-1 ring-brand-700 hover:bg-brand-700 transition-colors duration-300 py-1 px-3 text-xs flex items-center gap-1 btn-lift'
                  >
                    <ExternalLink size={12} /> Live
                  </a>
                  <a
                    href={project.githubLink}
                    target='_blank' rel='noopener noreferrer'
                    className='text-white ring-1 ring-brand-500 hover:ring-brand-700 transition-colors duration-300 py-1 px-3 text-xs flex items-center gap-1 btn-lift'
                  >
                    <Code size={12} /> GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
