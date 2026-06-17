import React from "react";

const ChapterSeven = () => {
  return (
    <div id="conducted" className="space-y-8 scroll-mt-28 border-t border-slate-100 pt-8">
      {/* Chapter Title & Main Summary */}
      <div className="space-y-2">
        <span className="text-Primary font-medium text-sm md:text-base">
          Chapter 7
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
          Gambling and the way it is conducted
        </h2>
        <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-4xl">
          How gambling is offered to customers matters as much as what is offered. Account terms, identity verification, affordability checks, customer-support routing, complaints handling and dispute resolution are all design surfaces with public-health consequences.
        </p>
      </div>

      {/* Sub-block: Where operator conduct matters */}
      <div className="space-y-3">
        <h3 className="text-lg font-bold text-slate-800">
          Where operator conduct matters
        </h3>
        <ul className="space-y-4 text-sm md:text-base text-slate-600 pl-4 list-disc marker:text-slate-300">
          <li className="leading-relaxed">
            <span className="font-bold text-slate-800">Affordability Checks.</span> Triggered at evidence-based thresholds, not at thresholds set by the customer's loss tolerance. Operated by the regulator, not by operators marking their own homework.
          </li>
          <li className="leading-relaxed">
            <span className="font-bold text-slate-800">Single-Customer View.</span> A regulator-held register so a customer cannot self-exclude from one operator while another continues to market to them. Implementation has been slow and partial.
          </li>
          <li className="leading-relaxed">
            <span className="font-bold text-slate-800">Account Terms And Bonus Traps.</span> Wagering requirements, time limits and withdrawal restrictions configured to keep money in the system. Operator conduct here is a recurring theme in the Gambling Commission's enforcement caseload.
          </li>
          <li className="leading-relaxed">
            <span className="font-bold text-slate-800">Identity Verification.</span> Age-verification has tightened, but verification on first deposit (vs first withdrawal) remains uneven, with the predictable effect that minors and self-excluded customers can deposit before any verification gate fires.
          </li>
          <li className="leading-relaxed">
            <span className="font-bold text-slate-800">Complaint And Dispute Resolution.</span> Slow, operator-dependent and structurally tilted. We support an independent ombudsman with binding authority over operators.
          </li>
        </ul>
      </div>

      {/* Sub-block: The Members Only Campaign */}
      <div className="space-y-3">
        <h3 className="text-lg font-bold text-slate-800">
          The Members Only Campaign
        </h3>
        <p className="text-slate-500 text-sm md:text-base leading-relaxed">
          Sam Badcock's lived-experience campaign has documented years of failure in the conduct of land-based gambling, particularly around self-exclusion enforcement at AGCs and slot venues. Our{" "}
          <a
            href="#"
            className="text-Primary font-medium underline hover:text-opacity-80 transition-colors"
          >
            Members Only Page
          </a>{" "}
          covers the campaign and the policy package: PIN-protected slot terminals, a National App for self-exclusion that genuinely works across venues, and proper enforcement of existing rules.
        </p>
      </div>
    </div>
  );
};

export default ChapterSeven;