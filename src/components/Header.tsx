import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeaderProps {
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Identity', href: '#about' },
    { label: 'Domains', href: '#domains' },
    { label: 'Projects', href: '#projects' },
    { label: 'Exploring', href: '#exploring' },
    { label: 'Beyond Tech', href: '#beyond' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#05070B]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.5)] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand / Monogram */}
        <a
          href="#"
          onClick={(e) => handleLinkClick(e, '#')}
          className="group flex items-center gap-3 text-typography-primary font-display font-bold tracking-tight text-lg"
          aria-label="Shivraj Mule Home"
        >
          <div className="relative w-8 h-8 rounded-lg bg-white/[0.05] border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:border-accent-cyan/50 group-hover:bg-accent-cyan/10">
            <span className="text-sm font-mono tracking-tighter text-white group-hover:text-accent-cyan transition-colors">
              SM
            </span>
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
          </div>
          <span className="hidden sm:inline font-display text-base font-semibold tracking-normal text-slate-200 group-hover:text-white transition-colors">
            {PERSONAL_INFO.name}
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/[0.08] rounded-full px-4 py-1.5 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`relative px-3.5 py-1 text-xs font-medium tracking-wide transition-all duration-200 rounded-full ${
                  isActive
                    ? 'text-accent-cyan bg-accent-cyan/10'
                    : 'text-typography-secondary hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Action Button & Status */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center gap-2 text-[11px] font-mono text-typography-muted border border-white/[0.06] bg-white/[0.02] px-3 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Open for Explorations</span>
          </div>

          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="group relative inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold rounded-full bg-white text-black transition-all duration-200 hover:bg-accent-cyan hover:shadow-[0_0_20px_rgba(0,229,255,0.4)]"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-white/[0.05] border border-white/10 text-typography-primary hover:text-accent-cyan transition-colors"
          aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[60px] bg-[#05070B]/98 backdrop-blur-2xl border-b border-white/10 px-6 py-6 transition-all animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="flex items-center justify-between text-base font-medium text-typography-secondary hover:text-accent-cyan py-2 border-b border-white/[0.04]"
              >
                <span>{link.label}</span>
                <span className="text-xs font-mono text-typography-muted">→</span>
              </a>
            ))}

            <div className="pt-4 flex flex-col gap-3">
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, '#contact')}
                className="w-full text-center py-2.5 rounded-lg bg-accent-cyan text-black font-semibold text-sm shadow-[0_0_20px_rgba(0,229,255,0.3)]"
              >
                Let's Talk
              </a>
              <div className="flex items-center justify-center gap-2 text-xs font-mono text-typography-muted pt-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>B.Tech IT • Pune, India</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
