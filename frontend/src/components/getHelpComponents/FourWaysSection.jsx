import React from "react";
import { Link } from "react-router-dom";
import whatHelpIsAvailable from "@/assets/audio/what-help-is-available.mp3";

const FourWaysSection = () => {
  return (
    <div className="py-12 md:py-16 max-w-5xl mx-auto px-4 sm:px-6">
      {/* Top Label */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-[3px] bg-[#0092D0]"></div>
        <span className="text-xs sm:text-sm text-[#0092D0] font-bold uppercase tracking-wider">
          Routes
        </span>
      </div>

      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
        Four ways to start.
      </h2>

      {/* Description */}
      <p className="text-base sm:text-lg leading-relaxed text-gray-600 font-normal mb-8">
        You don't have to pick one. Most people use a combination, blocking
        access and talking to someone, for example, in the same week.{" "}
        <Link
          to="/get-help/treatment"
          className="font-bold text-gray-900 underline hover:text-[#0092D0] transition-colors"
        >
          Find services in your region →
        </Link>
      </p>

      {/* Audio Card */}
      <div className="bg-[#f8fafc] border-l-4 border-[#0092D0] p-6 sm:p-8  shadow-xs">
        <p className="text-xs font-bold uppercase tracking-wider text-[#0092D0] mb-2">
          EXPERTS BY EXPERIENCE · PHOENIXFM, MAY 2026
        </p>

        <h3 className="text-base sm:text-lg font-bold text-gray-900 leading-snug mb-4">
          What help is available for people harmed by gambling
        </h3>

        {/* Audio */}
        <div className="mb-4">
          <audio controls className="w-full max-w-[340px] accent-[#0092D0]">
            <source src={whatHelpIsAvailable} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>

        {/* Caption */}
        <p className="text-xs sm:text-sm text-gray-500 italic">
          Clip: John Gilham, interviewed on Phoenix FM's 123 Friday show, May
          2026.
        </p>
      </div>
    </div>
  );
};

export default FourWaysSection;
