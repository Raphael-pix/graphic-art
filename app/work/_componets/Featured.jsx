import React from "react";
import ProjectCard from "@/components/projectCard";
import { projects } from "@/constants";

const FeaturedLlist = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto px-6 lg:px-12 overflow-hidden">
      {projects.map((project, index) => (
        <ProjectCard key={project.title} project={project} index={index} />
      ))}
    </div>
  );
};

export default FeaturedLlist;
