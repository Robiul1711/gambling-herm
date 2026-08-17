import React from "react";
import { Link } from "react-router-dom";

const WorkWithUsSafeguarding = () => {
  return (
    <section className="w-full bg-[#385c66] text-white py-14 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
        {/* Top Accent Line */}
        <div className="w-12 h-[3px] bg-white/60 mb-8"></div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6 text-white">
          Work with us on children's <br className="hidden sm:inline" />
          safeguarding.
        </h2>

        {/* Description */}
        <p className="text-gray-100 text-base sm:text-lg leading-relaxed font-normal mb-8">
          Whether you're a school, a local authority, or a safeguarding
          professional, we can help you respond to gambling-related harm in
          children and families.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <a
            href="https://gamblingharm.com/book-a-workshop/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto text-center bg-white hover:bg-gray-100 text-[#385c66] font-semibold px-6 py-3 text-base transition-colors shadow-sm"
          >
            Book a session &rarr;
          </a>
          <Link
            to="/professionals"
            className="w-full sm:w-auto text-center bg-white hover:bg-gray-100 text-[#385c66] font-semibold px-6 py-3 text-base transition-colors shadow-sm"
          >
            Resources for professionals &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WorkWithUsSafeguarding;
