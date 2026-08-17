import React from "react";

const LimitAdsHero = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#eaf6fb] via-[#f3f9fb] to-white py-14 md:py-20 border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4">
        {/* Eyebrow */}
        <div className="flex items-center gap-2.5 mb-4">
          <span className="w-6 h-[2.5px] bg-[#0082c3] block"></span>
          <span className="text-xs font-bold text-[#0082c3] uppercase tracking-widest">
            Tools to take action
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl  xl:text-6xl font-bold text-gray-900 tracking-tight leading-[1.15] mb-6 max-w-3xl">
          Reduce the gambling advertising you see.
        </h1>

        {/* Intro Narrative */}
        <p className="text-[15px] sm:text-lg text-gray-700 leading-relaxed max-w-3xl font-normal">
          Practical steps to cut down on gambling marketing and gamblified content, wherever it reaches you. And GHUK's position on the part of this that isn't yours to fix: no setting on your phone changes shirt sponsorship or in-play odds graphics, and it shouldn't have to.
        </p>
      </div>
    </section>
  );
};

export default LimitAdsHero;
