import React from "react";

const ScreeningGuideSection = () => {
  return (
    <div className="w-full max-w-5xl px-4 sm:px-6 mx-auto py-12 md:py-16 bg-white text-gray-900">
      {/* Header Accent Line */}
      <div className="w-12 h-[3px] bg-[#0082c3] mb-4"></div>

      {/* Main Heading & Intro */}
      <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-gray-900 tracking-tight mb-4 leading-tight">
        How to ask, in 30 seconds
      </h2>
      <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal mb-8">
        Validated short screens exist. The barrier is not the question; it is
        permission to ask it. The questions below are the ones we recommend
        integrating into history-taking.
      </p>

      {/* Box 1: One-item probe */}
      <div className=" border border-gray-200/90 p-6 md:p-8 mb-6 bg-white shadow-xs">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
          One-item probe (use first)
        </h3>
        <blockquote className="text-xl md:text-2xl italic text-gray-700 leading-normal mb-4 font-normal">
          "Have you ever felt you needed to bet more and more money?"
        </blockquote>
        <p className="text-xs sm:text-sm text-gray-500 italic">
          Adapted from the Lie-Bet screen; high sensitivity for harmful
          gambling. A "yes" justifies the longer screen below.
        </p>
      </div>

      {/* Box 2: PGSI Short Form */}
      <div className=" border border-gray-200/90 p-6 md:p-8 mb-8 bg-white shadow-xs">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 tracking-tight">
          PGSI short form (use if probe positive)
        </h3>
        <p className="text-sm sm:text-base text-gray-600 mb-6 font-medium">
          Ask each, score 0–3 (never/sometimes/most of the time/almost always):
        </p>

        {/* Ordered List of Questions */}
        <ol className="list-decimal pl-5 space-y-2.5 text-sm sm:text-base text-gray-700 mb-6 font-normal">
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
        <p className="text-sm sm:text-base leading-relaxed text-gray-600 pt-4 border-t border-gray-100 font-normal">
          <strong className="font-bold text-gray-900 mr-1.5">
            Interpretation:
          </strong>{" "}
          1–2 low-risk, 3–7 moderate-risk, 8+ severe. Meaningful harm exists
          from PGSI 1+. Do not wait for PGSI 8+ before referring.
        </p>
      </div>

      {/* Box 3: Dark Callout Note Panel */}
      <div className="relative bg-[#181818] rounded-r-xl border-l-[4px] border-[#0082c3] p-6 md:p-8 overflow-hidden shadow-xs">
        <h4 className="text-[#0082c3] text-xs sm:text-sm font-bold uppercase tracking-wider mb-3">
          A note on the PGSI threshold
        </h4>

        <div className="text-sm sm:text-base text-gray-300 leading-relaxed font-normal">
          <p>
            UK gambling-prevalence figures have long used a PGSI 8+ cut-off as
            the threshold for "problem gambling". This produces an
            underestimate. 70–85% of gambling-related YLDs in international
            studies arise from PGSI 1–7 ("low-risk" and "moderate-risk") groups,
            the prevention paradox. In clinical practice, take PGSI 1+ as a
            signal worth acting on.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ScreeningGuideSection;
