import React from "react";

const PopulationBurden = () => {
  return (
    <section className="py-12 bg-[#1A1A1A] text-gray-300 px-4 md:px-8">
      <div className="max-w-5xl mx-auto px-4">
        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
          2. The population burden
        </h2>

        {/* Introduction Paragraphs */}
        <div className="space-y-6 text-sm md:text-base leading-relaxed text-gray-300 mb-10">
          <p className="font-semibold text-white">
            Public health measures harm in disability-adjusted life years
            (DALYs), years of healthy life lost to a risk factor through
            disability and premature death combined. Almost every major UK risk
            factor has detailed DALY estimates. Gambling, until recently, did
            not.
          </p>

          <p className="text-gray-400">
           The scale starts with prevalence. On GHUK's APPG modelling (GSGB 2023 base), 7.8 million UK adults experienced harm from their own gambling in the past year, and 3.8 million were harmed by someone else's: 11.7 million people, about 1 in 5 adults, in a single year. Survey mode matters at this scale: the push-to-web GSGB may run high and the older interviewer-administered surveys almost certainly ran low, so we anchor both ways: even on the legacy BGPS 2010 basis, the figure is around 1 in 7. The burden estimates below convert that prevalence into years of healthy life lost. Methodologies vary across studies; the ranges shown are bounded by the most conservative published decrements, and the true burden is larger than the central estimates, because gambling-coded mortality, legacy harms and most affected-other harms remain uncounted.
          </p>
        </div>

        {/* Sub-heading */}
        <div className="mb-8">
          <h3 className="text-lg md:text-xl font-bold text-white mb-3">
            QALY-monetised health burden. GHUK modelling
          </h3>
          <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
          When the prevalence figures above are combined with published Health-Related Quality of Life decrements (Moayeri 2019 with UK weights, +30% affected-other spillover) and monetised at NICE thresholds of £20,000–£30,000 per QALY, the conservative scenario gives an annual UK health-burden cost in the range below:
          </p>
        </div>

        {/* Chart Visualization Section */}
        <div className="space-y-5 my-10">
          {/* Row 1: Current statutory levy */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 items-center">
            <div className="md:col-span-3 text-xs md:text-sm font-semibold text-white">
              Current statutory levy
            </div>
            <div className="md:col-span-7 w-full bg-[#2E2E2E] h-8 overflow-hidden flex items-center">
              {/* Very small percentage indicator representation */}
              <div className="bg-[#4E5668] h-full w-[4%] min-w-[12px]" />
            </div>
            <div className="md:col-span-2 text-right md:text-left text-xs md:text-sm font-bold text-white">
              £100m
            </div>
          </div>

          {/* Row 2: QALY cost (Moayeri) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 items-center">
            <div className="md:col-span-3 text-xs md:text-sm font-semibold text-[#3FABD4]">
              QALY cost (Moayeri, UK weights)
            </div>
            <div className="md:col-span-7 w-full bg-[#2E2E2E] h-8 overflow-hidden flex items-center">
              {/* Mid scale indicator representation */}
              <div className="bg-[#00A3E0] h-full w-[30%]" />
            </div>
            <div className="md:col-span-2 text-right md:text-left text-xs md:text-sm font-bold text-[#3FABD4]">
              £4.1–6.1bn
            </div>
          </div>

          {/* Row 3: QALY cost (Tulloch) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 items-center">
            <div className="md:col-span-3 text-xs md:text-sm font-semibold text-[#00A3E0]">
              QALY cost (Tulloch 2025 hybrid)
            </div>
            <div className="md:col-span-7 w-full bg-[#2E2E2E] h-8 overflow-hidden flex items-center">
              {/* Max scale indicator representation */}
              <div className="bg-[#00B5FF] h-full w-full" />
            </div>
            <div className="md:col-span-2 text-right md:text-left text-xs md:text-sm font-bold text-[#00A3E0]">
              £33.8–50.7bn
            </div>
          </div>
        </div>

        {/* Small Footnote Sources text */}
        <p className="text-[11px] md:text-xs text-gray-500 leading-relaxed mb-10">
          Sources: GHUK APPG submission (25 February 2026); Moayeri (2019);
          Tulloch et al. (2025, hybrid decrements). NICE thresholds applied. AO
          spillover modelled at +30% for Moayeri; directly incorporated in
          Tulloch. Both rows show the conservative scenario (BGPS 2010
          sensitivity base); on the current GSGB 2023 base the ranges rise to
          £7.6–11.4bn (Moayeri) and £51.8–77.7bn (Tulloch). We lead with the
          most conservative figure: the 40–60× multiple of the current levy is
          the headline.
        </p>

        {/* Position Callout Box */}
        <div className="border-l-4 border-[#00B5FF] bg-[#EBF8FF] text-gray-800 p-5 md:p-8 shadow-md">
          <h4 className="text-[#0076A8] font-bold text-sm tracking-wide uppercase mb-3">
            Our position
          </h4>
          <p className="text-xs md:text-sm md:text-base leading-relaxed text-gray-700">
           Gambling deserves its own seat at the UK Burden of Disease table. The QALY-cost estimates above (published in our February 2026 APPG submission) are between 40 and 60 times the current £100m statutory levy in the conservative scenario. Even on OHID's own deliberately narrow estimate (£1.05–£1.77bn/year, England alone), the levy is an order of magnitude too small: the conclusion survives every published assumption. The total economic burden, including non-QALY costs and intangibles, is likely several times higher still.
          </p>
        </div>

        {/* Coming Soon Callout Box */}
        <div className="mt-8 border border-gray-850 bg-[#232323] p-6 md:p-8 rounded-xl shadow-md">
          {/* Tagline with Horizontal Line */}
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-[2px] bg-[#3FABD4]" />
            <span className="text-[#3FABD4] text-xs md:text-sm font-bold tracking-widest uppercase">
              COMING SOON
            </span>
          </div>

          {/* Heading */}
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
            Local burden &amp; cost mapping tool
          </h3>

          {/* Description */}
          <p className="text-gray-300 text-sm md:text-base leading-relaxed font-normal">
            An interactive calculator covering every local authority in Great Britain: adults and
            affected others in harm, years of health and wellbeing lost, and cost estimates for your
            area, with every assumption adjustable, conservative and legacy-survey scenarios built
            in, and a fully published, independently reviewed methodology.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PopulationBurden;
