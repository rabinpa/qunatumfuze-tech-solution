'use client';

import { motion } from 'framer-motion';

/**
 * Animated logo showcase for the hero section.
 * Features: Floating animation, glowing rings, pulsing center.
 */
export function LogoShowcase() {
  return (
    <motion.div
      className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Glow */}
      <div className="absolute inset-0 rounded-full bg-sky/20 blur-3xl animate-glow-pulse" />

      {/* Outer Ring */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
        <circle
          cx="100"
          cy="100"
          r="80"
          fill="none"
          stroke="#38BDF8"
          strokeWidth="1.5"
          strokeDasharray="8 12"
          className="animate-spin-slow"
          style={{ animationDuration: '20s' }}
        />
        <circle
          cx="100"
          cy="100"
          r="60"
          fill="none"
          stroke="#22C55E"
          strokeWidth="1.5"
          strokeDasharray="6 14"
          className="animate-spin-slow"
          style={{ animationDuration: '25s', animationDirection: 'reverse' }}
        />
      </svg>

      {/* Logo Mark */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-navy to-sky-bright flex items-center justify-center shadow-2xl">
          <span className="text-white text-4xl font-bold">Q</span>
        </div>
      </motion.div>
    </motion.div>
  );
}
