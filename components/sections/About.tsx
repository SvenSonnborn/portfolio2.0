"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const techStack = [
  "React",
  "React Native",
  "Angular",
  "Next.js",
  "TypeScript",
  "Node.js",
];

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const techRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Content animation
      gsap.fromTo(
        contentRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Image animation
      gsap.fromTo(
        imageRef.current,
        { x: 60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Tech stack stagger animation
      const techItems = techRef.current?.querySelectorAll(".tech-item");
      if (techItems) {
        gsap.fromTo(
          techItems,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: techRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 lg:py-32"
    >
      <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Section Label */}
        <div className="mb-12 lg:mb-16">
          <span className="font-mono text-sm text-accent uppercase tracking-widest">
            01 — About
          </span>
          <h2 className="mt-4 text-3xl lg:text-4xl font-light text-text">
            The Workshop
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Text Content - 60% */}
          <div ref={contentRef} className="lg:col-span-7 space-y-6">
            <p className="text-lg lg:text-xl text-text leading-relaxed">
              I&apos;m a Frontend Developer with 3 years of professional experience
              building applications that people actually use.
            </p>
            <p className="text-base lg:text-lg text-muted leading-relaxed">
              At Skriptfabrik, I&apos;ve worked across the stack — web apps, mobile
              apps, internal tools. The highlight: contributing to NDR&apos;s app
              ecosystem, used by millions of listeners.
            </p>
            <p className="text-base lg:text-lg text-muted leading-relaxed">
              I don&apos;t specialize in one framework. I use what the project needs.
            </p>

            {/* Tech Stack */}
            <div ref={techRef} className="pt-6 lg:pt-8">
              <p className="font-mono text-xs text-muted uppercase tracking-wider mb-4">
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="tech-item px-4 py-2 text-sm font-mono border border-border rounded-full text-text hover:border-accent hover:text-accent transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Image - 40% */}
          <div ref={imageRef} className="lg:col-span-5">
            <div className="relative">
              {/* Placeholder for about image */}
              <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-card-bg to-bg border border-border flex items-center justify-center overflow-hidden">
                <div className="text-center p-8">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-muted/20 flex items-center justify-center">
                    <span className="text-3xl text-muted">📷</span>
                  </div>
                  <p className="text-sm text-muted font-mono">About Photo</p>
                  <p className="text-xs text-muted/60 mt-1">Portrait or workspace</p>
                </div>
              </div>
              {/* Decorative */}
              <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full border border-border rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
