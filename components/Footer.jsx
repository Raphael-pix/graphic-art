"use client";

import Link from "next/link";
import React, { useEffect, useRef } from "react";
import SmileyFace from "./smiley";
import Promotion from "./Promotion";
import gsap from "gsap";

const Footer = () => {
  const sectionRef = useRef(null);

  const menuItems = [
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Blog", href: "/blog" },
  ];

  const socialLinks = [
    { label: "LinkedIn", href: "#" },
    { label: "Instagram", href: "#" },
  ];

  useEffect(() => {
    if (!sectionRef.current) return;
    gsap.to(document.body, {
      backgroundColor: "#f9a8d4", // Change to dark background
      color: "#111111",
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top +=200",
        end: "top top",
        scrub: true,
        onLeaveBack: () => {
          gsap.to(document.body, {
            backgroundColor: "#f9a8d4", // Original background
            color: "#000000", // Original text color
            duration: 1,
            ease: "power2.out",
          });
        },
      },
    });
  }, []);

  return (
    <footer
      ref={sectionRef}
      className="px-4 py-4 min-h-[80vh] flex flex-col lg:px-8"
    >
      <Promotion />
      <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col gap-6 items-start justify-between lg:flex-row">
        <div className="grid grid-col-1 md:grid-cols-2 gap-8 lg:gap-6">
          {/* Left Column - Explore */}
          <div className="flex items-start gap-6">
            <div className="uppercase text-xs tracking-wide text-gray-700">
              Explore
            </div>
            <nav>
              <ul className="space-y-1">
                {menuItems.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-3xl hover:opacity-70 transition-opacity"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Middle Column - Social */}
          <div className="flex items-start gap-6">
            <div className="uppercase text-xs tracking-wide text-gray-700">
              Stalk us
            </div>
            <nav>
              <ul className="space-y-1">
                {socialLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-3xl hover:opacity-70 transition-opacity"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
        {/* Right Column - Contact */}
        <div className="space-y-6">
          <div className="space-y-2 w-full lg:text-end">
            <div className="uppercase text-[10px] tracking-wide text-gray-700">
              Say Hello
            </div>
            <a
              href="mailto:hello@serious.business"
              className="text-xl hover:opacity-70 transition-opacity block"
            >
              hello@serious.business
            </a>
          </div>

          <div className="space-y-2 mt-12 w-full lg:text-end">
            <div className="uppercase text-[10px] tracking-wide text-gray-700">
              Exceptional Talent?
            </div>
            <a
              href="mailto:apply@serious.business"
              className="text-xl hover:opacity-70 transition-opacity block"
            >
              apply@serious.business
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto my-12 text-[10px] space-x-4 font-light lg:hidden">
        <a href="#" className="hover:opacity-70 transition-opacity max-lg:underline">
          IMPRINT
        </a>
        <a href="#" className="hover:opacity-70 transition-opacity max-lg:underline">
          PRIVACY
        </a>
        <a href="#" className="hover:opacity-70 transition-opacity max-lg:underline">
          PRESS
        </a>
      </div>
      {/* Bottom Bar */}
      <div className="max-w-7xl w-full lg:pt-12 lg:mt-12">
        <div className="text-[2rem] font-medium mb-2 text-center lg:text-[116px]">
          <span>SERIOUS</span>{" "}
          <span className="inline-block">
            <SmileyFace />
          </span>{" "}
          <span>BUSINESS</span>
        </div>
        <div className="flex justify-between items-center">
          <div className="text-[10px] font-light">SeriousBuisnessGmHb</div>
          <div className="text-[10px] font-light">
            München, Germany / Stockholm, Sweden
          </div>
          <div className="hidden text-[10px] space-x-4 font-light lg:block">
            <a href="#" className="hover:opacity-70 transition-opacity">
              IMPRINT
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity">
              PRIVACY
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity">
              PRESS
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
