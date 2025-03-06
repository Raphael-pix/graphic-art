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
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top bottom",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <p ref={textRef} className={textStyles}>
      {text}
    </p>
  );
};

export default AnimatedText;
