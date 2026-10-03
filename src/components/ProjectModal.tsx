import React from 'react';
import { X, Github, ExternalLink, CheckCircle2, Layers } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-[#11131A] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-5 right-5 p-2 rounded-xl text-zinc-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 pr-10">
          <div className="flex items-center gap-2">
            <span
              className={`text-xs font-mono uppercase tracking-wider font-semibold ${
                project.colorTheme === 'purple'
                  ? 'text-purple-400'
                  : project.colorTheme === 'blue'
                  ? 'text-blue-400'
                  : project.colorTheme === 'emerald'
                  ? 'text-emerald-400'
                  : 'text-amber-400'
              }`}
            >
              {project.categoryTag}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {project.title}
          </h2>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 my-5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs font-mono bg-[#08090D] px-3 py-1.5 rounded-lg border border-white/10 text-zinc-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Description & Overview */}
        <div className="space-y-5 text-sm sm:text-base text-zinc-300 leading-relaxed border-t border-white/10 pt-5">
          <p>{project.description}</p>
          {project.detailedOverview && (
            <p className="text-zinc-400">{project.detailedOverview}</p>
          )}

          {/* Key Features */}
          {project.features && project.features.length > 0 && (
            <div className="space-y-3 pt-2">
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider font-mono flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-400" /> Key Features & Capabilities
              </h4>
              <ul className="space-y-2">
                {project.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-zinc-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0"></span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Architecture Components */}
          {project.architecture && project.architecture.length > 0 && (
            <div className="space-y-3 pt-2">
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider font-mono flex items-center gap-2">
                <Layers className="w-4 h-4 text-blue-400" /> Stack Components
              </h4>
              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                {project.architecture.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-lg bg-[#08090D] border border-white/5 text-zinc-300"
                  >
                    • {item}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Actions */}
        <div className="pt-6 mt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 transition-all text-sm shadow-glow-sm"
          >
            <Github className="w-4 h-4" />
            <span>Open Repository on GitHub</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl font-medium text-zinc-400 hover:text-white bg-white/5 hover:bg-white/10 text-sm transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
