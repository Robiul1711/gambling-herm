import React from "react";
import { Link } from "react-router-dom";

const tacticCards = [
  {
    quote: '"RESPONSIBLE GAMBLING. STAY IN CONTROL. WHEN THE FUN STOPS, STOP."',
    subQuote: "The defining industry vocabulary of the past 20 years.",
    body: (
      <>
        The "responsible gambling" repertoire locates harm in the individual rather than the
        product. Its policy effect is to crowd out upstream interventions in favour of
        awareness campaigns that the public-health evidence shows are among the least effective
        tools in the toolkit. GHUK does not use this language. The public-health alternative is
        harm-reduction at the product, regulatory and marketing level, not "responsible
        gambling" at the individual level.
      </>
    ),
  },
  {
    quote: '"0.4% TO 0.5% OF UK ADULTS ARE PROBLEM GAMBLERS."',
    subQuote:
      "The headline rate the industry has cited for two decades, derived from the PGSI 8+ band in the Health Survey for England.",
    body: (
      <>
        The narrow PGSI 8+ headline radically understates the share of the UK population in
        gambling harm. The public-health evidence is that 70–85% of population-level harm sits
        in PGSI 1–7. The current GSGB 2024 survey reports PGSI 1+ around 14.6% and PGSI 8+
        around 2.7%. We say "people harmed by gambling" and report across the full
        distribution.
      </>
    ),
  },
  {
    quote: '"MOST PEOPLE GAMBLE RESPONSIBLY. WE SHOULDN\'T PUNISH THEM FOR THE MINORITY."',
    subQuote: "The standard defence against regulation.",
    body: (
      <>
        The argument confounds two different populations and treats regulation as a
        punishment of consumers rather than a constraint on operator behaviour. Affordability
        checks, stake limits and advertising restrictions do not punish anyone. They restrict
        what operators can extract from a small group of customers who account for the
        majority of operator revenue.
      </>
    ),
  },
  {
    quote: '"REGULATION WILL PUSH PEOPLE TO THE BLACK MARKET."',
    subQuote:
      "The most heavily-deployed industry argument against every meaningful regulatory proposal of the last decade.",
    body: (
      <>
        Three things to note. First, the empirical evidence from comparable jurisdictions shows
        only marginal substitution to unlicensed operators under stricter rules. Second, the
        relevant comparison is between regulated harm and unregulated harm, not between
        regulation and no harm. Third, the argument is most often deployed at moments when
        its sponsors stand to lose revenue, which should at minimum be disclosed. We treat
        black-market warnings as one input into a policy decision, not as a veto on it. See our{" "}
        <Link
          to="/black-market"
          className="text-[#0093D0] underline hover:text-white transition-colors"
        >
          black-market position
        </Link>
        .
      </>
    ),
  },
  {
    quote: '"MOST PEOPLE WITH GAMBLING PROBLEMS RECOVER ON THEIR OWN."',
    subQuote:
      'The "natural recovery" argument, cited to argue that treatment infrastructure and product regulation are largely unnecessary.',
    body: (
      <>
        The argument overlooks three things. Most "natural recovery" still involves significant
        unsupported harm during the unaided period. Many of the most severe harms (suicide,
        family breakdown, intergenerational harm) occur before any spontaneous remission.
        The population with the most severe harm is the population least likely to remit
        unaided. Even where unaided remission is common, it is not an argument against
        funded support. It is an argument for support that reaches earlier and more broadly.
      </>
    ),
  },
  {
    quote: '"IT\'S A LEISURE CHOICE. PEOPLE HAVE THE FREEDOM TO GAMBLE."',
    subQuote: "The consumer-sovereignty defence.",
    body: (
      <>
        The "freedom to gamble" argument is confounded by affected-others harm. Children,
        partners, parents, siblings and creditors do not consent to the gambling that harms
        them. Once that is recognised, the consumer-choice frame collapses. This is the central
        insight in <em className="italic">Gambling Explained</em>: harms in affected others challenge
        the industry in two ways. They reduce the appeal of gambling and contribute to its
        social unacceptability. And they confound the "freedom to gamble" argument.
      </>
    ),
  },
];

const TacticOne = () => {
  return (
    <section
      id="tactic-1"
      className="scroll-mt-28 space-y-8 border-t border-gray-100 pt-8"
    >
      {/* Chapter Tag & Main Heading */}
      <div className="space-y-2">
        <span className="text-xs font-bold text-[#0093D0] uppercase tracking-widest block">
          TACTIC 1
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
          Arguments and language
        </h2>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed pt-2">
          The most reliable industry tactic is linguistic. Specific framings, repeated for
          decades, have shifted what the UK public conversation treats as the default position. We
          name the framings below and the public-health alternative for each.
        </p>
      </div>

      {/* Dark Quote Cards */}
      <div className="space-y-6">
        {tacticCards.map((card, idx) => (
          <div
            key={idx}
            className="bg-[#1c1d1f] text-white border-l-4 border-[#0093D0] p-6 md:p-8 rounded-r-sm space-y-3"
          >
            <h4 className="text-[#0093D0] font-bold text-xs tracking-wider uppercase">
              {card.quote}
            </h4>
            <p className="text-xs text-gray-300 italic border-b border-gray-700 pb-3 mb-3">
              {card.subQuote}
            </p>
            <div className="text-sm md:text-base text-gray-200 leading-relaxed">
              {card.body}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TacticOne;
