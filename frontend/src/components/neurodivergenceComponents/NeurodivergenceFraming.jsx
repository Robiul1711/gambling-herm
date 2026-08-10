import React from "react";

const NeurodivergenceFraming = () => {
  return (
    <section className="py-12 md:py-16 px-4 md:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="bg-[#edf7fd] border-l-[5px] border-[#0093D0] rounded-r-xl p-8 sm:p-10 md:p-12 shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
          {/* Subtitle / Category */}
          <h2 className="text-[#0093D0] text-xs md:text-sm font-bold tracking-widest uppercase mb-5">
            OUR FRAMING
          </h2>

          {/* Core Statement */}
          <p className="text-slate-800 text-base sm:text-lg 
           leading-relaxed md:leading-[1.85] font-normal">
            Where gambling harm concentrates in neurodivergent people, the cause
            is a product designed to exploit certain response patterns, speed,
            reward unpredictability, difficulty disengaging, not a deficit or a
            personal failing in the person experiencing harm. Any account of this
            topic that locates the problem in the individual rather than the
            product misreads the evidence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NeurodivergenceFraming;
