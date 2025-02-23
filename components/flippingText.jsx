"use client"

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const FlippingText = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const [text, setText] = useState("Branding and digital design"); // Initial text

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!containerRef.current || !textRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top +=100",
        end:"top +=50",
        scrub: 1, // Smooth transition while scrolling
      },
    });

    tl.to(containerRef.current, {
      rotationX: 180, // Halfway flip
      duration: 2,
      ease: "power2.inOut",
      onComplete: () => setText("Graphiq.art"),
    })
      .to(containerRef.current, {
        rotationX: 360, // Complete flip
        duration: 2,
        ease: "power2.inOut",
      });

    return () => tl.kill(); // Cleanup animation
  }, []);

  return (
    <div ref={containerRef} className="flex items-center justify-center">
      {/* Text Container */}
      <div
        className="text-2xl font-bold"
        style={{
          transformStyle: "preserve-3d",
          transformOrigin: "center center",
        }}
      >
        <span ref={textRef}>{text}</span>
      </div>
    </div>
  );
};

export default FlippingText;
