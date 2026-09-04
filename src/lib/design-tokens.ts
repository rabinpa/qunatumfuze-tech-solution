/**
 * QuantumFuze Design Tokens
 *
 * Centralized design values for consistent application across components.
 * All values match the existing QuantumFuze prototype visual language.
 */

export const colors = {
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
} as const;

export const spacing = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  '2xl': '48px',
  '3xl': '64px',
  '4xl': '96px',
  '5xl': '128px',
} as const;

export const borderRadius = {
  sm: '8px',
  md: '16px',
  lg: '24px',
  full: '9999px',
} as const;

export const shadows = {
  card: '0 8px 30px rgba(7, 26, 51, 0.08)',
  'card-hover': '0 12px 40px rgba(7, 26, 51, 0.12)',
} as const;

export const gradients = {
  primary: 'linear-gradient(135deg, #071A33, #0EA5E9)',
  growth: 'linear-gradient(135deg, #38BDF8, #22C55E)',
  premium: 'linear-gradient(135deg, #04111F, #071A33, #0EA5E9)',
} as const;

export const typography = {
  fontFamily: {
    sans: 'var(--font-geist-sans)',
    mono: 'var(--font-geist-mono)',
  },
} as const;

export type ColorKey = keyof typeof colors;
export type SpacingKey = keyof typeof spacing;
