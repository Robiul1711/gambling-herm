import React from 'react';

const higherRisk = [
  "Men (around 70% of those experiencing severe harm)",
  "People aged 16–34",
  "People with co-occurring mental-health conditions",
  "People with experience of trauma or grief",
  "People in financial stress",
  "People in or close to the gambling industry",
  "People with family history of addiction"
];

const oftenOverlooked = [
  "Women, particularly with online slots and bingo apps",
  "People aged 16–34",
  "Older adults (a fast-growing group)",
  "People in recovery from alcohol or drug dependence",
  "Veterans",
  "People from minority ethnic communities, who face additional barriers to support",
  "Children of people experiencing gambling harm"
];

const WhoIsAffected = () => {
  return (
    <section id="affected" className="bg-gray-50/50">
      <div className="max-w-5xl mx-auto px-4 py-8 md:py-16 ">

        {/* Top Accent Line */}
        <div className="w-12 h-[3px] bg-Primary2 mb-6"></div>

        {/* Main Title Banner */}
        <h2 className="text-3xl md:text-5xl font-bold text-[#2d2d2d] mb-4 tracking-tight">
          6. Who is affected
        </h2>
        
        <p className="text-[#2d2d2d] text-base md:text-lg mb-12">
          Anyone can be. But the harm is not evenly distributed.
        </p>

        {/* Side-by-Side Cards Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          
          {/* Column 1: Higher Risk */}
          <div className="bg-white rounded-3xl border border-gray-200/80 shadow-sm p-6 md:p-8">
            <h3 className="text-2xl font-bold text-[#2d2d2d] mb-6">
              Higher risk
            </h3>
            <ul className="divide-y divide-dashed divide-gray-200 text-sm md:text-[15px] text-[#2d2d2d] leading-relaxed">
              {higherRisk.map((text, idx) => (
                <li key={idx} className="py-4 first:pt-0 last:pb-0">
                  {text}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Often Overlooked */}
          <div className="bg-white rounded-3xl border border-gray-200/80 shadow-sm p-6 md:p-8">
            <h3 className="text-2xl font-bold text-[#2d2d2d] mb-6">
              Often overlooked
            </h3>
            <ul className="divide-y divide-dashed divide-gray-200 text-sm md:text-[15px] text-[#2d2d2d] leading-relaxed">
              {oftenOverlooked.map((text, idx) => (
                <li key={idx} className="py-4 first:pt-0 last:pb-0">
                  {text}
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Informational Subtext Link */}
        <p className="text-[#687076] text-xs md:text-sm leading-6 mb-12 max-w-4xl">
          For the full picture, including affected others, children, and how UK gambling harm compares to other public-health risks, see{' '}
          <a href="#burden-of-harm" className="text-[#2d2d2d] underline hover:text-Primary2 transition-colors font-medium">
            our burden-of-harm page.
          </a>
        </p>

        {/* Dark Position Callout Panel */}
        <div className="bg-[#262222] rounded-2xl overflow-hidden shadow-xl border-l-[6px] border-Primary2">
          <div className="p-8 md:p-10">
            <h4 className="text-Primary2 text-sm font-semibold uppercase tracking-wider mb-5">
              Our position
            </h4>
            
            <p className="text-gray-300 text-sm md:text-[15px] leading-7 max-w-4xl">
              Recognising higher-risk groups is necessary and should drive resource allocation. It is also frequently 
              misused (by industry actors and by policy-makers) to imply that the rest of the population is safe. Both 
              things are true: severity is concentrated in some groups, and anyone exposed to a relentlessly-marketed, 
              fast-cycle gambling product can be harmed by it.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhoIsAffected;