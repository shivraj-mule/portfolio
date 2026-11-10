import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-white/[0.08] bg-[#020408] py-12 px-6 md:px-12 lg:px-16 text-xs font-mono text-typography-muted">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Brand & Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <span className="font-display font-bold text-white text-sm">
            {PERSONAL_INFO.name}
          </span>
          <span className="hidden sm:inline text-slate-600">•</span>
          <span>© {new Date().getFullYear()} Shivraj Sambhaji Mule. All rights reserved.</span>
        </div>

        {/* Center: Philosophy Note */}
        <div className="text-center text-slate-500">
          Built with React, Three.js, Tailwind CSS &amp; First Principles.
        </div>

        {/* Right: Back to Top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 hover:border-accent-cyan/40 hover:text-accent-cyan transition-colors"
          aria-label="Back to top"
        >
          <span>BACK TO TOP</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>

      </div>
    </footer>
  );
};
