import React from "react";

const ChapterEight = () => {
  return (
    <div id="voluntary-bans" className="space-y-8 scroll-mt-28 border-t border-slate-100 pt-8">
      {/* Chapter Title & Main Summary */}
      <div className="space-y-2">
        <span className="text-Primary font-medium text-sm md:text-base">
          Chapter 8
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
          Gambling and voluntary bans
        </h2>
        <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-4xl">
          Self-exclusion is presented by the industry as the central harm-reduction mechanism. Its design, scope and enforcement systematically fail the people most likely to need it.
        </p>
      </div>

      {/* Sub-block: What's there */}
      <div className="space-y-3">
        <h3 className="text-lg font-bold text-slate-800">What's there</h3>
        <ul className="space-y-3 text-sm md:text-base text-slate-600 pl-4 list-disc marker:text-slate-300">
          <li className="leading-relaxed">
            <span className="font-bold text-slate-800">GAMSTOP</span> covers all UK-licensed online operators. Self-exclude once, blocked across all GB-licensed sites for 6 months, 1 year or 5 years.
          </li>
          <li className="leading-relaxed">
            <span className="font-bold text-slate-800">SENSE</span> covers casinos.
          </li>
          <li className="leading-relaxed">
            <span className="font-bold text-slate-800">Land-based bookmaker self-exclusion</span> (paper-based, photograph and venue-by-venue) covers high-street betting shops.
          </li>
          <li className="leading-relaxed">
            <span className="font-bold text-slate-800">AGC and slot-venue self-exclusion</span> exists but is patchy. This is the gap the Members Only Campaign focuses on.
          </li>
        </ul>
      </div>

      {/* Sub-block: The failure modes */}
      <div className="space-y-3">
        <h3 className="text-lg font-bold text-slate-800">The failure modes</h3>
        <ul className="space-y-4 text-sm md:text-base text-slate-600 pl-4 list-disc marker:text-slate-300">
          <li className="leading-relaxed">
            <span className="font-bold text-slate-800">Cross-venue gaps.</span> A person can self-exclude from one venue and walk to the next AGC on the same high street. Enforcement is venue-by-venue, photographic, and staffed by employees with no real incentive to refuse a customer.
          </li>
          <li className="leading-relaxed">
            <span className="font-bold text-slate-800">Marketing continues post-exclusion.</span> Operators have repeatedly been found to market to customers after they have self-excluded. Gambling Commission enforcement actions catalogue this.
          </li>
          <li className="leading-relaxed">
            <span className="font-bold text-slate-800">Reverse-withdrawal traps.</span> Customers who hit the "lock my account" button retain a withdrawal window during which deposits can still be re-credited at the click.
          </li>
          <li className="leading-relaxed">
            <span className="font-bold text-slate-800">No real-time identity check at point of deposit.</span> Verification often runs on withdrawal, so a self-excluded customer can deposit and lose before the system catches up.
          </li>
        </ul>
      </div>

      {/* Sub-block: What we want */}
      <div className="space-y-3">
        <h3 className="text-lg font-bold text-slate-800">What we want</h3>
        <p className="text-slate-500 text-sm md:text-base leading-relaxed">
          A National App for self-exclusion (single sign-up, enforced across land-based and online), PIN-protected slot terminals, a statutory duty of care on operators for the conduct of self-exclusion, and meaningful enforcement against operators that breach. See{" "}
          <a
            href="#"
            className="text-Primary font-medium underline hover:text-opacity-80 transition-colors"
          >
            Members Only Campaign
          </a>{" "}
          and our{" "}
          <a
            href="#"
            className="text-Primary font-medium underline hover:text-opacity-80 transition-colors"
          >
            Duty-Of-Care Position
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default ChapterEight;