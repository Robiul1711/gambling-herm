import React from 'react';

const RegulatoryCaptureLobbying = () => {
  return (
    <section id="regulatory-capture-and-lobbying" className="pb-10 md:pb-16 bg-white  text-[#2d2d2d]">
      <div className="max-w-7xl mx-auto px-4">

        {/* Top Accent Line */}
        <div className="w-12 h-[3px] bg-[#17a9df] mb-6"></div>

        {/* Section Header */}
        <h2 className="text-3xl md:text-[40px] font-bold leading-tight mb-8 tracking-tight">
          Regulatory capture and lobbying
        </h2>

        {/* Narrative Copy Blocks */}
        <div className="space-y-6 text-[15px] md:text-base leading-7 md:leading-8 text-[#2d2d2d]  mb-12">
          <p>
            The UK gambling regulatory environment has for decades been a textbook example of regulatory capture. 
            The policy framework has been co-produced by the regulator (the Gambling Commission), the sponsoring 
            government department (DCMS), and the major industry trade body (the Betting and Gaming Council, and its 
            predecessors) to a degree that is unique among high-turnover UK sectors.
          </p>

          <p>
            This capture operates through three mechanisms simultaneously. First, the revolving door: senior staff move 
            frequently between the regulator, the trade bodies, the industry-funded charities, and the operators themselves. 
            Second, information asymmetry: the regulator relies almost entirely on operator-supplied data to evaluate product 
            risk and customer harm, creating a system where the industry marks its own homework. Third, political access: 
            the gambling industry is one of the largest sponsors of hospitality, tickets, and APPG events in Westminster, 
            purchasing defensive political access at key moments in the legislative cycle.
          </p>

          <p>
            The result is a system that responds to industry revenue needs as an explicit policy objective, treats 
            revolting-door appointments as unremarkable, and views independent public-health data with a skepticism 
            it rarely applies to industry projections.
          </p>
        </div>

        {/* Dark Callout Section Card */}
        <div className="bg-[#262222] rounded-2xl overflow-hidden shadow-lg border-l-[6px] border-[#17a9df] ">
          <div className="p-8 md:p-10">

            {/* Callout Header Label */}
            <h4 className="text-[#17a9df] text-base font-semibold tracking-normal mb-4">
              Our position
            </h4>

            {/* Callout Text Copy */}
            <p className="text-gray-300 text-[15px] md:text-base leading-relaxed md:leading-8">
              We support a structural separation between the gambling industry and the machinery of regulation and 
              policy-making. This requires: a statutory cooling-off period for senior regulatory staff moving to the 
              industry; an ending of industry hospitality for MPs and regulators; independent data collection that does not 
              rely on operator dashboards; and the complete removal of economic growth or industry health from the 
              Gambling Commission's statutory objectives. The regulator's sole client should be the public health.
            </p>

          </div>
        </div>

      </div>
    </section>
  );
};

export default RegulatoryCaptureLobbying;