import React from 'react';

const PolicyPositionsInequality = () => {
  return (
    <div className="py-10 md:py-16 ">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Dark Policy Background Card */}
        <div className="bg-[#262222] rounded-2xl overflow-hidden shadow-xl border-l-[6px] border-[#17a9df] ">
          <div className="p-8 md:p-10">
            
            {/* Callout Header */}
            <h4 className="text-[#17a9df] text-base font-semibold tracking-normal mb-6">
              Our policy positions on inequality
            </h4>
            
            {/* Intro text */}
            <p className="text-gray-300 text-[15px] leading-relaxed mb-8">
              Three asks of the UK gambling-harm response:
            </p>

            {/* List of Ordered Asks */}
            <div className="space-y-8 text-[15px] leading-7 md:leading-8 text-gray-300">
              
              {/* Ask 1 */}
              <p>
                <strong className="text-white font-bold">(1) Statutory Levy Distribution Should Be Needs-Weighted,</strong> not flat, ringfenced funding for the most-affected and most-underserved groups (CYP affected-others, ethnic minority communities, neurodivergent populations, bereaved families).
              </p>

              {/* Ask 2 */}
              <p>
                <strong className="text-white font-bold">(2) Treatment Must Be Funded To Integrate,</strong> not duplicate, gambling-harm services co-located with debt advice, NHS mental-health pathways, family services and trauma care.
              </p>

              {/* Ask 3 */}
              <p>
                <strong className="text-white font-bold">(3) Marketing Restrictions Should Weight The Inequality Picture,</strong> point-of-sale density, sponsorship in deprived-area sport, and ad targeting that lands harder on already-marginalised communities should be regulated tightly.
              </p>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default PolicyPositionsInequality;