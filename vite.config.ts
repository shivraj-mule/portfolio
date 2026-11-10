import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Base './' guarantees relative asset links that work identically on:
  // - https://<username>.github.io/<repo>/
  // - https://<username>.github.io/
  // - Custom domains (e.g. shivrajmule.me)
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          three: ['three', '@react-three/fiber', '@react-three/drei'],
          gsap: ['gsap'],
          icons: ['lucide-react']
        }
      }
    }
  }
});
