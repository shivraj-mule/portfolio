/**
 * ==============================================================================
 * PORTFOLIO CONTENT & CONFIGURATION
 * ==============================================================================
 * All personal information, project showcases, skills, explorations, and links
 * are centralized here for easy editing without touching UI components.
 * 
 * Edit this file to update any content on your website.
 */

export interface SocialLink {
  name: string;
  url: string;
  label: string;
  icon: 'github' | 'linkedin' | 'email' | 'phone' | 'external' | 'terminal';
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  category: string;
  problem: string;
  solution: string;
  techStack: string[];
  status: 'Production Ready' | 'Active Development' | 'Prototype / Research';
  highlights: string[];
  githubUrl?: string;
  demoUrl?: string;
  downloadUrl?: string;
  coverImage?: string;
  previewImages?: string[];
  featured: boolean;
}

export interface DomainItem {
  number: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  icon: string;
}

export interface CurrentlyExploringItem {
  topic: string;
  area: string;
  notes: string;
  stage: 'Active Experimentation' | 'Deep Dive' | 'Prototyping';
}

export interface BeyondTechItem {
  title: string;
  subtitle: string;
  description: string;
  quote?: string;
}

export const PERSONAL_INFO = {
  // Replace or update your display name and title
  name: 'Shivraj Mule',
  fullName: 'Shivraj Sambhaji Mule',
  title: 'Creative Builder & Technology Explorer',
  statusBadge: 'B.Tech IT Student @ BVUCOEP • Building Unconventional Tech',
  location: 'Pune, Maharashtra, India',
  
  // Hero section messaging
  hero: {
    headlineLead: 'Curious Mind.',
    headlineAccent: 'Creative Builder.',
    headlineTail: 'Technology Enthusiast.',
    subtext: 'I explore first-principles engineering, experiment with local intelligence, and build software and physical prototypes that turn curiosity into real systems.',
    primaryCta: 'Explore Projects',
    secondaryCta: 'Get In Touch',
  },

  // About / Editorial story
  about: {
    sectionNumber: '01 / IDENTITY',
    headline: 'A little about the mind behind the screen.',
    paragraphs: [
      "I am an Information Technology undergraduate student at Bharati Vidyapeeth College of Engineering, Pune. Rather than focusing solely on conventional web development, I am driven by deep technical curiosity — understanding how things work at lower levels, experimenting with systems, and building tools that solve real problems.",
      "My work spans practical software engineering, on-device AI and local LLM pipelines, hardware and wearable sensor prototypes with ESP32 microcontrollers, 3D physics simulations in Godot, and personal cloud security.",
      "I don't believe in vanity metrics, fake buzzwords, or superficial complexity. I value clean architecture, offline-first reliability, privacy-respecting technology, and the patience it takes to build things with care."
    ],
    principles: [
      {
        label: 'First Principles Thinking',
        detail: 'Digging beneath high-level abstractions to understand how operating systems, protocols, and math actually operate.'
      },
      {
        label: 'Offline & Local-First',
        detail: 'Designing tools that remain fast, reliable, and private without unnecessary cloud dependencies or subscriptions.'
      },
      {
        label: 'Hardware & Software Convergence',
        detail: 'Bridging physical sensor inputs with reactive software, from assistive haptic gloves to procedural game engines.'
      }
    ]
  },

  // Contact information
  contact: {
    email: 'workonlyforshivraj@gmail.com',
    academicEmail: 'ssmule25-it@bvucoep.edu.in',
    phone: '+91 87665 27560',
    whatsapp: 'https://wa.me/918766527560',
    github: 'https://github.com/ShivrajMule',
    // Replace with your actual LinkedIn profile URL when available
    linkedin: 'https://linkedin.com/in/shivraj-mule',
  }
};

export const DOMAINS: DomainItem[] = [
  {
    number: '01',
    title: 'Software & Systems',
    tagline: 'Robust architecture & resilient foundations',
    description: 'Writing maintainable software across Python, C++, Java, and modern web environments. Focusing on fault-tolerant systems, multithreading, and algorithmic efficiency.',
    tags: ['Python', 'TypeScript', 'Java', 'C++', 'System Architecture', 'Design Patterns'],
    icon: 'Terminal'
  },
  {
    number: '02',
    title: 'Artificial Intelligence & Local AI',
    tagline: 'Private, on-device neural computation',
    description: 'Deploying quantized LLMs (GGUF, llama.cpp), fine-tuning local workflows, and implementing computer vision OCR engines that run client-side without third-party APIs.',
    tags: ['Local LLMs', 'Quantization (GGUF)', 'Computer Vision', 'Llama.cpp', 'On-Device AI'],
    icon: 'Cpu'
  },
  {
    number: '03',
    title: 'Cybersecurity & Privacy',
    tagline: 'Defensive architecture & cryptographic integrity',
    description: 'Designing client-side encryption schemes (AES-256-GCM), erasure coding redundancy (RAID-5 XOR), DPAPI credential safeguards, and analyzing network protocols.',
    tags: ['AES-256-GCM', 'Erasure Coding', 'DPAPI', 'Network Protocols', 'Threat Modeling'],
    icon: 'ShieldCheck'
  },
  {
    number: '04',
    title: 'Game Simulation & 3D',
    tagline: 'Physics engines & procedural digital worlds',
    description: 'Crafting procedural vehicle physics, drivetrain simulation, clutch/transmission mechanics, and reactive camera systems in Godot 4 and Three.js.',
    tags: ['Godot 4.x', 'GDScript', 'Procedural Mesh', 'Vehicle Physics', 'Three.js'],
    icon: 'Gamepad2'
  },
  {
    number: '05',
    title: 'Hardware & Embedded IoT',
    tagline: 'Physical computing & sensory interfaces',
    description: 'Building microcontroller prototypes with ESP32, magnetic Hall-effect sensors, flex sensors, and bridging microcontrollers to browsers using the Web Bluetooth API.',
    tags: ['ESP32', 'Sensors / I2C / SPI', 'Web Bluetooth API', 'Embedded C++', 'Assistive Tech'],
    icon: 'Layers'
  },
  {
    number: '06',
    title: 'Creative Technology & Web',
    tagline: 'Cinematic digital design & interactive experiences',
    description: 'Building high-performance interactive interfaces using React, Three.js, GSAP ScrollTrigger, and tailored typography inspired by Apple and luxury design.',
    tags: ['React', 'Three.js / WebGL', 'GSAP Motion', 'Tailwind CSS', 'Accessible UX'],
    icon: 'Sparkles'
  }
];

export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: 'visionpark',
    title: 'VisionPark POS',
    tagline: 'Smart Offline Parking Management System with On-Device AI Plate Detection',
    category: 'Mobile Application & Computer Vision',
    problem: 'Commercial parking facilities suffer from slow manual ticketing, revenue leakage, and dependence on unreliable internet connections.',
    solution: 'Engineered a standalone Android POS system that runs computer vision OCR directly on-device. Delivers 3x faster vehicle check-ins, automated multi-tier pricing calculation, offline ticketing, and Bluetooth thermal printer integration.',
    techStack: ['Android', 'Java/Kotlin', 'On-Device Computer Vision', 'SQLite', 'Bluetooth Thermal Printing'],
    status: 'Production Ready',
    highlights: [
      '100% Offline-capable on-device license plate detection with zero cloud API dependencies',
      'Dynamic duration-based multi-tier pricing engine for 2-wheelers and 4-wheelers',
      'Instant thermal ticket generation and comprehensive audit revenue logs'
    ],
    coverImage: './assets/projects/visionpark/screen1.jpg',
    previewImages: [
      './assets/projects/visionpark/screen1.jpg',
      './assets/projects/visionpark/screen2.jpg',
      './assets/projects/visionpark/screen3.jpg'
    ],
    demoUrl: '#',
    downloadUrl: '#',
    featured: true
  },
  {
    id: 'cloudpool',
    title: 'CloudPool Desktop',
    tagline: 'Personal Multi-Cloud Storage Aggregator with RAID-5 Erasure Coding & AES-256-GCM',
    category: 'Distributed Storage & Cryptography',
    problem: 'Free personal cloud tiers (Google Drive, OneDrive, MEGA) are fragmented, unencrypted by default, and vulnerable to account bans or remote data loss.',
    solution: 'Constructed an automated Windows desktop virtual drive that stripes and encrypts data client-side with AES-256-GCM across multiple cloud remotes using rolling RAID-5 XOR parity for instant zero-loss file reconstruction.',
    techStack: ['Python 3.11', 'AES-256-GCM', 'NumPy Bitwise XOR', 'Windows DPAPI', 'Rclone Engine', 'Streaming SHA-256'],
    status: 'Production Ready',
    highlights: [
      '196 of 196 automated test suite passing (100% verified test coverage)',
      'Bitwise XOR rolling parity distributes data across failure-isolated storage remotes',
      'Root DPAPI key protection ensures encryption keys never leave local Windows credentials'
    ],
    githubUrl: 'https://github.com/ShivrajMule/CloudPool',
    featured: true
  },
  {
    id: 'local-chess-coach',
    title: 'Local Chess Academy Coach',
    tagline: 'Private On-Device AI Chess Analysis with Stockfish & Quantized Neural LLM',
    category: 'Artificial Intelligence & Systems',
    problem: 'Commercial chess analysis platforms lock deep game reviews behind cloud paywalls and require uploading player move histories to third-party servers.',
    solution: 'Designed a private desktop platform that pairs the Stockfish 16 AVX2 engine with a quantized local LLM (Qwen 2.5 1.5B via llama.cpp) to translate raw centipawn evaluations into actionable, human-like coaching advice while logging tactical blunders in SQLite.',
    techStack: ['Python', 'Stockfish 16 AVX2', 'Llama-cpp-python', 'Qwen 2.5 GGUF', 'SQLite', 'PGN Engine', 'Desktop GUI'],
    status: 'Active Development',
    highlights: [
      'Zero cloud transmission — runs 100% on local CPU/GPU hardware',
      'Translates raw evaluation curves into natural language positional coaching',
      'Player weakness database tracks recurring tactical oversights across game histories'
    ],
    featured: true
  },
  {
    id: 'smart-glove',
    title: 'ESP32 5-Finger Smart Glove',
    tagline: 'Assistive Wearable Sensory Glove Converting Finger Gestures to Real-Time Speech',
    category: 'Hardware & Assistive Technology',
    problem: 'Individuals with speech and vocal disabilities face communication friction when trying to express urgent phrases or spell messages quickly.',
    solution: 'Prototyped a 5-finger smart wearable with ESP32 and discrete magnetic Hall-effect and flex sensors that detects discrete hand postures, streams binary bend telemetry over Web Bluetooth, and speaks words aloud through browser synthesis.',
    techStack: ['ESP32', 'Embedded C++', 'Web Bluetooth API', 'Hall Effect Sensors', 'Web Speech Synthesis'],
    status: 'Prototype / Research',
    highlights: [
      'Dual-mode operation: letter-by-letter spelling mode and instant conversational phrase mode',
      'Direct browser-to-microcontroller connection without intermediary native apps via Web Bluetooth',
      'Sub-50ms latency from physical finger flexion to acoustic vocalization'
    ],
    featured: true
  },
  {
    id: 'motosim',
    title: 'MotoSim / VirtuBike',
    tagline: 'Procedural 3D Motorcycle Drivetrain & Vehicle Dynamics Simulation',
    category: 'Game Simulation & 3D',
    problem: 'Most mobile racing games use generic arcade physics that bypass real mechanical phenomena like clutch slipping, engine braking, and gear ratios.',
    solution: 'Built a lightweight mobile prototype in Godot 4.x where motorcycle geometry, road splines, and cockpit instrumentation are generated procedurally via GDScript, modeling clutch engagement, drivetrain coupling, and RPM torque curves.',
    techStack: ['Godot 4.3', 'GDScript', 'Procedural 3D Mesh', 'Vehicle Mechanics', 'Mobile Touch UI'],
    status: 'Prototype / Research',
    highlights: [
      'Procedural road generation and procedural 3D chassis without heavy external asset dependencies',
      'First-person cockpit instrumentation displaying real-time RPM, speed, gear, and clutch slip',
      'Targeted for mobile compatibility renderers with smooth 60fps baseline performance'
    ],
    featured: true
  },
  {
    id: 'cloudnest',
    title: 'CloudNest Local Vault',
    tagline: 'Local Encrypted Storage Hub & Multi-Device Sync Daemon',
    category: 'Systems & Cryptography',
    problem: 'Synchronizing private project workspaces across multiple local machines without relying on public cloud sync daemons.',
    solution: 'Developed an encrypted local vault protocol that monitors folder changes, packages delta snapshots into authenticated containers, and provides direct peer synchronization across home network nodes.',
    techStack: ['Python', 'Cryptography', 'Socket Protocols', 'Local Network Sync'],
    status: 'Prototype / Research',
    highlights: [
      'Authenticated symmetric envelope encryption on every transfer chunk',
      'Zero metadata leakage across LAN broadcast',
      'Lightweight headless background daemon architecture'
    ],
    featured: false
  }
];

export const CURRENTLY_EXPLORING: CurrentlyExploringItem[] = [
  {
    topic: 'Small Language Models & Edge Inference',
    area: 'Artificial Intelligence',
    notes: 'Benchmarking 1.5B to 3B parameter models (Qwen, Llama, Gemma) quantized with GGUF on consumer laptop hardware for specialized agentic tasks.',
    stage: 'Active Experimentation'
  },
  {
    topic: 'Low-Latency Sensor Buses & RTOS',
    area: 'Hardware Engineering',
    notes: 'Investigating FreeRTOS task scheduling on ESP32 dual-core processors to minimize latency in multi-sensor haptic gloves.',
    stage: 'Prototyping'
  },
  {
    topic: 'Procedural 3D Shaders & WebGL',
    area: 'Creative Technology',
    notes: 'Exploring custom Three.js GLSL shaders, raymarching metallic forms, and GPU-driven particle field transitions.',
    stage: 'Deep Dive'
  },
  {
    topic: 'Offensive Security & Network Defense',
    area: 'Cybersecurity',
    notes: 'Analyzing packet transmission anomalies, reverse-engineering binary formats, and building defensive cryptography test suites.',
    stage: 'Deep Dive'
  }
];

export const BEYOND_TECH: BeyondTechItem[] = [
  {
    title: 'Cognitive Psychology & Human Behaviour',
    subtitle: 'Understanding How Minds Work',
    description: 'Fascinated by cognitive biases, mental models, attention spans, and how humans interact with technology. Designing software with intuition requires understanding the psychology of the person behind the screen.',
    quote: 'The best tools feel like natural extensions of human thought.'
  },
  {
    title: 'Chess & Strategic Observation',
    subtitle: 'Tactical Precision & Long-Term Planning',
    description: 'Chess trains deep pattern recognition, emotional discipline under pressure, and calculating candidate moves several branches ahead. It directly influences how I decompose software architecture.',
    quote: 'Tactics is knowing what to do when there is something to do; strategy is knowing what to do when there is nothing to do.'
  },
  {
    title: 'Sound Design & Creative Experimentation',
    subtitle: 'Acoustics, Frequency & Emotion',
    description: 'Exploring the tactile feeling of sound, synthesizer patches, and audio design. From subtle UI click feedback to ambient atmospheric frequencies, sound elevates digital design.',
    quote: 'Tone and rhythm shape how experiences are remembered.'
  },
  {
    title: 'Hands-on Tinkering & Hardware Teardowns',
    subtitle: 'Curiosity Without Fear of Breaking Things',
    description: 'Taking apart old electronics, salvaging motors, observing PCB traces, and soldering sensor arrays. The physical world provides an honesty that purely virtual code sometimes obscures.',
    quote: 'You never truly understand a device until you have seen its circuit board.'
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/ShivrajMule',
    label: 'github.com/ShivrajMule',
    icon: 'github'
  },
  {
    name: 'Email',
    url: 'mailto:workonlyforshivraj@gmail.com',
    label: 'workonlyforshivraj@gmail.com',
    icon: 'email'
  },
  {
    name: 'Academic Email',
    url: 'mailto:ssmule25-it@bvucoep.edu.in',
    label: 'ssmule25-it@bvucoep.edu.in',
    icon: 'email'
  },
  {
    name: 'WhatsApp',
    url: 'https://wa.me/918766527560',
    label: '+91 87665 27560',
    icon: 'phone'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/shivraj-mule',
    label: 'linkedin.com/in/shivraj-mule',
    icon: 'linkedin'
  }
];
