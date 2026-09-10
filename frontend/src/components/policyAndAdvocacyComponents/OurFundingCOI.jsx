import React from "react";
import { Link } from "react-router-dom";

const OurFundingCOI = () => {
  return (
    <section
      id="our-funding-and-coi"
      className="py-10 md:py-14 bg-[#1e1c1a] text-gray-200 antialiased"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="border-l-4 border-[#1B80C4] bg-[#2A2828] p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-gray-100 text-base sm:text-lg font-medium leading-relaxed max-w-2xl">
            Our interest is reducing gambling harm; the industry's is the revenue that creates it.
          </p>
          <Link
            to="/funding-and-conflicts-of-interest"
            className="inline-flex items-center text-sm sm:text-base font-bold text-sky-400 hover:text-sky-300 hover:underline whitespace-nowrap"
          >
            Our full funding and conflicts of interest statement &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OurFundingCOI;
