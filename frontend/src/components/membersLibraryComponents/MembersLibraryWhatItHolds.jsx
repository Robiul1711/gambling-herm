import React from "react";
import { Link } from "react-router-dom";

const MembersLibraryWhatItHolds = () => {
  return (
    <section className="py-12 md:py-20 bg-white border-t border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Accent Bar */}
        <div className="w-14 h-[3.5px] bg-[#0093D0] mb-7"></div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-[#1e293b] mb-6 tracking-tight">
          What the library holds
        </h2>

        {/* Intro */}
        <p className="text-base sm:text-lg text-slate-700 leading-relaxed md:leading-[1.8] mb-10 font-normal">
          Drawing on what GHUK already produces across the rest of the site, the
          members' library brings together, in one place for members:
        </p>

        {/* List of 4 items with dotted dividers */}
        <div className="space-y-6">
          {/* Item 1: Films */}
          <div className="text-base sm:text-lg text-slate-700 leading-relaxed md:leading-[1.8] font-normal">
            <strong className="font-bold text-[#1e293b]">Films.</strong>{" "}
            Safeguarding and awareness films, in the style of GHUK's Brothers
            Gambling Harm film, referenced on our{" "}
            <Link
              to="/members-only-campaign"
              className="text-[#1e293b] underline hover:text-[#0093D0] font-medium transition-colors"
            >
              Members Only Campaign
            </Link>{" "}
            page.
          </div>

          <div className="border-t border-dotted border-gray-300"></div>

          {/* Item 2: Training materials */}
          <div className="text-base sm:text-lg text-slate-700 leading-relaxed md:leading-[1.8] font-normal">
            <strong className="font-bold text-[#1e293b]">
              Training materials.
            </strong>{" "}
            Resources connected to our teaching for stakeholder audiences,
            including the Making Every Contact Count (MECC) teaching we deliver
            to healthcare professionals and medical students, described on our{" "}
            <Link
              to="/professionals"
              className="text-[#1e293b] underline hover:text-[#0093D0] font-medium transition-colors"
            >
              professionals hub
            </Link>
            .
          </div>

          <div className="border-t border-dotted border-gray-300"></div>

          {/* Item 3: Our evidence base */}
          <div className="text-base sm:text-lg text-slate-700 leading-relaxed md:leading-[1.8] font-normal">
            <strong className="font-bold text-[#1e293b]">
              Our evidence base.
            </strong>{" "}
            The modelling behind our published work, including our
            burden-of-disease modelling and the{" "}
            <Link
              to="/burden-mapping-tool"
              className="text-[#1e293b] underline hover:text-[#0093D0] font-medium transition-colors"
            >
              burden mapping tool
            </Link>
            .
          </div>

          <div className="border-t border-dotted border-gray-300"></div>

          {/* Item 4: Our policy positions */}
          <div className="text-base sm:text-lg text-slate-700 leading-relaxed md:leading-[1.8] font-normal">
            <strong className="font-bold text-[#1e293b]">
              Our policy positions.
            </strong>{" "}
            The regulatory and reform positions set out on our{" "}
            <Link
              to="/policy-and-advocacy"
              className="text-[#1e293b] underline hover:text-[#0093D0] font-medium transition-colors"
            >
              policy & advocacy
            </Link>
            pages.
          </div>
        </div>

        {/* Postscript note */}
        <p className="mt-10 text-xs sm:text-sm md:text-[15px] text-slate-600 leading-relaxed pt-4">
          This list reflects what's already published elsewhere on the site. As
          the library is built, it may end up holding more, or less, than this;
          we won't promise specific items until they're in it.
        </p>
      </div>
    </section>
  );
};

export default MembersLibraryWhatItHolds;
