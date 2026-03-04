import React, { useState } from "react";
import SkillCard from "./SkillCard";
import About from "../Pages/About";
import Skills from "../Pages/Skills";
import Work from "../Pages/Work";
import Contact from "../Pages/Contact";

const Tabs = () => {
  const [tab, setTab] = useState(0);

  const tabsHeader = ["About", "Skills", "Projects / Experience", "Contact"];

  const renderContent = () => {
    switch (tab) {
      case 0:
        return <About />;

      case 1:
        return <Skills />;

      case 2:
        return <Work />;

      case 3:
        return <Contact />;

      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col gap-8">
      {/* Navigation Tabs */}
      <div className="flex gap-4 flex-wrap">
        {tabsHeader.map((tabText, index) => (
          <button
            key={index}
            onClick={() => setTab(index)}
            className={`px-6 py-3 cursor-pointer rounded-full text-sm uppercase tracking-wide transition-all duration-300
              ${
                tab === index
                  ? "bg-accent-primary text-white shadow-md"
                  : "bg-white/5 hover:bg-white/10"
              }`}
          >
            {tabText}
          </button>
        ))}
      </div>

      {/* Page Content */}
      <div className="flex-1 py-4">{renderContent()}</div>
    </div>
  );
};

export default Tabs;
