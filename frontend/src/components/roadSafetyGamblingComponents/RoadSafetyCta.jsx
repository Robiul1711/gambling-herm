import React from "react";
import { Link } from "react-router-dom";

const RoadSafetyCta = () => {
  return (
    <section className="bg-[#121417] py-20 md:py-28 px-4 md:px-8 text-white text-center">
      <div className="max-w-4xl mx-auto">
        {/* Top Centered Accent Bar */}
        <div className="w-14 h-[3.5px] bg-[#0093D0] mx-auto mb-8"></div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-5 tracking-tight leading-[1.2]">
          Help create safer transport systems
        </h2>

        {/* Subtitle / Paragraph */}
        <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed md:leading-[1.8] mb-10 font-normal">
          Recognising gambling harm as an emerging workplace risk can support
          safer employees, safer organisations and safer roads.
        </p>

        {/* 3 Action Buttons */}
        <div className="flex flex-wrap justify-center items-center gap-4">
          <a
            href="#research-report"
            className="bg-Primary hover:bg-[#0076a8] text-white font-semibold text-xs sm:text-sm px-6 py-3.5 rounded-md transition-colors shadow-sm"
          >
            Download Research Report
          </a>

          <a
            href="#ceo-pledge"
            className="bg-white hover:bg-slate-100 text-slate-900 font-semibold text-xs sm:text-sm px-6 py-3.5 rounded-md transition-colors shadow-sm"
          >
            Sign CEO Pledge
          </a>

          <Link
            to="/about#contact"
            className="bg-white hover:bg-slate-100 text-slate-900 font-semibold text-xs sm:text-sm px-6 py-3.5 rounded-md transition-colors shadow-sm"
          >
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RoadSafetyCta;
