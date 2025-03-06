"use client"

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

const TeamMembersSection = () => {
  const sectionRef = useRef(null);
  const teamItemsRef = useRef([]);
  const imageContainerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Register ScrollTrigger plugin
  if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  }

  const teamMembers = [
    { name: "Porfirio Lopez", title: "Co-founder & Art Director", description: "Having his good taste is a blessing and a burden", image: "/assets/images/pic1.webp" },
    { name: "Tobias Rehnvall", title: "Design Lead", description: "Proud Bunny rescuer", image: "/assets/images/pic2.webp" },
    { name: "Maria Johnson", title: "UX Director", description: "Creates magic with pixels and empathy", image: "/assets/images/pic3.webp" },
    { name: "Alex Chen", title: "Development Lead", description: "Writes code that even poets would appreciate", image: "/assets/images/pic4.webp" },
    { name: "Priya Sharma", title: "Strategy Director", description: "Turns business challenges into creative opportunities", image: "/assets/images/pic6.webp" }
  ];

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);

      // Kill all existing ScrollTriggers
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());

      // Re-run animations if not mobile
      if (!mobile) {
        initGSAP();
      }
    };

    const initGSAP = () => {
      if (!sectionRef.current || !imageContainerRef.current) return;

      // Initial setup - set all names to inactive state
      gsap.set(teamItemsRef.current.map(ref => ref?.querySelector('h3')), { color: '#d6d3d1' });

      // Create a timeline for the fixed image container
      gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          pin: imageContainerRef.current,
          pinSpacing: false,
        }
      });

      // Create ScrollTrigger for each team member
      teamItemsRef.current.forEach((item, index) => {
        const nameElement = item?.querySelector('h3');

        ScrollTrigger.create({
          trigger: item,
          start: "top center",
          end: "bottom center",
          onEnter: () => updateActiveImage(index, nameElement, true),
          onLeave: () => updateActiveImage(index, nameElement, false),
          onEnterBack: () => updateActiveImage(index, nameElement, true),
          onLeaveBack: () => updateActiveImage(index, nameElement, false),
        });
      });
    };

    const updateActiveImage = (index, nameElement, isActive) => {
      if (!imageContainerRef.current) return;
      const imageWrapper = imageContainerRef.current.querySelector('.image-wrapper');
      const images = imageWrapper?.querySelectorAll('.team-image');

      if (nameElement) {
        gsap.to(nameElement, {
          color: isActive ? '#000000' : '#d6d3d1',
          duration: 0.4,
          ease: 'power2.out'
        });
      }

      if (images?.length) {
        gsap.to(imageWrapper, {
          y: `${-index * 100}%`,
          duration: 0.6,
          ease: 'power2.inOut'
        });
      }
    };

    // Run on mount
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    return () => {
      // Cleanup on unmount
      window.removeEventListener('resize', handleResize);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen py-20 px-6 md:px-12 relative" ref={sectionRef}>
      <h2 className="text-2xl font-medium mb-16">Our formula: a global perspective</h2>
      
      <div className="space-y-32">
        {teamMembers.map((member, index) => (
          <div 
            key={index}
            ref={el => teamItemsRef.current[index] = el}
            className="relative flex flex-col md:flex-row items-center md:items-start"
          >
            <div className="flex-1 pr-8">
              <h3 className="text-5xl text-neutral-black md:text-6xl font-light transition-colors duration-300">
                {member.name}
              </h3>
              <div className="mt-2 text-neutral-black lg:text-stone-500">
                <span className="font-light">{member.title}, </span>
                <span className="italic">{member.description}</span>
              </div>
            </div>
            
            {/* Show images under the name on mobile */}
            {isMobile && (
              <div className="mt-4 w-full max-w-xs">
                <Image
                  src={member.image} 
                  alt={member.name} 
                  width={300}
                  height={300}
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
            )}
          </div>
        ))}
      </div>
      
      {/* Fixed image container (only for larger screens) */}
      {!isMobile && (
        <div ref={imageContainerRef} className="hidden md:block w-64 h-72 absolute top-32 right-12 overflow-hidden rounded-lg">
          <div className="image-wrapper w-full h-full relative rounded-lg">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-image w-full h-full absolute rounded-lg" style={{ top: `${index * 100}%` }}>
                <Image src={member.image} alt={member.name} width={120} height={120} className="w-full h-full object-cover rounded-lg" />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamMembersSection;
