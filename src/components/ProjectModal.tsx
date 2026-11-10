import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, AlertTriangle } from 'lucide-react';
import { ProjectItem } from '../data/portfolioData';
import { GithubIcon } from './Icons';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0B0F17] border border-white/15 p-6 sm:p-10 shadow-2xl space-y-8"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header & Category */}
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan">
              {project.category}
            </span>
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
              Status: {project.status}
            </span>
          </div>

          <h2 id="modal-project-title" className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            {project.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-light">
            {project.tagline}
          </p>
        </div>

        {/* Real Screenshots Preview Carousel or Visual Showcase */}
        {project.previewImages && project.previewImages.length > 0 ? (
          <div className="space-y-3">
            <div className="text-xs font-mono text-typography-muted uppercase tracking-wider">
              Project Visuals &amp; Real Screenshots
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {project.previewImages.map((img, idx) => (
                <div
                  key={idx}
                  className="rounded-xl overflow-hidden border border-white/10 bg-black/40 group aspect-[4/3] flex items-center justify-center"
                >
                  <img
                    src={img}
                    alt={`${project.title} screenshot ${idx + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {/* Problem vs Solution Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
            <div className="flex items-center gap-2 text-rose-400 font-display font-semibold text-sm">
              <AlertTriangle className="w-4 h-4" />
              <span>Problem Addressed</span>
            </div>
            <p className="text-sm text-typography-secondary font-light leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-2">
            <div className="flex items-center gap-2 text-accent-cyan font-display font-semibold text-sm">
              <CheckCircle2 className="w-4 h-4" />
              <span>Architectural Solution</span>
            </div>
            <p className="text-sm text-typography-secondary font-light leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Technical Highlights */}
        <div className="space-y-3">
          <div className="text-xs font-mono text-typography-muted uppercase tracking-wider">
            Verified Engineering Highlights
          </div>
          <ul className="space-y-2.5">
            {project.highlights.map((highlight, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-slate-300 font-light">
                <span className="text-accent-cyan font-mono text-xs mt-0.5">0{idx + 1}.</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Verified Tech Stack */}
        <div className="space-y-3">
          <div className="text-xs font-mono text-typography-muted uppercase tracking-wider">
            Technologies &amp; Protocols
          </div>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-white"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Actions Footer */}
        <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black font-semibold text-xs transition-colors hover:bg-accent-cyan"
              >
                <GithubIcon className="w-4 h-4" />
                <span>View GitHub Repository</span>
              </a>
            )}
            {project.downloadUrl && project.downloadUrl !== '#' && (
              <a
                href={project.downloadUrl}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 border border-white/15 text-white font-medium text-xs hover:bg-white/20 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Download Release</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="text-xs font-mono text-typography-muted hover:text-white transition-colors"
          >
            Press ESC or click outside to close
          </button>
        </div>
      </div>
    </div>
  );
};
