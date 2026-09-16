import React from "react";

const AffectedOthersDirectVictims = () => {
  return (
    <section className="text-gray-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Accent Bar */}
        <div className="w-10 h-[3px] bg-[#0093D0] mb-4" />

        {/* Main Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
          5. Harmed by someone else’s gambling: direct harm, not incidental
        </h2>

        {/* Lead Copy */}
        <div className="space-y-4 text-sm md:text-base leading-relaxed text-gray-700 mb-10">
          <p className="font-semibold text-gray-900 text-base md:text-lg">
            Between roughly a fifth and two-fifths of the modelled adult burden
            on the national survey basis is carried by people who have not placed
            a bet: partners, children, parents, siblings and friends. On the
            more conservative health surveys their share is larger still.
          </p>

          <p>
            The standard framing in gambling treatment and research is that
            "concerned significant others" are people who can be drawn into
            supporting a "primary case". This framing has consequences. It
            produces a service landscape in which people harmed by someone
            else’s gambling are routed through services designed for the person
            who gambles, rather than receiving support that is theirs by right.
          </p>

          <p>
            We reject this framing. People harmed by someone else’s gambling
            are harmed directly by a product they did not choose to interact
            with, in ways that follow their own clear pattern: anxiety,
            depression, sleep loss, financial harm, relationship breakdown,
            bereavement risk, and intergenerational harm to children.
          </p>
        </div>

        {/* Definition List Rows */}
        <div className="border-t border-b border-gray-200 divide-y divide-gray-200 my-10">
          {/* Row 1: SCALE */}
          <div className="grid grid-cols-1 md:grid-cols-12 py-6 gap-2 md:gap-6 items-start">
            <div className="md:col-span-3 text-xs font-bold text-[#0093D0] tracking-wider uppercase">
              SCALE
            </div>
            <div className="md:col-span-9 text-sm md:text-base text-gray-700 leading-relaxed">
              <strong className="font-bold text-gray-900">
                9.0% of adults in Great Britain, around 4.8 million people
              </strong>
              , reported experiencing harm from someone else’s gambling in the
              past year (Gambling Commission, Insights into people harmed by
              someone else’s gambling from the GSGB, 2026; n=19,714). That is
              comparable in scale to the number of people harmed by their own
              gambling. These figures are self-reported and likely
              conservative: stigma and hidden gambling mean many people harmed by
              someone else’s gambling never name the harm.
            </div>
          </div>

          {/* Row 2: PATTERN */}
          <div className="grid grid-cols-1 md:grid-cols-12 py-6 gap-2 md:gap-6 items-start">
            <div className="md:col-span-3 text-xs font-bold text-[#0093D0] tracking-wider uppercase">
              PATTERN
            </div>
            <div className="md:col-span-9 text-sm md:text-base text-gray-700 leading-relaxed">
              Among people harmed by someone else’s gambling,{" "}
              <strong className="font-bold text-gray-900">
                73.7% report harms to their own health, 65.3% to their
                relationships and 42.5% to their finances
              </strong>{" "}
              (GSGB insights on people harmed by someone else’s gambling, 2026).
              The documented harms include financial devastation, domestic
              abuse and coercive control, deteriorating mental health, housing
              loss and bereavement.
            </div>
          </div>

          {/* Row 3: PER PERSON */}
          <div className="grid grid-cols-1 md:grid-cols-12 py-6 gap-2 md:gap-6 items-start">
            <div className="md:col-span-3 text-xs font-bold text-[#0093D0] tracking-wider uppercase">
              PER PERSON
            </div>
            <div className="md:col-span-9 text-sm md:text-base text-gray-700 leading-relaxed">
              How many others are harmed per person rises with severity. A 2026
              network reconciliation, which accounts for the same individuals
              being harmed by more than one person's gambling, estimates{" "}
              <strong className="font-bold text-gray-900">
                about 4.7 unique affected people per person at the most severe
                level of harm
              </strong>{" "}
              (Tulloch et al., 2026). This revises the widely cited earlier
              estimate of six people harmed by someone else’s gambling (Goodwin
              et al., 2017).
            </div>
          </div>

          {/* Row 4: SEVERITY */}
          <div className="grid grid-cols-1 md:grid-cols-12 py-6 gap-2 md:gap-6 items-start">
            <div className="md:col-span-3 text-xs font-bold text-[#0093D0] tracking-wider uppercase">
              SEVERITY
            </div>
            <div className="md:col-span-9 text-sm md:text-base text-gray-700 leading-relaxed">
              On the direct disability-weight evidence, per-person burden borne
              by people harmed by someone else’s gambling is{" "}
              <strong className="font-bold text-gray-900">
                comparable to, and at moderate bands can exceed, that of the
                person gambling
              </strong>
              : at a moderate level of harm, 0.33 for people harmed by someone
              else’s gambling against 0.29 for the person gambling (Browne et
              al., 2017, Victoria). We take the structure from this evidence,
              valuing people harmed by someone else’s gambling at parity with the
              person gambling, while the decrement levels in our headline come
              from the more conservative population-survey utilities (Moayeri,
              2020). The direct evidence base here rests on a single study and
              needs replication, though the direction is consistent across the
              available data.
            </div>
          </div>

          {/* Row 5: CHILDREN */}
          <div className="grid grid-cols-1 md:grid-cols-12 py-6 gap-2 md:gap-6 items-start">
            <div className="md:col-span-3 text-xs font-bold text-[#0093D0] tracking-wider uppercase">
              CHILDREN
            </div>
            <div className="md:col-span-9 text-sm md:text-base text-gray-700 leading-relaxed">
              Children of someone experiencing severe gambling harm form a
              distinct and especially-affected sub-group, with elevated risk of
              childhood adversity, mental-health conditions, and later gambling
              harm of their own.
            </div>
          </div>

          {/* Row 6: BEREAVEMENT */}
          <div className="grid grid-cols-1 md:grid-cols-12 py-6 gap-2 md:gap-6 items-start">
            <div className="md:col-span-3 text-xs font-bold text-[#0093D0] tracking-wider uppercase">
              BEREAVEMENT
            </div>
            <div className="md:col-span-9 text-sm md:text-base text-gray-700 leading-relaxed">
              Families bereaved by gambling-related suicide form one of the most
              isolated bereavement groups in the UK. Specialist support exists
              (Gambling with Lives) but is dramatically underfunded relative to
              need.
            </div>
          </div>
        </div>

        {/* Self-harm & Suicidality Paragraph */}
        <p className="text-sm md:text-base text-gray-700 leading-relaxed my-8">
          One further indication of severity, which the scale figures above do
          not capture: in a survey of family members affected by another
          person's gambling,{" "}
          <strong className="font-bold text-gray-900">
            16% reported acts of self-harm and 8% a suicide attempt
          </strong>{" "}
          (Banks et al., 2018). That sample was small, around 190 people,
          self-selected and skewed towards higher-education respondents, so the
          rates are indicative rather than representative. They show that
          self-harm and suicidality among people harmed by someone else’s
          gambling, not only among people who gamble, are real and severe harms.
        </p>

        {/* Our Position Dark Box */}
        <div className="border-l-4 border-[#0093D0] bg-[#1c1d1f] text-white p-6 md:p-8 rounded-r-sm my-8">
          <h4 className="text-[#0093D0] font-bold text-xs tracking-wider uppercase mb-3">
            OUR POSITION
          </h4>
          <p className="text-sm md:text-base leading-relaxed text-gray-200 font-medium">
            UK gambling-harm treatment, research and policy should recognise
            people harmed by someone else’s gambling as a distinct population
            with rights to support, not as adjuncts to the person who gambled.
            Funding for their support, and for bereavement support, should be
            reflected separately in the statutory levy. Service design that
            overlooks them undercounts population harm by 18% to 42% on the most
            recent national survey basis, and by more on the older,
            conservative surveys.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AffectedOthersDirectVictims;
