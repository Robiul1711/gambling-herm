import React from "react";

const UrgentHelpContent = () => {
  return (
    <div className="w-full">
      {/* 1. Header Banner */}
      <div className="bg-[#FFF0F0] border-b border-red-200 text-center py-12 md:py-16 px-4">
        <h1 className="text-3xl md:text-5xl font-extrabold text-[#1A1A1A] tracking-tight">
          If you're in crisis right now.
        </h1>
        <p className="text-gray-600 mt-3 md:mt-4 text-base md:text-lg max-w-2xl mx-auto font-medium">
          You are not alone, and this is survivable. Here is what to do, in order.
        </p>
      </div>

      {/* 2. Urgent Cards Container */}
      <div className="max-w-3xl mx-auto px-4 py-8 md:py-16 flex flex-col gap-6 md:gap-10">
        
        {/* Card 1: Immediate Danger */}
        <div className="border border-red-500 rounded-xl md:rounded-2xl p-5 sm:p-8 bg-white shadow-sm hover:shadow-md transition-shadow">
          <span className="text-xs font-bold text-red-600 uppercase tracking-widest block mb-2">
            1 · If anyone is in immediate danger
          </span>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-[#1A1A1A] tracking-tight mb-4 select-all break-words">
            999
          </h2>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            Call <strong>999</strong>. This includes if you're worried that someone (you or another person) is about to attempt suicide, has taken an overdose, or is at risk of serious self-harm right now. Ambulance and police can be there fast.
          </p>
        </div>

        {/* Card 2: Thoughts of Suicide */}
        <div className="border border-red-500 rounded-xl md:rounded-2xl p-5 sm:p-8 bg-white shadow-sm hover:shadow-md transition-shadow">
          <span className="text-xs font-bold text-red-600 uppercase tracking-widest block mb-2">
            2 · Thoughts of suicide
          </span>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-[#1A1A1A] tracking-tight mb-4 select-all break-words">
            116 123
          </h2>
          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
            <p>
              <strong>Samaritans.</strong> Free, from any phone, 24 hours a day, every day. You don't have to be in active crisis to call. You don't have to know what to say. You can just call and breathe.
            </p>
            <p>
              <strong>Text SHOUT to 85258</strong>, free, 24/7, if you can't speak aloud. Run by Shout Crisis Text Line.
            </p>
            <p>
              <strong>Papyrus HOPELINE247</strong> (for under-35s) call <strong>0808 068 4141</strong>, text <strong>88247</strong>, or email <strong>pat@papyrus-uk.org</strong>.
            </p>
          </div>
        </div>

        {/* Card 3: Losing Control Tonight */}
        <div className="border border-gray-800 rounded-xl md:rounded-2xl p-5 sm:p-8 bg-white shadow-sm hover:shadow-md transition-shadow">
          <span className="text-xs font-bold text-gray-600 uppercase tracking-widest block mb-2">
            3 · If you're losing control tonight
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-[#1A1A1A] tracking-tight mb-4 select-all break-words leading-none">
            0808 8020 133
          </h2>
          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
            <p>
              <strong>National Gambling Helpline.</strong> Free, confidential, 24/7. Run by GamCare. You will speak to a trained advisor whose job is to help you, not to judge you.
            </p>
            <p>
              <strong>GAMSTOP</strong>, the UK-wide self-exclusion scheme. About five minutes to register at <a href="https://www.gamstop.co.uk" target="_blank" rel="noopener noreferrer" className="text-Primary hover:underline font-semibold">gamstop.co.uk</a>. Once registered, every UK-licensed gambling site is blocked to you for the period you chose (6 months, 1 year, or 5 years).
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default UrgentHelpContent;
