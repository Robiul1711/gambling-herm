import React from "react";
import { Link } from "react-router-dom";

const SelfAssessmentSupportSection = () => {
  return (
    <section className="w-full bg-[#181818] text-white py-16 md:py-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Accent Bar */}
        <div className="w-12 h-[3px] bg-[#0082c3] mx-auto mb-6" />

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight">
          Wherever your worry sits, there's a next step.
        </h2>

        {/* Description */}
        <p className="text-base sm:text-lg text-gray-300 mx-auto mb-8 sm:mb-10 leading-relaxed font-normal max-w-2xl">
          If you'd rather start somewhere else, the check-in helps you find the
          right door, and support exists whether you're here for yourself or for
          someone you love.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col items-center gap-3 sm:gap-4">
          {/* Top Row Buttons */}
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 w-full">
            {/* Helpline Button */}
            <a
              href="tel:08088020133"
              className="bg-[#136b8a] hover:bg-[#0f5973] text-white text-sm sm:text-base font-semibold px-6 py-3  transition-colors duration-200 shadow-xs inline-flex items-center justify-center gap-1.5"
            >
              <span>0808 8020 133</span>
              <span className="opacity-75 font-normal">.</span>
              <span>National Gambling Helpline</span>
            </a>

            {/* Try the check-in Button */}
            <Link
              to="/get-help/check-in"
              className="bg-white hover:bg-gray-100 text-gray-900 text-sm sm:text-base font-semibold px-6 py-3  transition-colors duration-200 shadow-xs"
            >
              Try the check-in
            </Link>

            {/* Get help Button */}
            <Link
              to="/get-help"
              className="bg-white hover:bg-gray-100 text-gray-900 text-sm sm:text-base font-semibold px-6 py-3  transition-colors duration-200 shadow-xs"
            >
              Get help
            </Link>
          </div>

          {/* Bottom Row Buttons */}
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 w-full">
            {/* Find treatment near you */}
            <Link
              to="/get-help/treatment"
              className="bg-white hover:bg-gray-100 text-gray-900 text-sm sm:text-base font-semibold px-6 py-3  transition-colors duration-200 shadow-xs"
            >
              Find treatment near you
            </Link>

            {/* Worried about someone else */}
            <Link
              to="/get-help/family-friends"
              className="bg-white hover:bg-gray-100 text-gray-900 text-sm sm:text-base font-semibold px-6 py-3  transition-colors duration-200 shadow-xs"
            >
              Worried about someone else
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelfAssessmentSupportSection;
