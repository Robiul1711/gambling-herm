import React from "react";

const ChapterThree = () => {
  return (
    <div id="children-young" className="space-y-8 scroll-mt-28 border-t border-slate-100 pt-8">
      {/* Chapter Title & Main Summary */}
      <div className="space-y-2">
        <span className="text-Primary font-medium text-sm md:text-base">
          Chapter 3
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
          Gambling in children and young people
        </h2>
        <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-4xl">
          Brain regions responsible for impulse control and reward valuation are not mature until around age 25. The earlier gambling exposure starts, the higher the lifetime risk. UK 11–16 year-olds are showing population-level gambling harm before they can legally gamble.
        </p>
      </div>

      {/* Sub-block: What we know */}
      <div className="space-y-3">
        <h3 className="text-lg font-bold text-slate-800">
          What we know
        </h3>
        <ul className="space-y-3 text-sm md:text-base text-slate-600 pl-4 list-disc marker:text-slate-300">
          <li className="leading-relaxed">
            The Gambling Commission's Young People & Gambling 2025 survey found 3.4% of 11–17 year-olds in Great Britain (around 189,000 children) scored 2 or more on the DSM-IV-MR-J screen, indicating gambling-related harm or behavioural difficulty in the past year; 1.5% (around 85,000) at the highest-severity threshold.
          </li>
          <li className="leading-relaxed">
            Around <span className="font-bold text-slate-800">27% of 11–17 year-olds</span> spend money on a gambling activity in any given 4-week period, with private bets, scratchcards, fruit machines and online formats most common.
          </li>
          <li className="leading-relaxed">
            Exposure to gambling advertising during family-viewing sport is essentially universal. CAP Code Rule 16.3.12 prohibits "strong appeal to children" in gambling ads, including child-themed slot games like <span className="italic">Jack and the Beanstalk and Cinderella Ball</span>. Enforcement has been weak.
          </li>
          <li className="leading-relaxed">
            Loot boxes, social-casino games and casino-mechanic mobile games sit outside the Gambling Act 2005 definition of gambling but use the same psychological architecture and reach minors at scale.
          </li>
        </ul>
      </div>

      {/* Sub-block: Children as affected others */}
      <div className="space-y-3">
        <h3 className="text-lg font-bold text-slate-800">
          Children as affected others
        </h3>
        <p className="text-slate-500 text-sm md:text-base leading-relaxed">
          Modelling for GambleAware (YouGov, 2024) estimates that around 42% of children in Great Britain may be affected by someone else's gambling (PGSI 1+): parents, siblings, and others close to them. The harm pattern includes financial deprivation, parentification (a child taking on adult emotional or financial responsibility), academic disruption, sleep disturbance, intergenerational gambling, and elevated risk of own-gambling problems in adolescence and early adulthood.
        </p>
      </div>

      {/* Sub-block: What we want changed */}
      <div className="space-y-3">
        <h3 className="text-lg font-bold text-slate-800">
          What we want changed
        </h3>
        <ul className="space-y-3 text-sm md:text-base text-slate-600 pl-4 list-disc marker:text-slate-300">
          <li className="leading-relaxed">
            Bring loot boxes and gambling-like mechanics within the Gambling Commission's scope.
          </li>
          <li className="leading-relaxed">
            Treat under-25 gambling exposure as a distinct policy issue, with a brain-development-aware risk framework.
          </li>
          <li className="leading-relaxed">
            Statutory recognition of children of people experiencing gambling harm as a population entitled to funded support in their own right (see our{" "}
            <a
              href="#"
              className="text-Primary underline hover:text-opacity-80 transition-colors"
            >
              Policy positions
            </a>
            ).
          </li>
          <li className="leading-relaxed">
            Robust enforcement of CAP Code 16.3.12 against child-themed slot content.
          </li>
        </ul>
      </div>

      {/* Sub-block: Stigma and treatment-seeking */}
      <div className="space-y-3">
        <h3 className="text-lg font-bold text-slate-800">
          Stigma and treatment-seeking
        </h3>
        <p className="text-slate-500 text-sm md:text-base leading-relaxed">
          UK help-seeking rates remain low. Of an estimated population in moderate-to-severe gambling harm, fewer than 10% access any formal treatment in a typical year, with women, minority ethnic groups, and people in deprived areas disproportionately under-represented in treatment caseloads. See our{" "}
          <a
            href="#"
            className="text-slate-700 font-medium underline hover:text-Primary transition-colors"
          >
            Stigma
          </a>{" "}
          and{" "}
          <a
            href="#"
            className="text-slate-700 font-medium underline hover:text-Primary transition-colors"
          >
            Inequality
          </a>{" "}
          pages.
        </p>
      </div>

      {/* Navigation Redirect Action Link */}
      <div className="pt-2">
        <a
          href="#"
          className="inline-flex items-center text-sm md:text-base text-Primary font-medium underline hover:text-opacity-80 transition-all"
        >
          Full CYP page with safeguarding routes &rarr;
        </a>
      </div>
    </div>
  );
};

export default ChapterThree;