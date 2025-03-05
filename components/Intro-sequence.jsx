"use client";

import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { usePathname } from "next/navigation";

const IntroSequence = () => {
  const [playAnimation, setPlayAnimation] = useState(false);
  const [firstLoad, setFirstLoad] = useState(true); // Track initial page load
  const pathname = usePathname();

  const preloaderRef = useRef(null);

  // Trigger animation only on page transitions
  useEffect(() => {
    if (firstLoad) {
      setFirstLoad(false); // Prevent animation on first load
      return;
    }
    setPlayAnimation(true);
  }, [pathname]);

  useEffect(() => {
    if (!playAnimation) return;

    const tl = gsap.timeline();

    // Fade out preloader
    tl.to(preloaderRef.current, {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        if (preloaderRef.current) {
          preloaderRef.current.style.display = "none";
        }
      },
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

    // Reset animation state after it plays
    setTimeout(() => setPlayAnimation(false), 2000);
  }, [playAnimation]);

  return (
    <>
      {/* Preloader */}
      {playAnimation && (
        <div
          ref={preloaderRef}
          className="fixed inset-0 bg-yellow-300 z-[600]"
        />
      )}

      {/* Banner Section */}
      {playAnimation && (
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
        </div>
      )}
    </>
  );
};

export default IntroSequence;
