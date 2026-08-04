import React from "react";

const factorsData = [
  {
    factorNum: 1,
    title: "Social inequalities",
    description:
      "The broader structural context, where you live, who you live among, how much income you have, whether you face other forms of disadvantage. These shape exposure long before any individual decision about gambling is made.",
  },
  {
    factorNum: 2,
    title: "Drivers of harm",
    description:
      "The forces that move risk into harm, gambling product design, marketing, normalisation, financial stress, mental-health comorbidity, social exclusion, life events. Concentrated by social inequality.",
  },
  {
    factorNum: 3,
    title: "Barriers to support",
    description:
      "Once harm exists, who can access help. Awareness, geography, cultural fit, stigma, discrimination, the appropriateness of the service to the person's situation. Concentrated by social inequality too.",
  },
];

const ThreeFactorsDistribution = () => {
  return (
    <section id="three-factors" className="py-10 md:py-16">
      <div className="max-w-5xl mx-auto px-4">
        {/* Top Accent Line */}
        <div className="w-12 h-[3px] bg-[#17a9df] mb-6"></div>

        {/* Main Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#2d2d2d] mb-4 tracking-tight">
          Three factors shape the distribution
        </h2>

        {/* Section Subtitle */}
        <p className="text-[#555555] text-[15px] md:text-base mb-10 max-w-3xl leading-relaxed">
          Social inequalities, drivers of harm, and barriers to support. Each
          operates separately and they intersect.
        </p>

        {/* Responsive 3-Column Card Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {factorsData.map((factor, idx) => (
            <div
              key={idx}
              className="p-6 md:p-8 border border-gray-200/90  min-h-[300px] flex flex-col justify-start bg-white shadow-[0_1px_3px_rgba(0,0,0,0.02)]"
            >
              {/* Factor Header Label with Left Accent Line */}
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-5 h-[2px] bg-[#17a9df]"></div>
                <span className="text-[#17a9df] text-xs font-bold uppercase tracking-wider">
                  FACTOR {factor.factorNum}
                </span>
              </div>

              {/* Card Main Title */}
              <h3 className="text-xl font-bold text-[#2d2d2d] mb-4 leading-snug">
                {factor.title}
              </h3>

              {/* Card Body Text Description */}
              <p className="text-[#687076] text-sm md:text-[14.5px] leading-relaxed">
                {factor.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThreeFactorsDistribution;
