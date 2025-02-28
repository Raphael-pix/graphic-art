"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import AnimatedButton from "@/components/animatedButton";
import { useRouter } from "next/navigation";

const servicesData = [
  {
    title: "Brand Strategy",
    description:
      "It's the core of your company's identity. It guides all business decisions, ensuring a consistent and impactful presence in the market.",
    services: [
      "Research & Insights",
      "Unique Ways",
      "Purpose, Mission, Vision",
      "Value Proposition",
      "Personality Traits",
      "Verbal Identity",
      "Naming",
    ],
    bgColor: "bg-purple-400",
  },
  {
    title: "Visual Identity",
    description:
      "The face of your brand. It creates a powerful first impression and communicates your business values effectively.",
    services: [
      "Logo & Iconography",
      "Color & Typography",
      "Brand Guidelines",
      "Photography Style",
      "Illustration Style",
    ],
    bgColor: "bg-white",
  },
  {
    title: "Marketing Strategy",
    description:
      "A strong marketing strategy ensures your brand reaches the right audience, builds loyalty, and increases conversions.",
    services: [
      "Market Research",
      "Target Audience",
      "Social Media Strategy",
      "Content Marketing",
      "Advertising Campaigns",
    ],
    bgColor: "bg-yellow-400",
  },
  {
    title: "Digital Experience",
    description:
      "From websites to mobile apps, digital experience shapes how users interact with your brand in the online world.",
    services: [
      "Website Design",
      "App Development",
      "UX/UI Design",
      "E-commerce Solutions",
      "SEO Optimization",
    ],
    bgColor: "bg-black",
  },
];

const Services = () => {
  const router = useRouter();

  const cardsRef = useRef([]);
  const containerRef = useRef(null);
  const cardContinerRef = useRef(null);
  const animationRef = useRef(null);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const updateScreenSize = () => {
      const isLarge = window.innerWidth >= 1024;
      setIsLargeScreen(isLarge);
    };

    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);

    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  useEffect(() => {
    if (isLargeScreen) {
      animationRef.current = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "-=100 top",
          end: "end 25%",
          scrub: 5,
        },
      });

      servicesData.forEach((_, i) => {
        animationRef.current.to(cardsRef.current[i], {
          yPercent: -65 * i,
          duration: 2,
          ease: "none",
          stagger: 10,
        });
      });
    } else {
      animationRef.current?.kill(); // Kill GSAP animation on small screens
    }
    return () => animationRef.current?.kill();
  }, [isLargeScreen]);

  return (
    <div ref={containerRef} className="overflow-hidden py-4">
      {/* Services Header */}
      <h2 className="text-3xl font-medium p-4 lg:p-6">Services</h2>
      <div
        ref={cardContinerRef}
        className="relative z-50 overflow-hidden lg:max-h-[42rem]"
      >
        {servicesData.map((item, i) => (
          <div
            key={item.title}
            ref={(el) => (cardsRef.current[i] = el)}
            className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4 py-6 font-standard lg:max-h-96 lg:px-8  ${
              item.bgColor === "bg-black"
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
      <div className="w-full p-6 my-6 flex items-center justify-center z-0 lg:my-12">
        <AnimatedButton
          title={"Our Approach"}
          containerStyles="bg-white"
          onClick={() => router.push("/services")}
        />
      </div>
    </div>
  );
};

export default Services;
