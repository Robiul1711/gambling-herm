import React from "react";
import { Link } from "react-router-dom";

const FourWaysSection = () => {
  return (
    <div className="section-padding-y max-w-5xl mx-auto px-4">
      {/* Top Label */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-6 h-[2px] bg-[#0B89C8]"></div>
        <span className="text-sm text-[#0B89C8] font-medium">Routes</span>
      </div>

      {/* Heading */}
      <h2 className="text-[30px] xs:text-[36px] sm:text-[44px] md:text-[56px] font-bold text-[#222] leading-tight">
        Four ways to start.
      </h2>

      {/* Description */}
      <p className="mt-5 max-w-3xl text-base sm:text-lg leading-relaxed sm:leading-9 text-[#73768B]">
        You don't have to pick one. Most people use a combination, blocking
        access and talking to someone, for example, in the same week.
        <Link
          to="/get-help/treatment"
          className="ml-1 font-medium text-[#222] underline cursor-pointer block sm:inline mt-2 sm:mt-0"
        >
          Find services in your region →
        </Link>
      </p>

      {/* Audio Card */}
      <div className="mt-12 border-l-4 border-[#0B89C8] pl-4 sm:pl-8">
        <p className="text-sm text-[#0B89C8]">
          Lived experience • PhoenixFM, May 2026
        </p>

        <h3 className="mt-3 text-lg sm:text-[24px] font-medium text-[#222] leading-snug">
          What help is available for people affected by gambling harm
        </h3>

        {/* Audio */}
        <div className="mt-6">
          <audio controls className="w-full max-w-[340px]">
            <source src="/audio/sample.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>

        {/* Caption */}
        <p className="mt-5 text-[15px] leading-7 text-[#8A8DA0]">
          Clip: John Gilham, interviewed on Phoenix FM's 123 Friday show, May
          2026.
        </p>
      </div>
    </div>
  );
};

export default FourWaysSection;
