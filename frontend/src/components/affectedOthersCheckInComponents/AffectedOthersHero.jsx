import React from "react";

const AffectedOthersHero = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#eaf6fb] via-[#f3f9fb] to-white py-12 md:py-20 border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Eyebrow */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-8 h-[2px] bg-[#0082c3] block"></span>
          <span className="text-xs sm:text-sm font-bold text-[#0082c3] uppercase tracking-wider">
            Family & Friends Check-in
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
          For everyone carrying someone else's gambling.
        </h1>

        {/* Intro Paragraph */}
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
          This is for partners, parents, adult children, siblings, close friends,
          and anyone living with the consequences of someone else's gambling. It
          is a short, private way to notice what you're carrying. Nothing is
          stored, sent or shared, and there's no score at the end.
        </p>
      </div>
    </section>
  );
};

export default AffectedOthersHero;
