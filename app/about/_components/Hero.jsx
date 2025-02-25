"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";

const images = [
  "/assets/images/pic1.webp",
  "/assets/images/pic2.webp",
  "/assets/images/pic3.webp",
  "/assets/images/pic4.webp",
  "/assets/images/pic5.webp",
]; 

const HeroSection = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [currentImage, setCurrentImage] = useState(images[0]);

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Change the image randomly
      setCurrentImage(images[Math.floor(Math.random() * images.length)]);
    };

    window.addEventListener("mousemove", updatePosition);
    return () => window.removeEventListener("mousemove", updatePosition);
  }, []);

  useEffect(() => {
    gsap.to(".floating-image", {
      x: position.x - 50,
      y: position.y - 50,
      duration: 5,
      ease: "power3.out",
    });
  }, [position]);

  return (
    <div className="relative w-full h-screen bg-red-500 overflow-hidden">
        <p>Hero SECTION</p>
      <motion.img
        src={currentImage}
        alt="Random Image"
        className="floating-image absolute w-32 h-32 object-cover rounded-lg pointer-events-none"
      />
    </div>
  );
}

export default HeroSection;