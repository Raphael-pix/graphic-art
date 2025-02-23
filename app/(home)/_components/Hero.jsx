"use client";

import EmbossedLogo from "@/components/embossedLogo";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef, useEffect, useState } from "react";

const Hero = () => {
  const heroRef = useRef(null);
  const videoContainerRef = useRef(null);
  const videoRef = useRef(null);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const animationRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024); // 1024px is Tailwind's `lg`
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }

    if (isLargeScreen) {
      // Create GSAP timeline if screen is large
      animationRef.current = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "center center",
          scrub: 1,
          pinSpacing: true,
          onEnter: () =>
            gsap.set(videoContainerRef.current, { clearProps: "transform" }),
          onRefresh: () =>
            gsap.set(videoContainerRef.current, { clearProps: "transform" }),
        },
      });

      animationRef.current.fromTo(
        videoContainerRef.current,
        {
          width: "8rem",
          height: "6rem",
          position: "absolute",
          top: "-9rem",
          left: "24px",
          borderRadius: "8px",
        },
        {
          width: "100%",
          height: "100%",
          borderRadius: "0px",
          top: "0px",
          left: "0px",
          ease: "none",
        },
        0
      );
    } else {
      // Kill animation if screen is small
      animationRef.current?.kill();
    }

    return () => animationRef.current?.kill();
  }, [isLargeScreen]);

  return (
    <div ref={heroRef} id="hero" className="relative pb-8">
      <div className="relative min-h-screen">
        <div className="w-full flex items-center justify-center max-lg:h-screen max-lg:flex-col max-lg:gap-32">
          <EmbossedLogo />
          <div className="mx-auto space-x-2 font-standard text-center mt-6 lg:hidden">
            <p className="text-[28px] font-outfit font-semibold">Branding and design agency</p>
            <p className="text-3xl font-light max-w-sm">Agency for startups and scaleups</p>
          </div>
        </div>
        <div className="relative w-full lg:h-screen">
          <div
            ref={videoContainerRef}
            className="w-full h-[213px] rounded-lg lg:absolute lg:-top-24 lg:left-6 lg:w-36 lg:h-24"
          >
            <video
              ref={videoRef}
              preload="none"
              playsInline
              muted
              loop
              src="/assets/videos/hero-video.mp4"
              className="absolute inset-0 rounded-lg"
            ></video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
