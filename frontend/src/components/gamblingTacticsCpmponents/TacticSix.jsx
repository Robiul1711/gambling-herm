import React from "react";
import { Link } from "react-router-dom";

const TacticSix = () => {
  return (
    <div
      id="tactic-6"
      className="space-y-8 scroll-mt-28 border-t border-gray-100 pt-8"
    >
      {/* Chapter Tag & Main Heading */}
      <div className="space-y-2">
        <span className="text-xs sm:text-sm font-bold text-[#0093D0] uppercase tracking-wider block">
          TACTIC 6
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-gray-900 tracking-tight leading-tight">
          Availability and physical clustering
        </h2>
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed pt-2 font-normal">
          Where gambling venues are sited is not random. Adult Gaming Centres (AGCs), slot
          venues and high-street bookmakers cluster systematically in the most deprived English
          LSOAs. The physical geography of UK gambling is the geography of UK deprivation.
        </p>
      </div>

      {/* Sub-block: The clustering picture */}
      <div className="space-y-3">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
          The clustering picture
        </h3>
        <ul className="space-y-3 text-sm sm:text-base text-gray-700 pl-5 list-disc marker:text-[#0093D0]">
          <li className="leading-relaxed font-normal">
            <strong className="font-bold text-gray-900">
              21% of all gambling premises sit in the most deprived 10% of areas; 2% sit in the
              most affluent 10%
            </strong>
            , a tenfold gradient in physical availability.
          </li>
          <li className="leading-relaxed font-normal">
            Around 10% of English schools have a gambling premises within a five-minute walk
            (roughly 742,000 pupils), and half of gambling treatment centres have a venue within 250
            metres (Evans and Cross, 2021).
          </li>
          <li className="leading-relaxed font-normal">
            Betting shops, adult gaming centres and bingo premises are three to seven times more
            concentrated in the most-deprived fifth of areas than the least (Macdonald, 2025).
          </li>
          <li className="leading-relaxed font-normal">
            The Gambling Act 2005 requires licensing authorities to "aim to permit" gambling
            premises, leaving them little power to refuse: the Gambling Act 2005 requires licensing
            authorities to "aim to permit" and gives them no cumulative-impact power, so refusals are
            rare and the few that are made are open to appeal.
          </li>
          <li className="leading-relaxed font-normal">
            Online gambling availability is by definition 24/7 and not geographically constrained. But
            the marketing of online gambling is geographically targeted, and the resulting harm pattern
            still tracks deprivation.
          </li>
        </ul>
      </div>

      {/* Sub-block: Inequality is not a side effect */}
      <div className="space-y-3">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
          Inequality is not a side effect
        </h3>
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-normal">
          The siting decisions are made deliberately. Operator footfall and revenue analyses point
          operators toward areas with high foot traffic, weak licensing pushback, and customer
          populations whose financial precarity makes them more receptive to gambling marketing. The
          aggregation of operator-level commercial choices is the structural picture: gambling
          availability is concentrated where it does most population-level harm. See our{" "}
          <Link
            to="/inequality-and-gambling-harm"
            className="text-gray-900 font-semibold underline hover:text-[#0093D0] transition-colors"
          >
            Inequality page
          </Link>{" "}
          for the detailed evidence.
        </p>
      </div>

      {/* Sub-block: What we want */}
      <div className="space-y-3">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
          What we want
        </h3>
        <ul className="space-y-3 text-sm sm:text-base text-gray-700 pl-5 list-disc marker:text-[#0093D0]">
          <li className="leading-relaxed font-normal">
            Stronger statutory grounds for refusing licences on cumulative-impact and public-health
            grounds.
          </li>
          <li className="leading-relaxed font-normal">
            Local-authority gambling needs assessments treated as material considerations in licensing
            decisions.
          </li>
          <li className="leading-relaxed font-normal">
            National data publication on AGC and betting-shop density by LSOA, by IMD decile,
            alongside the licensed-premises register.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TacticSix;
