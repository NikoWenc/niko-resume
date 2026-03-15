import React, { useState } from "react";
import { navLinks } from "../constants";
import useDarkMode from "../hooks/useDarkMode";

const Navbar = () => {
  const [isDark, toggleTheme] = useDarkMode();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="glass-nav sticky top-0 z-50 w-full border-b border-outline-variant/30 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-headline text-xl font-extrabold tracking-tight text-primary uppercase">
            <a href={navLinks[0].href} onClick={() => setIsMenuOpen(false)}>
              {navLinks[0].name}
            </a>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) =>
            link.name === "N I K O" ? null : (
              <a
                key={link.name}
                href={link.href}
                className="font-label text-sm font-medium tracking-wide text-on-surface hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ),
          )}
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 hover:bg-surface-container-low rounded-full transition-colors group"
            aria-label="Toggle theme"
          >
            <span className="material-symbols-outlined text-on-surface group-hover:text-primary transition-colors">
              {isDark ? "light_mode" : "dark_mode"}
            </span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="p-2 hover:bg-surface-container-low rounded-full transition-colors md:hidden text-on-surface"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined">
              {isMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 top-20 z-40 w-full h-[calc(100vh-5rem)] bg-surface/90 backdrop-blur-xl md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-full pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 p-6">
          {navLinks.map((link) =>
            link.name === "N I K O" ? null : (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="font-headline text-2xl font-bold tracking-widest text-on-surface hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ),
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
