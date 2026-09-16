import React from "react";

export default function OwnGamblingSection() {
  return (
    <section className="w-full bg-white py-16 md:py-20 border-t border-slate-200/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Teal Accent Line */}
        <div className="w-8 h-[3px] bg-[#156E94] mb-4"></div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-6">
          If it's about your own gambling
        </h2>

        {/* Introduction */}
        <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-normal mb-10">
          Betting with friends, scratchcards, casino-style apps, loot boxes and card packs in games: if spending on any of these feels hard to stop, that counts. Lots of young people are in the same place, and you won't be told off for asking for help.
        </p>

        {/* Resource Items */}
        <div className="space-y-4 text-sm sm:text-base text-slate-800 leading-relaxed">
          {/* Item 1 */}
          <div className="pt-3 border-t border-dashed border-slate-300">
            <p>
              <strong className="font-bold text-slate-900">Tell an adult you trust.</strong>{" "}
              A parent, a teacher, a coach, a friend's parent. Saying it out loud is the step that changes things.
            </p>
          </div>

          {/* Item 2 */}
          <div className="pt-3 border-t border-dashed border-slate-300">
            <p>
              <strong className="font-bold text-slate-900">National Gambling Helpline, 0808 8020 133.</strong>{" "}
              Free, confidential, 24/7, phone or live chat at{" "}
              <a
                href="https://www.gamcare.org.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-slate-950"
              >
                gamcare.org.uk
              </a>
              . They support young people too.
            </p>
          </div>

          {/* Item 4 */}
          <div className="pt-3 border-t border-dashed border-slate-300">
            <p>
              <strong className="font-bold text-slate-900">NHS National Gambling Clinic.</strong>{" "}
              Treats young people aged 13 to 18 anywhere in England, and you can refer yourself: call{" "}
              <a href="tel:02073817722" className="underline hover:text-slate-950">
                020 7381 7722
              </a>{" "}
              or email{" "}
              <a href="mailto:gambling.cnwl@nhs.net" className="underline hover:text-slate-950">
                gambling.cnwl@nhs.net
              </a>
              .
            </p>
          </div>

          {/* Item 5 */}
          <div className="pt-3 border-t border-dashed border-slate-300">
            <p>
              <strong className="font-bold text-slate-900">If in-game spending is the problem,</strong>{" "}
              tell whoever pays for the phone or console. Spending controls exist, and telling them is the quickest way to get the spending stopped.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
