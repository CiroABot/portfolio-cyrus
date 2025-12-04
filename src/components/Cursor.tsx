
import React, { useEffect, useRef, useState } from 'react';

const Cursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    // Optimization: Use direct DOM manipulation for zero-latency tracking
    const onMouseMove = (e: MouseEvent) => {
      // Only show cursor once the user actually moves the mouse (avoids phantom cursor on pure touch)
      if (!isVisible) setIsVisible(true);
      
      if (cursorRef.current) {
        // Use translate3d for hardware acceleration
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const onMouseDown = () => setIsClicked(true);
    const onMouseUp = () => setIsClicked(false);

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check for any interactive element
      if (
        target.matches('a, button, input, textarea, select, .interactive-target') || 
        target.closest('a, button, input, textarea, select, .interactive-target')
      ) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };

    // Attach listeners to window to catch everything
    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('mouseover', onMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mouseover', onMouseOver);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 z-[999999] pointer-events-none will-change-transform mix-blend-exclusion"
      style={{ 
        // Center the cursor visual around the coordinate
        marginTop: '-16px', 
        marginLeft: '-16px' 
      }} 
    >
      <div className={`relative w-8 h-8 flex items-center justify-center transition-transform duration-150 ease-out ${isActive ? 'rotate-45 scale-110' : 'rotate-0 scale-100'} ${isClicked ? 'scale-90' : ''}`}>
        
        {/* Horizontal Line */}
        <div className={`absolute bg-[#d17bac] h-[3px] shadow-[1px_1px_0px_#000] transition-all duration-200 ${isActive ? 'w-full bg-[#e5e690]' : 'w-4'}`} />
        
        {/* Vertical Line */}
        <div className={`absolute bg-[#d17bac] w-[3px] shadow-[1px_1px_0px_#000] transition-all duration-200 ${isActive ? 'h-full bg-[#e5e690]' : 'h-4'}`} />
        
        {/* Center Target Dot (Visible on Hover) */}
        <div className={`absolute bg-white w-1.5 h-1.5 border border-black transition-opacity duration-200 ${isActive ? 'opacity-100' : 'opacity-0'}`} />

        {/* Click Ripple/Pulse */}
        {isClicked && (
            <div className="absolute inset-0 border-2 border-[#d17bac] animate-ping opacity-50 rounded-full" />
        )}
      </div>
    </div>
  );
};

export default Cursor;
