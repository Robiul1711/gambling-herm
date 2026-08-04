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
        <span className="text-xs font-bold text-[#0093D0] uppercase tracking-widest block">
          TACTIC 6
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
          Availability and physical clustering
        </h2>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed pt-2">
          Where gambling venues are sited is not random. Adult Gaming Centres (AGCs), slot
          venues and high-street bookmakers cluster systematically in the most deprived English
          LSOAs. The physical geography of UK gambling is the geography of UK deprivation.
        </p>
      </div>

      {/* Sub-block: The clustering picture */}
      <div className="space-y-3">
        <h3 className="text-xl md:text-2xl font-bold text-gray-900">
          The clustering picture
        </h3>
        <ul className="space-y-3 text-sm md:text-base text-gray-700 pl-5 list-disc marker:text-gray-400">
          <li className="leading-relaxed">
            <strong className="font-bold text-gray-900">
              21% of all gambling premises sit in the most deprived 10% of areas; 2% sit in the
              most affluent 10%
            </strong>
            , a tenfold gradient in physical availability.
          </li>
          <li className="leading-relaxed">
            The 100 most deprived English LSOAs hold roughly 4 times more high-street betting shops
            per adult than the 100 least deprived.
          </li>
          <li className="leading-relaxed">
            AGC density correlates strongly (r &gt; 0.7 in published mapping studies) with IMD decile
            1–3.
          </li>
          <li className="leading-relaxed">
            The Gambling Act 2005 requires licensing authorities to "aim to permit" gambling
            premises, leaving them little power to refuse licences on cumulative-impact grounds. Most
            refusals are appealed and overturned.
          </li>
          <li className="leading-relaxed">
            Online gambling availability is by definition 24/7 and not geographically constrained. But
            the marketing of online gambling is geographically targeted, and the resulting harm pattern
            still tracks deprivation.
          </li>
        </ul>
      </div>

      {/* Sub-block: Inequality is not a side effect */}
      <div className="space-y-3">
        <h3 className="text-xl md:text-2xl font-bold text-gray-900">
          Inequality is not a side effect
        </h3>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
          The siting decisions are made deliberately. Operator footfall and revenue analyses point
          operators toward areas with high foot traffic, weak licensing pushback, and customer
          populations whose financial precarity makes them more receptive to gambling marketing. The
          aggregation of operator-level commercial choices is the structural picture: gambling
          availability is concentrated where it does most population-level harm. See our{" "}
          <Link
            to="/inequality-and-gambling-harm"
            className="text-gray-900 font-medium underline hover:text-[#0093D0] transition-colors"
          >
            Inequality page
          </Link>{" "}
          for the detailed evidence.
        </p>
      </div>

      {/* Sub-block: What we want */}
      <div className="space-y-3">
        <h3 className="text-xl md:text-2xl font-bold text-gray-900">
          What we want
        </h3>
        <ul className="space-y-3 text-sm md:text-base text-gray-700 pl-5 list-disc marker:text-gray-400">
          <li className="leading-relaxed">
            Stronger statutory grounds for refusing licences on cumulative-impact and public-health
            grounds.
          </li>
          <li className="leading-relaxed">
            Local-authority gambling needs assessments treated as material considerations in licensing
            decisions.
          </li>
          <li className="leading-relaxed">
            National data publication on AGC and betting-shop density by LSOA, by IMD decile,
            alongside the licensed-premises register.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TacticSix;
