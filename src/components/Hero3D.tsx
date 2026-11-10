import React, { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

// Procedural Metallic Kinetic Sculpture
function SculptureMesh({ pointer }: { pointer: React.MutableRefObject<{ x: number; y: number }> }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const outerRingRef = useRef<THREE.Mesh>(null);
  const innerRingRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  // Geometry: TorusKnot with smooth cinematic proportions
  const knotGeometry = useMemo(() => new THREE.TorusKnotGeometry(1.6, 0.45, 128, 32, 2, 3), []);
  const outerRingGeometry = useMemo(() => new THREE.TorusGeometry(2.7, 0.04, 16, 100), []);
  const innerRingGeometry = useMemo(() => new THREE.TorusGeometry(2.2, 0.03, 16, 100), []);

  // Material: Premium Liquid Chrome / Brushed Platinum
  const chromeMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color('#CBD5E1'),
        metalness: 0.92,
        roughness: 0.18,
        wireframe: false,
      }),
    []
  );

  const cyanRingMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color('#00E5FF'),
        metalness: 0.8,
        roughness: 0.2,
        emissive: new THREE.Color('#007799'),
        emissiveIntensity: 0.35,
      }),
    []
  );

  const silverRingMaterial = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: new THREE.Color('#94A3B8'),
        metalness: 0.95,
        roughness: 0.1,
      }),
    []
  );

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    if (groupRef.current) {
      // Smooth dampened mouse responsiveness
      const targetRotationY = pointer.current.x * 0.45;
      const targetRotationX = -pointer.current.y * 0.35;

      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotationY, 0.05);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotationX, 0.05);
    }

    if (meshRef.current) {
      meshRef.current.rotation.x = time * 0.2;
      meshRef.current.rotation.y = time * 0.28;
    }

    if (outerRingRef.current) {
      outerRingRef.current.rotation.x = -time * 0.15;
      outerRingRef.current.rotation.y = time * 0.22;
    }

    if (innerRingRef.current) {
      innerRingRef.current.rotation.x = time * 0.25;
      innerRingRef.current.rotation.z = time * 0.18;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.6}>
        {/* Main Central Sculpture */}
        <mesh ref={meshRef} geometry={knotGeometry} material={chromeMaterial} castShadow receiveShadow />

        {/* Ambient Orbiting Kinetic Rings */}
        <mesh ref={outerRingRef} geometry={outerRingGeometry} material={cyanRingMaterial} />
        <mesh ref={innerRingRef} geometry={innerRingGeometry} material={silverRingMaterial} />
      </Float>
    </group>
  );
}

// Optimized Three.js Canvas container with WebGL fallback & viewport observer
export const Hero3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pointer = useRef({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);
  const [hasWebGL, setHasWebGL] = useState(true);

  // Check WebGL availability
  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const supported = !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
      setHasWebGL(supported);
    } catch {
      setHasWebGL(false);
    }
  }, []);

  // Pause rendering when scrolled out of view to save battery & GPU
  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.05 }
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const handlePointerMove = (e: React.PointerEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    pointer.current = { x, y };
  };

  const handlePointerLeave = () => {
    pointer.current = { x: 0, y: 0 };
  };

  return (
    <div
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="relative w-full h-[360px] sm:h-[480px] lg:h-[580px] flex items-center justify-center cursor-grab active:cursor-grabbing"
      aria-label="Interactive 3D Chrome Sculpture"
    >
      {/* Ambient background soft light glow behind sculpture */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[280px] h-[280px] sm:w-[420px] sm:h-[420px] rounded-full bg-accent-cyan/10 blur-[100px]" />
        <div className="w-[200px] h-[200px] sm:w-[320px] sm:h-[320px] rounded-full bg-blue-600/10 blur-[80px]" />
      </div>

      {hasWebGL && isVisible ? (
        <Canvas
          camera={{ position: [0, 0, 6.2], fov: 45 }}
          dpr={[1, 1.5]} // Clamp DPR for high performance on mobile & Retina screens
          gl={{
            antialias: true,
            powerPreference: 'high-performance',
            alpha: true,
          }}
          className="w-full h-full"
        >
          {/* Studio Lighting Setup */}
          <ambientLight intensity={0.65} />
          {/* Key light - Crisp Silver */}
          <directionalLight position={[6, 8, 6]} intensity={1.8} color="#FFFFFF" />
          {/* Rim light - Electric Cyan accent */}
          <directionalLight position={[-6, -4, -3]} intensity={2.2} color="#00E5FF" />
          {/* Fill light - Deep Blue contrast */}
          <pointLight position={[0, -5, 4]} intensity={1.2} color="#2563EB" />
          {/* Top highlight */}
          <pointLight position={[0, 6, -2]} intensity={0.9} color="#E2E8F0" />

          <SculptureMesh pointer={pointer} />
        </Canvas>
      ) : (
        // Non-WebGL Fallback: Elegant CSS 3D kinetic fallback
        <div className="relative flex items-center justify-center w-64 h-64">
          <div className="absolute inset-0 rounded-full border-2 border-accent-cyan/30 animate-[spin_12s_linear_infinite]" />
          <div className="w-48 h-48 rounded-full border border-slate-400/40 animate-[spin_8s_linear_infinite_reverse]" />
          <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-slate-700 via-slate-400 to-white shadow-[0_0_50px_rgba(0,229,255,0.3)] animate-pulse" />
        </div>
      )}

      {/* Subtle interaction cue */}
      <div className="absolute bottom-2 right-4 text-[11px] font-mono tracking-wider text-typography-muted/60 pointer-events-none select-none flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan/70 animate-ping" />
        <span>INTERACTIVE 3D • DRAG TO ROTATE</span>
      </div>
    </div>
  );
};
