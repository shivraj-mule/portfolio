import React, { useState } from 'react';
import { Mail, MessageCircle, Copy, Check, ArrowUpRight, Sparkles, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon } from './Icons';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="relative py-32 px-6 md:px-12 lg:px-16 w-full border-t border-white/[0.06] overflow-hidden">
      {/* Dramatic ambient radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-accent-cyan/[0.04] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto space-y-16 relative z-10 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-accent-cyan mx-auto">
          <Sparkles className="w-3.5 h-3.5 text-accent-cyan" />
          <span>06 / GET IN TOUCH</span>
        </div>

        {/* Big Memorable Headline */}
        <div className="space-y-4">
          <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white tracking-tight leading-[1.1]">
            Have an interesting idea?<br />
            <span className="text-chrome">Let's make something.</span>
          </h2>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-typography-secondary font-light leading-relaxed">
            Whether you want to discuss local AI workflows, wearable sensors, collaborative software projects, or simply exchange ideas — I'm always open to curious minds.
          </p>
        </div>

        {/* Primary Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left pt-6">
          
          {/* Primary Email Card */}
          <div className="p-6 rounded-2xl bg-canvas-card border border-border-subtle hover:border-accent-cyan/40 transition-all duration-300 flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-accent-cyan/10 border border-accent-cyan/20 flex items-center justify-center text-accent-cyan">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div>
                <div className="text-xs font-mono text-typography-muted uppercase tracking-wider">Primary Email</div>
                <div className="font-display font-semibold text-white text-base truncate mt-0.5">
                  {PERSONAL_INFO.contact.email}
                </div>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-white/[0.06] flex items-center justify-between">
              <a
                href={`mailto:${PERSONAL_INFO.contact.email}`}
                className="text-xs font-mono text-accent-cyan group-hover:underline flex items-center gap-1"
              >
                <span>Send Email</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <span className="text-[10px] font-mono text-typography-muted">
                {copiedEmail ? 'Copied!' : 'Click to copy'}
              </span>
            </div>
          </div>

          {/* WhatsApp Direct Chat Card */}
          <a
            href={PERSONAL_INFO.contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl bg-canvas-card border border-border-subtle hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between group"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <MessageCircle className="w-5 h-5" />
              </div>

              <div>
                <div className="text-xs font-mono text-typography-muted uppercase tracking-wider">WhatsApp Instant</div>
                <div className="font-display font-semibold text-white text-base mt-0.5">
                  {PERSONAL_INFO.contact.phone}
                </div>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-white/[0.06] flex items-center justify-between">
              <span className="text-xs font-mono text-emerald-400 group-hover:underline flex items-center gap-1">
                <span>Start WhatsApp Chat</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
              <span className="text-[10px] font-mono text-typography-muted">Tap to Chat</span>
            </div>
          </a>

          {/* GitHub Profile Card */}
          <a
            href={PERSONAL_INFO.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl bg-canvas-card border border-border-subtle hover:border-white/30 transition-all duration-300 flex flex-col justify-between group"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
                <GithubIcon className="w-5 h-5" />
              </div>

              <div>
                <div className="text-xs font-mono text-typography-muted uppercase tracking-wider">GitHub Code</div>
                <div className="font-display font-semibold text-white text-base mt-0.5">
                  github.com/ShivrajMule
                </div>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-white/[0.06] flex items-center justify-between">
              <span className="text-xs font-mono text-slate-300 group-hover:underline flex items-center gap-1">
                <span>View Repositories</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
              <span className="text-[10px] font-mono text-typography-muted">Open Source</span>
            </div>
          </a>

        </div>

        {/* Academic / Location Note */}
        <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-typography-muted">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-accent-cyan" />
            <span>{PERSONAL_INFO.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
            <span>Academic: {PERSONAL_INFO.contact.academicEmail}</span>
          </div>
        </div>

      </div>
    </section>
  );
};
