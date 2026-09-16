import React from "react";
import { Link } from "react-router-dom";

const stigmaFactors = [
  {
    label: "MORALISED",
    description:
      'Gambling harm is framed in public conversation as a failure of self-control more than a clinical condition. The implicit assumption: "you chose this." This makes self-disclosure feel like a confession rather than a help-seeking step.',
  },
  {
    label: "FINANCIALISED",
    description:
      "Most of the harm shows up first as money. Money problems carry shame on their own. The combination compounds.",
  },
  {
    label: "HIDDEN PRODUCTS",
    description:
      "Online slots, casino apps and in-play betting can be used in private without anyone noticing. The path to harm is invisible to family until quite late. By the time disclosure is necessary, the situation feels already too big to share.",
  },
  {
    label: "INDUSTRY-SHAPED VOCABULARY",
    description:
      'The dominant public language ("responsible gambling", "when the fun stops, stop", "problem gambler") was developed and paid for by the gambling industry. It reinforces the framing that people who experience harm are defective users of a fine product.',
  },
  {
    label: "INTERSECTING STIGMAS",
    description: (
      <>
        People who already face stigma elsewhere in their lives (women, people
        from minority ethnic communities, LGBTQ+ people, people with
        mental-health conditions) experience compounded gambling-harm stigma.
        See our{" "}
        <Link
          to="/inequality-and-gambling-harm"
          className="text-[#1d7092] underline hover:text-opacity-80 transition-all font-medium"
        >
          inequality page
        </Link>
        .
      </>
    ),
  },
];

const WhyStigmaOperates = () => {
  return (
    <section id="why-stigma" className="py-12 md:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Top Accent Line */}
        <div className="w-12 h-[3px] bg-[#17a9df] mb-6"></div>

        {/* Main Header Title */}
        <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-gray-900 leading-tight mb-4 tracking-tight">
          Why stigma operates this hard in gambling specifically
        </h2>

        {/* Intro Subtitle */}
        <p className="text-gray-600 text-base sm:text-lg mb-10 leading-relaxed font-normal">
          Stigma in gambling has a structure that distinguishes it from alcohol
          or drug stigma.
        </p>

        {/* List Dividers Container */}
        <div className="border-t border-b border-gray-200 divide-y divide-gray-200">
          {stigmaFactors.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-6 md:py-7 items-start text-sm sm:text-base leading-relaxed"
            >
              {/* Term Label Side Column */}
              <div className="md:col-span-3 text-[#1d7092] font-bold text-xs sm:text-sm tracking-wider uppercase pt-0.5">
                {item.label}
              </div>

              {/* Detailed Explanation Column */}
              <div className="md:col-span-9 text-gray-700 leading-relaxed font-normal">
                {item.description}
              </div>
            </div>
          ))}
        </div>

        {/* Closing Sentence with Links */}
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed pt-8 font-normal">
          How the industry frames harm as personal responsibility, and what it
          has done to keep that frame in place, is set out in{" "}
          <Link
            to="/gambling-explained"
            className="text-gray-900 font-semibold underline hover:text-[#17a9df] transition-colors"
          >
            Gambling Explained
          </Link>{" "}
          and{" "}
          <Link
            to="/gambling-tactics"
            className="text-gray-900 font-semibold underline hover:text-[#17a9df] transition-colors"
          >
            Gambling Tactics
          </Link>
          .
        </p>
      </div>
    </section>
  );
};

export default WhyStigmaOperates;
