import React from "react";
import { Link } from "react-router-dom";

const HowThisSits = () => {
  const workLinks = [
    {
      category: "Gambling Tactics",
      label: (
        <>
          the industry-tactics analysis (product design, availability,
          clustering, narrative control) that explains{" "}
          <em className="italic">why</em> land-based self-exclusion has been
          allowed to fail.
        </>
      ),
      href: "/gambling-tactics",
    },
    {
      category: "Burden of harm",
      label:
        "the population-level case for treating gambling harm as a leading modifiable risk factor.",
      href: "/burden-of-harm",
    },
    {
      category: "Policy positions",
      label:
        "our wider regulatory programme, statutory levy, DHSC consolidation, advertising restrictions, NHS-led treatment.",
      href: "/policy-and-advocacy",
    },
    {
      category: "Blocking & self-exclusion guide",
      label:
        'the practical "what you can do today" routes including GAMSTOP, Gamban, bank blocks and the multi-operator land-based schemes.',
      href: "/get-help/blocking-tools",
    },
  ];

  return (
    <section className="bg-white text-gray-800 max-w-5xl mx-auto py-12">
      {/* Header Block */}
      <div className="flex flex-col items-start text-left mb-10">
        <div className="w-12 h-[3px] bg-[#166B94] mb-4" />
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
          How this sits with our other work
        </h2>
        <p className="text-gray-600 text-base md:text-lg mt-3 max-w-3xl leading-relaxed">
          Members Only goes deep on one specific, fixable failure in land-based
          gambling. The rest of our work connects to it at every level.
        </p>
      </div>

      {/* Directory List Container */}
      <div className="divide-y divide-gray-200 border-t border-b border-gray-200">
        {workLinks.map((item, index) => (
          <div
            key={index}
            className="py-6 text-base md:text-lg leading-relaxed text-gray-800"
          >
            <span className="font-bold text-gray-900">{item.category}</span>{" "}
            <span className="text-gray-500 font-normal">&rarr;</span>{" "}
            <span className="text-gray-700">{item.label}</span>{" "}
            <Link
              to={item.href}
              className="text-[#166B94] hover:text-[#005580] font-medium underline inline-flex items-center gap-0.5 ml-1 transition-colors whitespace-nowrap"
            >
              Read &rarr;
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowThisSits;

