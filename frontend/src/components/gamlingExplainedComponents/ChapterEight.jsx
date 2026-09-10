import React from "react";
import { Link } from "react-router-dom";

const ChapterEight = () => {
  return (
    <div
      id="voluntary-bans"
      className="space-y-8 scroll-mt-28 border-t border-gray-100 pt-8"
    >
      {/* Chapter Label & Main Heading */}
      <div className="space-y-2">
        <span className="text-xs font-bold text-[#0093D0] uppercase tracking-widest block">
          CHAPTER 8
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
          Gambling and voluntary bans
        </h2>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed pt-2">
          Self-exclusion is presented by the industry as the central harm-reduction mechanism.
          Its design, scope and enforcement systematically fail the people most likely to need it.
        </p>
      </div>

      {/* Sub-block: What's there */}
      <div className="space-y-3">
        <h3 className="text-xl md:text-2xl font-bold text-gray-900">
          What's there
        </h3>
        <ul className="space-y-3 text-sm md:text-base text-gray-700 pl-5 list-disc marker:text-gray-400">
          <li className="leading-relaxed">
            <strong className="font-bold text-gray-900">GAMSTOP</strong> covers all UK-licensed
            online operators. Self-exclude once, blocked across all GB-licensed sites for 6 months,
            1 year or 5 years.
          </li>
          <li className="leading-relaxed">
            <strong className="font-bold text-gray-900">SENSE</strong> covers casinos.
          </li>
          <li className="leading-relaxed">
            <strong className="font-bold text-gray-900">
              Land-based bookmaker self-exclusion
            </strong>{" "}
            (MOSES: paper-based, photograph and venue-by-venue) covers high-street betting shops.
          </li>
          <li className="leading-relaxed">
            <strong className="font-bold text-gray-900">
              AGC and slot-venue self-exclusion
            </strong>{" "}
            exists but is patchy. This is the gap the Members Only Campaign focuses on.
          </li>
        </ul>
      </div>

      {/* Sub-block: The failure modes */}
      <div className="space-y-3">
        <h3 className="text-xl md:text-2xl font-bold text-gray-900">
          The failure modes
        </h3>
        <ul className="space-y-3 text-sm md:text-base text-gray-700 pl-5 list-disc marker:text-gray-400">
          <li className="leading-relaxed">
            <strong className="font-bold text-gray-900">Cross-venue gaps.</strong> A person can
            self-exclude from one venue and walk to the next AGC on the same high street.
            Enforcement is venue-by-venue, photographic, and staffed by employees with no real
            incentive to refuse a customer.
          </li>
          <li className="leading-relaxed">
            <strong className="font-bold text-gray-900">
              Marketing continues post-exclusion.
            </strong>{" "}
            Operators have repeatedly been found to market to customers after they have
            self-excluded. Gambling Commission enforcement actions catalogue this.
          </li>
          <li className="leading-relaxed">
            <strong className="font-bold text-gray-900">Reverse-withdrawal traps.</strong>{" "}
            Customers who hit the "lock my account" button retain a withdrawal window during which
            deposits can still be re-credited at the click.
          </li>
          <li className="leading-relaxed">
            <strong className="font-bold text-gray-900">
              No real-time identity check at point of deposit.
            </strong>{" "}
            Verification often runs on withdrawal, so a self-excluded customer can deposit and lose
            before the system catches up.
          </li>
        </ul>
      </div>

      {/* Sub-block: What we want */}
      <div className="space-y-3">
        <h3 className="text-xl md:text-2xl font-bold text-gray-900">
          What we want
        </h3>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
          A National App for self-exclusion (single sign-up, enforced across land-based and online),
          PIN-protected slot terminals, a statutory duty of care on operators for the conduct of
          self-exclusion, and meaningful enforcement against operators that breach. See{" "}
          <Link
            to="/members-only"
            className="text-gray-900 font-medium underline hover:text-[#0093D0] transition-colors"
          >
            Members Only Campaign
          </Link>{" "}
          and our{" "}
          <Link
            to="/duty-of-care"
            className="text-gray-900 font-medium underline hover:text-[#0093D0] transition-colors"
          >
            duty-of-care position
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default ChapterEight;