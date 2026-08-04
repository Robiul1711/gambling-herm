import React from "react";
import { Link } from "react-router-dom";

const SchoolSupportSection = () => {
  return (
    <section className="w-full max-w-4xl mx-auto px-4 py-10 md:py-16">
      {/* Top Accent Line */}
      <div className="w-12 h-[3px] bg-[#17a9df] mb-6"></div>

      {/* Main Section Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-[#2d2d2d] mb-6 tracking-tight">
        Supporting children and young people in schools
      </h2>

      {/* Narrative Paragraphs */}
      <div className="space-y-5 text-[#4b5563] text-[15px] md:text-base leading-relaxed max-w-3xl mb-8">
        <p>
          We deliver gambling harm awareness sessions directly to children and
          young people in school settings, reaching over{" "}
          <strong className="font-bold text-[#2d2d2d]">
            5,000 young people every year.
          </strong>{" "}
          These sessions are designed to build understanding, resilience, and
          confidence to talk about gambling-related harm, including the impacts
          of other people's gambling.
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
          className="inline-block bg-[#1d7092] hover:bg-[#155d7a] text-white font-semibold px-6 py-3 text-base transition-colors shadow-sm"
        >
          Book a session &rarr;
        </a>
      </div>
    </section>
  );
};

export default SchoolSupportSection;
