import React from "react";

export default function YoungPeopleHero() {
  return (
    <section className="w-full bg-[#F0F8FA] pt-16 pb-16 md:pt-24 md:pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Teal Accent Line and Category */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-6 h-[2px] bg-[#156E94]"></div>
          <span className="text-xs font-bold text-[#156E94] uppercase tracking-widest">
            FOR YOUNG PEOPLE
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-[56px] font-bold text-slate-900 leading-[1.15] tracking-tight">
          Worried about gambling? Yours, or someone else's?
        </h1>

        {/* Subtitle */}
        <p className="mt-8 text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
          Maybe someone at home gambles and things feel tense. Maybe your own betting or in-game spending is getting hard to control. Either way: none of this is your fault, and you're allowed to ask for help.
        </p>

        {/* Two Helpline Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Childline Card */}
          <div className="border border-[#156E94] rounded-xl p-6 sm:p-8 bg-transparent flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-slate-600 block mb-2">
                CHILDLINE
              </span>
              <a
                href="tel:08001111"
                className="text-3xl sm:text-4xl font-extrabold text-slate-900 block hover:text-[#156E94] transition-colors"
              >
                0800 1111
              </a>
              <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Free, any time of day or night. Confidential, and the call won't show up on the phone bill. You can also chat online at{" "}
                <a
                  href="https://www.childline.org.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-slate-900"
                >
                  childline.org.uk
                </a>
                .
              </p>
            </div>
          </div>

          {/* YoungMinds Card */}
          <div className="border border-slate-700/60 rounded-xl p-6 sm:p-8 bg-transparent flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-slate-600 block mb-2">
                YOUNGMINDS
              </span>
              <a
                href="sms:85258?body=YM"
                className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 block hover:text-[#156E94] transition-colors"
              >
                Text YM to 85258
              </a>
              <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Free, 24/7 text support if talking out loud feels too hard.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
