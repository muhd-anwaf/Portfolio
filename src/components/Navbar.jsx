'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import ANLogo from './ANLogo';

const navLinks = [
  { name: 'Work', href: '#work' }, { name: 'About', href: '#about' }, { name: 'Experience', href: '#experience' }, { name: 'Stack', href: '#stack' }, { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll(); window.addEventListener('scroll', onScroll, { passive: true });
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) setActiveSection(`#${entry.target.id}`); }), { rootMargin: '-35% 0px -55% 0px' });
    navLinks.forEach(({ href }) => { const section = document.querySelector(href); if (section) observer.observe(section); });
    return () => { window.removeEventListener('scroll', onScroll); observer.disconnect(); };
  }, []);
  useEffect(() => {
    document.body.classList.toggle('menu-open', isOpen);
    const closeOnEscape = (event) => { if (event.key === 'Escape') setIsOpen(false); };
    window.addEventListener('keydown', closeOnEscape);
    return () => { document.body.classList.remove('menu-open'); window.removeEventListener('keydown', closeOnEscape); };
  }, [isOpen]);
  const closeMenu = () => setIsOpen(false);
  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <nav className="site-container nav-inner" aria-label="Primary navigation">
        <Link href="/" className="brand" aria-label="Muhammed Anwaf home"><span className="brand-mark"><ANLogo /></span><span className="brand-name">ANWAF<span>.</span></span></Link>
        <div className="nav-desktop">
          <ul>{navLinks.map((link, index) => <li key={link.name}><a href={link.href} className={activeSection === link.href ? 'active' : ''}><span>0{index + 1}</span>{link.name}</a></li>)}</ul>
          <a href="/resume.pdf" target="_blank" rel="noreferrer" className="resume-link">Resume ↗</a>
        </div>
        <button className="menu-toggle" type="button" onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen} aria-controls="mobile-navigation" aria-label={isOpen ? 'Close navigation' : 'Open navigation'}>{isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}</button>
      </nav>
      <div id="mobile-navigation" className={`mobile-menu ${isOpen ? 'mobile-menu-open' : ''}`} aria-hidden={!isOpen}>
        <div className="site-container"><p>navigate.to</p>{navLinks.map((link, index) => <a key={link.name} href={link.href} onClick={closeMenu}><span>0{index + 1}</span>{link.name}</a>)}<a href="/resume.pdf" target="_blank" rel="noreferrer" onClick={closeMenu} className="mobile-resume">Resume ↗</a></div>
      </div>
    </header>
  );
}
