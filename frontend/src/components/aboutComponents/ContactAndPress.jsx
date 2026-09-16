import React from "react";
import { Link } from "react-router-dom";

const ContactAndPress = () => {
  return (
    <div className="w-full border-b border-gray-700/40 py-16 md:py-20 text-center px-4 sm:px-6 lg:px-8 bg-[#2A2828] text-white">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        {/* Header Section */}
        <div className="mb-16 max-w-2xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Contact & Press
          </h2>
        </div>

        {/* 3-Column Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8  text-left w-full mb-16">
          {/* Column 1: General Enquiries */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-gray-200">
              General Enquiries
            </h3>
            <a
              href="mailto:hello@gamblingharm.com"
              className="block text-[#38bdf8] hover:underline text-base break-words"
            >
              hello@gamblingharm.com
            </a>
            <p className="text-gray-300 text-sm leading-relaxed pt-2">
              For everything else: hello@gamblingharm.com. We read everything; replies can take a few days. For support and routes to help, please use{" "}
              <Link
                to="/get-help"
                className="text-[#38bdf8] hover:underline underline-offset-4"
              >
                our Get Help page
              </Link>
              .
            </p>
          </div>

          {/* Column 2: Press */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-gray-200">Press</h3>
            <a
              href="mailto:press@gamblingharm.com"
              className="block text-[#38bdf8] hover:underline text-base break-words"
            >
              press@gamblingharm.com
            </a>
            <p className="text-gray-300 text-sm leading-relaxed pt-2">
              Press and media enquiries: press@gamblingharm.com. We are a small team; if you are on a deadline, say so in the subject line and we will do what we can.
            </p>
          </div>

          {/* Column 3: Partnerships & Research */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-gray-200">
              Partnerships & Research
            </h3>
            <a
              href="mailto:partnerships@gamblingharm.com"
              className="block text-[#38bdf8] hover:underline text-base break-words"
            >
              partnerships@gamblingharm.com
            </a>
            <p className="text-gray-300 text-sm leading-relaxed pt-2">
              For research collaborations, funding (excluding industry sources),
              and partner organisations.
            </p>
          </div>
        </div>

        {/* Confidentiality Disclaimer Footer */}
        <div className="max-w-2xl text-center border-t border-gray-700/60 pt-8 w-full">
          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
            If you'd like to share your story, please don't include identifying
            details about other people without their consent. We treat all
            communications confidentially.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactAndPress;
