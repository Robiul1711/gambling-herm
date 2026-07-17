import React from "react";

const ChildrenYoungPeople = () => {
  return (
    <section className="bg-white text-gray-800">
      <div className="max-w-5xl mx-auto px-4">
        {/* Top Decorative Blue Accent Line */}
        <div className="w-12 h-[3px] bg-[#3FABD4] mb-4" />

        {/* Main Section Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 tracking-tight">
          4. Children and young people
        </h2>

        {/* Sub-header tagline */}
        <p className="text-sm md:text-base text-gray-400 mb-8 italic">
          Two populations consistently understated in policy debate.
        </p>

        {/* Content Body Grid / Columns */}
        <div className="grid grid-cols-1 gap-8 items-start mb-10">
          {/* Left Column: Handles the text groupings (spans 8 columns on large viewports) */}
          <div className="lg:col-span-8 space-y-8">
            {/* Sub-section 1 */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
                As direct customers
              </h3>
              <p className="text-sm md:text-base text-gray-500 leading-relaxed">
                Around 189,000 children aged 11–17 (3.4%) in Great Britain show
                gambling-related harm on the DSM-IV-MR-J screen; about 85,000 of
                them (1.5%) at the highest-severity threshold (Gambling
                Commission, Young People & Gambling 2025). Those figures are
                produced from a screening tool adapted from adult criteria and
                almost certainly undercount. It also does not include gamblified
                products (loot boxes, casino-mechanic mobile games,
                social-casino apps) that are widespread among under-18s but not
                currently regulated as gambling.
              </p>
            </div>

            {/* Sub-section 2 */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
                As affected others
              </h3>
              <div className="space-y-4 text-sm md:text-base text-gray-500 leading-relaxed">
                <p>
                  Among 11–17-year-olds who have seen a family member they live
                  with gamble (29% of all 11–17s), 12% report losing sleep due
                  to worry and 7% report increased arguments or tension at home
                  in the past year (Gambling Commission, 2025). These impacts
                  align with recognised Adverse Childhood Experiences. Modelling
                  for GambleAware suggests up to 2 million children of all ages
                  may live in a household with an adult experiencing the most
                  severe gambling harm (YouGov, 2024). Children of people with
                  gambling harm are at significantly higher risk of childhood
                  adversity, mental-health difficulties and, later, gambling
                  harm of their own.
                </p>
                <p>
                  UK public conversation on gambling and CYP focuses
                  overwhelmingly on the first group and almost ignores the
                  second. Policy attention is inverted relative to where the
                  burden sits.
                </p>
              </div>
            </div>
          </div>

          {/* Right Space/Empty Column (spans 4 columns to balance typography layout on large monitors) */}
          <div className="hidden lg:col-span-4" />
        </div>

        {/* Highlighted Position Statement Card Layout */}
        <div className="border-l-4 border-[#166B94] bg-[#292929] text-white p-6 md:p-8 shadow-md transition-all duration-300">
          <h4 className="text-[#3FABD4] font-semibold tracking-wide text-sm md:text-base uppercase mb-3">
            Our position
          </h4>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed ">
            Gambling policy that genuinely takes children seriously requires (a)
            explicit regulation of gamblified products that fall outside the
            Gambling Act's current scope, (b) restrictions on advertising in
            environments where children are present (sport, broadcast, social
            media), and (c) statutory recognition and support for children of
            people experiencing gambling harm.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ChildrenYoungPeople;
