import React from "react";

const RoadSafetyWhyThisMatters = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Accent Bar */}
        <div className="w-14 h-[3.5px] bg-[#0093D0] mb-7"></div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-[#1e293b] mb-7 tracking-tight">
          Why this matters
        </h2>

        {/* Paragraph 1 */}
        <p className="text-base sm:text-lg text-slate-700 leading-relaxed md:leading-[1.8] mb-6 font-normal">
          With around 2 million adults in the UK estimated to need support for
          their gambling (OHID 2023 England estimate, scaled to the UK), gambling
          harm should be viewed alongside other recognised workplace risks.
        </p>

        {/* Paragraph 2 */}
        <p className="text-base sm:text-lg text-slate-700 leading-relaxed md:leading-[1.8] mb-10 font-normal">
          These include fatigue, stress, financial wellbeing, mental wellbeing
          and human performance. Each is already familiar to transport safety,
          occupational health and HR teams, and gambling harm can intersect with
          all of them.
        </p>

        {/* Light Blue Callout Card */}
        <div className="bg-[#edf7fd] border-l-[5px] border-[#0093D0] rounded-r-xl p-7 sm:p-9 shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
          <p className="text-slate-800 text-base sm:text-lg md:text-[18px] leading-relaxed md:leading-[1.8] font-medium">
            Creating a workplace where employees feel able to seek support early
            helps protect individuals, colleagues, passengers and the wider
            public.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RoadSafetyWhyThisMatters;
