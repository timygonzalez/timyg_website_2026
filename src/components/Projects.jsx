import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';

const Projects = () => {
    return (
        <section id="projects" className="py-20 md:py-32 px-6 md:px-20 lg:px-32 max-w-7xl mx-auto bg-slate-50">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 space-y-4 md:space-y-0">
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Selected Work</h2>
                    <p className="text-xl text-muted max-w-xl">
                        A showcase of enterprise solutions and strategic design leadership.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {projects.map((project) => (
                    <Link
                        key={project.id}
                        to={`/use-cases/${project.id}`}
                        className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col h-full"
                    >
                        {/* Card Image */}
                        <div className="aspect-[16/10] overflow-hidden bg-slate-100 relative">
                            <img
                                src={project.thumbnail}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                                <span className="text-white font-semibold flex items-center">
                                    View Case Study <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                                </span>
                            </div>
                        </div>

                        {/* Card Content */}
                        <div className="p-8 md:p-10 flex flex-col flex-grow">
                            <div className="flex justify-between items-start mb-6">
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary bg-purple-50 px-4 py-1.5 rounded-full">
                                    {project.category}
                                </span>
                            </div>

                            <h3 className="text-3xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors leading-tight">
                                {project.title}
                            </h3>

                            <p className="text-slate-600 text-lg leading-relaxed line-clamp-2 mb-8 flex-grow">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-3 pt-6 border-t border-slate-50">
                                {project.tags.map((tag, i) => (
                                    <span key={i} className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default Projects;
