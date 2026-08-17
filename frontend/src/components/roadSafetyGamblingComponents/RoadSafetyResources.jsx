import React from "react";
import { Link } from "react-router-dom";

const resourcesList = [
  {
    number: 1,
    title: "Road Safety Research Report",
    description: "The full findings from the study of UK driving licence holders.",
  },
  {
    number: 2,
    title: "CEO Pledge",
    description:
      "A leadership commitment to prevent gambling harm and protect public safety.",
  },
  {
    number: 3,
    title: "Manager Guidance",
    description:
      "Recognising and responding to gambling harm in the workplace.",
  },
  {
    number: 4,
    title: "Gambling Harm Risk Assessment Guidance",
    description:
      "A framework for identifying, assessing and managing workplace risk.",
  },
  {
    number: 5,
    title: "Employee Self-Assessment",
    description:
      "A confidential way for employees to reflect on their own gambling.",
  },
  {
    number: 6,
    title: "Employee Support Pathway",
    description:
      "A safe, confidential route for employees to disclose and get help.",
  },
];

const RoadSafetyResources = () => {
  return (
    <section className="py-16 md:py-24 bg-white border-t border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Accent Bar */}
        <div className="w-14 h-[3.5px] bg-[#0093D0] mb-7"></div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-[#1e293b] mb-6 tracking-tight">
          Resources
        </h2>

        {/* Subtitle / Intro */}
        <p className="text-base sm:text-lg text-slate-700 leading-relaxed md:leading-[1.8] mb-10 font-normal">
          Free to download. To protect this material and understand who is using
          it, we ask organisations to register a few details before we send the
          download links.
        </p>

        {/* Numbered Resources List */}
        <div className="space-y-4 mb-10">
          {resourcesList.map((item) => (
            <div
              key={item.number}
              className="bg-white border border-slate-200/90 rounded-2xl p-5 sm:p-6 flex items-start gap-4 sm:gap-5 shadow-xs hover:shadow-md transition-shadow"
            >
              {/* Number Circle Badge */}
              <div className="w-8 h-8 rounded-full bg-[#156E94] text-white font-bold flex items-center justify-center text-xs shrink-0 mt-0.5 shadow-xs">
                {item.number}
              </div>

              {/* Resource Content */}
              <div>
                <h3 className="font-bold text-[#1e293b] text-base sm:text-[17px] tracking-tight">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm mt-1 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <Link
            to="/register-keep-updated"
            className="bg-Primary hover:bg-[#0076a8] text-white font-semibold text-xs sm:text-sm px-6 py-3.5 rounded-md transition-colors shadow-sm inline-block"
          >
            Register &amp; access the resources
          </Link>

          <Link
            to="/about#contact"
            className="border border-slate-800 hover:bg-slate-50 text-slate-900 font-semibold text-xs sm:text-sm px-6 py-3.5 rounded-md transition-colors shadow-sm inline-block"
          >
            Request training &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RoadSafetyResources;
