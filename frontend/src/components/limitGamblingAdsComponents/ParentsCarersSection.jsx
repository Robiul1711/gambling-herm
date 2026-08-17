import React from "react";
import { Link } from "react-router-dom";

const ParentsCarersSection = () => {
  const points = [
    {
      title: "Use parental controls.",
      text: 'Console and platform parental controls can restrict in-game spending and require a password or PIN for purchases, including loot boxes and "packs".',
    },
    {
      title: "Talk about loot boxes the way you'd talk about a fruit machine.",
      text: "A random reward for money is the same mechanic, whatever it's called inside the game.",
    },
    {
      title: "Know the gap.",
      text: "Loot boxes and similar gamblified mechanics currently sit outside the Gambling Act's scope, so the age-verification and stake protections that apply to licensed gambling don't automatically apply to them.",
    },
  ];

  return (
    <section id="for-parents-carers" className="scroll-mt-24 w-full py-12 md:py-16 bg-white border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-4">
        {/* Accent Bar */}
        <div className="w-12 h-[3px] bg-[#0082c3] mb-4"></div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 tracking-tight">
          For parents and carers
        </h2>

        {/* Intro */}
        <p className="text-[15px] sm:text-base text-gray-700 leading-relaxed mb-8">
          Children's exposure to gambling advertising and gamblified content is wider than most parents expect, and some of it sits outside the rules that govern gambling itself.
        </p>

        {/* Points list */}
        <div className="divide-y divide-dashed divide-gray-200 mb-8">
          {points.map((p, idx) => (
            <div key={idx} className="py-4 first:pt-0 last:pb-0">
              <p className="text-[14px] sm:text-[15px] text-gray-700 leading-relaxed">
                <strong className="font-bold text-gray-900">{p.title}</strong>{" "}
                {p.text}
              </p>
            </div>
          ))}
        </div>

        {/* Footer Link Notes */}
        <p className="text-[13.5px] sm:text-[14px] text-gray-600 leading-relaxed max-w-3xl">
          More on this in our guides for{" "}
          <Link to="/children-and-safeguarding" className="underline hover:text-[#0082c3] text-gray-900 font-medium">
            children and safeguarding
          </Link>{" "}
          and for{" "}
          <Link to="/professionals/teachers-cyp" className="underline hover:text-[#0082c3] text-gray-900 font-medium">
            teachers and CYP professionals
          </Link>
          .
        </p>
      </div>
    </section>
  );
};

export default ParentsCarersSection;
