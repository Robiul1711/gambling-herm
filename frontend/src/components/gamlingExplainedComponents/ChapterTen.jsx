import React from "react";

const ChapterTen = () => {
  return (
    <div id="crime" className="space-y-8 scroll-mt-28 border-t border-slate-100 pt-8">
      {/* Chapter Title & Main Summary */}
      <div className="space-y-2">
        <span className="text-Primary font-medium text-sm md:text-base">
          Chapter 10
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
          Gambling and crime
        </h2>
        <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-4xl">
          Gambling-related criminal activity sits in two categories: criminal activity by people experiencing gambling harm (the more frequently discussed), and criminal or quasi-criminal conduct by operators (less discussed, but structurally more significant).
        </p>
      </div>

      {/* Sub-block: Gambling-related offending by people in harm */}
      <div className="space-y-3">
        <h3 className="text-lg font-bold text-slate-800">
          Gambling-related offending by people in harm
        </h3>
        <ul className="space-y-3 text-sm md:text-base text-slate-600 pl-4 list-disc marker:text-slate-300">
          <li className="leading-relaxed">
            Among adults entering NHS gambling-clinic caseloads, between <span className="font-bold text-slate-800">15% And 30%</span> report some criminal activity linked to their gambling, most commonly fraud and theft from employer, family or financial institutions.
          </li>
          <li className="leading-relaxed">
            UK case-law and HMP data point to a notable population of incarcerated adults whose offending was funded by, or driven by, gambling debt. The Howard League's work has been central in surfacing this.
          </li>
          <li className="leading-relaxed">
            Banks et al. found <span className="font-bold text-slate-800">7% Of Affected Others</span> engaged in petty theft or dishonesty as a consequence of their family member's gambling.
          </li>
        </ul>
      </div>

      {/* Sub-block: Operator conduct */}
      <div className="space-y-3">
        <h3 className="text-lg font-bold text-slate-800">Operator conduct</h3>
        <ul className="space-y-3 text-sm md:text-base text-slate-600 pl-4 list-disc marker:text-slate-300">
          <li className="leading-relaxed">
            The Gambling Commission's annual enforcement reports list dozens of operator failures in AML (anti-money-laundering) controls, social-responsibility compliance, and marketing breaches. Fines have been substantial. Behavioural change at the operator level has been gradual.
          </li>
          <li className="leading-relaxed">
            Cases of operators continuing to accept deposits from customers with documented signs of harm or self-exclusion are recurring.
          </li>
          <li className="leading-relaxed">
            Affordability checks remain the central regulatory pressure point. The industry's argument that these "intrude on responsible customers" needs to be weighed against the recurrence of harm-after-clear-warning-signs cases.
          </li>
        </ul>
      </div>

      {/* Chapter Footer / Context Notes */}
      <p className="text-slate-500 text-sm md:text-base leading-relaxed border-l-2 border-slate-200 pl-4 italic">
        The criminal-justice dimension is the area where the UK evidence base is weakest. The 2025/26 edition of Gambling Explained will incorporate the past five years of work from the Howard League, the Centre for Justice Innovation, and our own member-contributed FOI work.
      </p>
    </div>
  );
};

export default ChapterTen;