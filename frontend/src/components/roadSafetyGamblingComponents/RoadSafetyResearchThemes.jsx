import React from "react";

const themes = [
  {
    tag: "ATTENTION",
    title: "Gambling-related distraction",
    description:
      "Preoccupation with gambling may reduce attention during safety-critical tasks, from driving to control-room and maintenance work.",
  },
  {
    tag: "WELLBEING",
    title: "Emotional wellbeing",
    description:
      "Stress and anxiety associated with gambling harm may influence judgement and decision-making.",
  },
  {
    tag: "REST",
    title: "Fatigue",
    description:
      "Sleep disruption associated with gambling harm may increase fatigue, a well-established road-safety risk.",
  },
  {
    tag: "PREVENTION",
    title: "Younger workers",
    description:
      "Younger drivers appeared more vulnerable. Early awareness and support may reduce future harm.",
  },
];

const RoadSafetyResearchThemes = () => {
  return (
    <section className="py-16 md:py-24 bg-white border-t border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Accent Bar */}
        <div className="w-14 h-[3.5px] bg-[#0093D0] mb-7"></div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-[#1e293b] mb-7 tracking-tight">
          What the research shows
        </h2>

        {/* Intro */}
        <p className="text-base sm:text-lg text-slate-700 leading-relaxed md:leading-[1.8] mb-10 font-normal">
          Four themes emerged from the findings. Each is indicative rather than
          conclusive, and points to areas transport organisations may wish to
          consider.
        </p>

        {/* 4 Cards in 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {themes.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200/90 rounded-2xl p-7 sm:p-9 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-start"
            >
              {/* Card Tag */}
              <div className="flex items-center gap-2 mb-3">
                <span className="w-3.5 h-[2px] bg-[#0093D0]"></span>
                <span className="text-xs font-bold uppercase tracking-widest text-[#0093D0]">
                  {item.tag}
                </span>
              </div>

              {/* Card Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-[#1e293b] mb-3.5 tracking-tight">
                {item.title}
              </h3>

              {/* Card Description */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed md:leading-[1.7] font-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div>
          <a
            href="#full-report"
            className="bg-Primary hover:bg-[#0076a8] text-white font-semibold text-sm md:text-base px-7 py-3.5 rounded-md transition-colors shadow-sm inline-block"
          >
            Download the Full Research Report
          </a>
        </div>
      </div>
    </section>
  );
};

export default RoadSafetyResearchThemes;
