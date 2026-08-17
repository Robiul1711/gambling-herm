import React from "react";
import { Link } from "react-router-dom";

const ScoreDiagnosisSection = () => {
  return (
    <section className="w-full bg-white py-12 md:py-16 border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Top Accent Line */}
        <div className="w-12 h-[3px] bg-[#0082c3] mb-4"></div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-gray-900 tracking-tight mb-4 leading-tight">
          Why a score isn't a diagnosis
        </h2>

        {/* Body Paragraphs */}
        <div className="space-y-4 text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
          <p>
            UK gambling-prevalence work has for decades used the PGSI, a short
            screening tool with a threshold score of 8 or above marking the most
            severe band. That threshold has shaped a lot of public understanding
            of what counts as harmful gambling, and it draws the line in a place
            that misses most of the harm that actually exists.
          </p>

          <p>
            Newer measurement work using the Gambling Harms Screening Index (GHSI)
            points the same way: up to 85% of the health loss among people who
            gamble sits below that most severe band. Most of the harm being
            measured happens to people who would never score in the top category.
            A low score, or a score that falls under a published threshold,
            doesn't mean nothing is happening. It means that if there is harm, it
            sits somewhere other than the most visible end of the scale.
          </p>

          <p>
            See{" "}
            <Link
              to="/stigma-and-language"
              className="text-[#0082c3] underline font-semibold hover:text-[#006090] transition-colors"
            >
              our note on language and measurement
            </Link>{" "}
            for more on how the GHSI and PGSI differ.
          </p>
        </div>

        {/* Dark Callout Box */}
        <div className="mt-10 mb-4 bg-[#181818] border-l-[4px] border-[#0096D6] text-white rounded-r-xl p-6 sm:p-8 md:p-10 shadow-md">
          <span className="text-[#0096D6] font-bold text-xs sm:text-sm uppercase tracking-wider block mb-3">
            The point of this page
          </span>
          <p className="text-base sm:text-lg text-gray-100 font-medium leading-relaxed">
            Your own worry is the relevant signal, not the score. If a screening
            tool comes back low but something still doesn't sit right with you,
            that feeling is worth acting on. You don't need a qualifying score to
            talk to someone.
          </p>
        </div>

        {/* Clinical View Subnote */}
        <p className="text-xs sm:text-sm text-gray-500 italic leading-relaxed mt-4 font-normal">
          None of this replaces an assessment by a clinician. If you want a
          clinical view, the National Gambling Helpline and NHS gambling
          clinics can help you get one.
        </p>
      </div>
    </section>
  );
};

export default ScoreDiagnosisSection;
