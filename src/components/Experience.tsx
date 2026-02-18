import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
    {
        title: 'AI Research Assistant',
        company: 'University of Louisiana at Lafayette',
        location: 'Lafayette, LA',
        date: 'August 2025 – Present',
        color: 'border-l-4 border-sky-400',
    },
    {
        title: 'Lead Development Ambassador for India',
        company: 'Kaia (Previously Klaytn)',
        location: 'India',
        date: 'September 2024 – January 2025',
        color: 'border-l-4 border-purple-400',
    },
    {
        title: 'Software Engineer',
        company: 'DBS Bank',
        location: 'India',
        date: 'November 2023 – November 2024',
        color: 'border-l-4 border-rose-400',
    },
];

export default function Experience() {
    return (
        <section id="experience" className="bg-gray-50 dark:bg-gray-900 py-20 border-b border-gray-100 dark:border-gray-800 transition-all duration-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold text-gray-800 dark:text-white flex items-center justify-center gap-3">
                        <Briefcase className="text-sky-500 dark:text-sky-400" size={32} />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-rose-400">
                            Work Experience
                        </span>
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 mt-2">A professional journey focused on technical leadership and research excellence.</p>
                    <div className="h-1 w-20 bg-sky-400 mx-auto mt-4 rounded-full"></div>
                </div>

                <div className="space-y-8 relative">
                    {/* Vertical line for desktop */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 transform -translate-x-1/2"></div>

                    {experiences.map((exp, idx) => (
                        <div key={idx} className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group`}>

                            {/* Timeline Dot */}
                            <div className="hidden md:flex absolute left-1/2 top-8 w-4 h-4 rounded-full border-2 border-white dark:border-gray-800 shadow bg-sky-400 transform -translate-x-1/2 z-10 box-content"></div>

                            {/* Content Card */}
                            <div className="w-full md:w-5/12">
                                <div className={`bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-500 border border-gray-200 dark:border-gray-700 ${exp.color}`}>
                                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-800 dark:text-white">{exp.title}</h3>
                                            <p className="text-sky-500 dark:text-sky-400 font-medium">{exp.company}</p>
                                        </div>
                                        <div className="text-left md:text-right text-gray-500 dark:text-gray-400 text-sm flex flex-col md:items-end gap-1">
                                            <span className="flex items-center gap-1 bg-gray-50 dark:bg-gray-700/50 px-2 py-1 rounded">
                                                <Calendar size={14} /> {exp.date}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <MapPin size={14} /> {exp.location}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
