import React from "react";

const WhyMissesPoint = () => {
  return (
    <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16 bg-white">
      <div>
        {/* Top Accent Line */}
        <div className="w-12 h-[3px] bg-[#0092D0] mb-4" />

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
          Why "they're nearly adults" misses the point
        </h2>

        {/* Content Paragraphs */}
        <div className="space-y-6 text-base sm:text-lg text-gray-600 font-normal leading-relaxed">
          <p>
            Brain imaging studies show that the brain's decision-making and
            addictive-behaviour areas continue to develop until around the age
            of 25. The cognitive capacities that gambling-product design
            specifically targets (impulse control, reward processing, risk
            assessment) are among the last to mature.
          </p>
          
          <p>
            This matters for two reasons. First, exposure to gambling products
            in adolescence is associated with significantly elevated lifetime
            risk of harm. Second, it makes "personal responsibility" framing
            (already weak in adult contexts) analytically incoherent for
            children.
          </p>
        </div>

        {/* Citation Footer */}
        <footer className="mt-8 text-xs sm:text-sm text-gray-500 italic">
          Citation: Gambling Explained 2021, P.18.
        </footer>
      </div>
    </section>
  );
};

export default WhyMissesPoint;