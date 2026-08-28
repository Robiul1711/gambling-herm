import React from "react";
import { Link } from "react-router-dom";

const items = [
  {
    id: 1,
    title: "Speak to your bank",
    description: (
      <>
        All major UK banks offer a gambling block on debit cards. It's free,
        takes a minute, and most banks add a 48-hour cooling-off period if you
        try to remove it. Useful even if you don't think you'll relapse.
      </>
    ),
  },
  {
    id: 2,
    title: "Get free debt advice",
    description: (
      <>
        <strong>StepChange</strong> (0800 138 1111),{" "}
        <strong>National Debtline</strong> (0808 808 4000) and{" "}
        <strong>Citizens Advice</strong> all provide free, confidential,
        regulated debt advice. They will not lecture you. They will help you
        negotiate with creditors, set up affordable repayment plans, and explain
        options like Debt Relief Orders or Breathing Space.
      </>
    ),
  },
  {
    id: 3,
    title: "Know your protections",
    description: (
      <>
        It has been illegal for UK gambling operators to accept credit cards
        since 2020: a site taking your credit card is not operating legally in
        the UK. And if joint money or trust has been lost, free advice is
        available from <strong>Citizens Advice</strong>,{" "}
        <strong>Rights of Women</strong> (for women specifically) and family-law
        solicitors. See{" "}
        <Link
          to="/get-help/family-friends"
          className="underline text-gray-900 hover:text-[#0896D7] transition-colors duration-200"
        >
          our page for family and friends
        </Link>
        .
      </>
    ),
  },
];

const ProtectingYourMoney = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Top Line */}
        <div className="w-12 h-[3px] bg-[#0092D0] mb-5"></div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-gray-900 leading-tight tracking-tight mb-4">
          Get financial help
        </h2>

        {/* Description */}
        <p className="text-base sm:text-lg text-gray-600 font-normal leading-relaxed mb-8">
          Gambling harm often becomes a money problem long before people seek
          help. Free debt advice, bank blocks and legal protections are
          available, and the earlier you use them, the more options you have.
        </p>

        {/* Cards */}
        <div className="space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="border border-gray-200/90  bg-white p-6 sm:p-8 shadow-xs hover:shadow-md transition-shadow"
            >
              <div className="flex gap-4 md:gap-5 items-start">
                {/* Number */}
                <div className="w-9 h-9 bg-[#0092D0] text-white flex items-center justify-center font-bold text-sm rounded-full shrink-0 mt-0.5 shadow-xs">
                  {item.id}
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 leading-snug mb-2">
                    {item.title}
                  </h3>

                  <div className="text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
                    {item.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProtectingYourMoney;
