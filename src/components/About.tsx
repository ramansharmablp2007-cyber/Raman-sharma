import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="scroll-mt-28">
      <div className="glass-card rounded-3xl p-8 sm:p-12 relative overflow-hidden border border-white/10">
        <div className="max-w-3xl space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-xs font-semibold text-purple-300 uppercase tracking-widest font-mono">
            Profile Overview
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Turning Ideas Into <span className="gradient-text">Digital Experiences</span>
          </h2>

          <div className="space-y-4 text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
            {PERSONAL_INFO.bio.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="pt-4 flex flex-wrap gap-4 text-sm font-mono text-zinc-400">
            <span className="flex items-center gap-2 bg-[#08090D] px-3.5 py-2 rounded-lg border border-white/5 shadow-sm">
              <span className="text-purple-400 font-bold">📍</span> {PERSONAL_INFO.location}
            </span>
            <span className="flex items-center gap-2 bg-[#08090D] px-3.5 py-2 rounded-lg border border-white/5 shadow-sm">
              <span className="text-blue-400 font-bold">🎓</span> {PERSONAL_INFO.educationStatus}
            </span>
            <span className="flex items-center gap-2 bg-[#08090D] px-3.5 py-2 rounded-lg border border-white/5 shadow-sm">
              <span className="text-emerald-400 font-bold">🚀</span> {PERSONAL_INFO.focus}
            </span>
          </div>
        </div>

        {/* Ambient decorative graphic */}
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-gradient-to-br from-purple-600/10 to-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
      </div>
    </section>
  );
};
