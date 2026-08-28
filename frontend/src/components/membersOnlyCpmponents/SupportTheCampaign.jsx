import React from "react";
import { Link } from "react-router-dom";

const SupportTheCampaign = () => {
  return (
    <div className="w-full border-b border-gray-700/40 py-16 md:py-20 text-center bg-[#2A2828] text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col items-center space-y-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight leading-tight">
          Support the campaign.
        </h2>
        <p className="text-gray-400 text-sm sm:text-base font-medium leading-relaxed">
          Members Only is a lived-experience-led campaign. The way to support it
          is to read what's there, share it, and lend voice where you can.
        </p>
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            to="https://membersonlycampaign.org.uk/"
            className="w-full sm:w-auto text-center bg-Primary hover:bg-[#145c7e] text-white font-bold px-6 py-3 text-base transition-colors shadow-sm"
          >
            Visit membersonlycampaign.org.uk
          </Link>
          <Link
            to="/policy-and-advocacy"
            className="w-full sm:w-auto text-center border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white font-bold px-6 py-3 text-base transition-all bg-transparent"
          >
            Our policy positions
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SupportTheCampaign;
