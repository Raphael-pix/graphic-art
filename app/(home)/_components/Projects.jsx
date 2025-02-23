"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import AnimatedTitle from "@/components/animatedTitle";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { title: "Project One", image: "/assets/images/pic1.webp" },
  { title: "Project Two", image: "/assets/images/pic2.webp" },
  { title: "Project Three", image: "/assets/images/pic3.webp" },
  { title: "Project Four", image: "/assets/images/pic4.webp" },
];

export default function Projects() {
  const projectsRef = useRef([]);

  useEffect(() => {
    projectsRef.current.forEach((el, index) => {
      const direction = index % 2 === 0 ? -100 : 100; // Left (-100) or Right (100)

      gsap.fromTo(
        el,
        { x: direction, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%", // When 80% of the viewport enters
            end: "top 50%",
            scrub: 1,
          },
        }
      );
    });
  }, []);

  return (
    <section className="w-full py-4 text-black">
      <div className="w-full mb-12 flex items-center justify-center">
      <AnimatedTitle
        title="Europe's most aspiring <br /> startups and scaleups"
      />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto px-6">
        {projects.map((project, index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) projectsRef.current[index] = el;
            }}
            className="relative flex flex-col "
          >
            <div className="relative  max-h-[20rem] rounded-lg transition-transform" >
              <Image
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover rounded-lg"
                width={250}
                height={100}
              />
            </div>
            <div className="py-2 space-y-1">
              <p className="text-sm font-semibold">Rudy is my name </p>
              <p className="text-xs font-light">is he? </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
