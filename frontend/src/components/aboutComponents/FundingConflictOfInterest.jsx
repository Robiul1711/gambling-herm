import React from "react";
import { Link } from "react-router-dom";

const FundingConflictOfInterest = () => {
  return (
    <section className="w-full py-8 text-center">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="border-l-4 border-Primary bg-[#F7F9FA] p-5 sm:p-6 text-left flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-gray-800 text-base sm:text-lg font-medium">
            We take no money from the gambling industry.
          </p>
          <Link
            to="/funding-and-conflicts-of-interest"
            className="inline-flex items-center text-sm sm:text-base font-bold text-Primary hover:underline whitespace-nowrap"
          >
            Read our full funding and conflicts of interest statement &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FundingConflictOfInterest;
