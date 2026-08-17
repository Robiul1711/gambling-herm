import React from "react";
import { Link } from "react-router-dom";

const NeurodivergenceEvidence = () => {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Accent Bar */}
        <div className="w-14 h-[3.5px] bg-[#0093D0] mb-7"></div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[44px] font-extrabold text-[#1e293b] mb-7 tracking-tight">
          What the evidence supports
        </h2>

        {/* Intro */}
        <p className="text-slate-700 text-base sm:text-lg  leading-relaxed md:leading-[1.8] mb-10">
          The evidence base here is uneven, and it matters to be precise about
          what it does and doesn't show.
        </p>

        {/* Evidence Blocks */}
        <div className="space-y-8">
          {/* Point 1 */}
          <div className="text-base sm:text-lg  leading-relaxed md:leading-[1.8] text-slate-800 font-bold">
            ADHD is the form of neurodivergence with the clearest evidence of
            elevated gambling-harm risk.
          </div>

          <div className="border-t border-dotted border-gray-300"></div>

          {/* Point 2 */}
          <div className="text-base sm:text-lg  leading-relaxed md:leading-[1.8] text-slate-700">
            <strong className="font-bold text-[#1e293b]">
              The plausible mechanisms are consistent with what's known about ADHD
              more broadly:
            </strong>{" "}
            impulsivity and reduced ability to delay reward; heightened reward
            sensitivity; and particular difficulty disengaging from variable-ratio
            reinforcement, the unpredictable win pattern that most gambling
            products are built on.
          </div>

          <div className="border-t border-dotted border-gray-300"></div>

          {/* Point 3 */}
          <div className="text-base sm:text-lg  leading-relaxed md:leading-[1.8] text-slate-700">
            <strong className="font-bold text-[#1e293b]">
              The evidence for other forms of neurodivergence is less established.
            </strong>{" "}
            We do not claim autism-specific gambling-harm risk. Where studies
            exist, they are fewer, smaller, and less consistent than the ADHD
            literature, and the honest position is that the evidence gap itself
            is a finding: neurodivergent populations outside ADHD have simply not
            been researched to the same standard.
          </div>
        </div>

        {/* Bottom Note with Link */}
        <p className="mt-12 text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed pt-4">
          We would rather state the claim at the level the evidence supports
          than round it up. If you are aware of robust, citable research that
          sharpens or corrects this section, our{" "}
          <Link
            to="/professionals/researchers"
            className="text-slate-900 underline hover:text-[#0093D0] font-semibold"
          >
            researchers' page
          </Link>{" "}
          sets out how to get in touch.
        </p>
      </div>
    </section>
  );
};

export default NeurodivergenceEvidence;
