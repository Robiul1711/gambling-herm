import React from "react";

const PolicyPositionsInequality = () => {
  return (
    <div className="py-12 md:py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Top Accent Line */}
        <div className="w-12 h-[3px] bg-[#17a9df] mb-6"></div>

        {/* Dark Policy Background Card */}
        <div className="bg-[#181818]  overflow-hidden shadow-md border-l-[4px] border-[#17a9df]">
          <div className="p-6 sm:p-8 md:p-10">
            {/* Callout Header */}
            <h4 className="text-[#17a9df] text-xs sm:text-sm font-bold tracking-wider uppercase mb-5">
              OUR POLICY POSITIONS ON INEQUALITY
            </h4>

            {/* Intro text */}
            <p className="text-white font-bold text-base sm:text-lg leading-relaxed mb-6">
              Three asks of the UK gambling-harm response:
            </p>

            {/* List of Ordered Asks */}
            <div className="space-y-5 text-sm sm:text-base leading-relaxed text-gray-300 font-normal">
              {/* Ask 1 */}
              <p>
                <strong className="text-white font-bold">
                  (1) Statutory levy distribution should be needs-weighted,
                </strong>{" "}
                not flat, ringfenced funding for the most-affected and
                most-underserved groups (CYP affected-others, ethnic minority
                communities, neurodivergent populations, bereaved families).
              </p>

              {/* Ask 2 */}
              <p>
                <strong className="text-white font-bold">
                  (2) Treatment must be funded to integrate,
                </strong>{" "}
                not duplicate, gambling-harm services co-located with debt
                advice, NHS mental-health pathways, family services and trauma
                care.
              </p>

              {/* Ask 3 */}
              <p>
                <strong className="text-white font-bold">
                  (3) Marketing restrictions should weight the inequality
                  picture,
                </strong>{" "}
                point-of-sale density, sponsorship in deprived-area sport, and
                ad targeting that lands harder on already-marginalised
                communities should be regulated tightly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PolicyPositionsInequality;
