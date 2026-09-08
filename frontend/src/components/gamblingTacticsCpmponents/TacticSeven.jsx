import React from "react";
import { Link } from "react-router-dom";

const TacticSeven = () => {
  return (
    <div
      id="tactic-7"
      className="space-y-8 scroll-mt-28 border-t border-gray-100 pt-8"
    >
      {/* Chapter Tag & Main Heading */}
      <div className="space-y-2">
        <span className="text-xs sm:text-sm font-bold text-[#0093D0] uppercase tracking-wider block">
          TACTIC 7
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-gray-900 tracking-tight leading-tight">
          The economic argument
        </h2>
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed pt-2 font-normal">
          The standard industry defence rests on tax revenue, employment and
          contribution to GDP. When downstream social cost is counted, the
          available evidence points to UK gambling being a net drain on the
          public purse, though no published UK modelling has tested the fiscal
          question directly.
        </p>
      </div>

      {/* Sub-block: The headline numbers */}
      <div className="space-y-3">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
          The headline numbers
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="border border-gray-200/90 bg-white p-6  space-y-1.5 shadow-xs">
            <span className="text-3xl sm:text-4xl font-extrabold text-gray-900 block tracking-tight">
              £15bn
            </span>
            <p className="text-xs sm:text-sm text-gray-500 font-normal leading-snug">
              UK gross gambling yield per year (industry revenue)
            </p>
          </div>

          <div className="border border-gray-200/90 bg-white p-6  space-y-1.5 shadow-xs">
            <span className="text-3xl sm:text-4xl font-extrabold text-gray-900 block tracking-tight">
              £4bn
            </span>
            <p className="text-xs sm:text-sm text-gray-500 font-normal leading-snug">
              betting and gaming duties, OBR estimate for 2025-26
            </p>
          </div>

          <div className="border border-gray-200/90 bg-white p-6  space-y-1.5 shadow-xs">
            <span className="text-3xl sm:text-4xl font-extrabold text-gray-900 block tracking-tight">
              £100m
            </span>
            <p className="text-xs sm:text-sm text-gray-500 font-normal leading-snug">
              2024 statutory levy
            </p>
          </div>

          <div className="border border-gray-200/90 bg-white p-6  space-y-1.5 shadow-xs">
            <span className="text-3xl sm:text-4xl font-extrabold text-gray-900 block tracking-tight">
              150-220×
            </span>
            <p className="text-xs sm:text-sm text-gray-500 font-normal leading-snug">
              how much larger the modelled annual health-economic burden is than
              the levy
            </p>
          </div>
        </div>
      </div>

      {/* Sub-block: The international cost studies */}
      <div className="space-y-3">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
          The international cost studies
        </h3>
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-normal">
          The published cost-of-harm studies from comparable jurisdictions show
          total social cost at{" "}
          <strong className="font-bold text-gray-900">
            2.2× to 4.4× tax revenue
          </strong>
          :
        </p>
        <ul className="space-y-3 text-sm sm:text-base text-gray-700 pl-5 list-disc marker:text-[#0093D0]">
          <li className="leading-relaxed font-normal">
            <strong className="font-bold text-gray-900 mr-1">Sweden:</strong>{" "}
            total social cost approximately 2.2× tax revenue (Hofmarcher et al.,
            2020).
          </li>
          <li className="leading-relaxed font-normal">
            <strong className="font-bold text-gray-900 mr-1">
              Czech Republic:
            </strong>{" "}
            social cost approximately 4× tax revenue (Roubal et al., 2017).
          </li>
          <li className="leading-relaxed font-normal">
            <strong className="font-bold text-gray-900 mr-1">
              Victoria, Australia:
            </strong>{" "}
            social cost approximately 4.4× tax revenue (Browne et al., 2017).
          </li>
          <li className="leading-relaxed font-normal">
            <strong className="font-bold text-gray-900 mr-1">
              United Kingdom:
            </strong>{" "}
            GHUK modelling values the annual health loss alone at £15.6-21.9bn,
            against roughly £4bn in gambling taxes (OBR) and a £100m statutory
            levy (
            <Link
              to="/evidence"
              className="text-gray-900 font-semibold underline hover:text-[#0093D0] transition-colors"
            >
              see the evidence
            </Link>
            ).
          </li>
        </ul>
      </div>

      {/* Sub-block: The employment argument */}
      <div className="space-y-3">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
          The employment argument
        </h3>
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-normal">
          The UK gambling sector employs around 100,000 people directly, and the
          number is falling while revenue rises. The industry's own commissioned
          studies (EY, for the Betting and Gaming Council) show{" "}
          <strong className="font-bold text-gray-900">
            jobs supported by BGC members fell 26% between 2019 and 2023
          </strong>
          , while gross gambling yield rose to £15.1bn. Independent modelling by
          NERA finds online gambling is a high-margin, low-labour sector:{" "}
          <strong className="font-bold text-gray-900">
            about £2.54 in wages per £100 of revenue, against roughly £38
          </strong>{" "}
          if the same money were spent in retail or hospitality. Around
          three-quarters of UK online betting is booked through Gibraltar, so
          wages and profits largely accrue offshore. The 2002 tobacco settlement
          is the comparator for the transition: tobacco employment shifted to
          other sectors and UK total employment did not fall. The same can be
          reasonably expected of a gambling settlement, especially if the
          displacement is gradual and signposted: money not lost to gambling is
          spent in sectors that employ more people per pound.
        </p>
      </div>

      {/* Sub-block: The "voluntary contribution to good causes" framing */}
      <div className="space-y-3">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
          The "voluntary contribution to good causes" framing
        </h3>
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-normal">
          The industry's contribution to research, education and treatment via
          the voluntary levy was around £35 million per year at its peak.
          Against UK GGY of £15 billion, this is 0.23%. The framing was a
          conventional under-investment positioned as public benefaction. The
          statutory levy at just under £120 million per year is an improvement but, as
          GHUK's APPG modelling shows, still 40 to 60 times smaller than even
          the conservative floor of the population-level burden it is meant to
          address.
        </p>
      </div>
    </div>
  );
};

export default TacticSeven;
