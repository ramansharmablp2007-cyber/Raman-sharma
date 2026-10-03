import React from 'react';
import { EDUCATION_DATA } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="scroll-mt-28 space-y-10">
      <div className="text-center sm:text-left space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-xs font-semibold text-purple-300 uppercase tracking-widest font-mono">
          Academic Timeline
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Education &amp; <span className="gradient-text">Qualifications</span>
        </h2>
      </div>

      <div className="space-y-6">
        {EDUCATION_DATA.map((item) => {
          const isBCA = item.id === 'bca';
          const isSenior = item.id === 'senior-sec';

          const hoverBorder = isBCA
            ? 'hover:border-purple-500/40'
            : isSenior
            ? 'hover:border-blue-500/40'
            : 'hover:border-zinc-500/40';

          const badgeClass =
            item.badgeStyle === 'purple'
              ? 'bg-purple-500/10 border-purple-500/20 text-purple-300'
              : item.badgeStyle === 'blue'
              ? 'bg-blue-500/10 border-blue-500/20 text-blue-300'
              : 'bg-zinc-800 border-white/10 text-zinc-300';

          const scoreColor = isSenior
            ? 'text-purple-400'
            : isBCA
            ? 'text-zinc-200'
            : 'text-blue-400';

          return (
            <div
              key={item.id}
              className={`glass-card rounded-2xl p-6 sm:p-8 border border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6 ${hoverBorder} transition-all duration-300`}
            >
              <div className="space-y-2">
                <div
                  className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-mono font-medium ${badgeClass}`}
                >
                  {item.badgeText}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {item.title}
                </h3>
                <p className="text-zinc-400 font-medium">{item.institution}</p>
              </div>

              <div className="md:text-right shrink-0">
                <div
                  className={`font-mono font-extrabold ${
                    item.isScore ? `text-2xl ${scoreColor}` : 'text-lg text-zinc-200'
                  }`}
                >
                  {item.periodOrScore}
                </div>
                <div className="text-xs font-mono text-zinc-400 mt-1">
                  {item.subtext}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
