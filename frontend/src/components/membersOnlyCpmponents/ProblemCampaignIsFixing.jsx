import React from 'react';

const ProblemCampaignIsFixing = () => {
  // Array matrix to keep the listed arguments clean, structured, and easily maintainable
  const analyticalPoints = [
    {
      highlight: "The current land-based self-exclusion scheme (BOSE / SENSE / BACTA)",
      body: "relies on staff recognising self-excluded customers from photographs. In practice the recognition rate is low and inconsistent."
    },
    {
      highlight: "When a self-excluded person does gain access",
      body: "and gambles, the burden of proving that the operator failed to enforce the exclusion sits with the person who self-excluded, collecting CCTV, dates, timestamps, witnesses. As Sam Badcock describes it: \"Enforcement failures were treated as my responsibility. Proof was my burden. Data was my burden. Justice was functionally unreachable.\""
    },
    {
      highlight: "The Senet Group's 2014 land-based self-exclusion scheme",
      body: (
        <>
          (introduced by the \"big four\" bookmakers) has been documented as falling well short of what was promised.{' '}
          <a 
            href="#sams-history" 
            className="text-[#0076A8] underline hover:text-[#166B94] transition-colors duration-150"
          >
            Sam's History Of Land-Based Self-Exclusion
          </a>{' '}
          sets this out in detail.
        </>
      )
    },
    {
      highlight: "The 2025 BBC investigation and Guardian coverage",
      body: "of slot-machine harm in UK Adult Gaming Centres confirm the picture: self-exclusion failures are widespread, and the structural design of the venues, products and verification process keeps it that way."
    }
  ];

  return (
    <section className=" bg-white text-gray-800">
      <div className="">
        
        {/* Top Centered Decorative Accent Bar */}
        <div className="w-12 h-[3px] bg-[#3FABD4] mx-auto mb-6" />

        {/* Centralised Page Section Title Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-8 tracking-tight">
          The problem the campaign is fixing
        </h2>

        {/* Informational Summary Copy */}
        <div className=" text-sm md:text-base lg:text-lg leading-relaxed text-gray-700 mb-10">
          <p>
            UK self-exclusion exists on paper. In practice, enforcement of it has been failing for years, particularly 
            for land-based gambling (betting shops, Adult Gaming Centres, slot machines on the high street). The 
            Members Only Campaign documents the failure in detail.
          </p>
        </div>

        {/* Analytical Arguments Content Loop Container */}
        <div className=" border-t border-dashed border-gray-200 divide-y divide-dashed divide-gray-200">
          {analyticalPoints.map((point, index) => (
            <div key={index} className="py-6 text-sm md:text-base leading-relaxed text-gray-600">
              <span className="font-bold text-gray-900">{point.highlight} </span>
              <span className="font-light text-gray-700">{point.body}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProblemCampaignIsFixing;