import React from "react";
import whatgambling from "@/assets/images/whatgambling.png";

const harms = [
  {
    title: "Financial",
    description:
      "Debt, used savings, lost homes, borrowing from family, payday loans, hidden credit, and (sometimes) crime committed in desperation. Financial harm typically arrives first and last longest.",
  },
  {
    title: "Relational",
    description:
      "Lost trust, secrecy, family breakdown, separation, custody complications, isolation from friends. The damage to relationships is often what people grieve most in recovery.",
  },
  {
    title: "Mental health",
    description:
      "Anxiety, depression, sleeplessness, shame, loss of identity, loss of pleasure in other things. Gambling harm and mental-health conditions almost always sit alongside each other.",
  },
  {
    title: "Physical",
    description:
      "Stress-related symptoms, weight change, sleep collapse, alcohol use, neglected basic care, exhaustion.",
  },
  {
    title: "Work / study",
    description:
      "Concentration loss, absenteeism, lost jobs, lost qualifications, lost professional reputation.",
  },
  {
    title: "Suicide risk",
    description:
      "Gambling carries one of the highest suicide rates of any addiction. The risk peaks not at the height of gambling but in the days and weeks after a heavy loss, when shame and hopelessness compound.",
  },
];

const GamblingHarmLooksLike = () => {
  return (
    <section id="gambling-harm" className="pb-8 md:pb-16 max-w-5xl mx-auto px-4">
      <div className="">

        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between md:gap-10 mb-8 md:mb-16">
          <div className="max-w-xl">
            <div className="w-12 h-[3px] bg-Primary2 mb-6"></div>

            <h2 className="text-4xl font-bold text-[#1d1d1d] mb-5">
              1. What gambling harm looks like
            </h2>

            <p className="text-[#727272] leading-8">
              Harm is plural. It is rarely just about money, and the money harms
              are rarely just about debt.
            </p>
          </div>

          <div className="max-w-[280px]">
            <img
              src={whatgambling}
              alt=""
              className="rounded-xl shadow-md w-full"
            />
          </div>
        </div>

        {/* Table */}
        <div className="border-t border-gray-200">
          {harms.map((item, index) => (
            <div
              key={index}
              className="grid md:grid-cols-[220px_1fr] gap-8 py-4 md:py-8 border-b border-gray-200"
            >
              <h3 className="text-Primary2 text-sm font-medium">
                {item.title}
              </h3>

              <p className="text-[#444] leading-8 text-[15px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Alert Box */}
        <div className="max-w-3xl mx-auto mt-10">
          <div className="bg-[#f9e9ea] rounded-lg border-l-4 border-[#d91f26] px-8 py-8">
            <h4 className="font-semibold text-[#222] mb-5">
              If reading this is upsetting
            </h4>

            <p className="text-[#6b6b6b] leading-7">
              That's normal. Recognition is hard. If you'd like to talk to
              someone right now, the{" "}
              <span className="font-semibold text-black">
                National Gambling Helpline (0808 8020 133)
              </span>{" "}
              is free, confidential and open 24/7.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GamblingHarmLooksLike;