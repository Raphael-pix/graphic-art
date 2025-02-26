import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

const TeamMembersSection = () => {
  const sectionRef = useRef(null);
  const teamItemsRef = useRef([]);
  const imageContainerRef = useRef(null);
  
  // Register ScrollTrigger plugin
  if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  }

  const teamMembers = [
    {
      name: "Porfirio Lopez",
      title: "Co-founder & Art Director",
      description: "Having his good taste is a blessing and a burden",
      image: "/assets/images/pic1.webp"
    },
    {
      name: "Tobias Rehnvall",
      title: "Design Lead",
      description: "Proud Bunny rescuer",
      image: "/assets/images/pic2.webp"
    },
    {
      name: "Maria Johnson",
      title: "UX Director",
      description: "Creates magic with pixels and empathy",
      image: "/assets/images/pic3.webp"
    },
    {
      name: "Alex Chen",
      title: "Development Lead",
      description: "Writes code that even poets would appreciate",
      image: "/assets/images/pic4.webp"
    },
    {
      name: "Priya Sharma",
      title: "Strategy Director",
      description: "Turns business challenges into creative opportunities",
      image: "/assets/images/pic6.webp"
    }
  ];

  useEffect(() => {
    // Skip if we're in SSR or refs aren't ready
    if (typeof window === 'undefined' || !sectionRef.current || !imageContainerRef.current) return;

    // Initial setup - set all names to inactive state
    gsap.set(teamItemsRef.current.map(ref => ref.querySelector('h3')), {
      color: '#d6d3d1' // stone-300 equivalent
    });
    
    // Create a timeline for the fixed image container
    const tl = gsap.timeline({
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
      const nameElement = item.querySelector('h3');
      
      // Create scroll trigger for each team member
      ScrollTrigger.create({
        trigger: item,
        start: "top center",
        end: "bottom center",
        markers: false,
        onEnter: () => {
          // Animate name to active state
          gsap.to(nameElement, {
            color: '#000000',
            duration: 0.4,
            ease: 'power2.out'
          });
          
          // Update the active image
          updateActiveImage(index);
        },
        onLeave: () => {
          // Animate name to inactive state
          gsap.to(nameElement, {
            color: '#d6d3d1',
            duration: 0.4,
            ease: 'power2.out'
          });
        },
        onEnterBack: () => {
          // Same as onEnter for scrolling back up
          gsap.to(nameElement, {
            color: '#000000',
            duration: 0.4,
            ease: 'power2.out'
          });
          
          // Update the active image
          updateActiveImage(index);
        },
        onLeaveBack: () => {
          // Same as onLeave for scrolling back up
          gsap.to(nameElement, {
            color: '#d6d3d1',
            duration: 0.4,
            ease: 'power2.out'
          });
        }
      });
    });
    
    // Function to update the active image
    function updateActiveImage(index) {
      // Hide all images
      const imageWrapper = imageContainerRef.current.querySelector('.image-wrapper');
      const images = imageWrapper.querySelectorAll('.team-image');
      
      // Calculate the new position
      const position = -index * 100; // Each image is 100% height
      
      // Animate the wrapper position
      gsap.to(imageWrapper, {
        y: `${position}%`,
        duration: 0.6,
        ease: 'power2.inOut'
      });
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Update refs when team members change
  useEffect(() => {
    teamItemsRef.current = teamItemsRef.current.slice(0, teamMembers.length);
  }, [teamMembers]);

  return (
    <div className="min-h-screen py-20 px-6 md:px-12 relative" ref={sectionRef}>
      <h2 className="text-2xl font-medium mb-16">Our formula: a global perspective</h2>
      
      <div className="space-y-32">
        {teamMembers.map((member, index) => (
          <div 
            key={index}
            ref={el => teamItemsRef.current[index] = el}
            className="relative flex items-center"
          >
            <div className="flex-1 pr-8">
              <h3 className="text-5xl md:text-6xl font-light transition-colors duration-300">
                {member.name}
              </h3>
              <div className="mt-2 text-stone-500">
                <span className="font-light">{member.title}, </span>
                <span className="italic">{member.description}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Fixed image container that will be pinned */}
      <div 
        ref={imageContainerRef}
        className="hidden md:block w-64 h-72 absolute top-32 right-12 overflow-hidden rounded-lg"
      >
        <div className="image-wrapper w-full h-full relative rounded-lg">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="team-image w-full h-full absolute rounded-lg"
              style={{ top: `${index * 100}%` }}
            >
              <Image
                src={member.image} 
                alt={member.name} 
                width={120}
                height={120}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamMembersSection;