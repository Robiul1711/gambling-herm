import React from 'react';

const PopulationBurden = () => {
  return (
    <section className="py-12 bg-[#1A1A1A] text-gray-300 px-4 md:px-8 rounded-2xl ">
      <div className="max-w-5xl mx-auto px-4">
        
        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
          2. The population burden
        </h2>

        {/* Introduction Paragraphs */}
        <div className="space-y-6 text-sm md:text-base leading-relaxed text-gray-300 mb-10">
        <p className="font-semibold text-white">
  Public health measures harm in disability-adjusted life years (DALYs), years of healthy life lost to a risk factor through disability and premature death combined. Almost every major UK risk factor has detailed DALY estimates. Gambling, until recently, did not.
</p>

<p className="text-gray-400">
  Emerging evidence (PHE 2021, OHID/Lancet 2023 commentary, recent national DALY syntheses) suggests the UK gambling-attributable burden is comparable in scale to several risk factors that receive an order of magnitude more research funding and policy attention. The picture below is illustrative; methodologies vary and the burden is almost certainly larger than even the central estimates capture.
</p>
        </div>

        {/* Sub-heading */}
        <div className="mb-8">
          <h3 className="text-lg md:text-xl font-bold text-white mb-3">
            QALY-monetised health burden. GHUK modelling
          </h3>
          <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
            The scale starts with prevalence. On GHUK's APPG modelling (GSGB 2023 base), 7.8 million UK adults 
            experienced harm from their own gambling in the past year, and 3.8 million were harmed by someone else's: 11.7 
            million people, about 1 in 5 adults, in a single year. The burden estimates below convert that prevalence into years 
            of healthy life lost. Methodologies vary across studies; the ranges shown are bounded by the most conservative 
            published decrements, and the true burden is larger than the central estimates, because gambling-coded mortality, 
            legacy harms and most affected-other harms remain uncounted.
          </p>
        </div>

        {/* Chart Visualization Section */}
        <div className="space-y-5 my-10 ">
          
          {/* Row 1: Current statutory levy */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 items-center">
            <div className="md:col-span-3 text-xs md:text-sm font-semibold text-white">
              Current statutory levy
            </div>
            <div className="md:col-span-7 w-full bg-[#2E2E2E] h-8 rounded-md overflow-hidden flex items-center">
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
            <div className="md:col-span-7 w-full bg-[#2E2E2E] h-8 rounded-md overflow-hidden flex items-center">
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
            <div className="md:col-span-7 w-full bg-[#2E2E2E] h-8 rounded-md overflow-hidden flex items-center">
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
          Sources: GHUK APPG submission (25 February 2026); Moayeri (2019); Tulloch et al. (2025, hybrid decrements). NICE 
          thresholds applied. AO spillover modelled at +30% for Moayeri; directly incorporated in Tulloch. Both rows show the 
          conservative scenario (BGPS 2010 sensitivity base); on the current GSGB 2023 base the ranges rise to £7.6–11.4bn 
          (Moayeri) and £51.8–77.7bn (Tulloch). We lead with the most conservative figure: the 40–60× multiple of the current levy is 
          the headline.
        </p>

        {/* Position Callout Box */}
        <div className="border-l-4 border-[#00B5FF] bg-[#EBF8FF] text-gray-800 p-5 md:p-8 rounded-r-2xl  shadow-md">
          <h4 className="text-[#0076A8] font-bold text-sm tracking-wide uppercase mb-3">
            Our position
          </h4>
          <p className="text-xs md:text-sm md:text-base leading-relaxed text-gray-700">
            Gambling deserves its own seat at the UK Burden of Disease table. The QALY-cost estimates above 
            (published in our February 2026 APPG submission) are between <span className="font-bold text-black">40 and 60 times the current £100m statutory levy</span> in the conservative scenario. The total economic burden, including non-QALY costs and intangibles, is likely several times higher still.
          </p>
        </div>

      </div>
    </section>
  );
};

export default PopulationBurden;