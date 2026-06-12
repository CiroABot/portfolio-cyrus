'use client';

import React, { useEffect, useState, Suspense, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
// Removed HelmetProvider import
import { LanguageProvider, useLanguage } from './LanguageContext';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import Films from './components/Films';
import Projects from './components/Projects';
import Criticism from './components/Criticism';
import Footer from './components/Footer';
import Modal from './components/Modal';
import ZineGallery from './components/ZineGallery';
import VHSOverlay from './components/VHSOverlay';
import { FilmData, Language } from './types';

const MarqueeStrip: React.FC = () => {
    const { t } = useLanguage();
    const repetitions = 8;
    
    // Generate an array of text items
    const textItems = Array.from({ length: repetitions }).map((_, i) => (
        <span key={i} className="mx-8 font-bold text-xl uppercase tracking-widest vhs-text inline-block">
            {t.marquee_text}
        </span>
    ));

    return (
        <div className="relative w-[110vw] left-[50%] -ml-[55vw] bg-black text-yellow border-y-3 border-black py-3 overflow-hidden whitespace-nowrap z-40 -mb-10 shadow-[0px_10px_20px_rgba(0,0,0,0.3)] rotate-1 flex pointer-events-none mix-blend-hard-light">
            <div className="animate-scroll-text flex flex-shrink-0 items-center" style={{ animationDuration: '300s' }}>
                {textItems}
            </div>
            <div className="animate-scroll-text flex flex-shrink-0 items-center" style={{ animationDuration: '300s' }}>
                {textItems}
            </div>
        </div>
    );
}

const AppContent: React.FC = () => {
  const { lang } = useLanguage();
  const [activeSection, setActiveSection] = useState('home');
  const [modalData, setModalData] = useState<FilmData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isZineOpen, setIsZineOpen] = useState(false);
  const [cinemaUrl, setCinemaUrl] = useState<string>('');
  const [isCinemaMode, setIsCinemaMode] = useState(false);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis Smooth Scroll.
    // PERFORMANCE/FEEL: `lerp` (exponential follow) instead of a fixed 1.2s
    // duration — the old setting made the page keep gliding long after the
    // wheel stopped ("floaty" delay). 0.18 keeps the analog smoothness but
    // tracks the input almost immediately.
    const lenis = new Lenis({
      lerp: 0.18,
      wheelMultiplier: 1.0,
      touchMultiplier: 2,
    });
    lenisRef.current = lenis;

    let reqId: number;

    function raf(time: number) {
      lenis.raf(time);
      reqId = requestAnimationFrame(raf);
    }
    reqId = requestAnimationFrame(raf);

    /*
      SCROLL SPY: CENTER POINT DETECTION.
      Section elements are cached once — the old version did getElementById ×5
      plus a querySelectorAll for a long-removed ".reveal-on-scroll" feature on
      EVERY scroll frame.
    */
    const sectionIds = ['home', 'films', 'projects', 'criticism', 'contact'];
    const sectionEls = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const handleScrollSpy = () => {
        const viewportCenter = window.innerHeight / 2;
        for (const el of sectionEls) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= viewportCenter && rect.bottom >= viewportCenter) {
                setActiveSection(el.id); // React bails out when unchanged
                break;
            }
        }
    };

    window.addEventListener('scroll', handleScrollSpy, { passive: true });
    // Trigger once
    handleScrollSpy();

    return () => {
        cancelAnimationFrame(reqId);
        lenis.destroy();
        window.removeEventListener('scroll', handleScrollSpy);
        // Restore scrolling when leaving the homepage (e.g. navigating to a film
        // page while a modal had locked the body) so the next page isn't stuck.
        document.body.style.overflow = '';
    };
  }, []);

  useEffect(() => {
      const lenis = lenisRef.current;
      if (!lenis) return;

      if (isModalOpen || isZineOpen) {
          lenis.stop();
          document.body.style.overflow = 'hidden';
      } else {
          lenis.start();
          document.body.style.overflow = 'auto';
      }
  }, [isModalOpen, isZineOpen]);

  const handleOpenFilm = (film: FilmData) => {
    setModalData(film);
    setIsCinemaMode(false);
    setIsModalOpen(true);
  };

  const handleOpenVignette = (url: string) => {
      setCinemaUrl(url);
      setIsCinemaMode(true);
      setModalData(null);
      setIsModalOpen(true);
  };

  const handleCloseModal = () => {
      setIsModalOpen(false);
      setModalData(null);
      setCinemaUrl('');
  };

  return (
    <div className="font-body text-black bg-white w-full relative selection:bg-rose selection:text-white">
      <VHSOverlay />
      
      <Sidebar activeSection={activeSection} />

      {/* Main Content */}
      <main key={lang}>
        <Hero />
        <MarqueeStrip />
        <Films onOpenModal={handleOpenFilm} />
        <Projects onOpenZine={() => setIsZineOpen(true)} onPlayVignette={handleOpenVignette} />
        <Criticism />
        <Footer />
      </main>

      <Modal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        data={modalData} 
        cinemaMode={isCinemaMode} 
        cinemaUrl={cinemaUrl} 
      />
      <ZineGallery isOpen={isZineOpen} onClose={() => setIsZineOpen(false)} />
    </div>
  );
};

const App: React.FC<{ initialLang: Language }> = ({ initialLang }) => {
  return (
    <LanguageProvider initialLang={initialLang}>
      <Suspense fallback={<div className="w-full h-screen bg-white flex items-center justify-center font-bold text-xl uppercase animate-pulse vhs-text">Loading...</div>}>
        <AppContent />
      </Suspense>
    </LanguageProvider>
  );
};

export default App;
