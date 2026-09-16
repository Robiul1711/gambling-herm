import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp } from "lucide-react";

const PopulationBurden = () => {
  const [isMethodologyOpen, setIsMethodologyOpen] = useState(false);

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
            On the Gambling Survey for Great Britain Year 3 (2025),{" "}
            <strong className="text-white font-bold">
              13.6% of adults, about 7.3 million people
            </strong>
            , report at least one indicator of gambling harm from their own
            gambling:{" "}
            <strong className="text-white font-bold">
              7.8% at a low level of gambling harm (PGSI 1–2)
            </strong>
            ,{" "}
            <strong className="text-white font-bold">
              3.5% at a moderate level (PGSI 3–7)
            </strong>{" "}
            and{" "}
            <strong className="text-white font-bold">
              2.4% at a severe level (PGSI 8+)
            </strong>
            . A further{" "}
            <strong className="text-white font-bold">
              9.0%, around 4.8 million adults
            </strong>
            , report being negatively affected by someone else’s gambling.
          </p>

          <p className="text-sm md:text-base leading-relaxed text-gray-300">
            Those figures cannot simply be added together, because some adults
            both gamble at a harmful level and are harmed by someone else’s
            gambling. Once that household overlap is removed,{" "}
            <strong className="text-white font-bold">
              roughly 1 in 6 adults (17.9%) experience gambling-related harm in
              a single year
            </strong>
            . This is Gambling Harm UK’s modelled synthesis, not a survey
            estimate: to our knowledge, no survey or public authority publishes
            an estimate of this combined prevalence, and we show our working.
          </p>

          <p className="text-sm md:text-base leading-relaxed text-gray-300">
            Survey mode matters at this scale. The push-to-web survey may
            over-state, interviewer-led surveys may suppress disclosure, and
            every past-year survey misses legacy harm entirely; none of these
            errors has been quantified. We therefore anchor both ways, showing
            the health-survey floor alongside the central estimate throughout.
          </p>
        </div>

        {/* Sub-heading: Where gambling sits against other risks */}
        <div className="mt-12 mb-8">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
            Where gambling sits against other risks
          </h3>

          <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-6">
            On the non-fatal measure, the health loss from gambling is of the
            same order as tobacco, unhealthy diet and alcohol:
          </p>

          {/* Bar Chart 1 */}
          <div className="space-y-4 my-6">
            {/* Tobacco (Highest comparator: 451,000) */}
            <div className="flex items-center gap-4">
              <div className="w-32 text-sm font-semibold text-white shrink-0">
                Tobacco
              </div>
              <div className="flex-1 bg-[#2b2b2b] h-7 rounded-none overflow-hidden flex items-center">
                <div className="bg-[#73768B] h-full w-[100%]" />
              </div>
              <div className="w-24 text-right text-sm font-bold text-white">
                451,000
              </div>
            </div>

            {/* Gambling: 386,000 (range 320,000 to 450,000) */}
            <div className="flex items-center gap-4">
              <div className="w-32 text-sm font-semibold text-[#00B5FF] shrink-0">
                Gambling
              </div>
              <div className="flex-1 bg-[#2b2b2b] h-7 rounded-none overflow-hidden flex items-center">
                <div className="bg-[#0093D0] h-full w-[85.6%]" />
              </div>
              <div className="w-auto text-right text-sm font-bold text-[#00B5FF] shrink-0">
                386,000{" "}
                <span className="text-xs font-normal text-gray-300">
                  (320k–450k)
                </span>
              </div>
            </div>

            {/* Unhealthy diet */}
            <div className="flex items-center gap-4">
              <div className="w-32 text-sm font-semibold text-white shrink-0">
                Unhealthy diet
              </div>
              <div className="flex-1 bg-[#2b2b2b] h-7 rounded-none overflow-hidden flex items-center">
                <div className="bg-[#73768B] h-full w-[63.9%]" />
              </div>
              <div className="w-24 text-right text-sm font-bold text-white">
                288,000
              </div>
            </div>

            {/* Alcohol */}
            <div className="flex items-center gap-4">
              <div className="w-32 text-sm font-semibold text-white shrink-0">
                Alcohol
              </div>
              <div className="flex-1 bg-[#2b2b2b] h-7 rounded-none overflow-hidden flex items-center">
                <div className="bg-[#73768B] h-full w-[56.3%]" />
              </div>
              <div className="w-24 text-right text-sm font-bold text-white">
                254,000
              </div>
            </div>
          </div>

          {/* Footnote 1 */}
          <p className="text-xs md:text-sm text-gray-400 leading-relaxed mt-6 mb-10">
            Annual non-fatal health loss, UK. Gambling figure is GHUK modelling:{" "}
            <a
              href="https://doi.org/10.1016/j.socscimed.2020.113337"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0093D0] underline hover:text-[#00B5FF]"
            >
              Moayeri (2020)
            </a>{" "}
            health-state utilities applied to GSGB Year 3 (2025) prevalence,
            de-duplicated for household overlap (Wilson et al., 2024), with harm
            to people harmed by someone else’s gambling included across three
            attribution scenarios (0.30 / 0.65 / 1.00, no preferred value): the
            range is the finding. Comparators are Years Lived with Disability,
            GBD 2023 (IHME, GBD Compare, United Kingdom, all ages, both sexes).
            Four caveats. First, this is an order-of-magnitude comparison, not a
            ranking. Second, QALYs and YLDs are related but different
            constructs; the comparison is drawn because no GBD estimate for
            gambling exists. Third, counting people harmed by someone else’s
            gambling is consistent with the tobacco comparator, whose GBD burden
            already includes second-hand smoke, but the alcohol and diet
            estimates do not capture harm to others, so the strict like-for-like
            comparator against those two is the people-who-gamble component
            alone (about 264,000 QALYs), which is of the same order as both.
            Fourth, no comparable estimate of gambling’s fatal burden exists,
            because gambling-attributable deaths are not routinely coded in the
            UK; where gambling would sit on a total-burden ranking including
            mortality is unknown, rather than low. Children are shown separately
            (9,000–58,000 QALYs, exploratory) and are never folded into the
            adult total.
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
            </strong>
            , the same instrument OHID applies to gambling-related deaths, the
            annual UK health loss from gambling comes to{" "}
            <strong className="text-white font-bold">
              £22 to £32 billion
            </strong>
            , central estimate about{" "}
            <strong className="text-white font-bold">£27 billion</strong>. The
            range spans our three published attribution scenarios: low (320,000
            QALYs, £22.4bn), central (386,000 QALYs, £27bn) and high (450,000
            QALYs, £31.5bn). No scenario is preferred; the range is the finding.
            People who gamble account for about 264,000 QALYs (£18.5bn) of the
            central estimate; adults harmed by someone else’s gambling make up
            the rest. Children are estimated separately (9,000 to 58,000 QALYs,
            exploratory) and are never folded into the adult total.
          </p>

          {/* Bar Chart 2 */}
          <div className="space-y-4 my-6">
            {/* Statutory levy */}
            <div className="flex items-center gap-4">
              <div className="w-48 text-sm font-semibold text-white shrink-0">
                Statutory levy (year one)
              </div>
              <div className="flex-1 bg-[#2b2b2b] h-7 rounded-none overflow-hidden flex items-center">
                <div className="bg-[#73768B] h-full w-[0.4%]" />
              </div>
              <div className="w-28 text-right text-sm font-bold text-white">
                £120m
              </div>
            </div>

            {/* Low scenario */}
            <div className="flex items-center gap-4">
              <div className="w-48 text-sm font-semibold text-white shrink-0">
                Low scenario
              </div>
              <div className="flex-1 bg-[#2b2b2b] h-7 rounded-none overflow-hidden flex items-center">
                <div className="bg-[#0093D0] h-full w-[71.1%]" />
              </div>
              <div className="w-28 text-right text-sm font-bold text-white">
                £22.4bn
              </div>
            </div>

            {/* Central scenario */}
            <div className="flex items-center gap-4">
              <div className="w-48 text-sm font-semibold text-white shrink-0">
                Central scenario
              </div>
              <div className="flex-1 bg-[#2b2b2b] h-7 rounded-none overflow-hidden flex items-center">
                <div className="bg-[#0093D0] h-full w-[85.7%]" />
              </div>
              <div className="w-28 text-right text-sm font-bold text-white">
                £27.0bn
              </div>
            </div>

            {/* High scenario */}
            <div className="flex items-center gap-4">
              <div className="w-48 text-sm font-semibold text-white shrink-0">
                High scenario
              </div>
              <div className="flex-1 bg-[#2b2b2b] h-7 rounded-none overflow-hidden flex items-center">
                <div className="bg-[#0093D0] h-full w-[100%]" />
              </div>
              <div className="w-28 text-right text-sm font-bold text-white">
                £31.5bn
              </div>
            </div>
          </div>

          <p className="text-xs md:text-sm text-gray-400 leading-relaxed font-normal">
            Bars drawn to scale. The statutory levy, in force since April 2025,
            raised just under £120 million in its first year, about 0.7% of the
            industry’s £16.8 billion gross gambling yield. At this scale the
            levy is too small to render as a visible block; that invisibility is
            the finding.
          </p>
        </div>

        {/* Position Callout Box */}
        <div className="border-l-4 border-[#0093D0] bg-[#e7f6fd] text-gray-900 p-6 md:p-8 rounded-r-sm my-8">
          <h4 className="text-[#0076A8] font-bold text-xs tracking-wider uppercase mb-3">
            OUR POSITION
          </h4>
          <p className="text-sm md:text-base leading-relaxed text-gray-800">
            The modelled health loss is two orders of magnitude larger than the
            levy: roughly 200 times on the central scenario, and around 70 times
            even on the lowest published basis. The gap is the point; we are not
            arguing the levy should equal the burden. Even the government’s own
            deliberately narrow social-cost estimate for England (£1.05 to £1.77
            billion a year) leaves the levy an order of magnitude too small.
          </p>
        </div>

        {/* Methodology and scenario definitions Expandable Drawer (B10a) */}
        <div className="border border-gray-700 bg-[#212121] rounded-sm my-8 overflow-hidden">
          <button
            onClick={() => setIsMethodologyOpen(!isMethodologyOpen)}
            className="w-full flex items-center justify-between p-4 sm:p-5 text-left text-white hover:bg-[#282828] transition-colors focus:outline-none"
          >
            <span className="font-semibold text-sm sm:text-base flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0093D0]" />
              Methodology and scenario definitions
            </span>
            {isMethodologyOpen ? (
              <ChevronUp className="w-5 h-5 text-gray-400" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-400" />
            )}
          </button>

          {isMethodologyOpen && (
            <div className="p-4 sm:p-6 border-t border-gray-700 bg-[#1a1a1a] text-xs sm:text-sm text-gray-300 space-y-3 leading-relaxed">
              <p>
                <strong className="text-white font-medium">
                  Attribution scenarios:
                </strong>{" "}
                What the low, central and high scenarios mean is the attribution
                of health loss to people harmed by someone else’s gambling.
                Because direct empirical measurement of this transfer is
                emerging, we model three published scenarios:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-300 pl-2">
                <li>
                  <strong className="text-white">Low scenario (0.30 attribution):</strong>{" "}
                  320,000 QALYs (£22.4bn), assuming people harmed carry 30% of
                  the burden relative to the person who gambles.
                </li>
                <li>
                  <strong className="text-white">Central scenario (0.65 attribution):</strong>{" "}
                  386,000 QALYs (£27.0bn), our balanced midpoint.
                </li>
                <li>
                  <strong className="text-white">High scenario (1.00 attribution):</strong>{" "}
                  450,000 QALYs (£31.5bn), valuing harm at parity with the
                  person gambling.
                </li>
              </ul>
              <p>
                No scenario is singled out as preferred; the range is the
                finding.
              </p>
              <p>
                <strong className="text-white font-medium">Survey bases &amp; citations:</strong>{" "}
                Our calculations apply published health-state utilities from{" "}
                <a
                  href="https://doi.org/10.1016/j.socscimed.2020.113337"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0093D0] underline hover:text-[#00B5FF]"
                >
                  Moayeri (2020)
                </a>{" "}
                to national prevalence from the{" "}
                <a
                  href="https://www.gamblingcommission.gov.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0093D0] underline hover:text-[#00B5FF]"
                >
                  Gambling Survey for Great Britain (GSGB Year 3, 2025)
                </a>
                , de-duplicated for household overlap (Wilson et al., 2024), and
                anchored against the{" "}
                <a
                  href="https://www.healthdata.org/gbd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0093D0] underline hover:text-[#00B5FF]"
                >
                  Global Burden of Disease (IHME GBD 2023)
                </a>
                .
              </p>
            </div>
          )}
        </div>

        {/* Dark Box: Two numbers that must not be added together (B10b) */}
        <div className="border-l-4 border-gray-400 bg-[#222222] p-6 md:p-8 my-8">
          <h4 className="text-white font-bold text-base md:text-lg mb-3">
            Two numbers that must not be added together
          </h4>
          <p className="text-sm text-gray-300 leading-relaxed">
            The partial social-cost estimate (£1.05–1.77bn) and the QALY-loss
            valuation (£22 to £32 billion) are different constructs measuring
            different things. They are not additive, and we do not present them
            as a combined total.
          </p>
        </div>

        {/* Interactive Tool Card */}
        <div className="border border-gray-800 bg-[#212121] p-6 md:p-8 my-8">
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
            Britain: adults and people harmed by someone else’s gambling in harm,
            years of health and wellbeing lost, and cost estimates for your
            area, with every assumption adjustable, conservative and
            legacy-survey scenarios built in, and a fully published methodology.
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
