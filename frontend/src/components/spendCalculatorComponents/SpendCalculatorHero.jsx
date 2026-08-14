import React from "react";

const SpendCalculatorHero = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#eaf6fb] via-[#f3f9fb] to-white py-12 sm:py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Accent Tag */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-5 h-[2px] bg-[#0092D0] block"></span>
          <span className="text-xs font-bold text-[#0092D0] uppercase tracking-widest">
            Spend Calculator
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#111827] tracking-tight leading-tight mb-6">
          What gambling is actually costing you.
        </h1>

        {/* Subtitle / Description */}
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
          A short calculator that turns what you stake into a weekly, monthly and
          yearly figure, and shows what that money could otherwise have covered.
          Nothing you enter leaves your browser: there's no data collection, no
          storage, and nothing is sent anywhere.
        </p>
      </div>
    </section>
  );
};

export default SpendCalculatorHero;
