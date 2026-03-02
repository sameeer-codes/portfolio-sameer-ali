import React from "react";

const experiences = [
  {
    company: "Zera Creative",
    role: "WordPress / Shopify Developer",
    duration: "June 2025 – Present",
    type: "Full-Time",
    description: [
      "Led end-to-end website development from concept to deployment.",
      "Built and customized WordPress themes using PHP.",
      "Developed and maintained Shopify stores using Liquid.",
      "Implemented responsive UI using HTML, CSS, and JavaScript.",
      "Managed full client lifecycle including requirements, revisions, and deployment.",
      "Optimized websites for performance, SEO, and responsiveness.",
    ],
  },
  {
    company: "Anees IT Firm",
    role: "WordPress / Shopify Developer",
    duration: "July 2024 – May 2025",
    type: "Part-Time",
    description: [
      "Handled complete WordPress and Shopify client projects.",
      "Customized themes and implemented business-specific features.",
      "Maintained and updated client websites.",
      "Delivered responsive and optimized eCommerce solutions.",
    ],
  },
];

const Work = () => {
  return (
    <>
      <div className="space-y-8 max-w-6xl hidden">
        {/* === PROJECTS === */}
        <h2 className="text-3xl font-bold">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((_, idx) => (
            <div
              key={idx}
              className="bg-white/5 rounded-xl p-4 flex flex-col gap-3 hover:shadow-lg transition-shadow"
            >
              <div className="bg-white/10 h-32 rounded-md flex items-center justify-center text-white/50">
                Screenshot Placeholder
              </div>
              <h3 className="text-xl font-semibold">Project Name</h3>
              <p className="text-white/60 text-sm">Client / Personal</p>
              <p className="text-white/70 text-sm">
                Tech Stack: WordPress, Shopify, PHP
              </p>
              <p className="text-white/70 text-sm truncate">
                Short description about what this project does and its purpose.
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-8 max-w-6xl">
        <h2 className="text-3xl font-bold">Experience</h2>

        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="p-6 bg-white/5 rounded-xl hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-1">
                {exp.company} — {exp.role}
              </h3>
              <p className="text-white/60 text-sm">
                {exp.duration} · {exp.type}
              </p>

              <ul className="list-disc list-inside text-white/70 text-sm mt-3 space-y-1">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Work;
