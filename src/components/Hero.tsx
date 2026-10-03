import React from 'react';
import { ArrowDown, Github, Linkedin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const projectsSec = document.getElementById('projects');
    if (projectsSec) {
      projectsSec.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative z-10 pt-4 pb-12 lg:py-16 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16"
    >
      {/* Left Content */}
      <div className="flex-1 text-center lg:text-left space-y-6">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#11131A] border border-white/10 text-xs font-medium text-zinc-300 shadow-sm">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span>{PERSONAL_INFO.status}</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
          Hi, I'm <span className="gradient-text">{PERSONAL_INFO.name}</span> —
          <br />
          <span className="text-zinc-200">{PERSONAL_INFO.role}</span>
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed mx-auto lg:mx-0">
          BCA 3rd-year student specializing in responsive web development, full-stack ASP.NET
          applications, database-driven websites, and AI-powered workflows.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
          <a
            href="#projects"
            onClick={scrollToProjects}
            className="px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 transition-all shadow-glow-sm hover:shadow-glow-lg flex items-center gap-2 border border-purple-400/20 active:scale-95 cursor-pointer"
          >
            <span>View Projects</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-xl font-semibold text-zinc-200 bg-[#11131A] hover:bg-[#161922] border border-white/10 hover:border-white/20 transition-all flex items-center gap-2 hover:text-white active:scale-95"
          >
            <Github className="w-5 h-5" />
            <span>View GitHub</span>
          </a>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="px-4 py-3.5 rounded-xl font-semibold text-zinc-400 bg-[#11131A] hover:bg-[#161922] border border-white/10 hover:border-blue-500/40 hover:text-blue-400 transition-all flex items-center gap-2 active:scale-95"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Right Side: Profile Photo Showcase with Glow & Badges */}
      <div className="relative w-full max-w-[340px] sm:max-w-[400px] flex items-center justify-center">
        {/* Backing Ambient Glow */}
        <div className="absolute -inset-4 bg-gradient-to-tr from-purple-600/30 to-blue-600/30 rounded-3xl blur-2xl opacity-75"></div>

        {/* Framing Container */}
        <div className="relative w-full aspect-[4/5] rounded-3xl p-2.5 bg-gradient-to-b from-white/15 via-white/5 to-white/0 border border-white/15 shadow-2xl backdrop-blur-xl">
          <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#161821] group">
            {/* User Profile Photo */}
            <img
              src={PERSONAL_INFO.photoUrl}
              alt={PERSONAL_INFO.name}
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            {/* Subtle Gradient overlay at bottom of photo to merge softly */}
            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#11131A] via-[#11131A]/40 to-transparent"></div>
          </div>

          {/* Floating Badge 1 (Top Left) */}
          <div className="absolute -top-4 -left-4 sm:-left-6 badge-float z-20">
            <div className="px-4 py-2.5 rounded-2xl bg-[#11131A]/90 border border-purple-500/30 shadow-xl backdrop-blur-md flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-white">
              <span className="text-base">💻</span>
              <span className="tracking-wide">Full-Stack &amp; AI</span>
            </div>
          </div>

          {/* Floating Badge 2 (Bottom Right) */}
          <div className="absolute -bottom-4 -right-4 sm:-right-6 badge-float-delayed z-20">
            <div className="px-4 py-2.5 rounded-2xl bg-[#11131A]/90 border border-blue-500/30 shadow-xl backdrop-blur-md flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-white">
              <span className="text-base">🎓</span>
              <span className="tracking-wide">BCA 3rd Year</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
