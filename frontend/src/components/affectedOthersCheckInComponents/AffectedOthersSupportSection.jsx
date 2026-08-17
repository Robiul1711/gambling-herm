import React from "react";
import { Link } from "react-router-dom";

const AffectedOthersSupportSection = () => {
  return (
    <section className="w-full bg-[#181818] text-white py-16 md:py-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Accent Bar */}
        <div className="w-12 h-[3px] bg-[#0082c3] mx-auto mb-6" />

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight">
          You're allowed to need help, too.
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-gray-300 mx-auto mb-8 sm:mb-10 leading-relaxed font-normal max-w-2xl">
          Whatever the person you're worried about decides to do, support for
          you doesn't wait on it.
        </p>

        {/* Main CTA Buttons */}
        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 mb-8">
          {/* Helpline Button */}
          <a
            href="tel:08088020133"
            className="bg-[#136b8a] hover:bg-[#0f5973] text-white text-sm sm:text-base font-semibold px-6 py-3  transition-colors duration-200 shadow-xs inline-flex items-center justify-center gap-1.5"
          >
            <span>0808 8020 133</span>
            <span className="opacity-75 font-normal">.</span>
            <span>National Gambling Helpline</span>
          </a>

          {/* Family & friends page Button */}
          <Link
            to="/get-help/family-friends"
            className="bg-white hover:bg-gray-100 text-gray-900 text-sm sm:text-base font-semibold px-6 py-3  transition-colors duration-200 shadow-xs inline-flex items-center justify-center"
          >
            Family & friends page
          </Link>
        </div>

        {/* Secondary Links */}
        <div className="flex flex-wrap justify-center items-center gap-2 text-xs sm:text-sm text-gray-300">
          <Link
            to="/get-help/treatment"
            className="text-gray-300 hover:text-white underline font-semibold transition-colors"
          >
            Find treatment near you
          </Link>
          <span className="text-gray-500 font-bold">•</span>
          <Link
            to="/urgent-help"
            className="text-gray-300 hover:text-white underline font-semibold transition-colors"
          >
            Crisis & urgent help
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AffectedOthersSupportSection;
