import React from "react";

const questions = [
  "Have you bet more than you could really afford to lose, in the last year?",
  "Have you needed to gamble with larger amounts to get the same buzz?",
  "Have you gone back another day to try to win back what you lost?",
  "Have you felt guilty about your gambling, or hidden it from people close to you?",
  "Has your gambling caused you any financial, relationship, or mental-health problems?",
];

const HarmfulGamblingSection = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 section-padding-y">
      {/* Heading */}
      <h2 className="text-[28px] xs:text-[34px] sm:text-[44px] md:text-[48px] font-bold text-[#252525] leading-tight">
        Not sure if your gambling is harmful?
      </h2>

      {/* Description */}
      <p className="mt-8 text-base sm:text-lg leading-relaxed sm:leading-9 text-[#72768b] max-w-3xl">
        Lots of people aren't. Harm exists on a spectrum, and many people who'd
        benefit from support don't think of themselves as having a "problem". A
        short, private set of questions can help you reflect on where you are.
      </p>

      {/* Questions Card */}
      <div className="mt-12 bg-[#e7f2f8] border-l-4 border-[#0093d0] p-5 sm:p-8 md:p-10">
        <h3 className="text-xl sm:text-2xl font-semibold text-[#2b2b2b] mb-8">
          A few questions worth asking yourself
        </h3>

        <div className="space-y-0">
          {questions.map((question, index) => (
            <div
              key={index}
              className="py-5 border-b border-dashed border-[#c7d7df]"
            >
              <p className="text-sm sm:text-base md:text-[17px] text-[#333] leading-relaxed md:leading-8">
                {question}
              </p>
            </div>
          ))}

          <div className="py-5 border-b border-dashed border-[#c7d7df]">
            <p className="text-sm sm:text-base md:text-[17px] text-[#333] leading-relaxed md:leading-8">
              If you answered yes to two or more, your gambling may well be
              causing you harm and it is worth talking to someone, without
              waiting for the situation to get worse.
            </p>
          </div>

          <div className="pt-5">
            <p className="text-xs sm:text-sm text-[#7a8591] leading-7">
              Adapted from the PGSI, a short clinical screening tool. We use it
              as a reflective prompt, not a diagnostic threshold.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Card */}
      <div className="mt-8 bg-[#252223] border-l-4 border-[#0093d0] p-5 sm:p-8 md:p-10">
        <h4 className="text-[#00a2e8] text-base sm:text-lg font-medium mb-8">
          A note on the PGSI threshold
        </h4>

        <div className="space-y-8">
          <p className="text-[#d6d6d6] text-sm sm:text-base md:text-[17px] leading-relaxed md:leading-9">
            UK gambling-prevalence figures have for decades used a PGSI score of
            8 or above as the cut-off for the most severe band. This produces a
            binary (you either meet that threshold or you don't) that the actual
            evidence on harm does not support. Meaningful harm exists well below
            PGSI 8.
          </p>

          <p className="text-[#d6d6d6] text-sm sm:text-base md:text-[17px] leading-relaxed md:leading-9">
            If your score is lower than 8 but you're worried, your worry is the
            relevant signal, not the score. Please consider talking to someone.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HarmfulGamblingSection;
