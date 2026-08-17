import React from "react";
import { Link } from "react-router-dom";

export default function CheckYourGambling() {
  const tools = [
    {
      title: "PGSI gambling tool",
      description:
        "Check your gambling habits quickly and confidentially, and see if they may be putting you at risk.",
      buttonText: "Take the PGSI",
      to: "/get-help/check-in",
    },
    {
      title: "GHSI screening tool",
      description:
        "Find out if gambling could be affecting your health and wellbeing, and get clear next steps.",
      buttonText: "Take the GHSI",
      to: "/get-help/check-in",
    },
    {
      title: "GHSI for affected others",
      description:
        "See how someone else's gambling might be impacting you, with support and guidance available right away.",
      buttonText: "Take the GHSI-AO",
      to: "/get-help/check-in",
    },
  ];

  return (
    <section className="w-full py-12 md:py-16 bg-[#fafafa]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-[#1f2937]">
        {/* Header */}
        <header className="mb-10">
          <div className="w-12 h-[3px] bg-[#156E94] mb-4"></div>
          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold tracking-tight text-gray-900 mb-4 leading-tight">
            Check your gambling
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
            Take a short, confidential screening tool to see if gambling may be
            causing harm. You'll get instant feedback and guidance on next
            steps.
          </p>
        </header>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200/90  p-6 sm:p-8 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow duration-300"
            >
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
                  {tool.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-6 font-normal">
                  {tool.description}
                </p>
              </div>
              <div>
                <Link
                  to={tool.to}
                  className="inline-flex items-center gap-2 bg-[#0B678F] hover:bg-[#095272] text-white font-semibold text-sm sm:text-base py-3 px-5  transition-colors shadow-xs"
                >
                  {tool.buttonText}
                  <span>&rarr;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
