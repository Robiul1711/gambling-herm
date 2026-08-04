import React from "react";

const PolicyPositionsInequality = () => {
  return (
    <div className="py-10 md:py-16">
      <div className="max-w-5xl mx-auto px-4">
        {/* Top Accent Line */}
        <div className="w-12 h-[3px] bg-[#17a9df] mb-6"></div>

        {/* Dark Policy Background Card */}
        <div className="bg-[#181818] rounded-r-xl overflow-hidden shadow-xl border-l-[4px] border-[#17a9df]">
          <div className="p-8 md:p-10">
            {/* Callout Header */}
            <h4 className="text-[#17a9df] text-xs md:text-sm font-bold tracking-wider uppercase mb-6">
              OUR POLICY POSITIONS ON INEQUALITY
            </h4>

            {/* Intro text */}
            <p className="text-gray-200 font-medium text-[15px] leading-relaxed mb-6">
              Three asks of the UK gambling-harm response:
            </p>

            {/* List of Ordered Asks */}
            <div className="space-y-6 text-[15px] leading-relaxed text-gray-300">
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
                  (3) Marketing restrictions should weight the inequality picture,
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
