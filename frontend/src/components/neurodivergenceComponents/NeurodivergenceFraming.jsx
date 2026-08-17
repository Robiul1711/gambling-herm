import React from "react";

const NeurodivergenceFraming = () => {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-[#edf7fd] border-l-[4px] border-[#0093D0] rounded-r-xl p-6 sm:p-8 md:p-10 shadow-xs">
          {/* Subtitle / Category */}
          <h2 className="text-[#0093D0] text-xs sm:text-sm font-bold tracking-wider uppercase mb-3">
            OUR FRAMING
          </h2>

          {/* Core Statement */}
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-normal">
            Where gambling harm concentrates in neurodivergent people, the cause
            is a product designed to exploit certain response patterns, speed,
            reward unpredictability, difficulty disengaging, not a deficit or a
            personal failing in the person experiencing harm. Any account of this
            topic that locates the problem in the individual rather than the
            product misreads the evidence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NeurodivergenceFraming;
