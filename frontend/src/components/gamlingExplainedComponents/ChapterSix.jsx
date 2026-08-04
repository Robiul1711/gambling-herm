import React from "react";
import { Link } from "react-router-dom";

const ChapterSix = () => {
  return (
    <div
      id="product-design"
      className="space-y-8 scroll-mt-28 border-t border-gray-100 pt-8"
    >
      {/* Chapter Label & Main Heading */}
      <div className="space-y-2">
        <span className="text-xs font-bold text-[#0093D0] uppercase tracking-widest block">
          CHAPTER 6
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
          Design of gambling products
        </h2>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed pt-2">
          Online slots, in-play sports books and casino-mechanic mobile games are engineered to
          maximise time-on-device and stake velocity. The features that drive engagement are
          the same features that drive harm.
        </p>
      </div>

      {/* Sub-block: Mechanisms */}
      <div className="space-y-3">
        <h3 className="text-xl md:text-2xl font-bold text-gray-900">
          Mechanisms
        </h3>
        <ul className="space-y-3 text-sm md:text-base text-gray-700 pl-5 list-disc marker:text-gray-400">
          <li className="leading-relaxed">
            <strong className="font-bold text-gray-900">Variable-ratio reinforcement:</strong>{" "}
            wins arrive on an unpredictable schedule. This is the most behaviourally sticky
            reinforcement schedule known and is the engine of slot-machine addiction.
          </li>
          <li className="leading-relaxed">
            <strong className="font-bold text-gray-900">Near-misses:</strong> outcomes
            engineered to appear close to a win activate reward neurochemistry similar to actual
            wins. The player feels they "almost got it" and keeps playing.
          </li>
          <li className="leading-relaxed">
            <strong className="font-bold text-gray-900">Losses disguised as wins</strong> (LDWs):{" "}
            multi-line slots that pay back less than the stake but trigger win audio and animation.
            The brain logs a win event when financially the player lost.
          </li>
          <li className="leading-relaxed">
            <strong className="font-bold text-gray-900">Speed of online cycles:</strong> online
            slot spins resolve in 2–3 seconds. A player can stake thousands of pounds within an
            hour without leaving the sofa.
          </li>
          <li className="leading-relaxed">
            <strong className="font-bold text-gray-900">VIP schemes:</strong> discretionary loyalty
            programmes that lavish high-value losing customers with cashback, hospitality and
            personal account managers. Documented to concentrate operator revenue on the
            most-harmed customers.
          </li>
          <li className="leading-relaxed">
            <strong className="font-bold text-gray-900">In-play betting:</strong> bets resolve in
            seconds and recur thousands of times per match. Decision-making windows are too short for
            affordability calculation. This is the design problem GHUK considers most urgent.
          </li>
        </ul>
      </div>

      {/* Sub-block: Product safety standards */}
      <div className="space-y-3">
        <h3 className="text-xl md:text-2xl font-bold text-gray-900">
          Product safety standards
        </h3>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
          We support product-safety standards set by public-health regulators (not negotiated
          with the industry), including stake limits aligned with the harm evidence, speed-of-play
          limits, mandatory breaks, volatility disclosures, prohibition of demonstrably high-harm
          features (near-misses, LDWs, rapid in-play markets), and mandatory algorithmic risk-flagging
          by operators with regulator-defined intervention thresholds. See our{" "}
          <Link
            to="/industry-tactics"
            className="text-gray-900 font-medium underline hover:text-[#0093D0] transition-colors"
          >
            Gambling Tactics
          </Link>{" "}
          page for industry framings on each.
        </p>
      </div>
    </div>
  );
};

export default ChapterSix;