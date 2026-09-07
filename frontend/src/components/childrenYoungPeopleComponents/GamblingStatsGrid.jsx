import React from "react";

const cardData = [
  {
    title: "Own Gambling, 2025",
    stat: "3.4%",
    description:
      "of 11–17-year-olds in Great Britain scored 2 or more on the DSM-IV-MR-J screen, indicating gambling-related harm or behavioural difficulties in the past year.",
    source: "Source: Gambling Commission, Young People & Gambling 2025.",
    isActive: true, // The first card has a distinctive blue/teal border
  },
  {
    title: "Harmed by someone else's gambling",
    stat: "~42%",
    description:
      "of children in Great Britain may be affected by someone else's gambling (PGSI 1+): parents, siblings, and others close to them. Around 900,000 are modelled as experiencing measurable harm.",
    source: "Source: GambleAware Modelling, YouGov 2024.",
    isActive: false,
  },
  {
    title: "In the household",
    stat: "29%",
    description:
      "of 11–17-year-olds have seen a family member they live with gamble. Among them, 12% report losing sleep due to worry and 7% report increased arguments or tension at home in the past year.",
    source: "Source: Gambling Commission, Young People & Gambling 2025.",
    isActive: false,
  },
];

export default function GamblingStatsGrid() {
  return (
    <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-8 md:py-12 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="flex flex-col justify-between  p-6 sm:p-8 border border-gray-200/90 bg-white shadow-xs hover:shadow-md transition-all duration-200"
          >
            {/* Top Section */}
            <div>
              {/* Header with blue horizontal accent line */}
              <div className="flex items-center gap-2 mb-4">
                <span className="w-8 h-[2px] bg-[#0092D0] inline-block" />
                <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0092D0]">
                  {card.title}
                </h3>
              </div>

              {/* Stat Number */}
              <div className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
                {card.stat}
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base leading-relaxed text-gray-600 font-normal mb-4">
                {card.description}
              </p>
            </div>

            {/* Bottom Section: Fixed Source Text */}
            <p className="text-xs sm:text-sm text-gray-500 italic mt-auto">
              {card.source}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
