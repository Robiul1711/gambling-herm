import React from "react";

const CostExceedsRevenue = () => {
  return (
    <section className=" bg-white text-gray-800 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Accent Bar */}
        <div className="w-10 h-[3px] bg-[#0093D0] mb-4" />

        {/* Main Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
          7. The economic cost exceeds the tax revenue
        </h2>

        {/* Lead Copy */}
        <div className="space-y-4 text-sm md:text-base leading-relaxed text-gray-700 mb-10">
          <p className="font-semibold text-gray-900 text-base md:text-lg">
            A central argument for permissive gambling regulation in the UK has been the tax revenue the industry generates: betting and gaming duties are estimated by the Office for Budget Responsibility to raise <strong className="font-bold text-gray-900">£4 billion in 2025–26</strong>, following the November 2025 duty rises. This argument does not survive contact with the actual public-finance picture.
          </p>

          <p>
            The Office for Health Improvement and Disparities estimates the directly-attributable social cost for England at <strong className="font-bold text-gray-900">£1.05–1.77 billion a year</strong> (OHID, 2023, at 2021/22 prices), roughly £24 to £40 per adult. OHID itself describes the estimate as conservative, because it excludes affected others, children, relationship harms and most intangible quality-of-life losses. Our own health-loss valuation, which includes the burden on affected others and applies NICE thresholds, puts the health burden alone at <strong className="font-bold text-gray-900">£15.6–21.9 billion a year</strong>.
          </p>
        </div>

        {/* Sub-section 1: UK costings count about a tenth of the harm */}
        <div className="my-10 space-y-4">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900">
            UK costings count about a tenth of the harm
          </h3>

          <p className="text-sm md:text-base leading-relaxed text-gray-700">
            The UK social-cost estimates are fiscal-cost estimates. They count tangible costs falling on government and public services. Gambling-related suicide is included, monetised as a mortality cost. What they explicitly exclude is the person's own financial losses, emotional and psychological harm, relationship and family breakdown, and harm to affected others.
          </p>

          <p className="text-sm md:text-base leading-relaxed text-gray-700">
            The Victorian social-cost studies apply a full public-health costing method instead, covering tangible and intangible harm, with affected others treated as a co-equal population. Mapping the Victorian cost categories against what the three UK techniques actually count shows the UK method <strong className="font-bold text-gray-900">captures only around a tenth of the full social cost, partially captures a further tenth, and omits roughly 80%</strong>. The omissions are not marginal: they include the four largest items.
          </p>

          {/* Item Breakdown Rows */}
          <div className="border-t border-b border-gray-200 divide-y divide-gray-200 my-8">
            {/* OMITTED 1 */}
            <div className="grid grid-cols-1 md:grid-cols-12 py-5 gap-2 md:gap-6 items-start">
              <div className="md:col-span-3 text-xs font-bold text-[#0093D0] tracking-wider uppercase">
                OMITTED
              </div>
              <div className="md:col-span-9 text-sm md:text-base text-gray-700 leading-relaxed">
                <strong className="font-bold text-gray-900">Money lost to gambling that would otherwise have been spent or saved, A$4.8bn.</strong> Called "excess spend" in the Victorian accounts: the money people lose beyond what they would have chosen to gamble were they not being harmed. In household terms it is rent, food, bills, savings and children's costs, and in economic terms it is spending diverted out of the local economy into a high-margin sector. It is the largest single cost item in the Victorian accounts, and absent from every UK estimate.
              </div>
            </div>

            {/* OMITTED 2 */}
            <div className="grid grid-cols-1 md:grid-cols-12 py-5 gap-2 md:gap-6 items-start">
              <div className="md:col-span-3 text-xs font-bold text-[#0093D0] tracking-wider uppercase">
                OMITTED
              </div>
              <div className="md:col-span-9 text-sm md:text-base text-gray-700 leading-relaxed">
                <strong className="font-bold text-gray-900">Quality-of-life loss to the person gambling, A$3.0bn.</strong> Second largest, also absent.
              </div>
            </div>

            {/* OMITTED 3 */}
            <div className="grid grid-cols-1 md:grid-cols-12 py-5 gap-2 md:gap-6 items-start">
              <div className="md:col-span-3 text-xs font-bold text-[#0093D0] tracking-wider uppercase">
                OMITTED
              </div>
              <div className="md:col-span-9 text-sm md:text-base text-gray-700 leading-relaxed">
                <strong className="font-bold text-gray-900">Quality-of-life loss to affected others, A$1.6bn.</strong> Third largest, also absent.
              </div>
            </div>

            {/* PARTIAL */}
            <div className="grid grid-cols-1 md:grid-cols-12 py-5 gap-2 md:gap-6 items-start">
              <div className="md:col-span-3 text-xs font-bold text-[#0093D0] tracking-wider uppercase">
                PARTIAL
              </div>
              <div className="md:col-span-9 text-sm md:text-base text-gray-700 leading-relaxed">
                <strong className="font-bold text-gray-900">Productivity loss, A$1.2bn.</strong> Fourth largest, only partly counted.
              </div>
            </div>

            {/* CAPTURED */}
            <div className="grid grid-cols-1 md:grid-cols-12 py-5 gap-2 md:gap-6 items-start">
              <div className="md:col-span-3 text-xs font-bold text-[#0093D0] tracking-wider uppercase">
                CAPTURED
              </div>
              <div className="md:col-span-9 text-sm md:text-base text-gray-700 leading-relaxed">
                <strong className="font-bold text-gray-900">Health and human services, A$0.62bn; mental health sector, A$0.42bn; justice system, A$0.25bn.</strong> The items UK costings do capture sit almost entirely at the bottom of the ranking by size.
              </div>
            </div>
          </div>

          {/* Footnote */}
          <p className="text-xs sm:text-sm text-gray-600 mt-4 mb-8">
            Victorian cost items, 2022–23, from Browne et al. (2023), Social cost of gambling to Victoria. The two largest categories overall, relationship and family harm and emotional and psychological harm, are absent from every UK estimate. Australian dollar totals are not population-comparable to a UK authority; the value here is methodological, showing what gets counted and what does not.
          </p>
        </div>

        {/* Sub-section 2: Internationally, costs run at multiples of revenue */}
        <div className="my-10 space-y-4">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900">
            Internationally, costs run at multiples of revenue
          </h3>

          <p className="text-sm md:text-base leading-relaxed text-gray-700">
            In Sweden, social costs of €1.42 billion were set against €638 million in tax revenue, a ratio of <strong className="font-bold text-gray-900">2.2 times</strong> (Hofmarcher et al., 2020). In Victoria, social costs of A$7.0 billion against A$1.6 billion in tax revenue gave a ratio of <strong className="font-bold text-gray-900">4.4 times</strong> in 2014–15 (Browne et al., 2017); the updated study puts 2022–23 social costs at A$14.1 billion, approximately <strong className="font-bold text-gray-900">A$5.70 of social cost for every A$1 of gambling tax revenue</strong> (Browne et al., 2023). In England the narrow OHID figure appears to sit below tax revenue, but that reflects the scope of the estimate, not the underlying balance.
          </p>
        </div>

        {/* Sub-section 3: The revenue depends on the harm */}
        <div className="my-10 space-y-4">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900">
            The revenue depends on the harm
          </h3>

          <p className="text-sm md:text-base leading-relaxed text-gray-700">
            Account-level data show the <strong className="font-bold text-gray-900">top 10% of online customers generate around 79% of net revenue, and the top 1% around 37%</strong>. Combined with estimates that around 60% of gambling losses come from people gambling at harmful levels, this describes a business model structurally dependent on harm rather than recreational play.
          </p>

          <p className="text-sm md:text-base leading-relaxed text-gray-700">
            The employment argument warrants similar scrutiny. Industry-commissioned analysis found jobs supported by Betting and Gaming Council members <strong className="font-bold text-gray-900">fell 26% between 2019 and 2023</strong> despite rising gross gambling yield (£15.1 billion in 2022–23). Independent modelling describes online gambling as a high-margin, low-labour sector, paying about <strong className="font-bold text-gray-900">£2.54 in wages per £100 of revenue</strong> against around £38 in retail or hospitality, with roughly 75% of UK online betting routed through Gibraltar. Much of the money lost is therefore not recycled through local wages and spending.
          </p>
        </div>

        {/* Position Dark Box */}
        <div className="border-l-4 border-[#0093D0] bg-[#1c1d1f] text-white p-6 md:p-8 rounded-r-sm my-8">
          <h4 className="text-[#0093D0] font-bold text-xs tracking-wider uppercase mb-3">
            OUR POSITION
          </h4>
          <p className="text-sm md:text-base leading-relaxed text-gray-200 font-medium">
            The "tax revenue" argument for permissive gambling regulation is not consistent with the available cost evidence. The UK public is, on net, paying for the harm that subsidises the tax receipt. We believe regulatory tightening that reduces harm at moderate cost to industry revenue is likely to be net positive for population health and, given the scale of the cost evidence above, plausibly for the public finances too. We are not aware of published UK modelling that tests the fiscal question directly.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CostExceedsRevenue;
