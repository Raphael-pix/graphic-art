
import React from "react";
import { projects } from "@/constants";
import BlogCard from "./blogCard";

const AllProjects = () => {
  return (
    <main className="mx-auto px-4 py-8 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <BlogCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </main>
  );
};

export default AllProjects;
