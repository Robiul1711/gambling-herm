import React from "react";

const UrgentHelpContent = () => {
  return (
    <div className="w-full">
      {/* 1. Header Banner */}
      <div className="bg-[#FFF0F0] border-b border-red-200 text-center py-12 md:py-16 px-4 sm:px-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
          If you're in crisis right now.
        </h1>
        <p className="text-gray-600 mt-4 text-base sm:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
          You are not alone, and this is survivable. Here is what to do, in
          order.
        </p>
      </div>

      {/* 2. Urgent Cards Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 md:py-16 flex flex-col gap-6 md:gap-8">
        {/* Card 1: Immediate Danger */}
        <div className="border-2 border-red-500  p-6 sm:p-8 bg-white shadow-xs hover:shadow-md transition-shadow">
          <span className="text-xs font-bold text-red-600 uppercase tracking-widest block mb-2">
            1 · If anyone is in immediate danger
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-4 select-all break-words">
            999
          </h2>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-normal">
            Call <strong className="text-gray-900 font-bold">999</strong>. This
            includes if you're worried that someone (you or another person) is
            about to attempt suicide, has taken an overdose, or is at risk of
            serious self-harm right now. Ambulance and police can be there fast.
          </p>
        </div>

        {/* Card 2: Thoughts of Suicide */}
        <div className="border-2 border-red-500  p-6 sm:p-8 bg-white shadow-xs hover:shadow-md transition-shadow">
          <span className="text-xs font-bold text-red-600 uppercase tracking-widest block mb-2">
            2 · Thoughts of suicide
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-4 select-all break-words">
            116 123
          </h2>
          <div className="space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed font-normal">
            <p>
              <strong className="text-gray-900 font-bold">Samaritans.</strong>{" "}
              Free, from any phone, 24 hours a day, every day. You don't have to
              be in active crisis to call. You don't have to know what to say.
              You can just call and breathe.
            </p>
            <p>
              <strong className="text-gray-900 font-bold">
                Text SHOUT to 85258
              </strong>
              , free, 24/7, if you can't speak aloud. Run by Shout Crisis Text
              Line.
            </p>
            <p>
              <strong className="text-gray-900 font-bold">
                Papyrus HOPELINE247
              </strong>{" "}
              (for under-35s) call{" "}
              <a
                href="tel:08080684141"
                className="font-bold text-gray-900 hover:text-Primary underline"
              >
                0808 068 4141
              </a>
              , text <strong className="text-gray-900 font-bold">88247</strong>,
              or email{" "}
              <a
                href="mailto:pat@papyrus-uk.org"
                className="font-bold text-gray-900 hover:text-Primary underline"
              >
                pat@papyrus-uk.org
              </a>
              .
            </p>
          </div>
        </div>

        {/* Card 3: Losing Control Tonight */}
        <div className="border border-gray-300  p-6 sm:p-8 bg-white shadow-xs hover:shadow-md transition-shadow">
          <span className="text-xs font-bold text-gray-600 uppercase tracking-widest block mb-2">
            3 · If you're losing control tonight
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-4 select-all break-words leading-none">
            0808 8020 133
          </h2>
          <div className="space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed font-normal">
            <p>
              <strong className="text-gray-900 font-bold">
                National Gambling Helpline.
              </strong>{" "}
              Free, confidential, 24/7. Run by GamCare. You will speak to a
              trained adviser whose job is to help you, not to judge you.
            </p>
            <p>
              <strong className="text-gray-900 font-bold">GAMSTOP</strong>, the
              UK-wide self-exclusion scheme. About five minutes to register at{" "}
              <a
                href="https://www.gamstop.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-Primary hover:underline font-semibold"
              >
                gamstop.co.uk
              </a>
              . Once registered, every UK-licensed gambling site is blocked to
              you for the period you chose (6 months, 1 year, or 5 years).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UrgentHelpContent;
