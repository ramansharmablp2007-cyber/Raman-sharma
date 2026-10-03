import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="scroll-mt-28 space-y-10">
      <div className="text-center sm:text-left space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-300 uppercase tracking-widest font-mono">
          Technical Arsenal
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Skills &amp; <span className="gradient-text">Core Competencies</span>
        </h2>
        <p className="text-zinc-400 text-base max-w-xl">
          Curated set of technologies, frameworks, and modern generative AI tools I leverage to
          build end-to-end applications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {SKILL_CATEGORIES.map((category) => {
          const isPurple = category.color === 'purple';
          const isBlue = category.color === 'blue';
          const isEmerald = category.color === 'emerald';

          const iconBoxStyle = isPurple
            ? 'bg-purple-500/10 border-purple-500/30 text-purple-400'
            : isBlue
            ? 'bg-blue-500/10 border-blue-500/30 text-blue-400'
            : 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400';

          const dotStyle = isPurple
            ? 'bg-purple-400'
            : isBlue
            ? 'bg-blue-400'
            : 'bg-emerald-400';

          return (
            <div
              key={category.title}
              className="glass-card rounded-2xl p-7 space-y-6 border border-white/10 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div
                  className={`w-12 h-12 rounded-xl border flex items-center justify-center text-xl font-bold ${iconBoxStyle}`}
                >
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  {category.title}
                </h3>
                <p className="text-sm text-zinc-400">{category.description}</p>
              </div>

              <ul className="space-y-3 pt-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-3 text-sm text-zinc-200 hover:text-white transition-colors"
                  >
                    <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${dotStyle}`}></span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};
