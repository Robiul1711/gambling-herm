import React from 'react';

const PreventionParadoxSection = () => {
  return (
    <div className="w-full max-w-4xl mx-auto bg-white text-gray-800">
      
      {/* Top Accent Blue Line */}
      <div className="w-12 h-[3px] bg-[#0082c3] mb-4"></div>
      
      {/* Main Title */}
      <h2 className="text-3xl md:text-[36px] font-bold text-gray-900 tracking-tight mb-6">
        The prevention paradox applies in full
      </h2>
      
      {/* Core Paragraph Content */}
      <div className="space-y-6 text-[15px] md:text-16 leading-relaxed text-gray-500 font-normal">
        
        {/* Paragraph 1 */}
        <p>
          UK gambling-harm policy has, until recently, focused almost entirely on the severe end of the 
          distribution (PGSI 8+). The international evidence does not support this distribution of effort.
        </p>
        
        {/* Paragraph 2 - Core Stat Callout */}
        <p>
          Across multiple national studies,{" "}
          <span className="font-bold text-gray-800">
            70–85% of gambling-related Years Lived with Disability arise from individuals classified 
            as "low-risk" (PGSI 1–2) or "moderate-risk" (PGSI 3–7),
          </span>{" "}
          not from the severe-end group on which most clinical treatment investment has focused. The implication 
          is consistent with the prevention paradox: <span className="italic text-gray-400">population-level reductions in harm 
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
      <div className="mt-12 pt-4 border-t border-gray-100">
        <p className="text-xs text-gray-400 tracking-wide">
          Source: international YLD syntheses cited in GHUK's APPG submission, 25 February 2026.
        </p>
      </div>

    </div>
  );
};

export default PreventionParadoxSection;