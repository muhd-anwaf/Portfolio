'use client';

import { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const updateProgress = () => {
      const maximum = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(maximum > 0 ? (window.scrollY / maximum) * 100 : 0);
    };
    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);
    return () => { window.removeEventListener('scroll', updateProgress); window.removeEventListener('resize', updateProgress); };
  }, []);
  return <div className="scroll-progress" style={{ transform: `scaleX(${progress / 100})` }} aria-hidden="true" />;
}
