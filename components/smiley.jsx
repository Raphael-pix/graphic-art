"use client"

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function SmileyFace() {
  const faceRef = useRef(null);
  const leftEyeRef = useRef(null);
  const rightEyeRef = useRef(null);
  const mouthRef = useRef(null);
  const [isBlinking, setIsBlinking] = useState(false);
  const blinkTimeout = useRef(null);

  useEffect(() => {
    const face = faceRef.current;
    const leftEye = leftEyeRef.current;
    const rightEye = rightEyeRef.current;

    const handleMouseMove = (e) => {
      if (!face) return;
      const { left, top, width, height } = face.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;
      const angle = Math.atan2(deltaY, deltaX);

      // Limit eye movement radius
      const eyeMoveRadius = 5;
      const moveX = Math.cos(angle) * eyeMoveRadius;
      const moveY = Math.sin(angle) * eyeMoveRadius;

      gsap.to([leftEye, rightEye], {
        x: moveX,
        y: moveY,
        duration: 0.2,
        ease: "power2.out",
      });

      clearTimeout(blinkTimeout.current);
      setIsBlinking(false);
    };

    const handleMouseLeave = () => {
      gsap.to([leftEye, rightEye], {
        x: 0,
        y: 0,
        duration: 0.3,
        ease: "power2.out",
      });

      startBlinking();
    };

    face.addEventListener("mousemove", handleMouseMove);
    face.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      face.removeEventListener("mousemove", handleMouseMove);
      face.removeEventListener("mouseleave", handleMouseLeave);
      clearTimeout(blinkTimeout.current);
    };
  }, []);

  const startBlinking = () => {
    blinkTimeout.current = setTimeout(() => {
      setIsBlinking(true);
      setTimeout(() => {
        setIsBlinking(false);
        startBlinking();
      }, 150);
    }, Math.random() * 4000 + 2000);
  };

  useEffect(() => {
    startBlinking();
    return () => clearTimeout(blinkTimeout.current);
  }, []);

  return (
    <svg
      ref={faceRef}
      viewBox="0 0 115 115" // Increased size
      className="w-9 h-8 lg:w-28 lg:h-28 " // Adjust display size
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Face Circle */}
      <circle cx="60" cy="60" r="50" stroke="var(--text-color)" strokeWidth="7" fill="none" />

      {/* Eyes */}
      <circle
        ref={leftEyeRef}
        cx="45"
        cy="45"
        r={isBlinking ? 2 : 6} // Slightly larger eyes
        fill="var(--text-color)"
      />
      <circle
        ref={rightEyeRef}
        cx="75"
        cy="45"
        r={isBlinking ? 2 : 6}
        fill="var(--text-color)"
      />

      {/* Mouth */}
      <path
        ref={mouthRef}
        d="M45 75 Q60 90 75 75" // Smiling path
        stroke="var(--text-color)"
        strokeWidth="4"
        fill="transparent"
      />
    </svg>
  );
}
