import React from "react";

const stats = [
  {
    value: "5,639",
    description: "UK driving licence holders took part in the research.",
  },
  {
    value: "~2m",
    description:
      "adults in the UK who gamble and may benefit from treatment or support (OHID 2023 England estimate, scaled to the UK).",
  },
  {
    value: "Younger",
    description:
      "drivers aged 18–34 reported the highest rates of impacts on their driving; no driver aged 55+ reported any.",
  },
  {
    value: "Distraction",
    description:
      "around 1 in 100 drivers reported feeling less focused, or taking risks they would not otherwise have taken.",
  },
  {
    value: "Fatigue",
    description:
      "fatigue was the most commonly reported consequence, 2% of all drivers, and rose with gambling frequency.",
  },
  {
    value: "Others",
    description:
      "3% of drivers said concern about another person's gambling had affected their own driving.",
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

        {/* Subtitle / Credit */}
        <p className="text-gray-300 text-base sm:text-lg leading-relaxed md:leading-[1.8] mb-4 font-normal">
          A YouGov survey of 6,570 UK adults, of whom 5,639 held a driving
          licence, commissioned by Gambling Harm UK and undertaken by Dr Leanne
          Savigar-Shaw (University of Staffordshire) and Professor Gemma Briggs
          (The Open University).
        </p>

        <p className="text-gray-400 text-sm leading-relaxed mb-12 font-normal italic">
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
          Consequences reported included collisions, near misses, and driving too fast or too slowly.
        </p>

        {/* CTA Button */}
        <div>
          <a
            href="#research-report"
            className="bg-white hover:bg-slate-100 text-slate-900 font-semibold text-sm md:text-base px-7 py-3.5  transition-colors inline-block shadow-sm"
          >
            Read the Research Report
          </a>
        </div>
      </div>
    </section>
  );
};

export default RoadSafetyResearchStats;
