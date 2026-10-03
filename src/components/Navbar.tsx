import React, { useState, useEffect } from 'react';
import { Menu, X, Github, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onContactClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 backdrop-blur-md ${
        scrolled
          ? 'bg-[#08090D]/90 border-b border-white/[0.08] shadow-lg shadow-black/40'
          : 'bg-[#08090D]/80 border-b border-white/[0.06]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="group flex items-center gap-3 text-white font-bold text-xl tracking-tight"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white shadow-glow-sm font-mono font-bold text-lg group-hover:scale-105 transition-transform">
            RS
          </div>
          <div className="flex flex-col">
            <span className="leading-none group-hover:text-purple-300 transition-colors">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-[11px] font-mono text-zinc-400 font-normal tracking-wider mt-1">
              {PERSONAL_INFO.tagline}
            </span>
          </div>
        </a>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="hover:text-white transition-colors py-1 relative hover:after:w-full after:w-0 after:h-[2px] after:bg-purple-500 after:absolute after:bottom-0 after:left-0 after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA & Social Quick Links */}
        <div className="flex items-center gap-3">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/[0.05] transition-all border border-transparent hover:border-white/10"
          >
            <Github className="w-5 h-5" />
          </a>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              onContactClick();
              const contactSec = document.getElementById('contact');
              if (contactSec) contactSec.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 transition-all shadow-glow-sm hover:shadow-glow-lg border border-purple-400/20 active:scale-95"
          >
            Get in Touch
          </a>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/[0.05] border border-white/10"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0e1017] border-b border-white/10 px-4 pt-3 pb-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-zinc-300 hover:text-white hover:bg-white/5 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-white/10 flex items-center justify-between">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-zinc-300 hover:text-white"
            >
              <Github className="w-4 h-4" />
              <span>GitHub Profile</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
