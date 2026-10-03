/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Highlights } from './components/Highlights';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';

export default function App() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((current) => (current === msg ? null : current));
    }, 3000);
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#08090D] text-[#E2E8F0] relative overflow-x-hidden selection:bg-purple-500/30 selection:text-purple-200">
      {/* Ambient background lighting */}
      <div className="mesh-background"></div>
      <div className="fixed top-1/3 -left-48 w-96 h-96 bg-purple-900/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="fixed bottom-1/4 -right-48 w-96 h-96 bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Top sticky navigation bar */}
      <Navbar onContactClick={() => {}} />

      {/* Main page content sections */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 sm:space-y-32 py-10 sm:py-16">
        <Hero />
        <Highlights />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Contact onShowToast={showToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating feedback toast */}
      <Toast message={toastMessage} />

      {/* Floating back-to-top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-6 left-6 z-40 p-3 rounded-2xl bg-[#11131A]/90 hover:bg-[#161922] border border-white/10 hover:border-purple-500/40 text-zinc-300 hover:text-white shadow-xl backdrop-blur-md transition-all active:scale-90"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
