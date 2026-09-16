import React from "react";

const ChapterTen = () => {
  return (
    <div
      id="crime"
      className="space-y-8 scroll-mt-28 border-t border-gray-100 pt-8"
    >
      {/* Chapter Label & Main Heading */}
      <div className="space-y-2">
        <span className="text-xs font-bold text-[#0093D0] uppercase tracking-widest block">
          CHAPTER 10
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
          Gambling and crime
        </h2>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed pt-2">
          Gambling-related criminal activity sits in two categories: criminal activity by people
          experiencing gambling harm (the more frequently discussed), and criminal or quasi-
          criminal conduct by operators (less discussed, but structurally more significant).
        </p>
      </div>

      {/* Sub-block: Gambling-related offending by people in harm */}
      <div className="space-y-3">
        <h3 className="text-xl md:text-2xl font-bold text-gray-900">
          Gambling-related offending by people in harm
        </h3>
        <ul className="space-y-3 text-sm md:text-base text-gray-700 pl-5 list-disc marker:text-gray-400">
          <li className="leading-relaxed">
            Among adults entering NHS gambling-clinic caseloads, between{" "}
            <strong className="font-bold text-gray-900">15% and 30%</strong> report some criminal
            activity linked to their gambling, most commonly fraud and theft from employer, family or
            financial institutions.
          </li>
          <li className="leading-relaxed">
            UK case-law and HMP data point to a notable population of incarcerated adults whose
            offending was funded by, or driven by, gambling debt. The Howard League's work has
            been central in surfacing this.
          </li>
          <li className="leading-relaxed">
            In Banks et al.’s survey of family members, <strong className="font-bold text-gray-900">7% reported petty theft or dishonesty</strong> as
            a consequence of a family member’s gambling (self-selected support-seeking sample).
          </li>
        </ul>
      </div>

      {/* Sub-block: Operator conduct */}
      <div className="space-y-3">
        <h3 className="text-xl md:text-2xl font-bold text-gray-900">
          Operator conduct
        </h3>
        <ul className="space-y-3 text-sm md:text-base text-gray-700 pl-5 list-disc marker:text-gray-400">
          <li className="leading-relaxed">
            The Gambling Commission's annual enforcement reports list dozens of operator failures in
            AML (anti-money-laundering) controls, social-responsibility compliance, and marketing
            breaches. Fines have been substantial. Behavioural change at the operator level has
            been gradual.
          </li>
          <li className="leading-relaxed">
            Cases of operators continuing to accept deposits from customers with documented signs of
            harm or self-exclusion are recurring.
          </li>
          <li className="leading-relaxed">
            Affordability checks remain the central regulatory pressure point. The industry's argument
            that these "intrude on responsible customers" needs to be weighed against the
            recurrence of harm-after-clear-warning-signs cases.
          </li>
        </ul>
      </div>

      {/* Footer Note */}
      <p className="text-gray-700 text-sm md:text-base leading-relaxed pt-2">
        The criminal-justice dimension is the area where the UK evidence base is weakest. The
        2025/26 edition of <em className="italic">Gambling Explained</em> will incorporate the past
        five years of work from the Howard League, the Centre for Justice Innovation, and our own
        member-contributed FOI work.
      </p>
    </div>
  );
};

export default ChapterTen;