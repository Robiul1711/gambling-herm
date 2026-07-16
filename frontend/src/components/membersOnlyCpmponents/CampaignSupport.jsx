import React from'react';

const CampaignSupport = () => {
 return (
 <section className="py-8 max-w-5xl mx-auto">
 <div className="border-l-4 border-[#00B5FF] bg-[#EBF8FF] text-gray-800 p-6 md:p-8 shadow-sm transition-all duration-300">
 
 {/* Callout Header Link / Label */}
 <h4 className="text-[#0076A8] font-bold text-sm md:text-base tracking-wide mb-4 hover:underline cursor-pointer">
 Why GHUK supports this campaign
 </h4>
 
 {/* Paragraph Description Contents */}
 <div className="space-y-4 text-xs md:text-sm lg:text-base leading-relaxed text-gray-500">
 <p>
 The Members Only Campaign is run by Sam Badcock from lived experience of UK land-based gambling 
 harm and the broken self-exclusion enforcement that followed. The campaign's proposals: PIN-protected 
 slot machines (a national identity-verification and self-exclusion app, and proper enforcement of existing 
 self-exclusion rights) are concrete, implementable, and exactly the kind of structural reform GHUK's tactics 
 analysis and policy positions imply.
 </p>
 
 <p>
 This is also the policy direction that follows logically from the public-health principle that protection should 
 be the population default, not an opt-in burden placed on the person already being harmed.
 </p>
 </div>

 </div>
 </section>
 );
};

export default CampaignSupport;