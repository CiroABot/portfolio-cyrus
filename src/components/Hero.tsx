
import React from 'react';
import { useLanguage } from '../LanguageContext';
import { PROFILE_PIC } from '../data';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  // Reusable Photo Component
  const PhotoBlock = ({ className, sizeClasses }: { className?: string, sizeClasses: string }) => (
    <div className={`relative ${sizeClasses} aspect-[4/5] group z-10 ${className}`}>
        <div className="absolute inset-0 bg-black translate-x-2 translate-y-2 md:translate-x-4 md:translate-y-4 transition-transform duration-300 group-hover:translate-x-3 group-hover:translate-y-3"></div>
        <div className="absolute inset-0 bg-white border-3 border-black overflow-hidden grayscale contrast-125 hover:grayscale-0 transition-all duration-500">
                <img 
                src={PROFILE_PIC} 
                alt="Ciro Araujo" 
                className="w-full h-full object-cover"
            />
            {/* Scanlines */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-20 bg-[length:100%_2px,3px_100%] pointer-events-none"></div>
        </div>
        
        {/* "REC" UI Element */}
        <div className="absolute top-2 right-2 md:top-4 md:right-4 flex items-center gap-1 md:gap-2 z-30 mix-blend-difference">
            <div className="w-2 h-2 md:w-3 md:h-3 bg-red-600 rounded-full animate-pulse"></div>
            <span className="font-mono text-[10px] md:text-xs font-bold text-white uppercase tracking-widest">REC</span>
        </div>
    </div>
  );

  return (
    <header id="home" className="relative w-full h-auto lg:min-h-[85vh] bg-[#e0e0e0] overflow-hidden flex flex-col justify-center py-12 lg:pb-20 lg:pt-32">
      
      {/* BACKGROUND GRAPHICS (Static & Geometric) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
          {/* Grid Paper Texture */}
          <div className="absolute inset-0 opacity-10" 
             style={{ 
               backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)", 
               backgroundSize: "40px 40px" 
             }} 
          />
          {/* Large Abstract Shapes for Composition */}
          <div className="absolute -top-[10%] -right-[10%] w-[50vw] h-[50vw] bg-hero rounded-full mix-blend-multiply opacity-80 blur-[80px] animate-float"></div>
          <div className="absolute top-[20%] -left-[10%] w-[40vw] h-[40vw] bg-rose rounded-full mix-blend-multiply opacity-60 blur-[60px]"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-[1400px] h-full flex flex-col md:justify-center">
        
        {/* --- MAIN GRID LAYOUT --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-center">

            {/* LEFT COLUMN: TITLE, INFO & MOBILE PHOTO */}
            <div className="lg:col-span-7 flex flex-col relative z-20">
                
                {/* ROLE STRIP */}
                <div className="w-fit mb-1 lg:mb-2 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                    <div className="bg-black text-white px-3 py-0.5 md:px-4 md:py-1 border-2 border-black shadow-[2px_2px_0px_rgba(0,0,0,0.2)] flex items-center gap-2 overflow-hidden relative group">
                         <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 animate-pulse pointer-events-none"></div>
                         <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-red-600 animate-[ping_1.5s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
                        <span className="font-mono font-bold text-[10px] md:text-sm uppercase tracking-widest relative z-10">
                            {t.role}
                        </span>
                        <span className="w-1.5 h-3 md:w-2 md:h-4 bg-white animate-pulse"></span>
                    </div>
                </div>

                {/* MOBILE/TABLET LAYOUT */}
                <div className="flex flex-row items-end justify-between gap-2 sm:gap-4 mb-6 lg:hidden animate-slide-up" style={{ animationDelay: '0.2s' }}>
                     <h1 className="font-title font-bold text-[13vw] sm:text-[11vw] leading-[0.8] tracking-tighter"
                        style={{ 
                            WebkitTextStroke: '1px black', 
                            color: 'transparent'
                        }}
                    >
                        <span className="block">CIRO</span>
                        <span className="block">ARAUJO</span>
                    </h1>
                    <PhotoBlock className="flex-shrink-0 mb-1" sizeClasses="w-[28vw] max-w-[160px]" />
                </div>

                {/* DESKTOP TITLE (STATIC) */}
                <h1 
                    className="hidden lg:block font-title font-bold text-[clamp(4.5rem,13vw,10rem)] leading-[0.8] tracking-tighter mb-8 cursor-default"
                    style={{ 
                        WebkitTextStroke: '2px black', 
                        color: 'transparent'
                    }}
                >
                    <span className="block animate-slide-up" style={{ animationDelay: '0.2s' }}>CIRO</span>
                    <span className="block animate-slide-up" style={{ animationDelay: '0.3s' }}>ARAUJO</span>
                </h1>

                {/* BIO SECTION */}
                <div className="lg:max-w-2xl bg-[#f9f9f9] border-3 border-black p-4 md:p-8 shadow-pop animate-slide-up relative rotate-1 mb-4 group hover:rotate-0 transition-transform duration-300" style={{ animationDelay: '0.4s' }}>
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-6 bg-yellow/80 rotate-[-2deg] z-10 mix-blend-multiply opacity-90 group-hover:rotate-[-4deg] transition-transform"></div>
                    <p className="font-body font-normal text-base md:text-xl leading-[1.6] text-black text-justify">
                        {t.bio}
                    </p>
                </div>

                 {/* Languages Section & Mobile Blog Button */}
                 <div className="w-full flex flex-col gap-4 animate-slide-up" style={{ animationDelay: '0.5s' }}>
                    
                    {/* Specs Row */}
                    <div className="flex flex-col md:flex-row gap-4 items-start md:items-stretch">
                        
                        {/* Languages Box */}
                        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center bg-white/50 backdrop-blur-sm border-2 border-black/10 px-3 py-2 md:px-4 rounded-sm hover:border-black transition-colors w-fit">
                            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-black bg-yellow px-1 border border-black transform -rotate-2">
                            {t.specs_audio}:
                            </span>
                            <div className="flex flex-wrap gap-4 font-title text-sm md:text-base">
                                <span className="flex items-center gap-2 group">
                                    <span className="text-lg filter grayscale group-hover:grayscale-0 transition-all">🇧🇷</span> 
                                    <span className="italic font-bold text-gray-700 group-hover:text-black">{t.specs_pt}</span>
                                </span>
                                <span className="flex items-center gap-2 group">
                                    <span className="text-lg filter grayscale group-hover:grayscale-0 transition-all">🇺🇸</span> 
                                    <span className="italic font-bold text-gray-700 group-hover:text-black">{t.specs_en}</span>
                                </span>
                                <span className="flex items-center gap-2 group">
                                    <span className="text-lg filter grayscale group-hover:grayscale-0 transition-all">🇪🇸</span> 
                                    <span className="italic font-bold text-gray-700 group-hover:text-black">{t.specs_es}</span>
                                </span>
                            </div>
                        </div>

                    </div>

                    <div className="lg:hidden w-full sm:w-auto mt-2">
                        <a href={t.blog_url} target="_blank" rel="noreferrer" className="block w-full group interactive-target">
                            <div className="bg-rose border-3 border-black px-4 py-3 shadow-[4px_4px_0px_#000] transition-transform active:translate-y-1 active:shadow-none flex items-center justify-between gap-4">
                                <div className="flex flex-col items-start">
                                    <span className="font-mono font-bold text-[10px] bg-black text-white px-1 mb-1 uppercase tracking-wider">Substack</span>
                                    <span className="font-title font-black text-lg uppercase italic text-black leading-none">
                                        {t.blog_title}
                                    </span>
                                </div>
                                <span className="text-xl bg-white border-2 border-black rounded-full w-8 h-8 flex items-center justify-center">
                                    ✎
                                </span>
                            </div>
                        </a>
                    </div>
                </div>

            </div>

            {/* RIGHT COLUMN: PHOTO & DESKTOP BLOG CTA */}
            <div className="hidden lg:col-span-5 lg:flex flex-col items-center lg:items-end justify-center relative mt-12 lg:mt-0">
                <PhotoBlock sizeClasses="w-[340px] md:w-[440px]" />

                <a href={t.blog_url} target="_blank" rel="noreferrer" className="relative mt-[-40px] mr-[10px] md:mr-[50px] z-20 group interactive-target animate-slide-up" style={{ animationDelay: '0.6s' }}>
                    <div className="bg-rose border-3 border-black px-8 py-5 shadow-[6px_6px_0px_#000] transition-transform group-hover:translate-y-1 group-hover:translate-x-1 group-hover:shadow-[2px_2px_0px_#000] flex items-center gap-4">
                        <div className="flex flex-col items-start">
                            <span className="font-mono font-bold text-[10px] bg-black text-white px-1 mb-1 uppercase tracking-wider">Substack</span>
                            <span className="font-title font-black text-xl uppercase italic text-black border-b-2 border-black leading-none pb-0.5">
                                {t.blog_title}
                            </span>
                        </div>
                        <span className="text-2xl bg-white border-2 border-black rounded-full w-10 h-10 flex items-center justify-center group-hover:rotate-12 transition-transform shadow-sm">
                            ✎
                        </span>
                    </div>
                </a>
            </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
