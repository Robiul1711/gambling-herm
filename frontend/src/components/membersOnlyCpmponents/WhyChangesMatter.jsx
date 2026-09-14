import React from "react";

const WhyChangesMatter = () => {
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
      title: "Harm to families & others",
      description:
        "Land-based slot harm hits families and partners hard, they discover the harm after the financial damage has been done. Stronger enforcement at the point of play reduces the financial-harm pipeline that families end up carrying.",
    },
    {
      title: "Higher-risk products",
      description:
        "Slot machines in Adult Gaming Centres are among the higher-harm UK gambling products. Tighter access controls on slots specifically target where the harm density is highest.",
    },
    {
      title: "A real bridge to online",
      description:
        "The same identity-verification architecture, once national and trusted for land-based use, becomes the natural backbone for proper online affordability and identity controls too.",
    },
  ];

  return (
    <section className="bg-white text-gray-800 max-w-5xl mx-auto py-12">
      <div className="">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-10 tracking-tight">
          Why these three changes matter
        </h2>

        {/* Matrix Row List Container */}
        <div className="divide-y divide-gray-200 border-t border-b border-gray-200">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="py-6 md:py-8 flex flex-col md:flex-row items-start gap-4 md:gap-12"
            >
              {/* Left Column Label Indicator */}
              <div className="w-full md:w-52 shrink-0 text-[#166B94] font-bold text-xs md:text-sm uppercase tracking-wider leading-snug">
                {benefit.title}
              </div>

              {/* Right Column Description Field */}
              <div className="text-gray-800 text-sm md:text-base leading-relaxed font-normal">
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

