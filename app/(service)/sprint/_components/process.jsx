"use client";
import React, { useState, useEffect } from "react";
import gsap from "gsap";

const SprintProcessSection = () => {
  const steps = [
    { id: 1, title: "Kick-off", week: "Week 1", phase: "Discovery", description: "We start with analysing the questionnaire to collect additional questions and topics for our kick-off workshop and design exploration." },
    { id: 2, title: "Decide direction", week: "Week 2", phase: "Visual identity", description: "We use the first week to explore 2 visual directions for the brand. The second week we refine one direction based on your feedback." },
    { id: 3, title: "Approve identity", week: "Week 3", phase: "Landing page", description: "During week 3, we apply the visual direction to make the landing page breathe your new identity." },
    { id: 4, title: "Decide on website direction", week: "Week 4", phase: "Applications", description: "Lastly, we ensure all deliverables are neatly packed in folders along with brand guidelines for working with your new brand." },
    { id: 5, title: "Final delivery", week: "", phase: "", description: "" },
  ];

  const [activeStep, setActiveStep] = useState(1);

  useEffect(() => {
    gsap.to(".progress-indicator", {
      x: `${(activeStep - 1) * 25}%`, // Moves dot along the timeline
      duration: 0.8,
      ease: "power2.out",
    });
  }, [activeStep]);

  return (
    <section className="w-full min-h-screen text-neutral-black py-16">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-12 text-center">
          The Sprint Process
        </h2>

        {/* Timeline */}
        <div className="relative w-full flex justify-between items-center mb-12">
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-neutral-400"></div>
          
          {steps.map((step, index) => (
            <div key={step.id} className="relative text-center w-1/5">
              <button
                onMouseEnter={() => setActiveStep(step.id)}
                className={`px-3 py-2 text-sm md:text-base font-medium border rounded-full bg-white shadow-md ${
                  activeStep === step.id ? "border-black" : "border-gray-300"
                }`}
              >
                {step.title}
              </button>
            </div>
          ))}

          {/* Animated Progress Dot */}
          <div className="absolute progress-indicator w-4 h-4 bg-pink-600 rounded-full top-1/2 transform -translate-y-1/2"></div>
        </div>

        {/* Step Details */}
        <div className="flex flex-col lg:flex-row gap-10 text-center lg:text-left">
          {steps
            .filter((step) => step.week) // Exclude final step from detailed view
            .map((step) => (
              <div key={step.id} className="lg:w-1/4">
                <h3 className="text-lg md:text-xl font-semibold">{step.week}</h3>
                <h4 className="text-2xl md:text-3xl font-bold">{step.phase}</h4>
                <p className="text-sm md:text-base mt-2 text-gray-700">{step.description}</p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default SprintProcessSection;
