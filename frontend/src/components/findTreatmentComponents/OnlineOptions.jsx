import React from"react";

const options = [
 {
 title:"National Gambling Helpline & live chat",
 description:
"Phone (0808 8020 133) and web chat at gamcare.org.uk. Free, confidential, 24/7. Web chat is fully text-based if you don't want to speak aloud.",
 },
 {
 title:"GamCare structured treatment",
 description:
"GamCare delivers online structured treatment (one-to-one and group) free of charge, with relatively short wait times. Available UK-wide.",
 },
 {
 title:"NHS Talking Therapies (England)",
 description:
"Self-referral for CBT and other talking therapies for anxiety, depression and stress that sit alongside gambling harm. No GP needed. Online or in-person depending on local provision.",
 },
 {
 title:"NHS Northern Gambling Service, online",
 description:
"The Northern Gambling Service accepts referrals UK-wide and offers a substantial proportion of its treatment online, including for people in regions without local NHS provision.",
 },
 {
 title:"National Gambling Helpline & live chat",
 description:
"Phone (0808 8020 133) and web chat at gamcare.org.uk. Free, confidential, 24/7. Web chat is fully text-based if you don't want to speak aloud.",
 },
 {
 title:"National Gambling Helpline & live chat",
 description:
"Phone (0808 8020 133) and web chat at gamcare.org.uk. Free, confidential, 24/7. Web chat is fully text-based if you don't want to speak aloud.",
 },
 {
 title:"Gamblers Anonymous & SMART Recovery online groups",
 description:
"Multiple meetings per day, anonymous, free. Gamblers Anonymous runs 12-step meetings; SMART Recovery runs secular, evidence-based groups. Both run gambling-specific UK online groups.",
 },
 {
 title:"Blocking tools. GAMSTOP & Gamban",
 description:
"GAMSTOP blocks all UK-licensed gambling sites for 6 months / 1 year / 5 years; about 5 minutes to register at gamstop.co.uk. Gamban blocks unlicensed sites at device level; often free via GamCare.",
 },
];

export default function OnlineOptions() {
 return (
 <section
 id="online-options"
 className="scroll-mt-24 w-full py-16 md:py-24 border-b border-gray-100 bg-white"
 >
 <div className="section-padding-x">
 {/* Header */}
 <div className="text-center mb-12">
 <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-bold text-gray-900 leading-tight">
 Online options, available from anywhere
 </h2>
 <p className="mt-4 text-[15px] sm:text-base text-[#5f6472] max-w-3xl mx-auto leading-relaxed">
 If in-person services aren't right for you (for time, geography,
 anonymity, or other reasons) the picture is much fuller than it was
 even three years ago.
 </p>
 </div>

 {/* Options Grid */}
 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
 {options.map((item, index) => (
 <div
 key={index}
 className="border border-[#b2d8ec] bg-white p-6 sm:p-8 hover:shadow-md transition-shadow duration-300 flex flex-col justify-start"
 >
 <h3 className="text-lg font-bold text-[#1a1a1a] mb-3 leading-snug">
 {item.title}
 </h3>
 <p className="text-[14px] sm:text-[15px] leading-relaxed text-[#5f6472]">
 {item.description}
 </p>
 </div>
 ))}
 </div>
 </div>
 </section>
 );
}
