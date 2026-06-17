import React from "react";

const ChapterSix = () => {
  return (
    <div id="product-design" className="space-y-8 scroll-mt-28 border-t border-slate-100 pt-8">
      {/* Chapter Title & Main Summary */}
      <div className="space-y-2">
        <span className="text-Primary font-medium text-sm md:text-base">
          Chapter 6
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
          Design of gambling products
        </h2>
        <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-4xl">
          Online slots, in-play sports books and casino-mechanic mobile games are engineered to maximise time-on-device and stake velocity. The features that drive engagement are the same features that drive harm.
        </p>
      </div>

      {/* Sub-block: Mechanisms */}
      <div className="space-y-3">
        <h3 className="text-lg font-bold text-slate-800">Mechanisms</h3>
        <ul className="space-y-4 text-sm md:text-base text-slate-600 pl-4 list-disc marker:text-slate-300">
          <li className="leading-relaxed">
            <span className="font-bold text-slate-800">Variable-Ratio Reinforcement:</span> wins arrive on an unpredictable schedule. This is the most behaviourally sticky reinforcement schedule known and is the engine of slot-machine addiction.
          </li>
          <li className="leading-relaxed">
            <span className="font-bold text-slate-800">Near-Misses:</span> outcomes engineered to appear close to a win activate reward neurochemistry similar to actual wins. The player feels they "almost got it" and keeps playing.
          </li>
          <li className="leading-relaxed">
            <span className="font-bold text-slate-800">Losses Disguised As Wins (LDWs):</span> multi-line slots that pay back less than the stake but trigger win audio and animation. The brain logs a win event when financially the player lost.
          </li>
          <li className="leading-relaxed">
            <span className="font-bold text-slate-800">Speed Of Online Cycles:</span> online slot spins resolve in 2–3 seconds. A player can stake thousands of pounds within an hour without leaving the sofa.
          </li>
          <li className="leading-relaxed">
            <span className="font-bold text-slate-800">VIP Schemes:</span> discretionary loyalty programmes that lavish high-value losing customers with cashback, hospitality and personal account managers. Documented to concentrate operator revenue on the most-harmed customers.
          </li>
          <li className="leading-relaxed">
            <span className="font-bold text-slate-800">In-Play Betting:</span> bets resolve in seconds and recur thousands of times per match. Decision-making windows are too short for affordability calculation. This is the design problem GHUK considers most urgent.
          </li>
        </ul>
      </div>

      {/* Sub-block: Product safety standards */}
      <div className="space-y-3">
        <h3 className="text-lg font-bold text-slate-800">
          Product safety standards
        </h3>
        <p className="text-slate-500 text-sm md:text-base leading-relaxed">
          We support product-safety standards set by public-health regulators (not negotiated with the industry), including stake limits aligned with the harm evidence, speed-of-play limits, mandatory breaks, volatility disclosures, prohibition of demonstrably high-harm features (near-misses, LDWs, rapid in-play markets), and mandatory algorithmic risk-flagging by operators with regulator-defined intervention thresholds. See our{" "}
          <a
            href="#"
            className="text-Primary font-medium underline hover:text-opacity-80 transition-colors"
          >
            Gambling Tactics
          </a>{" "}
          page for industry framings on each.
        </p>
      </div>
    </div>
  );
};

export default ChapterSix;