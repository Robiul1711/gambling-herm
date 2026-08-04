import React from "react";
import { Link } from "react-router-dom";

const ChapterSeven = () => {
  return (
    <div
      id="conducted"
      className="space-y-8 scroll-mt-28 border-t border-gray-100 pt-8"
    >
      {/* Chapter Label & Main Heading */}
      <div className="space-y-2">
        <span className="text-xs font-bold text-[#0093D0] uppercase tracking-widest block">
          CHAPTER 7
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
          Gambling and the way it is conducted
        </h2>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed pt-2">
          How gambling is offered to customers matters as much as what is offered. Account
          terms, identity verification, affordability checks, customer-support routing, complaints
          handling and dispute resolution are all design surfaces with public-health
          consequences.
        </p>
      </div>

      {/* Sub-block: Where operator conduct matters */}
      <div className="space-y-3">
        <h3 className="text-xl md:text-2xl font-bold text-gray-900">
          Where operator conduct matters
        </h3>
        <ul className="space-y-3 text-sm md:text-base text-gray-700 pl-5 list-disc marker:text-gray-400">
          <li className="leading-relaxed">
            <strong className="font-bold text-gray-900">Affordability checks.</strong> Triggered
            at evidence-based thresholds, not at thresholds set by the customer's loss tolerance.
            Operated by the regulator, not by operators marking their own homework.
          </li>
          <li className="leading-relaxed">
            <strong className="font-bold text-gray-900">Single-customer view.</strong> A
            regulator-held register so a customer cannot self-exclude from one operator while
            another continues to market to them. Implementation has been slow and partial.
          </li>
          <li className="leading-relaxed">
            <strong className="font-bold text-gray-900">Account terms and bonus traps.</strong>{" "}
            Wagering requirements, time limits and withdrawal restrictions configured to keep
            money in the system. Operator conduct here is a recurring theme in the Gambling
            Commission's enforcement caseload.
          </li>
          <li className="leading-relaxed">
            <strong className="font-bold text-gray-900">Identity verification.</strong>{" "}
            Age-verification has tightened, but verification on first deposit (vs first withdrawal)
            remains uneven, with the predictable effect that minors and self-excluded customers
            can deposit before any verification gate fires.
          </li>
          <li className="leading-relaxed">
            <strong className="font-bold text-gray-900">Complaint and dispute resolution.</strong>{" "}
            Slow, operator-dependent and structurally tilted. We support an independent ombudsman
            with binding authority over operators.
          </li>
        </ul>
      </div>

      {/* Sub-block: The Members Only Campaign */}
      <div className="space-y-3">
        <h3 className="text-xl md:text-2xl font-bold text-gray-900">
          The Members Only Campaign
        </h3>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
          Sam Badcock's lived-experience campaign has documented years of failure in the
          conduct of land-based gambling, particularly around self-exclusion enforcement at
          AGCs and slot venues. Our{" "}
          <Link
            to="/members-only"
            className="text-gray-900 font-medium underline hover:text-[#0093D0] transition-colors"
          >
            Members Only page
          </Link>{" "}
          covers the campaign and the policy package: PIN-protected slot terminals, a National App
          for self-exclusion that works across every venue, and proper enforcement of existing rules.
        </p>
      </div>
    </div>
  );
};

export default ChapterSeven;