import React from "react";

const TacticSeven = () => {
  return (
    <div
      id="tactic-7"
      className="space-y-8 scroll-mt-6 border-t border-slate-100 pt-8"
    >
      {/* Chapter Title & Main Summary */}
      <div className="space-y-2">
        <span className="text-Primary font-medium text-sm md:text-base">
          Tactic 7
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
          The economic argument
        </h2>
        <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-4xl">
          The standard industry defence rests on tax revenue, employment and
          contribution to GDP. The full picture, when downstream social cost is
          counted, is that UK gambling is a net economic drain on the public
          purse.
        </p>
      </div>

      {/* Metric Cards Grid Layout */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl">
        <div className="border border-slate-200 bg-white rounded-2xl p-5 space-y-2 shadow-sm">
          <span className="text-2xl md:text-3xl font-bold text-slate-800 block">
            £15bn
          </span>
          <p className="text-xs md:text-sm text-slate-500 leading-snug">
            UK gross gambling yield per year (industry revenue)
          </p>
        </div>

        <div className="border border-slate-200 bg-white rounded-2xl p-5 space-y-2 shadow-sm">
          <span className="text-2xl md:text-3xl font-bold text-slate-800 block">
            £4bn
          </span>
          <p className="text-xs md:text-sm text-slate-500 leading-snug">
            betting and gaming duties, OBR estimate for 2025–26
          </p>
        </div>

        <div className="border border-slate-200 bg-white rounded-2xl p-5 space-y-2 shadow-sm">
          <span className="text-2xl md:text-3xl font-bold text-slate-800 block">
            £100m
          </span>
          <p className="text-xs md:text-sm text-slate-500 leading-snug">
            2024 statutory levy
          </p>
        </div>

        <div className="border border-slate-200 bg-white rounded-2xl p-5 space-y-2 shadow-sm">
          <span className="text-2xl md:text-3xl font-bold text-slate-800 block">
            40–60×
          </span>
          <p className="text-xs md:text-sm text-slate-500 leading-snug">
            how much larger the modelled annual health-economic burden is than
            the levy
          </p>
        </div>
      </div>

      {/* Sub-block: The international cost studies */}
      <div className="space-y-3">
        <h3 className="text-lg font-bold text-slate-800">
          The international cost studies
        </h3>
        <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-4xl">
          The published cost-of-harm studies from comparable jurisdictions show
          total social cost at{" "}
          <span className="font-semibold text-slate-800">2× to 4.4×</span> tax
          revenue:
        </p>
        <ul className="space-y-2 text-sm md:text-base text-slate-600 pl-4 list-disc marker:text-slate-300 max-w-4xl">
          <li className="leading-relaxed">
            <span className="font-semibold text-slate-800">Sweden:</span> total
            social cost approximately 2× tax revenue (Hofmarcher et al., 2020).
          </li>
          <li className="leading-relaxed">
            <span className="font-semibold text-slate-800">
              Czech Republic:
            </span>{" "}
            social cost approximately 4× tax revenue (Roubal et al., 2017).
          </li>
          <li className="leading-relaxed">
            <span className="font-semibold text-slate-800">
              Victoria, Australia:
            </span>{" "}
            social cost approximately 4.4× tax revenue (Browne et al., 2016).
          </li>
          <li className="leading-relaxed">
            <span className="font-semibold text-slate-800">England 2013:</span>{" "}
            modelled population burden 1.62 million YLD, larger than the burdens
            from dietary risks (1.47m) or tobacco smoke (1.46m) (Browne et al.,
            2017, extrapolated).
          </li>
        </ul>
      </div>

      {/* Sub-block: The employment argument */}
      <div className="space-y-3 max-w-4xl">
        <h3 className="text-lg font-bold text-slate-800">
          The employment argument
        </h3>
        <p className="text-slate-500 text-sm md:text-base leading-relaxed">
          The UK gambling sector employs around 100,000 people directly, and the
          number is falling while revenue rises. The industry's own commissioned
          studies (EY, for the Betting and Gaming Council) show jobs supported
          by BGC members fell 26% between 2019 and 2023, while gross gambling
          yield rose to £15.1bn. Independent modelling by NERA finds online
          gambling is a high-margin, low-labour sector: about £2.54 in wages per
          £100 of revenue, against roughly £38 if the same money were spent in
          retail or hospitality. Around three-quarters of UK online betting is
          booked through Gibraltar, so wages and profits largely accrue
          offshore. The 2002 tobacco settlement is the comparator for the
          transition: tobacco employment shifted to other sectors and UK total
          employment did not fall. The same can be reasonably expected of a
          gambling settlement, especially if the displacement is gradual and
          signposted: money not lost to gambling is spent in sectors that employ
          more people per pound.
        </p>
      </div>

      {/* Sub-block: The "voluntary contribution to good causes" framing */}
      <div className="bg-slate-50 rounded-2xl p-6 md:p-8 space-y-3 border border-slate-100 max-w-4xl">
        <h3 className="text-lg font-bold text-slate-800">
          The "voluntary contribution to good causes" framing
        </h3>
        <p className="text-slate-600 text-sm md:text-base leading-relaxed">
          The industry's contribution to research, education and treatment via
          the voluntary levy was around £35 million per year at its peak.
          Against UK GGY of £15 billion, this is 0.23%. The framing was a
          conventional under-investment positioned as public benefaction. The
          statutory levy at £100 million per year is an improvement but, as
          GHUK's APPG modelling shows, still 40 to 60 times smaller than the
          population-level burden it is meant to address.
        </p>
      </div>
    </div>
  );
};

export default TacticSeven;
