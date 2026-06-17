import React from "react";

const TacticFive = () => {
  return (
    <div id="tactic-5" className="space-y-8 scroll-mt-6 border-t border-slate-100 pt-8">
      {/* Chapter Title & Main Summary */}
      <div className="space-y-2">
        <span className="text-Primary font-medium text-sm md:text-base">
          Tactic 5
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
          Product design
        </h2>
        <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-4xl">
          Online slots, in-play sports books and casino-mechanic mobile games are engineered to maximise time-on-device and stake velocity. The design features that drive engagement are the same features that drive harm. The two are inseparable in current product architecture.
        </p>
      </div>

      {/* Sub-block: The engineering of stickiness */}
      <div className="space-y-3">
        <h3 className="text-lg font-bold text-slate-800">
          The engineering of stickiness
        </h3>
        <ul className="space-y-4 text-sm md:text-base text-slate-600 pl-4 list-disc marker:text-slate-300">
          <li className="leading-relaxed">
            <span className="font-bold text-slate-800">Variable-ratio reinforcement.</span> Wins arrive on an unpredictable schedule. The most behaviourally sticky reinforcement schedule known. The engine of slot-machine addiction.
          </li>
          <li className="leading-relaxed">
            <span className="font-bold text-slate-800">Near-misses.</span> Outcomes engineered to look close to a win. Activate reward neurochemistry similar to actual wins. Player feels they "almost got it" and keeps playing.
          </li>
          <li className="leading-relaxed">
            <span className="font-bold text-slate-800">Losses disguised as wins (LDWs).</span> Multi-line slot outcomes that return less than the stake but trigger win audio and animation. The brain logs a win event when financially the player lost.
          </li>
          <li className="leading-relaxed">
            <span className="font-bold text-slate-800">Speed of online cycles.</span> Online slot spins resolve in 2–3 seconds. A player can stake thousands of pounds within an hour without leaving the sofa.
          </li>
          <li className="leading-relaxed">
            <span className="font-bold text-slate-800">VIP schemes.</span> Discretionary loyalty programmes that lavish high-value losing customers with cashback, hospitality and personal account managers. Concentrates operator revenue on the most-harmed customers.
          </li>
          <li className="leading-relaxed">
            <span className="font-bold text-slate-800">In-play markets.</span> Bets resolve in seconds and recur thousands of times per match. Decision windows are too short for affordability calculation.
          </li>
        </ul>
      </div>

      {/* Metric Cards Grid Layout */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl">
        <div className="border border-slate-200 bg-white rounded-2xl p-5 space-y-2 shadow-sm">
          <span className="text-2xl md:text-3xl font-bold text-slate-800 block">2–3 sec</span>
          <p className="text-xs md:text-sm text-slate-500 leading-snug">
            resolution time of an online slot spin
          </p>
        </div>

        <div className="border border-slate-200 bg-white rounded-2xl p-5 space-y-2 shadow-sm">
          <span className="text-2xl md:text-3xl font-bold text-slate-800 block">~10%</span>
          <p className="text-xs md:text-sm text-slate-500 leading-snug">
            of online customers generate ~79% of net revenue (NatCen Patterns of Play, 2023)
          </p>
        </div>

        <div className="border border-slate-200 bg-white rounded-2xl p-5 space-y-2 shadow-sm">
          <span className="text-2xl md:text-3xl font-bold text-slate-800 block">£1.5bn+</span>
          <p className="text-xs md:text-sm text-slate-500 leading-snug">
            UK gambling marketing spend per year
          </p>
        </div>

        <div className="border border-slate-200 bg-white rounded-2xl p-5 space-y-2 shadow-sm">
          <span className="text-2xl md:text-3xl font-bold text-slate-800 block">~£15bn</span>
          <p className="text-xs md:text-sm text-slate-500 leading-snug">
            UK gross gambling yield per year
          </p>
        </div>
      </div>

      {/* Footer text safety standards */}
      <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-4xl pt-2">
        We support product safety standards set by public-health regulators, including stake limits aligned with the harm evidence, speed-of-play limits, mandatory breaks, volatility disclosures, prohibition of demonstrably high-harm features (near-misses, LDWs, rapid in-play markets), and mandatory algorithmic risk-flagging by operators with regulator-defined intervention thresholds. See our{" "}
        <a
          href="#"
          className="text-Primary font-medium underline hover:text-opacity-80 transition-colors"
        >
          policy positions
        </a>
        .
      </p>
    </div>
  );
};

export default TacticFive;