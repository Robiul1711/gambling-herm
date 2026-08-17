import React from "react";
import { Link } from "react-router-dom";

const SelfAssessmentHero = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#eaf6fb] via-[#f3f9fb] to-white py-12 md:py-20 border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Eyebrow */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-8 h-[2px] bg-[#0082c3] block"></span>
          <span className="text-xs sm:text-sm font-bold text-[#0082c3] uppercase tracking-wider">
            Self-assessment
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
          What a self-assessment can tell you, and what it can't.
        </h1>

        {/* Intro Paragraph */}
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal mb-8">
          If you're wondering whether your own gambling is causing harm, this
          page explains what a screen actually measures, walks through the
          questions that matter most, and points you to GHUK's validated
          screening tools. It doesn't produce a diagnosis on its own, and
          neither does any screen.
        </p>

        {/* Young People Notice */}
        <div className="pt-6 border-t border-gray-200/70">
          <p className="text-xs sm:text-sm text-gray-500 italic leading-relaxed font-normal">
            If you're under 18, this page and the linked tools are written with
            adults in mind. Please see our{" "}
            <Link
              to="/get-help/young-people"
              className="text-[#0082c3] underline font-semibold hover:text-[#006090] transition-colors"
            >
              young people page
            </Link>{" "}
            instead, it covers gambling harm and support in a way that fits your
            situation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SelfAssessmentHero;
