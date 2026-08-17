import React from "react";

const frameworkPoints = [
  {
    title: "Multiple domains, not one score.",
    description:
      "Harm is measured across financial, relationship, mental-health, physical-health, work/study and criminal-legal domains, rather than reduced to a single severity number.",
  },
  {
    title: "Affected others by design.",
    description:
      "The framework explicitly captures harm to people other than the person who gambles, partners, parents, children, friends. The PGSI was designed only for the person gambling.",
  },
  {
    title: "Severity weighting that reflects population harm.",
    description:
      "Uses Multi-Criteria Decision Analysis (MCDA) to weight domains relative to one another, allowing like-for-like comparison with the burden of alcohol and other addictive harms.",
  },
  {
    title: "Better at the moderate-risk band where most population harm sits.",
    description:
      "The GHSI structure handles the 70–85% of harm that lives below the conventional PGSI 8+ threshold, the band the public-health evidence has consistently said matters most.",
  },
];

const GHSIFrameworkSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-white border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Top line */}
        <div className="w-12 h-[3px] bg-[#0093D0] mb-6" />

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-gray-900 leading-tight tracking-tight">
          About the GHSI Holistic Framework of Harm
        </h2>

        {/* Intro */}
        <div className="mt-8 space-y-5">
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-normal">
            The Gambling Harms Severity Index (GHSI) was developed by the
            National Centre for Social Research (NatCen) and published in 2025.
            It is the newer, broader UK measurement framework for gambling-related
            harm.
          </p>

          <p className="text-gray-900 text-lg sm:text-xl font-bold leading-relaxed">
            What makes the GHSI different from the older PGSI:
          </p>
        </div>

        {/* Points */}
        <div className="mt-8 border-t border-dashed border-gray-200">
          {frameworkPoints.map((point, index) => (
            <div
              key={index}
              className="py-5 border-b border-dashed border-gray-200"
            >
              <p className="text-base sm:text-lg leading-relaxed">
                <span className="font-bold text-gray-900 mr-2">
                  {point.title}
                </span>
                <span className="text-gray-600">
                  {point.description}
                </span>
              </p>
            </div>
          ))}
        </div>

        {/* Bottom paragraph */}
        <div className="mt-10">
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            Our check-in tools draw on the GHSI's domain structure and its
            inclusive-of-affected-others stance, while keeping the question count
            low enough to be usable in three minutes. They are reflection prompts
            (not clinical diagnostics) and don't replace a conversation with the
            National Gambling Helpline{" "}
            <a href="tel:08088020133" className="font-bold text-gray-900 hover:text-Primary underline">0808 8020 133</a> or a{" "}
            <span className="font-bold text-gray-900">
              Specialist NHS Gambling Service.
            </span>
          </p>
        </div>

        {/* Source */}
        <div className="mt-8 pt-6 border-t border-gray-100">
          <p className="text-xs sm:text-sm text-gray-500 leading-relaxed italic">
            Source: The Gambling Harms Severity Index (GHSI): Development of a
            Holistic Framework and Measurement Instruments for Gambling Related
            Harms and Their Impact. National Centre for Social Research, 2025.
            We cite this work alongside the wider research library with a note
            on funding source.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GHSIFrameworkSection;