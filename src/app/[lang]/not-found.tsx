import Link from 'next/link';

/* Styled 404 — shown for unknown routes/films under /pt or /en.
   (Next doesn't expose the lang param here, so the copy is bilingual.) */
export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#f4f4f4] text-black font-body flex items-center justify-center px-6">
      <div className="max-w-xl w-full bg-white border-3 border-black shadow-pop p-8 md:p-12 text-center rotate-1">
        <p className="font-mono font-bold text-xs uppercase tracking-widest bg-black text-white inline-block px-3 py-1 mb-6">
          [ NO SIGNAL ]
        </p>
        <h1 className="font-title font-bold text-7xl md:text-9xl leading-[0.85] uppercase vhs-text mb-4">404</h1>
        <p className="font-mono font-bold text-sm uppercase tracking-widest text-gray-600 mb-2">
          Página não encontrada nesta frequência.
        </p>
        <p className="font-mono text-xs uppercase tracking-widest text-gray-400 mb-8">
          Page not found on this frequency.
        </p>
        <Link
          href="/pt"
          className="inline-block bg-yellow text-black font-mono font-bold text-sm uppercase border-3 border-black px-6 py-3 shadow-pop-sm hover:bg-black hover:text-yellow transition-colors"
        >
          ◀ Rebobinar / Rewind
        </Link>
      </div>
    </main>
  );
}
