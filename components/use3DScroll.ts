'use client';

import { useEffect } from 'react';

export function use3DScroll() {
  useEffect(() => {
    let ticking = false;

    const update3DScroll = () => {
      const elements = document.querySelectorAll<HTMLElement>('.scroll-3d');
      const windowHeight = window.innerHeight;

      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        
        // Only process elements that are in or near the viewport
        if (rect.top > windowHeight + 200 || rect.bottom < -200) {
          return;
        }

        // Calculate progress from 0 (bottom of screen) to 1 (top of screen)
        const elementCenter = rect.top + rect.height / 2;
        const progress = 1 - (elementCenter / windowHeight);
        
        // Clamp progress between 0 and 1
        const clampedProgress = Math.max(0, Math.min(1, progress));
        
        // Tilted back (-15deg) at bottom, flat (0deg) at center, tilted forward (15deg) at top
        const rotateX = (clampedProgress - 0.5) * 30;
        
        // Scale is 0.95 at edges, 1.0 at center
        const scale = 0.95 + (0.05 * (1 - Math.abs(clampedProgress - 0.5) * 2));
        
        // Subtle Y translation
        const translateY = (clampedProgress - 0.5) * -50;

        el.style.transform = `perspective(1200px) rotateX(${rotateX}deg) translateY(${translateY}px) scale(${scale})`;
      });

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update3DScroll);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    
    // Slight delay for initial calculation to ensure layout is ready
    setTimeout(update3DScroll, 100);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);
}
