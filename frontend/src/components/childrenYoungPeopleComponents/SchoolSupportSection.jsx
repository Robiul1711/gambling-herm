import React from "react";
import { Link } from "react-router-dom";

const SchoolSupportSection = () => {
  return (
    <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16 bg-white">
      {/* Top Accent Line */}
      <div className="w-12 h-[3px] bg-[#17a9df] mb-6"></div>

      {/* Main Section Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">
        Supporting children and young people in schools
      </h2>

      {/* Narrative Paragraphs */}
      <div className="space-y-5 text-gray-600 text-sm sm:text-base leading-relaxed font-normal mb-8">
        <p>
          People with lived experience of gambling harm speak directly with
          children and young people. Our approach is independent of the gambling
          industry and built on safeguarding: children already living with
          gambling harm are treated as a pressing need, not an afterthought.
        </p>
        <p>
          Our workshops are age-appropriate, evidence-informed, and shaped by
          lived experience, supporting early awareness and prevention.
        </p>
      </div>

      {/* CTA Button */}
      <div>
        <a
          href="https://gamblingharm.com/book-a-workshop/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#1d7092] hover:bg-[#155d7a] text-white font-semibold px-6 py-3 text-sm sm:text-base  transition-colors shadow-xs"
        >
          Book a session &rarr;
        </a>
      </div>
    </section>
  );
};

export default SchoolSupportSection;
