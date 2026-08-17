import React from "react";
import { Link } from "react-router-dom";

const hazardousItems = [
  {
    tag: "SPEED",
    description:
      "Modern online slots and in-play betting compress the gap between decision and outcome to seconds. Where disengagement is already harder, a faster loop gives fewer natural points to stop.",
  },
  {
    tag: "VARIABLE-RATIO REINFORCEMENT",
    description:
      "Unpredictable, intermittent wins are the most behaviourally powerful reinforcement schedule known, precisely because the brain can't predict when the next reward lands. This is a design choice, not an incidental feature.",
  },
  {
    tag: "NEAR-MISS DESIGN",
    description:
      "Outcomes engineered to look like \"almost winning\" keep engagement high even through losing streaks, exploiting reward-sensitivity rather than rewarding it.",
  },
  {
    tag: "CONTINUOUS PLAY",
    description:
      "No natural break points, next round loading automatically, autoplay options, session end left entirely to the person rather than the product. Removing the pause removes the moment where disengagement might otherwise happen.",
  },
];

const NeurodivergenceHazardous = () => {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Accent Bar */}
        <div className="w-12 h-[3px] bg-[#0093D0] mb-6"></div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-gray-900 mb-4 tracking-tight leading-tight">
          Why gambling products are particularly hazardous here
        </h2>

        {/* Intro */}
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal mb-8">
          The mechanisms that plausibly elevate risk for people with ADHD map
          closely onto specific, deliberate features of gambling product design.
          See our full{" "}
          <Link
            to="/gambling-tactics"
            className="text-gray-900 underline hover:text-[#0093D0] font-semibold"
          >
            Gambling Tactics
          </Link>{" "}
          page for the wider picture.
        </p>

        {/* Hazard List Rows */}
        <div className="divide-y divide-dashed divide-gray-200 border-t border-b border-dashed border-gray-200">
          {hazardousItems.map((item, idx) => (
            <div
              key={idx}
              className="py-5 sm:py-6 flex flex-col md:flex-row md:items-start gap-2 md:gap-8"
            >
              {/* Tag / Left Column */}
              <div className="w-full md:w-56 shrink-0">
                <span className="text-xs sm:text-sm font-bold text-[#0093D0] tracking-wider uppercase block">
                  {item.tag}
                </span>
              </div>

              {/* Description / Right Column */}
              <div className="flex-1">
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NeurodivergenceHazardous;
