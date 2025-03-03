"use client";

import gsap from "gsap";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

const BlogCard = ({ project, index }) => {
  const projectsRef = useRef([]);

  useEffect(() => {
    if (!projectsRef.current) return;

    projectsRef.current.forEach((el, index) => {
        let direction = 0;
        const columnIndex = parseInt(el.getAttribute("data-column"), 10) || 0;

        if(columnIndex === 0){
            direction = -180;
        }else if( columnIndex === 1) {
            direction = 0;
        }else if( columnIndex === 2) {
            direction = 180;
        }
      
      if (index <= 2) {
        gsap.fromTo(
          el,
          { x: direction, y: 180, opacity: 0, transformOrigin: "center center" },
          {
            x: 0,
            y: 0,
            opacity: 1,
            duration: 1.5,
            ease: "power3.inOut",
          }
        );
      } else {
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
              start: "top 80%",
              end: "top center",
              scrub: 1,
            },
          }
        );
      }
    });
  }, [projectsRef]);

  return (
    <div
      ref={(el) => {
        if (el) projectsRef.current[index] = el;
      }}
      className="group relative flex flex-col"
      data-column={index % 3}
    >
      <div className="relative min-h-[14rem] rounded-lg transition-transform">
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
    after:duration-700 group-hover:after:w-full lg:text-lg"
        >
          {project.name} | {project.title}{" "}
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
