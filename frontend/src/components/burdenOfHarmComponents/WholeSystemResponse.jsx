import React from 'react';

const WholeSystemResponse = () => {
  // Data array for the strategy layers to keep the JSX clean and maintainable
  const strategyItems = [
    {
      title: "Product",
      text: "Stake limits, speed limits, prohibition of demonstrably high-harm features (variable-ratio jackpot mechanics; in-play continuous betting on the riskiest markets)."
    },
    {
      title: "Marketing",
      text: "A statutory ban on gambling sponsorship in sport and broadcast; tighter rules on influencer and \"gamblified\" content; suspension of personalised marketing to customers showing signs of distress."
    },
    {
      title: "Affordability",
      text: "Light-touch affordability checks at moderate loss thresholds; heavier intervention at points where harm is most likely."
    },
    {
      title: "Pricing",
      text: "A statutory levy on industry profits funding prevention, treatment and research independently of the industry."
    },
    {
      title: "Treatment",
      text: "NHS-led specialist provision, with funded routes for affected others and bereaved families, not delivered through industry-funded charities."
    },
    {
      title: "Research",
      text: "Independent funding streams. Open publication. The end of industry-led evidence-production on questions of its own harm."
    },
    {
      title: "Political legitimacy",
      text: "Restrictions on industry political lobbying and revolving-door appointments between operators, trade bodies, regulators and political offices."
    }
  ];

  return (
    <section className="max-w-5xl mx-auto bg-white text-gray-800">
      <div className="">
        
        {/* Top Decorative Blue Accent Line */}
        <div className="w-12 h-[3px] bg-[#3FABD4] mb-4" />

        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
          8. A whole-system response, the tobacco-control parallel
        </h2>

        {/* Lead Content Paragraphs */}
        <div className="space-y-4 text-sm md:text-base leading-relaxed text-gray-600 mb-10">
          <p className="font-semibold text-gray-900">
            The single most successful UK public-health intervention of the last fifty years is tobacco control. It worked 
            because it acted on every part of the system at once: product, marketing, point-of-sale, pricing, treatment, public-
            information, professional norms, and the political legitimacy of the industry itself.
          </p>
          <p className="text-gray-400">
            Gambling-harm policy is currently nothing like that. Treatment receives most of the resource and attention. 
            Product regulation is patchy. Marketing remains self-regulated. Affordability checks are contested. 
            The political legitimacy of the industry is, in the UK, still largely intact. The result is a response that is the wrong 
            shape for the burden, weighted at the very end of the harm pipeline, where it can change least.
          </p>
        </div>

        {/* Strategy List Container */}
        <div className="mb-12">
          <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-6 tracking-tight">
            A Whole-System Gambling-Harm Strategy Would Act At Every Level
          </h3>

          {/* Dotted border list items */}
          <div className="border-t border-dashed border-gray-200 divide-y divide-dashed divide-gray-200">
            {strategyItems.map((item, index) => (
              <div key={index} className="py-4 text-sm md:text-base leading-relaxed">
                <span className="font-bold text-gray-900">{item.title}. </span>
                <span className="text-gray-500">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Dark Position Callout Box */}
        <div className="border-l-4 border-[#166B94] bg-[#292929] text-white p-6 md:p-8 rounded-r-xl shadow-md">
          <h4 className="text-[#3FABD4] font-semibold tracking-wide text-xs md:text-sm uppercase mb-3">
            Our position
          </h4>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed font-light">
            Treatment is necessary. It is also nowhere near sufficient. The biggest reductions in gambling harm will 
            come from acting upstream, on product, on marketing, on availability, on the political conditions that have 
            allowed the harm to grow. The tobacco-control parallel is not a slogan. It is the strategic frame this work 
            requires.
          </p>
        </div>

      </div>
    </section>
  );
};

export default WholeSystemResponse;