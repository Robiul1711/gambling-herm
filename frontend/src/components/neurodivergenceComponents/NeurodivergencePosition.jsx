import React from "react";

const NeurodivergencePosition = () => {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Top Accent Line */}
        <div className="w-12 h-[3px] bg-[#0093D0] mb-6"></div>

        {/* Dark Position Card Container */}
        <div className="bg-[#181818] rounded-r-xl overflow-hidden shadow-md border-l-[4px] border-[#0093D0]">
          <div className="p-6 sm:p-8 md:p-10">
            {/* Header Title */}
            <h3 className="text-[#0093D0] text-xs sm:text-sm font-bold tracking-wider uppercase mb-4">
              OUR POSITION
            </h3>

            {/* Subtitle statement */}
            <p className="text-white font-bold text-base sm:text-lg leading-relaxed mb-6">
              Three asks follow from the evidence as it currently stands:
            </p>

            {/* List of 3 Asks */}
            <div className="space-y-5 text-sm sm:text-base leading-relaxed text-gray-300 font-normal">
              {/* Ask 1 */}
              <p>
                <strong className="text-white font-bold mr-1">
                  (1) Neurodivergence-adapted treatment pathways
                </strong>
                should be funded as standard within gambling-harm services, not
                left to individual clinician goodwill or a handful of specialist
                pilots.
              </p>

              {/* Ask 2 */}
              <p>
                <strong className="text-white font-bold mr-1">
                  (2) Product regulation should account for differential
                  susceptibility.
                </strong>
                If specific design features (speed, variable-ratio
                reinforcement, near-miss design, continuous play) plausibly
                land harder on people with ADHD, regulation of those features
                is a neurodivergence issue as well as a general product-safety
                one.
              </p>

              {/* Ask 3 */}
              <p>
                <strong className="text-white font-bold mr-1">
                  (3) Research funding should close the evidence gap
                </strong>
                for forms of neurodivergence beyond ADHD. The absence of
                evidence is not evidence of absence, and the current gap leaves
                large groups of people without an evidence base that reflects
                them.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NeurodivergencePosition;
