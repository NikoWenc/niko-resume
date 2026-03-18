import React from "react";
import { footerContent } from "../constants";

const Contact = () => {
  return (
    <section
      className="py-32 bg-surface-container-low border-t border-outline-variant/30"
      id="Contact"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <span className="font-label text-xs font-bold tracking-[0.2em] text-outline uppercase mb-8 block">
          Inquiries
        </span>
        <h2 className="font-headline text-5xl md:text-7xl font-extrabold text-primary mb-12 tracking-tight">
          Contact me via Email <br /> or Download my CV.
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <a
            href="mailto:nikowenceslao11@gmail.com"
            className="hero-gradient text-on-primary px-12 py-5 rounded-md font-label font-bold text-sm tracking-widest hover:opacity-95 transition-all w-full md:w-auto text-center"
          >
            SEND AN EMAIL
          </a>
          <a
            href="/romnick-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-surface-container-high text-primary border border-outline-variant/30 px-12 py-5 rounded-md font-label font-bold text-sm tracking-widest hover:bg-surface-container-highest transition-all w-full md:w-auto text-center"
          >
            DOWNLOAD CV
          </a>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-surface border-t border-outline-variant/30 py-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:flex-1 text-center md:text-left">
          <p className="font-label text-xs font-bold tracking-[0.2em] text-primary uppercase mb-2">
            N I K O
          </p>
          <p className="text-on-surface-variant text-sm">
            © 2026 All rights reserved.
          </p>
        </div>

        <div className="flex items-center justify-center gap-12">
          {footerContent.socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-label text-sm font-semibold text-on-surface hover:text-primary transition-colors"
            >
              {social.name}
            </a>
          ))}
        </div>

        <div className="md:flex-1 text-center md:text-right">
          <p className="text-on-surface-variant text-sm font-label italic">
            {footerContent.quote}
          </p>
        </div>
      </div>
    </footer>
  );
};

export { Contact, Footer };
