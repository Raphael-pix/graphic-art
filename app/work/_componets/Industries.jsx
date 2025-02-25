import React from "react";
import ListItem from "./listItem";


const IndustriesList = () => {
  const industries = [
    {
      title: " WEB3",
      projects: [
        {
          title: "Onboarding's never been this agile",
          company: "ZERO Vision",
          services: ["Strategy", "Visual Identity", "Website"],
          imageUrl: "/assets/images/pic1.webp",
        },
        {
          title: "Liberating Humans from Pointless Work",
          company: "Bluprnt",
          services: ["Strategy", "Visual Identity", "Website"],
          imageUrl: "/assets/images/pic2.webp",
        },
        {
          title: "The Connection Dispatcher",
          company: "Tryp",
          services: ["Strategy", "Visual Identity", "Website"],
          imageUrl: "/assets/images/pic3.webp",
        },
      ],
    },
    {
      title: "DESIGN",
      projects: [
        {
          title: "Innovating Legal Tech",
          company: "LegalTechColab",
          services: ["Strategy", "Visual Identity", "Website"],
          imageUrl: "/assets/images/pic4.webp",
        },
        {
          title: "For Makers, by Doers",
          company: "SquareOne",
          services: ["Strategy", "Visual Identity", "Website"],
          imageUrl: "/assets/images/pic5.webp",
        },
        {
          title: "AI-Powered Manufacturing Efficiency",
          company: "HappyOps",
          services: ["Visual Identity", "Website"],
          imageUrl: "/assets/images/pic6.webp",
        },
        {
          title: "Luck is on your Side",
          company: "Moneypools",
          services: ["Visual Identity", "Website"],
          imageUrl: "/assets/images/pic7.webp",
        },
        {
          title: "Turning crypto complexity into clarity",
          company: "Rudy Capital",
          services: ["Strategy", "Visual Identity", "Website"],
          imageUrl: "/assets/images/pic8.webp",
        },
        {
          title: "Beauty and bullsh*t don't mix",
          company: "Nola",
          services: ["Strategy", "Visual Identity", "Website"],
          imageUrl: "/assets/images/pic9.webp",
        },
      ],
    },
    {
      title: "AUTOMOBILE",
      projects: [
        {
          title: "Unleashing the Power of Communities",
          company: "Otterspace",
          services: ["Strategy", "Visual Identity", "Website"],
          imageUrl: "/assets/images/pic10.webp",
        },
        {
          title: "Logistics Made Simple",
          company: "Quivo",
          services: ["Strategy", "Visual Identity", "Website"],
          imageUrl: "/assets/images/pic1.webp",
        },
        {
          title: "Biotech in a space for a better life on earth",
          company: "Yuri",
          services: ["Strategy", "Visual Identity", "Website"],
          imageUrl: "/assets/images/pic2.webp",
        },
        {
          title: "Re-imagining Process Automation",
          company: "Ascon Systems",
          services: ["Strategy", "Visual Identity", "Website"],
          imageUrl: "/assets/images/pic3.webp",
        },
      ],
    },
  ];

  return (
    <div className="w-full px-6 mx-auto lg:px-12">
      {industries.map((industry) => (
        <div key={industry.title} className="relative space-y-2 my-6 lg:my-12">
          <p className="text-base font-semibold lg:text-lg">{industry.title}</p>
          <div className="relative" >
            {industry.projects.map((project, index) => (
              <ListItem key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default IndustriesList;
