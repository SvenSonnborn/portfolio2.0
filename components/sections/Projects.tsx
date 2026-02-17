"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, ArrowUpRight, Circle } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "E-Invoice Processor",
    description: "Automated invoice processing for German SMEs.",
    tech: ["Next.js", "TypeScript", "PostgreSQL"],
    link: "#",
    linkText: "Live Demo",
    status: "Live",
    size: "large", // large = spans 2 columns
  },
  {
    title: "LkSG Compliance Tool",
    description:
      "Risk assessment platform for German Supply Chain Due Diligence Act compliance.",
    tech: ["React", "Node.js", "Prisma"],
    link: "#",
    linkText: "Case Study",
    status: "In Development",
    size: "medium",
  },
  {
    title: "NDR App Suite",
    description:
      "Mobile applications for Northern German Broadcasting — regional news, NDR2, and NJOY radio.",
    tech: ["React Native", "TypeScript"],
    links: [
      {
        text: "NDR Regional",
        url: "https://apps.apple.com/de/app/ndr-niedersachsen/id1214936486",
      },
      {
        text: "NDR 2",
        url: "https://apps.apple.com/de/app/ndr-2/id1214936497",
      },
      {
        text: "N-JOY",
        url: "https://apps.apple.com/de/app/n-joy-radio/id1083101371",
      },
    ],
    linkText: "View Apps",
    status: "Live",
    size: "medium",
  },
  {
    title: "This Portfolio",
    description: "Built with Next.js 16, Tailwind CSS, GSAP, and Lenis.",
    tech: ["Next.js", "TypeScript", "GSAP"],
    link: "#",
    linkText: "View Source",
    status: "Meta",
    size: "small",
  },
];

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.querySelectorAll(".project-card");
      if (cards) {
        cards.forEach((card) => {
          gsap.fromTo(
            card,
            { y: 60, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.6,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            }
          );
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 lg:py-32"
    >
      <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Section Label */}
        <div className="mb-12 lg:mb-16">
          <span className="font-mono text-sm text-accent uppercase tracking-widest">
            03 — Projects
          </span>
          <h2 className="mt-4 text-3xl lg:text-4xl font-light text-text">
            The Lab
          </h2>
        </div>

        {/* Bento Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6"
        >
          {/* Card 1 - Large (spans 2 cols on lg) */}
          <div className="project-card group relative lg:col-span-2 p-6 lg:p-8 rounded-2xl bg-card-bg border border-card-border hover:border-accent/50 transition-all duration-300 hover:scale-[1.02]">
            <div className="flex items-start justify-between mb-4">
              <span
                className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono rounded-full ${
                  projects[0].status === "Live"
                    ? "bg-green-500/10 text-green-500"
                    : "bg-yellow-500/10 text-yellow-500"
                }`}
              >
                <Circle className="w-1.5 h-1.5 fill-current" />
                {projects[0].status}
              </span>
              <ExternalLink className="w-5 h-5 text-muted group-hover:text-accent transition-colors" />
            </div>
            <h3 className="text-xl lg:text-2xl font-medium text-text mb-2 group-hover:text-accent transition-colors">
              {projects[0].title}
            </h3>
            <p className="text-muted mb-6 max-w-lg">{projects[0].description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {projects[0].tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 text-xs font-mono bg-bg rounded-full text-muted"
                >
                  {t}
                </span>
              ))}
            </div>
            <a
              href={projects[0].link}
              className="inline-flex items-center gap-2 text-sm text-accent hover:underline"
            >
              {projects[0].linkText}
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Card 2 - Medium */}
          <div className="project-card group relative p-6 lg:p-8 rounded-2xl bg-card-bg border border-card-border hover:border-accent/50 transition-all duration-300 hover:scale-[1.02]">
            <div className="flex items-start justify-between mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono rounded-full bg-yellow-500/10 text-yellow-500">
                <Circle className="w-1.5 h-1.5 fill-current" />
                {projects[1].status}
              </span>
            </div>
            <h3 className="text-xl font-medium text-text mb-2 group-hover:text-accent transition-colors">
              {projects[1].title}
            </h3>
            <p className="text-muted text-sm mb-6">{projects[1].description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {projects[1].tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 text-xs font-mono bg-bg rounded-full text-muted"
                >
                  {t}
                </span>
              ))}
            </div>
            <a
              href={projects[1].link}
              className="inline-flex items-center gap-2 text-sm text-accent hover:underline"
            >
              {projects[1].linkText}
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Card 3 - Medium */}
          <div className="project-card group relative p-6 lg:p-8 rounded-2xl bg-card-bg border border-card-border hover:border-accent/50 transition-all duration-300 hover:scale-[1.02]">
            <div className="flex items-start justify-between mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono rounded-full bg-green-500/10 text-green-500">
                <Circle className="w-1.5 h-1.5 fill-current" />
                {projects[2].status}
              </span>
            </div>
            <h3 className="text-xl font-medium text-text mb-2 group-hover:text-accent transition-colors">
              {projects[2].title}
            </h3>
            <p className="text-muted text-sm mb-6">{projects[2].description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {projects[2].tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 text-xs font-mono bg-bg rounded-full text-muted"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="space-y-2">
              {projects[2].links?.map((link) => (
                <a
                  key={link.text}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-accent hover:underline"
                >
                  {link.text}
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Card 4 - Small (spans 2 cols on lg) */}
          <div className="project-card group relative lg:col-span-2 p-6 lg:p-8 rounded-2xl bg-card-bg border border-card-border hover:border-accent/50 transition-all duration-300 hover:scale-[1.02]">
            <div className="flex items-start justify-between mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono rounded-full bg-muted/20 text-muted">
                <Circle className="w-1.5 h-1.5 fill-current" />
                {projects[3].status}
              </span>
              <ExternalLink className="w-5 h-5 text-muted group-hover:text-accent transition-colors" />
            </div>
            <h3 className="text-xl font-medium text-text mb-2 group-hover:text-accent transition-colors">
              {projects[3].title}
            </h3>
            <p className="text-muted mb-6">{projects[3].description}</p>
            <div className="flex flex-wrap gap-2">
              {projects[3].tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 text-xs font-mono bg-bg rounded-full text-muted"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
