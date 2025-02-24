"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import AnimatedTitle from "@/components/animatedTitle";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { 
    name: "Rudy Capital",
    title: "Turning crypto complexity into clarity", 
    description:"startegy - visual identity - website",
    image: "/assets/images/pic1.webp" 
  },
  { 
    name: "Nola",
    title: "Beauty and bullsh*t I dont mix", 
    description:"startegy - visual identity - website",
    image: "/assets/images/pic2.webp" 
  },
  { 
    name: "Otterspace",
    title: "Unleashing the power of communities", 
    description:"startegy - visual identity - website", 
    image: "/assets/images/pic3.webp" 
  },
  { 
    name: "Quivo",
    title: "Logistics made simple", 
    description:"startegy - visual identity - website", 
    image: "/assets/images/pic4.webp" 
  },
  { 
    name: "Yuri",
    title: "Biotech in space for better life on earth", 
    description:"startegy - visual identity - website", 
    image: "/assets/images/pic8.webp" 
  },
  { 
    name: "Ascon systems",
    title: "Re-imagining process automation", 
    description:"startegy - visual identity - website", 
    image: "/assets/images/pic6.webp" 
  },
];

export default function Projects() {
  const projectsRef = useRef([]);

  useEffect(() => {
    projectsRef.current.forEach((el, index) => {
      const direction =  index % 2 === 0 ? -90 : 90; // Left (-100) or Right (100)
      const rotation = index % 2 === 0 ? -90 : 90; // Left (-100) or Right (100)

      gsap.fromTo(
        el,
        { 
          x:direction,
          y:90,
          opacity: 0, 
          transformOrigin: "center center",
        },
        {
          x:0,
          y:0,
          opacity: 1,
          duration: 1.5,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: el,
            start: "top 80%", // When 80% of the viewport enters
            end: "top 10%",
            scrub: 1,
          },
        }
      );
    });
  }, []);

  return (
    <section className="w-full py-4">
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
            className="group relative flex flex-col"
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
              <p 
              className="relative w-fit text-base font-semibold
              after:content-[''] after:absolute after:left-0 after:bottom-[-2px] 
              after:w-0 after:h-[2px] after:bg-[var(--text-color)] after:transition-all
              after:duration-700 group-hover:after:w-full"
              >{project.name} | {project.title} </p>
              <p className="text-sm font-light">{project.description} </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
