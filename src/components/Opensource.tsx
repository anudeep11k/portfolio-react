import { GitPullRequest, CheckCircle, ExternalLink } from 'lucide-react';

const contributions = [
    {
        title: 'DragonSwap Subgraph on Kaia',
        description: 'Built & deployed production-ready subgraph improving on-chain event queryability for analytics and ML features',
        reward: '1,500 KAIA',
        status: 'Completed',
        color: 'purple',
        link: 'https://github.com/kaiachain/kaia-dapp-mono/issues/273'
    },
    {
        title: 'Subgraph Creation Guide',
        description: 'Created step-by-step guide with working examples to reform contributor onboarding',
        reward: 'Approved & Paid',
        status: 'Completed',
        color: 'green',
        link: 'https://github.com/kaiachain/kaia-dapp-mono/issues/212'
    },
    {
        title: 'Telegram Bot for Klaytn/Kaia',
        description: 'Built & deployed bot to track KLAY price and monitor NFT/KIP token activity',
        reward: '100 KAIA',
        status: 'Completed',
        color: 'blue',
        link: 'https://github.com/kaiachain/kaia-dapp-mono/issues/27'
    },
    {
        title: 'Documentation & dApp Monorepo',
        description: 'Reformed docs and made example modules to improve developer flows',
        reward: 'Accepted',
        status: 'Merged',
        color: 'yellow',
        link: 'https://github.com/kaiachain/kaia-dapp-mono/issues/33'
    }
];

export default function Opensource() {
    return (
        <section id="opensource" className="py-20 bg-gray-50 dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-2 flex items-center justify-center gap-3">
                    <GitPullRequest className="text-purple-600 dark:text-purple-400" size={32} />
                    <span>Opensource Contributions</span>
                </h2>
                <p className="text-gray-500 dark:text-gray-400 text-center mb-12">Empowering the community through code and documentation contributions.</p>

                {/* Featured Card */}
                <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-md border border-gray-200 dark:border-gray-700 mb-12 relative overflow-hidden group transition-all duration-300">
                    <div className="absolute top-1/2 -translate-y-1/2 right-12 p-4 opacity-[0.6] group-hover:opacity-[0.8] transition-opacity pointer-events-none">
                        <img src="/kaia-logo.png.png" alt="Kaia Logo" className="w-48 h-auto" />
                    </div>
                    <div className="relative z-10">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">KAIA (prev. Klaytn)</h3>
                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">Web3 Blockchain Platform for Digital Assets</p>
                        <div className="flex flex-wrap items-center gap-6">
                            <div className="inline-flex items-center gap-2 backdrop-blur-md bg-white/5 dark:bg-white/5 px-4 py-2 rounded-full border border-white/20 dark:border-white/10 shadow-sm">
                                <span className="text-gray-600 dark:text-gray-300 font-bold">Total Grants & Bounties:</span>
                                <span className="text-2xl font-bold text-gray-900 dark:text-white">2500 KAIA</span>
                            </div>

                            <a
                                href="https://www.kaia.io/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative inline-flex items-center justify-center gap-2 px-6 py-3 backdrop-blur-sm bg-purple-500/5 dark:bg-purple-500/10 border border-purple-200/50 dark:border-purple-800/50 text-purple-600 dark:text-purple-300 font-semibold rounded-xl transition-all duration-500 overflow-hidden group/btn hover:border-purple-400"
                            >
                                {/* Wave animation overlay */}
                                <span className="absolute inset-0 w-0 bg-gradient-to-r from-transparent via-purple-400/20 to-transparent group-hover/btn:w-full transition-all duration-700 ease-out skew-x-12"></span>
                                <span className="relative z-10">View Project</span>
                                <ExternalLink size={18} className="relative z-10" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {contributions.map((item, idx) => (
                        <div key={idx} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-purple-200 dark:hover:border-purple-700 shadow-sm hover:shadow-lg transition-all flex flex-col group">
                            <div className="flex justify-between items-start mb-4">
                                <h4 className="font-bold text-lg text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">{item.title}</h4>
                                <span className={`text-xs font-bold px-2 py-1 rounded-full ${item.color === 'purple' ? 'bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300' :
                                    item.color === 'green' ? 'bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300' :
                                        item.color === 'blue' ? 'bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300' : 'bg-yellow-100 dark:bg-yellow-900/40 text-yellow-700 dark:text-yellow-300'
                                    }`}>
                                    {item.reward}
                                </span>
                            </div>
                            <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 leading-relaxed flex-1">{item.description}</p>

                            <div className="flex items-center justify-between mt-auto">
                                <div className="flex items-center gap-2 text-sm text-gray-400 dark:text-gray-500">
                                    <CheckCircle size={16} className="text-green-500 dark:text-green-400" />
                                    <span>{item.status}</span>
                                </div>

                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="relative inline-flex items-center justify-center gap-2 px-4 py-2 backdrop-blur-sm bg-white/5 border border-gray-200/50 dark:border-gray-700/50 text-gray-600 dark:text-gray-400 text-xs font-bold rounded-lg transition-all duration-500 overflow-hidden group/btn hover:border-purple-400/50 hover:text-purple-600 dark:hover:text-purple-400"
                                >
                                    {/* Wave animation overlay */}
                                    <span className="absolute inset-0 w-0 bg-gradient-to-r from-transparent via-purple-400/10 to-transparent group-hover/btn:w-full transition-all duration-700 ease-out skew-x-12"></span>
                                    <span className="relative z-10">View Contribution</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
