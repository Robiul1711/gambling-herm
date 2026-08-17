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
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-gray-900 leading-tight tracking-tight mb-4">
        Not sure if your gambling is harmful?
      </h2>

      {/* Description */}
      <p className="text-base sm:text-lg leading-relaxed text-gray-600 font-normal mb-8">
        Lots of people aren't. Harm exists on a spectrum, and many people who'd
        benefit from support don't think of themselves as having a "problem". A
        short, private set of questions can help you reflect on where you are.
      </p>

      {/* Questions Card */}
      <div className="bg-[#edf7fd] border-l-4 border-[#0093d0] rounded-r-xl p-6 sm:p-8 md:p-10 shadow-xs mb-8">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 tracking-tight">
          A few questions worth asking yourself
        </h3>

        <div className="space-y-0">
          {questions.map((question, index) => (
            <div
              key={index}
              className="py-4 border-b border-dashed border-gray-300/80"
            >
              <p className="text-sm sm:text-base text-gray-800 leading-relaxed font-normal">
                {question}
              </p>
            </div>
          ))}

          <div className="py-4 border-b border-dashed border-gray-300/80">
            <p className="text-sm sm:text-base text-gray-800 leading-relaxed font-normal">
              If you answered yes to two or more, your gambling may well be
              causing you harm and it is worth talking to someone, without
              waiting for the situation to get worse.
            </p>
          </div>

          <div className="pt-4">
            <p className="text-xs sm:text-sm text-gray-500 italic">
              Adapted from the PGSI, a short clinical screening tool. We use it
              as a reflective prompt, not a diagnostic threshold.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Card */}
      <div className="bg-[#181818] border-l-4 border-[#0093d0] rounded-r-xl p-6 sm:p-8 md:p-10 shadow-md">
        <h4 className="text-[#00a2e8] text-xs sm:text-sm font-bold uppercase tracking-wider mb-4">
          A note on the PGSI threshold
        </h4>

        <div className="space-y-4">
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-normal">
            UK gambling-prevalence figures have for decades used a PGSI score of
            8 or above as the cut-off for the most severe band. This produces a
            binary (you either meet that threshold or you don't) that the actual
            evidence on harm does not support. Meaningful harm exists well below
            PGSI 8.
          </p>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-normal">
            If your score is lower than 8 but you're worried, your worry is the
            relevant signal, not the score. Please consider talking to someone.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HarmfulGamblingSection;
