import React, { Suspense, lazy } from 'react';
import { ArrowDown, ArrowUpRight, Compass, Cpu } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon } from './Icons';

// Lazy-load Three.js 3D canvas to keep initial page load ultra lightweight
const Hero3D = lazy(() => import('./Hero3D').then((mod) => ({ default: mod.Hero3D })));

export const HeroSection: React.FC = () => {
  const handleScrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-between pt-24 pb-12 px-6 md:px-12 lg:px-16 overflow-hidden"
    >
      {/* Background ambient lighting effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-b from-blue-950/20 via-cyan-950/10 to-transparent rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent-cyan/[0.03] rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Main Hero Grid */}
      <div className="max-w-7xl mx-auto w-full my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Column: Expressive Typography & Narrative */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6 z-10">
          
          {/* Subtle identity badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md w-fit">
            <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
            <span className="text-xs font-mono tracking-wide text-typography-secondary uppercase">
              {PERSONAL_INFO.statusBadge}
            </span>
          </div>

          {/* Large Expressive Name & Headline */}
          <div className="space-y-2">
            <h1 className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[1.05] text-white">
              <span className="block text-white">
                Shivraj
              </span>
              <span className="block text-chrome">
                Mule
              </span>
            </h1>

            {/* Core Credo / Triple Philosophy */}
            <div className="pt-2 flex flex-wrap items-center gap-x-2 text-xl sm:text-2xl lg:text-3xl font-display font-semibold tracking-tight">
              <span className="text-white">Curious mind.</span>
              <span className="text-accent-cyan">Creative builder.</span>
              <span className="text-slate-400">Technology enthusiast.</span>
            </div>
          </div>

          {/* Supporting Narrative */}
          <p className="max-w-xl text-base sm:text-lg text-typography-secondary font-light leading-relaxed">
            {PERSONAL_INFO.hero.subtext}
          </p>

          {/* Quick Technical Keywords / Pillars */}
          <div className="flex flex-wrap gap-2 pt-1">
            {['Systems & Python', 'Local AI & LLMs', 'ESP32 & Sensors', 'Godot 3D Simulation', 'On-Device OCR'].map(
              (pill) => (
                <span
                  key={pill}
                  className="px-2.5 py-1 text-xs font-mono text-slate-300 bg-white/[0.03] border border-white/[0.06] rounded-md"
                >
                  {pill}
                </span>
              )
            )}
          </div>

          {/* Action CTAs */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <button
              onClick={handleScrollToProjects}
              className="group relative inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-accent-cyan text-black font-semibold text-sm tracking-wide transition-all duration-300 hover:bg-white hover:shadow-[0_0_30px_rgba(0,229,255,0.4)] hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>{PERSONAL_INFO.hero.primaryCta}</span>
              <ArrowDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" />
            </button>

            <a
              href={PERSONAL_INFO.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-white/[0.04] border border-white/[0.1] text-typography-primary font-medium text-sm tracking-wide transition-all duration-200 hover:bg-white/[0.08] hover:border-white/20 hover:-translate-y-0.5"
            >
              <GithubIcon className="w-4 h-4 text-slate-300" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
            </a>

            <button
              onClick={handleScrollToContact}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full text-typography-secondary font-medium text-sm tracking-wide transition-colors duration-200 hover:text-accent-cyan"
            >
              <span>{PERSONAL_INFO.hero.secondaryCta}</span>
              <span className="text-xs font-mono">→</span>
            </button>
          </div>
        </div>

        {/* Right Column: Original 3D Kinetic Sculpture */}
        <div className="lg:col-span-5 relative flex items-center justify-center">
          <Suspense
            fallback={
              <div className="w-full h-[360px] sm:h-[480px] lg:h-[580px] flex items-center justify-center">
                <div className="relative flex items-center justify-center w-48 h-48">
                  <div className="absolute inset-0 rounded-full border border-accent-cyan/20 animate-spin" />
                  <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-slate-800 to-slate-600 blur-sm animate-pulse" />
                </div>
              </div>
            }
          >
            <Hero3D />
          </Suspense>
        </div>

      </div>

      {/* Hero Bottom Bar / Scroll Cue */}
      <div className="max-w-7xl mx-auto w-full pt-8 flex items-center justify-between border-t border-white/[0.06] text-xs font-mono text-typography-muted">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Compass className="w-3.5 h-3.5 text-accent-cyan" />
            <span>PUNE, IN (18.5204° N, 73.8567° E)</span>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <Cpu className="w-3.5 h-3.5 text-slate-400" />
            <span>LOCAL ARCHITECTURE FIRST</span>
          </div>
        </div>

        {/* Scroll down trigger */}
        <a
          href="#about"
          className="flex items-center gap-2 text-typography-secondary hover:text-accent-cyan transition-colors group cursor-pointer"
        >
          <span className="tracking-widest">SCROLL TO EXPLORE</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce group-hover:text-accent-cyan" />
        </a>
      </div>
    </section>
  );
};
