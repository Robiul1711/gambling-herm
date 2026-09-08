import React from 'react';

const PreventionParadoxSection = () => {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16 bg-white text-gray-900">
      {/* Top Accent Blue Line */}
      <div className="w-12 h-[3px] bg-[#0082c3] mb-4"></div>
      
      {/* Main Title */}
      <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-gray-900 tracking-tight mb-6 leading-tight">
        The prevention paradox applies in full
      </h2>
      
      {/* Core Paragraph Content */}
      <div className="space-y-6 text-base sm:text-lg leading-relaxed text-gray-600 font-normal">
        {/* Paragraph 1 */}
        <p>
          UK gambling-harm policy has, until recently, focused almost entirely on the severe end of the 
          distribution (PGSI 8+). The international evidence does not support this distribution of effort.
        </p>
        
        {/* Paragraph 2 - Core Stat Callout */}
        <p>
          Across multiple national studies,{" "}
          <strong className="font-bold text-gray-900">
            70–85% of gambling-related Years Lived with Disability arise from individuals classified 
            as having a "low level of gambling harm" (PGSI 1–2) or "moderate level of gambling harm" (PGSI 3–7),
          </strong>{" "}
          not from the severe-end group on which most clinical treatment investment has focused. The implication 
          is consistent with the prevention paradox: <span className="italic text-gray-800">population-level reductions in harm 
          require interventions that move the whole distribution, not just the tail.</span>
        </p>
        
        {/* Paragraph 3 */}
        <p>
          For UK public health, this is the central analytical fact. It rules out a response built around treatment-only, 
          "responsible gambling" framing, or targeting only the most severe cases. It requires upstream interventions 
          on product, marketing, exposure and affordability.
        </p>
      </div>

      {/* Footer / Citation Source */}
      <div className="mt-8">
        <p className="text-xs sm:text-sm text-gray-500 italic">
          Source: international YLD syntheses cited in GHUK's APPG submission, 25 February 2026.
        </p>
      </div>
    </div>
  );
};

export default PreventionParadoxSection;