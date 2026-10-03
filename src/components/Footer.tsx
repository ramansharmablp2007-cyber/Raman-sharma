import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollTo = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const elem = document.getElementById(id);
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/[0.06] bg-[#08090D] py-12 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <div className="font-bold text-lg text-white">{PERSONAL_INFO.name}</div>
        <p className="text-sm text-zinc-400">{PERSONAL_INFO.role}</p>

        <div className="flex items-center justify-center gap-6 text-sm text-zinc-400 pt-2">
          <a
            href="#about"
            onClick={(e) => scrollTo(e, 'about')}
            className="hover:text-white transition-colors"
          >
            About
          </a>
          <a
            href="#skills"
            onClick={(e) => scrollTo(e, 'skills')}
            className="hover:text-white transition-colors"
          >
            Skills
          </a>
          <a
            href="#projects"
            onClick={(e) => scrollTo(e, 'projects')}
            className="hover:text-white transition-colors"
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={(e) => scrollTo(e, 'contact')}
            className="hover:text-white transition-colors"
          >
            Contact
          </a>
        </div>

        <div className="text-xs font-mono text-zinc-400 pt-4 border-t border-white/5 max-w-sm mx-auto">
          &copy; 2026 {PERSONAL_INFO.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
