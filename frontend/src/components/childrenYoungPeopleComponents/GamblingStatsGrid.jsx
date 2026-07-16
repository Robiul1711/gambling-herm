import React from'react';

const cardData = [
 {
 title:"Own Gambling, 2025",
 stat:"3.4%",
 description:"of 11–17-year-olds in Great Britain scored 2 or more on the DSM-IV-MR-J screen, indicating gambling-related harm or behavioural difficulties in the past year.",
 source:"Source: Gambling Commission, Young People & Gambling 2025.",
 isActive: true, // The first card has a distinctive blue/teal border
 },
 {
 title:"As affected others",
 stat:"~42%",
 description:"of children in Great Britain may be affected by someone else's gambling (PGSI 1+): parents, siblings, and others close to them. Around 900,000 are modelled as experiencing measurable harm.",
 source:"Source: GambleAware Modelling, YouGov 2024.",
 isActive: false,
 },
 {
 title:"In the household",
 stat:"29%",
 description:"of 11–17-year-olds have seen a family member they live with gamble. Among them, 12% report losing sleep due to worry and 7% report increased arguments or tension at home in the past year.",
 source:"Source: Gambling Commission, Young People & Gambling 2025.",
 isActive: false,
 },
];

export default function GamblingStatsGrid() {
 return (
 <section className="w-full max-w-7xl mx-auto bg-white dark:bg-zinc-950">
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
 {cardData.map((card, index) => (
 <div
 key={index}
 className={`flex flex-col justify-between hover:shadow-sm p-4 sm:p-8 border bg-white transition-all duration-200 hover:border-[#4084A1]`}
 >
 {/* Top Section */}
 <div>
 {/* Header with blue horizontal accent line */}
 <div className="flex items-center gap-3 mb-6">
 <span className="w-6 h-[2px] bg-[#226787] inline-block" />
 <h3 className="text-[#1A526E] font-semibold text-sm sm:text-lg tracking-wide">
 {card.title}
 </h3>
 </div>

 {/* Stat Number */}
 <h2 className="text-3xl font-bold text-gray-900 mb-5">
 {card.stat}
 </h2>

 {/* Description */}
 <p className="text-sm sm:text-lg leading-relaxed text-gray-500 font-normal mb-4">
 {card.description}
 </p>
 </div>

 {/* Bottom Section: Fixed Source Text */}
 <p className="text-sm leading-normal text-gray-400 font-normal mt-auto">
 {card.source}
 </p>
 </div>
 ))}
 </div>
 </section>
 );
}