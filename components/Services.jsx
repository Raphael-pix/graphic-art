"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimatedButton from "@/components/animatedButton";
import { usePathname, useRouter } from "next/navigation";
import { servicesData } from "@/constants";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const router = useRouter();
  const cardsRef = useRef([]);
  const pathname = usePathname();

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      // Only run animations on screens larger than 1024px (lg breakpoint)
      cardsRef.current.forEach((card, i) => {
        if (!card) return;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom center",
            scrub: true,
          },
        });

        const affectedCards = cardsRef.current.slice(i + 1);
        tl.to(affectedCards, {
          yPercent: -50 * (i + 1),
          duration: 2,
          ease: "none",
        });
      });

      return () => ScrollTrigger.getAll().forEach((st) => st.kill()); // Cleanup on unmount
    });

    return () => mm.revert();
  }, []);

  return (
    <div className="py-4">
      <h2 className="text-3xl font-medium p-4 lg:p-6">Services</h2>
      <div className="relative overflow-hidden lg:h-[60rem]">
        <div className="relative z-50">
          {servicesData.map((item, i) => (
            <div
              key={item.title}
              ref={(el) => (cardsRef.current[i] = el)}
              className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4 py-6 font-standard lg:max-h-96 lg:px-8 ${
                item.bgColor === "bg-neutral-black"
                  ? "text-neutral-white"
                  : "text-neutral-black"
              } ${item.bgColor}`}
              style={{
                zIndex: servicesData.length - i, // Ensures proper stacking
              }}
            >
              {/* Left Column */}
              <div className="space-y-6 lg:space-y-12">
                <h1 className="text-6xl font-bold leading-tight lg:text-6xl">
                  {item.title}
                </h1>
                <div className="flex flex-col w-full items-start justify-between gap-8 lg:flex-row">
                  <p className="text-2xl max-w-sm leading-7">
                    {item.description}
                  </p>
                  {/* Services List */}
                  <div className="leading-5 text-base lg:text-sm">
                    {item.services.map((service) => (
                      <p key={service}>{service}</p>
                    ))}
                  </div>
                </div>
              </div>
              {/* Right Column */}
              <div className="h-full w-full">
                <div className="h-full rounded-xl mx-auto lg:ml-auto lg:w-3/4">
                  <img
                    src="/assets/images/gallery.jpg"
                    alt="Company Logo"
                    className="w-full h-full rounded-xl object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {pathname === "/" && (
        <div className="w-full p-6 flex items-center justify-center z-0">
          <AnimatedButton
            title={"Our Approach"}
            containerStyles="bg-white"
            onClick={() => router.push("/services")}
          />
        </div>
      )}
    </div>
  );
};

export default Services;
