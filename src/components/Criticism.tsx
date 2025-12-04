
import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext';
import { DOC_LINKS } from '../data';

const Criticism: React.FC = () => {
  const { t } = useLanguage();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section 
        id="criticism" 
        // Conditional height/padding: 
        // Mobile & Collapsed: min-h-0, py-0 (Compact)
        // Mobile & Expanded: min-h-[60vh], py-10
        // Desktop: Always min-h-[60vh], py-20
        className={`bg-navy border-t-3 border-black relative overflow-hidden text-white flex flex-col md:flex-row items-center ${isExpanded ? 'min-h-[60vh] py-10' : 'min-h-0 py-0'} md:min-h-[60vh] md:py-20`}
    >
        {/* Texture */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{ 
               backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", 
               backgroundSize: "20px 20px" 
             }} 
        />
        
        {/* MOBILE ACCORDION HEADER */}
       <div className="md:hidden w-full sticky top-0 z-50 bg-navy border-b-3 border-white">
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full flex items-center justify-between p-6 bg-navy active:brightness-110 transition-all"
          >
              <h2 className="font-title font-bold text-4xl uppercase italic leading-none text-white">{t.crit_title}</h2>
              <div className="w-10 h-10 border-2 border-white flex items-center justify-center font-bold text-xl bg-white text-navy">
                  {isExpanded ? '−' : '+'}
              </div>
          </button>
      </div>

        <div className={`max-w-[1300px] w-full mx-auto px-6 relative z-10 ${isExpanded ? 'block' : 'hidden md:block'}`}>
            <div className="border-4 border-white p-6 md:p-12 relative shadow-[10px_10px_0px_#000] bg-navy">
                {/* Decorative Bolts */}
                <div className="absolute top-2 left-2 w-3 h-3 bg-white rounded-full"></div>
                <div className="absolute top-2 right-2 w-3 h-3 bg-white rounded-full"></div>
                <div className="absolute bottom-2 left-2 w-3 h-3 bg-white rounded-full"></div>
                <div className="absolute bottom-2 right-2 w-3 h-3 bg-white rounded-full"></div>

                <div className="flex flex-col md:flex-row items-center gap-10">
                    
                    {/* Left: Floppy Icon / Graphic */}
                    <div className="w-full md:w-1/3 flex justify-center">
                        <div className="w-48 h-48 bg-gray-200 border-4 border-black relative shadow-[5px_5px_0px_rgba(0,0,0,0.5)] rotate-[-3deg]">
                            <div className="absolute top-0 left-4 w-24 h-16 bg-gray-400 border-x-4 border-b-4 border-black"></div>
                            {/* Removed text from label as requested */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[80%] h-20 bg-white border-2 border-black flex items-center justify-center">
                                <div className="w-[80%] h-1 bg-black/20 rounded-full"></div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Info */}
                    <div className="w-full md:w-2/3 text-center md:text-left">
                        <h2 className="font-mono font-bold text-yellow text-sm tracking-widest uppercase mb-2">
                            /// {t.crit_title} ///
                        </h2>
                        <h3 className="font-title font-bold italic text-4xl md:text-5xl mb-6">
                            {t.crit_subtitle}
                        </h3>
                        <p className="font-body text-lg mb-8 max-w-xl">
                            {t.crit_desc}
                        </p>
                        
                        {/* Language Warning Stamp */}
                        <div className="mb-6 inline-block border-2 border-white/50 px-3 py-1 text-xs font-mono text-yellow uppercase tracking-tight">
                            {t.crit_warning}
                        </div>

                        <div className="block">
                            <a 
                                href={DOC_LINKS.drive} 
                                target="_blank" 
                                rel="noreferrer"
                                className="inline-block bg-white text-navy font-mono font-bold text-xl px-8 py-4 border-4 border-transparent shadow-[5px_5px_0px_#000] hover:bg-yellow hover:text-black hover:border-black hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all interactive-target"
                            >
                                📂 {t.crit_btn_drive}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Criticism;
