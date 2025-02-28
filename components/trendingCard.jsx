"use client"

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";


gsap.registerPlugin(ScrollTrigger);

const TrendingCard = ({ image, title, category, isSmaller, index }) => {
  const trendingCardRef = useRef([]);
  useEffect(() => {
    if (!trendingCardRef.current) return;
    trendingCardRef.current.forEach((el, index) => {
      let direction = 0;
      const columnIndex = parseInt(el.getAttribute("data-column"), 10) || 0;
      if (columnIndex === 0) {
        direction = -180;
      } else if (columnIndex === 1) {
        direction = 0;
      } else if (columnIndex === 2) {
        direction = 180;
      }

      gsap.fromTo(
        el,
        { x: direction, y: 90, opacity: 0, transformOrigin: "center center" },
        {
          x: 0,
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            end: "top center",
            scrub: 1,
          },
        }
      );
    });
  }, [trendingCardRef]);
  return (
    <div
      ref={(el) => {
        if (el) trendingCardRef.current[index] = el;
      }}
      className={`relative overflow-hidden border-b group cursor-pointer max-lg:shrink-0 max-lg:flex-nowrap ${
        isSmaller ? "h-[280px] w-full" : "max-lg:w-fit"
      }`}
      style={{
        borderColor: "var(--text-color)",
      }}
      data-column={index % 3}
    >
      <div
        className={`aspect-video overflow-hidden rounded-lg ${
          isSmaller ? "h-[180px] w-full" : ""
        }`}
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="py-2">
        <h3
          className="relative w-fit text-base font-medium mb-6 
        after:content-[''] after:absolute after:left-0 after:bottom-[-2px] 
        after:w-0 after:h-[2px] after:bg-[var(--text-color)] after:transition-all 
        after:duration-700 group-hover:after:w-full"
        >
          {title}
        </h3>
        <span className="uppercase text-xs tracking-wider font-semibold">
          {category}
        </span>
      </div>
    </div>
  );
};

export default TrendingCard;
