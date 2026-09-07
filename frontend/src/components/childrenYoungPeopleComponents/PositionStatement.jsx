import React from'react';

export default function PositionStatement() {
  return (
    <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16 bg-white">
      <div className="relative bg-[#EBF7FC]  border-l-[4px] border-[#0091CD] p-6 sm:p-8 md:p-10 overflow-hidden shadow-xs">
        {/* Content Wrapper */}
        <div className="flex flex-col gap-4">
          {/* Section Header */}
          <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#1A739E] mb-1">
            OUR POSITION
          </h4>

          {/* Main Statement Paragraph */}
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-normal">
            <span className="font-bold text-gray-900">
              Children of someone with gambling harm are a distinct, statutorily-invisible population of people harmed by someone else’s gambling.
            </span>{" "}
            <span className="text-gray-600">
              They are the larger CYP group affected, but receive a fraction of the attention given to children-as-gamblers in current policy debate. That is the wrong shape for the actual burden.
            </span>
          </p>

          {/* Secondary Supporting Paragraph */}
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-normal">
            The harms reported (lost sleep, household tension, money missing for food) align directly with recognised{" "}
            <span className="font-bold text-gray-900">
              Adverse Childhood Experiences (ACEs)
            </span>{" "}
            and carry long-term health and developmental consequences.
          </p>
        </div>
      </div>
    </section>
  );
}