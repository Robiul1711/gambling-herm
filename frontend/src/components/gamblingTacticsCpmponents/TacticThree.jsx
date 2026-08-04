import React from "react";
import { Link } from "react-router-dom";

const TacticThree = () => {
  return (
    <div
      id="tactic-3"
      className="space-y-8 scroll-mt-28 border-t border-gray-100 pt-8"
    >
      {/* Chapter Tag & Main Heading */}
      <div className="space-y-2">
        <span className="text-xs font-bold text-[#0093D0] uppercase tracking-widest block">
          TACTIC 3
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
          Industry people and allies
        </h2>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed pt-2">
          The political-influence apparatus around UK gambling is structurally larger than the
          regulator. Operators fund cross-party lobbying, fund (directly or indirectly) much of the
          research and treatment infrastructure that government relies on for evidence, and
          benefit from a steady traffic of senior personnel between operators, trade bodies,
          regulators and ministerial offices.
        </p>
      </div>

      {/* Sub-block: The revolving door */}
      <div className="space-y-3">
        <h3 className="text-xl md:text-2xl font-bold text-gray-900">
          The revolving door
        </h3>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
          UK gambling policy has seen consistent traffic in both directions between the Gambling
          Commission, DCMS, ministerial offices, operator companies, trade bodies (most
          prominently the Betting and Gaming Council), and the industry-funded charitable arms.
          This pattern is the classic profile of regulatory capture, and we name the pattern
          plainly.
        </p>
      </div>

      {/* Sub-block: The industry-funded charitable arms */}
      <div className="space-y-4">
        <h3 className="text-xl md:text-2xl font-bold text-gray-900">
          The industry-funded charitable arms
        </h3>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
          For two decades, voluntary industry contributions were channelled through charitable
          bodies that commissioned much of the UK's research, education and treatment. The
          structural conflict of interest in industry-derived RET funding, whoever administers it, is
          among the largest reasons UK evidence and policy lagged the public-health case by a
          decade or more. This is a critique of the funding architecture, not of the organisations
          working within it or their staff, many of whom deliver valuable services. GHUK accepts
          no funding from the gambling industry, its trade bodies, or its associated charitable
          arms.
        </p>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
          The wind-down of the voluntary RET system and the introduction of a statutory levy is
          a structural improvement. The settings of the statutory regime (rate, distribution
          mechanism, ringfencing, scope of independence) will determine whether the
          improvement is meaningful.
        </p>
      </div>

      {/* Sub-block: Allies in academia and parliament */}
      <div className="space-y-4">
        <h3 className="text-xl md:text-2xl font-bold text-gray-900">
          Allies in academia and parliament
        </h3>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
          Industry-funded research is a documented and recurring feature of the UK gambling
          evidence base. Where research has been funded through the RET system or directly by
          operators, transparency about that funding has not always been consistent. GHUK
          supports a 5-year retrospective declaration of industry funding for any researcher
          contributing to UK gambling-policy debates, modelled on equivalent requirements in
          alcohol and tobacco research.
        </p>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
          Parliamentary engagement is similarly structured. Cross-party gambling APPGs have at
          various points been resourced by industry-funded secretariats. The 2018 cross-party
          group on FOBTs was, by contrast, deliberately structured outside that arrangement
          and is widely credited with driving the £2 stake limit. The structure of the
          parliamentary group matters as much as the policy question it considers.
        </p>
      </div>

      {/* Sub-block: What we want */}
      <div className="space-y-3">
        <h3 className="text-xl md:text-2xl font-bold text-gray-900">
          What we want
        </h3>
        <ul className="space-y-3 text-sm md:text-base text-gray-700 pl-5 list-disc marker:text-gray-400">
          <li className="leading-relaxed">
            A statutory cooling-off period on revolving-door appointments between operators, trade
            bodies, regulators and ministerial offices.
          </li>
          <li className="leading-relaxed">
            Lobbying-register transparency requirements.
          </li>
          <li className="leading-relaxed">
            An explicit duty on parliamentarians to declare gambling-industry funding before
            contributing to debates on gambling regulation. (See our{" "}
            <Link
              to="/regulatory-capture"
              className="text-gray-900 font-medium underline hover:text-[#0093D0] transition-colors"
            >
              Regulatory capture position
            </Link>
            .)
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TacticThree;
