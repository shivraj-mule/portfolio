import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, Shield, Cpu, Activity, Info } from 'lucide-react';
import { FEATURED_PROJECTS, ProjectItem } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { GithubIcon } from './Icons';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="relative py-28 px-6 md:px-12 lg:px-16 w-full border-t border-white/[0.06]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-accent-cyan/[0.04] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-blue-600/[0.04] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-24">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-12">
          <div>
            <div className="flex items-center gap-3 text-xs font-mono text-accent-cyan tracking-widest uppercase mb-4">
              <span className="w-6 h-[1px] bg-accent-cyan" />
              <span>03 / FEATURED WORK &amp; SYSTEMS</span>
            </div>
            <h2 className="gsap-reveal-title font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight">
              Built From First Principles
            </h2>
          </div>
          <p className="max-w-md text-sm text-typography-secondary font-light leading-relaxed">
            Every project here represents real software or hardware engineered to solve concrete problems — tested with automated suites and verified on actual devices.
          </p>
        </div>

        {/* ============================================================ */}
        {/* PROJECT 1: VisionPark POS (Flagship Mobile Application)       */}
        {/* ============================================================ */}
        <div className="gsap-card group rounded-3xl bg-gradient-to-br from-white/[0.05] to-white/[0.01] border border-white/10 p-8 sm:p-12 lg:p-16 hover:border-accent-cyan/40 transition-all duration-500 relative overflow-hidden backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-accent-cyan/15 text-accent-cyan border border-accent-cyan/30">
                  FLAGSHIP ANDROID SYSTEM
                </span>
                <span className="text-xs font-mono text-typography-muted">
                  Status: Production Ready APK
                </span>
              </div>

              <h3 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
                VisionPark POS
              </h3>

              <p className="text-lg text-slate-200 font-medium">
                Smart Offline Parking Management System with On-Device AI Plate OCR
              </p>

              <p className="text-typography-secondary text-sm sm:text-base font-light leading-relaxed">
                Commercial parking operators lose revenue due to slow paper slips and weak network reception. VisionPark replaces manual ticketing with an offline-first Android solution. It runs computer vision OCR locally on-device, calculating multi-tier vehicle parking fees and streaming printable receipts via Bluetooth thermal printers.
              </p>

              {/* Verified Metrics / Real Capabilities */}
              <div className="grid grid-cols-3 gap-4 py-3 border-y border-white/[0.08]">
                <div>
                  <div className="font-display font-bold text-2xl text-accent-cyan">3×</div>
                  <div className="text-[11px] font-mono text-typography-muted">FASTER CHECK-IN</div>
                </div>
                <div>
                  <div className="font-display font-bold text-2xl text-white">0 KB</div>
                  <div className="text-[11px] font-mono text-typography-muted">DATA NEEDED (OFFLINE)</div>
                </div>
                <div>
                  <div className="font-display font-bold text-2xl text-slate-300">₹0</div>
                  <div className="text-[11px] font-mono text-typography-muted">CLOUD API FEES</div>
                </div>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 pt-1">
                {['Android (Java/Kotlin)', 'On-Device Computer Vision', 'SQLite', 'Bluetooth Thermal Printing', 'PIN Access'].map((t) => (
                  <span key={t} className="px-2.5 py-1 text-xs font-mono bg-white/[0.04] border border-white/10 rounded-md text-slate-300">
                    {t}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setSelectedProject(FEATURED_PROJECTS[0])}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent-cyan text-black font-semibold text-xs transition-transform duration-200 hover:scale-105"
                >
                  <Info className="w-3.5 h-3.5" />
                  <span>Inspect System Architecture</span>
                </button>
              </div>
            </div>

            {/* Right: Real Screenshot Gallery Preview */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-black/60 shadow-2xl group-hover:border-accent-cyan/30 transition-colors">
                <img
                  src="./assets/projects/visionpark/screen1.jpg"
                  alt="VisionPark POS real application interface"
                  className="w-full h-auto object-cover transform group-hover:scale-102 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                  <span className="text-[11px] font-mono text-accent-cyan tracking-wider">
                    ACTUAL SCREENSHOT: OPERATOR DASHBOARD &amp; OCR
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl overflow-hidden border border-white/10 bg-black/40">
                  <img
                    src="./assets/projects/visionpark/screen2.jpg"
                    alt="VisionPark Vehicle Billing Screen"
                    className="w-full h-32 object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="rounded-xl overflow-hidden border border-white/10 bg-black/40">
                  <img
                    src="./assets/projects/visionpark/screen3.jpg"
                    alt="VisionPark Revenue Analytics Screen"
                    className="w-full h-32 object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ============================================================ */}
        {/* PROJECT 2: CloudPool Desktop (Distributed Storage Engine)     */}
        {/* ============================================================ */}
        <div className="gsap-card group rounded-3xl bg-gradient-to-br from-white/[0.05] to-white/[0.01] border border-white/10 p-8 sm:p-12 lg:p-16 hover:border-blue-500/40 transition-all duration-500 relative overflow-hidden backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-blue-500/15 text-blue-400 border border-blue-500/30">
                  DISTRIBUTED STORAGE &amp; CRYPTOGRAPHY
                </span>
                <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>196 / 196 Tests Passing (100%)</span>
                </span>
              </div>

              <h3 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
                CloudPool Desktop
              </h3>

              <p className="text-lg text-slate-200 font-medium">
                Personal Multi-Cloud Storage Aggregator with RAID-5 XOR Parity &amp; AES-256-GCM
              </p>

              <p className="text-typography-secondary text-sm sm:text-base font-light leading-relaxed">
                Free-tier cloud accounts (Google Drive, OneDrive, MEGA) are fragmented and unencrypted. CloudPool pools them into a single high-durability Windows virtual drive. Files are chunked in RAM, encrypted client-side with AES-256-GCM, and protected by rolling bitwise XOR parity across independent remotes — guaranteeing zero data loss even if a provider goes down.
              </p>

              {/* Architecture highlights */}
              <div className="space-y-2 py-2">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                  <Shield className="w-4 h-4 text-accent-cyan" />
                  <span>Windows DPAPI Master Key protection bound to local credentials</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                  <Activity className="w-4 h-4 text-emerald-400" />
                  <span>Streaming SHA-256 integrity validation on both plaintext &amp; ciphertext</span>
                </div>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 pt-1">
                {['Python 3.11', 'AES-256-GCM', 'NumPy Bitwise XOR', 'Windows DPAPI', 'Rclone Engine', 'Streaming SHA-256'].map((t) => (
                  <span key={t} className="px-2.5 py-1 text-xs font-mono bg-white/[0.04] border border-white/10 rounded-md text-slate-300">
                    {t}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="https://github.com/ShivrajMule/CloudPool"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold text-xs hover:bg-accent-cyan transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>Explore on GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={() => setSelectedProject(FEATURED_PROJECTS[1])}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/[0.04] border border-white/10 text-xs font-medium text-slate-300 hover:text-white hover:bg-white/[0.08] transition-colors"
                >
                  <Info className="w-3.5 h-3.5" />
                  <span>System Specs</span>
                </button>
              </div>
            </div>

            {/* Right: Technical Diagram Card */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-black/60 border border-white/10 font-mono text-xs space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10 text-typography-muted">
                <span>CLOUDPOOL RUNTIME TOPOLOGY</span>
                <span className="text-emerald-400">STATUS: HEALTHY</span>
              </div>

              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                  <div className="text-accent-cyan font-semibold mb-1">01. INGESTION &amp; DPAPI</div>
                  <div className="text-typography-muted text-[11px]">Dynamic 20MB RAM slicing + AES-256-GCM nonce tagging</div>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                  <div className="text-blue-400 font-semibold mb-1">02. RAID-5 XOR PARITY</div>
                  <div className="text-typography-muted text-[11px]">Rolling bitwise XOR across remotes: P = C₁ ⊕ C₂ ⊕ C₃</div>
                </div>

                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10">
                  <div className="text-purple-400 font-semibold mb-1">03. ISOLATED ROUTING</div>
                  <div className="text-typography-muted text-[11px]">Parity strictly routed to independent provider domain</div>
                </div>
              </div>

              <div className="pt-2 text-[10px] text-typography-muted flex items-center justify-between">
                <span>VERIFIED TEST SUITE:</span>
                <span className="text-emerald-400 font-bold">196 / 196 PASSED</span>
              </div>
            </div>

          </div>
        </div>

        {/* ============================================================ */}
        {/* DUAL GRID: Local Chess Coach & ESP32 Smart Glove             */}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* PROJECT 3: Local Chess Academy Coach */}
          <div className="gsap-card group p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-white/[0.04] to-transparent border border-white/10 hover:border-accent-cyan/30 transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  ON-DEVICE AI COACH
                </span>
                <Cpu className="w-4 h-4 text-slate-400" />
              </div>

              <h4 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">
                Local Chess Coach
              </h4>

              <p className="text-sm text-slate-200 font-medium">
                Offline AI Chess Analysis with Stockfish 16 &amp; Quantized Qwen LLM
              </p>

              <p className="text-typography-secondary text-sm font-light leading-relaxed">
                Connects the Stockfish chess engine with a locally hosted quantized language model (Qwen 2.5 1.5B via llama.cpp). Translates numeric centipawn evaluations into natural conversational advice and tracks persistent player weaknesses in SQLite without uploading private games to the cloud.
              </p>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {['Python', 'Stockfish 16', 'Qwen 2.5 GGUF', 'Llama-cpp', 'SQLite'].map((t) => (
                  <span key={t} className="px-2 py-0.5 text-xs font-mono bg-white/[0.03] border border-white/10 rounded text-slate-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/[0.08] flex items-center justify-between">
              <button
                onClick={() => setSelectedProject(FEATURED_PROJECTS[2])}
                className="text-xs font-mono text-accent-cyan hover:underline flex items-center gap-1"
              >
                <span>Read Full Architecture</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
              <span className="text-[11px] font-mono text-typography-muted">100% PRIVATE</span>
            </div>
          </div>

          {/* PROJECT 4: ESP32 5-Finger Smart Glove */}
          <div className="gsap-card group p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-white/[0.04] to-transparent border border-white/10 hover:border-accent-cyan/30 transition-all duration-300 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  WEARABLE HARDWARE &amp; IOT
                </span>
                <Activity className="w-4 h-4 text-slate-400" />
              </div>

              <h4 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">
                ESP32 5-Finger Smart Glove
              </h4>

              <p className="text-sm text-slate-200 font-medium">
                Sensory Gesture Wearable Converting Finger Flexion into Speech
              </p>

              <p className="text-typography-secondary text-sm font-light leading-relaxed">
                An assistive hardware glove powered by an ESP32 microcontroller and magnetic Hall-effect sensors. Flexion gestures are captured, classified into discrete spelling letters or conversational phrases, and transmitted via Web Bluetooth directly to browser speech synthesis.
              </p>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {['ESP32', 'Embedded C++', 'Web Bluetooth API', 'Hall Sensors', 'Web Speech'].map((t) => (
                  <span key={t} className="px-2 py-0.5 text-xs font-mono bg-white/[0.03] border border-white/10 rounded text-slate-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/[0.08] flex items-center justify-between">
              <button
                onClick={() => setSelectedProject(FEATURED_PROJECTS[3])}
                className="text-xs font-mono text-accent-cyan hover:underline flex items-center gap-1"
              >
                <span>View Hardware Specs</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
              <span className="text-[11px] font-mono text-typography-muted">&lt;50MS LATENCY</span>
            </div>
          </div>

        </div>

        {/* ============================================================ */}
        {/* PROJECT 5: MotoSim / VirtuBike (Godot 4 3D Simulation)       */}
        {/* ============================================================ */}
        <div className="gsap-card group rounded-3xl bg-gradient-to-br from-white/[0.04] to-transparent border border-white/10 p-8 sm:p-12 hover:border-purple-500/30 transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  GAME ENGINE &amp; PROCEDURAL 3D
                </span>
                <span className="text-xs font-mono text-typography-muted">
                  Godot 4.3 Mobile Target
                </span>
              </div>

              <h4 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">
                MotoSim / VirtuBike Procedural Drivetrain
              </h4>

              <p className="text-typography-secondary text-sm sm:text-base font-light leading-relaxed">
                A mobile-first motorcycle dynamics simulator built in Godot 4. The 3D road, chassis, and instruments are generated procedurally from GDScript. Accurately simulates manual clutch engagement, gear ratios, transmission coupling, and RPM torque curves without relying on external 3D asset packs.
              </p>

              <div className="flex flex-wrap gap-2 pt-1">
                {['Godot 4.3 Engine', 'GDScript', 'Procedural 3D Mesh', 'Mobile Touch UI', 'Drivetrain Physics'].map((t) => (
                  <span key={t} className="px-2.5 py-1 text-xs font-mono bg-white/[0.03] border border-white/10 rounded-md text-slate-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center">
              <button
                onClick={() => setSelectedProject(FEATURED_PROJECTS[4])}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/[0.05] border border-white/10 text-xs font-medium text-white hover:bg-white/10 transition-colors"
              >
                <span>Inspect Godot Project</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-accent-cyan" />
              </button>
            </div>

          </div>
        </div>

      </div>

      {/* Project Deep Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
