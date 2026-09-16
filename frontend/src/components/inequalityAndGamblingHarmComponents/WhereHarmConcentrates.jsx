import React from "react";
import { Link } from "react-router-dom";

const concentrationData = [
  {
    label: "DEPRIVATION",
    description:
      "People living in England’s most deprived areas are exposed to more gambling venues, more targeted advertising, more credit promotion, and more peer-group normalisation. Severe harm runs at roughly four times the rate of the least-deprived areas across all three GSGB waves, against a participation gap of only two to five percentage points: people there gamble slightly more and are harmed several times more.",
  },
  {
    label: "ETHNICITY",
    description:
      "Ethnic minority communities have lower overall gambling participation and higher conditional harm rates. Less culturally-tailored treatment provision compounds the gap.",
  },
  {
    label: "GENDER",
    description:
      "Men are around 70% of those experiencing the most severe harm from their own gambling. Women's harm from their own gambling is rising and more likely to be hidden: women face higher stigma barriers to seeking help (39% against 22% citing embarrassment) and services largely designed around men (GambleAware / University of Bristol). Harm from someone else’s gambling runs the other way: women are more likely than men to report it.",
  },
  {
    label: "NEURODIVERGENCE",
    description:
      "People with ADHD have higher gambling-harm risk; the evidence for other forms of neurodivergence is less established. Neurodivergent people generally face treatment that is rarely adapted to their needs. See our neurodivergence page.",
  },
  {
    label: "AGE",
    description:
      "3.4% of 11-17-year-olds in Great Britain show indicators of gambling harm (DSM-IV-MR-J score 2+, YP&G 2025). Under-25s carry a higher lifetime risk from any given exposure. Older adults are an under-served, largely unreached group: prevention and services rarely reach them, and venues actively market to them.",
  },
  {
    label: "MENTAL HEALTH",
    description:
      "Harm is concentrated in people with co-occurring anxiety, depression, alcohol use disorder, ADHD, trauma history, and bereavement. Treatment that treats gambling in isolation from these is unlikely to work.",
  },
  {
    label: "VETERANS & CRIMINAL-JUSTICE",
    description:
      "23% of UK serving personnel experienced gambling harm (Jones et al., BMJ Mil Health, 2025), and pooled prison prevalence is 30.8% across 26 international studies (Tørdal et al., 2024); UK probation prevalence has never been measured. Specialist provision exists in pockets and is unevenly distributed.",
  },
  {
    label: "HARMED BY SOMEONE ELSE'S GAMBLING",
    description: (
      <>
        Children living with someone else’s gambling; partners; siblings; bereaved
        families. Inequality also shapes who carries that harm and who gets
        recognised for it. See our{" "}
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