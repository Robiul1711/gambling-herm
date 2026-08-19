import React from "react";

const CentralIdeaAndScaleSection = () => {
  return (
    <section className="w-full bg-white py-12 md:py-16 border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* The Central Idea Callout Box */}
        <div className="border-l-[4px] border-[#0082c3] bg-[#edf7fc]  p-6 sm:p-8 md:p-10 shadow-xs">
          <span className="text-[#0082c3] font-bold text-xs sm:text-sm uppercase tracking-wider block mb-3">
            The Central Idea
          </span>

          <div className="space-y-4 text-base sm:text-lg text-gray-700 leading-relaxed font-normal">
            <p>
              Most tools like this ask what the other person is doing. This one
              doesn't.{" "}
              <strong className="font-bold text-gray-900">
                Your own worry is the relevant signal, not a score against their
                behaviour.
              </strong>{" "}
              You don't need to know what's "really" happening in their gambling
              to know something in your own life has changed, and that's enough
              reason to keep reading.
            </p>

            <p>
              Harm to family and friends is direct harm, not secondary. You did
              not choose the product being marketed at someone you love, and the
              effect on you is not a side-effect of their choices, it is part of
              the harm the product produced.
            </p>
          </div>
        </div>

        {/* The Scale Section */}
        <div className="mt-12 sm:mt-16 md:mt-20">
          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-gray-900 tracking-tight mb-4 leading-tight">
            The scale
          </h2>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
            Around{" "}
            <strong className="font-bold text-gray-900">
              9.0% of UK adults, about 4.9 million people
            </strong>
            , reported experiencing harm from someone else's gambling in the
            past year (Gambling Commission,{" "}
            <em className="italic">
              Insights into affected others from the Gambling Survey for Great
              Britain, 2026
            </em>
            ). Among them,{" "}
            <strong className="font-bold text-gray-900">
              73.7% report harms to their own health, 65.3% to their
              relationships and 42.5% to their finances
            </strong>
            . If you're reading this, you are one of a very large number of
            people, most of whom are also not talking about it.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CentralIdeaAndScaleSection;
