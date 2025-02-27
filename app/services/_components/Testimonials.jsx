"use client";

import { useState, useEffect, useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import gsap from "gsap";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    imageUrl: "/assets/images/pic1.webp",
    name: "Kelly Lübbers",
    title: "Head Of Marketing",
    text: "Serious Business helped us bring our brand perception to a whole new level. At first the team challenged us to simplify our company’s narrative to then provide us with a new web and corporate design that we feel confident with that fits to our values and our market.",
  },
  {
    id: 2,
    imageUrl: "/assets/images/pic4.webp",
    name: "Alex Johnson",
    title: "CEO, TechCorp",
    text: "Graphiq helped us elevate our brand beyond expectations. Their team is exceptional at what they do!",
  },
  {
    id: 3,
    imageUrl: "/assets/images/pic3.webp",
    name: "Samantha Lee",
    title: "Marketing Director, StartupX",
    text: "The branding and storytelling expertise at Graphiq are unparalleled. They truly bring brands to life.",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const nameRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
    );
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.6, ease: "power2.out" }
    );
    gsap.fromTo(
      nameRef.current,
      { opacity: 0, x: -10 },
      { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" }
    );
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, x: 10 },
      { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" }
    );
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="px-6 py-12 lg:px-24 lg:py-24">
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        {/* Left Section */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:max-w-xs">
          {/* Header */}
          <div className="w-full flex justify-between items-center border-b pb-2 border-neutral-light-grey">
            <h1 className="text-xs font-medium uppercase tracking-wide">
              Testimonials
            </h1>
            <span className="text-xs text-neutral-grey">
              {String(currentIndex + 1).padStart(2, "0")} /{" "}
              {String(testimonials.length).padStart(2, "0")}
            </span>
          </div>

          {/* Profile Image */}
          <div className="text-center w-full flex flex-col items-center">
            <div
              ref={imageRef}
              className="w-24 h-24 rounded-full overflow-hidden mt-6"
            >
              <Image
                src={testimonials[currentIndex].imageUrl}
                alt={testimonials[currentIndex].name}
                width={80}
                height={80}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Name & Title */}
            <p ref={nameRef} className="text-base font-semibold mt-4">
              {testimonials[currentIndex].name}
            </p>
            <p ref={titleRef} className="text-sm">
              {testimonials[currentIndex].title}
            </p>

            {/* Navigation */}
            <div className="flex gap-4 mt-4 w-full">
              <button
                onClick={handlePrev}
                className="p-2 rounded-full border bg-neutral-white border-neutral-black transition"
                aria-label="Previous testimonial"
              >
                <ArrowLeft size={16} />
              </button>
              <button
                onClick={handleNext}
                className="p-2 rounded-full border bg-neutral-white border-neutral-black transition"
                aria-label="Next testimonial"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Right Section - Testimonial Text */}
        <div className="w-full lg:w-2/3">
          <p
            ref={textRef}
            className="text-6xl lg:text-3xl font-light leading-relaxed font-serif"
          >
            “{testimonials[currentIndex].text}”
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
