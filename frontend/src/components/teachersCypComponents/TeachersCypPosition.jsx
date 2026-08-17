import React from "react";

const TeachersCypPosition = () => {
  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-[#edf7fd] border-l-[4px] border-[#0093D0] rounded-r-xl p-6 sm:p-8 md:p-10 shadow-xs">
          {/* Subtitle / Category */}
          <h2 className="text-[#0093D0] text-xs sm:text-sm font-bold tracking-wider uppercase mb-3">
            OUR POSITION
          </h2>

          {/* Core Statement 1 */}
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-normal mb-4">
            <strong className="font-bold text-gray-900 mr-1.5">
              Children of people who gamble excessively are a distinct,
              statutorily-invisible affected-others population.
            </strong>
            They are the larger CYP group affected, but receive a fraction of
            the attention given to children's own gambling in current policy
            debate. The attention does not match the burden.
          </p>

          {/* Core Statement 2 */}
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-normal">
            The harms reported (lost sleep, household tension, money missing for
            food) align directly with recognised{" "}
            <strong className="font-bold text-gray-900">
              Adverse Childhood Experiences (ACEs)
            </strong>{" "}
            and carry long-term health and developmental consequences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TeachersCypPosition;
