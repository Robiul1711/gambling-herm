import React from"react";
import { Link } from"react-router-dom";
import audioFile from"@/assets/audio/young-people-children.mp3"
const SafeguardingLeads = () => {
 return (

 <div className="max-w-5xl mx-auto section-padding-y">
 
 {/* Top Accent Line */}
 <div className="w-[45px] h-[3px] bg-[#3A86B9] mb-6 md:w-[55px]" />

 {/* Main Heading */}
 <h2 className="text-[26px] font-bold tracking-tight text-[#1E1E1E] leading-[1.2] mb-4 xxs:text-[32px] sm:text-[36px] md:text-[42px]">
 For parents, carers and safeguarding leads
 </h2>

 {/* Intro Paragraph */}
 <p className="text-[#5E6573] text-[15px] leading-relaxed mb-8 xs:text-base sm:text-[17px]">
 Children affected by a parent's gambling rarely volunteer the fact. The signs are often disguised (lost sleep, irritability, school issues, vague unease) and frequently misattributed to other causes.
 </p>

 {/* ================= AUDIO CALLOUT CARD ================= */}
 <div className="border-l-4 border-[#1B80C4] bg-[#F7F9FA] p-5 mb-10 sm:p-6 md:p-8">
 <p className="font-bold text-Primary mb-2">PhooenixFM, May 2026</p>
 <h4 className="text-[14px] font-bold text-[#1E1E1E] tracking-wider mb-4 leading-snug xs:text-xs sm:text-sm md:text-base">
 Young people and the 900,000 children experiencing measurable gambling harm in the UK, within a far larger group touched by someone else's gambling
 </h4>
 
 {/* Audio Player Element */}
 <div className="w-full max-w-[500px] mb-4">
 <audio src={audioFile} controls className="w-full h-10 accent-[#1B80C4]">
 Your browser does not support the audio element.
 </audio>
 </div>

 <p className="text-[11px] text-[#8E94A0] italic xs:text-xs">
 Clip: John Gilham, speaking from lived experience on Phoenix FM's 123 <span className="font-semibold">Friday</span> show, May 2026.
 </p>
 </div>

 {/* ================= ACTION LIST WITIH DIVIDERS ================= */}
 <div className="space-y-6 divide-y divide-gray-200/70 mb-12">
 
 <div className="pt-0 text-[14px] sm:text-[15px] md:text-base text-[#5E6573] leading-relaxed">
 <strong className="text-[#1E1E1E] font-semibold">Take a child’s worry seriously.</strong> If a child raises concern about a parent's behaviour around money, sport or screens, treat it like any other safeguarding disclosure.
 </div>

 <div className="pt-6 text-[14px] sm:text-[15px] md:text-base text-[#5E6573] leading-relaxed">
 <strong className="text-[#1E1E1E] font-semibold">Don't promise secrecy you can't keep.</strong> <span className="text-[#8E94A0]">But do explain calmly what happens next.</span>
 </div>

 <div className="pt-6 text-[14px] sm:text-[15px] md:text-base text-[#5E6573] leading-relaxed">
 <strong className="text-[#1E1E1E] font-semibold">Document and share appropriately.</strong> NSPCC safeguarding pathways apply; LADO referral if the concern reaches statutory thresholds.
 </div>

 <div className="pt-6 text-[14px] sm:text-[15px] md:text-base text-[#5E6573] leading-relaxed">
 <strong className="text-[#1E1E1E] font-semibold">Connect them to age-appropriate support.</strong> Childline, Big Deal, YoungMinds. School counsellors. The NHS gambling clinics can accept under-18 referrals
 </div>
 

 </div>

 {/* ================= TEACHER / PSHE BLUE BANNER ================= */}
 <div id="teachers" className="scroll-mt-24 border-l-4 border-[#1B80C4] bg-[#E8F5FD] p-5 sm:p-6 md:p-8">
 <h3 className="text-base font-bold text-[#1E1E1E] mb-2 sm:text-lg">
 If you're a teacher or PSHE lead
 </h3>
 <p className="text-[14px] sm:text-[15px] text-[#5E6573] leading-relaxed">
 See our dedicated{" "}
 <Link to="/professionals" className="underline text-[#1B80C4] hover:text-[#135E92] transition-colors font-medium">
 teachers & educators page
 </Link>{" "}
 for curriculum links, classroom resources, and how to spot and respond to gambling-related harm in 11–17-year-olds.
 </p>
 </div>

 </div>
 
 );
};

export default SafeguardingLeads;