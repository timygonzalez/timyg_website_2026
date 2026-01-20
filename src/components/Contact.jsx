import { Mail, Linkedin, MapPin, Phone } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 md:py-32 px-6 md:px-20 lg:px-32 bg-dark text-white">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">

                <div className="space-y-8">
                    <h2 className="text-4xl md:text-5xl font-bold">Let's Connect</h2>
                    <p className="text-xl text-slate-400 max-w-md leading-relaxed">
                        I'm currently available for full-time roles in UX Design, Product design and Strategy, and related roles.
                        <br /><br />
                        Based in the US, available globally.
                    </p>
                </div>

                <div className="space-y-6">
                    <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg border border-white/10 hover:border-primary/50 transition-colors">
                        <MapPin className="w-6 h-6 text-primary shrink-0" />
                        <span className="text-lg">Mooresville, NC, USA</span>
                    </div>

                    <a href="mailto:timygonzalez@gmail.com" className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg border border-white/10 hover:border-primary/50 transition-colors group">
                        <Mail className="w-6 h-6 text-primary shrink-0 group-hover:scale-110 transition-transform" />
                        <span className="text-lg group-hover:text-primary transition-colors">timygonzalez@gmail.com</span>
                    </a>

                    <a href="tel:704-402-4401" className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg border border-white/10 hover:border-primary/50 transition-colors group">
                        <Phone className="w-6 h-6 text-primary shrink-0 group-hover:scale-110 transition-transform" />
                        <span className="text-lg group-hover:text-primary transition-colors">704-402-4401</span>
                    </a>

                    <a href="https://linkedin.com/in/timygonzalez/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg border border-white/10 hover:border-primary/50 transition-colors group">
                        <Linkedin className="w-6 h-6 text-primary shrink-0 group-hover:scale-110 transition-transform" />
                        <span className="text-lg group-hover:text-primary transition-colors">linkedin.com/in/timygonzalez</span>
                    </a>
                </div>

            </div>

            <div className="mt-20 pt-8 border-t border-white/10 text-center text-slate-500 text-sm">
                &copy; {new Date().getFullYear()} Timy Gonzalez. All Rights Reserved.
            </div>
        </section>
    );
};

export default Contact;
