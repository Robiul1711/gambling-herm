import React from "react";
import { Link } from "react-router-dom";

const NeurodivergenceCta = () => {
  return (
    <section className="bg-[#181818] py-16 md:py-24 text-white text-center">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Top Centered Accent Bar */}
        <div className="w-12 h-[3px] bg-[#0093D0] mx-auto mb-6"></div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight">
          The product is the problem, not the person.
        </h2>

        {/* Subtitle / Paragraph */}
        <p className="text-gray-300 mx-auto text-base sm:text-lg leading-relaxed mb-8 font-normal max-w-2xl">
          If you're worried about your own gambling, or someone else's, and any
          of this reflects your experience, that's a reason to reach out, not a
          reason to expect a harder conversation.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
          <Link
            to="/get-help"
            className="bg-[#0093D0] hover:bg-[#0076a8] text-white font-semibold text-sm sm:text-base px-6 py-3  transition-colors shadow-xs"
          >
            Find direct routes to support
          </Link>

          <Link
            to="/get-help/treatment"
            className="bg-white hover:bg-gray-100 text-gray-900 font-semibold text-sm sm:text-base px-6 py-3  transition-colors shadow-xs"
          >
            Find treatment near you
          </Link>
        </div>

        {/* Bottom Related Page Links */}
        <div className="flex flex-wrap justify-center items-center gap-2 text-sm sm:text-base pt-2">
          <Link
            to="/inequality-and-gambling-harm"
            className="text-[#0093D0] underline hover:text-[#40c4f7] font-semibold transition-colors"
          >
            Inequality &amp; gambling harm
          </Link>
          <span className="text-gray-500 mx-2">&middot;</span>
          <Link
            to="/understanding-gambling-harms"
            className="text-[#0093D0] underline hover:text-[#40c4f7] font-semibold transition-colors"
          >
            Understanding gambling harms
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NeurodivergenceCta;
