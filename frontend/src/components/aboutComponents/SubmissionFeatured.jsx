import React from "react";

export default function SubmissionFeatured() {
  return (
    <section className="w-full bg-[#18181b] text-white py-10 md:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Layout Container with Left Border Accent */}
        <div className=" rounded-lg p-6 sm:p-8 md:p-10 border-l-[4px] border-[#0092D0] shadow-xl flex flex-col justify-between space-y-6">
          <div>
            {/* Section Subtitle Tag & Meta */}
            <div className="flex flex-wrap items-center gap-x-3 mb-4 text-xs sm:text-sm font-medium">
              <span className="text-[#38bdf8] uppercase tracking-wider font-bold">
                SUBMISSION · FEATURED
              </span>
              <span className="text-gray-400 font-medium">
                15 July 2026 · APPG on Gambling Reform
              </span>
            </div>

            {/* Main Statement Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white leading-snug md:leading-tight max-w-4xl mb-4">
              Gambling harm in the United Kingdom: epidemiology, health burden,
              and economic costs
            </h2>

            {/* Body Paragraph Content Block */}
            <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-5xl font-normal">
              Our flagship 2026 submission to the All-Party Parliamentary Group
              on Gambling Reform. UK burden modelling, the QALY-cost case
              against the scale of the current statutory levy, and a structured
              recommendations package covering levy, advertising, product
              safety, MECC, NHS coding and DHSC regulatory consolidation.
              Authored by Dr Kishan Patel (CEO & Founder).
            </p>
          </div>

          {/* Bottom Right Button */}
          <div className="flex justify-end pt-2">
            <button
              disabled
              className="border border-gray-600 rounded px-4 py-2 text-xs sm:text-sm font-medium text-gray-300 cursor-default bg-transparent hover:border-gray-500 transition-colors"
            >
              Publishing soon
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

