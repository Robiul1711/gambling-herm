import React from"react";

export default function FinancialAdvice() {
 const cards = [
 {
 title:"Citizens Advice Thurrock",
 description:"Free, confidential, and impartial support with money, debt, benefits, housing, employment and more.",
 buttonText:"Find local Citizens Advice",
 link:"https://www.citizensadvicethurrock.org.uk/"
 },
 {
 title:"StepChange",
 description:"Personalised, comprehensive, and completely free debt support. Helps you negotiate with creditors and set up affordable repayment plans.",
 buttonText:"Visit StepChange",
 link:"https://www.stepchange.org.uk/"
 },
 {
 title:"National Debtline",
 description:"Free, impartial debt advice from a trusted UK charity. If you're struggling with debt, they're here to help.",
 buttonText:"Visit National Debtline",
 link:"https://www.nationaldebtline.org/"
 }
 ];

 return (
 <section className="w-full py-12 md:py-16 bg-[#fafafa] border-t border-gray-200/40">
 <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-[#1f2937]">
 {/* Header */}
 <header className="mb-10">
 <div className="w-12 h-1 bg-[#156E94] mb-4"></div> {/* Teal accent bar */}
 <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">
 Financial advice
 </h2>
 <p className="text-gray-600 text-base md:text-lg leading-relaxed">
 Debt and financial harm sit at the centre of most gambling harm. All of these
 services are free, confidential, and non-judgemental. The earlier you get
 advice, the more options you have.
 </p>
 </header>

 {/* Cards Grid */}
 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
 {cards.map((card, index) => (
 <div
 key={index}
 className="bg-white border border-gray-150/80 p-5 lg:p-8 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow duration-300 min-h-[300px]"
 >
 <div>
 <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">{card.title}</h3>
 <p className="text-gray-600 leading-relaxed text-[15px] mb-6">{card.description}</p>
 </div>
 <div className="mt-auto">
 <a
 href={card.link}
 target="_blank"
 rel="noopener noreferrer"
 className="inline-flex items-center gap-2 bg-[#111827] hover:bg-[#1f2937] text-white font-semibold text-sm py-3 px-5 transition-colors"
 >
 {card.buttonText}
 <span>&rarr;</span>
 </a>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>
 );
}
