import React from "react";
import { Link } from "react-router-dom";

const BroadcastSportSection = () => {
  return (
    <section id="broadcast-sport" className="scroll-mt-24 w-full py-12 md:py-16 bg-white border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Accent Bar */}
        <div className="w-12 h-[3px] bg-[#0082c3] mb-4"></div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
          Broadcast and sport
        </h2>

        {/* Narrative */}
        <div className="space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
          <p>
            A viewer has real, if limited, control here: you can turn the coverage off, mute it, or choose highlights over live viewing with ad breaks.
          </p>
          <p>
            What a viewer cannot realistically control: in-play odds graphics overlaid on the broadcast itself, shirt and pitch-side sponsorship, and commentary that folds betting odds into the coverage as though they were part of the sport. These are built into the broadcast deal and the sponsorship contract, not into any setting on your screen. See what GHUK wants changed about this in our work on{" "}
            <Link
              to="/gambling-tactics"
              className="text-gray-900 font-semibold underline hover:text-[#0082c3] transition-colors"
            >
              advertising and sponsorship tactics
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default BroadcastSportSection;
