import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="min-h-screen flex flex-col justify-center px-6 md:px-20 lg:px-32 max-w-7xl mx-auto pt-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-8"
                >
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tiny">
                        Strategy and <span className="text-primary block md:inline">Design</span> for enterprise products and systems.
                    </h1>

                    <p className="text-xl md:text-2xl text-muted font-medium max-w-2xl">
                        Open to full-time UX / Product / Strategy / Service Design roles and AI-enabled initiatives.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <a
                            href="#projects"
                            className="px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            See Use Cases
                        </a>
                        <a
                            href="https://framerusercontent.com/assets/GlYfFXSayZAe3MUz7hMkqJfd2s.docx"
                            className="px-8 py-4 bg-white border-2 border-slate-200 text-slate-800 font-semibold rounded-full hover:border-slate-400 transition-all"
                        >
                            Download My Resume
                        </a>
                    </div>
                </motion.div>

                {/* Right Visuals - Abstract UX Representation */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative hidden lg:flex justify-end"
                >
                    <div className="relative w-full max-w-lg">
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-auto rounded-3xl shadow-2xl border border-slate-100"
                        >
                            <source src="/hero-video.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>

                        {/* Decorative background blur element behind video */}
                        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-tr from-purple-200 to-blue-100 rounded-full blur-3xl opacity-40"></div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;
