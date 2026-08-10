import React from "react";
import { Link } from "react-router-dom";

const RoadSafetyAboutGhuk = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-white border-t border-slate-100">
      <div className="max-w-4xl mx-auto">
        {/* Accent Bar */}
        <div className="w-14 h-[3.5px] bg-[#0093D0] mb-7"></div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-[#1e293b] mb-6 tracking-tight">
          About Gambling Harm UK
        </h2>

        {/* Narrative Paragraph */}
        <p className="text-slate-700 text-base sm:text-lg leading-relaxed md:leading-[1.8] max-w-3xl mb-8 font-normal">
          Gambling Harm UK is a national charity working to prevent avoidable
          gambling harm through creating connectivity, developing capability and
          maximising capacity across communities, organisations, and public
          services.
        </p>

        {/* Button */}
        <div>
          <Link
            to="/about"
            className="border border-slate-800 hover:bg-slate-50 text-slate-900 font-semibold text-xs sm:text-sm px-6 py-3.5 rounded-md transition-colors shadow-sm inline-block"
          >
            Learn more about Gambling Harm UK &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RoadSafetyAboutGhuk;
