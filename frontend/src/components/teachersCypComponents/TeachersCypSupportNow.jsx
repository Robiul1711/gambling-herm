import React from "react";
import { Link } from "react-router-dom";

const TeachersCypSupportNow = () => {
  return (
    <section className="py-12 md:py-16 bg-white border-t border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Accent Bar */}
        <div className="w-14 h-[3.5px] bg-[#0093D0] mb-7"></div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-[40px] font-extrabold text-[#1e293b] mb-6 tracking-tight">
          Working with a young person who needs support now?
        </h2>

        {/* Paragraph with Link */}
        <p className="text-base sm:text-lg text-slate-700 leading-relaxed md:leading-[1.8] font-normal">
          Send them to{" "}
          <Link
            to="/get-help/young-people"
            className="underline font-semibold text-slate-900 hover:text-[#0093D0] transition-colors"
          >
            our young people page
          </Link>
          . It's written to be read by them: Childline (0800 1111), Big Deal,
          YoungMinds, and an honest explanation of what happens when they tell an
          adult.
        </p>
      </div>
    </section>
  );
};

export default TeachersCypSupportNow;
