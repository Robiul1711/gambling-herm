import React from "react";
import { Link } from "react-router-dom";

const items = [
  {
    id: 1,
    title: "Speak to your bank",
    description:
      "All major UK banks offer a gambling block on debit cards. It's free, takes a minute, and most banks add a 48-hour cooling-off period if you try to remove it. Useful even if you don't think you'll relapse.",
  },
  {
    id: 2,
    title: "Get free debt advice",
    description:
      "StepChange (0800 138 1111), National Debtline (0808 808 4000) and Citizens Advice all provide free, confidential, regulated debt advice. They will not lecture you. They will help you negotiate with creditors, set up affordable repayment plans, and explain options like Debt Relief Orders or Breathing Space.",
  },
  {
    id: 3,
    title: "Stop using credit to gamble",
    description:
      "It has been illegal for UK gambling operators to accept credit cards since 2020. If a site is accepting your credit card, it is not legally licensed in the UK, and you should not be using it.",
  },
  {
    id: 4,
    title: "If joint money or trust has been lost",
    description: (
      <>
        A partner who has been harmed by another person's gambling has legal
        options. Free advice is available from Citizens Advice, Rights of Women
        (for women specifically), and family-law solicitors.{" "}
        <Link
          to="/get-help/family-friends"
          className="underline text-[#0896D7] hover:text-[#0672a3] transition-colors duration-200"
        >
          See our page for family and friends.
        </Link>
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
          Protecting your money
        </h2>

        {/* Description */}
        <p className="text-base sm:text-lg text-gray-600 font-normal leading-relaxed mb-8">
          Debt and financial harm sit at the centre of most gambling harm. The
          earlier you get advice, the more options you have.
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
