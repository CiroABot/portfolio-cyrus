
import React, { useState, useEffect } from 'react';

interface NoiseProps {
  patternAlpha?: number; // 0-255 intensity
}

const VHSOverlay: React.FC<NoiseProps> = ({
  patternAlpha = 15 // Increased slightly as single layer needs to be visible
}) => {
  const [noiseUrl, setNoiseUrl] = useState<string>('');

  useEffect(() => {
    // 1. Generate Noise ONCE (CPU Heavy operation done only on mount)
    const canvas = document.createElement('canvas');
    const size = 256; // Smaller texture size is enough for grain
    canvas.width = size;
    canvas.height = size;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const imageData = ctx.createImageData(size, size);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
      // Random grayscale value
      const value = Math.random() * 255;
      data[i] = value;     // R
      data[i + 1] = value; // G
      data[i + 2] = value; // B
      data[i + 3] = patternAlpha; // Alpha
    }

    ctx.putImageData(imageData, 0, 0);
    
    // 2. Convert to Data URI and save to state
    setNoiseUrl(canvas.toDataURL());
  }, [patternAlpha]);

  return (
    <div 
      className="fixed inset-0 pointer-events-none z-[200000] overflow-hidden select-none"
      style={{
        // Keep the global degradation filter, but ensure it's performant
        // 'will-change: transform' is not needed on the container, only the noise layer
        backdropFilter: 'blur(0.6px) contrast(1.05) saturate(1.1)',
        WebkitBackdropFilter: 'blur(0.6px) contrast(1.05) saturate(1.1)'
      }}
    >
      {/* 
        OPTIMIZED NOISE LAYER
        Instead of redrawing canvas every frame (CPU), 
        we animate a static background image using CSS transforms (GPU).
        We make it larger than the screen (inset: -50%) so when it moves, 
        we don't see the edges.
      */}
      {noiseUrl && (
          <div 
            className="absolute inset-[-50%] w-[200%] h-[200%] animate-noise opacity-60"
            style={{
                backgroundImage: `url(${noiseUrl})`,
                backgroundRepeat: 'repeat',
                willChange: 'transform' // Hints browser to promote to compositing layer
            }}
          />
      )}
      
      {/* 
        COLOR GRADE (Subtle Black Lift)
        Washes out pure blacks slightly to enhance VHS feel
      */}
      <div className="absolute inset-0 bg-[#1a1a1a] opacity-[0.03] mix-blend-screen"></div>
    </div>
  );
};

export default VHSOverlay;
