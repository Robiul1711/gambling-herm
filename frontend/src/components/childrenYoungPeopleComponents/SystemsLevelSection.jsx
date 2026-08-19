import React from "react";
import { Link } from "react-router-dom";

const SystemsLevelSection = () => {
  const includesList = [
    "Embedding gambling harm within safeguarding and public health frameworks",
    "Workforce training and capacity building",
    "System mapping to identify gaps and blind spots",
    "Strengthening early identification and referral pathways",
    "Using data and lived experience to inform local prevention strategies",
  ];

  return (
    <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16 bg-white">
      {/* Top Accent Line */}
      <div className="w-12 h-[3px] bg-[#17a9df] mb-6"></div>

      {/* Main Section Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">
        Systems-level work with local authorities
      </h2>

      {/* Narrative Intro */}
      <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-normal mb-8">
        Alongside direct work with children and young people, we support local
        authorities and partners to address gambling-related harm through a
        whole-system, public health approach.
      </p>

      {/* Light Cyan Container */}
      <div className="bg-[#edf7fd] border-l-[4px] border-[#17a9df]  p-6 md:p-8 mb-8 shadow-xs">
        <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#17a9df] mb-4">
          THIS INCLUDES
        </h3>
        <div className="divide-y divide-dashed divide-gray-300/80">
          {includesList.map((item, index) => (
            <p
              key={index}
              className="py-3 text-sm sm:text-base text-gray-700 leading-relaxed font-normal first:pt-0 last:pb-0"
            >
              {item}
            </p>
          ))}
        </div>
      </div>

      {/* Paragraph below card */}
      <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-normal mb-8">
        Our aim is to support coordinated, preventative safeguarding approaches
        that better protect children and families.
      </p>

      {/* Dark Contact Card Container */}
      <div className="bg-[#181818] border-l-[4px] border-[#17a9df]  p-6 md:p-8 text-white shadow-md">
        <h4 className="text-[#17a9df] text-xs sm:text-sm font-bold uppercase tracking-wider mb-3">
          GET IN TOUCH
        </h4>
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-normal">
          To find out more about working with us at a systems level, or to
          discuss a partnership, contact us via{" "}
          <Link
            to="/about#contact"
            className="underline font-semibold hover:text-[#17a9df] transition-colors"
          >
            contact page
          </Link>
          .
        </p>
      </div>
    </section>
  );
};

export default SystemsLevelSection;
