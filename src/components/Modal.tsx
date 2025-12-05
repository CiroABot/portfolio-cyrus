
import React, { useEffect, useState } from 'react';
import { FilmData } from '../types';
import { useLanguage } from '../LanguageContext';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: FilmData | null;
  cinemaMode?: boolean; // Prop coming from parent (Projects)
  cinemaUrl?: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, data, cinemaMode, cinemaUrl }) => {
  const { t } = useLanguage(); 
  const [shouldRender, setShouldRender] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  // Internal Theater Mode state (Lights Out) for standard Film Modal
  const [theaterMode, setTheaterMode] = useState(false);
  
  const [mediaMode, setMediaMode] = useState<'video' | 'image'>('video');
  const [activeImage, setActiveImage] = useState<string>('');

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (isOpen) {
      setShouldRender(true);
      // Reset internal states
      setTheaterMode(false);
      
      if (data) {
        setMediaMode(data.videoEmbed ? 'video' : 'image');
        setActiveImage(data.img);
      }

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
  }, [isOpen, data]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isOpen && e.key === 'Escape') {
        if (theaterMode) {
            setTheaterMode(false); // Exit theater mode first
        } else {
            onClose();
        }
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, theaterMode]);

  if (!shouldRender) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const switchToImage = (url: string) => {
    setActiveImage(url);
    setMediaMode('image');
    // If switching to image, maybe exit theater mode if it makes sense, 
    // but usually users might want to see photos in full screen too.
    // For now we keep theater mode active if set.
  };

  // Determine effective mode (External Cinema Mode OR Internal Theater Mode)
  const isImmersive = cinemaMode || theaterMode;

  return (
    <div 
      onClick={handleBackdropClick}
      className={`fixed top-0 left-0 w-full h-full z-[100000] flex justify-center items-center backdrop-blur-sm transition-all duration-500 ease-in-out px-4 md:px-0 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } ${isImmersive ? 'bg-black' : 'bg-black/95'}`}
    >
      <div 
        className={`relative transition-all duration-500 ease-in-out ${
          isImmersive 
            ? 'w-full h-full max-w-none bg-black border-none shadow-none flex items-center justify-center p-0 scale-100 rotate-0' 
            : 'bg-white border-3 border-black shadow-pop-hover flex flex-col md:flex-row overflow-hidden w-full max-w-[1200px] h-[85vh] md:h-[80vh] md:rotate-1 scale-100'
        }`}
        onClick={(e) => e.stopPropagation()} 
      >
        {/* CLOSE BUTTON - Larger Touch Target */}
        <button 
          onClick={onClose} 
          className={`absolute top-4 right-4 w-11 h-11 md:w-10 md:h-10 flex items-center justify-center text-xl font-bold z-[100001] interactive-target border-2 transition-transform hover:scale-110 active:scale-95 ${
              isImmersive 
              ? 'bg-transparent text-white border-white hover:bg-white hover:text-black opacity-50 hover:opacity-100' 
              : 'bg-rose text-white border-black shadow-pop-sm hover:bg-white hover:text-black'
          }`}
          title="Close"
          aria-label="Close Modal"
        >
          X
        </button>

        {/* 
            THEATER MODE TOGGLE 
            Only show for standard Film Modal (not external vignette mode) 
            and only if there is visual content
        */}
        {!cinemaMode && data && (
            <button
                onClick={() => setTheaterMode(!theaterMode)}
                className={`absolute top-4 right-16 w-11 h-11 md:w-10 md:h-10 flex items-center justify-center text-lg font-bold z-[100001] interactive-target border-2 transition-transform hover:scale-110 active:scale-95 ${
                    isImmersive 
                    ? 'bg-transparent text-white border-white hover:bg-white hover:text-black opacity-50 hover:opacity-100' 
                    : 'bg-black text-white border-black shadow-pop-sm hover:bg-white hover:text-black'
                }`}
                title={theaterMode ? "Exit Cinema Mode" : "Enter Cinema Mode"}
                aria-label="Toggle Cinema Mode"
            >
                {theaterMode ? '◎' : '◉'}
            </button>
        )}

        {/* --- CONTENT RENDER --- */}
        
        {/* CASE 1: External Cinema URL (Vignettes) */}
        {cinemaMode ? (
          <div className="w-full max-w-[1400px] aspect-video animate-in fade-in duration-700">
            <iframe src={cinemaUrl} className="w-full h-full border-none" allow="autoplay; fullscreen" allowFullScreen></iframe>
          </div>
        ) : data ? (
          <>
            {/* 
                --- LEFT COLUMN: MEDIA --- 
                In Theater Mode, this takes up 100% width/height.
            */}
            <div className={`transition-all duration-500 ease-in-out bg-black flex items-center justify-center relative overflow-hidden group ${
                isImmersive 
                ? 'w-full h-full border-none' 
                : 'w-full md:w-[55%] h-[250px] md:h-full flex-shrink-0 border-b-3 md:border-b-0 md:border-r-3 border-black'
            }`}>
               
               {/* Show Video */}
               {mediaMode === 'video' && data.videoEmbed ? (
                 <iframe 
                    src={data.videoEmbed} 
                    className={`w-full h-full border-none transition-all duration-700 ${isImmersive ? 'max-w-[1600px] aspect-video' : ''}`} 
                    allowFullScreen
                    allow="autoplay; fullscreen"
                 ></iframe>
               ) : (
                 <img 
                    src={activeImage} 
                    alt={data.title} 
                    className={`w-full h-full transition-all duration-700 ${isImmersive ? 'object-contain' : 'object-contain md:object-cover'}`} 
                 />
               )}

               {/* Watch Trailer Button (Only in Normal Mode + Image View) */}
               {!isImmersive && mediaMode === 'image' && data.videoEmbed && (
                 <button 
                   onClick={() => setMediaMode('video')}
                   className="absolute bottom-5 right-5 bg-rose text-white border-2 border-black px-4 py-2 font-bold uppercase shadow-pop-sm hover:scale-105 transition-transform z-10 active:scale-95"
                 >
                   {t.modal_watch_trailer}
                 </button>
               )}
            </div>

            {/* 
                --- RIGHT COLUMN: INFO --- 
                In Theater Mode, this is hidden or collapsed.
            */}
            <div 
                className={`bg-white text-black flex flex-col overscroll-contain transition-all duration-500 ${
                    isImmersive 
                    ? 'w-0 opacity-0 overflow-hidden p-0' 
                    : 'w-full md:w-[45%] flex-grow overflow-y-auto'
                }`}
                data-lenis-prevent
            >
                {/* Content wrapper to prevent layout shift during transition */}
                <div className="min-w-[300px] p-6 md:p-8 pb-20">
                    {/* Header */}
                    <h2 className="font-title text-3xl md:text-5xl leading-[0.9] mb-4 uppercase border-b-3 border-black pb-4 font-medium">{data.title}</h2>
                    <div className="flex flex-wrap items-center gap-2 mb-6 font-bold text-navy tracking-widest uppercase text-xs md:text-sm">
                        <span>{data.year}</span>
                        <span>•</span>
                        <span>{data.type}</span>
                        <span>•</span>
                        <span className="bg-black text-white px-2 py-0.5">{data.role}</span>
                    </div>

                    {/* Tech Specs Badge Row */}
                    {data.specs && (
                        <div className="flex flex-wrap gap-2 mb-6">
                            {Object.entries(data.specs).map(([key, value]) => (
                                <span key={key} className="border-2 border-black px-2 py-1 bg-white text-xs font-mono uppercase shadow-[2px_2px_0px_rgba(0,0,0,0.5)]">
                                    {value}
                                </span>
                            ))}
                        </div>
                    )}

                    {/* Synopsis */}
                    <div className="text-base md:text-lg leading-relaxed text-justify mb-8 font-medium font-body">
                        <p>{data.desc}</p>
                    </div>

                    {/* Director's Statement */}
                    {data.directorStatement && (
                        <div className="mb-8 border-l-4 border-rose pl-5 py-1">
                            <h4 className="font-bold text-sm uppercase text-rose mb-2">{t.modal_director_note}</h4>
                            <p className="font-title italic text-lg md:text-xl leading-snug text-navy">
                                "{data.directorStatement}"
                            </p>
                        </div>
                    )}

                    {/* Festivals */}
                    {data.festivals && data.festivals.length > 0 && (
                        <div className="mb-8 bg-gray-50 border-2 border-black p-4 shadow-pop-sm">
                            <h4 className="font-bold uppercase border-b-2 border-black mb-3 pb-1">{t.modal_festivals}</h4>
                            <ul className="space-y-2 text-sm font-semibold">
                                {data.festivals.map((fest, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <span className="text-rose text-lg leading-none">★</span>
                                        <span className="leading-tight">{fest}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Crew List (Credits) */}
                    {data.credits && (
                        <div className="mb-8">
                            <h4 className="font-bold uppercase text-navy mb-3">{t.modal_crew}</h4>
                            <div className="font-mono text-xs uppercase border-t-2 border-dashed border-black">
                                {data.credits.map((credit, i) => (
                                    <div key={i} className="flex justify-between py-2 border-b-2 border-dashed border-black/30">
                                        <span className="text-gray-600">{credit.role}</span>
                                        <span className="font-bold">{credit.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Production & Support */}
                    {data.production && (
                        <div className="mb-8 border-2 border-black bg-white/50 p-3">
                            <h4 className="font-bold uppercase text-navy mb-1 text-xs">{t.modal_production}</h4>
                            <p className="font-bold text-sm uppercase">{data.production}</p>
                        </div>
                    )}

                    {/* Stills Gallery (Mini Carousel) */}
                    {data.stills && data.stills.length > 0 && (
                        <div className="mb-8">
                             <h4 className="font-bold uppercase text-navy mb-3">{t.modal_stills}</h4>
                             <div 
                                className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide"
                                data-lenis-prevent
                             >
                                 <button 
                                     key="main"
                                     onClick={() => switchToImage(data.img)}
                                     className={`flex-shrink-0 h-16 w-24 object-cover border-2 cursor-pointer transition-all ${activeImage === data.img && mediaMode === 'image' ? 'border-rose scale-105' : 'border-black opacity-70 hover:opacity-100'}`}
                                 >
                                     <img src={data.img} className="w-full h-full object-cover" alt="Main" />
                                 </button>
                                 
                                 {data.stills.filter(s => s !== data.img).map((still, i) => (
                                     <button 
                                         key={i}
                                         onClick={() => switchToImage(still)}
                                         className={`flex-shrink-0 h-16 w-24 object-cover border-2 cursor-pointer transition-all ${activeImage === still && mediaMode === 'image' ? 'border-rose scale-105' : 'border-black opacity-70 hover:opacity-100'}`}
                                     >
                                         <img src={still} className="w-full h-full object-cover" alt={`Still ${i}`} />
                                     </button>
                                 ))}
                             </div>
                        </div>
                    )}

                    {/* External Links */}
                    {data.links && (
                        <div className="flex flex-wrap gap-4 mt-auto pt-4 border-t-3 border-black">
                            {data.links.imdb && (
                                <a href={data.links.imdb} target="_blank" rel="noreferrer" className="font-title font-bold italic text-xl underline decoration-2 decoration-rose hover:text-rose">IMDb</a>
                            )}
                            {data.links.letterboxd && (
                                <a href={data.links.letterboxd} target="_blank" rel="noreferrer" className="font-title font-bold italic text-xl underline decoration-2 decoration-teal hover:text-teal">Letterboxd</a>
                            )}
                            {data.links.pressKit && (
                                <a href={data.links.pressKit} target="_blank" rel="noreferrer" className="font-title font-bold italic text-xl underline decoration-2 decoration-navy hover:text-navy">Press Kit (PDF)</a>
                            )}
                        </div>
                    )}
                </div>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Modal;
