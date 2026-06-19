import React from 'react';

const HowThisSits = () => {
  // Navigation matrix items to make future path updating modular and effortless
  const workLinks = [

    {
      category: "Gambling Tactics",
      label: "the industry-tactics analysis (product design, availability, clustering, narrative control) that explains why land-based self-exclusion has been allowed to fail.",
      href: "#gambling-tactics-2"
    },
    {
      category: "Burden of harm",
      label: "the population-level case for treating gambling harm as a top-five modifiable risk factor.",
      href: "#burden-of-harm"
    },
    {
      category: "Policy positions",
      label: "our wider regulatory programme, statutory levy, DHSC consolidation, advertising restrictions, NHS-led treatment.",
      href: "#policy-positions"
    },
    {
      category: "Blocking & self-exclusion guide",
      label: "the practical \"what you can do today\" routes including GAMSTOP, GamBan, bank blocks and the multi-operator land-based schemes.",
      href: "#guide"
    }
  ];

  return (
    <section className=" text-gray-800 max-w-5xl mx-auto py-12">
      <div className="">
        
        {/* Top Centered Section Header Block Decorative Anchor */}
        <div className="flex flex-col items-center justify-center text-center mb-10">
          <div className="w-12 h-[3px] bg-[#3FABD4] mb-4" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
            How this sits with our other work
          </h2>
          <p className="text-gray-500 text-sm md:text-base mt-4 max-w-3xl font-light leading-relaxed">
            Members Only is a focused, technically-specific campaign targeting one particular structural failure. 
            GHUK's wider work places it within the broader picture.
          </p>
        </div>

        {/* Directory Row Stack Container */}
        <div className="  divide-y divide-dashed divide-gray-200">
          {workLinks.map((item, index) => (
            <div key={index} className="py-6 flex flex-col space-y-2">
              
              {/* Informational Text Description block */}
              <p className="text-sm md:text-base lg:text-lg leading-relaxed text-[#707A8A] font-light">
                <span className="font-semibold text-gray-900">{item.category}</span>
                {" "}&rarr;{" "}
                <span>{item.label}</span>
              </p>

              {/* Action Trigger Link Text */}
              <div className="pt-1">
                <a 
                  href={item.href}
                  className="inline-flex items-center text-[#0076A8] hover:text-[#166B94] text-sm md:text-base font-medium transition-colors duration-150 group"
                >
                  Read 
                  <span className="ml-1 transform group-hover:translate-x-1 transition-transform duration-150">
                    &rarr;
                  </span>
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowThisSits;