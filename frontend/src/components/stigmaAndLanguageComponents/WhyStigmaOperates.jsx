import React from 'react';

const stigmaFactors = [
  {
    label: "Moralised",
    description: "Gambling harm is framed in public conversation as a failure of self-control more than a clinical condition. The implicit assumption: \"you chose this.\" This makes self-disclosure feel like a confession rather than a help-seeking step."
  },
  {
    label: "Financialised",
    description: "Most of the harm shows up first as money. Money problems carry shame on their own. The combination compounds."
  },
  {
    label: "Hidden products",
    description: "Online slots, casino apps and in-play betting can be used in private without anyone noticing. The path to harm is invisible to family until quite late. By the time disclosure is necessary, the situation feels already too big to share."
  },
  {
    label: "Intersecting stigmas",
    description: "People who face stigma in other parts of their lives, women, minority ethnic groups, LGBTQ+ people, people with mental-health conditions, experience compounded gambling-harm stigma. See our inequality page."
  },
  {
    label: "Industry-shaped vocabulary",
    description: "The dominant public language (\"responsible gambling\", \"when the fun stops, stop\", \"problem gambler\") was developed and paid for by the gambling industry. It reinforces the framing that people who experience harm are defective users of a fine product."
  }
];

const WhyStigmaOperates = () => {
  return (
    <section id="why-stigma" className="py-10 md:py-16">
      <div className="section-padding-x">

        {/* Top Line Accent */}
        <div className="w-12 h-[3px] bg-[#17a9df] mb-6"></div>

        {/* Main Header Title */}
        <h2 className="text-3xl md:text-[40px] font-bold text-[#2d2d2d] leading-tight mb-6 tracking-tight max-w-3xl">
          Why stigma operates this hard in gambling specifically
        </h2>

        {/* Intro Subtitle */}
        <p className="text-[#2d2d2d] text-base mb-12">
          Stigma in gambling has a structure that distinguishes it from alcohol or drug stigma.
        </p>

        {/* Layout Row List Split */}
        <div className="border-b border-gray-200/60">
          {stigmaFactors.map((item, index) => (
            <div 
              key={index} 
              className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-7 border-t border-gray-200/60 items-start text-[15px] leading-relaxed"
            >
              {/* Term Label Side Column */}
              <div className="md:col-span-3 text-[#17a9df] font-medium pt-0.5">
                {item.label}
              </div>

              {/* Detailed Explanation Column */}
              <div className="md:col-span-9 text-[#2d2d2d]">
                {item.description}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyStigmaOperates;