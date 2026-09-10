import React from "react";
import { Link } from "react-router-dom";

const TacticFive = () => {
  return (
    <div
      id="tactic-5"
      className="space-y-8 scroll-mt-28 border-t border-gray-100 pt-8"
    >
      {/* Chapter Tag & Main Heading */}
      <div className="space-y-2">
        <span className="text-xs sm:text-sm font-bold text-[#0093D0] uppercase tracking-wider block">
          TACTIC 5
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-gray-900 tracking-tight leading-tight">
          Product design
        </h2>
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed pt-2 font-normal">
          Online slots, in-play sports books and casino-mechanic mobile games
          are engineered to maximise time-on-device and stake velocity. The
          design features that drive engagement are the design features that
          drive harm. The two are inseparable in current product architecture.
        </p>
      </div>

      {/* Sub-block: The engineering of stickiness */}
      <div className="space-y-3">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
          The engineering of stickiness
        </h3>
        <ul className="space-y-3 text-sm sm:text-base text-gray-700 pl-5 list-disc marker:text-[#0093D0]">
          <li className="leading-relaxed font-normal">
            <strong className="font-bold text-gray-900 mr-1">
              Variable-ratio reinforcement.
            </strong>
            Wins arrive on an unpredictable schedule. The most behaviourally
            sticky reinforcement schedule known. The engine of slot-machine
            addiction.
          </li>
          <li className="leading-relaxed font-normal">
            <strong className="font-bold text-gray-900 mr-1">
              Near-misses.
            </strong>{" "}
            Outcomes engineered to look close to a win. Activate reward
            neurochemistry similar to actual wins. Player feels they "almost got
            it" and keeps playing.
          </li>
          <li className="leading-relaxed font-normal">
            <strong className="font-bold text-gray-900 mr-1">
              Losses disguised as wins (LDWs).
            </strong>
            Multi-line slot outcomes that return less than the stake but trigger
            win audio and animation. The brain logs a win when financially the
            player lost.
          </li>
          <li className="leading-relaxed font-normal">
            <strong className="font-bold text-gray-900 mr-1">
              Speed of online cycles.
            </strong>
            Online slot spins resolve in 2–3 seconds. A player can stake
            thousands within an hour without leaving the sofa.
          </li>
          <li className="leading-relaxed font-normal">
            <strong className="font-bold text-gray-900 mr-1">
              VIP schemes.
            </strong>{" "}
            Discretionary loyalty programmes that lavish high-value losing
            customers with cashback, hospitality and personal account managers.
            Concentrates operator revenue on the most-harmed customers.
          </li>
          <li className="leading-relaxed font-normal">
            <strong className="font-bold text-gray-900 mr-1">
              In-play markets.
            </strong>{" "}
            Bets resolve in seconds and recur thousands of times per match.
            Decision windows too short for affordability calculation.
          </li>
        </ul>
      </div>

      {/* Metric Cards Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="border border-gray-200/90 bg-white p-6  space-y-1.5 shadow-xs">
          <span className="text-3xl sm:text-4xl font-extrabold text-gray-900 block tracking-tight">
            2–3 sec
          </span>
          <p className="text-xs sm:text-sm text-gray-500 font-normal leading-snug">
            resolution time of an online slot spin
          </p>
        </div>

        <div className="border border-gray-200/90 bg-white p-6  space-y-1.5 shadow-xs">
          <span className="text-3xl sm:text-4xl font-extrabold text-gray-900 block tracking-tight">
            ~10%
          </span>
          <p className="text-xs sm:text-sm text-gray-500 font-normal leading-snug">
            of online customers generate ~79% of net revenue (NatCen{" "}
            <em className="italic">Patterns of Play</em>, 2023)
          </p>
        </div>

        <div className="border border-gray-200/90 bg-white p-6  space-y-1.5 shadow-xs">
          <span className="text-3xl sm:text-4xl font-extrabold text-gray-900 block tracking-tight">
            £1.5bn+
          </span>
          <p className="text-xs sm:text-sm text-gray-500 font-normal leading-snug">
            UK gambling marketing spend per year
          </p>
        </div>

        <div className="border border-gray-200/90 bg-white p-6  space-y-1.5 shadow-xs">
          <span className="text-3xl sm:text-4xl font-extrabold text-gray-900 block tracking-tight">
            £16.8bn
          </span>
          <p className="text-xs sm:text-sm text-gray-500 font-normal leading-snug">
            GB gross gambling yield, 2024/25
          </p>
        </div>
      </div>

      {/* Footer text safety standards */}
      <p className="text-gray-700 text-sm sm:text-base leading-relaxed pt-2 font-normal">
        We support product safety standards set by public-health regulators,
        including stake limits aligned with the harm evidence, speed-of-play
        limits, mandatory breaks, volatility disclosures, prohibition of
        demonstrably high-harm features (near-misses, LDWs, rapid in-play
        markets), and mandatory algorithmic risk-flagging by operators with
        regulator-defined intervention thresholds. See our{" "}
        <Link
          to="/policy-and-advocacy"
          className="text-gray-900 font-semibold underline hover:text-[#0093D0] transition-colors"
        >
          policy positions
        </Link>
        .
      </p>
    </div>
  );
};

export default TacticFive;
