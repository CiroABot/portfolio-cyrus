'use client';

import React, { useState, useEffect } from 'react';

interface NoiseProps {
  patternAlpha?: number; // 0-255 intensity
}

/*
  VHS GRAIN OVERLAY — performance-tuned.

  What was removed (it was the single heaviest effect on the site):
  - `backdrop-filter: blur(...)` on this fixed full-screen layer forced the GPU
    to re-blur the ENTIRE viewport on every frame, especially during scroll.
  - A `mix-blend-screen` full-screen tint layer (invisible at 3% opacity, but
    it added a blend pass over the whole page every frame).

  What stays — the analog feel, now compositor-only (cheap):
  - The SAME fine 256px canvas-generated grain texture (not chunky), softened
    with a tiny blur applied to the grain layer itself (cached by the GPU,
    since the layer content never changes — only its transform moves).
  - The layer is viewport+96px instead of 4× the viewport, jittered by pixel
    offsets ≤96px. Transform-only animation = no repaint, no re-filter.
*/
const VHSOverlay: React.FC<NoiseProps> = ({ patternAlpha = 15 }) => {
  const [noiseUrl, setNoiseUrl] = useState<string>('');

  useEffect(() => {
    // Generate the grain ONCE (CPU work only on mount).
    const canvas = document.createElement('canvas');
    const size = 256; // small tile = fine grain when repeated
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
    setNoiseUrl(canvas.toDataURL());
  }, [patternAlpha]);

  if (!noiseUrl) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[200000] overflow-hidden select-none">
      <div
        className="absolute inset-[-96px] animate-noise opacity-60"
        style={{
          backgroundImage: `url(${noiseUrl})`,
          backgroundRepeat: 'repeat',
          // Soften the grain itself (the filter output is cached by the GPU —
          // the layer's content is static; only its transform animates).
          filter: 'blur(0.4px)',
          willChange: 'transform',
        }}
      />
    </div>
  );
};

export default VHSOverlay;
