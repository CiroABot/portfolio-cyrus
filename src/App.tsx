'use client';

import React, { useEffect, useState, Suspense } from 'react';
import { LanguageProvider, useLanguage } from './LanguageContext';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import Films from './components/Films';
import Projects from './components/Projects';
import Criticism from './components/Criticism';
import Footer from './components/Footer';
import Modal from './components/Modal';
import ZineGallery from './components/ZineGallery';
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

  // Scroll-spy via IntersectionObserver — does ZERO work on the scroll thread,
  // so wheel/trackpad scrolling stays fully native and snappy (no smooth-scroll
  // library intercepting and "amortizando" every wheel event).
  useEffect(() => {
    const ids = ['home', 'films', 'projects', 'criticism', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActiveSection(e.target.id);
        }
      },
      // A 0-height band at the viewport's vertical centre: whichever section
      // crosses that line is the active one.
      { rootMargin: '-50% 0px -50% 0px' }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => {
      observer.disconnect();
      // Restore scrolling when leaving the homepage (e.g. navigating to a film
      // page while a modal had locked the body) so the next page isn't stuck.
      document.body.style.overflow = '';
    };
  }, []);

  // Lock background scroll while a modal / the zine gallery is open.
  useEffect(() => {
    document.body.style.overflow = isModalOpen || isZineOpen ? 'hidden' : '';
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
