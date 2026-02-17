"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowDown } from "lucide-react";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        titleRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 }
      )
        .fromTo(
          subtitleRef.current,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.6"
        )
        .fromTo(
          descriptionRef.current,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.5"
        )
        .fromTo(
          ctaRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          "-=0.4"
        )
        .fromTo(
          imageRef.current,
          { x: 60, opacity: 0 },
          { x: 0, opacity: 1, duration: 1 },
          "-=0.8"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleScrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center pt-20 lg:pt-0 overflow-hidden"
    >
      <div className="w-full max-w-[1800px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Content - Left Side */}
          <div className="lg:col-span-7 xl:col-span-6 space-y-6 lg:space-y-8">
            <div className="space-y-4">
              <p
                ref={subtitleRef}
                className="font-mono text-sm text-accent uppercase tracking-widest"
              >
                Frontend Developer
              </p>
              <h1
                ref={titleRef}
                className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light tracking-tight text-text leading-[0.9]"
              >
                Sven
                <br />
                <span className="font-normal">Sonnborn</span>
              </h1>
            </div>

            <p
              ref={descriptionRef}
              className="text-lg lg:text-xl text-muted max-w-2xl leading-relaxed"
            >
              Frontend Developer delivering high-quality web and native applications — from media platforms to enterprise tools — built with React, Angular, and React Native.
            </p>

            <div ref={ctaRef}>
              <button
                onClick={handleScrollToProjects}
                className="group inline-flex items-center gap-3 px-6 py-3 text-sm font-medium bg-text text-bg rounded-full hover:bg-accent transition-colors duration-300"
              >
                View Work
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Profile Image - Right Side */}
          <div className="lg:col-span-5 xl:col-span-6 flex justify-center lg:justify-end">
            <div
              ref={imageRef}
              className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96"
            >
              {/* Placeholder for profile image */}
              <div className="w-full h-full rounded-2xl bg-gradient-to-br from-border to-bg border border-border flex items-center justify-center overflow-hidden">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-muted/20 flex items-center justify-center">
                    <span className="text-4xl text-muted">👤</span>
                  </div>
                  <p className="text-sm text-muted font-mono">Profile Photo</p>
                  <p className="text-xs text-muted/60 mt-1">800 x 800px</p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border border-accent/30 rounded-full" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border border-border rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block">
        <div className="w-6 h-10 border-2 border-border rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-accent rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
