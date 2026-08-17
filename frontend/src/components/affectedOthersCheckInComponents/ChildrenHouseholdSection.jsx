import React from "react";
import { Link } from "react-router-dom";

const ChildrenHouseholdSection = () => {
  return (
    <section className="w-full bg-white py-14 sm:py-18 md:py-20 border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Top Accent Line */}
        <div className="w-12 h-[3.5px] bg-[#0082c3] mb-6"></div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-6">
          If there are children in the household
        </h2>

        {/* Paragraphs */}
        <div className="space-y-6 text-base sm:text-lg text-gray-700 leading-relaxed font-normal">
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
              className="text-[#0082c3] underline font-medium hover:text-[#006090] transition-colors"
            >
              children & safeguarding
            </Link>{" "}
            page sets out what to notice and what helps. If the child themselves
            is old enough to be worried about their own gambling, or someone
            else's,{" "}
            <Link
              to="/get-help/young-people"
              className="text-[#0082c3] underline font-medium hover:text-[#006090] transition-colors"
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
