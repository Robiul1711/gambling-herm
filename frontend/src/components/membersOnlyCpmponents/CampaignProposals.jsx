import React from'react';

const CampaignProposals = () => {
 // Array matrix keeping proposal content structured, clean, and modular
 const proposals = [
 {
 id: 1,
 tag:"Proposal 1",
 title:"PIN-protected slot machines",
 description:"Every slot machine in a UK Adult Gaming Centre or licensed venue should require the user to enter a PIN tied to a verified identity before play. No PIN, no play. Self-excluded people are automatically refused at the machine, not at the door."
 },
 {
 id: 2,
 tag:"Proposal 2",
 title:"National App (V1 & V2)",
 description:"A national identity-verification and self-exclusion app, with three access levels: Level One, user-facing self-exclusion and access management; Level Two, enhanced controls and enforcement; Provider Access, operator-facing verification at the point of play."
 },
 {
 id: 3,
 tag:"Proposal 3",
 title:"Self-access & self-exclude",
 description:"Restructure UK land-based gambling around active self-access for those who choose to gamble, with self-exclusion as the easy, enforceable, default-binding state for those who don't. The proof burden moves from the customer onto the operator and the system."
 }
 ];

 return (
 <section className="bg-white text-gray-800">
 <div className="">
 
 {/* Top Centered Section Header Badge */}
 <div className="flex flex-col items-center justify-center text-center mb-12">
 <div className="w-12 h-[3px] bg-[#3FABD4] mb-3" />
 <span className="text-[#00A3E0] uppercase text-xs md:text-sm font-semibold tracking-wider">
 What We Believe
 </span>
 <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-3 tracking-tight">
 The campaign's three proposals
 </h2>
 <p className="text-gray-500 text-sm md:text-base mt-3 max-w-2xl">
 Concrete, technology-feasible reforms that would close the enforcement gap.
 </p>
 </div>

 {/* 3-Column Proposal Cards Grid Layout */}
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
 {proposals.map((proposal) => (
 <div 
 key={proposal.id} 
 className="border border-gray-200 p-6 md:p-8 bg-white shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
 >
 {/* Card Body Details */}
 <div>
 {/* Proposal Sub-tag Top Accenter */}
 <div className="flex items-center gap-2 mb-4">
 <div className="w-6 h-[2px] bg-[#3FABD4]" />
 <span className="text-[#00A3E0] font-bold text-xs md:text-sm tracking-wide">
 {proposal.tag}
 </span>
 </div>

 {/* Proposal Title */}
 <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 tracking-tight leading-snug">
 {proposal.title}
 </h3>

 {/* Proposal Description Paragraph Content */}
 <p className="text-gray-500 text-xs md:text-sm leading-relaxed mb-8">
 {proposal.description}
 </p>
 </div>

 {/* Action Button Container */}
 <div>
 <button className="inline-flex items-center justify-center bg-[#166B94] hover:bg-[#0076A8] text-white font-medium text-xs md:text-sm px-5 py-3 transition-all duration-150 group">
 Proposal Details
 <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-150">
 &rarr;
 </span>
 </button>
 </div>

 </div>
 ))}
 </div>

 </div>
 </section>
 );
};

export default CampaignProposals;