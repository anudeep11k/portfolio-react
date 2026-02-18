import { Mail, Phone, Linkedin, Github } from 'lucide-react';

const socialLinks = [
    {
        name: 'Email',
        href: 'mailto:anudeepkalyadapu11@gmail.com',
        icon: Mail,
        color: 'text-rose-400 bg-rose-50/50 dark:bg-rose-900/10 hover:bg-rose-100/70 dark:hover:bg-rose-900/20'
    },
    {
        name: 'Phone',
        href: 'tel:+13373471631',
        icon: Phone,
        color: 'text-emerald-400 bg-emerald-50/50 dark:bg-emerald-900/10 hover:bg-emerald-100/70 dark:hover:bg-emerald-900/20'
    },
    {
        name: 'LinkedIn',
        href: 'http://www.linkedin.com/in/anudeep11k',
        icon: Linkedin,
        color: 'text-sky-500 dark:text-sky-400 bg-sky-50/50 dark:bg-sky-900/10 hover:bg-sky-100/70 dark:hover:bg-sky-900/20'
    },
    {
        name: 'GitHub',
        href: 'https://github.com/anudeep11k',
        icon: Github,
        color: 'text-slate-600 dark:text-slate-300 bg-slate-50/50 dark:bg-slate-800/50 hover:bg-slate-100/70 dark:hover:bg-slate-700/70'
    },
];

export default function Hero() {
    return (
        <section id="home" className="min-h-screen pt-32 pb-20 flex items-center bg-gray-50 dark:bg-gray-900 relative overflow-hidden transition-all duration-700">
            {/* Background decorative Elements - subtle circles */}
            <div className="absolute top-20 right-[-100px] w-96 h-96 bg-sky-100/30 dark:bg-sky-900/5 rounded-full blur-3xl opacity-40 pointer-events-none transition-all duration-700"></div>
            <div className="absolute bottom-[-50px] left-[-100px] w-72 h-72 bg-amber-100/30 dark:bg-amber-900/5 rounded-full blur-3xl opacity-40 pointer-events-none transition-all duration-700"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Side: Content */}
                    <div className="space-y-8 animate-fade-in-up">
                        <div>
                            <h1 className="text-5xl md:text-7xl font-bold text-gray-800 dark:text-white tracking-tight leading-tight mb-4 transition-all duration-500">
                                Anudeep <br />
                                <span className="text-sky-500 dark:text-sky-400">Kalyadapu</span>
                            </h1>
                            <h2 className="text-2xl md:text-3xl font-medium text-gray-500 dark:text-gray-400 mb-6 transition-colors">
                                AI Research Assistant & Software Engineer
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl transition-colors">
                                A Computer Science graduate student with experience as an AI Research Assistant, Teaching Assistant,
                                and Opensource Contributor. Specializing in Machine Learning, NLP, and Full-Stack Development.
                            </p>
                            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl mt-4 transition-colors">
                                Skilled in supporting students, facilitating labs, and contributing to collaborative learning environments.
                                Eager to apply technical expertise and problem-solving skills to create innovative software solutions.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`p-4 rounded-full transition-all duration-500 transform hover:-translate-y-1 hover:shadow-md ${link.color}`}
                                    aria-label={link.name}
                                >
                                    <link.icon size={24} strokeWidth={2} className="dark:text-current" />
                                </a>
                            ))}
                        </div>

                        <div className="pt-4 flex gap-4">
                            <a
                                href="#projects"
                                className="relative px-8 py-3 backdrop-blur-sm bg-sky-500/10 dark:bg-sky-500/5 text-sky-600 dark:text-sky-400 font-medium rounded-full border border-sky-500/30 dark:border-sky-500/30 shadow-sm transition-all duration-500 overflow-hidden group/btn hover:border-sky-500/60"
                            >
                                {/* Wave animation overlay */}
                                <span className="absolute inset-0 w-0 bg-gradient-to-r from-transparent via-sky-400/20 to-transparent group-hover/btn:w-full transition-all duration-700 ease-out skew-x-12"></span>
                                <span className="relative z-10 transition-colors duration-300">View Work</span>
                            </a>
                            <a
                                href="#contact"
                                className="relative px-8 py-3 backdrop-blur-sm bg-gray-100/10 dark:bg-white/5 text-gray-600 dark:text-gray-200 font-medium rounded-full border border-gray-200 dark:border-gray-700 shadow-sm transition-all duration-500 overflow-hidden group/btn hover:border-sky-400/50"
                            >
                                {/* Wave animation overlay */}
                                <span className="absolute inset-0 w-0 bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover/btn:w-full transition-all duration-700 ease-out skew-x-12"></span>
                                <span className="relative z-10 group-hover/btn:text-sky-500 dark:group-hover/btn:text-sky-400 transition-colors duration-300">Contact Me</span>
                            </a>
                        </div>
                    </div>

                    {/* Right Side: Profile Image */}
                    <div className="flex justify-center md:justify-end relative">
                        <div className="relative w-80 h-80 md:w-96 md:h-96">
                            {/* Decorative rings */}
                            <div className="absolute inset-0 rounded-full border-4 border-sky-100/50 dark:border-sky-900/20 animate-pulse"></div>
                            <div className="absolute -inset-4 rounded-full border border-rose-100/40 dark:border-rose-900/20 opacity-50"></div>
                            <div className="absolute -inset-8 rounded-full border border-amber-100/30 dark:border-amber-900/20 opacity-30"></div>

                            <img
                                src="/profile_placeholder.png"
                                alt="Anudeep Kalyadapu"
                                className="w-full h-full object-cover rounded-full shadow-xl border-8 border-white dark:border-gray-800 relative z-10 transition-all duration-500"
                            />

                            {/* Floating Badge */}
                            <div className="absolute -bottom-4 -right-4 bg-gray-50 dark:bg-gray-800 p-4 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 z-20 flex items-center gap-3 animate-bounce-slow transition-all duration-500">
                                <div className="w-3 h-3 bg-emerald-400 rounded-full animate-ping"></div>
                                <span className="font-semibold text-gray-600 dark:text-gray-200 text-sm">Open to Work</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
