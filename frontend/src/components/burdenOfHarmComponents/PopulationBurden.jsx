import React from "react";
import { Link } from "react-router-dom";

const PopulationBurden = () => {
  return (
    <section className="py-12 bg-[#1A1A1A] text-gray-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Accent Bar */}
        <div className="w-10 h-[3px] bg-[#0093D0] mb-4" />

        {/* Main Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          2. The population burden
        </h2>

        {/* Intro Paragraph */}
        <p className="text-base md:text-lg text-gray-200 leading-relaxed font-semibold mb-8">
          Public health measures harm in years of healthy life lost. Almost
          every major UK risk factor has detailed burden estimates. Gambling,
          until recently, did not.
        </p>

        {/* Sub-heading: How many people */}
        <div className="mb-10 space-y-4">
          <h3 className="text-xl md:text-2xl font-bold text-white">
            How many people
          </h3>

          <p className="text-sm md:text-base leading-relaxed text-gray-300">
            On the Gambling Survey for Great Britain 2024,{" "}
            <strong className="text-white font-bold">
              8.8% of UK adults are at a low level of gambling harm (about 4.7
              million)
            </strong>
            ,{" "}
            <strong className="text-white font-bold">
              3.1% at a moderate level (about 1.7 million)
            </strong>
            , and{" "}
            <strong className="text-white font-bold">
              2.7% at a severe level (about 1.5 million)
            </strong>
            . A further{" "}
            <strong className="text-white font-bold">
              9.0%, about 4.9 million adults, are harmed by someone else's
              gambling
            </strong>
            .
          </p>

          <p className="text-sm md:text-base leading-relaxed text-gray-300">
            Those figures cannot simply be added together, because some adults
            both gamble at a harmful level and are harmed by someone else's
            gambling. Once that household overlap is removed and children are
            included,{" "}
            <strong className="text-white font-bold">
              roughly 1 in 5 of the UK population, about 18.6% or 12.7 million
              people, experience gambling-related harm in a single year
            </strong>
            . Before de-duplication the same calculation gives 20.6%, about 14.0
            million.
          </p>

          <p className="text-sm md:text-base leading-relaxed text-gray-300">
            Survey mode matters at this scale. The push-to-web survey may run
            high and the older interviewer-administered surveys probably
            under-counted, so no single survey is a clean floor. We therefore
            anchor both ways, showing the conservative floor alongside the
            central estimate throughout.
          </p>
        </div>

        {/* Sub-heading: Where gambling sits against other risks */}
        <div className="mt-12 mb-8">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
            Where gambling sits against other risks
          </h3>

          <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-6">
            On the non-fatal measure, the health loss from gambling including
            people harmed by someone else’s gambling and children exceeds tobacco, unhealthy diet and
            alcohol:
          </p>

          {/* Bar Chart 1 */}
          <div className="space-y-4 my-6">
            {/* Gambling */}
            <div className="flex items-center gap-4">
              <div className="w-28 text-sm font-semibold text-white shrink-0">
                Gambling
              </div>
              <div className="flex-1 bg-[#2b2b2b] h-7 rounded-none overflow-hidden flex items-center">
                <div className="bg-[#0093D0] h-full w-[100%]" />
              </div>
              <div className="w-16 text-right text-sm font-bold text-[#00B5FF]">
                625,000
              </div>
            </div>

            {/* Tobacco */}
            <div className="flex items-center gap-4">
              <div className="w-28 text-sm font-semibold text-white shrink-0">
                Tobacco
              </div>
              <div className="flex-1 bg-[#2b2b2b] h-7 rounded-none overflow-hidden flex items-center">
                <div className="bg-[#73768B] h-full w-[72.1%]" />
              </div>
              <div className="w-16 text-right text-sm font-bold text-white">
                451,000
              </div>
            </div>

            {/* Unhealthy diet */}
            <div className="flex items-center gap-4">
              <div className="w-28 text-sm font-semibold text-white shrink-0">
                Unhealthy diet
              </div>
              <div className="flex-1 bg-[#2b2b2b] h-7 rounded-none overflow-hidden flex items-center">
                <div className="bg-[#73768B] h-full w-[46.1%]" />
              </div>
              <div className="w-16 text-right text-sm font-bold text-white">
                288,000
              </div>
            </div>

            {/* Alcohol */}
            <div className="flex items-center gap-4">
              <div className="w-28 text-sm font-semibold text-white shrink-0">
                Alcohol
              </div>
              <div className="flex-1 bg-[#2b2b2b] h-7 rounded-none overflow-hidden flex items-center">
                <div className="bg-[#73768B] h-full w-[40.6%]" />
              </div>
              <div className="w-16 text-right text-sm font-bold text-white">
                254,000
              </div>
            </div>
          </div>

          {/* Footnote 1 */}
          <p className="text-xs md:text-base text-gray-300 leading-relaxed mt-6 mb-10">
            Annual non-fatal health loss, UK. Gambling figure is GHUK modelling
            (Moayeri 2020 utilities applied to GSGB 2024 prevalence,
            de-duplicated), expressed in QALYs, valuing the burden on people harmed by someone else’s gambling at parity with the person gambling: the direct
            disability-weight measurements put per-person burden for people harmed by someone else’s gambling
            at or above parity at moderate levels of harm (Browne et al., 2017).
            Comparators are Years Lived with Disability from the Global Burden
            of Disease 2023 (IHME, GBD Compare, United Kingdom, all ages, both
            sexes, accessed 15 July 2026). Two caveats. First, counting people harmed by someone else’s gambling is consistent with the tobacco comparator, whose burden
            already includes harm to non-smokers through second-hand smoke; the
            alcohol and diet estimates do not capture harm to others, so the
            strict like-for-like comparator against those two is the
            people-who-gamble component alone (about 297,000 QALYs), which still
            exceeds both. Second, no comparable estimate of gambling's fatal
            burden exists, because gambling-attributable deaths are not yet
            routinely coded in the UK. Where gambling would sit on a
            total-burden ranking including mortality is unknown, rather than
            low.
          </p>
        </div>

        {/* Sub-heading: What that burden is worth, and what we spend */}
        <div className="mt-12 mb-8">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
            What that burden is worth, and what we spend
          </h3>

          <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-6">
            Valued at the{" "}
            <strong className="text-white font-bold">
              £70,000 Green Book societal value of a QALY
            </strong>{" "}
            (2024 prices), the cross-government standard for valuing health
            loss and the same valuation instrument the Office for Health
            Improvement and Disparities applied to gambling-related deaths (in an
            earlier price base, and adjusted there by England's mean EQ-5D
            score), the annual UK health loss from gambling comes to{" "}
            <strong className="text-white font-bold">
              approximately £37 billion
            </strong>
            . On the more conservative NICE technology-appraisal range of
            £25,000 to £35,000 per QALY, the same loss is £13.2 to 18.5
            billion. The statutory levy on gambling operators is projected to
            raise just under £120 million a year.
          </p>

          {/* Bar Chart 2 */}
          <div className="space-y-4 my-6">
            {/* Statutory levy */}
            <div className="flex items-center gap-4">
              <div className="w-48 text-sm font-semibold text-white shrink-0">
                Statutory levy
              </div>
              <div className="flex-1 bg-[#2b2b2b] h-7 rounded-none overflow-hidden flex items-center">
                <div className="bg-[#73768B] h-full w-[0.32%]" />
              </div>
              <div className="w-28 text-right text-sm font-bold text-white">
                &lt;£120m
              </div>
            </div>

            {/* NICE comparator */}
            <div className="flex items-center gap-4">
              <div className="w-48 text-sm font-semibold text-white shrink-0">
                NICE comparator
              </div>
              <div className="flex-1 bg-[#2b2b2b] h-7 rounded-none overflow-hidden flex items-center">
                <div className="bg-[#0093D0] h-full w-[42.7%]" />
              </div>
              <div className="w-28 text-right text-sm font-bold text-white">
                £15.8bn
              </div>
            </div>

            {/* Central health loss */}
            <div className="flex items-center gap-4">
              <div className="w-48 text-sm font-semibold text-white shrink-0">
                Central health loss
              </div>
              <div className="flex-1 bg-[#2b2b2b] h-7 rounded-none overflow-hidden flex items-center">
                <div className="bg-[#0093D0] h-full w-[59.2%]" />
              </div>
              <div className="w-28 text-right text-sm font-bold text-white">
                £21.9bn
              </div>
            </div>

            {/* Treasury Green Book */}
            <div className="flex items-center gap-4">
              <div className="w-48 text-sm font-semibold text-white shrink-0">
                Treasury Green Book
              </div>
              <div className="flex-1 bg-[#2b2b2b] h-7 rounded-none overflow-hidden flex items-center">
                <div className="bg-[#0093D0] h-full w-[100%]" />
              </div>
              <div className="w-28 text-right text-sm font-bold text-white">
                £37.0bn
              </div>
            </div>
          </div>

          <p className="text-xs md:text-sm text-gray-400 leading-relaxed font-normal">
            Bars are drawn to scale against the headline. At this scale the levy
            252,000 among adults harmed by someone else's gambling, 48,000 among
            children exposed to adult gambling, less about 68,000 for household
            overlap. People who gamble alone account for £20.8bn of the total.{" "}
            <strong className="text-white font-bold">NICE comparator:</strong>{" "}
            the same health loss at the £25,000 to £35,000 technology-appraisal
            range, shown because it is the threshold health-system readers
            recognise; bar drawn at the midpoint.{" "}
            <strong className="text-white font-bold">
              Conservative sensitivity:
            </strong>{" "}
            applies a 30% transfer to people harmed by someone else's gambling
            instead of full attribution, giving about 400,000 QALYs. An upper
            sensitivity using the Tulloch et al. (2026) hybrid disability
            weights gives roughly 2.81 million QALYs, over five times the
            headline; we do not put a money value on it, because those weights
            index the severity of a harm state without isolating the
            gambling-attributable difference and are not comorbidity-adjusted.
            Sources: Moayeri (2020); GSGB 2024; Wilson et al. (2024); Tulloch et
            al. (2026); HM Treasury Green Book / DHSC; NICE thresholds from
            April 2026. Full method in the GHUK Health Needs Assessment (v9.9,
            August 2026), Appendix D, which is reproducible in the accompanying
            calculator.
          </p>
        </div>

        {/* Position Callout Box */}
        <div className="border-l-4 border-[#0093D0] bg-[#e7f6fd] text-gray-900 p-6 md:p-8 rounded-r-sm my-8">
          <h4 className="text-[#0076A8] font-bold text-xs tracking-wider uppercase mb-3">
            OUR POSITION
          </h4>
          <p className="text-sm md:text-base leading-relaxed text-gray-800">
            The central health-loss estimate is{" "}
            <strong className="font-bold text-gray-900">
              roughly 200 times (about 70 times on the lowest basis) the statutory levy
            </strong>
            . Even on the government's own deliberately narrow social-cost
            estimate for England (£1.05–1.77 billion a year), the levy is an
            order of magnitude too small. The conclusion survives every
            published assumption. It is also a conservative floor:
            health-utility measures do not capture financial or material
            wellbeing, so the large quality-of-life loss gambling inflicts
            through debt, lost housing and food insecurity sits largely outside
            what the metric can see.
          </p>
        </div>

        {/* Dark Box: Two numbers that must not be added together */}
        <div className="border-l-4 border-gray-400 bg-[#222222] p-6 md:p-8 my-8">
          <h4 className="text-white font-bold text-base md:text-lg mb-3">
            Two numbers that must not be added together
          </h4>
          <p className="text-sm text-gray-300 leading-relaxed">
            The partial social-cost estimate (£1.05–1.77bn) and the QALY-loss
            valuation (£37bn) are different constructs measuring different
            things. They are not additive, and we do not present them as a
            combined total.
          </p>
        </div>

        {/* Interactive Tool Card */}
        <div className="border border-gray-800 bg-[#212121] p-6 md:p-8  my-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-[2px] bg-[#0093D0]" />
            <span className="text-[#0093D0] text-xs font-bold tracking-widest uppercase">
              INTERACTIVE TOOL
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
            Local burden &amp; cost mapping tool
          </h3>

          <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6 font-normal">
            An interactive calculator covering every local authority in Great
            Britain: adults and people harmed by someone else’s gambling in harm, years of health and
            wellbeing lost, and cost estimates for your area, with every
            assumption adjustable, conservative and legacy-survey scenarios
            built in, and a fully published methodology.
          </p>

          <Link
            to="/burden-mapping-tool"
            className="inline-block bg-white hover:bg-gray-100 text-gray-900 font-medium text-sm px-6 py-3 transition-colors duration-200"
          >
            Open the mapping tool →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopulationBurden;
