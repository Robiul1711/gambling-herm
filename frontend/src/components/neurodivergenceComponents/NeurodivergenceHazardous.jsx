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
    <section className=" px-4 md:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Accent Bar */}
        <div className="w-14 h-[3.5px] bg-[#0093D0] mb-7"></div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] font-extrabold text-[#1e293b] mb-7 tracking-tight">
          Why gambling products are particularly hazardous here
        </h2>

        {/* Intro */}
        <p className="text-slate-700 text-base sm:text-lg  leading-relaxed md:leading-[1.8] mb-12">
          The mechanisms that plausibly elevate risk for people with ADHD map
          closely onto specific, deliberate features of gambling product design.
          See our full{" "}
          <Link
            to="/gambling-tactics"
            className="text-slate-900 underline hover:text-[#0093D0] font-semibold"
          >
            Gambling Tactics
          </Link>{" "}
          page for the wider picture.
        </p>

        {/* Hazard List Rows */}
        <div className="divide-y divide-gray-200 border-t border-b border-gray-200">
          {hazardousItems.map((item, idx) => (
            <div
              key={idx}
              className="py-7 sm:py-9 flex flex-col md:flex-row md:items-start gap-4 md:gap-10"
            >
              {/* Tag / Left Column */}
              <div className="w-full md:w-64 shrink-0">
                <span className="text-xs sm:text-sm md:text-[13px] lg:text-[14px] font-bold text-[#0093D0] tracking-wider uppercase block">
                  {item.tag}
                </span>
              </div>

              {/* Description / Right Column */}
              <div className="flex-1">
                <p className="text-base sm:text-lg  text-slate-700  font-normal">
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
