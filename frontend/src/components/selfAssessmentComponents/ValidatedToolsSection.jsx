import React from "react";
import { Link } from "react-router-dom";

const ValidatedToolsSection = () => {
  const tools = [
    {
      title: "PGSI gambling tool",
      description:
        "The long-standing UK screening tool for your own gambling, used in national prevalence surveys for two decades.",
      buttonText: "Take the PGSI →",
      link: "/get-help/check-in",
    },
    {
      title: "GHSI screening tool",
      description:
        "The Gambling Harms Screening Index, covering harm across financial, relationship, health and other areas of life.",
      buttonText: "Take the GHSI →",
      link: "/get-help/check-in",
    },
    {
      title: "GHSI for family and friends",
      description:
        "If you're here because of someone else's gambling rather than your own, this version is built for you.",
      buttonText: "Take the GHSI-AO →",
      link: "/get-help/affected-others-check-in",
    },
  ];

  return (
    <section className="w-full bg-white py-14 sm:py-18 md:py-20 border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Top Accent Line */}
        <div className="w-12 h-[3.5px] bg-[#0082c3] mb-6"></div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
          Take the validated tools
        </h2>

        {/* Intro */}
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-normal mb-10">
          GHUK hosts three short, validated screening tools. Each takes a few
          minutes and gives you guidance on next steps based on your answers.
        </p>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="border border-gray-200/90 rounded-xl p-6 sm:p-7 flex flex-col justify-between bg-white hover:border-gray-300 hover:shadow-md transition-all duration-200"
            >
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3.5 leading-snug">
                  {tool.title}
                </h3>
                <p className="text-sm sm:text-[15px] text-gray-600 leading-relaxed mb-8">
                  {tool.description}
                </p>
              </div>

              <div>
                <Link
                  to={tool.link}
                  className="inline-flex items-center justify-center bg-[#136b8a] hover:bg-[#0f5973] text-white font-semibold text-xs sm:text-sm px-5 py-3 rounded-md transition-colors shadow-sm"
                >
                  {tool.buttonText}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Subnote */}
        <p className="text-xs sm:text-sm text-gray-500 leading-relaxed mt-6">
          These tools are screens, not diagnoses. None of them replace an
          assessment by a clinician, and none of them are a test you pass or
          fail.
        </p>
      </div>
    </section>
  );
};

export default ValidatedToolsSection;
