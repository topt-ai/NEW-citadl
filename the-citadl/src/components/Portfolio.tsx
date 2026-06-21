"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 4,
    name: 'VOID',
    industry: 'Performance Agency',
    description: 'Aesthetically clean performance agency',
    image: '/void2.png',
  },
  {
    id: 3,
    name: 'ArcticEdge HVAC',
    industry: 'HVAC Services',
    description: 'Clean service-focused layout optimized for local conversions.',
    image: '/arcticedge.png',
  },
  {
    id: 1,
    name: 'Apex Roofing Co.',
    industry: 'Roofing Contractor',
    description: 'Premium dark minimal site with GSAP scroll animations.',
    image: '/apex-roofing.png',
  },
  {
    id: 2,
    name: 'Sentinel Pest Co.',
    industry: 'Pest Control',
    description: 'Trust-forward design with magnetic cursor and micro-interactions.',
    image: '/sentinel.png',
  },
];

interface ProjectCardProps {
  project: typeof projects[number];
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group">
      {/* Browser window frame */}
      <div className="rounded-[2px] overflow-hidden bg-citadl-alt border border-citadl-border transition-colors duration-300 group-hover:border-citadl-text-muted/40">
        {/* Chrome top bar */}
        <div className="h-8 flex items-center gap-2 px-4 bg-citadl-dark border-b border-citadl-border">
          <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#8B4444' }} />
          <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#8B8344' }} />
          <span className="w-3 h-3 rounded-full" style={{ backgroundColor: '#4B7355' }} />
        </div>

        {/* Screenshot, strict 16:9 */}
        <div className="aspect-video w-full overflow-hidden bg-citadl-dark">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Caption below the window */}
      <div className="pt-5">
        <p className="font-mono text-[11px] uppercase tracking-wider text-citadl-lime mb-2">
          {project.industry}
        </p>
        <h3 className="font-display text-[28px] leading-tight text-citadl-text-primary mb-2">
          {project.name}
        </h3>
        <p className="font-body text-[15px] text-citadl-text-muted leading-relaxed max-w-sm">
          {project.description}
        </p>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="work" ref={sectionRef} className="py-[120px] lg:py-[160px] bg-citadl-bg border-b border-citadl-border">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <p className="font-mono text-[11px] uppercase tracking-widest text-citadl-text-muted mb-6">
            SELECTED WORK
          </p>
          <div className="max-w-3xl">
            <h2 className="font-display text-[48px] md:text-[64px] leading-[1.1] text-citadl-text-primary mb-6">
              The work.
            </h2>
            <p className="font-body text-[18px] text-citadl-text-muted leading-relaxed">
              A few sites we have built for service businesses.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
