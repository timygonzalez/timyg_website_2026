import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, User, Target, Wrench, Layout, Zap } from 'lucide-react';
import { projects } from '../data/projects';
import Contact from '../components/Contact';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projects.find(p => p.id === id);

    // console.log('ProjectDetail ID:', id, 'Project:', project);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
                    <Link to="/" className="text-primary hover:underline">Return Home</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Global Navigation */}
            <nav className="p-6 md:p-10 sticky top-0 z-50 bg-white/80 backdrop-blur-md">
                <Link to="/" className="inline-flex items-center text-slate-600 hover:text-primary transition-colors font-medium group">
                    <ArrowLeft className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" />
                    Back to Portfolio
                </Link>
            </nav>

            <main className="max-w-5xl mx-auto px-6 md:px-10 py-10">
                <div>
                    {/* Header Section */}
                    <header className="mb-20">
                        <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
                            {project.category}
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 leading-tight tracking-tight">
                            {project.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-3xl mb-12">
                            {project.description}
                        </p>

                        {/* Meta Info Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-slate-100 mb-16">
                            {project.meta && Object.entries(project.meta).map(([key, value]) => (
                                <div key={key}>
                                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{key}</h4>
                                    <p className="text-slate-800 font-medium">{value}</p>
                                </div>
                            ))}
                        </div>

                        {/* Main Hero Image */}
                        {project.gallery && project.gallery[0] && (
                            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100 bg-slate-50">
                                <img
                                    src={project.gallery[0].url}
                                    alt={project.gallery[0].label}
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        )}
                    </header>

                    {/* Dynamic Sections */}
                    <div className="space-y-24">
                        {project.sections.map((section, idx) => {
                            switch (section.type) {
                                case 'problem':
                                    return (
                                        <section key={idx} className="max-w-3xl">
                                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 flex items-center">
                                                <span className="w-10 h-10 bg-slate-900 text-white rounded-xl flex items-center justify-center mr-4 text-sm">01</span>
                                                {section.title}
                                            </h2>
                                            <p className="text-xl text-slate-600 leading-relaxed">
                                                {section.content}
                                            </p>
                                        </section>
                                    );

                                case 'objectives':
                                    return (
                                        <section key={idx}>
                                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-10 flex items-center">
                                                <span className="w-10 h-10 bg-slate-900 text-white rounded-xl flex items-center justify-center mr-4 text-sm">02</span>
                                                {section.title}
                                            </h2>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                {section.items.map((item, i) => (
                                                    <div key={i} className="flex gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-primary/20 transition-colors">
                                                        <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                                                        <p className="text-slate-700 font-medium leading-snug">{item}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </section>
                                    );

                                case 'process':
                                    return (
                                        <section key={idx}>
                                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-10 flex items-center">
                                                <span className="w-10 h-10 bg-slate-900 text-white rounded-xl flex items-center justify-center mr-4 text-sm">03</span>
                                                {section.title}
                                            </h2>
                                            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                                                {section.steps.map((step, i) => (
                                                    <div key={i} className="relative p-6 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                                                        <span className="text-3xl mb-4 block opacity-20">0{i + 1}</span>
                                                        <h4 className="font-bold text-slate-900 mb-2">{step.title}</h4>
                                                        <p className="text-sm text-slate-600 leading-relaxed">{step.content}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </section>
                                    );

                                case 'personas':
                                    return (
                                        <section key={idx}>
                                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-10 flex items-center">
                                                <span className="w-10 h-10 bg-slate-900 text-white rounded-xl flex items-center justify-center mr-4 text-sm">04</span>
                                                {section.title}
                                            </h2>
                                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                                                {section.profiles.map((profile, i) => (
                                                    <div key={i} className="bg-slate-900 text-white rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row shadow-2xl">
                                                        <div className="md:w-1/3">
                                                            <img
                                                                src={profile.image}
                                                                alt={profile.name}
                                                                className="w-full h-full object-cover min-h-[300px]"
                                                            />
                                                        </div>
                                                        <div className="md:w-2/3 p-8 md:p-10 flex flex-col justify-center">
                                                            <div className="mb-6">
                                                                <h3 className="text-3xl font-bold mb-1">{profile.name}</h3>
                                                                <p className="text-primary font-medium tracking-wide text-sm">{profile.role}, {profile.age}</p>
                                                            </div>
                                                            <p className="text-slate-400 text-sm leading-relaxed mb-8 italic">
                                                                "{profile.bio}"
                                                            </p>
                                                            <div className="space-y-6">
                                                                <div>
                                                                    <h5 className="text-xs font-bold uppercase tracking-widest text-primary mb-3">Core Needs</h5>
                                                                    <div className="flex flex-wrap gap-2">
                                                                        {profile.needs.map((n, j) => (
                                                                            <span key={j} className="text-xs bg-white/10 px-3 py-1.5 rounded-full border border-white/5">{n}</span>
                                                                        ))}
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <h5 className="text-xs font-bold uppercase tracking-widest text-red-400 mb-3">Frustrations</h5>
                                                                    <ul className="space-y-1.5">
                                                                        {profile.frustrations.map((f, j) => (
                                                                            <li key={j} className="text-xs text-slate-300 flex items-start">
                                                                                <span className="mr-2 text-red-400/50">•</span> {f}
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </section>
                                    );

                                default:
                                    return null;
                            }
                        })}

                        {/* Gallery Section */}
                        {project.gallery && project.gallery.length > 1 && (
                            <section>
                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 flex items-center">
                                    <span className="w-10 h-10 bg-slate-900 text-white rounded-xl flex items-center justify-center mr-4 text-sm">05</span>
                                    Design Showcase
                                </h2>
                                <div className="space-y-16">
                                    {project.gallery.slice(1).map((item, i) => (
                                        <div key={i} className="group">
                                            <div className="rounded-[2.5rem] overflow-hidden shadow-xl border border-slate-100 bg-slate-50 mb-6 transition-transform hover:scale-[1.01] duration-500">
                                                <img
                                                    src={item.url}
                                                    alt={item.label}
                                                    className="w-full h-auto object-cover"
                                                />
                                            </div>
                                            <p className="text-slate-400 font-medium text-sm text-center tracking-wide uppercase">
                                                {item.label}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Tools Section */}
                        {project.tools && (
                            <section className="pt-12 border-t border-slate-100">
                                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-10 flex items-center">
                                    <span className="w-10 h-10 bg-slate-900 text-white rounded-xl flex items-center justify-center mr-4 text-sm">06</span>
                                    Tech Stack
                                </h2>
                                <div className="flex flex-wrap gap-8 items-center">
                                    {project.tools.map((icon, i) => (
                                        <img key={i} src={icon} alt="Tool Icon" className="h-12 w-auto grayscale hover:grayscale-0 transition-all" />
                                    ))}
                                </div>
                            </section>
                        )}
                    </div>
                </div>
            </main>

            <div className="mt-32">
                <Contact />
            </div>
        </div>
    );
};

export default ProjectDetail;
