import React, { useEffect, useState } from 'react';
import { zineImages } from '../data';

interface ZineGalleryProps {
  isOpen: boolean;
  onClose: () => void;
}

const ZineGallery: React.FC<ZineGalleryProps> = ({ isOpen, onClose }) => {
  const [index, setIndex] = useState(0);
  const [shouldRender, setShouldRender] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [direction, setDirection] = useState(0); // -1 left, 1 right

  const total = zineImages.length;

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (isOpen) {
      setShouldRender(true);
      timer = setTimeout(() => {
        setIsVisible(true);
      }, 50);
    } else {
      setIsVisible(false);
      timer = setTimeout(() => {
        setShouldRender(false);
      }, 300);
    }
    return () => clearTimeout(timer);
  }, [isOpen]);

  const change = (dir: number) => {
    setDirection(dir);
    // Add small delay to allow exit animation if desired, or instant switch with slide effect
    setIndex((curr) => (curr + dir + total) % total);
  };

  const setPage = (i: number) => {
    setDirection(i > index ? 1 : -1);
    setIndex(i);
  };

  // Handle ESC key and Arrows
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        change(-1);
      } else if (e.key === 'ArrowRight') {
        change(1);
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, index]); // Logic depends on index via 'change' wrapper

  if (!shouldRender) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
        onClick={handleBackdropClick}
        className={`fixed top-0 left-0 w-full h-full bg-[#1a1a1a] z-[100001] flex flex-col transition-opacity duration-300 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" 
           style={{ 
             backgroundImage: "linear-gradient(#444 1px, transparent 1px), linear-gradient(90deg, #444 1px, transparent 1px)", 
             backgroundSize: "40px 40px" 
           }} 
      />

      {/* Header Bar */}
      <div className="w-full h-16 flex items-center justify-between px-6 z-50 border-b-2 border-[#333] bg-[#1a1a1a]">
        <div className="font-mono text-yellow text-sm tracking-widest">
            <span className="inline-block w-2 h-2 bg-rose rounded-full animate-pulse mr-2"></span>
            ZINE - GALERIA
        </div>
        <button 
            onClick={onClose}
            className="text-white hover:text-rose font-bold text-xl interactive-target"
        >
            [FECHAR]
        </button>
      </div>

      {/* Main Stage */}
      <div className="flex-1 relative flex items-center justify-center overflow-hidden" onClick={handleBackdropClick}>
        
        {/* Navigation Areas (Desktop) */}
        <div 
            className="absolute left-0 top-0 h-full w-[15%] z-40 cursor-pointer flex items-center justify-start pl-4 group interactive-target"
            onClick={(e) => { e.stopPropagation(); change(-1); }}
        >
            <span className="text-4xl text-white opacity-0 group-hover:opacity-100 transition-opacity">←</span>
        </div>
        <div 
            className="absolute right-0 top-0 h-full w-[15%] z-40 cursor-pointer flex items-center justify-end pr-4 group interactive-target"
            onClick={(e) => { e.stopPropagation(); change(1); }}
        >
            <span className="text-4xl text-white opacity-0 group-hover:opacity-100 transition-opacity">→</span>
        </div>

        {/* Current Image with Key-based animation */}
        <div key={index} className={`relative z-20 transition-all duration-300 ease-out transform ${
            direction === 0 ? 'scale-100 opacity-100' : 
            'animate-in slide-in-from-right duration-300' // Simple class, we refine below
        }`}>
            {/* The "Paper" Container - A4 Aspect Ratio */}
            <div 
                className="relative bg-white p-2 shadow-[20px_20px_0px_rgba(0,0,0,0.5)] border-2 border-white max-h-[70vh] aspect-[1/1.414]"
                style={{
                    transform: `rotate(${index % 2 === 0 ? '1deg' : '-1deg'})`
                }}
            >
                 <img 
                    src={zineImages[index]} 
                    alt={`Zine Page ${index + 1}`} 
                    className="w-full h-full object-cover block"
                 />
                 
                 {/* Tape/Sticker effect */}
                 <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-yellow/80 rotate-1 mix-blend-multiply"></div>
            </div>
        </div>

        {/* Counter */}
        <div className="absolute bottom-8 right-8 font-title text-6xl text-[#333] font-bold opacity-50 select-none z-10 pointer-events-none">
            {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </div>
      </div>

      {/* Thumbnail Strip (Footer) */}
      <div className="h-24 w-full bg-[#111] border-t-2 border-[#333] flex items-center px-4 gap-4 overflow-x-auto z-50">
        {zineImages.map((img, i) => (
            <button 
                key={i}
                onClick={() => setPage(i)}
                className={`relative h-16 aspect-[1/1.414] border-2 transition-all duration-200 interactive-target flex-shrink-0 ${
                    i === index 
                        ? 'border-yellow scale-110 shadow-[0_0_10px_rgba(229,230,144,0.5)] opacity-100' 
                        : 'border-[#444] opacity-50 hover:opacity-100 hover:border-white'
                }`}
            >
                <img src={img} className="w-full h-full object-cover" alt={`Thumb ${i}`} />
            </button>
        ))}
      </div>
    </div>
  );
};

export default ZineGallery;