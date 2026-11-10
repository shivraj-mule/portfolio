import React from 'react';
import { Radio } from 'lucide-react';
import { CURRENTLY_EXPLORING } from '../data/portfolioData';

export const ExploringSection: React.FC = () => {
  return (
    <section id="exploring" className="relative py-28 px-6 md:px-12 lg:px-16 w-full border-t border-white/[0.06] bg-[#05070B]/40">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-10">
          <div>
            <div className="flex items-center gap-3 text-xs font-mono text-accent-cyan tracking-widest uppercase mb-4">
              <span className="w-6 h-[1px] bg-accent-cyan" />
              <span>04 / RESEARCH RADAR</span>
            </div>
            <h2 className="gsap-reveal-title font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
              What I Am Currently Exploring
            </h2>
          </div>
          <p className="max-w-md text-sm text-typography-secondary font-light leading-relaxed">
            Curiosity is never static. These are active research branches and experimental prototypes currently sitting on my desk and local terminals.
          </p>
        </div>

        {/* Research Grid */}
        <div className="gsap-stagger-group grid grid-cols-1 md:grid-cols-2 gap-6">
          {CURRENTLY_EXPLORING.map((item, idx) => {
            return (
              <div
                key={item.topic}
                className="gsap-card group p-8 rounded-3xl bg-canvas-card border border-border-subtle hover:border-accent-cyan/40 transition-all duration-300 relative overflow-hidden hover:-translate-y-1"
              >
                {/* Subtle top indicator */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
                    <span className="text-xs font-mono text-accent-cyan tracking-wider uppercase">
                      {item.area}
                    </span>
                  </div>

                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-typography-muted">
                    {item.stage}
                  </span>
                </div>

                {/* Topic Title */}
                <h3 className="font-display font-bold text-xl sm:text-2xl text-white tracking-tight mb-3 group-hover:text-accent-cyan transition-colors">
                  {item.topic}
                </h3>

                {/* Research Notes */}
                <p className="text-typography-secondary text-sm sm:text-base font-light leading-relaxed mb-6">
                  {item.notes}
                </p>

                {/* Bottom marker */}
                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-typography-muted">
                  <span>LOG BRANCH #0{idx + 1}</span>
                  <span className="group-hover:text-white transition-colors">ACTIVE PROTOTYPE</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Editorial banner at bottom of exploring */}
        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-typography-muted">
          <div className="flex items-center gap-3">
            <Radio className="w-4 h-4 text-accent-cyan animate-pulse" />
            <span>Open to discussing, testing, or collaborating on any of these experimental topics.</span>
          </div>
          <a
            href="#contact"
            className="text-white hover:text-accent-cyan transition-colors underline underline-offset-4"
          >
            Start a conversation →
          </a>
        </div>

      </div>
    </section>
  );
};
