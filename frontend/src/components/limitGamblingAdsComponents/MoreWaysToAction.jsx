import React from "react";
import { Link } from "react-router-dom";

const MoreWaysToAction = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-white border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-4 text-center">
        {/* Accent Bar */}
        <div className="w-12 h-[3px] bg-[#156E94] mx-auto mb-5"></div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 tracking-tight">
          More ways to take action.
        </h2>

        {/* Subtitle */}
        <p className="text-[15px] sm:text-base text-gray-700 leading-relaxed max-w-2xl mx-auto mb-8 font-normal">
          If the gambling itself is the more pressing thing right now, blocking access and talking to someone both help.
        </p>

        {/* Buttons / Actions */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <a
            href="tel:08088020133"
            className="inline-flex items-center gap-1.5 bg-[#156E94] hover:bg-[#0f5370] text-white font-medium text-sm py-3 px-6 transition-colors shadow-xs"
          >
            <span className="font-bold">0808 8020 133</span>
            <span>, National Gambling Helpline</span>
          </a>

          <Link
            to="/get-help/blocking-tools"
            className="inline-flex items-center justify-center border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-medium text-sm py-3 px-6 transition-colors"
          >
            Put blocks in place
          </Link>

          <Link
            to="/get-help"
            className="inline-flex items-center justify-center hover:bg-Primary/10 border border-gray-900 text-gray-900 font-semibold text-sm hover:underline hover:text-[#156E94] transition-colors py-3 px-4"
          >
            Get help
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MoreWaysToAction;
