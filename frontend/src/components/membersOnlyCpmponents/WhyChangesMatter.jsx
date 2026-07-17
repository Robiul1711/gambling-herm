import React from "react";

const WhyChangesMatter = () => {
  // Analytical list matrix for clean rendering and easy content updates
  const benefits = [
    {
      title: "Effective by design",
      description:
        "Verification at the machine, not at the door, removes the human-recognition failure mode that has defined the last decade of land-based self-exclusion in the UK.",
    },
    {
      title: "Burden of proof",
      description:
        "Today the burden of proving an enforcement failure sits with the harmed person. The Members Only model moves that burden to the operator and the system, where it belongs.",
    },
    {
      title: "Affected-others impact",
      description:
        "Land-based slot harm hits affected others hard; partners and families discover the harm after the financial damage has been done. Stronger enforcement at the point of play reduces the financial-harm pipeline that affected others end up carrying.",
    },
    {
      title: "Higher-risk products",
      description:
        "Slot machines in Adult Gaming Centres are among the most harmful UK gambling products by harm-per-pound. Tighter access controls on slots specifically target where the harm density is highest.",
    },
    {
      title: "A real bridge to online",
      description:
        "The same identity-verification architecture, once national and trusted for land-based use, becomes the natural backbone for proper online affordability and identity controls too.",
    },
  ];

  return (
    <section className="  text-gray-800 ">
      <div className="">
        {/* Top Decorative Fine Dotted Divider Rule */}
        <div className=" w-full mb-8" />

        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-10 tracking-tight">
          Why these three changes matter
        </h2>

        {/* Matrix Row List Block */}
        <div className=" border-gray-200 divide-y divide-gray-200 ">
          {benefits.map((benefit, index) => (
            <div key={index} className=" py-6 gap-3 md:gap-8 items-start">
              {/* Left Column Label Indicator (Spans 4 columns on desktop) */}
              <div className="md:col-span-4 text-sm md:text-base font-semibold text-[#0076A8] tracking-wide hover:text-[#166B94] transition-colors duration-150 cursor-pointer">
                {benefit.title}
              </div>

              {/* Right Column Description Field (Spans 8 columns on desktop) */}
              <div className="md:col-span-8 text-xs md:text-sm lg:text-base text-gray-600 leading-relaxed ">
                {benefit.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChangesMatter;
