import { Brain, Code2, Cpu, Database } from 'lucide-react';

const highlights = [
    {
        title: 'Research Focus',
        description: 'Specializing in generative AI models, LLMs, and multi-modal AI systems for low-resource dialects.',
        icon: Brain,
        color: 'blue'
    },
    {
        title: 'AI & ML Engineering',
        description: 'Building practical solutions with focus on scalability, RAG systems, and robust machine learning architectures.',
        icon: Cpu,
        color: 'emerald'
    },
    {
        title: 'Data Science & Eng',
        description: 'Expertise in processing massive multi-modal datasets and building data-driven AI architectures.',
        icon: Database,
        color: 'rose'
    },
    {
        title: 'Full Stack Dev',
        description: 'Engineering robust backend systems and intuitive frontends to deploy enterprise-grade AI applications.',
        icon: Code2,
        color: 'sky'
    }
];

export default function About() {
    return (
        <section id="about" className="py-24 bg-white dark:bg-gray-800 transition-colors duration-700">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white relative inline-block">
                        About Me
                        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-sky-500 rounded-full"></span>
                    </h2>
                    <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                        A dedicated AI Researcher and Computer Science graduate student focused on pushing the boundaries of Generative AI.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Left Side: Bio */}
                    <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                        <p>
                            I am an AI Researcher and Computer Engineering specialist driven by the challenge of building intelligent systems that solve complex problems. My expertise lies in the intersection of deep learning, speech technology, and scalable AI architecture.
                        </p>
                        <p>
                            My technical journey is centered on mastering Automatic Speech Recognition (ASR) and Natural Language Processing. I am particularly skilled in optimizing large-scale models like Whisper using advanced techniques like PeFT and extracting actionable insights from massive, multi-modal datasets.
                        </p>
                        <p>
                            Beyond research, I am a proficient full-stack developer with a focus on robust backend architecture. I enjoy bridging the gap between sophisticated machine learning models and practical, scalable applications, ensuring that AI-driven solutions are powerful, performant, and ready for production.
                        </p>
                    </div>

                    {/* Right Side: Cards */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        {highlights.map((item, idx) => (
                            <div
                                key={idx}
                                className="p-6 rounded-2xl bg-gray-50/50 dark:bg-white/5 border border-gray-100 dark:border-white/10 hover:border-sky-500/30 transition-all duration-300 shadow-sm"
                            >
                                <div className={`p-3 rounded-xl inline-block mb-4 ${item.color === 'blue' ? 'bg-sky-50 dark:bg-sky-900/20 text-sky-500' :
                                    item.color === 'emerald' ? 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-500' :
                                        item.color === 'indigo' ? 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-500' :
                                            'bg-rose-50 dark:bg-rose-900/20 text-rose-500'
                                    }`}>
                                    <item.icon size={24} />
                                </div>
                                <h3 className="font-bold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
