import React from "react";

const YoungPersonSupport = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16 bg-white">
      {/* Top Accent Line */}
      <div className="w-12 h-[3px] bg-[#0092D0] mb-4" />

      {/* Main Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
        If you're a young person reading this
      </h2>

      {/* Intro Text */}
      <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal mb-8">
        Maybe you're worried about your own gambling, or about a parent's, or about a friend's. All three of those are valid reasons to talk to someone.
      </p>

      {/* ================= SECTION 1: IF IT'S ABOUT YOU ================= */}
      <div className="mb-10">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 tracking-tight">
          If It's About You
        </h3>
        
        <div className="space-y-4 divide-y divide-gray-200">
          <div className="pt-0 text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
            <strong className="text-gray-900 font-bold mr-1.5">Childline, 0800 1111.</strong>
            <span>Free, anonymous, any time of day or night.</span>
          </div>

          <div className="pt-4 text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
            <strong className="text-gray-900 font-bold mr-1.5">National Gambling Helpline, 0808 8020 133.</strong>
            <span>Free, 24/7, phone or live chat support for young people.</span>
          </div>

          <div className="pt-4 text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
            <strong className="text-gray-900 font-bold mr-1.5">YoungMinds,</strong>
            <span>text YM to 85258 for free, 24/7 text-based support.</span>
          </div>

          <div className="pt-4 text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
            If you're under 18 and finding it hard to stop spending in games (loot boxes, FIFA packs, in-game purchases), this counts. Tell an adult you trust.
          </div>
        </div>
      </div>

      {/* ================= SECTION 2: PARENT OR HOME ================= */}
      <div>
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 tracking-tight">
          If it's about a parent or someone at home
        </h3>
        
        <div className="space-y-4 divide-y divide-gray-200">
          <div className="pt-0 text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
            <strong className="text-gray-900 font-bold mr-1.5">Childline, 0800 1111.</strong> They support children whose families are affected by gambling. You can stay anonymous.
          </div>

          <div className="pt-4 text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
            <strong className="text-gray-900 font-bold mr-1.5">NSPCC, 0808 800 5000.</strong>
            <span>If you're worried about your safety or someone else's.</span>
          </div>

          <div className="pt-4 text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
            You don't have to fix it. None of this is your fault. Telling a trusted adult (a teacher, a school counsellor, a friend's parent) is the right next step.
          </div>
        </div>
      </div>
    </div>

  );
};

export default YoungPersonSupport;