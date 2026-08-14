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
    <section className="w-full bg-white text-[#1f2937]">
      <div className="section-padding-x">
        <div className="max-w-5xl mx-auto">
          {/* Top Blue Accent Line */}
          <div className="w-12 h-[3px] bg-[#67b1cb] mb-5"></div>

          {/* Heading Section */}
          <div className="mb-10">
            <h2 className="text-3xl md:text-[34px] font-bold text-[#111827] leading-tight tracking-tight mb-4">
              Signs to look for
            </h2>
            <p className="text-[#6b7280] text-[20px] sm:text-base leading-relaxed max-w-3xl">
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
                className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-3 md:gap-8 py-6 items-start"
              >
                {/* Category column */}
                <h3 className="text-[#0092D0] font-semibold text-sm sm:text-[15px] tracking-wide">
                  {item.category}
                </h3>
                {/* Signs description column */}
                <p className="text-gray-600 text-sm sm:text-[18px] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}