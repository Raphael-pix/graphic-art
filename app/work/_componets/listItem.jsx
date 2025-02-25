"use client";

import Image from "next/image";
import React, { useState } from "react";

const ListItem = ({ project,index }) => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div className="relative">
      <div>
        <div
          className="py-6 border-t border-gray-200 grid grid-cols-1 md:grid-cols-3 gap-4 group hover:border-black hover:cursor-pointer transition-colors duration-200"
          onMouseEnter={() => setHoveredProject(index)}
          onMouseLeave={() => setHoveredProject(null)}
          onMouseMove={handleMouseMove}
        >
          <div className="col-span-1">
            <h3 className="text-sm md:text-base font-serif group-hover:font-semibold">
              {project.title}
            </h3>
          </div>

          <div className="col-span-1">
            <p className="text-sm md:text-base font-serif group-hover:font-semibold">
              {project.company}
            </p>
          </div>

          <div className="col-span-1">
            <p className="text-sm md:text-base font-serif group-hover:font-semibold">
              {project.services.join(", ")}
            </p>
          </div>
        </div>
      </div>

      {hoveredProject !== null && (
        <div
          className="fixed pointer-events-none z-10 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-200 shadow-lg"
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
            width: "300px",
            opacity: 1,
          }}
        >
          <Image
            src={project.imageUrl}
            alt={project.title}
            width={300}
            height={300}
            className="w-full rounded-md object-cover"
          />
        </div>
      )}
    </div>
  );
};

export default ListItem;
