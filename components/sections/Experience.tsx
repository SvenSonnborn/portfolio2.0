"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    company: "Skriptfabrik GmbH",
    period: "2022 – Present",
    role: "Frontend Developer",
    highlights: [
      "Built and maintained multiple applications across web and mobile platforms (React, React Native, Angular, Ionic)",
      "Contributed to NDR projects: regional apps, NDR2, and NJOY applications used by millions of listeners",
      "Implemented TypeScript across projects, improving code quality and maintainability",
      "Delivered features end-to-end: from technical planning through deployment",
    ],
  },
];

export function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = timelineRef.current?.querySelectorAll(".timeline-item");
      if (items) {
        items.forEach((item, index) => {
          gsap.fromTo(
            item,
            { y: 40, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.6,
              ease: "power3.out",
              scrollTrigger: {
                trigger: item,
                start: "top 80%",
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
      id="experience"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-card-bg/30"
    >
      <div className="w-full max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Section Label */}
        <div className="mb-12 lg:mb-16">
          <span className="font-mono text-sm text-accent uppercase tracking-widest">
            02 — Experience
          </span>
          <h2 className="mt-4 text-3xl lg:text-4xl font-light text-text">
            The Journey
          </h2>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="max-w-4xl">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item relative pl-8 lg:pl-12">
              {/* Timeline line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-border">
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-accent" />
              </div>

              {/* Content */}
              <div className="pb-12 lg:pb-16">
                <div className="flex flex-wrap items-baseline gap-4 mb-4">
                  <h3 className="text-xl lg:text-2xl font-medium text-text">
                    {exp.company}
                  </h3>
                  <span className="font-mono text-sm text-accent">
                    {exp.period}
                  </span>
                </div>
                <p className="text-muted mb-6">{exp.role}</p>

                <ul className="space-y-3">
                  {exp.highlights.map((highlight, hIndex) => (
                    <li
                      key={hIndex}
                      className="flex gap-3 text-muted leading-relaxed"
                    >
                      <span className="text-accent mt-1.5">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
