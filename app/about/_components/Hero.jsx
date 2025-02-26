"use client";

import { useEffect, useState } from "react";
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

const HeroSection = () => {
  const [trail, setTrail] = useState([]);
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    let timeout;

    const updatePosition = (e) => {
      setIsMoving(true);
      setTrail((prevTrail) => [
        ...prevTrail.slice(-10), // Keep last 10 elements for a smooth trail
        {
          id: Math.random(),
          x: e.clientX,
          y: e.clientY,
          src: images[Math.floor(Math.random() * images.length)],
        },
      ]);

      clearTimeout(timeout);
      timeout = setTimeout(() => setIsMoving(false), 100); // Stop trail after inactivity
    };

    window.addEventListener("mousemove", updatePosition);
    return () => {
      window.removeEventListener("mousemove", updatePosition);
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    if (isMoving) {
      gsap.to(".trail-image", {
        opacity: 1,
        duration: 1,
      });
    } else {
      gsap.to(".trail-image", {
        opacity: 0,
        duration: 3,
      });
    }
  }, [isMoving]);

  return (
    <div className="absolute top-0 left-0 w-full h-screen">
      <div className="relative w-full h-full p-4 flex flex-col items-center overflow-hidden lg:p-8">
        <h1 className="text-[12vw] flex items-center gap-16 font-bold tracking-tight relative z-10 lg:text-[25vw] ">
          Est
          <div className="w-18 absolute top-[60%] left-[30%] translate-x-1/2 p-4">
            <Image
              src="/assets/images/logo-3.svg"
              width={18}
              height={18}
              alt="logo"
              className="w-16 h-16 object-contain"
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
        {trail.map(({ id, x, y, src }) => (
          <Image
            key={id}
            src={src}
            alt=""
            width={120}
            height={140}
            className="trail-image absolute w-56 h-full max-h-56 rounded-lg object-cover transition-opacity duration-500 ease-out"
            style={{
              left: x - 24,
              top: y - 24,
              opacity: isMoving ? 1 : 0,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
