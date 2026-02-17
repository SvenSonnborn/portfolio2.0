"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, Linkedin, Download, ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 lg:py-32 bg-card-bg/30"
    >
      <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16">
        <div
          ref={contentRef}
          className="max-w-2xl mx-auto text-center"
        >
          {/* Section Label */}
          <span className="font-mono text-sm text-accent uppercase tracking-widest">
            04 — Contact
          </span>
          <h2 className="mt-4 text-3xl lg:text-4xl font-light text-text mb-6">
            The Lens
          </h2>

          <p className="text-lg text-muted mb-12">
            Open to new opportunities and collaborations.
          </p>

          {/* Contact Links */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="mailto:sonnborn.sven@gmail.com"
              className="group flex items-center gap-3 px-6 py-4 text-text border border-border rounded-2xl hover:border-accent hover:text-accent transition-all duration-300 w-full sm:w-auto"
            >
              <Mail className="w-5 h-5" />
              <span className="text-sm font-mono">sonnborn.sven@gmail.com</span>
            </a>
            <a
              href="https://www.linkedin.com/in/svensonnborn/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 py-4 text-text border border-border rounded-2xl hover:border-accent hover:text-accent transition-all duration-300 w-full sm:w-auto"
            >
              <Linkedin className="w-5 h-5" />
              <span className="text-sm">LinkedIn</span>
              <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>

          {/* Resume Download */}
          <div className="pt-8 border-t border-border">
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-3 px-8 py-4 bg-text text-bg rounded-full hover:bg-accent transition-colors duration-300"
            >
              <Download className="w-5 h-5" />
              <span className="font-medium">Download Resume</span>
            </a>
            <p className="mt-4 text-xs text-muted">
              PDF format • 2.4 MB
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
