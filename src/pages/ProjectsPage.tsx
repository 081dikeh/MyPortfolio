import { projects } from "../data/projects"
import { ExternalLink, Code } from 'lucide-react';
import { useState } from 'react';


    
export default function ProjectsPage() {
    const [isLoading, setIsLoading] = useState(true);
    
    return (
        <section className="font-fira mt-24 mb-24 mx-4 md:mx-16 lg:mx-16 xl:mx-32 2xl:mx-44">
            <div className="mb-12">
                <h2 className="text-3xl text-white flex items-center font-bold"><span className="text-brand-700">/</span>Projects</h2>
                <p className="text-white">List of all projects</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-fira">
                {projects.map((project) => (
                    <div key={project.id} className="ring-1 ring-brand-500 overflow-hidden">
                        <div className="w-full">
                            <div className="relative bg-gray-100">
                                {isLoading && (
                                <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
                                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
                                </div>
                                )}
                                <iframe
                                src={project.liveLink}
                                title={project.title}
                                className="w-full h-[300px] border-0 cursor-pointer"
                                style={{
                                    width: '1020px',
                                    height: '500px',
                                    zoom: 0.4  // Simpler alternative
                                }}
                                onLoad={() => setIsLoading(false)}
                                sandbox="allow-scripts allow-same-origin allow-forms"
                                />
                            </div>
                        </div>
                        <div>
                            <p className="text-brand-500 p-2 border-b-2 border-t-2 border-brand-500 text-base">{project.stack}</p>
                        </div>
                        <div className="p-4 flex flex-col justify-between gap-4">
                            <h3 className="text-2xl text-white">{project.title}</h3>
                            <h4 className="text-base text-brand-500">{project.subtitle}</h4>
                            <div className="flex gap-4">
                                <button className="text-white ring-1 ring-brand-700 hover:bg-brand-700 transition-colors duration-300 w-full sm:w-auto py-2 px-4 h-[fit-content]"><a href={project.liveLink} target="blank" className="flex gap-2 items-center"><ExternalLink size={20} />Live</a></button>
                                <button className="text-white ring-1 ring-brand-700 hover:bg-brand-700 transition-colors duration-300 w-full sm:w-auto py-2 px-4 h-[fit-content]"><a href={project.githubLink} target="blank" className="flex gap-2 items-center"><Code size={20} />Github</a></button>
                            </div>
                            
                        </div>
                    </div>
                ))}
            </div>

        </section>
    )

}

