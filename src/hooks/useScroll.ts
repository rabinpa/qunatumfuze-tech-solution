'use client';

import { useEffect, useState } from 'react';

/**
 * Hook that returns true when the page has scrolled past the given threshold.
 * @param threshold - Scroll position in px (default: 60)
 */
export function useScroll(threshold = 60): boolean {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > threshold);
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return isScrolled;
}
