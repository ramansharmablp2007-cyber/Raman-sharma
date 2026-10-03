import React from 'react';
import { HIGHLIGHTS } from '../data/portfolioData';

export const Highlights: React.FC = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Card 1: Senior Secondary Score */}
      <div className="glass-card rounded-2xl p-7 flex items-center gap-5 relative overflow-hidden group">
        <div className="w-14 h-14 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
          <span className="text-2xl font-mono text-purple-400 font-bold">69%</span>
        </div>
        <div>
          <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight">
            69.80%
          </div>
          <div className="text-sm font-medium text-zinc-400 mt-0.5">
            Senior Secondary Score
          </div>
        </div>
        <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-purple-500/5 rounded-full blur-xl pointer-events-none"></div>
      </div>

      {/* Card 2: Core Technologies */}
      <div className="glass-card rounded-2xl p-7 flex items-center gap-5 relative overflow-hidden group">
        <div className="w-14 h-14 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
          <span className="text-2xl font-mono text-blue-400 font-bold">4+</span>
        </div>
        <div>
          <div className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
            Core Technologies
          </div>
          <div className="text-xs sm:text-sm font-medium text-zinc-400 mt-1 font-mono">
            HTML • CSS • JS • C# / ASP.NET
          </div>
        </div>
        <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-blue-500/5 rounded-full blur-xl pointer-events-none"></div>
      </div>

      {/* Card 3: AI Powered */}
      <div className="glass-card rounded-2xl p-7 flex items-center gap-5 relative overflow-hidden group">
        <div className="w-14 h-14 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
          <span className="text-2xl">⚡</span>
        </div>
        <div>
          <div className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
            AI Powered
          </div>
          <div className="text-xs sm:text-sm font-medium text-zinc-400 mt-1">
            Generative AI &amp; Prompt Engineering
          </div>
        </div>
        <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-emerald-500/5 rounded-full blur-xl pointer-events-none"></div>
      </div>
    </section>
  );
};
