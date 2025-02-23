"use client"

import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';

const IntroSequence = () => {
  const [visibleLetters, setVisibleLetters] = useState(0);
  const [preloaderDone, setPreloaderDone] = useState(false);
  
  const companyName = "GRAPHIQ ART"
  const blackDivRef = useRef(null);
  const blackTextRef = useRef(null);
  const textRef = useRef(null);
  const preloaderRef = useRef(null);

  // Handle preloader text animation
  useEffect(() => {
    if (visibleLetters < companyName.length) {
      const timeout = setTimeout(() => {
        setVisibleLetters(prev => prev + 1);
      }, 200);
      return () => clearTimeout(timeout);
    } else {
      // When preloader text is complete, trigger transition
      const timeout = setTimeout(() => {
        setPreloaderDone(true);
      }, 1000); // Wait a moment after text completes
      return () => clearTimeout(timeout);
    }
  }, [visibleLetters]);

  // Handle main animation sequence
  useEffect(() => {
    if (preloaderDone) {
      const tl = gsap.timeline();

      // Fade out preloader
      tl.to(preloaderRef.current, {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          if (preloaderRef.current) {
            preloaderRef.current.style.display = 'none';
          }
        }
      });

      // Start banner animations
      tl.add(() => {
        const bannerOne = document.getElementById("banner-1");
        const bannerTwo = document.getElementById("banner-2");
        const bannerThree = document.getElementById("banner-3");

        gsap.set([bannerThree, bannerTwo, bannerOne], {
          yPercent: 0,
        });
        
        gsap.to([bannerThree, bannerTwo, bannerOne], {
          yPercent: 100,
          stagger: 0.2,
          ease: "power2.out",
          duration: 1,
        });
      });

      // Animate main logo
      tl.add(() => {
        gsap.fromTo(
          textRef.current,
          { y: 400, scale: 1.5 },
          {
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power2.in",
          }
        );

        gsap.fromTo(
          blackTextRef.current,
          { y: 400, scale: 1.5 },
          {
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power2.in",
            onStart: () => {
              if (blackTextRef.current) {
                blackTextRef.current.style.display = "block";
              }
            },
            onUpdate: () => {
              const yValue = gsap.getProperty(blackTextRef.current, "y");
              if (yValue < 250) {
                textRef.current.style.display = "none";
              }
            },
          }
        );

        gsap.to(blackDivRef.current, {
          y: "100%",
          duration: 1,
          ease: "power2.in",
          onComplete: () => {
            if (blackDivRef.current) blackDivRef.current.style.display = "none";
          },
        });
      });
    }
  }, [preloaderDone]);

  return (
    <>
      {/* Preloader */}
      <div 
        ref={preloaderRef}
        className="fixed inset-0 flex items-center justify-center bg-yellow-300 z-[600]"
      >
        <div className="flex space-x-1">
          {companyName.split('').map((letter, index) => (
            <span
              key={index}
              className={`text-4xl font-bold text-gray-900 opacity-0 ${
                index < visibleLetters ? 'animate-bounce opacity-100' : ''
              }`}
              style={{
                animationDelay: `${index * 0.1}s`,
                animationDuration: '1s'
              }}
            >
              {letter}
            </span>
          ))}
        </div>
      </div>

      {/* Banner Section */}
      <div>
        <div
          id="banner-1"
          className="min-h-screen bg-red-600 z-[500] fixed top-0 left-0 w-screen"
        />
        <div
          id="banner-2"
          className="min-h-screen bg-blue-700 z-[500] fixed top-0 left-0 w-screen"
        />
        <div
          id="banner-3"
          className="min-h-screen bg-orange-500 z-[500] fixed top-0 left-0 w-screen"
        />
        <div
          ref={blackDivRef}
          className="absolute inset-0 bg-black flex items-start justify-center z-10"
        />
        <h1
          ref={blackTextRef}
          className="text-[80px] absolute top-0 right-1/2 translate-x-1/2 translate-y-1/2 font-bold text-black uppercase z-20"
          style={{ display: "none" }}
        >
          {companyName}
        </h1>
        <h1
          ref={textRef}
          className="text-[80px] absolute top-0 right-1/2 translate-x-1/2 translate-y-1/2 font-bold text-white uppercase z-20"
        >
          {companyName}
        </h1>
      </div>
    </>
  );
};

export default IntroSequence;