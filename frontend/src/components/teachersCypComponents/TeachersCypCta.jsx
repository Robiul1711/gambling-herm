import React from "react";
import { Link } from "react-router-dom";

const TeachersCypCta = () => {
  return (
    <section className="bg-[#191919] py-20 md:py-28 px-4 md:px-8 text-center">
      <div className="max-w-4xl mx-auto">
        {/* Centered Accent Bar */}
        <div className="w-12 h-[3.5px] bg-[#0093D0] mb-8 mx-auto"></div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold text-white mb-6 tracking-tight leading-tight max-w-2xl mx-auto">
          Want to help us put this on the policy agenda?
        </h2>

        {/* Narrative */}
        <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10 font-normal">
          If you run or work in a CYP service, school, ICB safeguarding pathway,
          or research group on adolescent health, we want to hear from you.
        </p>

        {/* 2 CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          {/* Button 1: Contact us */}
          <Link
            to="/about#contact"
            className="bg-[#156E94] hover:bg-[#0093D0] text-white font-semibold text-sm sm:text-base px-8 py-3.5 rounded-md transition-colors shadow-sm cursor-pointer inline-block"
          >
            Contact us
          </Link>

          {/* Button 2: Request films & school sessions */}
          <a
            href="mailto:hello@gamblingharm.com?subject=Request%20films%20%26%20school%20sessions"
            className="bg-white hover:bg-slate-100 text-slate-900 font-semibold text-sm sm:text-base px-8 py-3.5 rounded-md transition-colors shadow-sm cursor-pointer inline-block"
          >
            Request films &amp; school sessions
          </a>
        </div>
      </div>
    </section>
  );
};

export default TeachersCypCta;
