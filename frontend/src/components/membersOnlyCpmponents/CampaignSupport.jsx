import React from "react";
import { Link } from "react-router-dom";

const CampaignSupport = () => {
  return (
    <section className="max-w-5xl mx-auto py-4">
      <div className="border-l-[4px] border-[#166B94] bg-[#edf7fc]  p-6 sm:p-8 md:p-10 shadow-sm">
        {/* Header Sub-tag */}
        <h4 className="text-[#166B94] font-bold text-xs md:text-sm uppercase tracking-wider mb-4">
          WHY GHUK SUPPORTS THIS CAMPAIGN
        </h4>

        {/* Description Contents */}
        <div className="space-y-4 text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed font-normal">
          <p>
            The Members Only Campaign is run by Sam Badcock from lived
            experience of UK land-based gambling harm and the broken
            self-exclusion enforcement that followed. The campaign's proposals
            (PIN-protected slot machines, a national identity-verification and
            self-exclusion app, and proper enforcement of existing
            self-exclusion rights) are concrete, implementable, and exactly the
            kind of structural reform GHUK's{" "}
            <Link
              to="/gambling-tactics"
              className="text-[#166B94] underline hover:text-[#005580] font-medium transition-colors"
            >
              tactics analysis
            </Link>{" "}
            and{" "}
            <Link
              to="/policy-and-advocacy"
              className="text-[#166B94] underline hover:text-[#005580] font-medium transition-colors"
            >
              policy positions
            </Link>{" "}
            imply.
          </p>

          <p>
            This is also the policy direction that follows logically from the
            public-health principle that protection should be the population
            default, not an opt-in burden placed on the person already being
            harmed.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CampaignSupport;
