import React from "react";

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
    description:
      "A partner who has been harmed by another person's gambling has legal options. Free advice is available from Citizens Advice, Rights of Women (for women specifically), and family-law solicitors. See our page for family and friends.",
  },
];

const ProtectingYourMoney = () => {
  return (
    <section className=" py-10 md:py-16">
      <div className="max-w-4xl mx-auto px-4">
        {/* Top Line */}
        <div className="w-8 h-[2px] bg-[#0a9edb] mb-4"></div>

        {/* Heading */}
        <h2 className="text-[28px] xs:text-[34px] md:text-[48px] font-bold text-[#252223] leading-tight">
          Protecting your money
        </h2>

        {/* Description */}
        <p className="mt-5 text-[#73768B] text-base sm:text-lg leading-relaxed sm:leading-9 max-w-4xl">
          Debt and financial harm sit at the centre of most gambling harm. The
          earlier you get advice, the more options you have.
        </p>

        {/* Cards */}
    <div className="mt-8 md:mt-10 space-y-4 md:space-y-5">
  {items.map((item) => (
    <div
      key={item.id}
      className="border border-[#B6B8C5] rounded-2xl md:rounded-3xl bg-white p-5 sm:p-6 md:p-8"
    >
      <div className="flex gap-4 md:gap-5">
        {/* Number */}
        <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-[#0896D7] text-white flex items-center justify-center font-semibold text-sm shrink-0">
          {item.id}
        </div>

        {/* Content */}
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-[#252223] leading-tight">
            {item.title}
          </h3>

          <p className="mt-3 md:mt-5 text-[#73768B] text-[15px] sm:text-base md:text-[17px] leading-7 md:leading-9">
            {item.description}
          </p>
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