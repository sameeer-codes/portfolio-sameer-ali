import React from "react";
import pfp from "../assets/Media/pfp.jfif";
import Tabs from "../components/Tabs";

const Home = () => {
  const level = 7;
  const xp = 837;
  const maxXp = 1000;
  const progress = (xp / maxXp) * 100;

  return (
    <div className="bg-primary text-white min-h-screen flex">
      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-10 w-full p-4 lg:p-8 gap-6 lg:gap-12">
        {/* LEFT SIDEBAR */}
        <div className="lg:col-span-3 flex flex-col justify-start px-6 py-8 rounded-xl backdrop-blur-md lg:sticky lg:top-8 self-start border">
          {/* Profile */}
          <div className="flex flex-col gap-4 items-center lg:items-start">
            <div className="bg-primary rounded-full p-2">
              <img
                src={pfp}
                alt="Profile"
                className="w-40 object-cover rounded-full"
              />
            </div>

            <div className="text-center lg:text-left">
              <h2 className="text-2xl lg:text-3xl font-medium">Sameer Ali</h2>
              <p className="text-sm lg:text-base opacity-70 mt-1">
                Full Stack Developer
              </p>
            </div>
          </div>

          {/* Level Section */}
          <div className="my-6 space-y-3">
            <div className="flex justify-between items-end">
              <p className="text-lg font-semibold">Level {level}</p>
              <p className="text-sm opacity-70">
                XP: {xp} / {maxXp}
              </p>
            </div>

            <div className="w-full h-2 bg-black/40 rounded-full overflow-hidden">
              <div
                className="h-full bg-white/80 transition-all duration-1000"
                style={{ width: `${progress}%` }}
              />
            </div>

            <p className="text-sm opacity-90">
              Level {level + 1}: WP Theme Architect
            </p>
          </div>

          {/* Info */}
          <div className="space-y-2 text-sm lg:text-base">
            <p>
              Status: <b>Working</b>
            </p>
            <p>
              Experience: <b>2 Years</b>
            </p>
            <p className="opacity-80 leading-relaxed">
              Actively looking for projects related to WordPress, Shopify, and
              Frontend development.
            </p>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="lg:col-span-7 flex flex-col">
          <Tabs />
        </div>
      </div>
    </div>
  );
};

export default Home;
