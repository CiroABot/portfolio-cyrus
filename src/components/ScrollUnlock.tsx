'use client';

import { useEffect } from 'react';

/* Standalone pages (e.g. /films/[slug]) don't run Lenis. If a visitor arrives
   here from the homepage while a modal had locked <body> (overflow:hidden) or
   Lenis left its classes on <html>, the new page would be stuck. This resets
   that on mount so every standalone page scrolls normally. */
export default function ScrollUnlock() {
  useEffect(() => {
    document.body.style.overflow = '';
    document.documentElement.classList.remove('lenis', 'lenis-smooth', 'lenis-stopped', 'lenis-scrolling');
  }, []);
  return null;
}
