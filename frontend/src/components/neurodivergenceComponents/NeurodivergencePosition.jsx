import React from "react";

const NeurodivergencePosition = () => {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Top Accent Line */}
        <div className="w-14 h-[3.5px] bg-[#0093D0] mb-7"></div>

        {/* Dark Position Card Container */}
        <div className="bg-[#181a1b] rounded-r-2xl overflow-hidden shadow-2xl border-l-[5px] border-[#0093D0]">
          <div className="p-8 sm:p-10 md:p-12">
            {/* Header Title */}
            <h3 className="text-[#0093D0] text-xs md:text-sm font-bold tracking-widest uppercase mb-6">
              OUR POSITION
            </h3>

            {/* Subtitle statement */}
            <p className="text-gray-200 font-semibold text-base sm:text-lg  leading-relaxed mb-8">
              Three asks follow from the evidence as it currently stands:
            </p>

            {/* List of 3 Asks */}
            <div className="space-y-8 text-sm sm:text-base md:text-lg lg:text-[18px] leading-relaxed md:leading-[1.8] text-gray-300">
              {/* Ask 1 */}
              <p>
                <strong className="text-white font-bold">
                  (1) Neurodivergence-adapted treatment pathways
                </strong>{" "}
                should be funded as standard within gambling-harm services, not
                left to individual clinician goodwill or a handful of specialist
                pilots.
              </p>

              {/* Ask 2 */}
              <p>
                <strong className="text-white font-bold">
                  (2) Product regulation should account for differential
                  susceptibility.
                </strong>{" "}
                If specific design features (speed, variable-ratio
                reinforcement, near-miss design, continuous play) plausibly
                land harder on people with ADHD, regulation of those features
                is a neurodivergence issue as well as a general product-safety
                one.
              </p>

              {/* Ask 3 */}
              <p>
                <strong className="text-white font-bold">
                  (3) Research funding should close the evidence gap
                </strong>{" "}
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
