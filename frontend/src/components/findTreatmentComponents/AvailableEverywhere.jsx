import React from "react";

const hotlines = [
  {
    title: "National Gambling Helpline",
    number: "0808 8020 133",
    description:
      "Free, confidential, 24/7. Run by GamCare. Supports people who gamble and people harmed by someone else’s gambling. Web chat at gamcare.org.uk.",
  },
  {
    title: "Samaritans",
    number: "116 123",
    description:
      "For emotional crisis, including suicidal feelings. Free, 24/7, any phone. You don't have to be in immediate crisis to call.",
  },
];

export default function AvailableEverywhere() {
  return (
    <section
      id="available-everywhere"
      className="scroll-mt-24 w-full py-16 md:py-24 border-b border-gray-100"
    >
      <div className="section-padding-x">
        <div className="max-w-5xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-[28px] sm:text-[36px] md:text-[48px] font-bold text-[#1a1a1a] leading-tight">
              Available everywhere in the UK, today
            </h2>
            <p className="mt-4 text-[15px] sm:text-base text-[#5f6472] max-w-xl mx-auto leading-relaxed">
              If you take only one step from this page, take one of these.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {hotlines.map((card, index) => (
              <div
                key={index}
                className="border border-gray-200 bg-white p-5 sm:p-8 hover:shadow-md transition-shadow duration-300"
              >
                <p className="text-[13px] sm:text-[14px] text-[#666] font-medium mb-3">
                  {card.title}
                </p>
                <div className="text-[28px] sm:text-[36px] font-bold text-[#1a1a1a] leading-none mb-4">
                  {card.number}
                </div>
                <p className="text-[14px] sm:text-[15px] leading-7 text-[#70798c]">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          {/* Footer note */}
          <p className="mt-8 text-center text-[13px] sm:text-sm text-[#555]">
            For immediate danger to life, call 999.
          </p>
        </div>
      </div>
    </section>
  );
}
