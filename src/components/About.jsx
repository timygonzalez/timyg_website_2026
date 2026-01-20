const About = () => {
    return (
        <section id="about" className="py-20 md:py-32 px-6 md:px-20 lg:px-32 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">

                {/* Metrics Section */}
                <div className="md:col-span-4 space-y-8">
                    <div>
                        <span className="block text-6xl md:text-7xl font-bold tracking-tighter text-slate-900">15+</span>
                        <span className="text-lg md:text-xl text-muted font-medium">Years Experience</span>
                    </div>
                    <div>
                        <span className="block text-6xl md:text-7xl font-bold tracking-tighter text-slate-900">100+</span>
                        <span className="text-lg md:text-xl text-muted font-medium">Projects Delivered</span>
                    </div>
                    <div className="pt-8">
                        <div className="w-16 h-1 bg-primary rounded-full"></div>
                    </div>
                </div>

                {/* Narrative Section */}
                <div className="md:col-span-8 space-y-6 text-xl md:text-2xl text-slate-700 leading-relaxed font-light">
                    <p>
                        I specialize in <strong className="font-semibold text-slate-900">regulated and enterprise environments</strong>, tackling complex UX and service system challenges.
                    </p>
                    <p>
                        My work thrives in ambiguity, constraints, and scale. I bridge the gap between user needs and business metrics, translating strategic vision into practical, high-impact execution.
                    </p>
                    <p>
                        Currently, I work with initiatives that shape data-driven experiences for global organizations, ensuring accessibility, consistency, and innovation at every touchpoint.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
