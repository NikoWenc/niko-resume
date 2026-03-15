import React from 'react';
import { navLinks } from '../constants';
import useDarkMode from '../hooks/useDarkMode';

const Navbar = () => {
  const [isDark, toggleTheme] = useDarkMode();

  return (
    <nav className="glass-nav sticky top-0 z-50 w-full border-b border-outline-variant/30 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-headline text-xl font-extrabold tracking-tight text-primary uppercase">Portfolio</span>
        </div>
        
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="font-label text-sm font-medium tracking-wide text-on-surface hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="p-2 hover:bg-surface-container-low rounded-full transition-colors group"
            aria-label="Toggle theme"
          >
            <span className="material-symbols-outlined text-on-surface group-hover:text-primary transition-colors">
              {isDark ? 'light_mode' : 'dark_mode'}
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
