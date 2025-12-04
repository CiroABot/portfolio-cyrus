
import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext';
import VozesImg from '../assets/VOZESDIVERSAS.png';
import PopImg from '../assets/POPAOCUBO.png';
import MetaImg from '../assets/LABMETAVERSO.png';
import OficinaPoster from '../assets/OFICINA-CINEMA-FEITO_poster.jpg';

interface ProjectsProps {
    onOpenZine: () => void;
    onPlayVignette: (url: string) => void;
}

const Projects: React.FC<ProjectsProps> = ({ onOpenZine, onPlayVignette }) => {
  const { t } = useLanguage();
  const [isExpanded, setIsExpanded] = useState(false);

  const ProjectTag: React.FC<{ text: string; invert?: boolean }> = ({ text, invert = false }) => (
    <span className={`border-2 border-black px-2 py-1 font-bold text-xs uppercase shadow-[2px_2px_0px_#000] font-mono tracking-tight ${invert ? 'bg-black text-white' : 'bg-white text-black'}`}>
        {text}
    </span>
  );

  const KissMark: React.FC<{ className?: string }> = ({ className }) => (
    <svg viewBox="0 0 100 60" className={className} fill="currentColor">
       <path d="M50 48 C20 48 5 35 5 22 C5 10 25 5 45 18 C48 20 52 20 55 18 C75 5 95 10 95 22 C95 35 80 48 50 48 Z M50 32 C65 32 75 28 75 25 C75 22 65 15 50 25 C35 15 25 22 25 25 C25 28 35 32 50 32 Z" />
    </svg>
  );

  return (
    <section 
        id="projects" 
        // Conditional padding: no padding when collapsed on mobile, standard padding when expanded or on desktop
        className={`relative border-y-3 border-black z-10 overflow-hidden bg-yellow ${isExpanded ? 'py-10' : 'py-0'} md:py-24`}
    >
      <div className="absolute inset-0 z-0 pointer-events-none opacity-10" 
           style={{ 
             backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)", 
             backgroundSize: "40px 40px" 
           }}>
      </div>

       {/* MOBILE ACCORDION HEADER */}
       <div className="md:hidden sticky top-0 z-50 bg-yellow border-b-3 border-black">
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full flex items-center justify-between p-6 bg-yellow active:brightness-95 transition-all"
          >
              <h2 className="font-title font-bold text-4xl uppercase italic leading-none">{t.title_projects}</h2>
              <div className="w-10 h-10 border-2 border-black flex items-center justify-center font-bold text-xl bg-black text-white">
                  {isExpanded ? '−' : '+'}
              </div>
          </button>
      </div>

      <div className={`w-full max-w-[1300px] mx-auto px-5 md:px-10 relative z-10 ${isExpanded ? 'block' : 'hidden md:block'}`}>
        
        {/* DESKTOP HEADER */}
        <div className="hidden md:flex mb-16 flex-col md:flex-row items-start md:items-end justify-between gap-6 border-b-4 border-black pb-6 bg-white p-6 shadow-[8px_8px_0px_#000]">
            <div>
                <h2 className="font-title font-bold text-5xl md:text-7xl text-left relative inline-block uppercase italic leading-[0.8] vhs-text">
                    {t.title_projects}
                    <span className="absolute -right-6 -top-6 text-sm font-mono font-bold not-italic bg-black text-white px-2 py-1 rotate-12">CH. 01-04</span>
                </h2>
            </div>
            <div className="font-mono font-bold text-sm md:text-right uppercase tracking-widest text-navy whitespace-pre-line">
                {t.project_broadcast}
            </div>
        </div>

        <div className="flex flex-col gap-16">

            {/* CHANNEL 01 */}
            <div className="relative group">
                <div className="absolute top-4 left-4 w-full h-full bg-navy border-3 border-black z-0 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
                
                <div className="relative z-10 bg-white border-3 border-black grid grid-cols-1 xl:grid-cols-[1.5fr_1fr] h-full">
                    <div className="p-8 md:p-10 flex flex-col justify-between border-b-3 xl:border-b-0 xl:border-r-3 border-black relative overflow-hidden">
                        
                        <div className="absolute -top-6 -left-6 w-40 h-24 text-[#E60023] opacity-20 pointer-events-none rotate-[-15deg] mix-blend-multiply z-0">
                            <KissMark className="w-full h-full" />
                        </div>
                        
                        <div className="absolute top-0 right-0 p-2 bg-black text-white font-mono font-bold text-xs z-20">[ REC ● ]</div>
                        
                        <div className="relative z-10">
                            <div className="flex items-center gap-4 mb-4">
                                <h3 className="font-title font-black italic text-5xl md:text-6xl uppercase text-black leading-[0.9] drop-shadow-[3px_3px_0px_rgba(209,123,172,1)] vhs-text">
                                    CINEBEIJOCA
                                </h3>
                                <div className="w-16 h-10 text-[#E60023] animate-float drop-shadow-[2px_2px_0px_rgba(0,0,0,0.2)]">
                                     <KissMark className="w-full h-full" />
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2 mb-6">
                                <ProjectTag text={`2023 - ${t.present}`} invert />
                                <ProjectTag text={t.tags_curatorship} />
                                <ProjectTag text={t.tags_criticism} />
                            </div>
                            <div className="text-lg font-medium font-body leading-relaxed text-justify border-l-4 border-rose pl-4 mb-6">{t.cine_desc}</div>
                        </div>

                        <div className="mt-auto bg-[#f4f4f4] p-4 border-2 border-black shadow-[4px_4px_0px_#000]">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div><strong className="block font-mono font-bold uppercase text-rose text-xs mb-1">★ {t.roles_label}</strong><p className="font-mono font-bold text-sm tracking-tight leading-tight">{t.cine_roles}</p></div>
                                <div><strong className="block font-mono font-bold uppercase text-navy text-xs mb-1">★ {t.support_label}</strong><p className="font-mono font-bold text-sm tracking-tight leading-tight">UnB / Finatec / CineBrasília</p></div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col bg-[#f0f0f0]">
                        <button onClick={() => onPlayVignette("https://www.youtube.com/embed/7f_hCKZjDCw?autoplay=1")} className="flex-1 min-h-[200px] relative border-b-3 border-black group/btn overflow-hidden interactive-target">
                            <div className="absolute inset-0 bg-black group-hover/btn:bg-rose transition-colors duration-300"></div>
                            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white group-hover/btn:text-black">
                                <span className="text-6xl mb-2 transition-transform duration-200 group-hover/btn:scale-125">▶</span>
                                <span className="font-mono font-bold text-xl tracking-widest uppercase border-2 border-current px-4 py-1">{t.btn_watch}</span>
                            </div>
                        </button>
                        <div className="flex-1 min-h-[120px] bg-white flex flex-col p-6 items-center justify-center">
                             <button onClick={onOpenZine} className="w-full h-full py-4 bg-yellow border-3 border-black shadow-[4px_4px_0px_#000] font-bold text-xl uppercase flex items-center justify-center gap-3 transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none interactive-target">
                                <span className="text-2xl text-[#E60023]">💋</span><span className="font-title italic vhs-text">{t.btn_zines}</span>
                             </button>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* CHANNEL 02 */}
            <div className="relative group">
                <div className="absolute top-4 left-4 w-full h-full bg-rose border-3 border-black z-0 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
                
                <div className="relative z-10 bg-black text-white border-3 border-black p-6 md:p-8">
                    
                    <div className="flex justify-between items-end border-b-4 border-white/20 pb-4 mb-6">
                        <h3 className="font-title font-black italic text-4xl uppercase text-yellow leading-[0.9] drop-shadow-[2px_2px_0px_#d17bac] vhs-text">
                            {t.ucb_title} <span className="text-rose not-italic font-mono text-sm ml-2 animate-pulse">● LIVE FEED</span>
                        </h3>
                        <span className="font-mono font-bold text-xs bg-rose text-black px-2 py-1 border border-black shadow-[2px_2px_0px_#fff]">2025</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        
                        {/* Monitor 1 */}
                        <div className="bg-[#111] border-3 border-white/20 flex flex-col shadow-[5px_5px_0px_#222] group/monitor">
                             <div className="relative aspect-video bg-black border-b-2 border-white/20 overflow-hidden group/screen">
                                 <div className="absolute top-2 left-2 font-mono text-[10px] text-black bg-yellow px-1 border border-white font-bold z-20">CAM_01</div>
                                 <img src={VozesImg} className="w-full h-full object-cover opacity-60 group-hover/screen:opacity-100 transition-opacity grayscale group-hover/screen:grayscale-0" alt="Vozes" />
                             </div>
                             <div className="p-4 flex flex-col h-full relative">
                                 <strong className="font-title italic text-yellow text-xl uppercase leading-none mb-2 border-b border-white/20 pb-2">{t.ucb_vozes_title}</strong>
                                 <p className="font-mono font-bold text-xs text-teal mb-4 flex-grow uppercase">{t.ucb_vozes_role}</p>
                                 <div className="text-[10px] font-mono font-bold text-rose border-t border-white/20 pt-2 mb-3 uppercase">
                                     {t.ucb_vozes_credits}
                                 </div>
                                 <button 
                                     onClick={() => onPlayVignette("https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1")}
                                     className="w-full bg-rose text-white hover:bg-yellow hover:text-black font-mono font-bold text-xs py-2 uppercase border border-black transition-colors interactive-target shadow-[2px_2px_0px_#fff] active:translate-y-[2px] active:shadow-none"
                                 >
                                     {t.btn_watch}
                                 </button>
                             </div>
                        </div>

                        {/* Monitor 2 */}
                        <div className="bg-[#111] border-3 border-white/20 flex flex-col shadow-[5px_5px_0px_#222] group/monitor">
                             <div className="relative aspect-video bg-black border-b-2 border-white/20 overflow-hidden group/screen">
                                 <div className="absolute top-2 left-2 font-mono text-[10px] text-black bg-yellow px-1 border border-white font-bold z-20">CAM_02</div>
                                 <img src={PopImg} className="w-full h-full object-cover opacity-60 group-hover/screen:opacity-100 transition-opacity grayscale group-hover/screen:grayscale-0" alt="Pop" />
                             </div>
                             <div className="p-4 flex flex-col h-full relative">
                                 <strong className="font-title italic text-yellow text-xl uppercase leading-none mb-2 border-b border-white/20 pb-2">{t.ucb_pop_title}</strong>
                                 <p className="font-mono font-bold text-xs text-teal mb-4 flex-grow uppercase">{t.ucb_pop_role}</p>
                                 <div className="text-[10px] font-mono font-bold text-rose border-t border-white/20 pt-2 mb-3 uppercase">
                                     {t.ucb_pop_credits}
                                 </div>
                                 <button 
                                     onClick={() => onPlayVignette("https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1")}
                                     className="w-full bg-rose text-white hover:bg-yellow hover:text-black font-mono font-bold text-xs py-2 uppercase border border-black transition-colors interactive-target shadow-[2px_2px_0px_#fff] active:translate-y-[2px] active:shadow-none"
                                 >
                                     {t.btn_watch}
                                 </button>
                             </div>
                        </div>

                         {/* Monitor 3 */}
                         <div className="bg-[#111] border-3 border-white/20 flex flex-col shadow-[5px_5px_0px_#222] group/monitor">
                             <div className="relative aspect-video bg-black border-b-2 border-white/20 overflow-hidden group/screen">
                                 <div className="absolute top-2 left-2 font-mono text-[10px] text-black bg-yellow px-1 border border-white font-bold z-20">CAM_03</div>
                                 <img src={MetaImg} className="w-full h-full object-cover opacity-60 group-hover/screen:opacity-100 transition-opacity grayscale group-hover/screen:grayscale-0" alt="Meta" />
                             </div>
                             <div className="p-4 flex flex-col h-full relative">
                                 <strong className="font-title italic text-yellow text-xl uppercase leading-none mb-2 border-b border-white/20 pb-2">{t.ucb_meta_title}</strong>
                                 <p className="font-mono font-bold text-xs text-teal mb-4 flex-grow uppercase">{t.ucb_meta_role}</p>
                                 <div className="text-[10px] font-mono font-bold text-rose border-t border-white/20 pt-2 mb-3 uppercase">
                                     {t.ucb_meta_credits}
                                 </div>
                                 <button 
                                     onClick={() => onPlayVignette("https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1")}
                                     className="w-full bg-rose text-white hover:bg-yellow hover:text-black font-mono font-bold text-xs py-2 uppercase border border-black transition-colors interactive-target shadow-[2px_2px_0px_#fff] active:translate-y-[2px] active:shadow-none"
                                 >
                                     {t.btn_watch}
                                 </button>
                             </div>
                        </div>
                    </div>
                    
                    <div className="mt-4 pt-2 border-t border-white/20 text-right font-mono text-[10px] text-teal font-bold uppercase tracking-widest">
                        {t.ucb_prod_label}: UNIVERSIDADE CATÓLICA DE BRASÍLIA
                    </div>
                </div>
            </div>

            {/* CHANNEL 03 */}
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Workshop 1 */}
                <div className="bg-white border-3 border-black p-6 shadow-[8px_8px_0px_#d17bac] relative overflow-hidden group transition-all duration-300 hover:scale-[1.02] hover:-rotate-1 hover:shadow-[12px_12px_0px_#d17bac] z-10 hover:z-20">
                    <div className="absolute top-0 right-0 bg-rose text-white font-mono font-bold text-xs px-3 py-1 border-l-3 border-b-3 border-black">2025</div>
                    <div className="border-b-3 border-black pb-4 mb-4">
                        <h3 className="font-title font-black text-3xl uppercase leading-none italic vhs-text">{t.work_ia_title}</h3>
                        <span className="font-mono font-bold text-rose text-sm block mt-2 uppercase">{t.work_ia_role}</span>
                    </div>
                    <p className="font-body text-sm font-medium mb-6 text-justify border-l-4 border-yellow pl-3">{t.work_ia_context}</p>
                    <div className="mt-auto">
                        <div className="text-xs font-mono text-gray-500 mb-4 uppercase">
                             <strong>{t.work_prod_label}</strong> CAJUÍ COLLAB / OLFATO / MATRIZ
                        </div>
                        <a href="#" className="block w-full text-center bg-black text-white font-bold font-mono py-3 uppercase border-2 border-transparent hover:bg-rose hover:text-white hover:border-black transition-all interactive-target">
                            {t.btn_link}
                        </a>
                    </div>
                </div>

                {/* Workshop 2 */}
                <div className="bg-white border-3 border-black p-6 shadow-[8px_8px_0px_#7bc8d1] relative overflow-hidden group transition-all duration-300 hover:scale-[1.02] hover:rotate-1 hover:shadow-[12px_12px_0px_#7bc8d1] z-10 hover:z-20">
                     <div className="absolute top-0 right-0 bg-teal text-black font-mono font-bold text-xs px-3 py-1 border-l-3 border-b-3 border-black">2024</div>
                    <div className="border-b-3 border-black pb-4 mb-4">
                        <h3 className="font-title font-black text-3xl uppercase leading-none italic vhs-text">{t.work_cultura_title}</h3>
                        <span className="font-mono font-bold text-teal text-sm block mt-2 uppercase">{t.work_cultura_role}</span>
                    </div>
                     <p className="font-body text-sm font-medium mb-6 text-justify border-l-4 border-black pl-3">{t.work_cultura_context}</p>
                    <div className="mt-auto">
                         <div className="text-xs font-mono text-gray-500 mb-4 uppercase">
                             <strong>{t.work_prod_label}</strong> INSTITUTO AJA BRASIL
                        </div>
                         <div className="block w-full text-center bg-gray-200 text-gray-500 font-bold font-mono py-3 uppercase border-2 border-transparent cursor-not-allowed">
                            ---
                        </div>
                    </div>
                </div>
            </div>


            {/* CHANNEL 04 */}
            <div className="relative group">
                <div className="absolute top-4 left-4 w-full h-full bg-rose border-3 border-black z-0 transition-transform group-hover:translate-x-[-8px] group-hover:translate-y-[-8px]"></div>
                
                <div className="relative z-10 bg-white border-3 border-black grid grid-cols-1 xl:grid-cols-[2fr_3fr] h-full">
                    <div className="bg-black p-6 flex items-center justify-center relative border-b-3 xl:border-b-0 xl:border-r-3 border-black overflow-hidden">
                        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "10px 10px" }}></div>
                        <div className="relative z-10 transform transition-transform duration-500 hover:rotate-0 rotate-2">
                            <img src={OficinaPoster} alt="Cartaz Oficina" className="w-full max-w-[280px] h-auto border-4 border-white shadow-[10px_10px_0px_#d17bac]"/>
                        </div>
                    </div>

                    <div className="p-8 md:p-10 flex flex-col justify-between relative">
                         <div className="relative z-10">
                            <div className="absolute top-2 right-4 font-mono font-bold text-9xl text-gray-100 -z-10 pointer-events-none select-none">2024</div>
                            
                            <h3 className="font-title font-black italic text-4xl md:text-5xl uppercase text-black mb-4 vhs-text">
                                OFICINA<br/><span className="text-rose bg-black px-2 not-italic">CINEMA FEITO</span>
                            </h3>
                            
                            <div className="flex flex-wrap gap-2 mb-6">
                                <ProjectTag text={t.tags_education} />
                                <ProjectTag text={t.tags_production} invert />
                                <ProjectTag text={t.tags_history} />
                            </div>
                            
                            <div className="text-lg font-medium font-body leading-relaxed text-justify mb-8">{t.oficina_desc}</div>
                        </div>

                         <div className="mt-auto bg-[#f4f4f4] p-4 border-2 border-black shadow-[4px_4px_0px_#000]">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div><span className="block font-mono font-bold uppercase text-rose text-xs mb-1">★ {t.roles_label}</span><span className="font-mono font-bold text-sm tracking-tight leading-tight">{t.oficina_roles}</span></div>
                                <div><span className="block font-mono font-bold uppercase text-teal text-xs mb-1">★ {t.support_label}</span><span className="font-mono font-bold text-sm tracking-tight leading-tight">LPG - São Vicente de Minas - DF</span></div>
                            </div>
                         </div>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;
