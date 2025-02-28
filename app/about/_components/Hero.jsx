"use client";
import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";

const images = [
  "/assets/images/pic1.webp",
  "/assets/images/pic2.webp",
  "/assets/images/pic3.webp",
  "/assets/images/pic4.webp",
  "/assets/images/pic5.webp",
  "/assets/images/pic6.webp",
  "/assets/images/pic7.webp",
  "/assets/images/pic8.webp",
];

// Smaller aspect ratios for images
const aspectRatios = [
  { width: 180, height: 120 },  // 3:2 landscape
  { width: 150, height: 210 },  // 5:7 portrait
  { width: 160, height: 160 },  // 1:1 square
  { width: 200, height: 125 },  // 16:10 wide
  { width: 140, height: 210 },  // 2:3 tall portrait
];

const HeroSection = () => {
  const [trail, setTrail] = useState([]);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const timeoutRef = useRef([]);
  const maxTrailLength = 10; // Slightly increased for smoother flow
  const throttleRef = useRef(false);

  useEffect(() => {
    // Clear all timeouts on unmount
    return () => {
      timeoutRef.current.forEach(timer => clearTimeout(timer));
    };
  }, []);

  useEffect(() => {
    // Track cursor position with smoother updates
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
      
      // Throttle image creation for better performance and smoother experience
      if (!throttleRef.current && Math.random() > 0.75) {
        throttleRef.current = true;
        setTimeout(() => {
          throttleRef.current = false;
        }, 100);
        
        // Get random aspect ratio
        const aspectRatio = aspectRatios[Math.floor(Math.random() * aspectRatios.length)];
        
        const newImage = {
          id: Date.now(),
          x: e.clientX,
          y: e.clientY,
          src: images[Math.floor(Math.random() * images.length)],
          width: aspectRatio.width,
          height: aspectRatio.height,
          rotation: (Math.random() - 0.5) * 10, // Reduced rotation for subtlety
        };
        
        // Add new image to trail
        setTrail(prevTrail => {
          // If we already have the maximum number of images,
          // schedule the oldest one for removal
          if (prevTrail.length >= maxTrailLength) {
            const oldestImage = prevTrail[0];
            removeTrailImage(oldestImage.id);
          }
          
          return [...prevTrail, newImage];
        });
        
        // Smoother animation with better easing
        gsap.fromTo(
          `.image-${newImage.id}`,
          { 
            opacity: 0,
            scale: 0.85,
          },
          { 
            opacity: 1,
            scale: 1,
            duration: 0.4,
            ease: "power2.out"
          }
        );
        
        // Schedule this image for eventual removal (FIFO)
        const timeout = setTimeout(() => {
          removeTrailImage(newImage.id);
        }, 3500); // Slightly faster for better flow
        
        timeoutRef.current.push(timeout);
      }
    };
    
    // Function to remove an image with animation
    const removeTrailImage = (id) => {
      gsap.to(`.image-${id}`, {
        opacity: 0,
        scale: 0.9,
        duration: 0.6,
        ease: "power1.inOut",
        onComplete: () => {
          setTrail(prevTrail => prevTrail.filter(img => img.id !== id));
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-screen">
      <div className="relative w-full h-full p-4 flex flex-col items-center overflow-hidden lg:p-8">
        <h1 className="text-[12vw] flex items-center gap-16 font-bold tracking-tight relative lg:text-[25vw]">
          Est
          <div className="w-18 absolute top-[60%] left-[30%] translate-x-1/2 p-4">
            <Image
              src="/assets/images/logo-3.svg"
              width={18}
              height={18}
              alt="logo"
              className="w-8 h-8 lg:w-16 lg:h-16 object-contain"
            />
          </div>
          <span className="inline-block">2015</span>
        </h1>
        
        <div className="p-6 mx-auto text-center">
          <p className="text-lg font-cabin font-semibold lg:text-2xl">
            Crafting the future,
          </p>
          <p className="text-lg font-serif lg:text-2xl">
            while having serious fun
          </p>
        </div>
        
        {/* Image trail */}
        {trail.map((img) => (
          <div
            key={img.id}
            className={`image-${img.id} absolute pointer-events-none z-0`}
            style={{
              left: img.x - img.width / 2,
              top: img.y - img.height / 2,
              transform: `rotate(${img.rotation}deg)`,
              willChange: "opacity, transform", // Performance optimization
            }}
          >
            <Image
              src={img.src}
              alt=""
              width={img.width}
              height={img.height}
              className="rounded-lg object-cover"
              style={{
                width: `${img.width}px`,
                height: `${img.height}px`,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;