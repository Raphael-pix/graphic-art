import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const component = useRef();
  const slider = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".panel");

      // Animation for horizontal scrolling between panels
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          end: () => "+=" + slider.current.offsetWidth,
        },
      });

      panels.forEach((panel) => {
        const bg = panel.querySelector(".bg-image");
        const textContainer = panel.querySelector(".text-content");

        // Background image animation (fills the container on scroll)
        gsap.fromTo(
          bg,
          { width: "40%", height: "80%", left: "60%" }, // Starts small
          {
            width: "100%", // Fills the container
            height: "100%",
            left: "0%", // Moves to the left
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: panel,
              start: "top center",
              end: "bottom top", // End when the bottom of the panel reaches the top
              scrub: true,
              markers: false, // Optional, for debugging
            },
          }
        );

        // Text animation (moves from left to right)
        gsap.fromTo(
          textContainer,
          { x: "-40%", opacity: 0 },
          {
            x: "0%", // Moves text to its original position
            opacity: 1,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: panel,
              start: "top center", // Start when the top of the panel reaches the center
              end: "bottom top", // End when the bottom of the panel reaches the top
              scrub: true,
              markers: false, // Optional, for debugging
            },
          }
        );
      });
    }, component);

    return () => ctx.revert();
  });

  return (
    <div id="projects" ref={component}>
      <div ref={slider} className="scene-container flex overflow-x-hidden">
        {[ 
          {
            title: "Digital Dreams",
            description:
              "A mesmerizing exploration of digital art and neural networks, creating dreamlike landscapes that blur the line between reality and imagination.",
            image: "img/project-1.jpg",
          },
          {
            title: "Urban Echoes",
            description:
              "A striking series of urban photography capturing the hidden rhythms and patterns of city life through long exposure techniques.",
            image: "img/project-2.jpg",
          },
          {
            title: "Nature's Symphony",
            description:
              "An immersive installation combining organic materials with interactive sound design, responding to viewer movement and environmental changes.",
            image: "img/project-3.jpg",
          },
          {
            title: "Quantum Reflections",
            description:
              "A series of holographic sculptures exploring the intersection of quantum physics and visual art, creating impossible geometries in space.",
            image: "img/project-4.jpg",
          },
        ].map((project, index) => (
          <div key={index} className="panel relative flex h-screen w-full items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div
              className="bg-image absolute left-0 top-0 h-full w-full transition-all duration-700"
              style={{ 
                backgroundImage: `url(${project.image})`, 
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            />

            {/* Text Content */}
            <div className="text-content relative z-10 max-w-2xl rounded-lg bg-black/50 p-12 text-white">
              <h2 className="mb-6 text-5xl font-bold">{project.title}</h2>
              <p className="text-xl">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
