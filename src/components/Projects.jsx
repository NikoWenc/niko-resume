import React from "react";
import { projects } from "../constants";

const ProjectCard = ({ project }) => {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col h-full outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl"
    >
      <div className="relative aspect-3/2 overflow-hidden rounded-xl bg-surface-container-high mb-6">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90 group-hover:brightness-100"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="bg-primary text-on-primary font-label text-xs font-bold py-3 px-6 rounded-full tracking-widest uppercase">
            {project.cta || "View Project"}
          </span>
        </div>
      </div>
      <div className="flex flex-col grow">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-headline text-2xl font-bold text-primary group-hover:text-primary-fixed-dim transition-colors">
            {project.title}
          </h3>
          <span className="font-label text-xs font-medium text-outline">
            {project.year}
          </span>
        </div>
        <p className="text-on-surface-variant">{project.description}</p>
      </div>
    </a>
  );
};

const Projects = () => {
  return (
    <section className="py-32 bg-surface" id="Projects">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 text-center">
          <span className="font-label text-xs font-bold tracking-[0.2em] text-outline uppercase mb-4 block">
            Selected Works
          </span>
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary tracking-tight">
            Curated Projects.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
