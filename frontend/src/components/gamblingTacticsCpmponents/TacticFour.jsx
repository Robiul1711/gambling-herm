import React from "react";
import tractic4 from "@/assets/images/tractic4.png";
const TacticFour = () => {
  return (
    <div id="tactic-4" className="space-y-8 scroll-mt-6 border-t border-slate-100 pt-8">
      {/* Chapter Header Setup */}
      <div className="flex flex-col-reverse md:flex-row md:justify-between md:items-start gap-6">
        {/* Title & Main Summary */}
        <div className="space-y-2 flex-1">
          <span className="text-Primary font-medium text-sm md:text-base">
            Tactic 4
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
            "Harm reduction" framings
          </h2>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-2xl">
            Industry-led harm-reduction packages are designed to look like meaningful action while leaving the structural drivers of harm in place. Each component of the standard package can be evaluated on its own merits. Most of them, evaluated honestly, do not perform.
          </p>
        </div>

        {/* Iceberg Graphic Section */}
        <div className="w-full max-w-[240px] self-center md:self-start bg-white p-2 rounded-xl border border-slate-100 shadow-sm">
          <img
            src={tractic4}
            alt="Iceberg illustration representing the profit model hidden behind responsible gambling slogans"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* Sub-block: Self-exclusion as the central mechanism */}
      <div className="space-y-3 max-w-4xl">
        <h3 className="text-lg font-bold text-slate-800">
          Self-exclusion as the central mechanism
        </h3>
        <p className="text-slate-500 text-sm md:text-base leading-relaxed">
          The industry presents self-exclusion (GAMSTOP for online, SENSE for casinos, paper-based for land-based) as the central harm-reduction mechanism. The design and enforcement of self-exclusion systematically fail the people most likely to need it. Cross-venue gaps, marketing continuing post-exclusion, reverse-withdrawal traps, no real-time identity check at point of deposit. See Gambling Explained Chapter 8 and the Members Only Campaign.
        </p>
      </div>

      {/* Sub-block: "Safer gambling" awareness campaigns */}
      <div className="space-y-3 max-w-4xl">
        <h3 className="text-lg font-bold text-slate-800">
          "Safer gambling" awareness campaigns
        </h3>
        <p className="text-slate-500 text-sm md:text-base leading-relaxed">
          The public-health evidence on awareness campaigns as a primary harm-reduction tool is poor. The systematic review evidence places awareness campaigns at the bottom of the intervention hierarchy. Their primary function in the UK context has been to provide visible activity that displaces structural intervention.
        </p>
      </div>

      {/* Sub-block: Voluntary deposit limits */}
      <div className="space-y-3 max-w-4xl">
        <h3 className="text-lg font-bold text-slate-800">
          Voluntary deposit limits
        </h3>
        <p className="text-slate-500 text-sm md:text-base leading-relaxed">
          Self-imposed deposit limits are useful for some people some of the time. The published evidence shows they are used by a minority of customers, that customers in harm are less likely to use them than customers not in harm, and that limits set during a calm moment can be raised in seconds during a chasing moment with no enforced delay. We support default limits with friction (cooling-off periods on raises), not voluntary limits with no friction.
        </p>
      </div>

      {/* Sub-block: The structural alternative */}
      <div className="bg-slate-50 rounded-2xl p-6 md:p-8 space-y-3 border border-slate-100 max-w-4xl">
        <h3 className="text-lg font-bold text-slate-800">
          The structural alternative
        </h3>
        <p className="text-slate-600 text-sm md:text-base leading-relaxed">
          GHUK supports a whole-system response modelled on tobacco control: product safety standards set by public-health regulators, statutory advertising restrictions, affordability checks at the regulator level, a statutory duty of care on operators (see duty of care), NHS-led specialist treatment as the default, and DHSC consolidation of regulatory leadership. Each element supports the others. None of them work in isolation.
        </p>
      </div>
    </div>
  );
};

export default TacticFour;