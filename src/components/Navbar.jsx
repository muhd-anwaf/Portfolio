'use client';
import ThemeToggle from './ThemeToggle';
import {useState} from 'react';
import Link from 'next/link';
import {Menu,X} from 'lucide-react';

const navLinks = [
    {name:'About',href:'#about'},
    {name:'Projects',href:'#projects'},
    {name:'Skills',href:'#skills'},
    {name:'Contact',href:'#contact'},

];

export default function Navbar(){
    const [isOpen,setIsOpen] = useState(false);

    return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/80">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-white">
          Muhammed Anwaf<span className="text-cyan-400">.</span>
        </Link>

        {/* Right side: desktop links + toggle */}
        <div className="flex items-center gap-6">
        <ul className="hidden gap-8 md:flex">
            {navLinks.map((link) => (
            <li key={link.name}>
                <a href={link.href} className="text-sm text-slate-600 transition-colors hover:text-cyan-600 dark:text-slate-300 dark:hover:text-cyan-400">
                {link.name}
                </a>
            </li>
            ))}
        </ul>

            <ThemeToggle />

        <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-600 dark:text-slate-300 md:hidden"
            aria-label="Toggle menu"
        >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        </div>

        {/* Mobile hamburger button */}
        <button
          type="button"
          onClick={() => setIsOpen((previous) => !previous)}
          className="text-slate-300 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {isOpen && (
        <ul className="flex flex-col gap-4 border-t border-slate-800 px-6 py-4 md:hidden">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-sm text-slate-300 hover:text-cyan-400"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}