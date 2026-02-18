import { Code2, Cpu, Brain, Database, Wrench, Terminal, Users } from 'lucide-react';

const colorMap: Record<string, string> = {
    blue: 'bg-sky-50/60 dark:bg-sky-900/10 text-sky-600 dark:text-sky-300 border-sky-100/70 dark:border-sky-800/50 hover:bg-sky-100/80 dark:hover:bg-sky-900/20 hover:border-sky-200 dark:hover:border-sky-700',
    purple: 'bg-violet-50/60 dark:bg-violet-900/10 text-violet-600 dark:text-violet-300 border-violet-100/70 dark:border-violet-800/50 hover:bg-violet-100/80 dark:hover:bg-violet-900/20 hover:border-violet-200 dark:hover:border-violet-700',
    green: 'bg-emerald-50/60 dark:bg-emerald-900/10 text-emerald-600 dark:text-emerald-300 border-emerald-100/70 dark:border-emerald-800/50 hover:bg-emerald-100/80 dark:hover:bg-emerald-900/20 hover:border-emerald-200 dark:hover:border-emerald-700',
    red: 'bg-rose-50/60 dark:bg-rose-900/10 text-rose-600 dark:text-rose-300 border-rose-100/70 dark:border-rose-800/50 hover:bg-rose-100/80 dark:hover:bg-rose-900/20 hover:border-rose-200 dark:hover:border-rose-700',
    yellow: 'bg-amber-50/60 dark:bg-amber-900/10 text-amber-700 dark:text-amber-300 border-amber-100/70 dark:border-amber-800/50 hover:bg-amber-100/80 dark:hover:bg-amber-900/20 hover:border-amber-200 dark:hover:border-amber-700',
    indigo: 'bg-indigo-50/60 dark:bg-indigo-900/10 text-indigo-600 dark:text-indigo-300 border-indigo-100/70 dark:border-indigo-800/50 hover:bg-indigo-100/80 dark:hover:bg-indigo-900/20 hover:border-indigo-200 dark:hover:border-indigo-700',
    sky: 'bg-sky-50/60 dark:bg-sky-900/10 text-sky-600 dark:text-sky-300 border-sky-100/70 dark:border-sky-800/50 hover:bg-sky-100/80 dark:hover:bg-sky-900/20 hover:border-sky-200 dark:hover:border-sky-700',
    teal: 'bg-teal-50/60 dark:bg-teal-900/10 text-teal-600 dark:text-teal-300 border-teal-100/70 dark:border-teal-800/50 hover:bg-teal-100/80 dark:hover:bg-teal-900/20 hover:border-teal-200 dark:hover:border-teal-700',
    orange: 'bg-orange-50/60 dark:bg-orange-900/10 text-orange-600 dark:text-orange-300 border-orange-100/70 dark:border-orange-800/50 hover:bg-orange-100/80 dark:hover:bg-orange-900/20 hover:border-orange-200 dark:hover:border-orange-700',
};

const iconMap: Record<string, React.ReactNode> = {
    indigo: <Terminal size={24} />,
    purple: <Brain size={24} />,
    green: <Cpu size={24} />,
    red: <Database size={24} />,
    blue: <Code2 size={24} />,
    yellow: <Wrench size={24} />,
    sky: <Users size={24} />,
    teal: <Cpu size={24} />,
    orange: <Database size={24} />,
};

const skillCategories = [
    {
        title: 'Languages',
        skills: ['C', 'Python', '.NET', 'Java', 'JavaScript', 'GO', 'C/C++', 'C#', 'Shell Scripting', 'VS Code', 'RUST', 'GraphQL', 'YAML', '.NET Core', 'ASP.NET MVC'],
        color: 'indigo'
    },
    {
        title: 'GenAI & NLP',
        skills: ['Llama', 'BERT', 'GPT', 'Whisper', 'Langchain', 'NLTK', 'spaCY', 'OpenCV', 'Agentic AI', 'RAG', 'Windsurf', 'Codex'],
        color: 'purple'
    },
    {
        title: 'Machine Learning',
        skills: ['Numpy', 'Pandas', 'PyTorch', 'Scikit learn', 'Feature Engineering', 'Matplotlib', 'CUDA GPU’s', 'OpenCV', 'TensorFlow', 'keras'],
        color: 'teal'
    },
    {
        title: 'Databases',
        skills: ['MySQL', 'MongoDB', 'SQL', 'RDBMS', 'NoSQL', 'VectorDatabase', 'Pinecone', 'PostgreSQL'],
        color: 'orange'
    },
    {
        title: 'Web Frameworks',
        skills: ['React.js', 'Angular', 'Vue.js', 'Remix', 'Django', 'Flask', 'FastAPI', 'Express.js', 'NextJS', 'Spring Boot', 'Gin', 'Fiber', 'Tailwind CSS', 'Bootstrap', 'RESTful Services'],
        color: 'blue'
    },
    {
        title: 'Tools',
        skills: ['Git/GitHub', 'Docker', 'Jenkins (CI/CD)', 'AWS (s3, Lambda, SageMaker)', 'BurpSuite', 'MCP', 'MLflow', 'StreamLit', 'Microsoft Fabric', 'PowerBI', 'Tabelau', 'Apache Spark', 'Flink'],
        color: 'yellow'
    },
    {
        title: 'Methodologies',
        skills: ['Agile SCRUM', 'SDLC', 'Test-Driven Development'],
        color: 'sky'
    }
];

export default function Skills() {
    return (
        <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900 relative transition-all duration-700 border-b border-gray-100 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-2 relative z-10 transition-all duration-500">
                    Technical Skills
                </h2>
                <p className="text-gray-500 dark:text-gray-400 text-center mb-4">Technologies, tools, and skills I've mastered throughout my career in AI engineering.</p>
                <div className="flex justify-center mb-16">
                    <span className="block w-24 h-1 bg-gradient-to-r from-sky-400 to-emerald-400 rounded-full"></span>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category) => (
                        <div
                            key={category.title}
                            className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all duration-500 transform hover:-translate-y-1"
                        >
                            <div className={`flex items-center gap-3 mb-6 ${category.color === 'blue' ? 'text-sky-500 dark:text-sky-400' :
                                category.color === 'purple' ? 'text-violet-500 dark:text-violet-400' :
                                    category.color === 'green' ? 'text-emerald-500 dark:text-emerald-400' :
                                        category.color === 'teal' ? 'text-teal-500 dark:text-teal-400' :
                                            category.color === 'red' ? 'text-rose-500 dark:text-rose-400' :
                                                category.color === 'orange' ? 'text-orange-500 dark:text-orange-400' :
                                                    category.color === 'yellow' ? 'text-amber-500 dark:text-amber-400' :
                                                        category.color === 'indigo' ? 'text-indigo-500 dark:text-indigo-400' :
                                                            'text-sky-500 dark:text-sky-400'
                                }`}>
                                {iconMap[category.color]}
                                <h3 className="text-xl font-bold text-gray-800 dark:text-white">{category.title}</h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-all duration-500 cursor-default ${colorMap[category.color]}`}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
