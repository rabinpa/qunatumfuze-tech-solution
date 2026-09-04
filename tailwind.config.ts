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
          primary: '#071A33',
          deep: '#04111F',
          surface: '#0B2445',
        },
        sky: {
          primary: '#38BDF8',
          bright: '#0EA5E9',
          soft: '#E0F2FE',
          pale: '#F0F9FF',
        },
        green: {
          primary: '#22C55E',
          deep: '#16A34A',
          soft: '#DCFCE7',
        },
        neutral: {
          white: '#FFFFFF',
          offwhite: '#F8FAFC',
          lightgray: '#F1F5F9',
          border: '#E2E8F0',
          text: '#0F172A',
          secondary: '#475569',
          dark: '#020617',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-fraunces)', 'Georgia', 'serif'],
      },
      fontSize: {
        display: ['clamp(3rem, 6vw, 5.5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        h1: ['clamp(2.5rem, 4.5vw, 4.25rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        h2: ['clamp(1.875rem, 3.5vw, 3.25rem)', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        h3: ['clamp(1.25rem, 2vw, 2rem)', { lineHeight: '1.25', letterSpacing: '-0.01em' }],
        body: ['1.0625rem', { lineHeight: '1.6' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        small: ['0.875rem', { lineHeight: '1.5' }],
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
      animation: {
        'fade-in': 'fade-in 0.5s ease-out',
        'slide-up': 'slide-up 0.5s ease-out',
        breathe: 'breathe 4s ease-in-out infinite',
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
      },
    },
  },
  plugins: [],
};

