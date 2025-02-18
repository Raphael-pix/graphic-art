import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';

const IntroSequence = ({ onComplete }) => {
  const [visibleLetters, setVisibleLetters] = useState(0);
  const companyName = "GRAPHIQ ART";
  const preloaderRef = useRef(null);

  // Handle preloader text animation
  useEffect(() => {
    if (visibleLetters < companyName.length) {
      const timeout = setTimeout(() => {
        setVisibleLetters(prev => prev + 1);
      }, 200);
      return () => clearTimeout(timeout);
    } else {
      // When preloader text is complete, trigger transition
      const timeout = setTimeout(() => {
        if (onComplete) {
          onComplete();  // Trigger the onComplete callback after animation finishes
        }
      }, 1000); // Wait a moment after text completes
      return () => clearTimeout(timeout);
    }
  }, [visibleLetters, onComplete]);

  // Handle smooth fade-out when the preloader finishes
  useEffect(() => {
    if (visibleLetters === companyName.length) {
      gsap.to(preloaderRef.current, {
        opacity: 0,
        duration: 1,
        delay: 0.5, // Wait a bit before fading out
        onComplete: () => {
          if (preloaderRef.current) {
            preloaderRef.current.style.display = 'none';
          }
        },
      });
    }
  }, [visibleLetters]);

  return (
    <>
      {/* Preloader */}
      <div 
        ref={preloaderRef}
        className="fixed inset-0 z-[600] flex items-center justify-center overflow-x-hidden bg-yellow-300"
      >
        <div className="flex space-x-1">
          {companyName.split('').map((letter, index) => (
            <span
              key={index}
              className={`text-4xl font-bold text-gray-900 opacity-0 ${index < visibleLetters ? 'animate-bounce opacity-100' : ''}`}
              style={{
                animationDelay: `${index * 0.1}s`,
                animationDuration: '1s'
              }}
            >
              {letter}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default IntroSequence;
