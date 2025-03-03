"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { SmileySvg } from "./smiley";

export default function Preloader() {
  const [showPreloader, setShowPreloader] = useState(false);
  const seriousRef = useRef(null);
  const businessRef = useRef(null);
  const smileyRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisited");

    if (!hasVisited) {
      setShowPreloader(true);
      sessionStorage.setItem("hasVisited", "true"); 
    }
  }, []);

  useEffect(() => {
    if (!showPreloader) return;

    const seriousLetters = seriousRef.current.querySelectorAll("span");
    const businessLetters = businessRef.current.querySelectorAll("span");
    const smiley = smileyRef.current;

    timelineRef.current = gsap.timeline();

    // Initial setup
    timelineRef.current
      .set(seriousLetters, { opacity: 0, y: "50px" })
      .set(businessLetters, { opacity: 0, y: "50px" })
      .set(smiley, { x: "-35vw", rotate: 0 });

    // Move smiley to right and reveal "GRAPHIQ"
    timelineRef.current
      .to(smiley, { x: "32vw", rotate: 360, duration: 3, ease: "power2.inOut" })
      .to(
        seriousLetters,
        { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: "power2.out" },
        "-=2"
      );

    // Move smiley to center and reveal "ART"
    timelineRef.current
      .to(smiley, { x: "10vw", rotate: -360, duration: 3, ease: "power2.inOut" })
      .to(
        businessLetters,
        { opacity: 1, y: 0, duration: 1, stagger: -0.15, ease: "power2.out" },
        "-=1.4"
      );

    // Scale down smiley and fade out preloader
    timelineRef.current
      .to(smiley, { scale: 0.2, y: "30%", backgroundColor: "black", borderRadius: "50%", duration: 1, ease: "power2.inOut" })
      .to("#preloader", {
        y: "-100vh",
        opacity: 0,
        duration: 1.5,
        ease: "power2.inOut",
        onComplete: () => setShowPreloader(false), // Hide preloader after animation
      }, "-=0.5");

    return () => timelineRef.current?.kill();
  }, [showPreloader]);

  if (!showPreloader) return null; // Hide preloader if it has already played

  return (
    <div id="preloader" className="fixed inset-0 flex items-center justify-center bg-primary-pink z-[10001] overflow-hidden">
      <div className="relative w-full flex items-center justify-center">
        <div ref={seriousRef} className="absolute left-[6%] text-[10vw] font-bold font-outfit md:left-[8%]">
          {"GRAPHIQ".split("").map((char, idx) => (
            <span key={idx} className="inline-block opacity-0 text-neutral-black">{char}</span>
          ))}
        </div>

        <div ref={smileyRef} className="absolute text-[10vw]" style={{ transform: "translateX(-100%)" }}>
          <SmileySvg color=" #1e1e1e" />
        </div>

        <div ref={businessRef} className="absolute right-[13%] text-[10vw] font-bold font-outfit md:right-[16%]">
          {"ART".split("").map((char, idx) => (
            <span key={idx} className="inline-block opacity-0 text-neutral-black">{char}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
