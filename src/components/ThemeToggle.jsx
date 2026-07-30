'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon, Monitor } from 'lucide-react';

const themes = ['light', 'dark', 'system'];

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className="flex h-9 w-9 items-center justify-center"
        aria-hidden="true"
      />
    );
  }

  function cycleTheme() {
    const currentIndex = themes.indexOf(theme ?? 'system');
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  }

  const icon =
    theme === 'light' ? (
      <Sun size={20} />
    ) : theme === 'dark' ? (
      <Moon size={20} />
    ) : (
      <Monitor size={20} />
    );

  const label =
    theme === 'system'
      ? `System theme (currently ${resolvedTheme}). Click to switch theme.`
      : `Current theme: ${theme}. Click to switch theme.`;

  return (
    <button
      type="button"
      onClick={cycleTheme}
      className="flex h-9 w-9 items-center justify-center rounded-md text-slate-600 transition-colors hover:text-cyan-600 dark:text-slate-300 dark:hover:text-cyan-400"
      aria-label={label}
      title={`Theme: ${theme}`}
    >
      {icon}
    </button>
  );
}
