import { notFound } from 'next/navigation';

/* Catch-all for any unknown path under /pt or /en — funnels into the styled
   not-found page (src/app/[lang]/not-found.tsx) instead of the bare default. */
export default function CatchAll() {
  notFound();
}
