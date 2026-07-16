import React from'react';
import { Link } from'react-router-dom';

const PublicHealthOffersSection = () => {
 const offers = [
 {
 id: 1,
 title:"Local burden & needs-assessment support",
 content: (
 <>
 We can supply unpublished GHUK modelling of local-authority-level harm prevalence (adults and CYP), 
 affected-others estimation, and product-risk profile. Useful for JSNAs, gambling-harm-needs assessments, 
 and ICB strategic planning.
 </>
 ),
 },
 {
 id: 2,
 title:"MECC and training content",
 content: (
 <>
 Free MECC-on-gambling resources for primary care networks, community pharmacy teams, and NHS Talking 
 Therapies services. Adapted to local pathways. See{" "}
 <Link to="/professionals/healthcare" className="text-[#0082c3] underline font-medium hover:text-[#006699]">
 our healthcare professionals page for detail.
 </Link>
 </>
 ),
 },
 {
 id: 3,
 title:"Briefings for elected members and ICB boards",
 content: (
 <>
 10- and 30-minute briefings on local gambling-harm burden, what the prevention paradox means for local 
 commissioning, and the upstream-vs-treatment trade-off.
 </>
 ),
 },
 {
 id: 4,
 title:"Lived-experience input",
 content: (
 <>
 Speakers, consultation participants, co-production partners. All sourced through our lived-experience network 
 and properly compensated.
 </>
 ),
 },
 {
 id: 5,
 title:"Research collaboration",
 content: (
 <>
 Health-economics, epidemiology, behavioural-science, and qualitative research partnerships. Independent of 
 industry funding. See our researchers page.
 </>
 ),
 },
 ];

 return (
 <div className="w-full max-w-6xl mx-auto section-padding-y bg-white text-gray-800">
 
 {/* Top Accent Blue Ribbon */}
 <div className="w-12 h-[3px] bg-[#0082c3] mb-4"></div>
 
 {/* Component Title & Subtitle */}
 <div className="mb-8">
 <h2 className="text-3xl md:text-[36px] font-bold text-gray-900 tracking-tight mb-2">
 What we offer public-health teams
 </h2>
 <p className="text-sm md:text-[15px] text-gray-400 font-normal">
 Practical, free, and adapted to local context.
 </p>
 </div>

 {/* Row Containers */}
 <div className="flex flex-col gap-5">
 {offers.map((item) => (
 <div
 key={item.id}
 className="flex flex-col sm:flex-row items-start border border-gray-300 p-6 md:p-8 gap-4 md:gap-6 bg-white shadow-sm"
 >
 {/* Left Column: Rounded Number Badge */}
 <div className="flex-shrink-0">
 <div className="w-9 h-9 md:w-10 md:h-10 bg-[#0a6b94] flex items-center justify-center text-white font-bold text-sm md:text-base">
 {item.id}
 </div>
 </div>

 {/* Right Column: Title and Content Block */}
 <div className="flex-1">
 <h3 className="text-lg md:text-[19px] font-bold text-gray-800 mb-3 leading-snug">
 {item.title}
 </h3>
 <p className="text-[14px] md:text-[15px] text-gray-400 leading-relaxed font-normal">
 {item.content}
 </p>
 </div>
 </div>
 ))}
 </div>
 </div>
 );
};

export default PublicHealthOffersSection;