import React from "react";

const ratioData = [
  {
    percentage: "48%",
    description:
      "of people from ethnic minority communities who gamble experience gambling harm (PGSI 1+).",
  },
  {
    percentage: "23%",
    description:
      "of White British people who gamble experience gambling harm (PGSI 1+).",
  },
];

const HeadlineRatio = () => {
  return (
    <div className="py-10 md:py-16">
      <div className="max-w-5xl mx-auto px-4">
        {/* Top Accent Line */}
        <div className="w-12 h-[3px] bg-[#17a9df] mb-6"></div>

        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#2d2d2d] mb-8 tracking-tight">
          The headline ratio
        </h2>

        {/* Grid Container for the 2 Data Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {ratioData.map((item, idx) => (
            <div
              key={idx}
              className="p-6 md:p-8 border border-gray-200/90  min-h-[160px] flex flex-col justify-start bg-white shadow-[0_1px_3px_rgba(0,0,0,0.02)]"
            >
              {/* Ratio Percentage */}
              <div className="text-2xl md:text-3xl font-bold text-[#2d2d2d] mb-4">
                {item.percentage}
              </div>

              {/* Card Body Text Description */}
              <p className="text-[#687076] text-sm md:text-[15px] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Source Citation & Explanation Narrative */}
        <p className="text-[#687076] text-xs md:text-sm leading-relaxed max-w-4xl">
          Source: Annual Treatment and Support Survey 2024 (GambleAware-funded).
          Both groups have lower overall gambling participation than UK
          average; the conditional harm rate among those who do gamble is
          roughly <strong className="font-bold text-[#2d2d2d]">2x</strong> higher
          in ethnic minority communities. This is a marker of exposure pattern
          and access to support, not of individual difference.
        </p>
      </div>
    </div>
  );
};

export default HeadlineRatio;
