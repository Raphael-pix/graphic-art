"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { SmileySvg } from "./smiley";

export default function Preloader() {
  const seriousRef = useRef(null);
  const businessRef = useRef(null);
  const smileyRef = useRef(null);
  const timelineRef = useRef(null);

  const animatePreloader = () => {
    const seriousLetters = seriousRef.current.querySelectorAll("span");
    const businessLetters = businessRef.current.querySelectorAll("span");
    const smiley = smileyRef.current;

    timelineRef.current = gsap.timeline();

    // Initial setup: Hide text and position smiley at far left
    timelineRef.current
      .set(seriousLetters, 
        {
         opacity: 0, 
        y:"50px"
        }) // Hide "GRAPHIQ" text
      .set(businessLetters, { 
        opacity: 0 ,
        y:"50px"
        }) // Hide "ART" text
      .set(smiley, { x: "-35vw", rotate: 0 }); // Start smiley at far left

    // Move smiley to the far right (clockwise rotation) and reveal "GRAPHIQ"
    timelineRef.current
      .to(smiley, {
        x: "32vw", // Move to far right
        rotate: 360, // Rotate clockwise
        duration: 3, // Slower movement for better visibility
        ease: "power2.inOut",
      })
      .to(
        seriousLetters,
        {
          opacity: 1,
          y: 0,
          duration: 1, // Longer duration for text reveal
          stagger: 0.15, // Slightly slower stagger
          ease: "power2.out",
        },
        "-=2" // Start revealing text while smiley is still moving
      );

    // Move smiley to the space between "GRAPHIQ" and "ART" (counterclockwise rotation)
    timelineRef.current
      .to(smiley, {
        x: "10vw", // Move to center between words
        rotate: -360, // Rotate counterclockwise
        duration: 3, // Slower movement for better visibility
        ease: "power2.inOut",
      })
      .to(
        businessLetters,
        {
          opacity: 1,
          y: 0,
          duration: 1, // Longer duration for text reveal
          stagger: -0.15, // Slightly slower stagger
          ease: "power2.out",
        },
        "-=1.4" // Start revealing text 1.5 seconds AFTER smiley starts moving back
      );

    // Scale down smiley face into a black dot and move preloader up
    timelineRef.current
      .to(smiley, {
        scale: 0.2, // Scale down to a dot
        y:"30%", //move the dot down
        backgroundColor: "black", // Change to a black dot
        borderRadius: "50%", // Ensure it's a perfect circle
        duration: 1, // Duration of scaling
        ease: "power2.inOut",
      })
      .to(
        "#preloader",
        {
          y: "-100vh", // Move preloader up
          opacity: 0, // Fade out
          duration: 1.5, // Duration of movement
          ease: "power2.inOut",
          onComplete: () => {
            document.getElementById("preloader").style.display = "none"; // Hide preloader
          },
        },
        "-=0.5" // Overlap scaling and upward movement
      );
  };

  useEffect(() => {
    animatePreloader();
    return () => timelineRef.current?.kill();
  }, []);

  return (
    <div
      id="preloader"
      className="fixed inset-0 flex items-center justify-center bg-primary-pink z-[10001] overflow-hidden"
    >
      <div className="relative w-full flex items-center justify-center">
        <div
          ref={seriousRef}
          className="absolute left-[6%] text-[10vw] font-bold font-outfit md:left-[8%]"
        >
          {"GRAPHIQ".split("").map((char, idx) => (
            <span key={idx} className="inline-block opacity-0 text-neutral-black">
              {char}
            </span>
          ))}
        </div>

        <div
          ref={smileyRef}
          className="absolute text-[10vw]"
          style={{ transform: "translateX(-100%)" }}
        >
          <SmileySvg color=" #1e1e1e" />
        </div>

        <div
          ref={businessRef}
          className="absolute right-[13%] text-[10vw] font-bold font-outfit md:right-[16%]"
        >
          {"ART".split("").map((char, idx) => (
            <span key={idx} className="inline-block opacity-0 text-neutral-black">
              {char}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}