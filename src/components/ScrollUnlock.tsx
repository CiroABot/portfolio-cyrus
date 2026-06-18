'use client';

import { useEffect } from 'react';

/* Standalone pages (e.g. /films/[slug]) need to scroll even if the visitor
   arrived from the homepage while a modal had locked <body> (overflow:hidden).
   This resets it on mount so every standalone page scrolls normally. */
export default function ScrollUnlock() {
  useEffect(() => {
    document.body.style.overflow = '';
  }, []);
  return null;
}
