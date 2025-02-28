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

  gsap.registerPlugin(ScrollTrigger);


  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }

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

    return () => animationRef.current?.kill();
  }, []);

  return (
    <div ref={containerRef} className="relative h-[40vh] flex items-center justify-center md:p-16 md:min-h-screen">
      <div className="relative w-full h-full flex items-center justify-center md:h-screen">
        <div
          ref={videoContainerRef}
          className="w-full h-full flex items-center justify-center md:rounded-lg"
        >
          <video
            ref={videoRef}
            preload="none"
            playsInline
            muted
            loop
            src="/assets/videos/hero-video.mp4"
            className="absolute inset-0 md:rounded-lg"
          ></video>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
