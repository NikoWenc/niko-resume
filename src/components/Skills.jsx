import React from "react";
import { skills } from "../constants";

const Skills = () => {
  return (
    <section className="py-32 bg-surface-container-low" id="Skills">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-7">
          <div className="max-w-2xl">
            <span className="font-label text-xs font-bold tracking-[0.2em] text-outline uppercase mb-4 block">
              Expertise
            </span>
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary tracking-tight">
              Skills and Tools
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-outline-variant/10 rounded-xl overflow-hidden border border-outline-variant/30">
          {skills.map((skill, index) => (
            <div
              key={skill.category}
              className={`bg-surface p-8 border-outline-variant/30 hover:bg-surface-container-high transition-colors
                ${index % 3 !== 2 ? "lg:border-r" : ""} 
                ${index < 3 ? "lg:border-b" : ""}
                ${index % 2 === 0 ? "md:border-r" : ""}
                ${index < 4 ? "md:border-b" : ""}
                border-b
              `}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-3xl text-primary">
                  {skill.icon}
                </span>
                <h3 className="font-headline text-lg font-bold text-primary uppercase tracking-tight">
                  {skill.category}
                </h3>
              </div>

              {skill.layout === "inline" ? (
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="font-label text-sm text-on-surface-variant"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              ) : (
                <ul className="space-y-3">
                  {skill.items.map((item) => (
                    <li
                      key={item}
                      className="font-label text-sm text-on-surface-variant flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
