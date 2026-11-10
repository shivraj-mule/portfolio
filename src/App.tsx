import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { DomainsSection } from './components/DomainsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExploringSection } from './components/ExploringSection';
import { BeyondTechSection } from './components/BeyondTechSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { BackgroundGrid } from './components/BackgroundGrid';
import { useScrollAnimations } from './utils/motion';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');

  // Initialize GSAP ScrollTrigger animations with cleanup
  useScrollAnimations();

  // Track active section for navigation highlighting
  useEffect(() => {
    const sectionIds = ['hero', 'about', 'domains', 'projects', 'exploring', 'beyond', 'contact'];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { threshold: 0.25 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#05070B] text-typography-primary selection:bg-accent-cyan/25 selection:text-white overflow-x-hidden font-sans">
      {/* Interactive Custom Cursor on Desktop */}
      <CustomCursor />

      {/* Atmospheric Background & Grid */}
      <BackgroundGrid />

      {/* Persistent Cinematic Header */}
      <Header activeSection={activeSection} />

      {/* Main Content Sections */}
      <main className="relative z-10 flex flex-col items-center w-full">
        <HeroSection />
        <AboutSection />
        <DomainsSection />
        <ProjectsSection />
        <ExploringSection />
        <BeyondTechSection />
        <ContactSection />
      </main>

      {/* Minimalist Footer */}
      <Footer />
    </div>
  );
};

export default App;
