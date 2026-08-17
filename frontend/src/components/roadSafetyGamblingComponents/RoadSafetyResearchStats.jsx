import React from "react";

const stats = [
  {
    value: "5,639",
    description: "UK driving licence holders took part in the research.",
  },
  {
    value: "~2m",
    description:
      "adults in the UK are estimated to be in need of support for their gambling.",
  },
  {
    value: "Younger",
    description: "drivers showed greater vulnerability to gambling-related harm.",
  },
  {
    value: "Distraction",
    description:
      "gambling-related distraction was identified by some respondents experiencing gambling harm.",
  },
  {
    value: "Fatigue",
    description:
      "fatigue and disrupted sleep were highlighted as potential safety factors.",
  },
  {
    value: "Others",
    description:
      "harm may affect both those who gamble and people harmed by someone else's gambling.",
  },
];

const RoadSafetyResearchStats = () => {
  return (
    <section className="bg-[#121417] text-white py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Tagline */}
        <div className="flex items-center gap-2.5 mb-5">
          <span className="w-5 h-[2.5px] bg-[#0093D0]"></span>
          <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#0093D0]">
            WHAT THE RESEARCH EXPLORED
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-[40px] font-extrabold text-white leading-tight mb-5 tracking-tight">
          A study of 5,639 UK driving licence holders
        </h2>

        {/* Subtitle */}
        <p className="text-gray-300 text-base sm:text-lg leading-relaxed md:leading-[1.8] mb-12 font-normal">
          Findings are early and indicative. They point to gambling harm as a
          factor worth considering alongside established road-safety risks, not
          a settled conclusion.
        </p>

        {/* 6 Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10 mb-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col">
              <div className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-[#0093D0] mb-3 tracking-tight">
                {stat.value}
              </div>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-normal">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Consequences Note */}
        <p className="text-xs md:text-sm text-gray-400 leading-relaxed mb-10 pt-2">
          Consequences reported included collisions, near misses and speeding.
        </p>

        {/* CTA Button */}
        <div>
          <a
            href="#research-report"
            className="bg-white hover:bg-slate-100 text-slate-900 font-semibold text-sm md:text-base px-7 py-3.5 rounded-md transition-colors inline-block shadow-sm"
          >
            Read the Research Report
          </a>
        </div>
      </div>
    </section>
  );
};

export default RoadSafetyResearchStats;
