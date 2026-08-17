import React from "react";
import { Link } from "react-router-dom";

const ChildrenHouseholdSection = () => {
  return (
    <section className="w-full bg-white py-12 md:py-16 border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Top Accent Line */}
        <div className="w-12 h-[3px] bg-[#0082c3] mb-4"></div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-gray-900 tracking-tight mb-4 leading-tight">
          If there are children in the household
        </h2>

        {/* Paragraphs */}
        <div className="space-y-4 text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
          <p>
            Children in gambling-affected households often pick up on more than
            adults think, even when no one has told them anything directly.
            Watch for changes in sleep, mood, or how they talk about the
            household, and reassure them clearly that it isn't theirs to fix.
          </p>

          <p>
            Our{" "}
            <Link
              to="/children-and-safeguarding"
              className="text-[#0082c3] underline font-semibold hover:text-[#006090] transition-colors"
            >
              children & safeguarding
            </Link>{" "}
            page sets out what to notice and what helps. If the child themselves
            is old enough to be worried about their own gambling, or someone
            else's,{" "}
            <Link
              to="/get-help/young-people"
              className="text-[#0082c3] underline font-semibold hover:text-[#006090] transition-colors"
            >
              our young people's page
            </Link>{" "}
            is written directly for them.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ChildrenHouseholdSection;
