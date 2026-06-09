'use client';

import { useRef } from 'react';

/* ==========================================================================
   useSwipeNav — robust horizontal "next/previous" gesture for galleries.
   --------------------------------------------------------------------------
   Why a hook (and why it's careful): macOS trackpads fire a *stream* of
   `wheel` events for a single two-finger swipe, plus a long inertia tail. A
   naive "deltaX > N → navigate" fires repeatedly and feels accidental. So we:
     • accumulate deltaX within a gesture and only fire past a deliberate
       THRESHOLD (so casual scrolls don't trigger);
     • lock after firing and only re-arm once events go idle (>IDLE_MS),
       which swallows the inertia tail → exactly one step per swipe;
     • ignore gestures whose vertical delta dominates (you meant to scroll);
     • require a clearly-horizontal touch swipe too.
   Haptics: navigator.vibrate() where supported (Android); macOS/iOS Safari
   have no web haptic API, so callers pair this with a visual pulse instead.
   ========================================================================== */

const THRESHOLD = 90; // accumulated px before a swipe counts
const IDLE_MS = 160; // gap that marks the end of a gesture / inertia
const TOUCH_MIN = 55; // px for a touch swipe

export function useSwipeNav(onSwipe: (dir: -1 | 1) => void, enabled = true) {
  const acc = useRef(0);
  const lastTs = useRef(0);
  const locked = useRef(false);
  const startX = useRef(0);
  const startY = useRef(0);

  const fire = (dir: -1 | 1) => {
    onSwipe(dir);
    try {
      if (typeof navigator !== 'undefined' && 'vibrate' in navigator) navigator.vibrate(12);
    } catch {
      /* ignore */
    }
  };

  const onWheel = (e: React.WheelEvent) => {
    if (!enabled) return;
    const now = Date.now();
    // A pause since the last event means a brand-new gesture → re-arm.
    if (now - lastTs.current > IDLE_MS) {
      acc.current = 0;
      locked.current = false;
    }
    lastTs.current = now;

    // The user is scrolling vertically — don't hijack it.
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      acc.current = 0;
      return;
    }
    if (locked.current) return; // already fired this gesture (eat the inertia)

    acc.current += e.deltaX;
    if (Math.abs(acc.current) >= THRESHOLD) {
      fire(acc.current > 0 ? 1 : -1);
      locked.current = true;
      acc.current = 0;
    }
  };

  const onTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
    startY.current = e.touches[0].clientY;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (!enabled) return;
    const dx = e.changedTouches[0].clientX - startX.current;
    const dy = e.changedTouches[0].clientY - startY.current;
    if (Math.abs(dx) >= TOUCH_MIN && Math.abs(dx) > Math.abs(dy) * 1.4) {
      fire(dx < 0 ? 1 : -1);
    }
  };

  return { onWheel, onTouchStart, onTouchEnd };
}
