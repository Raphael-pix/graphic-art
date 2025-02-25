import AnimatedTitle from "@/components/animatedTitle";
import ProjectCard from "@/components/projectCard";
import { projects } from "@/constants";

export default function Projects() {

  return (
    <section className="w-full py-4">
      <div className="w-full mb-12 flex items-center justify-center">
      <AnimatedTitle
        title="Europe's most aspiring <br /> startups and scaleups"
      />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto px-6">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index}/>
        ))}
      </div>
    </section>
  );
}
