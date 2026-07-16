import React from"react";

const TacticThree = () => {
 return (
 <div id="tactic-3" className="space-y-8 scroll-mt-6 border-t border-slate-100 pt-8">
 {/* Chapter Title & Main Summary */}
 <div className="space-y-2">
 <span className="text-Primary font-medium text-sm md:text-base">
 Tactic 3
 </span>
 <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
 Industry people and allies
 </h2>
 <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-4xl">
 The political-influence apparatus around UK gambling is structurally larger than the regulator. Operators fund cross-party lobbying, fund (directly or indirectly) much of the research and treatment infrastructure that government relies on for evidence, and benefit from a steady traffic of senior personnel between operators, trade bodies, regulators and ministerial offices.
 </p>
 </div>

 {/* Sub-block: The revolving door */}
 <div className="space-y-3 max-w-4xl">
 <h3 className="text-lg font-bold text-slate-800">The revolving door</h3>
 <p className="text-slate-500 text-sm md:text-base leading-relaxed">
 UK gambling policy has seen consistent traffic in both directions between the Gambling Commission, DCMS, ministerial offices, operator companies, trade bodies (most prominently the Betting and Gaming Council), and the industry-funded charitable arms (most prominently GambleAware, now Bet & Gambling Board). This pattern is the classic profile of regulatory capture. We name it plainly.
 </p>
 </div>

 {/* Sub-block: Industry-funded charitable arms */}
 <div className="space-y-3">
 <h3 className="text-lg font-bold text-slate-800">
 The industry-funded charitable arms
 </h3>
 <ol className="space-y-3 text-sm md:text-base text-slate-600 pl-4 list-decimal marker:text-slate-300">
 <li className="leading-relaxed">
 <span className="font-bold text-slate-800">GambleAware / Bet & Gambling Board.</span> For two decades the central conduit for voluntary industry contributions to UK research, education and treatment. The structural conflict of interest in industry-derived RET funding is the single largest reason UK evidence and policy lagged the public-health case by a decade or more. GHUK has never accepted GambleAware funding.
 </li>
 <li className="leading-relaxed">
 <span className="font-bold text-slate-800">GamCare.</span> The largest UK gambling-treatment provider, historically RET-funded. Has done substantial service work, with a recurring question about funding independence.
 </li>
 <li className="leading-relaxed">
 <span className="font-bold text-slate-800">Gordon Moody.</span> Long-established residential treatment, historically RET-funded.
 </li>
 </ol>
 <p className="text-slate-500 text-sm md:text-base leading-relaxed pt-2 max-w-4xl">
 The wind-down of the voluntary RET system and the introduction of a statutory levy is a structural improvement. The settings of the statutory regime (rate, distribution mechanism, ringfencing, scope of independence) will determine whether the improvement is meaningful.
 </p>
 </div>

 {/* Sub-block: Allies in academia and parliament */}
 <div className="space-y-3 max-w-4xl">
 <h3 className="text-lg font-bold text-slate-800">
 Allies in academia and parliament
 </h3>
 <p className="text-slate-500 text-sm md:text-base leading-relaxed">
 Industry-funded research is a documented and recurring feature of the UK gambling evidence base. Where research has been funded by RET, GambleAware or directly by operators, transparency about that funding has not always been consistent. GHUK supports a 5-year retrospective declaration of industry funding for any researcher contributing to UK gambling-policy debates, modelled on equivalent requirements in alcohol and tobacco research.
 </p>
 <p className="text-slate-500 text-sm md:text-base leading-relaxed">
 Parliamentary engagement is similarly structured. Cross-party gambling APPGs have at various points been resourced by industry-funded secretariats. The 2018 cross-party group on FOBTs was, by contrast, deliberately structured outside that arrangement and is widely credited with driving the £2 stake limit. The structure of the parliamentary group matters as much as the policy question it considers.
 </p>
 </div>

 {/* Sub-block: What we want */}
 <div className="bg-slate-50 p-6 md:p-8 space-y-4 border border-slate-100">
 <h3 className="text-lg font-bold text-slate-800">What we want</h3>
 <ul className="space-y-3 text-sm md:text-base text-slate-600 pl-4 list-disc marker:text-slate-300">
 <li className="leading-relaxed">
 A statutory cooling-off period on revolving-door appointments between operators, trade bodies, regulators and ministerial offices.
 </li>
 <li className="leading-relaxed">
 Lobbying-register transparency requirements.
 </li>
 <li className="leading-relaxed">
 An explicit duty on parliamentarians to declare gambling-industry funding before contributing to debates on gambling regulation. (See our{" "}
 <a
 href="#"
 className="text-Primary font-medium underline hover:text-opacity-80 transition-colors"
 >
 Regulatory capture position
 </a>
 ).
 </li>
 </ul>
 </div>
 </div>
 );
};

export default TacticThree;