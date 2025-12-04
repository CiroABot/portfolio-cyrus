
import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../LanguageContext';
import { filmsData } from '../data';
import { FilmData } from '../types';

interface FilmsProps {
  onOpenModal: (film: FilmData) => void;
}

type FilterType = 'all' | 'dir' | 'photo' | 'edit' | 'assist' | 'script';
type SortOption = 'newest' | 'oldest' | 'az' | 'za';

/* 
  COLOR PALETTE (PASTEL VARIANTS)
*/
const filterConfig: Record<FilterType, { color: string; labelKey: string }> = {
    all: { color: 'bg-black text-white', labelKey: 'filter_all' },
    dir: { color: 'bg-teal text-black', labelKey: 'filter_dir' }, 
    photo: { color: 'bg-yellow text-black', labelKey: 'filter_photo' },
    edit: { color: 'bg-rose text-black', labelKey: 'filter_edit' },
    assist: { color: 'bg-navy text-white', labelKey: 'filter_assist' },
    script: { color: 'bg-muted text-white', labelKey: 'filter_script' }
};

// HELPER: Match colors with Pastel Variants for Tags
const getRoleTagColor = (roleName: string): string => {
    const lower = roleName.toLowerCase();
    
    const assistKeywords = ['1º', '2º', '1st', '2nd', '3rd', '3º', 'assist', 'ad', 'ac', 'assistant', 'assistente'];
    if (assistKeywords.some(k => lower.includes(k))) return 'bg-[#dcd0ff] text-black border-black';

    const dirKeywords = ['dir', 'realiz', 'cineasta', 'filmmaker'];
    if (dirKeywords.some(k => lower.includes(k)) && !lower.includes('photo') && !lower.includes('foto')) return 'bg-[#b2e3e8] text-black border-black';

    const photoKeywords = ['foto', 'photo', 'dop', 'cinematog', 'cam', 'câmera', 'camera'];
    if (photoKeywords.some(k => lower.includes(k))) return 'bg-[#f2f3c0] text-black border-black';

    const postKeywords = ['edit', 'mont', 'vfx', 'color', 'finaliz', 'post', 'pós'];
    if (postKeywords.some(k => lower.includes(k))) return 'bg-[#e8b2d2] text-black border-black';

    const scriptKeywords = ['roteir', 'screen', 'writ', 'argum'];
    if (scriptKeywords.some(k => lower.includes(k))) return 'bg-[#a5add6] text-black border-black';

    return 'bg-white text-black border-black';
};

// HELPER: Generate Rosette/Seal SVG Path
const getRosettePath = (cx: number, cy: number, outerRadius: number, innerRadius: number, points: number) => {
    let path = "";
    const angleStep = (Math.PI * 2) / points;

    for (let i = 0; i < points; i++) {
        const angle = i * angleStep;
        const nextAngle = (i + 1) * angleStep;
        
        // Point on outer circle
        const x1 = cx + Math.cos(angle) * outerRadius;
        const y1 = cy + Math.sin(angle) * outerRadius;

        // Point on inner circle (the valley)
        const midAngle = angle + (angleStep / 2);
        const x2 = cx + Math.cos(midAngle) * innerRadius;
        const y2 = cy + Math.sin(midAngle) * innerRadius;

        if (i === 0) {
            path += `M ${x1} ${y1}`;
        } else {
            path += ` L ${x1} ${y1}`;
        }
        path += ` L ${x2} ${y2}`;
    }
    path += " Z";
    return path;
};

// COMPONENT: Sticker for Awards (Redesigned - Left Side, Rosette)
const AwardSticker: React.FC<{ text: string; style?: 'circle' | 'star' | 'square' }> = ({ text, style = 'star' }) => {
    
    // 1. CIRCLE STYLE (Alternative)
    if (style === 'circle') {
        return (
            <div className="absolute top-[-10px] left-[-10px] z-[70] w-[100px] h-[100px] flex items-center justify-center pointer-events-none group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full rounded-full bg-teal border-2 border-black shadow-[2px_2px_0px_rgba(0,0,0,1)] flex items-center justify-center p-4 text-center -rotate-12">
                    <span className="font-mono font-bold text-[9px] leading-tight uppercase text-black break-words w-full">
                        {text}
                    </span>
                </div>
            </div>
        );
    }

    // 2. SQUARE STYLE (Alternative)
    if (style === 'square') {
        return (
            <div className="absolute top-[-5px] left-[-5px] z-[70] w-[100px] h-auto pointer-events-none group-hover:scale-105 transition-transform duration-300">
                <div className="bg-white border-2 border-black shadow-[3px_3px_0px_rgba(0,0,0,1)] p-2 text-center -rotate-3 transform origin-top-left">
                    <div className="border border-black p-1">
                         <span className="block font-mono font-bold text-[9px] leading-tight uppercase text-black">
                            {text}
                        </span>
                    </div>
                    {/* Fake Tape */}
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-4 bg-yellow/80 border border-black/20 rotate-1"></div>
                </div>
            </div>
        );
    }
    
    // 3. ROSETTE / SEAL STYLE (Default 'star')
    return (
        <div className="absolute top-[-12px] left-[-12px] z-[70] w-[110px] h-[110px] pointer-events-none group-hover:scale-105 transition-transform duration-300 drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
             <div className="relative w-full h-full flex items-center justify-center">
                {/* 30-point Rosette Seal */}
                <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full fill-yellow stroke-black stroke-[1.5px]">
                    <path d={getRosettePath(50, 50, 48, 42, 30)} />
                    {/* Inner circle for decoration */}
                    <circle cx="50" cy="50" r="38" className="fill-none stroke-black stroke-[0.5px] opacity-30" />
                </svg>
                
                {/* Text Container with Safe Padding */}
                <div className="relative z-10 w-full h-full flex items-center justify-center p-6 text-center transform -rotate-12">
                    <span className="font-mono font-bold text-[9px] leading-[1.1] uppercase text-black line-clamp-4 overflow-hidden text-ellipsis w-full">
                        {text}
                    </span>
                </div>
             </div>
        </div>
    );
};

// COMPONENT: Custom Animated Dropdown
const CustomSelect: React.FC<{
    label: string;
    value: string;
    options: { value: string; label: string }[];
    onChange: (val: string) => void;
    widthClass?: string;
}> = ({ label, value, options, onChange, widthClass = "w-full md:w-[220px]" }) => {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const currentLabel = options.find(o => o.value === value)?.label || value;

    // SCROLL FIX: Stop propagation of wheel event
    const handleWheel = (e: React.WheelEvent) => {
        e.stopPropagation();
    };

    return (
        <div className="w-full md:w-auto" ref={containerRef}>
            <label className="block font-mono font-bold text-[10px] uppercase mb-1 ml-1 text-gray-500">{label}</label>
            <div className="relative">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={`${widthClass} bg-white border-3 border-black px-4 py-3 md:py-2 font-mono font-bold text-sm md:text-base uppercase shadow-[4px_4px_0px_#000] interactive-target text-left flex justify-between items-center active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_#000] transition-all relative z-20 w-full`}
                >
                    <span className="truncate mr-2">{currentLabel}</span>
                    <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>▼</span>
                </button>
                <div 
                    className={`
                        absolute top-full left-0 w-full bg-white border-3 border-black border-t-0 shadow-[4px_4px_0px_#000] z-[100] 
                        transition-all duration-300 ease-out origin-top
                        ${isOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'}
                    `}
                    onWheel={handleWheel} // 1. Stop background scroll
                >
                    <ul 
                        className="max-h-[300px] overflow-y-auto custom-scrollbar overscroll-contain" // 2. Contain scroll within element
                    >
                        {options.map((option) => (
                            <li key={option.value}>
                                <button
                                    onClick={() => {
                                        onChange(option.value);
                                        setIsOpen(false);
                                    }}
                                    className={`w-full text-left px-4 py-4 md:py-3 font-mono text-xs md:text-sm uppercase hover:bg-yellow hover:text-black transition-colors border-b border-gray-100 last:border-0 ${option.value === value ? 'bg-black text-white' : 'text-black'}`}
                                >
                                    {option.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

// COMPONENT: Film Card (Grid View)
const FilmCard: React.FC<{ film: FilmData; index: number; onOpenModal: (f: FilmData) => void; t: any }> = ({ film, index, onOpenModal, t }) => {
    const [activeImg, setActiveImg] = useState(film.img);
    const [isHovered, setIsHovered] = useState(false);
    const intervalRef = useRef<number | null>(null);
    const stillIndex = useRef(0);

    const roleList = film.role.split(/[,/&]+/).map(r => r.trim());
    const isPre = film.year === t.status_pre;
    const hasStills = film.stills && film.stills.length > 0;

    useEffect(() => {
        if (isHovered && hasStills) {
            intervalRef.current = window.setInterval(() => {
                if (film.stills) {
                    stillIndex.current = (stillIndex.current + 1) % film.stills.length;
                    setActiveImg(film.stills[stillIndex.current]);
                }
            }, 600);
        } else {
            if (intervalRef.current) clearInterval(intervalRef.current);
            setActiveImg(film.img);
            stillIndex.current = 0;
        }
        return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
    }, [isHovered, film.stills, film.img, hasStills]);

    return (
        <article 
            onClick={() => onOpenModal(film)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`group interactive-target w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.33%-25px)] xl:w-[calc(25%-25px)] min-w-[250px] max-w-[400px] bg-white border-3 border-black p-4 pb-8 shadow-pop transition-all duration-300 relative z-50 hover:scale-[1.02] md:hover:scale-105 hover:z-[60] hover:shadow-pop-hover hover:rotate-0 ${index % 2 === 0 ? 'lg:rotate-2' : 'lg:-rotate-1 md:mt-10'}`}
        >
             {/* AWARD STICKER - Positioned Top Left */}
             {film.award && (
                <AwardSticker text={film.award} style={film.stickerStyle || 'star'} />
             )}

            <div className="w-full h-[250px] overflow-hidden border-b-3 border-black mb-4 bg-black relative">
                <img 
                    src={activeImg} 
                    alt={film.title} 
                    className="w-full h-full object-cover filter md:grayscale md:contrast-125 transition-all duration-300 group-hover:filter-none group-hover:scale-105 group-hover:saturate-150" 
                />

                {/* Student Stamp Overlay (MOVED TO CORNER - SUBTLE BUT VISIBLE) */}
                {film.isStudentProject && (
                    <div className="absolute bottom-2 left-2 z-[30] pointer-events-none rotate-[-6deg] max-w-[80%]">
                        <div className="inline-block border-2 border-red-600 bg-white/95 text-red-600 px-2 py-1 font-mono font-bold text-[9px] md:text-[10px] uppercase tracking-widest shadow-[2px_2px_0px_rgba(0,0,0,0.2)] backdrop-blur-sm">
                            {t.student_stamp}
                        </div>
                    </div>
                )}
                
                <div className="absolute top-0 right-0 flex flex-col items-end p-2 gap-1 z-[20]">
                    <span className={`border-2 border-black px-2 py-1 font-bold text-[10px] md:text-xs shadow-[2px_2px_0px_#000] w-max uppercase ${isPre ? 'bg-black text-white' : 'bg-white text-black'}`}>
                        {film.year}
                    </span>
                    {roleList.map((roleName, i) => (
                        <span key={i} className={`border-2 px-2 py-1 font-bold text-[10px] md:text-xs shadow-[2px_2px_0px_#000] w-max uppercase ${getRoleTagColor(roleName)}`}>
                            {roleName}
                        </span>
                    ))}
                </div>
            </div>

            <div className="film-info">
                <h3 className="font-title font-bold text-2xl md:text-3xl leading-[1.1] mb-2 uppercase text-black">
                    {film.title}
                </h3>
                <p className="font-medium text-sm text-gray-700 uppercase m-0">{film.type}</p>
            </div>
        </article>
    );
};

// RENDER: Compact View Item (Table View - Uniform Height)
const CompactFilmItem: React.FC<{ film: FilmData; index: number; onOpenModal: (f: FilmData) => void }> = ({ film, index, onOpenModal }) => {
     const { t } = useLanguage();
     const roleList = film.role.split(/[,/&]+/).map(r => r.trim());
     const isPre = film.year === t.status_pre; 

     return (
        <div 
            onClick={() => onOpenModal(film)}
            // Enforce height on desktop for uniformity, auto on mobile
            className="group relative w-full border-b-2 border-black bg-white hover:bg-[#f8f8f8] cursor-pointer transition-colors duration-200 overflow-hidden min-h-[90px] md:h-[90px]"
        >
            {/* Background Hover Effect */}
            <div 
                className="absolute inset-0 z-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none grayscale bg-cover bg-center"
                style={{ backgroundImage: `url(${film.img})` }}
            />
            <div className="absolute inset-0 bg-transparent group-hover:bg-[url('https://media.giphy.com/media/oEI9uBYSzLpBK/giphy.gif')] opacity-0 group-hover:opacity-5 mix-blend-overlay pointer-events-none z-0"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-stretch h-full">
                
                {/* Year Column - Fixed Width */}
                <div className={`w-full md:w-[100px] shrink-0 bg-black text-white flex items-center justify-center p-2 font-mono font-bold text-xs md:border-r-2 md:border-black ${isPre ? 'px-2 text-center text-[10px]' : ''}`}>
                    {film.year}
                </div>

                {/* Info Column - Grows */}
                <div className="flex-grow py-2 px-4 flex flex-col justify-center gap-1 md:w-[45%]">
                    {/* 
                        FLEX CONTAINER for Title + Stamp + Award 
                        Using flex-wrap on mobile, no-wrap on desktop for alignment
                    */}
                    <div className="flex flex-col md:flex-row md:items-center gap-2 overflow-hidden w-full">
                        
                        {/* Title & Student Stamp Wrapper */}
                        <div className="flex items-center gap-2 min-w-0">
                            {/* Truncate Title on Desktop to keep height consistent */}
                            <h3 className="font-title font-bold text-xl md:text-2xl uppercase italic leading-none relative w-fit md:truncate max-w-full md:max-w-[350px]" title={film.title}>
                                {film.title}
                            </h3>
                            
                            {/* STUDENT STAMP - MOVED OUTSIDE H3 so it's not truncated */}
                            {film.isStudentProject && (
                                <span className="flex-shrink-0 inline-block text-[9px] font-mono border border-red-600 text-red-600 px-1 py-0.5 rotate-[-3deg] opacity-80 whitespace-nowrap bg-white/50">
                                    {t.student_stamp}
                                </span>
                            )}
                        </div>
                        
                        {/* AWARD STAMP (Compact Version) */}
                        {film.award && (
                            <div className="hidden md:inline-flex flex-shrink-0 items-center gap-1 border border-yellow-600 bg-yellow/10 px-2 py-0.5 rounded-sm shadow-sm md:ml-1">
                                <span className="text-yellow-600 text-sm leading-none">★</span>
                                <span className="font-mono font-bold text-[9px] text-yellow-800 uppercase tracking-tight truncate max-w-[150px]">
                                    {film.award}
                                </span>
                            </div>
                        )}
                    </div>
                    <p className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-gray-600 truncate">{film.type}</p>
                </div>

                {/* Roles Column - Fixed Width & No Wrap on Desktop to maintain height */}
                <div className="p-3 md:p-4 flex flex-wrap md:flex-nowrap items-center gap-2 justify-start md:justify-end md:w-[35%] overflow-hidden relative">
                    {roleList.map((roleName, i) => (
                        <span key={i} className={`border px-1.5 py-0.5 font-bold text-[9px] md:text-[10px] uppercase shadow-[2px_2px_0px_#000] whitespace-nowrap flex-shrink-0 ${getRoleTagColor(roleName)}`}>
                            {roleName}
                        </span>
                    ))}
                    {/* Fade out effect if tags overflow on desktop */}
                    <div className="hidden md:block absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
                </div>
            </div>
        </div>
     );
};

const Films: React.FC<FilmsProps> = ({ onOpenModal }) => {
  const { t, lang } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [isExpanded, setIsExpanded] = useState(false);
  
  const [sortOption, setSortOption] = useState<SortOption>('newest');
  const [yearFilter, setYearFilter] = useState<string>('all');

  const allFilms = filmsData(lang);

  const uniqueYears = Array.from(new Set(allFilms.map(f => f.year))).sort((a, b) => {
      if (a === t.status_pre) return -1;
      if (b === t.status_pre) return 1;
      return parseInt(b) - parseInt(a);
  });
  
  let processedFilms = allFilms.filter(film => {
      if (activeFilter === 'all') return true;

      const roles = film.role.toLowerCase().split(/[,/&]+/).map(r => r.trim());
      
      const checkSegment = (segment: string, type: FilterType): boolean => {
          const isPhoto = segment.includes('foto') || segment.includes('photo') || segment.includes('dop') || segment.includes('cinematography');
          const isAssist = ['assist', 'ad', 'ac', '1º', '2º', '1st', '2nd'].some(k => segment.includes(k));
          const isScript = segment.includes('roteir') || segment.includes('screen') || segment.includes('writ');
          const isDir = (segment.includes('dir') || segment.includes('realiza')) && !isPhoto && !isAssist;
          const isEdit = segment.includes('edit') || segment.includes('montag') || segment.includes('vfx') || segment.includes('color') || segment.includes('finaliz');

          switch(type) {
              case 'dir': return isDir;
              case 'photo': return isPhoto;
              case 'edit': return isEdit;
              case 'assist': return isAssist;
              case 'script': return isScript;
              default: return false;
          }
      };
      return roles.some(roleSegment => checkSegment(roleSegment, activeFilter));
  });

  if (yearFilter !== 'all') {
      processedFilms = processedFilms.filter(film => film.year === yearFilter);
  }

  processedFilms.sort((a, b) => {
      const getYearValue = (yearStr: string) => {
          if (yearStr === t.status_pre) return 9999; 
          return parseInt(yearStr) || 0;
      };
      const yearA = getYearValue(a.year);
      const yearB = getYearValue(b.year);

      switch (sortOption) {
          case 'newest': return yearB - yearA;
          case 'oldest': return yearA - yearB;
          case 'az': return a.title.localeCompare(b.title);
          case 'za': return b.title.localeCompare(a.title);
          default: return 0;
      }
  });

  const FilterButton: React.FC<{ type: FilterType, isMobile?: boolean }> = ({ type, isMobile = false }) => {
      const isActive = activeFilter === type;
      const config = filterConfig[type];
      const label = t[config.labelKey as keyof typeof t]; 
      return (
        <button 
            onClick={() => setActiveFilter(type)}
            className={`
                group relative px-4 py-3 
                font-mono font-bold text-xs md:text-sm uppercase tracking-tight
                transition-all duration-150 interactive-target
                flex items-center gap-2 border-r-2 last:border-r-0 border-black whitespace-nowrap flex-shrink-0
                ${isMobile ? 'border-2 border-black rounded-full mr-2' : ''}
                ${isActive 
                    ? `${config.color} ${isMobile ? 'shadow-pop-sm' : ''}` 
                    : `bg-white text-gray-500 hover:bg-gray-100 hover:text-black`
                }
            `}
        >
            <span className={`block w-2 h-2 md:w-3 md:h-3 border-2 border-black ${type === 'all' ? 'rounded-none' : 'rounded-full'} ${isActive ? 'bg-black' : 'bg-transparent'}`}></span>
            <span>{label}</span>
        </button>
      );
  };

  return (
    <section 
        id="films" 
        className={`relative bg-[#f4f4f4] z-30 transition-all pt-20 md:pt-32 ${isExpanded ? 'py-10' : 'py-0'} md:min-h-screen md:py-20`}
    >
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none" style={{ backgroundImage: "linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000), linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000)", backgroundSize: "20px 20px", backgroundPosition: "0 0, 10px 10px" }}></div>
      
      <div className="md:hidden sticky top-0 z-50 bg-white border-b-3 border-black">
          <button onClick={() => setIsExpanded(!isExpanded)} className="w-full flex items-center justify-between p-6 bg-white active:bg-gray-100 transition-colors">
              <h2 className="font-title font-bold text-4xl uppercase italic leading-none">{t.title_films}</h2>
              <div className="w-10 h-10 border-2 border-black flex items-center justify-center font-bold text-xl bg-black text-white">{isExpanded ? '−' : '+'}</div>
          </button>
      </div>

      <div className={`w-full max-w-[1450px] mx-auto px-5 md:px-10 relative z-10 ${isExpanded ? 'block' : 'hidden md:block'}`}>
        <div className="hidden md:block mb-8">
            <h2 className="font-title font-bold text-5xl md:text-8xl text-left relative inline-block uppercase leading-[0.85] vhs-text">
            {t.title_films}
            <span className="block w-full h-2 bg-gradient-to-r from-teal via-rose to-yellow mt-2"></span>
            </h2>
        </div>

        <div className="flex flex-col xl:flex-row gap-6 mb-8 xl:items-end">
            <div className="w-full md:w-fit order-2 xl:order-1">
                <div className="hidden md:flex bg-white border-3 border-black shadow-[6px_6px_0px_#000] flex-wrap max-w-full w-fit overflow-hidden">
                    <FilterButton type="all" />
                    <FilterButton type="dir" />
                    <FilterButton type="photo" />
                    <FilterButton type="script" />
                    <FilterButton type="edit" />
                    <FilterButton type="assist" />
                </div>
                <div className="md:hidden w-full overflow-x-auto pb-2 hide-scrollbar flex items-center pl-1">
                    <FilterButton type="all" isMobile />
                    <FilterButton type="dir" isMobile />
                    <FilterButton type="photo" isMobile />
                    <FilterButton type="script" isMobile />
                    <FilterButton type="edit" isMobile />
                    <FilterButton type="assist" isMobile />
                    <div className="w-2 flex-shrink-0"></div>
                </div>
            </div>

            {/* 
                FIXED Z-INDEX ISSUE: 
                Increased z-index to 80 on the filter container. 
                FilmCards have z-50 (z-60 on hover), so this container (and its dropdowns) 
                will now sit comfortably ON TOP of the cards. 
            */}
            <div className="w-full xl:w-auto flex flex-col md:flex-row gap-4 order-1 xl:order-2 z-[80]">
                 <CustomSelect 
                    label={t.sort_label}
                    value={sortOption}
                    onChange={(val) => setSortOption(val as SortOption)}
                    options={[
                        { value: "newest", label: t.sort_newest },
                        { value: "oldest", label: t.sort_oldest },
                        { value: "az", label: t.sort_az },
                        { value: "za", label: t.sort_za }
                    ]}
                 />
                 <CustomSelect 
                    label={t.year_label}
                    value={yearFilter}
                    onChange={(val) => setYearFilter(val)}
                    widthClass="w-full md:w-[160px]"
                    options={[
                        { value: "all", label: t.year_all },
                        ...uniqueYears.map(year => ({ value: year, label: year }))
                    ]}
                 />
            </div>
        </div>

        <div className="min-h-[500px] transition-all duration-300">
          {activeFilter === 'all' ? (
              <div className="border-t-3 border-black shadow-[8px_8px_0px_rgba(0,0,0,0.1)] bg-white animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="border-x-3 border-b-3 border-black">
                    {processedFilms.map((film, index) => (
                        <CompactFilmItem key={film.id} film={film} index={index} onOpenModal={onOpenModal} />
                    ))}
                  </div>
              </div>
          ) : (
          <div className="flex flex-wrap justify-center gap-6 md:gap-x-8 md:gap-y-12 animate-in zoom-in-95 duration-500">
            {processedFilms.map((film, index) => (
                <FilmCard key={film.id} film={film} index={index} onOpenModal={onOpenModal} t={t} />
            ))}
          </div>
          )}

          {processedFilms.length === 0 && (
             <div className="w-full text-center py-20 font-mono text-xl opacity-50 uppercase border-2 border-dashed border-black bg-white shadow-pop-sm">
                 [ NO SIGNAL DETECTED FOR THIS FREQUENCY ]
             </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Films;
