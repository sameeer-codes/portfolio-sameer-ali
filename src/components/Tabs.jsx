import React, { useState } from "react";
import SkillCard from "./SkillCard";
import About from "../Pages/About";
import Skills from "../Pages/Skills";
import Work from "../Pages/Work";

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
        return (
          <div className="max-w-xl space-y-6">
            <h2 className="text-2xl font-bold">Contact Me</h2>
            <p className="text-white/70 leading-relaxed">
              Interested in working together? I’m open to freelance projects
              worldwide and love collaborating on WordPress, Shopify, or
              full-stack projects. Let’s build something that lasts.
            </p>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 bg-white/5 rounded-lg outline-none placeholder-white/50"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 bg-white/5 rounded-lg outline-none placeholder-white/50"
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full p-3 bg-white/5 rounded-lg outline-none placeholder-white/50"
              />
              <button className="px-6 py-3 bg-primary rounded-lg text-white font-medium hover:bg-primary/90 transition">
                Send Message
              </button>
            </div>

            <p className="text-white/50 text-sm mt-4">
              Or reach me directly at: <b>your.email@example.com</b>
            </p>
          </div>
        );

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
