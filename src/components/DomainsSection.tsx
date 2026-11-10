import React, { useState } from 'react';
import { Terminal, Cpu, ShieldCheck, Gamepad2, Layers, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import { DOMAINS, DomainItem } from '../data/portfolioData';

const iconMap: Record<string, React.ReactNode> = {
  Terminal: <Terminal className="w-5 h-5" />,
  Cpu: <Cpu className="w-5 h-5" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5" />,
  Gamepad2: <Gamepad2 className="w-5 h-5" />,
  Layers: <Layers className="w-5 h-5" />,
  Sparkles: <Sparkles className="w-5 h-5" />,
};

export const DomainsSection: React.FC = () => {
  const [selectedDomain, setSelectedDomain] = useState<DomainItem>(DOMAINS[0]);

  return (
    <section id="domains" className="relative py-28 px-6 md:px-12 lg:px-16 w-full border-t border-white/[0.06] bg-[#05070B]/50">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 text-xs font-mono text-accent-cyan tracking-widest uppercase mb-4">
              <span className="w-6 h-[1px] bg-accent-cyan" />
              <span>02 / DOMAINS OF EXPLORATION</span>
            </div>
            <h2 className="gsap-reveal-title font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
              Where I Focus My Curiosity
            </h2>
          </div>
          <p className="max-w-md text-sm text-typography-muted font-light leading-relaxed">
            I don't believe in arbitrary skill percentages. Instead, here are the technical disciplines where I design architectures, run benchmarks, and build tangible systems.
          </p>
        </div>

        {/* Interactive Domain Explorer: Dual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Domain Selection List */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {DOMAINS.map((domain) => {
              const isSelected = selectedDomain.number === domain.number;
              return (
                <button
                  key={domain.number}
                  onClick={() => setSelectedDomain(domain)}
                  className={`group text-left p-4 sm:p-5 rounded-2xl transition-all duration-300 flex items-center justify-between border ${
                    isSelected
                      ? 'bg-white/[0.06] border-accent-cyan/40 shadow-[0_0_25px_rgba(0,229,255,0.1)] translate-x-1'
                      : 'bg-canvas-card border-border-subtle hover:border-white/20 hover:bg-white/[0.02]'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`text-xs font-mono tracking-wider transition-colors ${
                      isSelected ? 'text-accent-cyan font-semibold' : 'text-typography-muted'
                    }`}>
                      {domain.number}
                    </span>
                    <div className="flex items-center gap-2.5">
                      <div className={`p-2 rounded-lg transition-colors ${
                        isSelected ? 'bg-accent-cyan/15 text-accent-cyan' : 'bg-white/[0.04] text-slate-400 group-hover:text-white'
                      }`}>
                        {iconMap[domain.icon] || <Terminal className="w-5 h-5" />}
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-sm sm:text-base text-white tracking-tight">
                          {domain.title}
                        </h3>
                        <p className="text-xs text-typography-muted line-clamp-1">
                          {domain.tagline}
                        </p>
                      </div>
                    </div>
                  </div>

                  <ArrowRight className={`w-4 h-4 transition-transform duration-200 ${
                    isSelected ? 'text-accent-cyan translate-x-1' : 'text-slate-600 group-hover:text-slate-400'
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Right Column: Deep-Dive Domain Inspector Card */}
          <div className="lg:col-span-7">
            <div className="h-full p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-white/[0.05] via-white/[0.02] to-transparent border border-white/10 flex flex-col justify-between relative overflow-hidden backdrop-blur-xl">
              
              {/* Ambient backdrop glow */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-accent-cyan/[0.08] rounded-full blur-[90px] pointer-events-none" />

              <div>
                {/* Header of Active Domain */}
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-6 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan">
                      {iconMap[selectedDomain.icon] || <Terminal className="w-6 h-6" />}
                    </div>
                    <div>
                      <span className="text-xs font-mono text-accent-cyan tracking-widest uppercase">
                        DOMAIN {selectedDomain.number}
                      </span>
                      <h4 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">
                        {selectedDomain.title}
                      </h4>
                    </div>
                  </div>
                </div>

                {/* Subtitle / Tagline */}
                <div className="text-base sm:text-lg font-display text-slate-200 mb-4 font-medium">
                  {selectedDomain.tagline}
                </div>

                {/* Narrative Description */}
                <p className="text-typography-secondary text-base sm:text-lg font-light leading-relaxed mb-8">
                  {selectedDomain.description}
                </p>

                {/* Technical Stack & Topics Tag Cloud */}
                <div>
                  <div className="text-xs font-mono text-typography-muted uppercase tracking-wider mb-3">
                    Key Competencies &amp; Technologies
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {selectedDomain.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-xs font-mono text-slate-200"
                      >
                        <CheckCircle2 className="w-3 h-3 text-accent-cyan" />
                        <span>{tag}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom footer status */}
              <div className="pt-8 mt-8 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-typography-muted">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Real Projects Implemented</span>
                </span>
                <span>EXPLORE WORK BELOW ↓</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
