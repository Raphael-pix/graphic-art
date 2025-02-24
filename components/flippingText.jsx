"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const FlippingText = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!containerRef.current) return;

    gsap.to(containerRef.current, {
      rotateY: 180, // Flip on Y-axis
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 1,
      },
    });
  }, []);

  return (
    <div className="flex items-center justify-center w-[9rem] lg:w-full">
      {/* 3D Container */}
      <div
        ref={containerRef}
        className="relative h-20 text-3xl font-bold bg-yellow-400"
        style={{
          transformStyle: "preserve-3d",
          perspective: 1000,
        }}
      >
        {/* Front Side */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            backfaceVisibility: "hidden",
          }}
        >
          Graphiq.art
        </div>

        {/* Back Side */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
          }}
        >
          Graphiq.art
        </div>
      </div>
    </div>
  );
};

export default FlippingText;
