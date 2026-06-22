import React from "react";

const WhyMissesPoint = () => {
  return (
    <section className="w-full max-w-5xl mx-auto section-padding-y">
      <div className="">
        
        {/* Top Accent Line */}
        <div className="w-[45px] h-[3px] bg-[#3A86B9] mb-6 md:w-[55px]" />

        {/* Heading */}
        <h2 className="text-[26px] font-bold tracking-tight text-[#1E1E1E] leading-[1.2] mb-6  sm:text-[38px] md:text-[44px] xmd:text-[48px]">
          Why "they're nearly adults" misses the point
        </h2>

        {/* Content Paragraphs */}
        <div className="space-y-6 text-[#5E6573] text-[15px] leading-[1.6] xs:text-base sm:text-[17px] md:text-[18px]">
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
        <footer className="mt-8 text-[11px] text-[#8E94A0] tracking-wide xs:text-xs">
          Citation: Gambling Explained 2021, P.18.
        </footer>
        
      </div>
    </section>
  );
};

export default WhyMissesPoint;