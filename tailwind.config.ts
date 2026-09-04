/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#071A33',
          deep: '#04111F',
          surface: '#0B2445',
        },
        sky: {
          DEFAULT: '#38BDF8',
          bright: '#0EA5E9',
          soft: '#E0F2FE',
          pale: '#F0F9FF',
        },
        green: {
          DEFAULT: '#22C55E',
          deep: '#16A34A',
          soft: '#DCFCE7',
        },
        neutral: {
          white: '#FFFFFF',
          offwhite: '#F8FAFC',
          lightgray: '#F1F5F9',
          border: '#E2E8F0',
          DEFAULT: '#0F172A',
          secondary: '#475569',
          dark: '#020617',
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      fontSize: {
        display: ['clamp(3rem, 6vw, 5.5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        h1: ['clamp(2.5rem, 5vw, 4.25rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        h2: ['clamp(2rem, 3.5vw, 3.25rem)', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        h3: ['clamp(1.5rem, 2vw, 2rem)', { lineHeight: '1.25', letterSpacing: '-0.01em' }],
        body: ['clamp(1rem, 1.1vw, 1.1875rem)', { lineHeight: '1.6' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        small: ['clamp(0.875rem, 0.9vw, 1rem)', { lineHeight: '1.5' }],
      },
      spacing: {
        '4.5': '1.125rem',
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      maxWidth: {
        prose: '65ch',
        content: '1280px',
      },
      borderRadius: {
        sm: '8px',
        md: '16px',
        lg: '24px',
      },
      boxShadow: {
        card: '0 8px 30px rgba(7, 26, 51, 0.08)',
        'card-hover': '0 12px 40px rgba(7, 26, 51, 0.12)',
      },
      transitionTimingFunction: {
        'out-soft': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #071A33, #0EA5E9)',
        'gradient-growth': 'linear-gradient(135deg, #38BDF8, #22C55E)',
        'gradient-premium': 'linear-gradient(135deg, #04111F, #071A33, #0EA5E9)',
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out',
        'slide-up': 'slide-up 0.5s ease-out',
        breathe: 'breathe 4s ease-in-out infinite',
        'gradient-reveal': 'gradientReveal 0.4s ease-out forwards',
        float: 'float 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'spin-slow': 'spin-slow 20s linear infinite',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        breathe: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        gradientReveal: {
          '0%': { opacity: '0', transform: 'scaleX(0)' },
          '100%': { opacity: '1', transform: 'scaleX(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.6', filter: 'blur(20px)' },
          '50%': { opacity: '1', filter: 'blur(30px)' },
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
};

