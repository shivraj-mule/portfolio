/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: '#05070B',
          pure: '#020408',
          subtle: '#090D14',
          card: '#0D121D',
          hover: '#131A29',
        },
        accent: {
          cyan: '#00E5FF',
          blue: '#2563EB',
          sky: '#38BDF8',
          chrome: '#E2E8F0',
          silver: '#94A3B8',
          glow: 'rgba(0, 229, 255, 0.15)',
        },
        typography: {
          primary: '#F8FAFC',
          secondary: '#CBD5E1',
          muted: '#64748B',
          dim: '#475569',
        },
        border: {
          subtle: 'rgba(255, 255, 255, 0.07)',
          bright: 'rgba(255, 255, 255, 0.16)',
          accent: 'rgba(0, 229, 255, 0.3)',
        }
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        }
      }
    },
  },
  plugins: [],
}
