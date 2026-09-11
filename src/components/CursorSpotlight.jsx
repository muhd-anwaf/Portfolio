'use client';

import { useEffect, useRef } from 'react';

export default function CursorSpotlight() {
  const layerRef = useRef(null);
  const frameRef = useRef(null);
  const positionRef = useRef({ currentX: 0, currentY: 0, targetX: 0, targetY: 0, initialized: false });

  useEffect(() => {
    const layer = layerRef.current;
    const finePointer = window.matchMedia('(pointer: fine)');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    const stop = () => {
      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current);
        frameRef.current = null;
      }
      layer.classList.remove('is-visible');
      positionRef.current.initialized = false;
    };

    const render = () => {
      const position = positionRef.current;
      position.currentX += (position.targetX - position.currentX) * 0.14;
      position.currentY += (position.targetY - position.currentY) * 0.14;

      layer.style.setProperty('--spotlight-x', `${position.currentX}px`);
      layer.style.setProperty('--spotlight-y', `${position.currentY}px`);

      if (Math.abs(position.targetX - position.currentX) > 0.25 || Math.abs(position.targetY - position.currentY) > 0.25) {
        frameRef.current = window.requestAnimationFrame(render);
      } else {
        frameRef.current = null;
      }
    };

    const handlePointerMove = (event) => {
      if (!finePointer.matches || reducedMotion.matches) return;

      const position = positionRef.current;
      position.targetX = event.clientX;
      position.targetY = event.clientY;

      if (!position.initialized) {
        position.currentX = event.clientX;
        position.currentY = event.clientY;
        position.initialized = true;
        layer.classList.add('is-visible');
      }

      if (!frameRef.current) frameRef.current = window.requestAnimationFrame(render);
    };

    const updatePreference = () => {
      if (!finePointer.matches || reducedMotion.matches) stop();
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    finePointer.addEventListener('change', updatePreference);
    reducedMotion.addEventListener('change', updatePreference);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      finePointer.removeEventListener('change', updatePreference);
      reducedMotion.removeEventListener('change', updatePreference);
      stop();
    };
  }, []);

  return <div ref={layerRef} className="cursor-spotlight" aria-hidden="true" />;
}
