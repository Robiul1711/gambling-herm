import React from "react";
import { Link } from "react-router-dom";

const SpendSupportRoutes = () => {
  return (
    <section className="w-full bg-[#181C1E] text-white py-16 sm:py-20 md:py-24 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto text-center">
        {/* Accent Bar */}
        <div className="w-12 h-[3px] bg-[#0092D0] mx-auto mb-6" />

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-white mb-4 tracking-tight leading-snug">
          If this figure has landed hard, there's somewhere to take it.
        </h2>

        {/* Description */}
        <p className="text-sm sm:text-base text-gray-300 max-w-xl mx-auto mb-8 sm:mb-10 leading-relaxed font-normal">
          A number on a screen is a starting point, not a verdict. These are some
          of the routes people use next.
        </p>

        {/* Buttons Group */}
        <div className="flex flex-col items-center gap-3 sm:gap-4">
          {/* Top Row Buttons */}
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 w-full">
            {/* Helpline Button */}
            <a
              href="tel:08088020133"
              className="bg-[#156E94] hover:bg-[#115b7c] text-white text-xs sm:text-sm font-semibold px-5 py-3 transition-colors duration-200 shadow-sm"
            >
              0808 8020 133 . National Gambling Helpline
            </a>

            {/* Get help Button */}
            <Link
              to="/get-help"
              className="bg-white hover:bg-gray-100 text-gray-900 text-xs sm:text-sm font-medium px-5 py-3 transition-colors duration-200 shadow-sm"
            >
              Get help
            </Link>

            {/* Blocking tools Button */}
            <Link
              to="/get-help/blocking-tools"
              className="bg-white hover:bg-gray-100 text-gray-900 text-xs sm:text-sm font-medium px-5 py-3 transition-colors duration-200 shadow-sm"
            >
              Blocking tools
            </Link>
          </div>

          {/* Bottom Row Button */}
          <div>
            <Link
              to="/get-help/treatment"
              className="inline-block bg-white hover:bg-gray-100 text-gray-900 text-xs sm:text-sm font-medium px-6 py-3 transition-colors duration-200 shadow-sm"
            >
              Find treatment near you
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpendSupportRoutes;
