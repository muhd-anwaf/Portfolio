'use client';
import ThemeToggle from './ThemeToggle';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Image from "next/image";

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
<Link
  href="/"
  className="flex items-center gap-3"
  aria-label="Go to homepage"
>
  <Image
    src="/logo.png"
    alt="Muhammed Anwaf logo"
    width={44}
    height={44}
    className="h-11 w-11 object-contain"
    priority
  />

  <span className="hidden text-xl font-bold text-slate-900 dark:text-white sm:block">
    Muhammed Anwaf
    <span className="text-cyan-600 dark:text-cyan-400">.</span>
  </span>
</Link>

        <div className="flex items-center gap-6">
          <ul className="hidden gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-sm text-muted transition-colors hover:text-cyan-600 dark:hover:text-cyan-400"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <ThemeToggle />

          <button
            type="button"
            onClick={() => setIsOpen((previous) => !previous)}
            className="text-muted md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <ul className="flex flex-col gap-4 border-t border-border px-6 py-4 md:hidden">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-sm text-muted transition-colors hover:text-cyan-600 dark:hover:text-cyan-400"
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
