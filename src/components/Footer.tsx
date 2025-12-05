
  import React, { useState } from 'react';
  import { useLanguage } from '../LanguageContext';
  import { DOC_LINKS, SOCIAL_LINKS } from '../data';

  const Footer: React.FC = () => {
    const { t, lang } = useLanguage();
    const [copied, setCopied] = useState(false);

    // Determines the CV URL based on current language
    const currentCvUrl = lang === 'pt' ? DOC_LINKS.cv_pt : DOC_LINKS.cv_en;

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const handleCopyEmail = (e: React.MouseEvent) => {
      e.preventDefault();
      navigator.clipboard.writeText("contact@ciroaraujo.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 1000);
    };

    return (
      <footer id="contact" className="relative bg-black text-white py-24 border-t-3 border-yellow overflow-hidden">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 opacity-20 pointer-events-none" 
            style={{ 
              backgroundImage: "linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)", 
              backgroundSize: "40px 40px" 
            }} 
        />

        <div className="container mx-auto px-6 relative z-10 max-w-[1300px]">
          <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-20">
            
            {/* Main Call to Action */}
            <div className="flex-1 w-full">
              <h2 className="font-title font-bold text-5xl md:text-7xl italic text-yellow mb-6 drop-shadow-[4px_4px_0px_#d17bac] max-w-2xl leading-[0.9]">
                {t.collab}
              </h2>
              <a 
                href="mailto:contact@ciroaraujo.com" 
                onClick={handleCopyEmail}
                className={`inline-block font-mono text-2xl md:text-3xl transition-colors interactive-target underline decoration-wavy decoration-teal underline-offset-8 break-all ${copied ? 'text-green-400 decoration-green-400' : 'text-white hover:text-rose'}`}
              >
                {copied ? t.copied_msg : 'contact@ciroaraujo.com'}
              </a>
              
              {/* Documents Links */}
              <div className="mt-8 flex flex-wrap gap-4">
                  <a href={currentCvUrl} target="_blank" rel="noreferrer" className="font-mono text-sm font-bold bg-[#333] px-3 py-2 border border-gray-600 hover:bg-white hover:text-black transition-colors interactive-target">
                      ↓ {t.btn_cv}
                  </a>
                  <a href={DOC_LINKS.portfolio} target="_blank" rel="noreferrer" className="font-mono text-sm font-bold bg-[#333] px-3 py-2 border border-gray-600 hover:bg-white hover:text-black transition-colors interactive-target">
                      ↓ {t.btn_portfolio_pdf}
                  </a>
              </div>
            </div>

            {/* Social Links & Utilities Column */}
            <div className="flex flex-col items-start md:items-end gap-4 w-full md:w-auto">
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noreferrer" className="w-full md:w-auto text-center bg-white text-black font-bold text-xl px-6 py-2 border-3 border-transparent hover:bg-rose hover:text-white hover:border-white hover:shadow-pop-sm transition-all interactive-target shadow-[4px_4px_0px_#333]">INSTAGRAM</a>
              <a href={SOCIAL_LINKS.letterboxd} target="_blank" rel="noreferrer" className="w-full md:w-auto text-center bg-white text-black font-bold text-xl px-6 py-2 border-3 border-transparent hover:bg-green-500 hover:text-black hover:border-white hover:shadow-pop-sm transition-all interactive-target shadow-[4px_4px_0px_#333]">LETTERBOXD</a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className="w-full md:w-auto text-center bg-white text-black font-bold text-xl px-6 py-2 border-3 border-transparent hover:bg-yellow hover:text-black hover:border-white hover:shadow-pop-sm transition-all interactive-target shadow-[4px_4px_0px_#333]">LINKEDIN</a>
              <a href={SOCIAL_LINKS.substack} target="_blank" rel="noreferrer" className="w-full md:w-auto text-center bg-white text-black font-bold text-xl px-6 py-2 border-3 border-transparent hover:bg-navy hover:text-white hover:border-white hover:shadow-pop-sm transition-all interactive-target shadow-[4px_4px_0px_#333]">SUBSTACK</a>
              
              {/* REWIND BUTTON - Attached to Social Stack */}
              <button 
                  onClick={scrollToTop} 
                  className="mt-4 w-full md:w-auto group relative bg-[#222] border-2 border-white/30 text-white font-mono font-bold text-sm px-6 py-3 flex items-center justify-center gap-2 hover:bg-white hover:text-black hover:border-white transition-all interactive-target active:scale-95"
              >
                  <span className="w-2 h-2 bg-rose rounded-full animate-pulse"></span>
                  {t.btn_rewind}
                  <span className="text-lg leading-none ml-1">▲</span>
              </button>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t-2 border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm font-mono text-gray-400 gap-6">
            <p className="uppercase tracking-widest order-2 md:order-1">© {new Date().getFullYear()} Ciro Araujo. {t.rights_reserved}</p>
            
            <div className="order-1 md:order-2 flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <p className="uppercase tracking-widest text-white/50">Brasília, Brasil</p>
            </div>
          </div>
        </div>
      </footer>
    );
  };

  export default Footer;
