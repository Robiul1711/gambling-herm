import React from "react";
import { Link } from "react-router-dom";

const NeurodivergenceCta = () => {
  return (
    <section className="bg-[#121417] py-20 md:py-28 px-4 md:px-8 text-white text-center">
      <div className="max-w-4xl mx-auto">
        {/* Top Centered Accent Bar */}
        <div className="w-14 h-[3.5px] bg-[#0093D0] mx-auto mb-8"></div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-extrabold text-white mb-6 tracking-tight leading-[1.2]">
          The product is the problem, not the person.
        </h2>

        {/* Subtitle / Paragraph */}
        <p className="text-gray-300 max-w-3xl mx-auto text-sm sm:text-base md:text-lg lg:text-[19px] leading-relaxed md:leading-[1.8] mb-10 font-normal">
          If you're worried about your own gambling, or someone else's, and any
          of this reflects your experience, that's a reason to reach out, not a
          reason to expect a harder conversation.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center items-center gap-4 mb-10">
          <Link
            to="/get-help"
            className="bg-[#0093D0] hover:bg-[#0076a8] text-white font-semibold text-sm md:text-base px-7 py-3.5 rounded-lg transition-colors shadow-sm"
          >
            Find direct routes to support
          </Link>

          <Link
            to="/get-help/treatment"
            className="bg-white hover:bg-slate-100 text-slate-900 font-semibold text-sm md:text-base px-7 py-3.5 rounded-lg transition-colors shadow-sm"
          >
            Find treatment near you
          </Link>
        </div>

        {/* Bottom Related Page Links */}
        <div className="flex flex-wrap justify-center items-center gap-2 text-sm md:text-base pt-2">
          <Link
            to="/inequality-and-gambling-harm"
            className="text-[#0093D0] underline hover:text-[#40c4f7] font-medium transition-colors"
          >
            Inequality &amp; gambling harm
          </Link>
          <span className="text-slate-500 mx-2">&middot;</span>
          <Link
            to="/understanding-gambling-harms"
            className="text-[#0093D0] underline hover:text-[#40c4f7] font-medium transition-colors"
          >
            Understanding gambling harms
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NeurodivergenceCta;
