import React, { useState } from 'react';
import { Mail, ArrowRight, Linkedin, Github, Check, Copy, Send } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactProps {
  onShowToast: (msg: string) => void;
}

export const Contact: React.FC<ContactProps> = ({ onShowToast }) => {
  const [copied, setCopied] = useState(false);
  const [showQuickForm, setShowQuickForm] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [senderMessage, setSenderMessage] = useState('');
  const [formSent, setFormSent] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    onShowToast(`Copied ${PERSONAL_INFO.email} to clipboard!`);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderEmail || !senderMessage) return;
    setFormSent(true);
    onShowToast('Message transmitted! Raman will reply shortly.');
    setTimeout(() => {
      setSenderName('');
      setSenderEmail('');
      setSenderMessage('');
      setFormSent(false);
      setShowQuickForm(false);
    }, 2000);
  };

  return (
    <section id="contact" className="scroll-mt-28">
      <div className="glass-card rounded-3xl p-8 sm:p-12 border border-white/10 relative overflow-hidden text-center sm:text-left">
        <div className="max-w-2xl space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-xs font-semibold text-purple-300 uppercase tracking-widest font-mono">
            Get In Touch
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Let's Build Something <span className="gradient-text">Great Together</span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
            Open to full-time developer roles, tech internships, and freelance projects. Whether
            you have an opportunity or want to discuss technology and AI, my inbox is always
            open.
          </p>

          {/* Email Display & Quick Copy */}
          <div className="pt-2 flex flex-wrap items-center justify-center sm:justify-start gap-2">
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-[#08090D] border border-white/10 text-white font-mono text-sm sm:text-base hover:border-purple-400/50 hover:bg-[#11131A] transition-all group">
              <Mail className="w-5 h-5 text-purple-400" />
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="hover:text-purple-300 transition-colors"
              >
                {PERSONAL_INFO.email}
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                title="Copy Email Address"
                className="ml-2 p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
                aria-label="Copy Email"
              >
                {copied ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* Contact Buttons */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 pt-4">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 transition-all shadow-glow-sm hover:shadow-glow-lg flex items-center gap-2 border border-purple-400/20 active:scale-95"
            >
              <Send className="w-4 h-4" />
              <span>Send Email</span>
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl font-semibold text-zinc-200 bg-[#08090D] hover:bg-[#161922] border border-white/10 hover:border-blue-500/40 hover:text-white transition-all flex items-center gap-2 active:scale-95"
            >
              <Linkedin className="w-5 h-5 text-blue-400" />
              <span>LinkedIn</span>
            </a>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl font-semibold text-zinc-200 bg-[#08090D] hover:bg-[#161922] border border-white/10 hover:border-white/20 hover:text-white transition-all flex items-center gap-2 active:scale-95"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>

            <button
              type="button"
              onClick={() => setShowQuickForm(!showQuickForm)}
              className="px-4 py-3.5 rounded-xl font-semibold text-zinc-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-sm"
            >
              {showQuickForm ? 'Hide Quick Note' : 'Leave a Quick Note'}
            </button>
          </div>

          {/* Optional Quick Note Form */}
          {showQuickForm && (
            <form
              onSubmit={handleQuickSubmit}
              className="mt-6 p-6 rounded-2xl bg-[#08090D] border border-white/10 space-y-4 text-left animate-in fade-in duration-300"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="e.g. Alex Smith"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#11131A] border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-1">Your Email</label>
                  <input
                    type="email"
                    required
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    placeholder="alex@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#11131A] border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500 text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-mono text-zinc-400 mb-1">Message or Project Inquiry</label>
                <textarea
                  required
                  rows={3}
                  value={senderMessage}
                  onChange={(e) => setSenderMessage(e.target.value)}
                  placeholder="Hi Raman, I saw your portfolio and would like to discuss..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#11131A] border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500 text-sm resize-none"
                />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-zinc-500 font-mono">
                  Direct dispatch to {PERSONAL_INFO.email}
                </span>
                <button
                  type="submit"
                  disabled={formSent}
                  className="px-5 py-2 rounded-xl text-sm font-semibold text-white bg-purple-600 hover:bg-purple-500 transition-colors flex items-center gap-2"
                >
                  {formSent ? <Check className="w-4 h-4 text-emerald-300" /> : <ArrowRight className="w-4 h-4" />}
                  <span>{formSent ? 'Dispatched!' : 'Submit Note'}</span>
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Ambient Glow Graphic */}
        <div className="absolute -right-24 -top-24 w-96 h-96 bg-gradient-to-bl from-purple-500/10 via-blue-500/10 to-transparent rounded-full blur-3xl pointer-events-none"></div>
      </div>
    </section>
  );
};
