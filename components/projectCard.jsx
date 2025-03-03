"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const ProjectCard = ({ project, index }) => {
  const projectsRef = useRef([]);
  const pathname = usePathname(); 
  const isHomePage = pathname === "/";

  useEffect(() => {
    if (!projectsRef.current) return;

    projectsRef.current.forEach((el, index) => {
      const direction = index % 2 === 0 ? -90 : 90; // Left (-90) or Right (90)

      if (!isHomePage && index < 2) {
        // If NOT home page & first two items, animate on page load
        gsap.fromTo(
          el,
          { x: direction, y: 90, opacity: 0, transformOrigin: "center center" },
          {
            x: 0,
            y: 0,
            opacity: 1,
            duration: 1.5,
            ease: "power3.inOut",
          }
        );
      } else {
        // Default scroll-triggered animation
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
              start: "top 95%",
              end: "top 40%",
              scrub: 1,
            },
          }
        );
      }
    });
  }, [projectsRef, isHomePage]);


  return (
    <div
      ref={(el) => {
        if (el) projectsRef.current[index] = el;
      }}
      className="group relative flex flex-col"
    >
      <div className="relative max-h-[20rem] rounded-lg transition-transform">
        <Image
          src={project.mainImage}
          alt={project.title}
          className="w-full h-full object-cover rounded-lg"
          width={250}
          height={100}
        />
      </div>
      <div className="py-2 space-y-1">
        <p
          className="relative w-fit text-base font-semibold
    after:content-[''] after:absolute after:left-0 after:bottom-[-2px] 
    after:w-0 after:h-[2px] after:bg-[var(--text-color)] after:transition-all
    after:duration-700 group-hover:after:w-full"
        >
          {project.title}{" "}
        </p>
        <p className="text-sm font-light">{project.description} </p>
      </div>
    </div>
  );
};

export default ProjectCard;
