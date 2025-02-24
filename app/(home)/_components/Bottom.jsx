"use client";

import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import Footer from "@/components/Footer";
import Trending from "./Trending";

gsap.registerPlugin(ScrollTrigger);

const BottomSection = () => {
  const trendingRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    if (!trendingRef.current || !footerRef.current) return;

    ScrollTrigger.create({
      trigger: trendingRef.current,
      start: "top 40%",
      end: "bottom 80%",
      scrub: true,
      duration: 0.5,
      ease:"power2.Out",
      onEnter: () => document.documentElement.setAttribute("data-theme", "dark"),
      onEnterBack: () => document.documentElement.setAttribute("data-theme", "dark"),
      onLeave: () => document.documentElement.setAttribute("data-theme", "light"),
      onLeaveBack: () => document.documentElement.setAttribute("data-theme", "light"),
    });

    ScrollTrigger.create({
      trigger: footerRef.current,
      start: "top 10%",
      end: "bottom 90%",
      scrub: true,
      duration: 0.5,
      ease:"power2.Out",
      onEnter: () => document.documentElement.setAttribute("data-theme", "light"),
      onEnterBack: () => document.documentElement.setAttribute("data-theme", "light"),
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <Trending trendingRef={trendingRef} />
      <Footer footerRef={footerRef} />
    </>
  );
};

export default BottomSection;
