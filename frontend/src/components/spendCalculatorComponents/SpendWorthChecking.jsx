import React from "react";

const SpendWorthChecking = () => {
  return (
    <section className="w-full py-6 md:py-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-[#EAF6FB] border-l-4 border-[#0092D0] p-6 sm:p-8 rounded-r-md">
          {/* Tag */}
          <h4 className="text-[#008BC8] font-bold text-xs tracking-widest uppercase mb-3">
            WORTH CHECKING
          </h4>

          {/* Body Text */}
          <p className="text-sm md:text-base leading-relaxed text-gray-800">
            Most people underestimate this figure. Money staked and lost is often
            chased straight back in the same session, and it is easy to lose
            track of what has gone through more than one card, account or app.
            If you want an exact figure rather than an estimate, your bank and
            card statements over the last three months will usually show more
            than this calculator can.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SpendWorthChecking;
