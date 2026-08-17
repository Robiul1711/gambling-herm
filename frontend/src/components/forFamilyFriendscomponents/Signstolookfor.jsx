import React from "react";

const signs = [
  {
    category: "Money",
    description:
      "Unexplained withdrawals, missing cash, secrecy about finances, new credit cards, sudden borrowing, items missing or sold, \"lost\" wages, unpaid bills.",
  },
  {
    category: "Phone & tech",
    description:
      "Phone or laptop hidden when you walk into the room, multiple new apps installed and deleted, late-night usage, agitation if you ask to use their phone.",
  },
  {
    category: "Sport",
    description:
      "Intensified, anxious interest in sports they didn't used to care about. Mood swings tied to fixtures rather than scores. Live results checking that interrupts everything else.",
  },
  {
    category: "Mood",
    description:
      "Irritability, withdrawal, depression, hopelessness, defensiveness when asked simple questions, an underlying low-grade fear.",
  },
  {
    category: "Family",
    description:
      "Disengagement from family routine, missed events with vague explanations, lost interest in things they used to love.",
  },
  {
    category: "Physical",
    description:
      "Sleep change, weight change, neglected basics, increased alcohol or other substance use.",
  },
];

export default function Signstolookfor() {
  return (
    <section className="w-full bg-white text-gray-900 py-12 md:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Top Blue Accent Line */}
        <div className="w-12 h-[3px] bg-[#0092D0] mb-5"></div>

        {/* Heading Section */}
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-gray-900 leading-tight tracking-tight mb-4">
            Signs to look for
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-normal">
            No single sign is conclusive, and you'll know your person better
            than any list can. But if you're noticing a cluster of these, your
            instincts are worth listening to.
          </p>
        </div>

        {/* Signs Table/List */}
        <div className="divide-y divide-gray-200 border-t border-b border-gray-200">
          {signs.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-3 md:gap-8 py-5 md:py-6 items-start"
            >
              {/* Category column */}
              <h3 className="text-[#0092D0] font-bold text-xs sm:text-sm tracking-wider uppercase pt-0.5">
                {item.category}
              </h3>
              {/* Signs description column */}
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}