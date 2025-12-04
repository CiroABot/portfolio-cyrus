import React, { useRef, useEffect } from 'react';

interface NoiseProps {
  patternSize?: number;
  patternScaleX?: number;
  patternScaleY?: number;
  patternRefreshInterval?: number;
  patternAlpha?: number;
}

const VHSOverlay: React.FC<NoiseProps> = ({
  patternSize = 200,
  patternScaleX = 1,
  patternScaleY = 1,
  patternRefreshInterval = 2,
  patternAlpha = 9
}) => {
  const grainRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = grainRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let frame = 0;
    let animationId: number;

    const canvasSize = 1024;

    const resize = () => {
      if (!canvas) return;
      canvas.width = canvasSize;
      canvas.height = canvasSize;

      canvas.style.width = '100vw';
      canvas.style.height = '100vh';
    };

    const drawGrain = () => {
      const imageData = ctx.createImageData(canvasSize, canvasSize);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const value = Math.random() * 255;
        data[i] = value;
        data[i + 1] = value;
        data[i + 2] = value;
        data[i + 3] = patternAlpha;
      }

      ctx.putImageData(imageData, 0, 0);
    };

    const loop = () => {
      if (frame % patternRefreshInterval === 0) {
        drawGrain();
      }
      frame++;
      animationId = window.requestAnimationFrame(loop);
    };

    window.addEventListener('resize', resize);
    resize();
    loop();

    return () => {
      window.removeEventListener('resize', resize);
      window.cancelAnimationFrame(animationId);
    };
  }, [patternSize, patternScaleX, patternScaleY, patternRefreshInterval, patternAlpha]);

  return (
    <div 
      className="fixed inset-0 pointer-events-none z-[200000] overflow-hidden"
      style={{
        // Global degradation filter applied to everything BEHIND this overlay
        // This affects Sidebar, Modals, Images, Text, etc.
        backdropFilter: 'blur(0.6px) contrast(1.05) saturate(1.1)'
      }}
    >
      <canvas
        className="absolute top-0 left-0 w-full h-full"
        ref={grainRef}
        style={{
          imageRendering: 'pixelated'
        }}
      />
      
      {/* 
        COLOR GRADE (Subtle Black Lift)
        Washes out pure blacks slightly to enhance VHS feel
      */}
      <div className="absolute inset-0 bg-[#1a1a1a] opacity-[0.03] pointer-events-none mix-blend-screen"></div>
    </div>
  );
};

export default VHSOverlay;