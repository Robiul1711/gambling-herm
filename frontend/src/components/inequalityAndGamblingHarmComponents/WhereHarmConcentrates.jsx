import React from "react";
import { Link } from "react-router-dom";

const concentrationData = [
  {
    label: "DEPRIVATION",
    description:
      "People living in the most deprived UK deciles are exposed to more gambling venues, more targeted advertising, more credit promotion, and more peer-group normalisation. The harm rate is correspondingly higher. The same pattern appears across the commercial determinants of health.",
  },
  {
    label: "ETHNICITY",
    description:
      "Ethnic minority communities have lower overall gambling participation and higher conditional harm rates. Less culturally-tailored treatment provision compounds the gap.",
  },
  {
    label: "GENDER",
    description:
      "Men are around 70% of those experiencing the most severe gambling harm. Women's gambling harm is rising fastest (particularly via online slots and bingo apps) and is most likely to be hidden, women face higher stigma and lower service uptake.",
  },
  {
    label: "NEURODIVERGENCE",
    description:
      "People with ADHD have higher gambling-harm risk; the evidence for other forms of neurodivergence is less established. Neurodivergent people generally face treatment that is rarely adapted to their needs. See our neurodivergence page.",
  },
  {
    label: "AGE",
    description:
      "3.4% of 11-17-year-olds in Great Britain show indicators of gambling harm (DSM-IV-MR-J score 2+, YP&G 2025). Under-25s carry a higher lifetime risk from any given exposure. Older adults are a fast-growing, under-served group.",
  },
  {
    label: "MENTAL HEALTH",
    description:
      "Harm is concentrated in people with co-occurring anxiety, depression, alcohol use disorder, ADHD, trauma history, and bereavement. Treatment that treats gambling in isolation from these is unlikely to work.",
  },
  {
    label: "VETERANS & CRIMINAL-JUSTICE",
    description:
      "UK veterans and people in contact with the criminal-justice system show directional evidence of elevated risk, a hypothesis warranting proper investigation. Specialist provision exists in pockets and is unevenly distributed.",
  },
  {
    label: "AFFECTED OTHERS",
    description: (
      <>
        Children of people who gamble excessively; partners; siblings; bereaved
        families. Inequality also shapes who carries affected-other harm and who
        gets recognised for it. See our{" "}
        <Link
          to="/get-help/family-friends"
          className="underline font-medium text-[#2d2d2d] hover:text-[#17a9df] transition-all"
        >
          family & friends
        </Link>{" "}
        page.
      </>
    ),
  },
];

const WhereHarmConcentrates = () => {
  return (
    <section id="harm-concentration" className="bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        {/* Top Accent Line */}
        <div className="w-12 h-[3px] bg-[#17a9df] mb-6"></div>

        {/* Main Section Header */}
        <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-gray-900 leading-tight mb-10 tracking-tight">
          Where harm concentrates
        </h2>

        {/* Structured Row Map List Grid */}
        <div className="border-b border-gray-200/60">
          {concentrationData.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 py-5 border-t border-gray-200/60 items-start text-sm sm:text-base leading-relaxed"
            >
              {/* Category Parameter Side Label */}
              <div className="md:col-span-3 text-[#0092D0] font-bold text-xs sm:text-sm tracking-wider uppercase pt-0.5 pr-2">
                {item.label}
              </div>

              {/* Explicit Description Breakdown */}
              <div className="md:col-span-9 text-gray-700 font-normal leading-relaxed">
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhereHarmConcentrates;