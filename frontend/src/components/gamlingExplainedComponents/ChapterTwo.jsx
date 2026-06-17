import React from "react";

const ChapterTwo = () => {
  return (
    <div id="gambling-addiction" className="space-y-8 scroll-mt-28 border-t border-slate-100 pt-8">
      {/* Chapter Title & Main Summary */}
      <div className="space-y-2">
        <span className="text-Primary font-medium text-sm md:text-base">
          Chapter 2
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
          Gambling and addiction
        </h2>
        <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-4xl">
          Gambling addiction was formally recognised as a mental disorder in DSM-III in 1980 and reclassified as a behavioural addiction in DSM-5 in 2013, on a footing with substance-use disorders. The neurobiology, comorbidity profile and treatment response patterns align with that classification.
        </p>
      </div>

      {/* Sub-block: Diagnostic framing */}
      <div className="space-y-3">
        <h3 className="text-lg font-bold text-slate-800">
          Diagnostic framing
        </h3>
        <p className="text-slate-500 text-sm md:text-base leading-relaxed">
          DSM-5 lists gambling disorder among substance-related and addictive disorders. ICD-11 uses "gambling disorder (predominantly online / predominantly offline / mixed)". Both require persistent and recurrent problematic gambling behaviour leading to clinically significant impairment or distress, with criteria covering preoccupation, tolerance, withdrawal, loss of control, chasing losses, lying and jeopardising relationships or career.
        </p>
      </div>

      {/* Sub-block: Comorbidity */}
      <div className="space-y-3">
        <h3 className="text-lg font-bold text-slate-800">
          Comorbidity
        </h3>
        <p className="text-slate-500 text-sm md:text-base leading-relaxed">
          People with gambling disorder show substantially elevated rates of co-occurring conditions. Reported lifetime comorbidity includes major depressive disorder (~50%), anxiety disorders (~60%), substance-use disorders (~57%), and personality disorders (~29%). The direction of causation is bidirectional. Gambling can worsen depression and anxiety. Depression and anxiety can worsen gambling.
        </p>
      </div>

      {/* Sub-block: Suicidality */}
      <div className="space-y-3">
        <h3 className="text-lg font-bold text-slate-800">
          Suicidality
        </h3>
        <p className="text-slate-500 text-sm md:text-base leading-relaxed">
          The Adult Psychiatric Morbidity Survey 2007 (the last APMS to include gambling) reported that adults with gambling disorder were 4.7 times more likely to have made a past-year suicide attempt than those without (4.7% vs 0.6%) and 4.7 times more likely to have had suicidal thoughts (19.2% vs 4.1%). This single data point is now seventeen years old. We support its restoration in the next APMS.
        </p>
      </div>

      {/* Sub-block: Stigma and treatment-seeking */}
      <div className="space-y-3">
        <h3 className="text-lg font-bold text-slate-800">
          Stigma and treatment-seeking
        </h3>
        <p className="text-slate-500 text-sm md:text-base leading-relaxed">
          UK help-seeking rates remain low. Of an estimated population in moderate-to-severe gambling harm, fewer than 10% access any formal treatment in a typical year, with women, minority ethnic groups, and people in deprived areas disproportionately under-represented in treatment caseloads. See our{" "}
          <a
            href="#"
            className="text-slate-700 font-medium underline hover:text-Primary transition-colors"
          >
            Stigma
          </a>{" "}
          and{" "}
          <a
            href="#"
            className="text-slate-700 font-medium underline hover:text-Primary transition-colors"
          >
            Inequality
          </a>{" "}
          pages.
        </p>
      </div>

      {/* Navigation Redirect Action Link */}
      <div className="pt-2">
        <a
          href="#"
          className="inline-flex items-center text-sm md:text-base text-Primary font-medium underline hover:text-opacity-80 transition-all"
        >
          Clinical implications and MECC framing &rarr;
        </a>
      </div>

      {/* Key References Component Card */}
      <div className="border border-slate-200 bg-slate-50/50 rounded-xl p-6 md:p-8 space-y-2">
        <h4 className="text-sm font-bold uppercase tracking-wider text-slate-700">
          Key references
        </h4>
        <ol className="list-decimal pl-4 space-y-3 text-xs md:text-sm text-slate-500 marker:text-slate-400 leading-relaxed">
          <li>American Psychiatric Association. DSM-5. 2013.</li>
          <li>WHO. ICD-11. 2022.</li>
          <li>
            Wardle H et al. Problem gambling and suicidal thoughts, suicide attempts and non-suicidal self-harm. Gambling Commission, 2019.
          </li>
          <li>
            Lorains FK et al. Prevalence of comorbid disorders in problem and pathological gambling. Addiction. 2011;106(3):490–498.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default ChapterTwo;