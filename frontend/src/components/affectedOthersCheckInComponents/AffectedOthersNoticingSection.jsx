import React from "react";

const AffectedOthersNoticingSection = () => {
  const observations = [
    {
      category: "MONEY",
      text: "Amounts that don't add up. Unexplained withdrawals or borrowing. Checking accounts more than you used to, or feeling unable to stop checking.",
    },
    {
      category: "HONESTY",
      text: "Being lied to, about money, about time, about where they've been. Catching yourself no longer believing the first explanation you're given.",
    },
    {
      category: "SLEEP",
      text: "Lying awake running numbers or scenarios. Waking to check a phone or an account.",
    },
    {
      category: "ARGUMENTS",
      text: "Rows that circle back to money or trust more often than they used to. Walking on eggshells to avoid the next one.",
    },
    {
      category: "SECRECY",
      text: "Hiding the situation from friends and family. Rehearsing explanations for things that shouldn't need explaining.",
    },
    {
      category: "PLANS",
      text: "Cancelling plans, socially withdrawing, or feeling too exhausted or too watchful to keep up ordinary life.",
    },
    {
      category: "YOUR HEALTH",
      text: "Anxiety that doesn't switch off. Low mood. Physical tension. Reaching for alcohol or other things to cope.",
    },
    {
      category: "CHILDREN",
      text: "Changes in a child's sleep, mood or behaviour, or a sense that they're picking up on tension in the house. See the section below.",
    },
    {
      category: "YOURSELF",
      text: "Whether you've stopped thinking about your own needs at all, whether there's a version of your life, your work, your friendships, that's gone quiet while you manage this.",
    },
  ];

  return (
    <section className="w-full bg-white py-12 md:py-16 border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Top Accent Line */}
        <div className="w-12 h-[3px] bg-[#0082c3] mb-4"></div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-gray-900 tracking-tight mb-4 leading-tight">
          Things worth noticing
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal mb-8">
          These are observations, not a quiz, and there's no threshold to cross
          before they count. If any of this feels familiar, that familiarity is
          the signal.
        </p>

        {/* Key-Value Observation Table / Rows */}
        <div className="border-t border-gray-200/80">
          {observations.map((item, index) => (
            <div
              key={index}
              className="py-4 sm:py-4.5 border-b border-gray-200/80 flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-8"
            >
              {/* Category Label */}
              <div className="w-full sm:w-36 flex-shrink-0">
                <span className="text-[#0082c3] font-bold text-xs sm:text-sm tracking-wider uppercase">
                  {item.category}
                </span>
              </div>

              {/* Description */}
              <div className="flex-1">
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AffectedOthersNoticingSection;
