import { projects } from "../data/projects"


    
export default function ProjectsPage() {
    return (
        <section className="font-fira mt-24 mb-24">
            <div className="mb-12">
                <h2 className="text-3xl text-white flex items-center font-bold"><span className="text-brand-700">/</span>Projects</h2>
                <p className="text-white">List of all projects</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-fira">
                {projects.map((project) => (
                    <div key={project.id} className="ring-1 ring-brand-500">
                        <div className="w-full">
                            <img src={project.image} alt="" className="w-full h-[201px]" />
                        </div>
                        <div>
                            <p className="text-brand-500 p-2 border-b-2 border-t-2 border-brand-500 text-base">{project.stack}</p>
                        </div>
                        <div className="p-4 flex flex-col justify-between gap-4">
                            <h3 className="text-2xl text-white">{project.title}</h3>
                            <h4 className="text-base text-brand-500">{project.subtitle}</h4>
                            <div className="flex gap-4">
                                <button className="text-white ring-1 ring-brand-700 hover:bg-brand-700 transition-colors duration-300 w-full sm:w-auto py-2 px-4"><a href={project.liveLink} target="blank">Live</a></button>
                                <button className="text-white ring-1 ring-brand-700 hover:bg-brand-700 transition-colors duration-300 w-full sm:w-auto py-2 px-4"><a href={project.githubLink} target="blank">Github</a></button>
                            </div>
                            
                        </div>
                    </div>
                ))}
            </div>

        </section>
    )

}

