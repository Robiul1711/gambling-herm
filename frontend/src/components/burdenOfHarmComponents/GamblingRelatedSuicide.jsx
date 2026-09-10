import React from "react";
import { Link } from "react-router-dom";

const GamblingRelatedSuicide = () => {
  return (
    <section className="py-12 bg-[#1A1A1A] text-gray-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Accent Bar */}
        <div className="w-10 h-[3px] bg-[#0093D0] mb-4" />

        {/* Main Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          6. Gambling-related suicide
        </h2>

        {/* Lead Copy */}
        <div className="space-y-4 text-sm md:text-base leading-relaxed text-gray-300 mb-10">
          <p className="font-semibold text-white text-base md:text-lg">
            National registry studies place suicide mortality among people with a gambling-disorder diagnosis at <strong className="font-bold text-white">roughly five to fifteen times general-population risk</strong>. In the best-powered cohort, suicide was the leading cause of death.
          </p>

          <p className="text-gray-200">
            <strong className="font-bold text-white">
              If reading this is bringing things up for you:
            </strong>{" "}
            Samaritans are free on{" "}
            <strong className="font-bold text-white">116 123</strong>, 24/7,
            and our{" "}
            <Link
              to="/urgent-help"
              className="text-[#0093D0] underline hover:text-[#00B5FF] font-medium transition-colors"
            >
              urgent help page
            </Link>{" "}
            sets out what to do right now.
          </p>

          <p>
            Registry studies give the starkest signal: in Swedish national data,
            people with a gambling-disorder diagnosis died by suicide at many
            times the general-population rate. The honest reading is a large
            elevation with wide uncertainty: the studies are small, so the
            confidence intervals are wide; people who receive a diagnosis are
            likely both more severely harmed and more likely to have had
            treatment; and Sweden’s coded population is not the UK’s, where most
            people experiencing gambling harm are never identified at all. The
            elevation is consistent across studies; its exact size is not.
          </p>

          <p>
            The best-powered evidence is a Norwegian registry cohort of 6,899
            people diagnosed between 2008 and 2021 (Kristensen et al., Lancet
            Regional Health – Europe, 2025).{" "}
            <strong className="font-bold text-white">
              Suicide was the leading cause of death, accounting for 37 of 148
              deaths, one in four
            </strong>
            , with a standardised mortality ratio of 5.12 (95% confidence
            interval 3.71 to 7.06). An earlier Swedish registry study reports a
            higher ratio of 15.1 (95% CI 8.7 to 21.6), placing the registry
            range at roughly five to fifteen times the general-population rate
            (Karlsson &amp; Håkansson, 2018).
          </p>

          <p>
            The Norwegian cohort compared people with a gambling disorder
            against those with other diagnoses, finding suicide risk comparable
            to that seen with depression or substance use disorders. Gambling
            harm carries an independent and severe suicide risk, not merely a
            reflection of psychiatric comorbidity.
          </p>
        </div>

        {/* Sub-section 1: How many deaths a year in England */}
        <div className="my-10 space-y-4">
          <h3 className="text-xl md:text-2xl font-bold text-white">
            How many deaths a year in England
          </h3>

          <p className="text-sm md:text-base leading-relaxed text-gray-300">
            The official England estimate is a range, not a single number. The
            Office for Health Improvement and Disparities puts it at{" "}
            <strong className="font-bold text-white">
              between 117 and 496 suicides a year associated with gambling
            </strong>{" "}
            (OHID,{" "}
            <a
              href="https://www.gov.uk/government/publications/gambling-related-harms-evidence-review"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0093D0] underline hover:text-[#00B5FF]"
            >
              The economic and social cost of harms associated with gambling in
              England: evidence update 2023
            </a>
            ). That range replaced the single point estimate of 409 deaths
            published by Public Health England in 2021, after OHID reviewed the
            methodology because the suicide and depression components carry the
            largest weight in the overall cost.
          </p>

          <p className="text-sm md:text-base leading-relaxed text-gray-300">
            The two ends of that range are not a margin of error on a death
            count. They are two different assumptions about who the risk applies
            to. Both apply suicide mortality ratios from the Swedish registry
            study above (Karlsson &amp; Håkansson, 2018) to English prevalence
            data. The lower bound of 117 assumes the elevated risk reaches only
            the narrow group who would meet a clinical diagnosis.{" "}
            <strong className="font-bold text-white">
              The upper bound of 496 assumes it reaches the wider population
              experiencing gambling harm.
            </strong>
          </p>

          <p className="text-sm md:text-base leading-relaxed text-gray-300">
            We report the full OHID range (117 to 496 gambling-related suicides
            a year in England) and the assumption behind each end, so readers can
            see the choice openly.
          </p>

          <p className="text-sm md:text-base leading-relaxed text-gray-300">
            We are equally direct about the limits. The figures are modelled
            rather than counted, extrapolated from a single Swedish cohort of
            2,099 patients, and industry-aligned analysts have contested them on
            exactly that basis. That methodological criticism is fair. What it
            does not establish is that the true number is lower. England does
            not count gambling-related suicides directly: gambling is rarely
            recorded as a contributing factor at inquest, and the Welsh
            linked-data study below shows how little of this harm reaches NHS
            records at all. OHID says so itself, noting that more accurate
            estimates would be possible if English data on gambling-related
            suicides were improved.{" "}
            <strong className="font-bold text-white">
              A modelled range exists because the counting has never been set
              up. That is a policy failure, not a reason for comfort.
            </strong>
          </p>
        </div>

        {/* Sub-section 2: The UK cannot currently see this in its own data */}
        <div className="my-10 space-y-4">
          <h3 className="text-xl md:text-2xl font-bold text-white">
            The UK cannot currently see this in its own data
          </h3>

          <p className="text-sm md:text-base leading-relaxed text-gray-300">
            The first UK linked-data study used 30 years of NHS records covering
            the whole population of Wales. Across those three decades, just{" "}
            <strong className="font-bold text-white">
              92 people who died by suicide had a gambling-related diagnostic
              code anywhere in their linked records
            </strong>{" "}
            (Jones, Boering, Patel et al., BJPsych Open, 2025). Set against what
            the modelled England range implies for a population the size of Wales
            over 30 years, that is almost certainly a large undercount, and it
            means the study's own effect estimate should be read as directional
            rather than as a usable figure.
          </p>

          <p className="text-sm md:text-base leading-relaxed text-gray-300">
            What the study does show is where the gap sits.{" "}
            <strong className="font-bold text-white">
              Most gambling-related codes were recorded in primary care (47%)
              rather than hospital data (24%)
            </strong>
            : the clinical contact is happening, and the harm is not being
            identified. People with a gambling diagnosis who died by suicide had
            significantly more mental-health inpatient contacts before their
            death, and gambling diagnosis, not alcohol use disorder, depression
            or schizophrenia, was the only diagnosis significantly associated
            with mental-health treatment use. Depression affected around 46% of
            those who later died by suicide, about two and a half times the rate
            in all-cause decedents (18.1%).
          </p>

          <p className="text-sm md:text-base leading-relaxed text-gray-300">
            The implication is direct: low local coding rates are not evidence of
            low local need. They are evidence of a system not identifying the
            harm that is present.
          </p>
        </div>

        {/* Sub-section 3: Risk peaks after the loss, not during the play */}
        <div className="my-10 space-y-4">
          <h3 className="text-xl md:text-2xl font-bold text-white">
            Risk peaks after the loss, not during the play
          </h3>

          <p className="text-sm md:text-base leading-relaxed text-gray-300">
            Clinical and lived-experience accounts consistently describe risk
            rising in the days and weeks after a heavy loss, when shame,
            hopelessness, financial despair and isolation compound, rather than
            at the height of someone's gambling. This is also the period in which
            operators' "win-back" marketing tends to intensify: personalised
            free-bet offers, account-manager outreach, retargeting. We set this
            out as our reading of the pattern, not as settled evidence.
          </p>

          <p className="text-sm md:text-base leading-relaxed text-gray-300">
            Among people experiencing gambling harm, lifetime suicidal ideation
            runs at 31.6% and lifetime suicide attempts at 13.2%, with odds
            ratios of 2.17 and 2.81 against people without gambling harm
            (Kristensen et al., meta-analysis, 2024). In a UK cohort study, an
            increase in screening score over a single year predicted suicide
            attempt among 16 to 24-year-olds, with an adjusted odds ratio of 2.74
            after controlling for wellbeing, anxiety, impulsivity and loneliness
            (Wardle, Kesaite, Tipping &amp; McManus, Lancet Public Health,
            2023).
          </p>

          <p className="text-sm md:text-base leading-relaxed text-gray-300">
            The relationship between marketing-at-distress and gambling-related
            suicide is one of the most urgent unresolved research questions in
            this field. Regulatory intervention should not wait for full
            resolution.
          </p>
        </div>

        {/* Sub-section 4: Mortality beyond suicide */}
        <div className="my-10 space-y-4">
          <h3 className="text-xl md:text-2xl font-bold text-white">
            Mortality beyond suicide
          </h3>

          <p className="text-sm md:text-base leading-relaxed text-gray-300">
            Gambling harm is associated with premature death by other routes too.
            UK bank-record data on 6.5 million people found high levels of
            gambling associated with a likelihood of death about a third
            higher, for men and women, younger and older (Muggleton et al.,
            2021). Swedish registry records show all-cause mortality roughly 1.8
            times higher among people with a gambling-disorder diagnosis, with
            cardiovascular disease a specific predictor of death. Because
            gambling is not routinely coded in mortality data, non-suicide
            gambling-related deaths are almost certainly undercounted.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GamblingRelatedSuicide;
