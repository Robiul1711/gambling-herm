import React from "react";

const TeachersCypMissesPoint = () => {
  return (
    <section className="py-12 md:py-16 bg-white border-t border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Accent Bar */}
        <div className="w-12 h-[3px] bg-[#0092D0] mb-6"></div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-gray-900 mb-4 tracking-tight leading-tight">
          Why &ldquo;they're nearly adults&rdquo; misses the point
        </h2>

        {/* Narrative Paragraph 1 */}
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6 font-normal">
          Brain imaging studies show that the brain's decision-making and
          addictive-behaviour areas continue to develop until around the age of
          25. The cognitive capacities that gambling-product design specifically
          targets (impulse control, reward processing, risk assessment) are among
          the last to mature.
        </p>

        {/* Narrative Paragraph 2 */}
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8 font-normal">
          This matters for two reasons. First, exposure to gambling products in
          adolescence is associated with significantly elevated lifetime risk of
          harm. Second, it makes &ldquo;personal responsibility&rdquo; framing
          (already weak in adult contexts) indefensible for children.
        </p>

        {/* Citation Footnote */}
        <p className="text-xs sm:text-sm text-gray-500 italic font-normal">
          Citation: Gambling Explained 2021, p.18.
        </p>
      </div>
    </section>
  );
};

export default TeachersCypMissesPoint;
