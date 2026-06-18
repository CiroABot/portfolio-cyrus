'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import Image from 'next/image';
import { useLanguage } from '../LanguageContext';
import { filmsData } from '../data';
import { FilmData, FilmCategory, FilmHighlight, HighlightType } from '../types';

interface FilmsProps {
  onOpenModal: (film: FilmData) => void;
}

type FilterType = 'all' | FilmCategory;
type SortOption = 'newest' | 'oldest' | 'az' | 'za';

/* Order the category filters appear in. Only the ones actually used by at
   least one film are shown (derived automatically from the data below). */
const CATEGORY_ORDER: FilmCategory[] = ['dir', 'photo', 'script', 'edit', 'assist', 'prod'];

/*
  COLOR PALETTE (PASTEL VARIANTS)
*/
const filterConfig: Record<FilterType, { color: string; labelKey: string }> = {
    all: { color: 'bg-black text-white', labelKey: 'filter_all' },
    dir: { color: 'bg-teal text-black', labelKey: 'filter_dir' },
    photo: { color: 'bg-yellow text-black', labelKey: 'filter_photo' },
    edit: { color: 'bg-rose text-black', labelKey: 'filter_edit' },
    assist: { color: 'bg-navy text-white', labelKey: 'filter_assist' },
    script: { color: 'bg-muted text-white', labelKey: 'filter_script' },
    prod: { color: 'bg-hero text-white', labelKey: 'filter_prod' }
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

    const prodKeywords = ['produ', 'distrib', 'product'];
    if (prodKeywords.some(k => lower.includes(k))) return 'bg-[#c7c9f0] text-black border-black';

    const scriptKeywords = ['roteir', 'screen', 'writ', 'argum'];
    if (scriptKeywords.some(k => lower.includes(k))) return 'bg-[#a5add6] text-black border-black';

    return 'bg-white text-black border-black';
};

// HELPER: split a role string into individual tags (comma / slash / & / "e" / "and").
const splitRoles = (role: string): string[] =>
    role.split(/\s*(?:,|\/|&|\se\s|\sand\s)\s*/i).map((r) => r.trim()).filter(Boolean);

// HELPER: accent- and case-insensitive normaliser for lenient text search.
const normalize = (s: string): string =>
    s.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase();

// COMPONENT: Festival-laurel highlight — award / premiere / selection.
// A real laurel wreath (public/assets/Laurel_Wreath.svg) framing the festival
// name in the centre. Rendered WHITE with a dark outline (the subtitle trick)
// so it stays legible over any photo — grid view AND list view.
const HL_KICKER: Record<HighlightType, 'hl_award' | 'hl_premiere' | 'hl_selection'> = {
    award: 'hl_award',
    premiere: 'hl_premiere',
    selection: 'hl_selection',
};

const LAUREL_OUTLINE =
    '[filter:invert(1)_drop-shadow(0_0_1px_rgba(0,0,0,0.95))_drop-shadow(0_0_1px_rgba(0,0,0,0.95))]';

const LaurelHighlight: React.FC<{ highlight: FilmHighlight; size?: 'sm' | 'md'; t: any }> = ({ highlight, size = 'md', t }) => {
    const sm = size === 'sm';
    const kicker = t[HL_KICKER[highlight.type]];
    return (
        <span
            className={`relative inline-flex shrink-0 items-center justify-center select-none ${sm ? 'w-[120px] h-[66px]' : 'w-[128px] h-[72px]'}`}
            title={`${kicker} — ${highlight.label}`}
        >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src="/assets/Laurel_Wreath.svg"
                alt=""
                aria-hidden="true"
                draggable={false}
                className={`pointer-events-none absolute inset-0 h-full w-full object-contain ${sm ? '' : LAUREL_OUTLINE}`}
            />
            {/* List = solid black, no shadow (crisp on the white rows).
                Grid = white with a dark outline (legible over any photo). */}
            <span
                className={`relative z-10 flex flex-col items-center justify-center text-center font-mono uppercase ${
                    sm
                        ? 'text-black px-[20%] gap-[1px]'
                        : 'text-white [text-shadow:0_0_2px_#000,0_0_3px_#000] px-[22%] gap-[2px]'
                }`}
            >
                <span className={`font-black leading-none ${sm ? 'text-[7px]' : 'text-[7px]'}`}>{kicker}</span>
                <span className={`font-bold leading-[1.05] line-clamp-3 ${sm ? 'text-[8px]' : 'text-[7px] md:text-[8px]'}`}>
                    {highlight.label}
                </span>
            </span>
        </span>
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

    const roleList = splitRoles(film.role);
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
            className={`group interactive-target w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] min-w-[280px] max-w-[460px] bg-white border-3 border-black p-4 pb-6 shadow-pop transition-all duration-300 relative z-50 hover:scale-[1.02] md:hover:scale-105 hover:z-[60] hover:shadow-pop-hover hover:rotate-0 ${index % 2 === 0 ? 'lg:rotate-2' : 'lg:-rotate-1 md:mt-10'}`}
        >
            <div className="w-full aspect-video overflow-hidden border-b-3 border-black mb-4 bg-black relative">
                <Image
                    src={activeImg}
                    alt={film.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover filter md:grayscale md:contrast-125 transition-all duration-300 group-hover:filter-none group-hover:scale-105 group-hover:saturate-150"
                />

                {/* HIGHLIGHT BADGES (award / premiere / selection) — top left */}
                {film.highlights && film.highlights.length > 0 && (
                    <div className="absolute top-2 left-2 z-[30] flex flex-col items-start gap-1.5 max-w-[calc(100%-1rem)] pointer-events-none">
                        {film.highlights.map((h, i) => (
                            <LaurelHighlight key={i} highlight={h} size="md" t={t} />
                        ))}
                    </div>
                )}

                {/* Student Stamp Overlay (MOVED TO CORNER - SUBTLE BUT VISIBLE) */}
                {film.isStudentProject && (
                    <div className="absolute bottom-2 left-2 z-[30] pointer-events-none rotate-[-6deg] max-w-[80%]">
                        <div className="inline-block border-2 border-red-600 bg-white text-red-600 px-2 py-1 font-mono font-bold text-[9px] md:text-[10px] uppercase tracking-widest shadow-[2px_2px_0px_rgba(0,0,0,0.2)]">
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
     const [wasHovered, setWasHovered] = useState(false);
     const roleList = splitRoles(film.role);
     const isPre = film.year === t.status_pre;

     return (
        <div
            onClick={() => onOpenModal(film)}
            onMouseEnter={() => setWasHovered(true)}
            // Enforce height on desktop for uniformity, auto on mobile
            className="group relative w-full border-b-2 border-black bg-white hover:bg-[#f8f8f8] cursor-pointer transition-colors duration-200 overflow-hidden min-h-[90px] md:h-[90px]"
        >
            {/* Background Hover Effect.
                PERFORMANCE: only mounts after the first hover — the list view
                loads ZERO film images upfront (it used to fetch every cover at
                full size via CSS background, ~18 MB for 12 films). The image is
                served small + optimized by next/image, so this scales to any
                number of films. */}
            {wasHovered && (
                <Image
                    src={film.img}
                    alt=""
                    fill
                    sizes="800px"
                    quality={50}
                    className="z-0 object-cover opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none grayscale"
                />
            )}

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
                        
                        {/* HIGHLIGHT BADGES (award / premiere / selection) */}
                        {film.highlights && film.highlights.length > 0 && (
                            <div className="flex flex-wrap items-center gap-1.5 md:ml-1 flex-shrink-0">
                                {film.highlights.map((h, i) => (
                                    <LaurelHighlight key={i} highlight={h} size="sm" t={t} />
                                ))}
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
  const [genreFilter, setGenreFilter] = useState<string>('all');
  const [search, setSearch] = useState('');

  // Resolve the catalogue for the active language (memoised per language).
  const allFilms = useMemo(() => filmsData(lang), [lang]);
  const preLabel = t.status_pre;

  // Distinct years for the dropdown (pre-production sorts to the very top).
  const uniqueYears = useMemo(
    () =>
      Array.from(new Set(allFilms.map((f) => f.year))).sort((a, b) => {
        if (a === preLabel) return -1;
        if (b === preLabel) return 1;
        return parseInt(b) - parseInt(a);
      }),
    [allFilms, preLabel]
  );

  // Genres come from the part of `kind` before the "•" (e.g. "Ficção",
  // "Documentário", "Experimental"). Derived automatically from the catalogue.
  const genres = useMemo(() => {
    const set = new Set<string>();
    allFilms.forEach((f) => {
      f.type
        .split('•')[0]
        .split('/')
        .forEach((tok) => {
          const g = tok.trim();
          if (g) set.add(g);
        });
    });
    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }, [allFilms]);

  // Only show category filters that at least one film actually uses.
  const availableFilters = useMemo(() => {
    const present = new Set<FilmCategory>();
    allFilms.forEach((f) => f.categories.forEach((c) => present.add(c)));
    return CATEGORY_ORDER.filter((c) => present.has(c));
  }, [allFilms]);

  // Filter (category → genre → year → text search) then sort.
  // Memoised; never mutates the source list.
  const processedFilms = useMemo(() => {
    const tokens = normalize(search).split(/\s+/).filter(Boolean);
    const yearValue = (y: string) => (y === preLabel ? 9999 : parseInt(y) || 0);

    const filtered = allFilms.filter((film) => {
      if (activeFilter !== 'all' && !film.categories.includes(activeFilter)) return false;
      if (genreFilter !== 'all' && !film.type.split('•')[0].toLowerCase().includes(genreFilter.toLowerCase())) return false;
      if (yearFilter !== 'all' && film.year !== yearFilter) return false;
      if (tokens.length) {
        // Lenient search: accent-insensitive, across many fields, every word must match.
        const haystack = normalize(
          [
            film.title,
            film.desc,
            film.role,
            film.type,
            film.production ?? '',
            (film.credits ?? []).map((c) => `${c.name} ${c.role}`).join(' '),
            (film.highlights ?? []).map((h) => h.label).join(' '),
          ].join(' ')
        );
        if (!tokens.every((tok) => haystack.includes(tok))) return false;
      }
      return true;
    });

    return filtered.sort((a, b) => {
      switch (sortOption) {
        case 'newest': return yearValue(b.year) - yearValue(a.year);
        case 'oldest': return yearValue(a.year) - yearValue(b.year);
        case 'az': return a.title.localeCompare(b.title);
        case 'za': return b.title.localeCompare(a.title);
        default: return 0;
      }
    });
  }, [allFilms, activeFilter, genreFilter, yearFilter, search, sortOption, preLabel]);

  const anyFilterActive =
    activeFilter !== 'all' || genreFilter !== 'all' || yearFilter !== 'all' || search.trim() !== '';

  const clearFilters = () => {
    setActiveFilter('all');
    setGenreFilter('all');
    setYearFilter('all');
    setSearch('');
  };

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

      <div className={`w-full max-w-[1450px] mx-auto px-5 md:px-10 lg:pr-[200px] xl:pr-[240px] relative z-10 ${isExpanded ? 'block' : 'hidden md:block'}`}>
        <div className="hidden md:block mb-8">
            <h2 className="font-title font-bold text-5xl md:text-8xl text-left relative inline-block uppercase leading-[0.85] vhs-text">
            {t.title_films}
            <span className="block w-full h-2 bg-gradient-to-r from-teal via-rose to-yellow mt-2"></span>
            </h2>
        </div>

        <div className="flex flex-col gap-5 mb-8">

            {/* ROLE / CATEGORY TOOLBAR — own row, scrolls horizontally if it overflows */}
            <div className="w-full">
                <div className="hidden md:flex bg-white border-3 border-black shadow-[6px_6px_0px_#000] w-fit max-w-full overflow-x-auto hide-scrollbar">
                    <FilterButton type="all" />
                    {availableFilters.map((c) => <FilterButton key={c} type={c} />)}
                </div>
                <div className="md:hidden w-full overflow-x-auto pb-2 hide-scrollbar flex items-center pl-1">
                    <FilterButton type="all" isMobile />
                    {availableFilters.map((c) => <FilterButton key={c} type={c} isMobile />)}
                    <div className="w-2 flex-shrink-0"></div>
                </div>
            </div>

            {/* SEARCH + GENRE + SORT + YEAR + CLEAR + RESULTS COUNT
                (z-80 so the open dropdowns sit above the film cards below) */}
            <div className="flex flex-col md:flex-row md:flex-wrap gap-4 md:items-end z-[80]">

                {/* Text search */}
                <div className="w-full md:w-auto md:flex-grow md:max-w-[300px]">
                    <label className="block font-mono font-bold text-[10px] uppercase mb-1 ml-1 text-gray-500">{t.search_label}</label>
                    <div className="relative">
                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder={t.search_placeholder}
                            className="w-full bg-white border-3 border-black pl-4 pr-9 py-3 md:py-2 font-mono font-bold text-sm md:text-base uppercase shadow-[4px_4px_0px_#000] interactive-target placeholder:text-gray-300 placeholder:normal-case focus:outline-none focus:translate-x-[2px] focus:translate-y-[2px] focus:shadow-[2px_2px_0px_#000] transition-all"
                        />
                        {search && (
                            <button
                                onClick={() => setSearch('')}
                                aria-label="Clear search"
                                className="absolute right-2 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center bg-black text-white text-xs font-bold interactive-target hover:bg-rose transition-colors"
                            >
                                ✕
                            </button>
                        )}
                    </div>
                </div>

                <CustomSelect
                    label={t.sort_label}
                    value={sortOption}
                    onChange={(val) => setSortOption(val as SortOption)}
                    widthClass="w-full md:w-[200px]"
                    options={[
                        { value: "newest", label: t.sort_newest },
                        { value: "oldest", label: t.sort_oldest },
                        { value: "az", label: t.sort_az },
                        { value: "za", label: t.sort_za }
                    ]}
                />

                {genres.length > 1 && (
                    <CustomSelect
                        label={t.genre_label}
                        value={genreFilter}
                        onChange={(val) => setGenreFilter(val)}
                        widthClass="w-full md:w-[190px]"
                        options={[
                            { value: "all", label: t.genre_all },
                            ...genres.map((g) => ({ value: g, label: g }))
                        ]}
                    />
                )}

                <CustomSelect
                    label={t.year_label}
                    value={yearFilter}
                    onChange={(val) => setYearFilter(val)}
                    widthClass="w-full md:w-[150px]"
                    options={[
                        { value: "all", label: t.year_all },
                        ...uniqueYears.map(year => ({ value: year, label: year }))
                    ]}
                />

                {/* Clear all filters (only when something is active) */}
                {anyFilterActive && (
                    <button
                        onClick={clearFilters}
                        className="w-full md:w-auto self-stretch md:self-end bg-rose text-white border-3 border-black px-4 py-3 md:py-2 font-mono font-bold text-sm uppercase shadow-[4px_4px_0px_#000] interactive-target active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_#000] transition-all flex items-center justify-center gap-2 whitespace-nowrap"
                    >
                        ✕ {t.clear_filters}
                    </button>
                )}

                {/* Results count */}
                <div className="md:ml-auto self-stretch md:self-end">
                    <span className="block font-mono font-bold text-[10px] uppercase mb-1 mr-1 text-gray-500 md:text-right">{t.results_label}</span>
                    <div className="bg-black text-white border-3 border-black px-4 py-3 md:py-2 font-mono font-bold text-sm uppercase shadow-[4px_4px_0px_#000] text-center whitespace-nowrap">
                        {processedFilms.length} / {allFilms.length}
                    </div>
                </div>
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
             <div className="w-full flex flex-col items-center gap-6 py-20 border-2 border-dashed border-black bg-white shadow-pop-sm">
                 <span className="text-center font-mono text-xl opacity-50 uppercase px-4">{t.no_results}</span>
                 {anyFilterActive && (
                    <button
                        onClick={clearFilters}
                        className="bg-rose text-white border-3 border-black px-6 py-3 font-mono font-bold text-sm uppercase shadow-[4px_4px_0px_#000] interactive-target active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_#000] transition-all flex items-center gap-2"
                    >
                        ✕ {t.clear_filters}
                    </button>
                 )}
             </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Films;
