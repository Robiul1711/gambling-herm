import React from'react';

const PublicHealthRequestsSection = () => {
 const requests = [
 {
 id: 1,
 title:"Add gambling to JSNA and IIA frameworks as standard",
 content:"Local-authority JSNAs and ICB Integrated Impact Assessments should explicitly include gambling-related harm as a population-health risk factor, with local prevalence, affected-others estimation, and product-risk profiling.",
 },
 {
 id: 2,
 title:"Adopt and advocate for routine NHS coding of gambling harm",
 content:"The absence of routine ICD/SNOMED-coded gambling-harm data is one of the largest gaps in the UK public-health response. Local action on coding adoption, plus national-level advocacy, would substantially close this gap.",
 },
 {
 id: 3,
 title:"Embed gambling in MECC training",
 content:"Gambling should sit alongside the existing MECC topics in mandatory NHS and local-authority workforce training. Free GHUK content available.",
 },
 {
 id: 4,
 title:"Use the prevention paradox in commissioning",
 content:"Local commissioning should reflect the evidence that 70–85% of YLDs sit in the low- and moderate-risk bands (PGSI 1–7), not be skewed toward severe-end treatment alone.",
 },
 {
 id: 5,
 title:"Support DHSC consolidation of gambling regulation",
 content:"Gambling regulation currently sits within DCMS, structurally disconnected from health. We support consolidation of regulatory leadership under the Department of Health and Social Care, with population-health primacy and proper public-health analytical capacity.",
 },
 {
 id: 6,
 title:"Push for a proportionate statutory levy",
 content:"The current £100m statutory levy is, on conservative modelling, between 40 and 60 times smaller than the annual health-economic burden of gambling harm in the UK. Local public-health bodies are well-placed to make this case to government.",
 },
 ];

 return (
 <div className="w-full bg-[#222120] text-white py-16 px-4">
 <div className="max-w-5xl mx-auto">
 
 {/* Top Accent Blue Ribbon */}
 <div className="flex justify-center mb-4">
 <div className="w-12 h-[3px] bg-[#0082c3]"></div>
 </div>
 
 {/* Component Title & Subtitle */}
 <div className="text-center mb-12">
 <h2 className="text-3xl md:text-[38px] font-bold text-white tracking-tight mb-4">
 What we ask of UK public-health bodies
 </h2>
 <p className="text-sm md:text-[15px] text-gray-400 font-normal max-w-2xl mx-auto">
 Six requests of OHID, ICBs, public health Scotland/Wales/NI, and local-authority public-health teams.
 </p>
 </div>

 {/* Row Items Stack Container */}
 <div className="flex flex-col gap-5">
 {requests.map((item) => (
 <div
 key={item.id}
 className="flex flex-col sm:flex-row items-start bg-white p-6 md:p-8 gap-4 md:gap-6 shadow-md transition-transform duration-200 hover:-translate-y-[1px]"
 >
 {/* Left Side: Circular Blue Number Badge */}
 <div className="flex-shrink-0">
 <div className="w-9 h-9 md:w-10 md:h-10 bg-[#0a6b94] flex items-center justify-center text-white font-bold text-sm md:text-base">
 {item.id}
 </div>
 </div>

 {/* Right Side: Title and Dark Fluid Prose Text */}
 <div className="flex-1">
 <h3 className="text-base md:text-[17px] font-bold text-gray-900 mb-2.5 leading-snug">
 {item.title}
 </h3>
 <p className="text-[13.5px] md:text-[14.5px] text-gray-500 leading-relaxed font-normal">
 {item.content}
 </p>
 </div>
 </div>
 ))}
 </div>

 </div>
 </div>
 );
};

export default PublicHealthRequestsSection;