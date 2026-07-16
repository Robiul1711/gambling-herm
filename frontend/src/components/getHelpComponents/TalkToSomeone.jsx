import React from"react";

const TalkToSomeone = () => {
 const cards = [
 {
 title:"National Gambling Helpline",
 number:"0808 8020 133",
 description:
"Free. Confidential. 24 hours a day, every day. Run by GamCare. Web chat also available. Supports affected others as well as people who gamble.",
 },
 {
 title:"Samaritans",
 number:"116 123",
 description:
"For emotional crisis of any kind. Free, 24/7. You don't have to be suicidal to call.",
 },
 ];

 return (

 <div className="max-w-5xl mx-auto">
 {/* Heading */}
 <div className="text-center">
 <h2 className="text-[28px] xs:text-[34px] md:text-[48px] font-bold text-[#222]">
 Talk to someone today
 </h2>

 <p className="mt-3 text-sm md:text-base text-[#5f6472]">
 Three numbers. All free, all confidential. None of them require
 you to be in crisis.
 </p>
 </div>

 {/* Cards */}
 <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
 {cards.map((card, index) => (
 <div
 key={index}
 className="border border-[#7f7f7f] bg-white p-5 sm:p-8"
 >
 <h3 className="text-[15px] text-[#222]">{card.title}</h3>

 <div className="mt-4 text-[24px] xs:text-[28px] sm:text-[32px] font-bold text-[#222] leading-none">
 {card.number}
 </div>

 <p className="mt-6 text-[15px] leading-8 text-[#70798c]">
 {card.description}
 </p>
 </div>
 ))}
 </div>

 {/* Bottom text */}
 <p className="mt-8 text-sm text-[#222]">
 If you or someone you love is in immediate danger, call 999.
 </p>
 </div>
 
 );
};

export default TalkToSomeone;