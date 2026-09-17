import React from "react";
import { Link } from "react-router-dom";

const RoadSafetyHero = () => {
  return (
    <section className="bg-[#f2f9fd] py-16 md:py-24 border-b border-sky-100/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Breadcrumb Tagline */}
        <div className="flex items-center justify-center gap-2.5 mb-5">
          <span className="w-5 h-[2.5px] bg-[#0093D0]"></span>
          <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#0093D0]">
            FOR TRANSPORT ORGANISATIONS &middot; ROAD SAFETY
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-extrabold text-[#1e293b] leading-[1.18] tracking-tight mb-8 max-w-4xl mx-auto">
          Gambling Harm and Road Safety
        </h1>

        {/* Paragraph 1 */}
        <p className="text-base sm:text-lg text-slate-700 leading-relaxed md:leading-[1.8] mb-6 font-normal max-w-3xl mx-auto">
          An emerging public safety issue for transport organisations. New
          research commissioned by Gambling Harm UK suggests gambling harm can
          impair the capacities safe driving depends on: attention, rest,
          emotional wellbeing and decision-making. It can affect other road
          users, not only the person gambling.
        </p>

        {/* Paragraph 2 */}
        <p className="text-base sm:text-lg text-slate-700 leading-relaxed md:leading-[1.8] mb-10 font-normal max-w-3xl mx-auto">
          Understanding these risks can help transport organisations create
          safer workplaces and protect employees, passengers, and other road
          users.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://gamblingharm.sharepoint.com/:b:/g/IQCl7512FvaYT6zW60m11T24AZXu835KtqOI2iIl4IlXn7Y?e=4LIPkW"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-Primary hover:bg-[#0076a8] text-white font-semibold text-sm md:text-base px-6 py-3.5 transition-colors shadow-sm inline-block"
          >
            Download the Road Safety Research Report
          </a>

          <a
            href="https://gamblingharm.sharepoint.com/:i:/g/IQBuU5l28H5PSb_gg-RGbV_RAet8BRzenNHmGOV4aucjR5s?e=gycrY5"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white hover:bg-slate-50 text-slate-900 border border-slate-800 font-semibold text-sm md:text-base px-6 py-3.5 transition-colors shadow-sm inline-block"
          >
            View Road Safety Poster &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};

export default RoadSafetyHero;
