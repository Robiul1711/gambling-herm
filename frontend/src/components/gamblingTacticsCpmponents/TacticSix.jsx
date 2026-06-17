import React from "react";

const TacticSix = () => {
  return (
    <div id="tactic-6" className="space-y-8 scroll-mt-6 border-t border-slate-100 pt-8">
      {/* Chapter Title & Main Summary */}
      <div className="space-y-2">
        <span className="text-Primary font-medium text-sm md:text-base">
          Tactic 6
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
          Availability and physical clustering
        </h2>
        <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-4xl">
          Where gambling venues are sited is not random. Adult Gaming Centres (AGCs), slot venues and high-street bookmakers cluster systematically in the most deprived English LSOAs. The physical geography of UK gambling is the geography of UK deprivation.
        </p>
      </div>

      {/* Sub-block: The clustering picture */}
      <div className="space-y-3">
        <h3 className="text-lg font-bold text-slate-800">
          The clustering picture
        </h3>
        <ul className="space-y-4 text-sm md:text-base text-slate-600 pl-4 list-disc marker:text-slate-300">
          <li className="leading-relaxed">
            The 100 most deprived English LSOAs hold roughly <span className="font-semibold text-slate-800">4 times more</span> high-street betting shops per adult than the 100 least deprived.
          </li>
          <li className="leading-relaxed">
    AGC density correlates strongly (r {" > "} 0.7 in published mapping studies)
  with IMD decile 1–3.
          </li>
          <li className="leading-relaxed">
            The Licensing Act 2003 gives local authorities limited power to refuse licences on cumulative-impact grounds. Most refusals are appealed and overturned.
          </li>
          <li className="leading-relaxed">
            Online gambling availability is by definition 24/7 and not geographically constrained. But the marketing of online gambling is geographically targeted, and the resulting harm pattern still tracks deprivation.
          </li>
          <li className="leading-relaxed">
            <span className="font-semibold text-slate-800">21% of all gambling premises</span> sit in the most deprived 10% of areas; 2% sit in the most affluent 10%, a tenfold gradient in physical availability.
          </li>
        </ul>
      </div>

      {/* Sub-block: Inequality is not a side effect */}
      <div className="space-y-3 max-w-4xl">
        <h3 className="text-lg font-bold text-slate-800">
          Inequality is not a side effect
        </h3>
        <p className="text-slate-500 text-sm md:text-base leading-relaxed">
          The siting decisions are made deliberately. Operator footfall and revenue analyses point operators toward areas with high foot traffic, weak licensing pushback, and customer populations whose financial precarity makes them more receptive to gambling marketing. The aggregation of operator-level commercial choices is the structural picture: gambling availability is concentrated where it does most population-level harm. See our Inequality page for the detailed evidence.
        </p>
      </div>

      {/* Sub-block: What we want */}
      <div className="bg-slate-50 rounded-2xl p-6 md:p-8 space-y-4 border border-slate-100 max-w-4xl">
        <h3 className="text-lg font-bold text-slate-800">What we want</h3>
        <ul className="space-y-3 text-sm md:text-base text-slate-600 pl-4 list-disc marker:text-slate-300">
          <li className="leading-relaxed">
            Stronger statutory grounds for refusing licences on cumulative-impact and public-health grounds.
          </li>
          <li className="leading-relaxed">
            Local-authority gambling needs assessments treated as material considerations in licensing decisions.
          </li>
          <li className="leading-relaxed">
            National data publication on AGC and betting-shop density by LSOA, by IMD decile, alongside the licensed-premises register.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TacticSix;