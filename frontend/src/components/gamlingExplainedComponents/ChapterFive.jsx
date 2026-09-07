import React from "react";
import { Link } from "react-router-dom";

const ChapterFive = () => {
  return (
    <div
      id="research-education"
      className="space-y-8 scroll-mt-28 border-t border-gray-100 pt-8"
    >
      {/* Chapter Label & Main Heading */}
      <div className="space-y-2">
        <span className="text-xs font-bold text-[#0093D0] uppercase tracking-widest block">
          CHAPTER 5
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
          Gambling research, education and treatment
        </h2>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed pt-2">
          For two decades, UK gambling research, education and treatment (the "RET regime")
          was funded predominantly through voluntary industry contributions channelled via
          GambleAware and adjacent charities. The structural conflict of interest is the central
          reason UK evidence and policy lagged the public-health evidence base by a decade or
          more.
        </p>
      </div>

      {/* Sub-block: Why RET independence matters */}
      <div className="space-y-3">
        <h3 className="text-xl md:text-2xl font-bold text-gray-900">
          Why RET independence matters
        </h3>
        <ul className="space-y-3 text-sm md:text-base text-gray-700 pl-5 list-disc marker:text-gray-400">
          <li className="leading-relaxed">
            <strong className="font-bold text-gray-900">Selection effects in research.</strong>{" "}
            When the funder is the industry being studied, the questions that get funded tend
            toward "what helps customers gamble responsibly" rather than "what does the
            population-level burden of harm actually look like".
          </li>
          <li className="leading-relaxed">
            <strong className="font-bold text-gray-900">Framing effects in education.</strong>{" "}
            Industry-funded school programmes consistently locate harm in the individual
            ("responsible gambling") rather than the product. Evaluations show negligible or
            paradoxically negative effects on subsequent gambling behaviour.
          </li>
          <li className="leading-relaxed">
            <strong className="font-bold text-gray-900">Access effects in treatment.</strong>{" "}
            Industry-funded treatment infrastructure has been geographically uneven,
            capacity-constrained, and historically configured around the most severe cases,
            missing the bulk of the population in moderate-risk harm.
          </li>
        </ul>
      </div>

      {/* Sub-block: The statutory levy */}
      <div className="space-y-3">
        <h3 className="text-xl md:text-2xl font-bold text-gray-900">
          The statutory levy
        </h3>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
          The UK government announced a statutory levy in 2024, set initially at around £100m
          per year. GHUK's APPG submission (July 2026) shows the levy is{" "}
          <strong className="font-bold text-gray-900">40 to 60 times smaller</strong> than even the
          conservative floor of the modelled UK health-economic burden, and 150 to 220 times
          smaller than the central estimate. We support distribution through an arms-length body,
          ringfenced for prevention, treatment, aftercare, services for people harmed by someone else’s gambling and
          independent research (see our{" "}
          <Link
            to="/policy-and-advocacy"
            className="text-gray-900 font-medium underline hover:text-[#0093D0] transition-colors"
          >
            policy positions
          </Link>
          ).
        </p>
      </div>

      {/* Sub-block: GHUK's position */}
      <div className="space-y-3">
        <h3 className="text-xl md:text-2xl font-bold text-gray-900">
          GHUK's position
        </h3>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
          We accept no funding from the gambling industry or its trade bodies, and we asked to
          be removed from the industry's RET list in 2023. This is the operating discipline that
          makes everything else credible. The 2025/26 edition of{" "}
          <em className="italic">Gambling Explained</em> updates this chapter with the recent
          history of RET wind-down and the transition to statutory funding.
        </p>
      </div>
    </div>
  );
};

export default ChapterFive;
