
import React, { useEffect, useState, Suspense, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
// Removed HelmetProvider import
import { LanguageProvider, useLanguage } from './LanguageContext';
import Cursor from './components/Cursor';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import Films from './components/Films';
import Projects from './components/Projects';
import Criticism from './components/Criticism';
import Footer from './components/Footer';
import Modal from './components/Modal';
import ZineGallery from './components/ZineGallery';
import VHSOverlay from './components/VHSOverlay';
import SEO from './components/SEO';
import { FilmData } from './types';
import { filmsData } from './data';

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

// SEO Component to inject JSON-LD for VideoObjects
const StructuredData: React.FC = () => {
    const { lang } = useLanguage();
    const films = filmsData(lang);

    const schemaData = films
        .filter(film => film.videoEmbed)
        .map(film => ({
            "@context": "https://schema.org",
            "@type": "VideoObject",
            "name": film.title,
            "description": film.desc,
            "thumbnailUrl": [film.img],
            "uploadDate": `${film.year === 'EM PRÉ-PRODUÇÃO' || film.year === 'IN PRE-PRODUCTION' ? '2025' : film.year}-01-01`,
            "duration": film.specs?.runtime ? `PT${film.specs.runtime.replace(' min', 'M').replace(' ', '')}` : undefined,
            "embedUrl": film.videoEmbed
        }));

    return (
        <>
            {schemaData.map((data, index) => (
                <script 
                    key={index} 
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
                />
            ))}
        </>
    );
};

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
    // Initialize Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
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
      DEFINITIVE SCROLL SPY SOLUTION: CENTER POINT DETECTION
      Instead of IntersectionObserver (which can be flaky with variable heights),
      we calculate which section physically covers the exact center of the screen.
    */
    const handleScrollSpy = () => {
        const sections = ['home', 'films', 'projects', 'criticism', 'contact'];
        const viewportCenter = window.innerHeight / 2;
        let currentSection = activeSection;

        // Iterate sections to find which one contains the viewport center
        for (const id of sections) {
            const el = document.getElementById(id);
            if (el) {
                const rect = el.getBoundingClientRect();
                // Check if the section overlaps the center line
                if (rect.top <= viewportCenter && rect.bottom >= viewportCenter) {
                    currentSection = id;
                    break;
                }
            }
        }
        
        setActiveSection(currentSection);

        // Also handle "reveal on scroll" manually for better control
        document.querySelectorAll('.reveal-on-scroll').forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.8) { // Trigger slightly earlier
                el.classList.add('opacity-100', 'translate-y-0');
                el.classList.remove('opacity-0', 'translate-y-20');
            }
        });
    };

    window.addEventListener('scroll', handleScrollSpy);
    // Trigger once
    handleScrollSpy();
    
    // Setup Initial Styles for Reveal
    document.querySelectorAll('.reveal-on-scroll').forEach(el => {
        el.classList.add('transition-all', 'duration-700', 'ease-out', 'opacity-0', 'translate-y-20');
    });

    return () => {
        cancelAnimationFrame(reqId);
        lenis.destroy();
        window.removeEventListener('scroll', handleScrollSpy);
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
      <SEO />
      <StructuredData />
      
      <Cursor />
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

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <Suspense fallback={<div className="w-full h-screen bg-white flex items-center justify-center font-bold text-xl uppercase animate-pulse vhs-text">Loading...</div>}>
        <AppContent />
      </Suspense>
    </LanguageProvider>
  );
};

export default App;
