import { CornerDownRight } from "lucide-react";
import React from "react";

const WhenSection = () => {
  const stages = [
    {
      title: "Sprint",
      description:
        "Sprints are 1-month projects designed to create a brand or website quickly and efficiently for early-stage startups",
    },
    {
      title: "Branding Projects",
      description:
        "Our best seller; a comprehensive brand package aimed at elevating your business to the next level. Our holisitic approach to branding, reflecting our core expertise.",
    },
    {
      title: "Subscription",
      description:
        "Subscriptions are our way of collaboraing long-term with clients, acting as their extended team to ensure brand consistency and growth.",
    },
    {
      title: "Venture",
      description:
        "Venture relationships invlove high-commitment where we invest our expertise and resources in exchange for shares.",
    },
  ];
  return (
    <section className="overflow-hidden min-h-screen p-8">
      <div className="flex flex-col gap-16 lg:flex-row">
        <div className="p-8 max-w-md">
          <h1 className="text-sm font-semibold mb-6">When?</h1>
          <p className="text-2xl font-serif">
            Post-seed, post-launch or getting ready for the next big step, we do
            branding for startups at any stage of the journey
          </p>
        </div>
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-x-8">
          {stages.map((stage) => (
            <div
              key={stage.title}
              className="group flex flex-col justify-between relative p-8 rounded-md hover:bg-primary-pink"
            >
              <div className="mb-2">
                <h1 className="text-3xl font-semibold mb-4">{stage.title}</h1>
                <p className="text-base">{stage.description}</p>
              </div>

              <div 
              className="w-full flex justify-end opacity-0 translate-x-10 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                <div className="w-8 h-8 rounded-full bg-neutral-white flex items-center justify-center">
                  <CornerDownRight size={16} color="#1E1E1E" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhenSection;
