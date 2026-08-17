import React from "react";

const tips = [
  {
    prefix: "Separate finances where you can.",
    text: " Speak to your bank about your options. Most major UK banks have specialists trained on gambling-related financial harm.",
  },
  {
    prefix: "Don't co-sign loans or guarantees for",
    text: " someone whose gambling you're worried about, even if they promise this time will be different.",
  },
  {
    prefix: "Don't lend money you can't afford to lose.",
    text: " Loans to people experiencing gambling harm are very often not repaid, and they do not usually help recovery.",
  },
  {
    prefix: "Get free debt advice early.",
    text: " StepChange (0800 138 1111), National Debtline (0808 808 4000), and Citizens Advice. They will not lecture you. They will help.",
  },
  {
    prefix: "Check joint accounts and joint credit.",
    text: " If you suspect funds have been moved, get bank statements early and get advice on what to do next. Time matters.",
  },
  {
    prefix: "If you fear losing your home,",
    text: " contact Shelter (0808 800 4444) for free, confidential housing advice.",
  },
];

export default function ProtectFinancially() {
  return (
    <section className="w-full py-12 md:py-16 bg-[#222120] text-white border-b border-gray-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-white leading-tight tracking-tight">
            Protect yourself financially
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
            It is not selfish to protect yourself. It is the foundation of everything else,
            including, if it comes to it, your ability to support them.
          </p>
        </div>

        {/* Tips List with dividers */}
        <div className="divide-y divide-white/10 border-t border-b border-white/10">
          {tips.map((tip, index) => (
            <div
              key={index}
              className="py-5 text-sm sm:text-base leading-relaxed"
            >
              <strong className="text-white font-bold">{tip.prefix}</strong>
              <span className="text-gray-300">{tip.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
