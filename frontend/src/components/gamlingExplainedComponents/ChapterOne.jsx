import React from "react";
import { Link } from "react-router-dom";

const ChapterOne = () => {
  return (
    <div id="chapter-1" className="space-y-8 scroll-mt-28">
      {/* Chapter Label & Main Heading */}
      <div className="space-y-2">
        <span className="text-xs font-bold text-[#0093D0] uppercase tracking-widest block">
          CHAPTER 1
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
          Gambling and health
        </h2>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed pt-2">
          The industry continues to deny the population-level significance of
          gambling harm. The independent evidence, where it exists, places
          gambling-related harm at a scale comparable to alcohol misuse and
          major depressive disorder, with the WHO calling for it to be placed on
          national public-health agendas.
        </p>
      </div>

      {/* Sub-block: What is known */}
      <div className="space-y-3">
        <h3 className="text-xl md:text-2xl font-bold text-gray-900">
          What is known
        </h3>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
          Australian and New Zealand research has established a{" "}
          <strong className="font-bold text-gray-900">
            taxonomy of harm across seven domains, with legacy and
            intergenerational harm as a temporal dimension
          </strong>
          : financial; relationship disruption, conflict or breakdown; emotional
          or psychological distress; decrements to health; cultural harm;
          reduced performance at work or study; and criminal activity (Langham
          et al., 2016). The same domains underpin GHSI 2025 (NatCen).
        </p>
      </div>

      {/* Sub-block: The burden on families */}
      <div className="space-y-4">
        <h3 className="text-xl md:text-2xl font-bold text-gray-900">
          The burden on families
        </h3>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
          Among family members of people with disordered gambling, the impact
          patterns are consistent across studies:
        </p>

        {/* Responsive Stat Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          <div className="border border-gray-200 bg-white p-5  space-y-2">
            <span className="text-3xl font-bold text-gray-900 block">99%</span>
            <p className="text-xs md:text-sm text-gray-600 leading-snug">
              report harm to their health from a loved one's gambling
            </p>
          </div>
          <div className="border border-gray-200 bg-white p-5  space-y-2">
            <span className="text-3xl font-bold text-gray-900 block">93%</span>
            <p className="text-xs md:text-sm text-gray-600 leading-snug">
              report financial-security impact (64% significant)
            </p>
          </div>
          <div className="border border-gray-200 bg-white p-5  space-y-2">
            <span className="text-3xl font-bold text-gray-900 block">96%</span>
            <p className="text-xs md:text-sm text-gray-600 leading-snug">
              report relationship harm
            </p>
          </div>
          <div className="border border-gray-200 bg-white p-5  space-y-2">
            <span className="text-3xl font-bold text-gray-900 block">8%</span>
            <p className="text-xs md:text-sm text-gray-600 leading-snug">
              have attempted suicide as a consequence
            </p>
          </div>
        </div>
        <p className="text-xs italic text-gray-500 mt-2">
          Banks et al., 2018,{" "}
          <em className="italic">Families Living with Problem Gambling</em>. Self-selected sample of family members seeking support (~190): read as indicative of the harm pattern, not as population rates.
        </p>
      </div>

      {/* Sub-block: Disability weights */}
      <div className="space-y-4">
        <h3 className="text-xl md:text-2xl font-bold text-gray-900">
          Disability weights (quality-of-life decrement)
        </h3>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
          Where 0 = perfect health and 1 = death. Gambling disorder harm sits
          between heroin dependence and bipolar mania:
        </p>
        <ul className="space-y-2 text-sm md:text-base text-gray-700 pl-5 list-disc marker:text-gray-400">
          <li>
            Schizophrenia, acute state:{" "}
            <strong className="font-bold text-gray-900">0.76</strong>
          </li>
          <li>
            Heroin and other opioid dependence:{" "}
            <strong className="font-bold text-gray-900">0.64</strong>
          </li>
          <li>
            Gambling disorder harm (PGSI 8+):{" "}
            <strong className="font-bold text-gray-900">0.44 to 0.54</strong>{" "}
            (AUS/NZ)
          </li>
          <li>
            Manic episode of bipolar disorder:{" "}
            <strong className="font-bold text-gray-900">0.48</strong>
          </li>
          <li>
            Moderate alcohol dependence:{" "}
            <strong className="font-bold text-gray-900">0.37</strong>
          </li>
          <li>
            Moderate level of gambling harm (PGSI 3–7):{" "}
            <strong className="font-bold text-gray-900">0.29 to 0.37</strong>
          </li>
          <li>
            Harmed by someone else’s gambling, severe level:{" "}
            <strong className="font-bold text-gray-900">0.36</strong>
          </li>
          <li>
            Harmed by someone else’s gambling, moderate level:{" "}
            <strong className="font-bold text-gray-900">0.33</strong>
          </li>
          <li>
            Low level of gambling harm (PGSI 1–2):{" "}
            <strong className="font-bold text-gray-900">0.13 to 0.18</strong>
          </li>
        </ul>
        <p className="text-xs text-gray-500 leading-relaxed mt-2">
          Browne et al., 2016; Rawat et al., 2017, 2018. Individual-level
          severity comparison; not the basis of the QALY figure below.
        </p>
      </div>

      {/* Sub-block: Population burden */}
      <div className="space-y-3">
        <h3 className="text-xl md:text-2xl font-bold text-gray-900">
          Population burden: quality-adjusted life years (QALYs)
        </h3>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
          Applying conservative population-survey utility decrements (Moayeri,
          2020) to GSGB Year 3 (2025) prevalence, GHUK’s current modelling puts
          the UK’s annual non-fatal health loss from gambling at roughly{" "}
          <strong className="font-bold text-gray-900">
            320,000 to 450,000 adult QALYs a year (central scenario 386,000)
          </strong>
          , counting people harmed by someone else’s gambling across published
          attribution scenarios, with children reported separately. People who
          gamble account for about 264,000 QALYs of that on their own, the same
          broad order as the years-lived-with-disability burdens from unhealthy
          diet and alcohol in GBD 2023 UK data. Full method on{" "}
          <Link
            to="/burden-of-harm"
            className="text-gray-900 font-medium underline hover:text-[#0093D0] transition-colors"
          >
            the burden of harm
          </Link>
          .
        </p>
      </div>

      {/* Sub-block: Mortality */}
      <div className="space-y-3">
        <h3 className="text-xl md:text-2xl font-bold text-gray-900">
          Mortality
        </h3>
        <ul className="space-y-3 text-sm md:text-base text-gray-700 pl-5 list-disc marker:text-gray-400">
          <li className="leading-relaxed">
            UK bank-data research linked high levels of gambling to a likelihood
            of death about a third higher (Muggleton et al., 2021,{" "}
            <em className="italic">Nature Human Behaviour</em>).
          </li>
          <li className="leading-relaxed">
            Registry studies put suicide mortality among people with gambling
            disorder at{" "}
            <strong className="font-bold text-gray-900">
              roughly 5 to 15 times the general population
            </strong>
            , led by the Norwegian cohort (SMR 5.12; Kristensen et al., 2025), with
            the earlier Swedish registry at 15.1 (Karlsson &amp; Håkansson,
            2018).
          </li>
          <li className="leading-relaxed">
            In a UK study of 16-24 year-olds, men and women indicating
            gambling-disorder harms were{" "}
            <strong className="font-bold text-gray-900">
              9.0 and 4.9 times more likely
            </strong>{" "}
            to attempt suicide after controlling for sociodemographics, alcohol
            use, video gaming, anxiety, loneliness and impulsivity (Wardle &amp;
            McManus, 2021, <em className="italic">Lancet Public Health</em>).
          </li>
        </ul>
      </div>

      {/* Dark Box 1: WHAT THE INDUSTRY SAID */}
      <div className="bg-[#1c1d1f] text-white border-l-4 border-[#0093D0] p-6 md:p-8 rounded-r-sm space-y-3">
        <h4 className="text-[#0093D0] font-bold text-xs tracking-wider uppercase">
          WHAT THE INDUSTRY SAID
        </h4>
        <blockquote className="text-base md:text-lg italic font-medium text-gray-100 leading-relaxed">
          "The UK's addiction rate stands at 0.5% of the adult population, which
          is low compared to the international standard."
        </blockquote>
        <p className="text-xs text-gray-400 italic border-b border-gray-700 pb-3 mb-3">
          Source: Michael Dugher, Betting and Gaming Council
        </p>
        <p className="text-sm md:text-base text-gray-200 leading-relaxed">
          Dugher frames gambling harm by the most severe band (PGSI 8+) in a
          single 12-month window. The framing omits people harmed by someone else’s gambling, people who
          previously gambled, and people experiencing sub-clinical harm. The
          0.5% figure is also a known under-estimate against the same period's
          GSGB data.
        </p>
      </div>

      {/* Dark Box 2: WHAT THE GAMBLING COMMISSION SAID */}
      <div className="bg-[#1c1d1f] text-white border-l-4 border-[#0093D0] p-6 md:p-8 rounded-r-sm space-y-3">
        <h4 className="text-[#0093D0] font-bold text-xs tracking-wider uppercase">
          WHAT THE GAMBLING COMMISSION SAID
        </h4>
        <blockquote className="text-base md:text-lg italic font-medium text-gray-100 leading-relaxed">
          "The numbers of those who experience harm as a result of gambling by
          others will be considerably greater than the number of people who harm
          themselves. These are not small numbers. They suggest a significant
          public health issue which has received remarkably little attention
          relative to other population-level concerns."
        </blockquote>
        <p className="text-xs text-gray-400 italic border-b border-gray-700 pb-3 mb-3">
          Source: Gambling Commission briefing for Local Authorities and local
          Public Health providers, Feb 2018
        </p>
        <p className="text-sm md:text-base text-gray-200 leading-relaxed">
          The Gambling Commission's own framing identifies gambling as a
          significant public-health issue. This sits in direct contrast to its
          placement under DCMS rather than DHSC. We support consolidation under
          DHSC (see our{" "}
          <Link
            to="/policy-and-advocacy"
            className="text-[#0093D0] underline hover:text-white transition-colors"
          >
            policy positions
          </Link>
          ).
        </p>
      </div>

      {/* Key References Card Box */}
      <div className="border border-gray-200 bg-white  p-6 md:p-8 space-y-4">
        <h4 className="text-xs font-bold uppercase tracking-wider text-gray-700">
          KEY REFERENCES
        </h4>
        <ol className="list-decimal pl-5 space-y-3 text-xs md:text-sm text-gray-600 leading-relaxed">
          <li>
            Abbott M.{" "}
            <em className="italic">
              The epidemiology and impact of gambling disorder and other
              gambling-related harm
            </em>
            . WHO, 2017.
          </li>
          <li>
            Langham E et al. Understanding gambling related harm: a proposed
            definition, conceptual framework, and taxonomy of harms.{" "}
            <em className="italic">BMC Public Health</em>. 2016;16:80.
          </li>
          <li>
            Banks J et al.{" "}
            <em className="italic">Families Living with Problem Gambling</em>.
            2018.
          </li>
          <li>
            Browne M et al.{" "}
            <em className="italic">
              Assessing gambling-related harm in Victoria
            </em>
            . Victorian Responsible Gambling Foundation, 2016.
          </li>
          <li>
            Muggleton N et al. The association between gambling and financial,
            social and health outcomes in big financial data.{" "}
            <em className="italic">Nature Human Behaviour</em>. 2021;5:319–326.
          </li>
          <li>
            Wardle H &amp; McManus S. Suicidality and gambling among young
            adults in Great Britain.{" "}
            <em className="italic">Lancet Public Health</em>. 2021;6:e39–e49.
          </li>
          <li>
            Karlsson A, Håkansson A. Gambling disorder, increased mortality,
            suicidality, and associated comorbidity.{" "}
            <em className="italic">Journal of Behavioral Addictions</em>.
            2018;7(4):1091–1099.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default ChapterOne;
