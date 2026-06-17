import React from "react";

const ChapterFive = () => {
  return (
    <div id="research-education" className="space-y-8 scroll-mt-28 border-t border-slate-100 pt-8">
      {/* Chapter Title & Main Summary */}
      <div className="space-y-2">
        <span className="text-Primary font-medium text-sm md:text-base">
          Chapter 5
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
          Gambling research, education and treatment
        </h2>
        <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-4xl">
          For two decades, UK gambling research, education and treatment (the "RET regime") was funded predominantly through voluntary industry contributions channelled via GambleAware and adjacent charities. The structural conflict of interest is the central reason UK evidence and policy lagged the public-health evidence base by a decade or more.
        </p>
      </div>

      {/* Sub-block: Why RET independence matters */}
      <div className="space-y-3">
        <h3 className="text-lg font-bold text-slate-800">
          Why RET independence matters
        </h3>
        <ul className="space-y-3 text-sm md:text-base text-slate-600 pl-4 list-disc marker:text-slate-300">
          <li className="leading-relaxed">
            <span className="font-bold text-slate-800">Selection Effects In Research.</span> When the funder is the industry being studied, the questions that get funded tend toward "what helps customers gamble responsibly" rather than "what does the population-level burden of harm actually look like".
          </li>
          <li className="leading-relaxed">
            <span className="font-bold text-slate-800">Framing Effects In Education.</span> Industry-funded school programmes consistently locate harm in the individual ("responsible gambling") rather than the product. Evaluations show negligible or paradoxically negative effects on subsequent gambling behaviour.
          </li>
          <li className="leading-relaxed">
            <span className="font-bold text-slate-800">Access effects in treatment.</span> Industry-funded treatment infrastructure has been geographically uneven, capacity-constrained, and historically configured around the most severe cases, missing the bulk of the population in moderate-risk harm.
          </li>
        </ul>
      </div>

      {/* Sub-block: The Statutory Levy */}
      <div className="space-y-3">
        <h3 className="text-lg font-bold text-slate-800">
          The Statutory Levy
        </h3>
        <p className="text-slate-500 text-sm md:text-base leading-relaxed">
          The UK government announced a statutory levy in 2024, set initially at around £100m per year. GHUK's APPG submission (Feb 2026) showed this is 40 to 60 times smaller than the modelled annual health-economic burden of gambling harm in England. We support distribution through an arms-length body, ringfenced for prevention, treatment, aftercare, affected-others services and independent research{" "}
          <a
            href="#"
            className="text-Primary underline hover:text-opacity-80 transition-colors"
          >
            (see our policy positions)
          </a>
          .
        </p>
      </div>

      {/* Sub-block: GHUK's position */}
      <div className="space-y-3">
        <h3 className="text-lg font-bold text-slate-800">
          GHUK's position
        </h3>
        <p className="text-slate-500 text-sm md:text-base leading-relaxed">
          GHUK has never accepted GambleAware funding. We accept no money from the gambling industry, its trade bodies, or its associated charitable arms. This is the operating discipline that makes everything else credible. The 2025/26 edition of Gambling Explained updates this chapter with the recent history of RET wind-down and the transition to statutory funding.
        </p>
      </div>
    </div>
  );
};

export default ChapterFive;