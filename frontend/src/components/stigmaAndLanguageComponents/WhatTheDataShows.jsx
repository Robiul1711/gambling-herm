import React from "react";

const statsData = [
  {
    value: "75%",
    description:
      "of those experiencing severe gambling harm (PGSI 8+) report having felt unable to talk to friends or family about their gambling.",
  },
  {
    value: "64%",
    description:
      "of those who have ever been harmed by their gambling say they have not spoken to anyone about it.",
  },
  {
    value: "10 years",
    description:
      "median gap between the onset of gambling harm and accessing the National Gambling Support Network. By the point of treatment, the mean PGSI score is 19 of a possible 27.",
  },
];

const WhatTheDataShows = () => {
  return (
    <section
      id="data-shows"
      className="py-12 md:py-16 border-t border-b border-gray-200/60"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Top Accent Line */}
        <div className="w-12 h-[3px] bg-[#17a9df] mb-6"></div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-gray-900 mb-4 tracking-tight leading-tight">
          What the data shows
        </h2>

        <p className="text-gray-600 text-base sm:text-lg mb-8 leading-relaxed font-normal">
          Three figures, all from UK research, all consistent across years and
          studies.
        </p>

        {/* 3-Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {statsData.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 md:p-8  border border-gray-200/90 min-h-[220px] flex flex-col justify-start bg-white shadow-xs"
            >
              {/* Stat Figure */}
              <div className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
                {stat.value}
              </div>

              {/* Stat Label Description */}
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-normal">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Footnote Sources Citation */}
        <p className="text-gray-500 text-xs sm:text-sm italic">
          Sources: GambleAware-funded stigma scoping research (2023); NGSN
          treatment data.
        </p>
      </div>
    </section>
  );
};

export default WhatTheDataShows;
