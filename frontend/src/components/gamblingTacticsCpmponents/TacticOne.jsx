import React from "react";
import { Link } from "react-router-dom";

const tacticCards = [
  {
    quote: '"Responsible gambling. Stay in control. When the fun stops, stop."',
    subQuote: "The defining industry vocabulary of the past 20 years.",
    body: `The'responsible gambling' repertoire locates harm in the individual rather than the product. Its policy effect is to crowd out upstream interventions in favour of awareness campaigns that the public-health evidence shows are among the least effective tools in the toolkit. GHUK does not use this language. The public-health alternative is harm-reduction at the product, regulatory and marketing level, not"responsible gambling" at the individual level.`,
  },
  {
    quote: '"0.4% to 0.5% of UK adults are problem gamblers."',
    subQuote:
      "The headline rate the industry has cited for two decades, derived from the PGSI 8+ band in the Health Survey for England.",
    body: `The narrow PGSI 8+ headline radically understates the share of the UK population in gambling harm. The public-health evidence is that 70–85% of population-level harm sits in PGSI 1–7. The current GSGB 2024 survey reports PGSI 1+ around 14.6% and PGSI 8+ around 2.7%. We say"people affected by gambling" and report across the full distribution.`,
  },
  {
    quote: `"Most people gamble responsibly. We shouldn't punish them for the minority."`,
    subQuote: "The standard defence against regulation.",
    body: `The argument confounds two different populations and treats regulation as a punishment of consumers rather than a constraint on operator behaviour. Affordability checks, stake limits and advertising restrictions do not punish anyone. They restrict what operators can extract from a small group of customers who account for the majority of operator revenue.`,
  },
  {
    quote: `"Regulation will push people to the black market."`,
    subQuote:
      "The most heavily-deployed industry argument against every meaningful regulatory proposal of the last decade.",
    body: `Three things to note. First, the empirical evidence from comparable jurisdictions shows only marginal substitution to unlicensed operators under stricter rules. Second, the relevant comparison is between regulated harm and unregulated harm, not between regulation and no harm. Third, the argument is most often deployed at moments when its sponsors stand to lose revenue, which should at minimum be disclosed. We treat black-market warnings as one input into a policy decision, not as a veto on it.`,
    linkText: "See our full rejection of the black-market argument.",
    link: "/black-market-argument",
  },
  {
    quote: `"Most people with gambling problems recover on their own."`,
    subQuote:
      'The"natural recovery" argument, cited to argue that treatment infrastructure and product regulation are largely unnecessary.',
    body: `The argument overlooks three things. Most"natural recovery" still involves significant unsupported harm during the unaided period. Many of the most severe harms (suicide, family breakdown, intergenerational harm) occur before any spontaneous remission. The population with the most severe harm is the population least likely to remit unaided. Even where unaided remission is common, it is not an argument against funded support. It is an argument for support that reaches earlier and more broadly.`,
  },
  {
    quote: `"It's a leisure choice. People have the freedom to gamble."`,
    subQuote: "The consumer-sovereignty defence.",
    body: `The"freedom to gamble" argument is confounded by affected-others harm. Children, partners, parents, siblings and creditors do not consent to the gambling that harms them. Once that is recognised, the consumer-choice frame collapses. This is the central insight in Gambling Explained: harms in affected others challenge the industry in two ways. They reduce the appeal of gambling and contribute to its social unacceptability. And they confound the"freedom to gamble" argument.`,
  },
];

const TacticOne = () => {
  return (
    <section
      id="tactic-1"
      className="scroll-mt-28 space-y-8 border-t border-slate-100 pt-8"
    >
      <div className="space-y-2">
        <span className="text-Primary font-medium text-sm md:text-base">
          Tactic 1
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
          Arguments and language
        </h2>
        <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-4xl">
          The most reliable industry tactic is linguistic. Specific framings,
          repeated for decades, have shifted what the UK public conversation
          treats as the default position. We name the framings below and the
          public-health alternative for each.
        </p>
      </div>

      <div className="space-y-5">
        {tacticCards.map((card, idx) => (
          <div
            key={idx}
            className="bg-[#151618] text-slate-300 p-6 md:p-8 space-y-3 shadow-sm"
          >
            <p className="text-[#0fb7ff] font-semibold text-sm md:text-base leading-snug">
              {card.quote}
            </p>
            <p className="text-slate-400 text-xs md:text-sm italic">
              {card.subQuote}
            </p>
            <div className="text-slate-300 text-sm md:text-base leading-relaxed pt-1 border-t border-slate-600">
              <p>{card.body}</p>

              {card.link && (
                <Link
                  to={card.link}
                  className="inline-block mt-3 text-Primary font-medium underline hover:text-white transition-colors"
                >
                  {card.linkText}
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TacticOne;
