import React from 'react';
import { Brain, Crown, Music, Hammer, Quote } from 'lucide-react';
import { BEYOND_TECH } from '../data/portfolioData';

const iconList = [
  <Brain className="w-5 h-5 text-accent-cyan" />,
  <Crown className="w-5 h-5 text-amber-400" />,
  <Music className="w-5 h-5 text-blue-400" />,
  <Hammer className="w-5 h-5 text-emerald-400" />
];

export const BeyondTechSection: React.FC = () => {
  return (
    <section id="beyond" className="relative py-28 px-6 md:px-12 lg:px-16 w-full border-t border-white/[0.06]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-purple-900/[0.04] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-10">
          <div>
            <div className="flex items-center gap-3 text-xs font-mono text-accent-cyan tracking-widest uppercase mb-4">
              <span className="w-6 h-[1px] bg-accent-cyan" />
              <span>05 / THE HUMAN BEHIND THE CODE</span>
            </div>
            <h2 className="gsap-reveal-title font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
              Beyond Technology
            </h2>
          </div>
          <p className="max-w-md text-sm text-typography-secondary font-light leading-relaxed">
            Good engineering isn't just about syntax; it's shaped by how you perceive the world, observe human behavior, and structure your thinking.
          </p>
        </div>

        {/* 4 Editorial Cards Grid */}
        <div className="gsap-stagger-group grid grid-cols-1 md:grid-cols-2 gap-8">
          {BEYOND_TECH.map((item, idx) => (
            <div
              key={item.title}
              className="gsap-card group p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-white/[0.04] to-transparent border border-white/10 hover:border-white/25 transition-all duration-300 relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/10">
                    {iconList[idx] || <Brain className="w-5 h-5 text-accent-cyan" />}
                  </div>
                  <span className="text-xs font-mono text-typography-muted tracking-widest">
                    PERSPECTIVE 0{idx + 1}
                  </span>
                </div>

                <div className="text-xs font-mono text-accent-cyan uppercase tracking-wider mb-2">
                  {item.subtitle}
                </div>

                <h3 className="font-display font-bold text-2xl text-white tracking-tight mb-4">
                  {item.title}
                </h3>

                <p className="text-typography-secondary text-sm sm:text-base font-light leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {item.quote && (
                <div className="pt-6 border-t border-white/[0.06] flex items-start gap-3">
                  <Quote className="w-4 h-4 text-accent-cyan shrink-0 mt-0.5" />
                  <p className="text-xs font-display italic text-slate-300 leading-relaxed">
                    "{item.quote}"
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
