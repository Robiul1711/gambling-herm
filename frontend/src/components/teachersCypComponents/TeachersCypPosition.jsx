import React from "react";

const TeachersCypPosition = () => {
  return (
    <section className="py-8 md:py-12 px-4 md:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="bg-[#edf7fd] border-l-[5px] border-[#0093D0] rounded-r-xl p-8 sm:p-10 md:p-12 shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
          {/* Subtitle / Category */}
          <h2 className="text-[#0093D0] text-xs md:text-sm font-bold tracking-widest uppercase mb-4">
            OUR POSITION
          </h2>

          {/* Core Statement 1 */}
          <p className="text-slate-800 text-base sm:text-lg leading-relaxed md:leading-[1.8] font-normal mb-6">
            <strong className="font-bold text-[#1e293b]">
              Children of people who gamble excessively are a distinct,
              statutorily-invisible affected-others population.
            </strong>{" "}
            They are the larger CYP group affected, but receive a fraction of
            the attention given to children's own gambling in current policy
            debate. The attention does not match the burden.
          </p>

          {/* Core Statement 2 */}
          <p className="text-slate-800 text-base sm:text-lg leading-relaxed md:leading-[1.8] font-normal">
            The harms reported (lost sleep, household tension, money missing for
            food) align directly with recognised{" "}
            <strong className="font-bold text-[#1e293b]">
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
