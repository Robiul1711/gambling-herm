import React from "react";

export default function FinancialAdvice() {
  const cards = [
    {
      title: "Citizens Advice Thurrock",
      description:
        "Free, confidential, and impartial support with money, debt, benefits, housing, employment and more.",
      buttonText: "Find local Citizens Advice",
      link: "https://www.citizensadvicethurrock.org.uk/",
    },
    {
      title: "StepChange",
      description:
        "Personalised, comprehensive, and completely free debt support. Helps you negotiate with creditors and set up affordable repayment plans.",
      buttonText: "Visit StepChange",
      link: "https://www.stepchange.org.uk/",
    },
    {
      title: "National Debtline",
      description:
        "Free, impartial debt advice from a trusted UK charity. If you're struggling with debt, they're here to help.",
      buttonText: "Visit National Debtline",
      link: "https://www.nationaldebtline.org/",
    },
  ];

  return (
    <section className="w-full py-12 md:py-16 bg-[#fafafa] border-t border-gray-200/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-[#1f2937]">
        {/* Header */}
        <header className="mb-10">
          <div className="w-12 h-[3px] bg-[#156E94] mb-4"></div>
          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold tracking-tight text-gray-900 mb-4 leading-tight">
            Financial advice
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
            Debt and financial harm sit at the centre of most gambling harm. All
            of these services are free, confidential, and non-judgemental. The
            earlier you get advice, the more options you have.
          </p>
        </header>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200/90  p-6 sm:p-8 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow duration-300 min-h-[280px]"
            >
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 leading-tight tracking-tight">
                  {card.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-6 font-normal">
                  {card.description}
                </p>
              </div>
              <div className="mt-auto">
                <a
                  href={card.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#111827] hover:bg-[#1f2937] text-white font-semibold text-sm sm:text-base py-3 px-5  transition-colors shadow-xs"
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
