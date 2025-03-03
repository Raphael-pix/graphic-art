"use client";

import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import Footer from "@/components/Footer";
import Trending from "./Trending";

gsap.registerPlugin(ScrollTrigger);

const debounce = (func, delay) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  };
};

const BottomSection = () => {
  const trendingRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    if (!trendingRef.current || !footerRef.current) return;

    const setTheme = debounce((theme) => {
      document.documentElement.setAttribute("data-theme", theme);
    }, 100);

    ScrollTrigger.create({
      trigger: trendingRef.current,
      start: "top 40%",
      end: "bottom 60%",
      scrub: 1,
      onEnter: () => setTheme("dark"),
      onEnterBack: () => setTheme("dark"),
      onLeave: () => setTheme("pink"),
      onLeaveBack: () => setTheme("pink"),
    });

    ScrollTrigger.create({
      trigger: footerRef.current,
      start: "top 90%",
      end: "bottom 100%",
      scrub: 1,
      onEnter: () => setTheme("pink"),
      onEnterBack: () => setTheme("pink"),
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
