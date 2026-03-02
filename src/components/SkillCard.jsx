const SkillCard = ({ icon, title, description, tools, level }) => {
  return (
    <div className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 transition-all duration-300 hover:-translate-y-2 hover:border-white/30 hover:shadow-xl hover:shadow-purple-900/30 hover:bg-primary">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="text-3xl">{icon}</div>
        <div className="text-xs uppercase tracking-wider text-white/60">
          Lv. {level}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>

      {/* Description */}
      <p className="text-md text-white/70 leading-relaxed mb-4">
        {description}
      </p>

      {/* Tools */}
      <div className="flex flex-wrap gap-2">
        {tools &&
          tools.map((tool, index) => (
            <span
              key={index}
              className="text-sm px-3 py-1 rounded-full bg-white/10 text-white/80 border border-white/10 hover:bg-primary"
            >
              {tool}
            </span>
          ))}
      </div>
    </div>
  );
};

export default SkillCard;
