import React from "react";
import { Link } from "react-router-dom";

const OurPositionSection = () => {
  return (
    <section id="our-position" className="scroll-mt-24 w-full py-16 md:py-24 bg-[#181818] text-white">
      <div className="max-w-5xl mx-auto px-4">
        {/* Accent Bar */}
        <div className="w-12 h-[3px] bg-[#0093D0] mb-5"></div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          Our position
        </h2>

        {/* Intro Paragraph */}
        <p className="text-[15px] sm:text-base md:text-[17px] text-gray-300 leading-relaxed  mb-8">
          Everything above is real and worth doing. It is also, on its own, not enough, and it shouldn't be down to the individual to out-manage an advertising system built by people whose job is to reach you anyway.
        </p>

        {/* Callout Box */}
        <div className="border-l-4 border-[#0093D0] pl-5 sm:pl-6 py-2  mb-8">
          <p className="text-xs font-bold uppercase tracking-widest text-[#0093D0] mb-2">
            What GHUK is asking for
          </p>
          <p className="text-[14.5px] sm:text-[15.5px] text-gray-200 leading-relaxed font-normal">
            A statutory ban on gambling sponsorship in sport and broadcast. Tighter rules on influencer and gamblified content. Suspension of personalised marketing to customers showing signs of distress.
          </p>
        </div>

        {/* Footer Links */}
        <p className="text-[14.5px] sm:text-[15.5px] text-gray-300 leading-relaxed ">
          Read the full detail in{" "}
          <Link
            to="/policy-and-advocacy"
            className="underline underline-offset-4 font-semibold text-white hover:text-[#0093D0] transition-colors"
          >
            our advertising policy position →
          </Link>{" "}
          and in{" "}
          <Link
            to="/gambling-tactics"
            className="underline underline-offset-4 font-semibold text-white hover:text-[#0093D0] transition-colors"
          >
            how advertising and sponsorship tactics work →
          </Link>
          .
        </p>
      </div>
    </section>
  );
};

export default OurPositionSection;
