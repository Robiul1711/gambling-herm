import React from 'react';

const factorsData = [
  {
    factorNum: 1,
    title: "Social inequalities",
    description: "The broader structural context, where you live, who you live among, how much income you have, whether you face other forms of disadvantage. These shape exposure long before any individual decision about gambling is made.",
    highlighted: true
  },
  {
    factorNum: 2,
    title: "Drivers of harm",
    description: "The forces that move risk into harm, gambling product design, marketing, normalisation, financial stress, mental-health comorbidity, social exclusion, life events. Concentrated by social inequality.",
    highlighted: false
  },
  {
    factorNum: 3,
    title: "Barriers to support",
    description: "Once harm exists, who can access help. Awareness, geography, cultural fit, stigma, discrimination, the appropriateness of the service to the person's situation. Concentrated by social inequality too.",
    highlighted: false
  }
];

const ThreeFactorsDistribution = () => {
  return (
    <section id="three-factors" className=" ">
      <div className="max-w-7xl mx-auto px-4">

        {/* Top Accent Line */}
        <div className="w-12 h-[3px] bg-[#17a9df] mb-6"></div>

        {/* Main Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#2d2d2d] mb-4 tracking-tight">
          Three factors shape the distribution
        </h2>

        {/* Section Subtitle */}
        <p className="text-[#2d2d2d] text-[15px] md:text-base mb-10 ">
          Social inequalities, drivers of harm, and barriers to support. Each operates separately and they intersect.
        </p>

        {/* Responsive 3-Column Card Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {factorsData.map((factor, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-6 md:p-8 border-gray-200 border min-h-[280px] flex flex-col justify-start bg-white transition-all hover:shadow hover:border-[#17a9df]/70 duration-300`}
            >
              {/* Factor Header Label with Left Accent Line */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-[2px] bg-[#17a9df]"></div>
                <span className="text-[#17a9df] text-xs font-semibold uppercase tracking-wider">
                  Factor {factor.factorNum}
                </span>
              </div>

              {/* Card Main Title */}
              <h3 className="text-xl font-bold text-[#2d2d2d] mb-4">
                {factor.title}
              </h3>

              {/* Card Body Text Description */}
              <p className="text-[#687076] text-sm leading-relaxed">
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