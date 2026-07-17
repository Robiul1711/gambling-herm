import React from "react";

const YoungPersonSupport = () => {
  return (
      <div className="max-w-5xl mx-auto">
        
        {/* Top Accent Line */}
        <div className="w-[45px] h-[3px] bg-[#3A86B9] mb-6 md:w-[55px]" />

        {/* Main Heading */}
        <h2 className="text-[26px] font-bold tracking-tight text-[#1E1E1E] leading-[1.2] mb-4 xxs:text-[32px] sm:text-[36px] md:text-[42px]">
          If you're a young person reading this
        </h2>

        {/* Intro Text */}
        <p className="text-[#5E6573] text-[15px] leading-relaxed mb-10 xs:text-base sm:text-[17px]">
          Maybe you're worried about your own gambling, or about a parent's, or about a friend's. All three of those are valid reasons to talk to someone.
        </p>

        {/* ================= SECTION 1: IF IT'S ABOUT YOU ================= */}
        <div className="mb-12">
          <h3 className="text-lg font-bold text-[#1E1E1E] mb-4 sm:text-19px md:text-xl">
            If It's About You
          </h3>
          
          <div className="space-y-5 divide-y divide-gray-200/70">
            <div className="pt-0 text-[14px] sm:text-[15px] md:text-base text-[#5E6573] leading-relaxed">
              <strong className="text-[#1E1E1E] font-semibold">Childline, 0800 1111.</strong>{" "}
              <span className="text-[#474c55]">Free, anonymous, any time of day or night.</span>
            </div>

            <div className="pt-5 text-[14px] sm:text-[15px] md:text-base text-[#5E6573] leading-relaxed">
              <strong className="text-[#1E1E1E] font-semibold">Big Deal (run by GamCare),</strong>{" "}
              <span className="text-[#2a2e36]">specifically for young people affected by gambling.</span>{" "}
              <a href="https://bigdeal.org.uk" target="_blank" rel="noopener noreferrer" className="underline text-gray-800 hover:text-[#3A86B9] transition-colors underline-offset-2">
                bigdeal.org.uk.
              </a>
            </div>

            <div className="pt-5 text-[14px] sm:text-[15px] md:text-base text-[#5E6573] leading-relaxed">
              <strong className="text-[#1E1E1E] font-semibold">YoungMinds,</strong>{" "}
              <span className="text-[#35393f]">text YM to 85258 for free, 24/7 text-based support.</span>
            </div>

            <div className="pt-5 text-[14px] sm:text-[15px] md:text-base text-[#202225] leading-relaxed">
              If you're under 18 and finding it hard to stop spending in games (loot boxes, FIFA packs, in-game purchases), this counts. Tell an adult you trust.
            </div>
          </div>
        </div>

        {/* ================= SECTION 2: PARENT OR HOME ================= */}
        <div>
          <h3 className="text-lg font-bold text-[#1E1E1E] mb-4 sm:text-19px md:text-xl">
            If it's about a parent or someone at home
          </h3>
          
          <div className="space-y-5 divide-y divide-gray-200/70">
            <div className="pt-0 text-[14px] sm:text-[15px] md:text-base text-[#383c44] leading-relaxed">
              <strong className="text-[#1E1E1E] font-semibold">Childline, 0800 1111.</strong> They support children whose families are affected by gambling. You can stay anonymous.
            </div>

            <div className="pt-5 text-[14px] sm:text-[15px] md:text-base text-[#5E6573] leading-relaxed">
              <strong className="text-[#1E1E1E] font-semibold">NSPCC, 0808 800 5000.</strong>{" "}
              <span className="text-[#202225]">If you're worried about your safety or someone else's.</span>
            </div>

            <div className="pt-5 text-[14px] sm:text-[15px] md:text-base text-[#202225] leading-relaxed">
              You don't have to fix it. None of this is your fault. Telling a trusted adult (a teacher, a school counsellor, a friend's parent) is the right next step.
            </div>
            

          </div>
        </div>

      </div>

  );
};

export default YoungPersonSupport;