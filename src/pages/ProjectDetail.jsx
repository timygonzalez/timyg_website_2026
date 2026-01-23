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
                    {/* Header Section */}
                    <header className="mb-20">
                        <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
                            <div className="lg:w-1/2">
                                <div className="flex items-center gap-4 mb-2">
                                    <img
                                        src={project.logo || project.thumbnail}
                                        alt={project.meta?.Company || "Company Logo"}
                                        className="h-16 w-auto object-contain"
                                    />
                                    {!project.hideHeaderCompanyName && (
                                        <span className="text-3xl font-bold text-slate-900">
                                            {project.meta?.Company || project.category}
                                        </span>
                                    )}
                                </div>
                                <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
                                    {project.title}
                                </h1>
                                <p className="text-xl md:text-2xl text-slate-600 leading-relaxed">
                                    {project.description}
                                </p>
                            </div>

                            {/* Main Hero Image - Right Column */}
                            <div className="lg:w-1/2">
                                {project.gallery && project.gallery[0] && (
                                    <div>
                                        <img
                                            src={project.gallery[0].url}
                                            alt={project.gallery[0].label}
                                            className="w-full h-auto object-cover"
                                        />
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Meta Info Grid */}
                        <div className="bg-sky-50 p-12 flex flex-wrap md:flex-nowrap justify-between gap-8 mb-20">
                            {project.meta && Object.entries(project.meta).map(([key, value]) => (
                                <div key={key}>
                                    <h4 className="text-xl font-bold text-slate-900 mb-2 capitalize">{key}</h4>
                                    {key === 'Collaborators' ? (
                                        <div className="flex flex-col gap-1">
                                            {value.split(',').map((collaborator, index) => (
                                                <p key={index} className="text-sm text-slate-700 font-medium">
                                                    {collaborator.trim()}
                                                </p>
                                            ))}
                                        </div>
                                    ) : (
                                        <p className="text-sm text-slate-700 font-medium">{value}</p>
                                    )}
                                </div>
                            ))}
                        </div>
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
                                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 flex items-center">
                                                <span className="w-10 h-10 bg-slate-900 text-white rounded-xl flex items-center justify-center mr-4 text-sm">04</span>
                                                {section.title}
                                            </h2>
                                            <div className="space-y-16">
                                                {section.profiles.map((profile, i) => {
                                                    // If a full card image is provided, render it instead of the complex HTML
                                                    if (profile.cardImage) {
                                                        return (
                                                            <div key={i} className="mb-12">
                                                                <img
                                                                    src={profile.cardImage}
                                                                    alt={`${profile.name} Persona Card`}
                                                                    className="w-full h-auto"
                                                                />
                                                            </div>
                                                        );
                                                    }

                                                    // Default complex HTML rendering
                                                    return (
                                                        <div key={i} className="bg-[#1D1A1A] rounded-[2rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row text-white font-sans">
                                                            {/* Left Sidebar */}
                                                            <div className="lg:w-[35%] p-8 md:p-12 border-r border-white/5 flex flex-col">
                                                                <h3 className="text-3xl font-bold mb-8 text-center">{profile.name}</h3>
                                                                <div className="flex justify-center mb-10">
                                                                    <img
                                                                        src={profile.image}
                                                                        alt={profile.name}
                                                                        className="w-48 h-48 object-cover"
                                                                    />
                                                                </div>

                                                                {/* Demographics */}
                                                                <div className="space-y-4 mb-10 text-sm">
                                                                    <div className="grid grid-cols-[120px_1fr] gap-4">
                                                                        <span className="text-white/40 uppercase tracking-wider font-bold text-xs self-center">Age</span>
                                                                        <span className="font-medium">{profile.demographics?.age || profile.age}</span>
                                                                    </div>
                                                                    <div className="grid grid-cols-[120px_1fr] gap-4">
                                                                        <span className="text-white/40 uppercase tracking-wider font-bold text-xs self-center">Education</span>
                                                                        <span className="font-medium">{profile.demographics?.education}</span>
                                                                    </div>
                                                                    <div className="grid grid-cols-[120px_1fr] gap-4">
                                                                        <span className="text-white/40 uppercase tracking-wider font-bold text-xs self-center">Status</span>
                                                                        <span className="font-medium">{profile.demographics?.status}</span>
                                                                    </div>
                                                                    <div className="grid grid-cols-[120px_1fr] gap-4">
                                                                        <span className="text-white/40 uppercase tracking-wider font-bold text-xs self-center">Occupation</span>
                                                                        <span className="font-medium">{profile.demographics?.occupation || profile.role}</span>
                                                                    </div>
                                                                    <div className="grid grid-cols-[120px_1fr] gap-4">
                                                                        <span className="text-white/40 uppercase tracking-wider font-bold text-xs self-center">Location</span>
                                                                        <span className="font-medium">{profile.demographics?.location}</span>
                                                                    </div>
                                                                    <div className="grid grid-cols-[120px_1fr] gap-4">
                                                                        <span className="text-white/40 uppercase tracking-wider font-bold text-xs self-center">Tech Literate</span>
                                                                        <span className="font-medium">{profile.demographics?.techLiterate}</span>
                                                                    </div>
                                                                </div>

                                                                {/* Quote Box */}
                                                                <div className="mt-auto bg-[#131111] p-6 rounded-xl relative">
                                                                    <span className="text-4xl text-white/20 absolute top-4 left-4 font-serif">"</span>
                                                                    <p className="text-white/90 italic text-lg leading-relaxed relative z-10 pl-6 pt-2">
                                                                        {profile.quote}
                                                                    </p>
                                                                </div>
                                                            </div>

                                                            {/* Right Content */}
                                                            <div className="lg:w-[65%] p-8 md:p-12 flex flex-col bg-[#1D1A1A]">
                                                                {/* Bio */}
                                                                <div className="mb-10">
                                                                    <h4 className="text-white/40 font-bold text-lg mb-2">Bio</h4>
                                                                    <p className="text-white/80 leading-relaxed text-lg">
                                                                        {profile.bio}
                                                                    </p>
                                                                </div>
                                                                {/* Needs */}
                                                                <div className="mb-10">
                                                                    <h4 className="text-white/40 font-bold text-lg mb-4">Core needs</h4>
                                                                    <ul className="list-disc list-inside space-y-2 text-white/80">
                                                                        {profile.needs.map((needed, k) => (
                                                                            <li key={k}>{needed}</li>
                                                                        ))}
                                                                    </ul>
                                                                </div>

                                                                {/* Frustrations */}
                                                                <div className="mb-10">
                                                                    <h4 className="text-white/40 font-bold text-lg mb-4">Frustrations</h4>
                                                                    <ul className="list-disc list-inside space-y-2 text-white/80">
                                                                        {profile.frustrations.map((frustration, k) => (
                                                                            <li key={k}>{frustration}</li>
                                                                        ))}
                                                                    </ul>
                                                                </div>

                                                                {/* Personality & Grid Container */}
                                                                <div className="flex flex-col md:flex-row gap-8 items-end">
                                                                    <div className="flex-1 w-full">
                                                                        <h4 className="text-white/40 font-bold text-lg mb-4">Personality</h4>
                                                                        <div className="flex flex-wrap gap-3">
                                                                            {profile.personality?.map((tag, k) => (
                                                                                <span key={k} className="bg-white text-slate-900 px-5 py-2 rounded-full text-sm font-bold">
                                                                                    {tag}
                                                                                </span>
                                                                            ))}
                                                                        </div>
                                                                    </div>
                                                                    {profile.gridImage && (
                                                                        <div className="w-full md:w-1/2">
                                                                            <img
                                                                                src={profile.gridImage}
                                                                                alt="Motivation vs Analytical Skills"
                                                                                className="w-full h-auto object-contain"
                                                                            />
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </section>
                                    );

                                case 'flow':
                                    return (
                                        <section key={idx}>
                                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 flex items-center">
                                                <span className="w-10 h-10 bg-slate-900 text-white rounded-xl flex items-center justify-center mr-4 text-sm">05</span>
                                                {section.title}
                                            </h2>
                                            <div className="space-y-24">
                                                {section.items.map((item, i) => (
                                                    <div key={i} className="flex flex-col gap-8">
                                                        <div className="max-w-3xl">
                                                            <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                                                            <p className="text-xl text-slate-600 leading-relaxed">{item.content}</p>
                                                        </div>
                                                        <div className={
                                                            item.title.includes('logs into the system')
                                                                ? "mx-auto w-[217px]"
                                                                : ""
                                                        }>
                                                            <img
                                                                src={item.image}
                                                                alt={item.title}
                                                                className={
                                                                    item.title.includes('logs into the system')
                                                                        ? "w-[217px] h-[277px] object-contain"
                                                                        : "w-full h-auto object-cover"
                                                                }
                                                            />
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
                                            <div className="mb-6 transition-transform hover:scale-[1.01] duration-500">
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
                                <div className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-9 gap-8 items-center w-full">
                                    {project.tools.map((item, i) => {
                                        const url = typeof item === 'string' ? item : item.url;
                                        const name = typeof item === 'string' ? '' : item.name;

                                        return (
                                            <div key={i} className="relative group flex justify-center cursor-pointer">
                                                {/* Tooltip */}
                                                {name && (
                                                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] font-bold py-1.5 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10 shadow-lg mb-2">
                                                        {name}
                                                        <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-slate-900"></div>
                                                    </div>
                                                )}

                                                <img
                                                    src={url}
                                                    alt={name || "Tool Icon"}
                                                    className="w-14 h-14 object-contain grayscale hover:grayscale-0 transition-all opacity-80 hover:opacity-100"
                                                />
                                            </div>
                                        );
                                    })}
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
