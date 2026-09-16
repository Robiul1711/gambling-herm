import React from "react";

const ethnicityData = [
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

const deprivationData = [
  {
    percentage: "~4x",
    description:
      "severe gambling harm runs at roughly 4x the rate in England’s most-deprived fifth of areas compared with the least deprived, consistent across all three GSGB waves, while participation differs by only 2–5 percentage points.",
  },
  {
    percentage: "21% vs 2%",
    description:
      "of gambling premises sit in the most-deprived tenth of areas; 2% in the most affluent (Evans and Cross, 2021).",
  },
];

const HeadlineRatio = () => {
  return (
    <div className="py-12 md:py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Top Accent Line */}
        <div className="w-12 h-[3px] bg-[#17a9df] mb-6"></div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-gray-900 mb-8 tracking-tight leading-tight">
          Headline ratios
        </h2>

        {/* Stat Pair 1: Ethnicity */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          {ethnicityData.map((item, idx) => (
            <div
              key={idx}
              className="p-6 md:p-8 border border-gray-200/90 min-h-[160px] flex flex-col justify-start bg-white shadow-xs"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-[#0092D0] mb-3">
                {item.percentage}
              </div>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-8">
          Source: Annual Treatment and Support Survey 2024 (GambleAware-funded).
          Both groups have lower overall gambling participation than UK average;
          the conditional harm rate among those who do gamble is roughly{" "}
          <strong className="font-bold text-gray-900">2x</strong> higher in
          ethnic minority communities. This is a marker of exposure pattern and
          access to support, not of individual difference.
        </p>

        {/* Stat Pair 2: Deprivation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          {deprivationData.map((item, idx) => (
            <div
              key={idx}
              className="p-6 md:p-8 border border-gray-200/90 min-h-[160px] flex flex-col justify-start bg-white shadow-xs"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-[#0092D0] mb-3">
                {item.percentage}
              </div>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeadlineRatio;
