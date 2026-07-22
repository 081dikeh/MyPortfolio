import { projects } from '../data/projects'
import { ExternalLink, Code, ArrowRight } from 'lucide-react'
import { useInView } from '../hooks/useInView'
import StackPills from '../components/StackPills'

const [featured, ...rest] = projects

export default function ProjectsPage() {
  const { ref: headerRef,   inView: headerVisible   } = useInView()
  const { ref: featuredRef, inView: featuredVisible } = useInView({ threshold: 0.05 })
  const { ref: gridRef,     inView: gridVisible     } = useInView({ threshold: 0.03 })

  return (
    <div className='page-enter'>
      <section className='font-fira mt-24 mb-24 mx-4 md:mx-16 lg:mx-16 xl:mx-32 2xl:mx-44'>

        {/* Header */}
        <div ref={headerRef} className='mb-10'>
          <h2 className={`text-3xl text-white flex items-center font-bold
            ${headerVisible ? 'opacity-0 animate-fade-in-up' : 'opacity-0'}`}>
            <span className='text-brand-700'>/</span>Projects
          </h2>
          <p className={`text-brand-500 text-sm mt-1
            ${headerVisible ? 'opacity-0 animate-fade-in-up' : 'opacity-0'}`}
            style={{ animationDelay: '100ms' }}>
            {projects.length} projects — all live, all mine
          </p>
        </div>

        {/* ── Featured project ────────────────────────────────────────── */}
        <div
          ref={featuredRef}
          className={`mb-8 ring-1 ring-brand-700 group card-lift overflow-hidden
            ${featuredVisible ? 'opacity-0 animate-fade-in-up' : 'opacity-0'}`}
        >
          <div className='flex flex-col lg:flex-row'>
            {/* Info */}
            <div className='lg:w-2/5 p-8 flex flex-col justify-between gap-6 bg-[#1e2127]/60'>
              <div className='flex flex-col gap-4'>
                <span className='featured-badge'>Featured Project</span>
                <h3 className='text-2xl text-white font-bold'>{featured.title}</h3>
                <p className='text-brand-500 text-sm leading-relaxed'>{featured.subtitle}</p>
              </div>
              <div className='flex flex-col gap-4'>
                <StackPills stack={featured.stack} />
                <div className='flex gap-3 flex-wrap'>
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
            {/* Image */}
            <div className='lg:w-3/5 overflow-hidden relative'>
              <img
                src={featured.image}
                alt={featured.title}
                className='w-full h-60 lg:h-full object-cover object-top group-hover:scale-105 transition-transform duration-500'
              />
              <div className='project-overlay'>
                <span className='text-white text-sm font-fira flex items-center gap-2'>
                  View Project <ArrowRight size={14} />
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Rest of projects ────────────────────────────────────────── */}
        <div ref={gridRef} className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
          {rest.map((project, i) => (
            <div
              key={project.id}
              className={`ring-1 ring-brand-500 flex flex-col hover:ring-brand-700 transition-all duration-300 group card-lift overflow-hidden
                ${gridVisible ? 'opacity-0 animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <div className='overflow-hidden relative'>
                <img
                  src={project.image}
                  alt={project.title}
                  className='w-full h-44 object-cover object-top group-hover:scale-105 transition-transform duration-500'
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
                  <StackPills stack={project.stack} max={4} />
                  <div className='flex gap-2 flex-wrap'>
                    <a
                      href={project.liveLink}
                      target='_blank' rel='noopener noreferrer'
                      className='text-white ring-1 ring-brand-700 hover:bg-brand-700 transition-colors duration-300 py-1.5 px-4 text-xs flex items-center gap-1.5 btn-lift'
                    >
                      <ExternalLink size={12} /> Live
                    </a>
                    <a
                      href={project.githubLink}
                      target='_blank' rel='noopener noreferrer'
                      className='text-white ring-1 ring-brand-500 hover:ring-brand-700 transition-colors duration-300 py-1.5 px-4 text-xs flex items-center gap-1.5 btn-lift'
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
    </div>
  )
}
