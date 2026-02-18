import { ExternalLink, Layers, Lock } from 'lucide-react';

const projects = [
    {
        title: 'ASR model of Louisiana cajun dialect',
        type: 'Center of Louisiana Studies',
        description: 'Optimized Whisper-based ASR models and streaming inference pipelines for low-resource dialects. Achieved 21% WER reduction using PEFT and Hugging Face integration on HPC clusters.',
        tech: ['OpenAI Whisper', 'HuggingFace', 'PeFT', 'HPC'],
        color: 'sky',
        private: true
    },
    {
        title: 'Medical RAG Chatbot',
        type: 'Generative AI / RAG',
        description: 'AI-powered medical assistant utilizing Hybrid Retrieval (BM25 + MedCPT) on 216K+ clinical documents. Synthesizes accurate responses using Mistral-7B with a Gradio web interface.',
        tech: ['Python', 'Mistral-7B', 'RAG', 'Gradio', 'MedCPT'],
        color: 'blue',
        link: 'https://github.com/anudeep11k/medical-rag-chatbot'
    },
    {
        title: 'Glaucoma Detection',
        type: 'Deep Learning / CV',
        description: 'Multi-modal AI system for glaucoma detection using CNNs for image analysis and fine-tuned BioBERT for clinical data classification. Hosted on Hugging Face.',
        tech: ['BioBERT', 'CNN', 'PyTorch', 'Hugging Face'],
        color: 'emerald',
        link: 'https://github.com/anudeep11k/glaucoma_detection_final'
    },
    {
        title: 'English → Russian Translation',
        type: 'Deep Learning',
        description: 'End-to-end NMT pipeline using encoder-decoder LSTM architecture for sequence-to-sequence translation.',
        tech: ['TensorFlow', 'Keras', 'LSTM'],
        color: 'purple'
    },
    {
        title: 'Restaurant Chatbot',
        type: 'OpenAI',
        description: 'GPT-powered order-taking system with secure API integration and prompt-engineering techniques.',
        tech: ['Python', 'OpenAI API', 'NLP'],
        color: 'green'
    },
    {
        title: 'Fine-Tuning Llama-2',
        type: 'ML',
        description: 'Full LLM fine-tuning pipeline for MCQ reasoning, improving response accuracy and reducing latency.',
        tech: ['Python', 'Llama-2', 'PEFT'],
        color: 'red'
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white inline-flex items-center gap-3 mb-2">
                        <Layers className="text-blue-600 dark:text-blue-400" />
                        Featured Projects
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400">Deep Learning and Machine Learning solutions crafted with precision.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <div
                            key={idx}
                            className="bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 group flex flex-col"
                        >
                            <div className={`h-2 w-full ${project.color === 'sky' ? 'bg-sky-400' :
                                project.color === 'blue' ? 'bg-blue-500' :
                                    project.color === 'purple' ? 'bg-purple-500' :
                                        project.color === 'green' ? 'bg-green-500' :
                                            project.color === 'emerald' ? 'bg-emerald-500' : 'bg-red-500'
                                }`}></div>

                            <div className="p-8 flex-1 flex flex-col">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <span className={`px-2 py-1 rounded text-[10px] font-semibold uppercase tracking-wider ${project.color === 'sky' ? 'bg-sky-100 dark:bg-sky-900/40 text-sky-700 dark:text-sky-300' :
                                        project.color === 'blue' ? 'bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300' :
                                            project.color === 'purple' ? 'bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300' :
                                                project.color === 'green' ? 'bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300' :
                                                    project.color === 'emerald' ? 'bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300' : 'bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300'
                                        }`}>
                                        {project.type}
                                    </span>
                                </div>

                                <p className="text-gray-600 dark:text-gray-400 mb-6 flex-1 text-sm leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto mb-6">
                                    {project.tech.map((t) => (
                                        <span key={t} className="bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 px-2.5 py-1 rounded-md text-[10px] font-bold border border-gray-200 dark:border-gray-600 hover:border-sky-400 dark:hover:border-sky-400 transition-all shadow-sm">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                {project.private ? (
                                    <div className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700/30 text-gray-400 dark:text-gray-500 text-xs font-bold rounded-lg border border-gray-200 dark:border-gray-700 cursor-not-allowed">
                                        <Lock size={14} />
                                        <span>Private Repository</span>
                                    </div>
                                ) : (
                                    <a
                                        href={project.link || "#"}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="relative inline-flex items-center justify-center gap-2 px-4 py-2 backdrop-blur-sm bg-sky-500/5 dark:bg-white/5 border border-sky-200/50 dark:border-gray-600/50 text-sky-600 dark:text-gray-200 text-sm font-medium rounded-lg transition-all duration-500 overflow-hidden group/btn hover:border-sky-400/50 active:scale-95"
                                    >
                                        <span className="absolute inset-0 w-0 bg-gradient-to-r from-transparent via-sky-400/10 to-transparent group-hover/btn:w-full transition-all duration-700 ease-out skew-x-12"></span>
                                        <span className="relative z-10">View Project</span>
                                        <ExternalLink size={16} className="relative z-10" />
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
