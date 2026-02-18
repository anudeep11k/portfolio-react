import { GraduationCap, Award } from 'lucide-react';

export default function Education() {
    return (
        <section id="education" className="py-20 bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700 relative overflow-hidden transition-all duration-700">
            {/* Background decorations */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sky-400 via-rose-400 via-amber-400 to-emerald-400 opacity-60"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-2 flex items-center justify-center gap-3">
                    <GraduationCap className="text-sky-500 dark:text-sky-400" size={32} />
                    <span>Education</span>
                </h2>
                <p className="text-gray-500 dark:text-gray-400 text-center mb-12">Building a strong theoretical foundation in Computer Science and Research.</p>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Masters */}
                    <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 hover:border-sky-200 dark:hover:border-sky-800 transition-all duration-500 hover:shadow-md relative group">
                        <div className="absolute top-0 left-0 w-2 h-full bg-sky-400 rounded-l-2xl group-hover:w-3 transition-all duration-500"></div>
                        <div className="flex items-start gap-4">
                            <div className="bg-sky-50/60 dark:bg-sky-900/20 p-3 rounded-xl text-sky-500 dark:text-sky-400">
                                <GraduationCap size={28} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Master's in Computer Science</h3>
                                <p className="text-lg text-sky-500 dark:text-sky-400 font-medium mt-1">University of Louisiana at Lafayette</p>
                                <p className="text-gray-500 dark:text-gray-400 mt-1 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span> Louisiana, USA
                                </p>
                                <p className="text-gray-400 dark:text-gray-500 text-sm mt-2 font-mono bg-gray-50 dark:bg-gray-800 inline-block px-2 py-1 rounded">January 2025 – Present</p>
                            </div>
                        </div>
                    </div>

                    {/* Bachelors */}
                    <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 hover:border-emerald-200 dark:hover:border-emerald-800 transition-all duration-500 hover:shadow-md relative group">
                        <div className="absolute top-0 left-0 w-2 h-full bg-emerald-400 rounded-l-2xl group-hover:w-3 transition-all duration-500"></div>
                        <div className="flex items-start gap-4">
                            <div className="bg-emerald-50/60 dark:bg-emerald-900/20 p-3 rounded-xl text-emerald-500 dark:text-emerald-400">
                                <Award size={28} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Bachelor's in Computer Science</h3>
                                <p className="text-lg text-emerald-500 dark:text-emerald-400 font-medium mt-1">CMR Institute of Technology</p>
                                <p className="text-gray-500 dark:text-gray-400 mt-1 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span> Hyderabad, India
                                </p>
                                <p className="text-gray-400 dark:text-gray-500 text-sm mt-2 font-mono bg-gray-50 dark:bg-gray-800 inline-block px-2 py-1 rounded">June 2020 - June 2024</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
