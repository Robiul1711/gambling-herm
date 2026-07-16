import React from"react";

const statsData = [
 {
 value:"75%",
 description:
"of those experiencing severe gambling harm (PGSI 8+) report having felt unable to talk to friends or family about their gambling.",
 highlighted: true,
 },
 {
 value:"64%",
 description:
"of those who have ever experienced a problem with gambling say they have not spoken to anyone about it.",
 highlighted: false,
 },
 {
 value:"10 years",
 description:
"median gap between when gambling first becomes problematic and when someone accesses the National Gambling Support Network. By the point of treatment, the mean PGSI is 19 / 27.",
 highlighted: false,
 },
];

const WhatTheDataShows = () => {
 return (
 <section
 id="data-shows"
 className="py-10 md:py-16 border-t border-b border-gray-200/60"
 >
 <div className="max-w-5xl mx-auto px-4">
 {/* Top Accent Line */}
 <div className="w-12 h-[3px] bg-[#17a9df] mb-6"></div>

 {/* Section Heading */}
 <h2 className="text-3xl md:text-4xl font-bold text-[#2d2d2d] mb-4 tracking-tight">
 What the data shows
 </h2>

 <p className="text-[#2d2d2d] text-[15px] md:text-base mb-8">
 Three figures, all from UK research, all consistent across years and
 studies.
 </p>

 {/* 3-Column Grid Layout */}
 <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
 {statsData.map((stat, idx) => (
 <div
 key={idx}
 className={`p-6 md:p-8 border min-h-[220px] flex flex-col justify-start transition-all bg-white ${
 stat.highlighted
 ?"border-[#17a9df]/70 shadow-sm"
 :"border-gray-200"
 }`}
 >
 {/* Stat Figure */}
 <div className="text-2xl font-bold text-[#2d2d2d] mb-4">
 {stat.value}
 </div>

 {/* Stat Label Description */}
 <p className="text-[#687076] text-sm leading-relaxed">
 {stat.description}
 </p>
 </div>
 ))}
 </div>

 {/* Footnote Sources Citation */}
 <p className="text-[#687076] text-xs md:text-sm">
 Sources: GambleAware-funded stigma scoping research (2023); NGSN
 treatment data.
 </p>
 </div>
 </section>
 );
};

export default WhatTheDataShows;
