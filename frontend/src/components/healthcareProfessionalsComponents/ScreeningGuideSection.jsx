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

      {/* Box 1: Opening question (replaces Lie/Bet probe - HC5a) */}
      <div className="border border-gray-200/90 p-6 md:p-8 mb-6 bg-white shadow-xs">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
          Ask one question first
        </h3>
        <blockquote className="text-xl md:text-2xl italic text-gray-700 leading-normal mb-4 font-normal">
          "Are you worried that you or someone close to you is gambling too much?"
        </blockquote>
        <p className="text-xs sm:text-sm text-gray-500">
          This is the opening question NICE recommends (NG248). Its second half gives someone harmed by another person's gambling a way to answer.
        </p>
      </div>

      {/* Box 2: PGSI Short Form (HC5b, HC6, HC5c) */}
      <div className="border border-gray-200/90 p-6 md:p-8 mb-8 bg-white shadow-xs">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 tracking-tight">
          The PGSI short form: three questions if the answer is yes about their own gambling
        </h3>
        <p className="text-sm sm:text-base text-gray-700 mb-4 font-semibold">
          Thinking about the last 12 months:
        </p>

        {/* Ordered List of 3 Questions */}
        <ol className="list-decimal pl-5 space-y-2.5 text-sm sm:text-base text-gray-700 mb-5 font-normal">
          <li>Have you bet more than you could really afford to lose?</li>
          <li>
            Have people criticised your betting or told you that you had a gambling problem, regardless of whether or not you thought it was true?
          </li>
          <li>
            Have you felt guilty about the way you gamble or what happens when you gamble?
          </li>
        </ol>

        {/* Scoring Key */}
        <div className="bg-slate-50 border border-slate-200 p-3 rounded-md mb-5 text-xs sm:text-sm text-slate-700">
          <span className="font-semibold text-slate-900">Answers:</span> Never 0 · Sometimes 1 · Most of the time 2 · Almost always 3
        </div>

        {/* Attribution line */}
        <p className="text-xs text-gray-500 italic mb-5">
          Items from the Problem Gambling Severity Index (Ferris &amp; Wynne, 2001); three-item short form as used by the Gambling Commission.
        </p>

        {/* Interpretation Footer (HC6) */}
        <div className="pt-4 border-t border-gray-100 text-sm sm:text-base leading-relaxed text-gray-700 font-normal">
          <strong className="font-bold text-gray-900 mr-1.5">
            Interpretation:
          </strong>
          Score 0: no indicators reported. 1: low level of gambling harm. 2 to 3: moderate. 4 or more: severe. The short form misses about a third of the people the full nine-item PGSI identifies, so treat any score of 1 or more as worth a conversation, and do not wait for a high score before referring.
        </div>

        {/* GHSI Note (HC5c) */}
        <div className="mt-4 pt-4 border-t border-dashed border-gray-200 text-xs sm:text-sm text-gray-600 leading-relaxed">
          For a fuller picture of harm, including harm from someone else's gambling, use the Gambling Harms Severity Index (GHSI) at{" "}
          <a
            href="https://gamblingharms.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0082c3] underline font-semibold hover:text-[#006699]"
          >
            gamblingharms.org
          </a>
          : GHSI-3 for a brief check, GHSI-AO for people harmed by someone else's gambling.
        </div>
      </div>

      {/* Box 3: Dark Callout Note Panel (HC7) */}
      <div className="relative bg-[#181818] border-l-[4px] border-[#0082c3] p-6 md:p-8 overflow-hidden shadow-xs">
        <h4 className="text-[#0082c3] text-xs sm:text-sm font-bold uppercase tracking-wider mb-3">
          A note on the PGSI threshold
        </h4>

        <div className="text-sm sm:text-base text-gray-300 leading-relaxed font-normal">
          <p>
            This produces an underestimate: about a third of people reporting severe consequences from their own gambling score below PGSI 8+ (GSGB data tables), up to 85% of health loss arises below the severe band in the Australian burden analysis (Browne et al., 2017), and on GHUK's UK model it is around half among people who gamble. In clinical practice, take PGSI 1+ as a signal worth acting on.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ScreeningGuideSection;
