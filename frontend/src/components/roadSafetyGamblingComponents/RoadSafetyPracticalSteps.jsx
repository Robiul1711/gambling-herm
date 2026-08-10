import React from "react";
import { Link } from "react-router-dom";

const steps = [
  {
    step: "STEP 1",
    title: "Lead from the top",
    description:
      "Sign the Gambling Harm UK Transport CEO Pledge and set the tone for the whole organisation.",
    buttonText: "CEO Pledge →",
    buttonLink: "#ceo-pledge",
  },
  {
    step: "STEP 2",
    title: "Build awareness",
    description:
      "Embed gambling harm into your existing wellbeing and safety programmes rather than treating it as separate.",
    buttonText: null,
  },
  {
    step: "STEP 3",
    title: "Support managers",
    description:
      "Equip managers to Notice → Ask → Listen → Support with confidence and compassion.",
    buttonText: "Manager Guidance →",
    buttonLink: "#manager-guidance",
  },
  {
    step: "STEP 4",
    title: "Assess risk",
    description:
      "Include gambling harm within relevant fatigue, wellbeing and safety risk assessments.",
    buttonText: "Risk Assessment Guidance →",
    buttonLink: "#risk-assessment",
  },
  {
    step: "STEP 5",
    title: "Support employees",
    description:
      "Provide confidential pathways to help for employees affected by their own gambling or someone else's.",
    buttonText: "Employee Support Pathway →",
    buttonLink: "#employee-support",
  },
];

const RoadSafetyPracticalSteps = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-white pb-28 border-t border-slate-100">
      <div className="max-w-4xl mx-auto">
        {/* Accent Bar */}
        <div className="w-14 h-[3.5px] bg-[#0093D0] mb-7"></div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-[#1e293b] mb-7 tracking-tight">
          What transport organisations can do
        </h2>

        {/* Intro */}
        <p className="text-base sm:text-lg text-slate-700 leading-relaxed md:leading-[1.8] mb-12 font-normal">
          Five practical steps, each supported by a free downloadable resource.
        </p>

        {/* 5 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200/90 rounded-2xl p-7 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow"
            >
              <div>
                {/* Step Tag */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-3.5 h-[2px] bg-[#0093D0]"></span>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#0093D0]">
                    {item.step}
                  </span>
                </div>

                {/* Card Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-[#1e293b] mb-3.5 tracking-tight">
                  {item.title}
                </h3>

                {/* Card Description */}
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed md:leading-[1.65] font-normal">
                  {item.description}
                </p>
              </div>

              {/* Card Action Button if provided */}
              {item.buttonText && (
                <div className="pt-6">
                  <a
                    href={item.buttonLink}
                    className="border border-slate-800 hover:bg-slate-50 text-slate-900 font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-lg transition-colors inline-block"
                  >
                    {item.buttonText}
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoadSafetyPracticalSteps;
