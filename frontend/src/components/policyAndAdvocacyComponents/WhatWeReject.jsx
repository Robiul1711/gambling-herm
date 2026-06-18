import React from 'react';

const rejectionsData = [
  {
    slogan: "Responsible gambling. Stay in control. When the fun stops, stop.",
    analysis: (
      <>
        The "responsible gambling" repertoire. We do not use this language. It locates harm in the individual, not the product. Its policy effect is to crowd out upstream interventions in favour of awareness campaigns the evidence shows are among the least effective tools in the public-health toolkit.
      </>
    )
  },
  {
    slogan: "Problem gambler. 0.4% of UK adults are problem gamblers.",
    analysis: (
      <>
        The narrow PGSI 8+ framing radically understates the share of the UK population experiencing gambling harm. We say "people affected by gambling" and report harm across the full distribution.{' '}
        <a href="#language" className="text-[#17a9df] underline hover:text-[#1493c2] font-medium transition-colors">
          See our note on language and measurement &rarr;
        </a>
      </>
    )
  },
  {
    slogan: "Regulation will just push people to the black market.",
    analysis: (
      <>
        The black-market argument is the most heavily-deployed industry argument against every meaningful regulatory proposal of the last decade, from stake limits to affordability checks to advertising restrictions. Three things to note about it. First, the empirical evidence from comparable jurisdictions shows only marginal substitution to unlicensed operators under stricter rules. Second, the relevant comparison is between regulated harm and unregulated harm, not between regulation and no harm. Third, the argument is most often deployed at moments when its sponsors stand to lose revenue, which should at minimum be disclosed. We treat black-market warnings as one input into a policy decision, not as a veto on it.
      </>
    )
  },
  {
    slogan: "Most people with gambling problems recover on their own. There's isn't much need for treatment infrastructure or product regulation.",
    analysis: (
      <>
        The "natural recovery" / treatment-fallacy argument. It cites unaided remission to argue that gambling-harm treatment and product regulation are largely unnecessary. The argument relies on overlooking three things: most "natural recovery" still involves significant unsupported harm during the unaided period; many of the most severe harms (suicide, family breakdown, intergenerational harm) occur before any spontaneous remission can; and the population with the most severe harm is the population least likely to remit unaided. Even where unaided remission is common, it is not an argument against funded support, it is an argument for support that reaches earlier and more broadly.
      </>
    )
  },
  {
    slogan: "Gambling harm only affects a small, vulnerable minority. Most people gamble safely.",
    analysis: (
      <>
        The "targeted minority" framing serves a clear function: it lets the industry preserve broad customer access while disclaiming responsibility for harm at the margins. The public-health evidence does not support it. Harm is broadly distributed, although severity is concentrated. Both can be true at once.{' '}
        <a href="#full-minority-response" className="text-[#17a9df] underline hover:text-[#1493c2] font-medium transition-colors">
          See our full response &rarr;
        </a>
      </>
    )
  },
  {
    slogan: "The tax revenue from gambling exceeds the cost of harm.",
    analysis: (
      <>
        This claim does not survive contact with the available cost evidence. The UK Treasury collects roughly £3.4bn/year from gambling; the directly-attributable harm cost is £1.05–£1.77bn/year (PHE 2021), with broader productivity and intergenerational costs putting the total above the tax figure in several syntheses. The "net positive for the public purse" claim is, on net, not consistent with the public-finance picture.{' '}
        <a href="#full-tax-response" className="text-[#17a9df] underline hover:text-[#1493c2] font-medium transition-colors">
          See our full response &rarr;
        </a>
      </>
    )
  }
];

const WhatWeReject = () => {
  return (
    <section id="what-we-reject" className="py-10 md:py-16 bg-[#1a1818] text-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Top Accent Line */}
        <div className="w-12 h-[3px] bg-[#17a9df] mb-6"></div>

        {/* Main Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
          What we reject
        </h2>

        {/* Section Context Intro Paragraph */}
        <p className="text-gray-300 text-[15px] md:text-base leading-relaxed  mb-12">
          Some framings sound neutral and aren't. The arguments below are core to how the gambling industry has 
          shaped UK public conversation for thirty years. We do not use them, and we believe their continued 
          circulation in regulator, government and press language is one of the chief obstacles to meaningful 
          reform.
        </p>

        {/* Industry Framing Stack */}
        <div className="space-y-6 ">
          {rejectionsData.map((item, index) => (
            <div 
              key={index} 
              className="bg-[#262222] border-l-[4px] border-[#17a9df] rounded-r-2xl p-6 md:p-8 shadow-md"
            >
              {/* Header Label */}
              <span className="text-[#17a9df] text-xs font-semibold uppercase tracking-wider block mb-3">
                Industry framing
              </span>

              {/* Strikethrough Industry Slogan */}
              <blockquote className="text-gray-400 italic text-[15px] md:text-base line-through decoration-gray-500 decoration-1 mb-5 block leading-relaxed">
                "{item.slogan}"
              </blockquote>

              {/* Public Health Analytical Response */}
              <div className="text-gray-300 text-sm md:text-[15px] leading-relaxed md:leading-7">
                {item.analysis}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhatWeReject;