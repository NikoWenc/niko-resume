import React from "react";
import { heroContent } from "../constants";

const Hero = () => {
  return (
    <section className="relative pt-20 pb-32 overflow-hidden" id="Home">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-8">
          <div>
            <span className="font-label text-xs font-bold tracking-[0.2em] text-on-primary-container bg-secondary-container px-3 py-1 rounded-full uppercase mb-6 inline-block">
              {heroContent.label}
            </span>
            <h1 className="font-headline text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight text-primary">
              {heroContent.headline}
            </h1>
          </div>
          <p className="text-on-surface-variant text-lg md:text-xl leading-relaxed max-w-xl">
            {heroContent.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="mailto:nikowenceslao11@gmail.com"
              className="w-full sm:w-auto"
            >
              <button className="w-full hero-gradient text-on-primary px-8 py-4 rounded-md font-label font-semibold text-sm tracking-wide hover:opacity-90 transition-opacity">
                {heroContent.sendEmail}
              </button>
            </a>
            <a
              href="/romnick-resume.pdf"
              download
              className="w-full sm:w-auto"
            >
              <button className="w-full bg-surface-container-high text-primary px-8 py-4 rounded-md font-label font-semibold text-sm tracking-wide hover:bg-surface-container-highest transition-colors">
                {heroContent.downloadCV}
              </button>
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="aspect-4/5 bg-surface-container-high rounded-xl overflow-hidden shadow-2xl shadow-black/40">
            <img
              src={heroContent.image}
              alt="Profile portrait"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary-container opacity-50 rounded-xl -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
