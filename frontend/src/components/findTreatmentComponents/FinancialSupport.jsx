import React from "react";

const resources = [
  {
    name: "StepChange",
    text: "0800 138 1111. Free, regulated, UK-wide debt advice.",
  },
  {
    name: "National Debtline",
    text: "0808 808 4000. Free, confidential debt advice from Money Advice Trust.",
  },
  {
    name: "Citizens Advice",
    text: "in-person, phone, and online help with debt, housing, benefits and money problems.",
  },
  {
    name: "Shelter",
    text: "0808 800 4444. Free housing advice if you fear losing your home.",
  },
  {
    name: "Your Bank",
    text: "all major UK banks now offer a one-tap gambling block on debit cards and many have specialist financial-harm teams.",
  },
  {
    name: "Breathing Space",
    text: "a government scheme that pauses creditor enforcement for 60 days while you get debt advice. Free; available via StepChange and Citizens Advice.",
  },
];

export default function FinancialSupport() {
  return (
    <section
      id="financial-support"
      className="scroll-mt-24 w-full py-16 md:py-24 bg-[#262524] text-white border-b border-gray-800"
    >
      <div className="section-padding-x">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-10">
            <h2 className="text-[28px] sm:text-[36px] md:text-[42px] font-bold text-white leading-tight">
              Financial support, available alongside treatment
            </h2>
            <p className="mt-4 text-[15px] sm:text-base text-gray-300 max-w-3xl leading-relaxed">
              Money problems are the centre of gravity of most gambling harm. The
              earlier you get advice, the more options you have.
            </p>
          </div>

          {/* List of Resources */}
          <div className="divide-y divide-white/10 border-t border-b border-white/10">
            {resources.map((item, index) => (
              <div
                key={index}
                className="py-6 text-[15px] sm:text-base leading-relaxed"
              >
                <strong className="text-white font-bold">{item.name}</strong>
                <span className="text-gray-300">, {item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
