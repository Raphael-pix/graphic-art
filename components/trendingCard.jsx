import React from "react";

const TrendingCard = ({ image, title, category, isSmaller }) => (
  <div 
    className={`relative overflow-hidden border-b border-pink-300 group cursor-pointer max-lg:shrink-0 max-lg:flex-nowrap ${isSmaller ? "h-[280px] w-full" : "max-lg:w-fit"}`}>
    <div className={`aspect-video overflow-hidden rounded-lg ${isSmaller ? "h-[180px] w-full" : ""}`}>
      <img 
        src={image} 
        alt={title}
        className="w-full h-full object-cover rounded-lg"
      />
    </div>
    <div className="py-2">
    <h3 className="relative w-fit text-pink-300 text-base font-medium mb-6 
        after:content-[''] after:absolute after:left-0 after:bottom-[-2px] 
        after:w-0 after:h-[2px] after:bg-pink-300 after:transition-all 
        after:duration-700 group-hover:after:w-full">
        {title}
      </h3>
      <span className="uppercase text-xs tracking-wider font-semibold text-pink-300">
        {category}
      </span>
    </div>
  </div>
);

export default TrendingCard;
