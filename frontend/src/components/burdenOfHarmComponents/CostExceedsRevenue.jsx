import React from'react';

const CostExceedsRevenue = () => {
 return (
 <section className="max-w-5xl mx-auto bg-white text-gray-800">
 <div className="">
 
 {/* Top Decorative Teal Accent Line */}
 <div className="w-12 h-[3px] bg-[#3FABD4] mb-4" />

 {/* Section Title */}
 <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
 7. The economic cost exceeds the tax revenue
 </h2>

 {/* Informational Copy Split Layout Grid */}
 <div className="grid grid-cols-1 items-start mb-10">
 
 {/* Main Body Column (Spans 8 columns on large viewports) */}
 <div className="space-y-6 text-sm md:text-base leading-relaxed text-gray-500">
 
 <p className="font-semibold text-gray-900 text-base md:text-lg">
 A central argument for permissive gambling regulation in the UK has been the tax revenue the 
 industry generates: betting and gaming duties are estimated by the Office for Budget 
 Responsibility to raise £4 billion in 2025–26, following the November 2025 duty rises. This 
 argument does not survive contact with the actual public-finance picture: the conservative 
 estimate of the health loss alone matches or exceeds the entire tax take, before any wider costs 
 are counted.
 </p>
 
 <p className="text-gray-900">
 The Office for Health Improvement and Disparities and independent academic syntheses estimate the 
 directly-attributable UK cost at £1.05–£1.77 billion per year (PHE 2021), but those estimates exclude 
 affected others, children, and intangible quality-of-life losses. GHUK QALY modelling, which includes affected-others 
 spillover and applies NICE thresholds, puts the health-economic cost alone at £4.1–6.1 billion per year 
 in the conservative scenario, rising substantially with fuller decrement assumptions. International social-cost 
 studies typically find total costs at approximately 2× tax revenue (Sweden, Czech Republic) and as high as 
 4.4× tax revenue in Australia (Victoria; Browne et al. 2017).
 </p>
 
 <p className="text-gray-900">
 That comparison is conservative for two reasons. First, the cost estimates exclude most of the affected-others 
 burden (which is itself the larger share of total harm). Second, they exclude the cost of foregone 
 alternatives, what the same money would have produced if spent in the wider economy.
 </p>
 
 </div>

 {/* Balanced Typography Space Pillar (Spans 4 columns to avoid ultra-long reading baselines) */}
 <div className="hidden lg:col-span-4" />
 </div>

 {/* Position Statement Callout Banner Box */}
 <div className="border-l-4 border-[#166B94] bg-[#292929] text-white p-6 md:p-8 shadow-md transition-all duration-300">
 <h4 className="text-[#3FABD4] font-semibold tracking-wide text-xs md:text-sm uppercase mb-3">
 Our position
 </h4>
 <p className="text-gray-300 text-sm md:text-base leading-relaxed font-light">
 The"tax revenue" argument for permissive gambling regulation is not consistent with the available cost 
 evidence. The UK public is, on net, paying for the harm that subsidises the tax receipt. Regulatory tightening 
 that reduces harm at moderate cost to industry revenue would, on the central estimates, be net positive for 
 the Exchequer as well as for population health.
 </p>
 </div>

 </div>
 </section>
 );
};

export default CostExceedsRevenue;