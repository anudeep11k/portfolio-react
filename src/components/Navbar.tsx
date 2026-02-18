import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Opensource', href: '#opensource' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        document.documentElement.classList.remove('dark');
        localStorage.removeItem('theme');

        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            const sections = document.querySelectorAll('section');
            let current = '';

            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                if (window.scrollY >= sectionTop - 120) {
                    current = section.getAttribute('id') || '';
                }
            });

            if (current) setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled
            ? 'py-3 backdrop-blur-xl bg-white/60 dark:bg-black/40 border-b border-white/20 dark:border-white/10 shadow-lg'
            : 'py-5 bg-transparent'
            }`}>
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">

                    <div className="flex-shrink-0 flex items-center">
                        <a href="#home" className="group relative transition-all duration-300 hover:scale-110 active:scale-95 flex items-center gap-2">
                            <span className="animate-wave text-xl">👋</span>
                            <span className="text-2xl font-black tracking-tighter flex items-center text-sky-500">
                                <span>A</span>
                                <span>K</span>
                            </span>
                        </a>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-2">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className={`relative px-4 py-2 rounded-xl text-sm font-black uppercase tracking-widest transition-all duration-300 overflow-hidden group/btn hover:scale-105 active:scale-95
                                ${activeSection === item.href.substring(1)
                                        ? 'text-sky-600 bg-sky-500/10 border border-sky-500/20'
                                        : 'text-gray-600 dark:text-gray-300 hover:text-sky-500 hover:bg-white/20'
                                    }`}
                            >
                                {/* Wave animation overlay */}
                                <span className="absolute inset-0 w-0 bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover/btn:w-full transition-all duration-1000 ease-out skew-x-12"></span>
                                <span className="relative z-10">{item.name}</span>
                            </a>
                        ))}
                    </div>

                    {/* Mobile button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-3 rounded-xl bg-white/10 border border-white/20 text-gray-700 dark:text-gray-200 hover:text-sky-500 transition-all duration-300 hover:scale-110 active:scale-95"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute w-full top-full left-0 backdrop-blur-2xl bg-white/90 dark:bg-black/80 border-b border-white/20 shadow-2xl animate-fade-in">
                    <div className="px-6 py-8 space-y-3">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className={`relative block px-6 py-4 rounded-2xl text-base font-black uppercase tracking-widest transition-all duration-300 overflow-hidden group/btn
                                ${activeSection === item.href.substring(1)
                                        ? 'text-sky-600 bg-sky-500/10 border border-sky-500/20'
                                        : 'text-gray-700 dark:text-gray-200 hover:bg-black/5 dark:hover:bg-white/5'
                                    }`}
                            >
                                {/* Wave animation overlay */}
                                <span className="absolute inset-0 w-0 bg-gradient-to-r from-transparent via-sky-500/10 to-transparent group-hover/btn:w-full transition-all duration-1000 ease-out skew-x-12"></span>
                                <span className="relative z-10">{item.name}</span>
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}
