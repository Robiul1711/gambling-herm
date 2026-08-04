import React from "react";
import { Link } from "react-router-dom";

const ChapterTwo = () => {
  return (
    <div
      id="gambling-addiction"
      className="space-y-8 scroll-mt-28 border-t border-gray-100 pt-8"
    >
      {/* Chapter Label & Main Heading */}
      <div className="space-y-2">
        <span className="text-xs font-bold text-[#0093D0] uppercase tracking-widest block">
          CHAPTER 2
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
          Gambling and addiction
        </h2>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed pt-2">
          Gambling was formally recognised as a mental disorder in DSM-III in 1980 and
          reclassified as a behavioural addiction in DSM-5 in 2013, on a footing with substance-
          use disorders. The neurobiology, comorbidity profile and treatment response patterns
          align with that classification.
        </p>
      </div>

      {/* Sub-block: Diagnostic framing */}
      <div className="space-y-3">
        <h3 className="text-xl md:text-2xl font-bold text-gray-900">
          Diagnostic framing
        </h3>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
          DSM-5 lists gambling disorder among substance-related and addictive disorders. ICD-
          11 uses "gambling disorder (predominantly online / predominantly offline / mixed)".
          Both require persistent and recurrent problematic gambling behaviour leading to
          clinically significant impairment or distress, with criteria covering preoccupation,
          tolerance, withdrawal, loss of control, chasing losses, lying and jeopardising
          relationships or career.
        </p>
      </div>

      {/* Sub-block: Comorbidity */}
      <div className="space-y-3">
        <h3 className="text-xl md:text-2xl font-bold text-gray-900">
          Comorbidity
        </h3>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
          People with gambling disorder show substantially elevated rates of co-occurring
          conditions. Reported lifetime comorbidity includes major depressive disorder (~50%),
          anxiety disorders (~60%), substance-use disorders (~57%), and personality disorders
          (~29%). The direction of causation is bidirectional. Gambling can worsen depression
          and anxiety. Depression and anxiety can worsen gambling.
        </p>
      </div>

      {/* Sub-block: Suicidality */}
      <div className="space-y-3">
        <h3 className="text-xl md:text-2xl font-bold text-gray-900">
          Suicidality
        </h3>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
          The <em className="italic">Adult Psychiatric Morbidity Survey 2007</em> (the last APMS to include gambling)
          reported that adults with gambling disorder made a past-year suicide attempt at 4.7%,
          against 0.6% of those without, roughly eight times the rate, and were <strong className="font-bold text-gray-900">4.7 times more
          likely</strong> to have had suicidal thoughts (19.2% vs 4.1%). Gambling questions returned to the
          APMS in 2023/4, using the PGSI (published November 2025); the suicide-attempt
          analysis has not yet been repeated on the new data, and we support it being run and
          published.
        </p>
      </div>

      {/* Sub-block: Stigma and treatment-seeking */}
      <div className="space-y-3">
        <h3 className="text-xl md:text-2xl font-bold text-gray-900">
          Stigma and treatment-seeking
        </h3>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
          UK help-seeking rates remain low. Of an estimated population in moderate-to-severe
          gambling harm, fewer than 10% access any formal treatment in a typical year, with
          women, minority ethnic groups, and people in deprived areas disproportionately under-
          represented in treatment caseloads. See our{" "}
          <Link
            to="/get-help"
            className="text-gray-900 font-medium underline hover:text-[#0093D0] transition-colors"
          >
            Stigma
          </Link>{" "}
          and{" "}
          <Link
            to="/inequality-and-gambling-harm"
            className="text-gray-900 font-medium underline hover:text-[#0093D0] transition-colors"
          >
            Inequality
          </Link>{" "}
          pages.
        </p>
      </div>

      {/* Action Link */}
      <div className="pt-2">
        <Link
          to="/policy-and-advocacy"
          className="text-[#0093D0] font-medium text-sm md:text-base underline hover:text-[#0076A8] transition-colors inline-flex items-center gap-1"
        >
          Clinical implications and MECC framing &rarr;
        </Link>
      </div>

      {/* Key References Card Box */}
      <div className="border border-gray-200 bg-white rounded-md p-6 md:p-8 space-y-4">
        <h4 className="text-xs font-bold uppercase tracking-wider text-gray-700">
          KEY REFERENCES
        </h4>
        <ol className="list-decimal pl-5 space-y-3 text-xs md:text-sm text-gray-600 leading-relaxed">
          <li>
            American Psychiatric Association. <em className="italic">DSM-5</em>. 2013.
          </li>
          <li>
            WHO. <em className="italic">ICD-11</em>. 2022.
          </li>
          <li>
            Wardle H et al. <em className="italic">Problem gambling and suicidal thoughts, suicide attempts and non-suicidal self-harm</em>. Gambling Commission, 2019.
          </li>
          <li>
            Lorains FK et al. Prevalence of comorbid disorders in problem and pathological gambling. <em className="italic">Addiction</em>. 2011;106(3):490–498.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default ChapterTwo;
