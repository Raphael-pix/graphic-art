"use client";

import EmbossedLogo from "@/components/embossedLogo";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef, useEffect, useState } from "react";

const VideoSection = () => {
  const containerRef = useRef(null);
  const videoContainerRef = useRef(null);
  const videoRef = useRef(null);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const animationRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
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
      animationRef.current = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "center center",
          scrub: 1,
          pinSpacing: true,
          onEnter: () => gsap.set(videoContainerRef.current, { clearProps: "transform" }),
          onRefresh: () => gsap.set(videoContainerRef.current, { clearProps: "transform" }),
        },
      });

      animationRef.current.fromTo(
        videoContainerRef.current,
        {
          scale: 0.3,
          opacity: 0, 
          borderRadius: "8px",
        },
        {
          scale: 1,
          opacity: 1,
          ease: "power2.out",
        },
        0
      );
    } else {
      animationRef.current?.kill();
    }

    return () => animationRef.current?.kill();
  }, [isLargeScreen]);

  return (
    <div ref={containerRef} className="relative min-h-screen p-16 flex items-center justify-center">
      <div className="relative w-full lg:h-screen flex items-center justify-center">
        <div
          ref={videoContainerRef}
          className="w-full h-full rounded-lg flex items-center justify-center"
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
  );
};

export default VideoSection;
