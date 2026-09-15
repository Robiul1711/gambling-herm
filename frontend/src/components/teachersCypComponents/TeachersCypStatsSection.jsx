import React from "react";
import image from "@/assets/images/07-children-cant-escape-ads.jpg";

const statsData = [
  {
    tag: "Own gambling, 2025",
    value: "3.4%",
    description:
      "of 11-17-year-olds in Great Britain scored 2 or more on the DSM-IV-MR-J screen, indicating problems with their own gambling (2.2% at 2 to 3, 1.2% at 4 or more).",
    source: "Source: Gambling Commission, Young People & Gambling 2025.",
  },
  {
    tag: "Harmed by someone else's gambling",
    value: "912,805",
    description:
      "children in England, on the OHID central estimate, live with an adult whose gambling may need treatment or support (OHID, 2023). GambleAware household modelling suggests a wider affected group still; we cite that only as an upper bound.",
    source: "Source: OHID, 2023; GambleAware/YouGov household modelling, 2024.",
  },
  {
    tag: "In the household",
    value: "29%",
    description:
      "of 11-17-year-olds have seen a family member they live with gamble. Among them, 4% lost sleep worrying about gambling and 7% had more arguments or tension at home because of gambling in the past year (Young People and Gambling survey).",
    source: "Source: Gambling Commission, Young People & Gambling 2025.",
  },
];

const TeachersCypStatsSection = () => {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Top Header Narrative */}
        <div className="mb-10">
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-normal max-w-3xl">
            Across two populations (children who gamble, and children living with someone else's gambling), the UK headline numbers point in the same direction.
          </p>
        </div>

        {/* 3 Stat Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {statsData.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200/90  p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow"
            >
              <div>
                {/* Tag */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-6 h-[2px] bg-[#0093D0]"></span>
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0093D0]">
                    {stat.tag}
                  </span>
                </div>

                {/* Stat Value */}
                <div className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3 tracking-tight">
                  {stat.value}
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-normal">
                  {stat.description}
                </p>
              </div>

              {/* Source Footnote */}
              <div className="mt-6 pt-4 border-t border-gray-100">
                <p className="text-xs sm:text-sm text-gray-500 italic font-normal">
                  {stat.source}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeachersCypStatsSection;
