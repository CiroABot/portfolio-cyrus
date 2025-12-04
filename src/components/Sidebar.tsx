
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../LanguageContext';
import { PROFILE_PIC } from '../data';

interface SidebarProps {
  activeSection: string;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection }) => {
  const { t, lang, toggleLang } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [isOverFooter, setIsOverFooter] = useState(false);

  // Dedicated Scroll Listener for Profile Picture AND Footer Collision
  useEffect(() => {
    const handleScroll = () => {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        
        // 1. Show profile pic if we scrolled past 70% of the viewport height
        if (scrollY > windowHeight * 0.7) {
            setShowProfile(true);
        } else {
            setShowProfile(false);
        }

        // 2. Hide Sidebar if overlapping footer contact links
        const footer = document.getElementById('contact');
        if (footer) {
            const footerRect = footer.getBoundingClientRect();
            // The sidebar is fixed vertically at center (50vh).
            // We want to hide it only when the footer CONTENT (social links) approaches the center of screen.
            // The footer has padding-top of 24 (96px). 
            // If the footer top is well above the fold (e.g. less than 50% of viewport height + offset), hide sidebar.
            // Adjust threshold to allow deeper scroll before hiding.
            
            // If footerRect.top < windowHeight * 0.5, the footer starts covering the bottom half.
            // We want to hide when it moves further up.
            if (footerRect.top < (windowHeight / 2) + 50) {
                setIsOverFooter(true);
            } else {
                setIsOverFooter(false);
            }
        }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger once on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  // Helper to determine dot styling
  const getDotStyle = (section: string) => {
    const isActive = activeSection === section;
    const baseClass = "w-4 h-4 rounded-full border-2 border-black z-10 transition-all duration-300 interactive-target cursor-none";
    
    // Define colors per section
    let activeClass = "";
    let hoverClass = "";

    switch(section) {
        case 'home':
            activeClass = "bg-hero scale-140 border-[3px]";
            hoverClass = "bg-white hover:bg-hero";
            break;
        case 'films':
            activeClass = "bg-rose scale-140 border-[3px]";
            hoverClass = "bg-white hover:bg-rose";
            break;
        case 'projects':
            activeClass = "bg-yellow scale-140 border-[3px]";
            hoverClass = "bg-white hover:bg-yellow";
            break;
        case 'criticism':
             activeClass = "bg-navy scale-140 border-[3px]";
             hoverClass = "bg-white hover:bg-navy";
             break;
        case 'contact':
            activeClass = "bg-teal scale-140 border-[3px]";
            hoverClass = "bg-white hover:bg-teal";
            break;
        default:
            activeClass = "bg-black";
            hoverClass = "bg-white hover:bg-black";
    }

    return `${baseClass} ${isActive ? activeClass : hoverClass} hover:scale-150`;
  };

  return (
    <>
        {/* --- DESKTOP SIDEBAR (3D Exact Match) --- */}
        <div 
            className={`fixed right-5 top-1/2 z-[9900] hidden xl:flex -translate-y-1/2 items-center justify-end group transition-opacity duration-300 ${isOverFooter ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'}`}
        >
            <nav 
                className="flex flex-row items-stretch gap-4 outline-none backface-hidden antialiased will-change-transform transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] [transform:perspective(1200px)_rotateY(-25deg)_rotateZ(-2deg)_translateZ(0)] group-hover:[transform:perspective(1200px)_rotateY(0deg)_rotateZ(0deg)_scale(1.02)]"
                style={{
                    transformStyle: 'preserve-3d',
                    transformOrigin: 'right center'
                }}
            >
                
                {/* Left Column: Photo Block + Menu Buttons Block */}
                <div className="flex flex-col flex-shrink-0 transition-all duration-500 w-min">
                    
                    {/* 
                       PROFILE PICTURE BLOCK 
                    */}
                    <div 
                      className={`overflow-hidden transition-all duration-500 ease-in-out border-black bg-white shadow-[5px_5px_0px_#000] w-0 min-w-full ${
                        !showProfile 
                            ? 'max-h-0 opacity-0 mb-0 border-0 shadow-none' 
                            : 'max-h-[300px] opacity-100 mb-5 border-3'
                      }`}
                    >
                       <img 
                          src={PROFILE_PIC} 
                          alt="Profile" 
                          className="w-full aspect-square object-cover block" 
                       />
                    </div>

                    {/* MENU BUTTONS BLOCK */}
                    <div className="flex flex-col shadow-[5px_5px_0px_#000]">
                        <button 
                        onClick={toggleLang} 
                        className="relative block w-full h-10 bg-white border-3 border-black border-b-0 overflow-hidden interactive-target cursor-none group/lang"
                        >
                        <div className={`absolute top-[3px] left-[3px] w-[calc(50%-3px)] h-[calc(100%-6px)] border-2 border-black rounded-sm z-10 transition-all duration-300 pointer-events-none bg-cover bg-center ${lang === 'en' ? 'left-[50%] bg-blue-900' : 'bg-green-600'}`}
                            style={{ 
                                backgroundImage: lang === 'pt' 
                                ? "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 700 500'%3E%3Cpath fill='%23009c3b' d='M0 0h700v500H0z'/%3E%3Cpath fill='%23ffdf00' d='M350 40L660 250L350 460L40 250z'/%3E%3Ccircle cx='350' cy='250' r='100' fill='%23002776'/%3E%3C/svg%3E\")"
                                : "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 741 390'%3E%3Crect width='741' height='390' fill='%23b22234'/%3E%3Cpath d='M0 30h741v30H0zM0 90h741v30H0zM0 150h741v30H0zM0 210h741v30H0zM0 270h741v30H0zM0 330h741v30H0z' fill='%23fff'/%3E%3Crect width='296.4' height='210' fill='%233c3b6e'/%3E%3C/svg%3E\")"
                                }}
                        ></div>
                        <div className="absolute top-0 left-0 w-full h-full flex z-20 pointer-events-none">
                            <span className="w-1/2 h-full flex items-center justify-center font-bold text-sm text-black drop-shadow-[2px_0_#fff]">PT</span>
                            <span className="w-1/2 h-full flex items-center justify-center font-bold text-sm text-black drop-shadow-[2px_0_#fff]">EN</span>
                        </div>
                        </button>

                        <button onClick={() => scrollTo('home')} className="block py-3 px-6 font-title text-xl italic text-left bg-muted text-white border-3 border-black border-b-0 transition-all hover:bg-white hover:text-black hover:pl-4 hover:translate-x-[-10px] interactive-target whitespace-nowrap cursor-none">{t.menu_home}</button>
                        <button onClick={() => scrollTo('films')} className="block py-3 px-6 font-title text-xl italic text-left bg-rose text-black border-3 border-black border-b-0 transition-all hover:bg-white hover:pl-4 hover:translate-x-[-10px] interactive-target whitespace-nowrap cursor-none">{t.menu_films}</button>
                        <button onClick={() => scrollTo('projects')} className="block py-3 px-6 font-title text-xl italic text-left bg-yellow text-black border-3 border-black border-b-0 transition-all hover:bg-white hover:pl-4 hover:translate-x-[-10px] interactive-target whitespace-nowrap cursor-none">{t.menu_projects}</button>
                        <button onClick={() => scrollTo('criticism')} className="block py-3 px-6 font-title text-xl italic text-left bg-navy text-white border-3 border-black border-b-0 transition-all hover:bg-white hover:text-black hover:pl-4 hover:translate-x-[-10px] interactive-target whitespace-nowrap cursor-none">{t.menu_archive}</button>
                        <button onClick={() => scrollTo('contact')} className="block py-3 px-6 font-title text-xl italic text-left bg-teal text-black border-3 border-black transition-all hover:bg-white hover:pl-4 hover:translate-x-[-10px] interactive-target whitespace-nowrap cursor-none">{t.menu_contact}</button>
                    </div>
                </div>

                {/* Thermometer */}
                <div className="w-[25px] relative flex flex-col items-center justify-between py-4 bg-white border-3 border-black shadow-[5px_5px_0px_#000] flex-shrink-0 select-none">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-full bg-black z-0"></div>
                    {['home', 'films', 'projects', 'criticism', 'contact'].map((section) => (
                    <div 
                        key={section}
                        onClick={() => scrollTo(section)}
                        className={getDotStyle(section)}
                    />
                    ))}
                </div>
            </nav>
        </div>

        {/* --- MOBILE & TABLET MENU (Simple & Brutalist) --- */}
        <div className="xl:hidden">
            {/* Floating Hamburger Button */}
            <button 
                onClick={() => setIsMobileMenuOpen(true)}
                className="fixed bottom-6 right-6 z-[9900] w-16 h-16 md:w-20 md:h-20 bg-white border-3 border-black shadow-pop flex flex-col items-center justify-center gap-1.5 interactive-target active:scale-95 transition-transform"
                aria-label="Open Menu"
            >
                <div className="w-8 md:w-10 h-1 bg-black"></div>
                <div className="w-8 md:w-10 h-1 bg-black"></div>
                <div className="w-8 md:w-10 h-1 bg-black"></div>
            </button>

            {/* Full Screen Overlay */}
            <div className={`fixed inset-0 bg-yellow z-[9950] flex flex-col items-center justify-center transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
                {/* Close Button */}
                <button 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="absolute top-6 right-6 w-14 h-14 border-3 border-black bg-rose text-white text-2xl font-bold flex items-center justify-center shadow-pop-sm interactive-target active:scale-95"
                >
                    X
                </button>

                <nav className="flex flex-col gap-6 text-center">
                    {/* Language Switcher Mobile */}
                    <div className="flex gap-4 justify-center mb-6">
                        <button 
                            onClick={toggleLang} 
                            className={`px-6 py-4 border-3 border-black font-bold text-xl shadow-pop-sm interactive-target ${lang === 'pt' ? 'bg-black text-white' : 'bg-white text-black'}`}
                        >
                            PT
                        </button>
                        <button 
                            onClick={toggleLang} 
                            className={`px-6 py-4 border-3 border-black font-bold text-xl shadow-pop-sm interactive-target ${lang === 'en' ? 'bg-black text-white' : 'bg-white text-black'}`}
                        >
                            EN
                        </button>
                    </div>

                    <button onClick={() => scrollTo('home')} className="font-title text-5xl md:text-6xl font-bold italic uppercase hover:underline decoration-4 underline-offset-4 interactive-target py-2">{t.menu_home}</button>
                    <button onClick={() => scrollTo('films')} className="font-title text-5xl md:text-6xl font-bold italic uppercase hover:underline decoration-4 underline-offset-4 interactive-target py-2">{t.menu_films}</button>
                    <button onClick={() => scrollTo('projects')} className="font-title text-5xl md:text-6xl font-bold italic uppercase hover:underline decoration-4 underline-offset-4 interactive-target py-2">{t.menu_projects}</button>
                    <button onClick={() => scrollTo('criticism')} className="font-title text-5xl md:text-6xl font-bold italic uppercase hover:underline decoration-4 underline-offset-4 interactive-target py-2">{t.menu_archive}</button>
                    <button onClick={() => scrollTo('contact')} className="font-title text-5xl md:text-6xl font-bold italic uppercase hover:underline decoration-4 underline-offset-4 interactive-target py-2">{t.menu_contact}</button>
                </nav>
            </div>
        </div>
    </>
  );
};

export default Sidebar;
 