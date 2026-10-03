import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="scroll-mt-28 space-y-10">
      <div className="text-center sm:text-left space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-xs font-semibold text-purple-300 uppercase tracking-widest font-mono">
          Selected Work
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-zinc-400 text-base max-w-xl">
          Practical applications built with full-stack frameworks, database backends, and prompt
          workflows.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS_DATA.map((project) => {
          const isPurple = project.colorTheme === 'purple';
          const isBlue = project.colorTheme === 'blue';
          const isEmerald = project.colorTheme === 'emerald';

          const tagColor = isPurple
            ? 'text-purple-400'
            : isBlue
            ? 'text-blue-400'
            : isEmerald
            ? 'text-emerald-400'
            : 'text-amber-400';

          const dotColor = isPurple
            ? 'bg-purple-500'
            : isBlue
            ? 'bg-blue-500'
            : isEmerald
            ? 'bg-emerald-500'
            : 'bg-amber-500';

          const titleHover = isPurple
            ? 'group-hover:text-purple-300'
            : isBlue
            ? 'group-hover:text-blue-300'
            : isEmerald
            ? 'group-hover:text-emerald-300'
            : 'group-hover:text-amber-300';

          return (
            <div
              key={project.id}
              className="glass-card rounded-2xl p-7 flex flex-col justify-between border border-white/10 group transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span
                    className={`text-xs font-mono uppercase tracking-wider font-semibold ${tagColor}`}
                  >
                    {project.categoryTag}
                  </span>
                  <span className={`w-2 h-2 rounded-full ${dotColor}`}></span>
                </div>

                <h3
                  className={`text-2xl font-bold text-white transition-colors cursor-pointer ${titleHover}`}
                  onClick={() => setSelectedProject(project)}
                >
                  {project.title}
                </h3>

                <p className="text-sm text-zinc-400 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono bg-[#08090D] px-2.5 py-1 rounded border border-white/10 text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center justify-between">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-300 hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      clipRule="evenodd"
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    />
                  </svg>
                  <span>GitHub Repository</span>
                </a>

                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-mono text-zinc-400 hover:text-purple-400 transition-colors px-2 py-1 rounded hover:bg-white/5"
                >
                  View Details &rarr;
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Interactive Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
