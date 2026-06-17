import React from "react";

const ChapterOne = () => {
  return (
    <div id="chapter-1" className="space-y-8 scroll-mt-28">
      {/* Chapter Title & Main Summary */}
      <div className="space-y-2">
        <span className="text-Primary font-medium text-sm md:text-base">
          Chapter 1
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
          Gambling and health
        </h2>
        <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-4xl">
          The industry continues to deny the population-level significance of gambling harm. The independent evidence, where it exists, places gambling-related harm at a scale comparable to alcohol misuse and major depressive disorder, with the WHO calling for it to be placed on national public-health agendas.
        </p>
      </div>

      {/* Sub-block: What Is Known */}
      <div className="space-y-3">
        <h3 className="text-lg font-bold text-slate-800">What Is Known</h3>
        <p className="text-slate-500 text-sm md:text-base leading-relaxed">
          Australian and New Zealand research has established a taxonomy of harm across eight domains: financial; relationship disruption, conflict or breakdown; emotional or psychological distress; decrements to health; cultural harm; reduced performance at work or study; criminal activity; and life-course and intergenerational harm (Langham et al., 2016). The same domains underpin GHSI 2025 (NatCen).
        </p>
      </div>

      {/* Sub-block: Burden On Affected Others Grid cards */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-slate-800">
          Burden On Affected Others
        </h3>
        <p className="text-slate-500 text-sm">
          Among family members of people with disordered gambling, the impact patterns are consistent across studies:
        </p>

        {/* Responsive Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          <div className="border border-slate-200 bg-white p-5 rounded-xl shadow-sm space-y-2">
            <span className="text-3xl font-bold text-slate-800 block">99%</span>
            <p className="text-xs md:text-sm text-slate-500 leading-normal">
              report harm to their health from a loved one's gambling
            </p>
          </div>
          <div className="border border-slate-200 bg-white p-5 rounded-xl shadow-sm space-y-2">
            <span className="text-3xl font-bold text-slate-800 block">93%</span>
            <p className="text-xs md:text-sm text-slate-500 leading-normal">
              report financial-security impact (64% significant)
            </p>
          </div>
          <div className="border border-slate-200 bg-white p-5 rounded-xl shadow-sm space-y-2">
            <span className="text-3xl font-bold text-slate-800 block">96%</span>
            <p className="text-xs md:text-sm text-slate-500 leading-normal">
              report relationship harm
            </p>
          </div>
          <div className="border border-slate-200 bg-white p-5 rounded-xl shadow-sm space-y-2">
            <span className="text-3xl font-bold text-slate-800 block">8%</span>
            <p className="text-xs md:text-sm text-slate-500 leading-normal">
              have attempted suicide as a consequence
            </p>
          </div>
        </div>
        <p className="text-xs italic text-slate-400 mt-2">
          Banks et al., 2018, Families Living with Problem Gambling.
        </p>
      </div>

      {/* Sub-block: Disability weights */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-slate-800">
          Disability weights (quality-of-life decrement)
        </h3>
        <p className="text-slate-500 text-sm md:text-base leading-relaxed">
          Where 0 = perfect health and 1 = death. Gambling disorder harm sits between heroin dependence and bipolar mania:
        </p>
        <ul className="space-y-2 text-sm text-slate-600 pl-4 list-disc marker:text-slate-400">
          <li>
            Schizophrenia, acute state:{" "}
            <span className="font-semibold text-slate-800">0.76</span>
          </li>
          <li>
            Heroin and other opioid dependence:{" "}
            <span className="font-semibold text-slate-800">0.64</span>
          </li>
          <li>
            Gambling disorder harm (PGSI 8+):{" "}
            <span className="font-semibold text-slate-800">0.44 to 0.54</span>{" "}
            (AUS/NZ)
          </li>
          <li>
            Manic episode of bipolar disorder:{" "}
            <span className="font-semibold text-slate-800">0.48</span>
          </li>
          <li>
            Moderate alcohol use disorder:{" "}
            <span className="font-semibold text-slate-800">0.39</span>
          </li>
          <li>
            Moderate-risk gambling harm (PGSI 2–7):{" "}
            <span className="font-semibold text-slate-800">0.29 to 0.37</span>
          </li>
          <li>
            Affected others at gambling-disorder harms:{" "}
            <span className="font-semibold text-slate-800">0.36</span>
          </li>
          <li>
            Affected others at moderate-risk harms:{" "}
            <span className="font-semibold text-slate-800">0.33</span>
          </li>
          <li>
            Low-risk gambling harm:{" "}
            <span className="font-semibold text-slate-800">0.13 to 0.18</span>
          </li>
        </ul>
        <p className="text-xs text-slate-400 leading-relaxed mt-1">
          Browne et al., 2016; Rawat et al., 2017, 2018.
        </p>
      </div>

      {/* Sub-block: Population burden */}
      <div className="space-y-3">
        <h3 className="text-lg font-bold text-slate-800">
          Population burden: years of life lost to disability (YLD)
        </h3>
        <p className="text-slate-500 text-sm md:text-base leading-relaxed">
          In England 2013, the modelled combined burden (own gambling plus affected-others) was 1.62 million YLD, larger than the burden from dietary risks (1.47m) or tobacco smoke (1.46m), and several times larger than the alcohol-use or drug-use burdens estimated in the same period. This is a modelled extrapolation applying Australian disability weights to English prevalence; the methodology is set out in Browne et al. (2017) and in our research library.
        </p>
      </div>

      {/* Sub-block: Mortality */}
      <div className="space-y-3">
        <h3 className="text-lg font-bold text-slate-800">Mortality</h3>
        <ul className="space-y-4 text-sm md:text-base text-slate-600 pl-4 list-disc marker:text-slate-300">
          <li className="leading-relaxed">
            UK bank-data research linked high gambling levels to a{" "}
            <span className="font-bold text-slate-800">
              37% increase in all-cause mortality
            </span>{" "}
            <span className="text-slate-400 text-xs md:text-sm">
              (Muggleton et al., 2021, Nature Human Behaviour)
            </span>
            .
          </li>
          <li className="leading-relaxed">
            People diagnosed with gambling disorder in Sweden aged 20–49 were{" "}
            <span className="font-bold text-slate-800">
              19.3 times more likely to die by suicide
            </span>{" "}
            <span className="text-slate-400">
              than the general population of the same age
            </span>{" "}
            <span className="text-slate-400 text-xs md:text-sm">
              (Karlsson & Håkansson, 2018)
            </span>
            .
          </li>
          <li className="leading-relaxed">
            In a UK study of 16–24 year-olds, men and women indicating gambling-disorder harms were{" "}
            <span className="font-bold text-slate-800">
              9.0 and 4.9 times more likely
            </span>{" "}
            to attempt suicide after controlling for anxiety, impulsivity and life satisfaction{" "}
            <span className="text-slate-400 text-xs md:text-sm">
              (Wardle & McManus, 2021, Lancet Public Health)
            </span>
            .
          </li>
        </ul>
      </div>

      {/* Quote Box 1: What the industry said */}
      <div className="bg-[#2d3134] text-slate-300 border-l-4 border-Primary rounded-r-xl p-6 md:p-8 space-y-2 shadow-sm">
        <h4 className="text-Primary font-semibold text-sm md:text-base tracking-wide uppercase">
          What the industry said
        </h4>
        <blockquote className="text-base md:text-lg italic font-medium text-white leading-relaxed">
          "The UK's addiction rate stands at 0.5% of the adult population, which is low compared to the international standard."
        </blockquote>
        <p className="text-xs md:text-sm text-slate-400 italic border-b border-slate-700 pb-4">
          Source: Michael Dugher, Betting and Gaming Council
        </p>
        <p className="text-sm text-slate-300 leading-relaxed pt-2">
          Dugher frames gambling harm by the most severe band (PGSI 8+) in a single 12-month window. The framing omits affected others, people who previously gambled, and people experiencing sub-clinical harm. The 0.5% figure is also a known under-estimate against the same period's GSGB data.
        </p>
      </div>

      {/* Quote Box 2: What the Gambling Commission said */}
      <div className="bg-[#2d3134] text-slate-300 border-l-4 border-Primary rounded-r-xl p-6 md:p-8 space-y-2 shadow-sm">
        <h4 className="text-Primary font-semibold text-sm md:text-base tracking-wide uppercase">
          What the Gambling Commission said
        </h4>
        <blockquote className="text-base md:text-lg italic font-medium text-white leading-relaxed">
          "The numbers of those who experience harm as a result of gambling by others will be considerably greater than the number of people who harm themselves. These are not small numbers. They suggest a significant public health issue which has received remarkably little attention relative to other population-level concerns."
        </blockquote>
        <p className="text-xs md:text-sm text-slate-400 italic border-b border-slate-700 pb-4">
          Source: Gambling Commission briefing for Local Authorities and local Public Health providers, Feb 2018
        </p>
        <p className="text-sm text-slate-300 leading-relaxed pt-2">
          The Gambling Commission's own framing identifies gambling as a significant public-health issue. This sits in direct contrast to its placement under DCMS rather than DHSC. We support consolidation under DHSC{" "}
          <a
            href="#"
            className="text-Primary underline hover:text-white transition-colors"
          >
            (see our policy positions).
          </a>
        </p>
      </div>

      {/* Key References Component Card */}
      <div className="border border-slate-200 bg-slate-50/50 rounded-xl p-6 md:p-8 space-y-2">
        <h4 className="text-sm font-bold uppercase tracking-wider text-slate-700">
          Key references
        </h4>
        <ol className="list-decimal pl-4 space-y-3 text-xs md:text-sm text-slate-500 marker:text-slate-400 leading-relaxed">
          <li>
            Abbott M. The epidemiology and impact of gambling disorder and other gambling-related harm. WHO, 2017.
          </li>
          <li>
            Langham E et al. Understanding gambling related harm: a proposed definition, conceptual framework, and taxonomy of harms. BMC Public Health. 2016;16:80.
          </li>
          <li>
            Banks J et al. Families Living with Problem Gambling. 2018.
          </li>
          <li>
            Browne M et al. Assessing gambling-related harm in Victoria. Victorian Responsible Gambling Foundation, 2016.
          </li>
          <li>
            Muggleton N et al. The association between gambling and financial, social and health outcomes in big financial data. Nature Human Behaviour. 2021;5:319–326.
          </li>
          <li>
            Wardle H & McManus S. Suicidality and gambling among young adults in Great Britain. Lancet Public Health. 2021;6:e39–e49.
          </li>
          <li>
            Karlsson A, Håkansson A. Gambling disorder, increased mortality, suicidality, and associated comorbidity. Journal of Behavioral Addictions. 2018;7(4):1091–1099.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default ChapterOne;