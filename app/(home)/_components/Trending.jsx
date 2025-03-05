"use client";

import { ArrowLeft } from "lucide-react";
import Partners from "./Partners";
import { partnerItems } from "@/constants";
import Button from "@/components/button";
import TrendingCard from "@/components/trendingCard";


const trendingItems = [
  {
    image: "/assets/images/pic6.webp",
    title: "Why is branding a must for Startup Success?",
    category: "Knowledge",
  },
  {
    image: "/assets/images/pic8.webp",
    title: "The best tool to Kick-Off Any Workshop",
    category: "Knowledge",
  },
  {
    image: "/assets/images/pic10.webp",
    title: "Fintech startups: changing the way finance looks",
    category: "Knowledge",
  },
];

export default function Trending({trendingRef}) {
  return (
    <div ref={trendingRef} className="transition-colors duration-500 overflow-hidden">
      <section className=" flex flex-col items-center justify-center px-4 lg:min-h-screen lg:px-12">
        <div className="flex justify-between items-center mb-8 w-full py-4">
          <h1 className="text-4xl font-medium lg:text-6xl">What's trending</h1>
          <div className="hidden items-center lg:flex">
            <Button
              id="menu-button"
              title="What's trending"
              containerClass="flex items-center justify-center px-7 py-3"
            />
            <Button
              id="arrow-button"
              title={<ArrowLeft size={16} color="#111827" />}
              containerClass="flex items-center justify-center p-2  rounded-full"
            />
          </div>
        </div>
        <div className="relative w-full overflow-hidden overflow-x-scroll hidden-scrollbar flex items-center gap-6">
          {trendingItems.map((item, index) => (
            <TrendingCard
              key={index}
              image={item.image}
              title={item.title}
              category={item.category}
              isSmaller={index === 1}
              index={index}
            />
          ))}
        </div>
        <div className="flex items-center my-8 lg:hidden">
          <Button
            id="menu-button"
            title="What's trending"
            containerClass="flex items-center justify-center px-7 py-3"
          />
          <Button
            id="arrow-button"
            title={<ArrowLeft size={16} color="#111827" />}
            containerClass="flex items-center justify-center p-2  rounded-full"
          />
        </div>
      </section>
      {partnerItems.map((item) => (
        <Partners key={item.title} partner={item} />
      ))}
    </div>
  );
}
