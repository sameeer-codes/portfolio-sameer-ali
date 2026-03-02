import React from "react";
import SkillCard from "../components/SkillCard";

const Skills = () => {
  const skills = [
    {
      icon: "🧩",
      title: "Frontend Development",
      description:
        "Building responsive, accessible, and high-performance interfaces with clean, maintainable code.",
      level: 5,
      tools: ["React", "JavaScript", "Tailwind CSS", "Accessibility"],
    },
    {
      icon: "⚙️",
      title: "Backend Development",
      description:
        "Designing scalable backend systems with secure and maintainable architecture.",
      level: 4,
      tools: ["PHP", "Laravel", "API Development", "MySQL"],
    },
    {
      icon: "🛒",
      title: "CMS Development",
      description:
        "Custom themes, plugins, scalable CMS architecture, performance optimization.",
      level: 7,
      tools: ["WordPress", "Shopify", "PHP", "Liquid"],
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      {skills.map((item, index) => (
        <SkillCard key={index} {...item} />
      ))}
    </div>
  );
};

export default Skills;
