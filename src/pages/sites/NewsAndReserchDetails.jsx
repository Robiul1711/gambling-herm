import React from "react";

// Mock data for the sidebar list links
const RELATED_LINKS = [
  {
    id: 1,
    text: "Affected Others: The 6–10× Multiplier And Why It Still Understates The Problem",
    active: true,
  },
  {
    id: 2,
    text: "Affected others: the 6–10× multiplier and why it still understates the problem",
    active: false,
  },
  {
    id: 3,
    text: "Affected others: the 6–10× multiplier and why it still understates the problem",
    active: false,
  },
  {
    id: 4,
    text: "Affected others: the 6–10× multiplier and why it still understates the problem",
    active: false,
  },
  {
    id: 5,
    text: "Affected others: the 6–10× multiplier and why it still understates the problem",
    active: false,
  },
];

const NewsAndReserchDetails = () => {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#006699]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        {/* Header Section */}
        <header className="text-center max-w-5xl mx-auto mb-10 md:mb-14">
          <h1 className="text-2xl sm:text-4xl md:text-[44px] font-bold text-slate-800 tracking-tight leading-tight mb-4">
            The PGSI-8 threshold and why the UK's headline gambling-harm figure
            understates harm
          </h1>
          <p className="text-slate-500 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
            A short technical note on how the conventional PGSI cut-off has
            produced a thirty-year underestimate of the UK gambling-harm
            population, and what fuller measurement looks like.
          </p>
        </header>

        {/* Featured Image Banner */}
        <div className="w-full mb-12 md:mb-16">
          <div className="aspect-[16/8] md:aspect-[21/9] w-full relative overflow-hidden rounded-[24px] md:rounded-[32px] shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop"
              alt="Presentation in a lecture hall"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Asymmetric Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-16 items-start">
          {/* Left Sidebar Links (4 Cols on Large Screens) */}
          <aside className="lg:col-span-4 space-y-4 border-l border-slate-100 lg:sticky lg:top-6">
            {RELATED_LINKS.map((link) => (
              <div
                key={link.id}
                className={`pl-4 border-l-2 -ml-[1.5px] transition-all duration-200 cursor-pointer group
                  ${
                    link.active
                      ? "border-slate-800 font-bold text-slate-800"
                      : "border-transparent text-slate-400 hover:text-slate-600 font-medium"
                  }`}
              >
                <p className="text-xs sm:text-sm leading-snug group-hover:underline">
                  {link.text}
                </p>
              </div>
            ))}
          </aside>

          {/* Right Detailed Prose Content (8 Cols on Large Screens) */}
          <main className="lg:col-span-8 space-y-6 text-slate-500 text-xs sm:text-sm leading-relaxed font-normal tracking-wide">
            <p>
              This statement is saying that the commonly used PGSI cut-off (a
              scoring system used to identify "problem gamblers") is too strict
              and limited, which has likely caused researchers and policymakers
              to underestimate the real scale of gambling harm in the UK for
              around 30 years. The PGSI mainly counts only people who score
              above a certain threshold as experiencing gambling problems, but
              in reality many people who score below that level may still suffer
              from serious harm such as financial stress, mental health issues,
              relationship breakdown, or loss of control over gambling behavior.
            </p>
            <p>
              Because these "lower-scoring but still harmed" individuals are not
              fully included in official estimates, the total number of people
              affected by gambling harm has been significantly underreported.
              The statement also suggests that a more accurate or "fuller"
              measurement approach would not rely only on a strict cut-off
              score, but instead would include a broader range of harm levels
              and recognize that gambling harm exists on a spectrum rather than
              only in extreme cases.
            </p>
            <p>
              This statement is saying that the commonly used PGSI cut-off (a
              scoring system used to identify "problem gamblers") is too strict
              and limited, which has likely caused researchers and policymakers
              to underestimate the real scale of gambling harm in the UK for
              around 30 years. The PGSI mainly counts only people who score
              above a certain threshold as experiencing gambling problems, but
              in reality many people who score below that level may still suffer
              from serious harm such as financial stress, mental health issues,
              relationship breakdown, or loss of control over gambling behavior.
            </p>
            <p>
              Because these "lower-scoring but still harmed" individuals are not
              fully included in official estimates, the total number of people
              affected by gambling harm has been significantly underreported.
              The statement also suggests that a more accurate or "fuller"
              measurement approach would not rely only on a strict cut-off
              score, but instead would include a Broader range of harm levels
              and recognize that gambling harm exists on a spectrum rather than
              only in extreme cases.
            </p>
          </main>
        </div>
      </div>
    </div>
  );
};

export default NewsAndReserchDetails;
