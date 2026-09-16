import React from "react";
import { Link } from "react-router-dom";

const RoadSafetyCta = () => {
  return (
    <section className="bg-[#121417] py-20 md:py-28 text-white text-center">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Top Centered Accent Bar */}
        <div className="w-14 h-[3.5px] bg-[#0093D0] mx-auto mb-8"></div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-5 tracking-tight leading-[1.2]">
          Help create safer transport systems
        </h2>

        {/* Subtitle / Paragraph */}
        <p className="text-gray-300 mx-auto text-sm sm:text-base md:text-lg leading-relaxed md:leading-[1.8] mb-10 font-normal">
          Recognising gambling harm as an emerging workplace risk can support
          safer employees, safer organisations and safer roads.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center items-center gap-4">
          <a
            href="https://gamblingharm.sharepoint.com/:b:/g/IQCl7512FvaYT6zW60m11T24AZXu835KtqOI2iIl4IlXn7Y?e=4LIPkW"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-Primary hover:bg-[#0076a8] text-white font-semibold text-xs sm:text-sm px-6 py-3.5 transition-colors shadow-sm"
          >
            Read the full report (PDF)
          </a>

          <a
            href="https://gamblingharm.sharepoint.com/:i:/g/IQBuU5l28H5PSb_gg-RGbV_RAet8BRzenNHmGOV4aucjR5s?e=gycrY5"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white hover:bg-slate-100 text-slate-900 font-semibold text-xs sm:text-sm px-6 py-3.5 transition-colors shadow-sm"
          >
            Road Safety Poster
          </a>

          <Link
            to="/about#contact"
            className="bg-white hover:bg-slate-100 text-slate-900 font-semibold text-xs sm:text-sm px-6 py-3.5 transition-colors shadow-sm"
          >
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RoadSafetyCta;
