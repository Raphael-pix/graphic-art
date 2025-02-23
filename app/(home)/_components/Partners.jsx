"use client"; 

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Partners = ({ partner }) => {
  const borderRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      borderRef.current,
      { width: "0%" }, // Start with no width
      {
        width: "100%", // Expand to full width
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: borderRef.current,
          start: "top 80%", // Trigger when 80% of the component is in view
          end: "top 50%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className="py-16 mx-4 relative lg:mx-12">
      {/* Animated Border */}
      <div
        ref={borderRef}
        className="absolute top-0 left-1/2 -translate-x-1/2 border-t border-pink-300 w-0"
      />

      <div className="max-w-7xl mx-auto flex flex-col items-start gap-4 lg:gap-16 lg:flex-row">
        <div className="mb-6 lg:mb-12 max-lg:w-full max-lg:text-center">
          <h2 className="text-2xl font-light text-pink-300  text-wrap leading-6 lg:max-w-[8rem] max-lg:text-center">
            {partner.title}
          </h2>
        </div>

        <div className="flex-1 grid grid-cols-4 gap-x-12 gap-y-16 mx-auto lg:max-w-xl lg:ml-auto">
          {partner.items.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity duration-300"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={60}
                height={60}
                className="max-w-[90px] h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
