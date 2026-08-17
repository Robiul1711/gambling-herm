import React from "react";
import image from "@/assets/images/07-children-cant-escape-ads.jpg"

const statsData = [
  {
    tag: "OWN GAMBLING, 2025",
    value: "3.4%",
    description:
      "of 11-17-year-olds in Great Britain scored 2 or more on the DSM-IV-MR-J screen, indicating gambling-related harm or behavioural difficulties in the past year.",
    source: "Source: Gambling Commission, Young People & Gambling 2025.",
  },
  {
    tag: "AS AFFECTED OTHERS",
    value: "912,805",
    description:
      "children in England, on the OHID central estimate, live with an adult whose gambling may need treatment or support (OHID, 2023). GambleAware household modelling suggests a wider affected group still; we cite that only as an upper bound.",
    source:
      "Source: OHID, 2023; GambleAware/YouGov household modelling, 2024.",
  },
  {
    tag: "IN THE HOUSEHOLD",
    value: "29%",
    description:
      "of 11-17-year-olds have seen a family member they live with gamble. Among them, 12% report losing sleep due to worry and 7% report increased arguments or tension at home in the past year.",
    source: "Source: Gambling Commission, Young People & Gambling 2025.",
  },
];

const TeachersCypStatsSection = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Top Header Row with Narrative and Illustration Box */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          {/* Left Text */}
          <p className="text-slate-700 text-base sm:text-lg leading-relaxed md:leading-[1.8] font-normal">
            Across two populations (children who gamble, and children of people
            who gamble excessively), the UK headline numbers point in the same
            direction.
          </p>

          {/* Right Hand-drawn Style Illustration Card */}
          <div className="w-full sm:w-64 shrink-0 bg-[#f8fbff] border border-sky-200/80 rounded-2xl p-4 shadow-xs text-center">
            <img src={image} alt="" />
          </div>
        </div>

        {/* 3 Stat Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {statsData.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200/90 rounded-2xl p-7 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow"
            >
              <div>
                {/* Tag */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-3.5 h-[2px] bg-[#0093D0]"></span>
                  <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#0093D0]">
                    {stat.tag}
                  </span>
                </div>

                {/* Stat Value */}
                <div className="text-3xl sm:text-4xl md:text-[38px] font-extrabold text-[#1e293b] mb-3.5 tracking-tight">
                  {stat.value}
                </div>

                {/* Description */}
                <p className="text-slate-600 text-sm leading-relaxed font-normal">
                  {stat.description}
                </p>
              </div>

              {/* Source Footnote */}
              <div className="mt-8 pt-4 border-t border-slate-100">
                <p className="text-[11px] text-slate-400 font-normal leading-normal">
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
