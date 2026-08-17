import React from "react";
import { Link } from "react-router-dom";

const TeachersCypCta = () => {
  return (
    <section className="bg-[#181818] py-16 md:py-24 text-center">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Centered Accent Bar */}
        <div className="w-12 h-[3px] bg-[#0093D0] mb-6 mx-auto"></div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight mx-auto">
          Want to help us put this on the policy agenda?
        </h2>

        {/* Narrative */}
        <p className="text-gray-300 text-base sm:text-lg leading-relaxed mx-auto mb-8 font-normal max-w-2xl">
          If you run or work in a CYP service, school, ICB safeguarding pathway,
          or research group on adolescent health, we want to hear from you.
        </p>

        {/* 2 CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          {/* Button 1: Contact us */}
          <Link
            to="/about#contact"
            className="bg-[#156E94] hover:bg-[#0093D0] text-white font-semibold text-sm sm:text-base px-6 py-3  transition-colors shadow-xs cursor-pointer inline-block"
          >
            Contact us
          </Link>

          {/* Button 2: Request films & school sessions */}
          <a
            href="mailto:hello@gamblingharm.com?subject=Request%20films%20%26%20school%20sessions"
            className="bg-white hover:bg-gray-100 text-gray-900 font-semibold text-sm sm:text-base px-6 py-3  transition-colors shadow-xs cursor-pointer inline-block"
          >
            Request films &amp; school sessions
          </a>
        </div>
      </div>
    </section>
  );
};

export default TeachersCypCta;
