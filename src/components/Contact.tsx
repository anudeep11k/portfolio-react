import { Mail, Phone, Linkedin, Github } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 transition-all duration-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Get In Touch</h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
                    I'm currently looking for full-time opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>

                <div className="flex flex-wrap justify-center gap-6 mb-12">
                    <a
                        href="mailto:anudeepkalyadapu11@gmail.com"
                        className="relative flex flex-col items-center gap-3 p-6 backdrop-blur-sm bg-rose-500/5 hover:bg-rose-500/10 rounded-2xl border border-rose-200/30 dark:border-rose-900/30 transition-all duration-500 overflow-hidden group/btn min-w-[120px]"
                    >
                        {/* Wave animation overlay */}
                        <span className="absolute inset-0 w-0 bg-gradient-to-r from-transparent via-rose-400/20 to-transparent group-hover/btn:w-full transition-all duration-700 ease-out skew-x-12"></span>

                        <div className="relative z-10 p-4 bg-rose-50 dark:bg-rose-900/30 rounded-full transition-colors group-hover/btn:bg-white dark:group-hover/btn:bg-rose-900/50">
                            <Mail size={32} className="text-rose-500 dark:text-rose-400" />
                        </div>
                        <span className="relative z-10 text-sm font-semibold text-gray-700 dark:text-gray-300 group-hover/btn:text-rose-600 dark:group-hover/btn:text-rose-400 transition-colors">Email</span>
                    </a>

                    <a
                        href="tel:+13373471631"
                        className="relative flex flex-col items-center gap-3 p-6 backdrop-blur-sm bg-emerald-500/5 hover:bg-emerald-500/10 rounded-2xl border border-emerald-200/30 dark:border-emerald-900/30 transition-all duration-500 overflow-hidden group/btn min-w-[120px]"
                    >
                        {/* Wave animation overlay */}
                        <span className="absolute inset-0 w-0 bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent group-hover/btn:w-full transition-all duration-700 ease-out skew-x-12"></span>

                        <div className="relative z-10 p-4 bg-emerald-50 dark:bg-emerald-900/30 rounded-full transition-colors group-hover/btn:bg-white dark:group-hover/btn:bg-emerald-900/50">
                            <Phone size={32} className="text-emerald-500 dark:text-emerald-400" />
                        </div>
                        <span className="relative z-10 text-sm font-semibold text-gray-700 dark:text-gray-300 group-hover/btn:text-emerald-600 dark:group-hover/btn:text-emerald-400 transition-colors">Phone</span>
                    </a>

                    <a
                        href="http://www.linkedin.com/in/anudeep11k"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative flex flex-col items-center gap-3 p-6 backdrop-blur-sm bg-sky-500/5 hover:bg-sky-500/10 rounded-2xl border border-sky-200/30 dark:border-sky-900/30 transition-all duration-500 overflow-hidden group/btn min-w-[120px]"
                    >
                        {/* Wave animation overlay */}
                        <span className="absolute inset-0 w-0 bg-gradient-to-r from-transparent via-sky-400/20 to-transparent group-hover/btn:w-full transition-all duration-700 ease-out skew-x-12"></span>

                        <div className="relative z-10 p-4 bg-sky-50 dark:bg-sky-900/30 rounded-full transition-colors group-hover/btn:bg-white dark:group-hover/btn:bg-sky-900/50">
                            <Linkedin size={32} className="text-sky-500 dark:text-sky-400" />
                        </div>
                        <span className="relative z-10 text-sm font-semibold text-gray-700 dark:text-gray-300 group-hover/btn:text-sky-600 dark:group-hover/btn:text-sky-400 transition-colors">LinkedIn</span>
                    </a>

                    <a
                        href="https://github.com/anudeep11k"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative flex flex-col items-center gap-3 p-6 backdrop-blur-sm bg-slate-500/5 hover:bg-slate-500/10 rounded-2xl border border-slate-200/30 dark:border-slate-700/30 transition-all duration-500 overflow-hidden group/btn min-w-[120px]"
                    >
                        {/* Wave animation overlay */}
                        <span className="absolute inset-0 w-0 bg-gradient-to-r from-transparent via-slate-400/20 to-transparent group-hover/btn:w-full transition-all duration-700 ease-out skew-x-12"></span>

                        <div className="relative z-10 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-full transition-colors group-hover/btn:bg-white dark:group-hover/btn:bg-slate-700/50">
                            <Github size={32} className="text-slate-600 dark:text-slate-300" />
                        </div>
                        <span className="relative z-10 text-sm font-semibold text-gray-700 dark:text-gray-300 group-hover/btn:text-slate-900 dark:group-hover/btn:text-white transition-colors">GitHub</span>
                    </a>
                </div>

                <p className="text-gray-400 dark:text-gray-500 text-sm">
                    © {new Date().getFullYear()} Anudeep Kalyadapu. Built with React & Tailwind.
                </p>
            </div>
        </section>
    );
}
