import React from "react";
import { Link } from "react-router-dom";

const drivers = [
  {
    title: "Commercial determinants.",
    description:
      'Gambling product design, marketing intensity, point-of-sale density, "free bet" inducements, normalisation in sport and broadcast.',
  },
  {
    title: "Financial stress.",
    description:
      "Job loss, debt, benefits-system pressures push people toward gambling as a perceived income solution; chasing losses compounds.",
  },
  {
    title: "Trauma and loss.",
    description:
      "Bereavement, family breakdown, loneliness, life transitions. Gambling can act as coping for any of these.",
  },
  {
    title: "Loneliness and social exclusion.",
    description:
      "Gambling venues and online platforms can feel like social space, particularly to people excluded from other social contexts. The risk of harm rises with the duration of use.",
  },
];

const barriers = [
  {
    title: "Awareness gap.",
    description: "People most at risk of harm often know least about available support.",
  },
  {
    title: "Cultural fit.",
    description:
      "Services designed without explicit cultural, gender or neurodivergence-specific tailoring may feel irrelevant or unsafe.",
  },
  {
    title: "Stigma and discrimination.",
    description: (
      <>
        Compounded for people facing other intersecting stigmas. See our{" "}
        <Link
          to="/stigma-and-language"
          className="underline font-medium text-[#2d2d2d] hover:text-[#17a9df] transition-all"
        >
          stigma page
        </Link>
        .
      </>
    ),
  },
  {
    title: "Treatment fragmentation.",
    description:
      "Gambling harm is treated separately from the mental-health, debt-advice, family-support and addiction services it usually co-occurs with.",
  },
  {
    title: "Geography.",
    description: (
      <>
        NHS specialist provision is uneven; the regional gap is part of the inequality picture. See
        our{" "}
        <Link
          to="/get-help/treatment"
          className="underline font-medium text-[#2d2d2d] hover:text-[#17a9df] transition-all"
        >
          find-treatment page
        </Link>
        .
      </>
    ),
  },
];

const WhatDrivesHarmAndBlocksSupport = () => {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Top Accent Line */}
        <div className="w-12 h-[3px] bg-[#17a9df] mb-6"></div>

        {/* Main Section Title */}
        <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-gray-900 mb-10 tracking-tight leading-tight">
          What drives harm, and what blocks support
        </h2>

        {/* --- Drivers Subsection --- */}
        <div className="mb-10">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 tracking-tight">Drivers</h3>
          <div className="divide-y divide-dashed divide-gray-200/90 border-b border-dashed border-gray-200/90">
            {drivers.map((item, index) => (
              <div key={index} className="py-3.5 text-sm sm:text-base leading-relaxed">
                <strong className="text-gray-900 font-bold mr-1.5">
                  {item.title}
                </strong>
                <span className="text-gray-600 font-normal">{item.description}</span>
              </div>
            ))}
          </div>
        </div>

        {/* --- Barriers Subsection --- */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 tracking-tight">Barriers</h3>
          <div className="divide-y divide-dashed divide-gray-200/90 border-b border-dashed border-gray-200/90">
            {barriers.map((item, index) => (
              <div key={index} className="py-3.5 text-sm sm:text-base leading-relaxed">
                <strong className="text-gray-900 font-bold mr-1.5">
                  {item.title}
                </strong>
                <span className="text-gray-600 font-normal">{item.description}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatDrivesHarmAndBlocksSupport;
