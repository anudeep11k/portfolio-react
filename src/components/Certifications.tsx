import { ShieldCheck, Award, ExternalLink } from 'lucide-react';

const certifications = [
    {
        name: 'Azure AI Fundamentals',
        issuer: 'Microsoft (AI-900)',
        icon: 'blue',
        link: 'https://www.credly.com/badges/d52b13b9-5ba9-46a9-a0ce-fcbc76a3fd7b/linked_in_profile'
    },
    {
        name: 'AI and Data Science',
        issuer: 'Surge Classes (Advanced ML, DS & AI)',
        icon: 'purple',
        link: 'https://www.linkedin.com/in/anudeep11k/overlay/Certifications/1819918937/treasury/?profileId=ACoAADzlmsUBzEpxm4CAhZiMF-wy709iWnaEOQU'
    },
    {
        name: 'AWS Academy Graduate - Cloud Foundations',
        issuer: 'AWS (Cloud Foundations)',
        icon: 'yellow',
        link: 'https://www.credly.com/badges/0a211a81-402e-4acc-b31f-cc552746099f/linked_in_profile'
    },
    {
        name: 'AWS Machine Learning Foundations',
        issuer: 'AWS Academy',
        icon: 'yellow',
        link: 'https://www.credly.com/badges/8cf1f2fd-6ab4-4a5b-90a3-803e7e5a81fa/public_url'
    },
    {
        name: 'AWS Academy Graduate - Data Analytics',
        issuer: 'AWS Academy',
        icon: 'yellow',
        link: 'https://www.credly.com/badges/fac6a9fd-ed4d-4055-835f-0ac70cb99a33/public_url'
    },
    {
        name: 'Google Data Analytics',
        issuer: 'Google',
        icon: 'green',
        link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/CY3EKD2LS9U7'
    },
    {
        name: 'C Language for Everyone',
        issuer: 'Foundations of C',
        icon: 'gray',
        link: 'https://www.coursera.org/account/accomplishments/certificate/KC5XJH7V8YY8'
    },
    {
        name: 'SQL (Advanced)',
        issuer: 'HackerRank',
        icon: 'green',
        link: 'https://www.hackerrank.com/certificates/iframe/5486adb63ff3'
    },
];

export default function Certifications() {
    return (
        <section id="certifications" className="py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden transition-all duration-700">
            {/* Background Glow Accents */}
            <div className="absolute top-1/3 -left-20 w-80 h-80 bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-1/3 -right-20 w-80 h-80 bg-sky-500/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white inline-flex items-center gap-4 mb-2">
                        <span className="p-3 bg-emerald-500/10 rounded-2xl border border-emerald-500/20">
                            <ShieldCheck className="text-emerald-600 dark:text-emerald-400" size={36} />
                        </span>
                        <span>Professional Certifications</span>
                    </h2>
                    <p className="text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                        Official recognition of specialized knowledge in Cloud and AI.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certifications.map((cert, idx) => (
                        <div
                            key={idx}
                            className="group relative transition-all duration-300"
                        >
                            <div className="absolute -inset-0.5 bg-gradient-to-br from-emerald-500/20 to-sky-500/20 rounded-[1.5rem] blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                            <div className="relative bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 p-6 rounded-[1.5rem] shadow-sm hover:shadow-2xl transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1 flex flex-col gap-6">
                                <div className="flex items-start gap-4">
                                    <div className={`p-4 rounded-2xl flex-shrink-0 shadow-inner ${cert.icon === 'blue' ? 'bg-sky-500/10 text-sky-600' :
                                        cert.icon === 'purple' ? 'bg-violet-500/10 text-violet-600' :
                                            cert.icon === 'yellow' ? 'bg-amber-500/10 text-amber-600' :
                                                cert.icon === 'green' ? 'bg-emerald-500/10 text-emerald-600' :
                                                    'bg-gray-500/10 text-gray-600'
                                        }`}>
                                        <Award size={28} />
                                    </div>
                                    <div className="flex-1 space-y-1">
                                        <h3 className="font-extrabold text-lg text-gray-900 dark:text-white leading-snug group-hover:text-sky-500 dark:group-hover:text-emerald-400 transition-colors">
                                            {cert.name}
                                        </h3>
                                        <p className="text-xs font-black uppercase tracking-widest text-gray-400 dark:text-gray-500">
                                            {cert.issuer}
                                        </p>
                                    </div>
                                </div>
                                <a
                                    href={cert.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="relative inline-flex items-center justify-center gap-2 px-4 py-3 backdrop-blur-md bg-white/60 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white text-[10px] font-black uppercase tracking-tighter rounded-xl transition-all duration-300 overflow-hidden group/btn hover:border-emerald-500/50"
                                >
                                    <span className="absolute inset-0 w-0 bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent group-hover/btn:w-full transition-all duration-700 ease-out skew-x-12"></span>
                                    <span className="relative z-10">Verify Credential</span>
                                    <ExternalLink size={14} className="relative z-10" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
