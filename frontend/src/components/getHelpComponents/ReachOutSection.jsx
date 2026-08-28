import React from "react";

const items = [
  {
    title: "No-one will judge you.",
    description:
      'The people on the other end of these phone lines have heard everything. They don\'t think you\'re weak, stupid, or "should have known better". They\'re trained to help.',
  },
  {
    title: "It's confidential.",
    description:
      "These services are confidential: nothing goes to your bank, your employer or anyone else in your life. The one exception, for any service, is if they believe someone is in serious danger.",
  },
  {
    title: "It's free.",
    description:
      "Every route on this page is free at the point of use. The helpline, GAMSTOP, NHS clinics, Gamblers Anonymous, Gordon Moody, all free.",
  },
  {
    title: "No-one will push you into one box.",
    description:
      'You\'ll be helped to find what fits your situation. Not everyone needs the same thing, and being "ready to change" is not a precondition for getting support.',
  },
];

const ReachOutSection = () => {
  return (
    <section className="bg-[#181818] py-12 md:py-20 text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Label */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-[3px] bg-[#00AEEF]" />
          <span className="text-[#00AEEF] text-xs sm:text-sm font-bold uppercase tracking-wider">
            WHAT TO EXPECT
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-white leading-tight tracking-tight mb-10">
          When you reach out, here's what won't happen.
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col">
              <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight mb-3 tracking-tight">
                {item.title}
              </h3>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReachOutSection;
