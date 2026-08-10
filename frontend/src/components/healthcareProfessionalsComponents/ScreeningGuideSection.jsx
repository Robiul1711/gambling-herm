import React from "react";

const ScreeningGuideSection = () => {
  return (
    <div className="w-full max-w-6xl px-4 mx-auto section-padding-y bg-white text-gray-800">
      {/* Header Accent Line */}
      <div className="w-12 h-[3px] bg-[#0082c3] mb-4"></div>

      {/* Main Heading & Intro */}
      <h2 className="text-3xl md:text-[36px] font-bold text-gray-900 tracking-tight mb-4">
        How to ask, in 30 seconds
      </h2>
      <p className="text-[15px] text-gray-600 leading-relaxed mb-8">
        Validated short screens exist. The barrier is not the question; it is
        permission to ask it. The questions below are the ones we recommend
        integrating into history-taking.
      </p>

      {/* Box 1: One-item probe */}
      <div className="border border-gray-300 p-6 md:p-8 mb-6 bg-white shadow-sm">
        <h3 className="text-lg font-bold text-gray-900 mb-4">
          One-item probe (use first)
        </h3>
        <blockquote className="text-xl md:text-2xl italic text-gray-500 leading-normal mb-4">
          "Have you ever felt you needed to bet more and more money?"
        </blockquote>
        <p className="text-sm text-gray-400">
          Adapted from the Lie-Bet screen; high sensitivity for harmful
          gambling. A "yes" justifies the longer screen below.
        </p>
      </div>

      {/* Box 2: PGSI Short Form */}
      <div className="border border-gray-300 p-6 md:p-8 mb-8 bg-white shadow-sm">
        <h3 className="text-lg font-bold text-gray-900 mb-2">
          PGSI short form (use if probe positive)
        </h3>
        <p className="text-sm text-gray-600 mb-6 font-medium">
          Ask each, score 0–3 (never/sometimes/most of the time/almost always):
        </p>

        {/* Ordered List of Questions */}
        <ol className="list-decimal pl-5 space-y-3 text-[15px] text-gray-700 mb-6">
          <li>Have you bet more than you could really afford to lose?</li>
          <li>
            Have you needed to gamble with larger amounts to get the same buzz?
          </li>
          <li>
            Have you gone back another day to try to win back what you lost?
          </li>
          <li>Have you borrowed money or sold anything to gamble?</li>
          <li>Have you felt you might have a problem with gambling?</li>
          <li>
            Has your gambling caused you any health problems, stress, anxiety?
          </li>
          <li>
            Have people criticised your betting or told you that you had a
            problem, regardless of whether or not you thought it was true?
          </li>
          <li>
            Has your gambling caused any financial problems for you or your
            household?
          </li>
          <li>
            Have you felt guilty about the way you gamble or what happens when
            you gamble?
          </li>
        </ol>

        {/* Interpretation Meta Footer */}
        <p className="text-[14px] leading-relaxed text-gray-700 pt-2 border-t border-gray-100">
          <span className="font-bold text-gray-900">Interpretation:</span> 1–2
          low-risk, 3–7 moderate-risk, 8+ severe. Meaningful harm exists from
          PGSI 1+. Do not wait for PGSI 8+ before referring.
        </p>
      </div>

      {/* Box 3: Dark Callout Note Panel */}
      <div className="relative bg-[#262524] p-6 md:p-8 overflow-hidden shadow-inner">
        {/* Absolute Highlight Left Border */}
        <div className="absolute left-0 top-0 bottom-0 w-[5px] bg-[#0082c3]"></div>

        <h4 className="text-[#0082c3] text-sm font-semibold tracking-wide mb-4">
          A note on the PGSI threshold
        </h4>

        <div className="text-[14px] text-gray-300 leading-relaxed space-y-4 font-normal">
          <p>
            UK gambling-prevalence figures have long used a PGSI 8+ cut-off as
            the threshold for"problem gambling". This produces an underestimate.
            70–85% of gambling-related YLDs in international studies arise from
            PGSI 1–7 ("low-risk" and"moderate-risk") groups, the prevention
            paradox. In clinical practice, take PGSI 1+ as a signal worth acting
            on.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ScreeningGuideSection;
