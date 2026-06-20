import { projects } from '../data/projects'
import { ExternalLink, Code } from 'lucide-react'
import { useInView } from '../hooks/useInView'

export default function ProjectsPage() {
  const { ref: headerRef, inView: headerVisible } = useInView()
  const { ref: gridRef,   inView: gridVisible   } = useInView({ threshold: 0.04 })

  return (
    <div className='page-enter'>
      <section className='font-fira mt-24 mb-24 mx-4 md:mx-16 lg:mx-16 xl:mx-32 2xl:mx-44'>

        <div ref={headerRef} className='mb-10'>
          <h2 className={`text-3xl text-white flex items-center font-bold
            ${headerVisible ? 'opacity-0 animate-fade-in-up' : 'opacity-0'}`}>
            <span className='text-brand-700'>/</span>Projects
          </h2>
          <p className={`text-brand-500 text-sm mt-1
            ${headerVisible ? 'opacity-0 animate-fade-in-up' : 'opacity-0'}`}
            style={{ animationDelay: '100ms' }}>
            All projects — {projects.length} total
          </p>
        </div>

        <div ref={gridRef} className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
          {projects.map((project, i) => (
            <div
              key={project.id}
              className={`ring-1 ring-brand-500 flex flex-col hover:ring-brand-700 transition-all duration-300 group card-lift
                ${gridVisible ? 'opacity-0 animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${i * 80}ms` }}
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
                <div className='flex gap-3 flex-wrap'>
                  <a
                    href={project.liveLink}
                    target='_blank' rel='noopener noreferrer'
                    className='text-white ring-1 ring-brand-700 hover:bg-brand-700 transition-colors duration-300 py-1.5 px-4 text-sm flex items-center gap-2'
                  >
                    <ExternalLink size={14} /> Live
                  </a>
                  <a
                    href={project.githubLink}
                    target='_blank' rel='noopener noreferrer'
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
    </div>
  )
}
