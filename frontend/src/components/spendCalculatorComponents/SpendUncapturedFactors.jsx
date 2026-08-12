import React from "react";

const UNCAPTURED_FACTORS = [
  {
    title: "Time.",
    description:
      "Hours spent gambling are hours not spent on work, rest, or people.",
  },
  {
    title: "Sleep and attention.",
    description:
      "Many people experiencing gambling harm describe disrupted sleep and difficulty focusing on anything else while a session is live in their mind.",
  },
  {
    title: "The people around you.",
    description:
      "Partners, children, parents and friends can carry the financial and emotional weight of someone else's gambling, often without realising the scale of it until later.",
  },
];

const SpendUncapturedFactors = () => {
  return (
    <section className="w-full py-8 md:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Top Accent Bar */}
        <div className="w-10 h-[3px] bg-[#0092D0] mb-4" />

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#111827] mb-3 tracking-tight">
          What this number doesn't capture
        </h2>

        {/* Intro */}
        <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-6">
          Money is one part of the picture. This calculator can't show you:
        </p>

        {/* List of factors */}
        <div className="divide-y divide-dashed divide-gray-200 border-t border-b border-dashed border-gray-200">
          {UNCAPTURED_FACTORS.map((item, index) => (
            <div key={index} className="py-4">
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                <strong className="font-bold text-gray-900 mr-1.5">
                  {item.title}
                </strong>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpendUncapturedFactors;
