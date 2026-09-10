import React from "react";

const reductionPoints = [
  {
    number: 1,
    title:
      "Reframe to public-health language across government, regulator and media",
    description:
      '"People harmed by gambling" rather than "problem gamblers". "Harm caused by gambling products" rather than "gambling problems". This isn\'t cosmetic, the available frames determine what action is then thinkable.',
  },
  {
    number: 2,
    title: "Centre lived experience, not as testimony, as leadership",
    description:
      "The experience of gambling harm, including harm from someone else's gambling, should sit at the centre of how policy and services are designed, alongside professional and research perspectives.",
  },
  {
    number: 3,
    title: "Make the structural causes visible",
    description:
      "Naming the commercial determinants (product design, marketing, regulation, industry lobbying) reduces stigma at the individual level. If the harm is shown to be industrial, the shame of being harmed by it shifts.",
  },
  {
    number: 4,
    title: "Take industry funding out of stigma-reduction work",
    description:
      "The reputation dividend is incompatible with effective anti-stigma work. Stigma campaigns funded independently of the industry being studied are more credible and produce different framings.",
  },
];

const WhatReducesStigma = () => {
  return (
    <section id="reduces-stigma" className="py-12 md:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Top Accent Line */}
        <div className="w-12 h-[3px] bg-[#17a9df] mb-6"></div>

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-gray-900 leading-tight mb-4 tracking-tight">
          What actually reduces stigma
        </h2>

        {/* Intro Subtitle */}
        <p className="text-gray-600 text-base sm:text-lg mb-8 leading-relaxed font-normal">
          The international evidence points to four changes.
        </p>

        {/* Point Cards Layout Grid Stack */}
        <div className="space-y-4 mb-8">
          {reductionPoints.map((item) => (
            <div
              key={item.number}
              className="border border-gray-200/90  p-6 flex gap-4 md:gap-5 items-start bg-white shadow-xs"
            >
              {/* Number Circle Badge */}
              <div className="w-8 h-8 bg-[#1d7092] text-white flex items-center justify-center font-bold rounded-full shrink-0 mt-0.5 text-sm">
                {item.number}
              </div>

              {/* Text Area */}
              <div>
                <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2 leading-snug">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Dark Position/Note Panel */}
        <div className="bg-[#181818] border-l-[4px] border-[#17a9df] p-6 md:p-8 text-white shadow-md">
          <h4 className="text-[#17a9df] text-xs font-bold uppercase tracking-wider mb-4">
            A NOTE ON LANGUAGE
          </h4>
          <p className="text-gray-200 text-sm sm:text-base font-medium leading-relaxed">
            The phrase "12 ways to reduce stigma when discussing gambling harms"
            you may have seen is from a language guide published by an
            industry-funded charity. The advice in it is largely sound. The
            frame around it (that stigma can be solved with better individual
            word choice) understates the structural piece. Use the language
            guide; reject the implied theory of change.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatReducesStigma;
