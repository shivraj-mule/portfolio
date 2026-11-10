import React from 'react';
import { Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative py-28 px-6 md:px-12 lg:px-16 w-full border-t border-white/[0.06]">
      {/* Subtle ambient glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-600/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Index Marker */}
        <div className="flex items-center gap-3 text-xs font-mono text-accent-cyan tracking-widest uppercase mb-4">
          <span className="w-6 h-[1px] bg-accent-cyan" />
          <span>{PERSONAL_INFO.about.sectionNumber}</span>
        </div>

        {/* Big Editorial Headline */}
        <h2 className="gsap-reveal-title font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.15] max-w-4xl mb-16">
          {PERSONAL_INFO.about.headline}
        </h2>

        {/* Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Personal Narrative */}
          <div className="lg:col-span-7 space-y-8 text-typography-secondary text-base sm:text-lg leading-relaxed font-light">
            {PERSONAL_INFO.about.paragraphs.map((para, idx) => (
              <p key={idx} className="relative pl-6 border-l border-white/10 hover:border-accent-cyan/50 transition-colors duration-300">
                {para}
              </p>
            ))}

            {/* Academic & Geographic Anchor */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">Education</div>
                <div className="font-display font-semibold text-white text-base">B.Tech in Information Technology</div>
                <div className="text-xs text-typography-muted mt-1">Bharati Vidyapeeth CoE, Pune</div>
              </div>

              <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">Core Mindset</div>
                <div className="font-display font-semibold text-white text-base">Builder &amp; Systems Experimenter</div>
                <div className="text-xs text-typography-muted mt-1">From microcontrollers to neural models</div>
              </div>
            </div>
          </div>

          {/* Right Column: Three First-Principles Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-xs font-mono text-typography-muted uppercase tracking-widest mb-3">
              How I Approach Engineering
            </div>

            {PERSONAL_INFO.about.principles.map((item, idx) => (
              <div
                key={idx}
                className="group p-6 rounded-2xl bg-canvas-card border border-border-subtle hover:border-accent-cyan/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-7 h-7 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-xs font-mono text-accent-cyan group-hover:bg-accent-cyan group-hover:text-black transition-colors">
                    0{idx + 1}
                  </div>
                  <h3 className="font-display font-semibold text-white text-base tracking-tight">
                    {item.label}
                  </h3>
                </div>
                <p className="text-sm text-typography-muted font-normal leading-relaxed pl-10">
                  {item.detail}
                </p>
              </div>
            ))}

            {/* Editorial Quote Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-white/[0.04] to-transparent border border-white/[0.08] relative overflow-hidden">
              <Sparkles className="w-4 h-4 text-accent-cyan mb-2" />
              <p className="text-sm font-display italic text-slate-200">
                "The real thrill of technology isn't memorizing frameworks — it's taking things apart, seeing how signals move across silicon, and writing code that feels alive."
              </p>
              <div className="text-xs font-mono text-typography-muted mt-3">
                — Personal Note
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
