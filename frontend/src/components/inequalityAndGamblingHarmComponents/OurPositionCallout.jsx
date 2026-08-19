import React from "react";

const OurPositionCallout = () => {
  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Light Blue Accent Card Container */}
        <div className="bg-[#edf7fd] border-l-[4px] border-[#17a9df]  overflow-hidden shadow-xs">
          <div className="p-6 sm:p-8 md:p-10">
            {/* Header Title */}
            <h4 className="text-[#17a9df] text-xs sm:text-sm font-bold tracking-wider uppercase mb-4">
              OUR POSITION
            </h4>

            {/* Main Narrative Block */}
            <div className="space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed font-normal">
              <p>
                Gambling harm is structurally produced. Where harm concentrates
                is where commercial determinants land hardest, in places with
                more gambling venues, more targeted advertising, less tailored
                treatment, less independent advice.{" "}
                <strong className="text-gray-900 font-bold">
                  The distribution of gambling harm is a distribution of
                  corporate and regulatory choices, not personal ones.
                </strong>
              </p>

              {/* Framework Footer Citation Text */}
              <p className="text-xs sm:text-sm text-gray-500 italic leading-relaxed pt-2">
                The framework on this page is adapted from the{" "}
                <span className="italic">
                  Gambling Harms Inequalities Framework
                </span>
                , a GambleAware-funded synthesis. We use its three-factor
                structure but sharpen the language around commercial
                determinants and reject the "responsible gambling" framing
                carried elsewhere in the source material.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurPositionCallout;
