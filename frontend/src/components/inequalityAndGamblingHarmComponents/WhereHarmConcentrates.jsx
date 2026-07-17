import React from "react";
import { Link } from "react-router-dom";

const concentrationData = [
  {
    label: "Deprivation",
    description: "People living in the most deprived UK deciles are exposed to more gambling venues, more targeted advertising, more credit promotion, and more peer-group normalisation. The harm rate is correspondingly higher. This is the textbook pattern for any commercial-determinant harm."
  },
  {
    label: "Ethnicity",
    description: "Ethnic minority communities have lower overall gambling participation and higher conditional harm rates. Less culturally-tailored treatment provision compounds the gap."
  },
  {
    label: "Gender",
    description: "Men are around 70% of those experiencing the most severe gambling harm. Women's gambling harm is rising fastest (particularly via online slots and bingo apps) and is most likely to be hidden, women face higher stigma and lower service uptake."
  },
  {
    label: "Neurodivergence",
    description: "People who are autistic, ADHD or otherwise neurodivergent have higher gambling-harm risk and face treatment that is rarely adapted to their needs. See our neurodivergence page."
  },
  {
    label: "Age",
    description: "11–17-year-olds experience clinical-level harm at 3.4% (UK YPG 2025), comparable to adult rates. Under-25s carry a higher lifetime risk from any given exposure. Older adults are a fast-growing, under-served group."
  },
  {
    label: "MENTAL HEALTH",
    description: "Harm is concentrated in people with co-occurring anxiety, depression, alcohol use disorder, ADHD, trauma history, and bereavement. Treatment that treats gambling in isolation from these is unlikely to work."
  },
  {
    label: "Veterans & criminal-justice",
    description: "UK veterans and people in contact with the criminal-justice system carry markedly elevated rates. Specialist provision exists in pockets and is unevenly distributed."
  },
  {
    label: "Affected others",
    description: (
      <>
        Children of someone with gambling harm; partners; siblings; bereaved families.
        Inequality also shapes who carries affected-other harm and who gets recognised for it. See
        our{" "}
        <Link
          to="/get-help/family-friends"
          className="text-Primary underline hover:text-opacity-80 transition-all"
        >
          family & friends page
        </Link>
        .
      </>
    ),
  },
];

const WhereHarmConcentrates = () => {
  return (
    <section id="harm-concentration" className=" ">
      <div className="section-padding-x py-10 md:py-16">

        {/* Top Accent Line */}
        <div className="w-12 h-[3px] bg-[#17a9df] mb-6"></div>

        {/* Main Section Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#2d2d2d] leading-tight mb-12 tracking-tight">
          Where harm concentrates
        </h2>

        {/* Structured Row Map List Grid */}
        <div className="border-b border-gray-200/60">
          {concentrationData.map((item, index) => (
            <div 
              key={index} 
              className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-6 border-t border-gray-200/60 items-start text-[15px] leading-relaxed"
            >
              {/* Category Parameter Side Label */}
              <div className="md:col-span-3 text-[#17a9df] font-medium pt-0.5">
                {item.label}
              </div>

              {/* Explicit Description Breakdown */}
              <div className="md:col-span-9 text-[#2d2d2d]">
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