"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnimatedText = ({ text, textStyles }) => {
  const textRef = useRef(null);

  useEffect(() => {
    if (!textRef.current) return;

    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 }, // Start position
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%", // Trigger when text is near viewport
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <h1 ref={textRef} className={textStyles}>
      {text}
    </h1>
  );
};

export default AnimatedText;
