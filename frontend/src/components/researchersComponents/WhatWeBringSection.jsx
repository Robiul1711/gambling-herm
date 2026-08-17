import React from "react";
import { Link } from "react-router-dom";

const WhatWeBringSection = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Top Accent Line */}
        <div className="w-12 h-[3px] bg-[#0082c3] mb-4"></div>

        {/* Section Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-[34px] font-bold text-gray-900 tracking-tight mb-8">
          What we bring to a collaboration
        </h2>

        {/* 2x2 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="border border-gray-200/90  p-6 sm:p-7 bg-white hover:border-gray-300 transition-all flex flex-col justify-between">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                A reproducible national burden model
              </h3>
              <p className="text-[14.5px] leading-relaxed text-gray-600">
                Our estimate of the UK's annual health loss from gambling
                (around 530,000 QALYs, roughly £37 billion at the Green Book
                value) is fully specified: every input, assumption and
                sensitivity is published in our Health Needs Assessment, and the
                national derivation reproduces in an accompanying calculator. It
                is built to be criticised, replicated and improved.
              </p>
            </div>
            <div className="mt-5">
              <Link
                to="/burden-of-harm"
                className="inline-flex items-center text-[14.5px] font-semibold text-gray-900 underline hover:text-[#0082c3] transition-colors"
              >
                The burden of harm &rarr;
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="border border-gray-200/90  p-6 sm:p-7 bg-white hover:border-gray-300 transition-all flex flex-col justify-between">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                A local-authority evidence infrastructure
              </h3>
              <p className="text-[14.5px] leading-relaxed text-gray-600">
                Our HNA template and{" "}
                <Link
                  to="/burden-mapping-tool"
                  className="underline text-gray-900 hover:text-[#0082c3] font-medium"
                >
                  burden mapping tool
                </Link>{" "}
                are in use with local public health teams across England, with a{" "}
                <Link
                  to="/burden-mapping-tool"
                  className="underline text-gray-900 hover:text-[#0082c3] font-medium"
                >
                  published methods and audit page
                </Link>
                . Collaborations can connect national modelling to real local
                commissioning questions.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="border border-gray-200/90  p-6 sm:p-7 bg-white hover:border-gray-300 transition-all flex flex-col justify-between">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                Language and framing standards
              </h3>
              <p className="text-[14.5px] leading-relaxed text-gray-600">
                Our Communications & Voice Framework sets out stigma-safe,
                evidence-based language for gambling-harm research outputs: why
                we do not use "problem gambler", how we describe people harmed
                by someone else's gambling, and how to handle PGSI category
                labels. Available on request for research teams.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="border border-gray-200/90  p-6 sm:p-7 bg-white hover:border-gray-300 transition-all flex flex-col justify-between">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                Lived-experience involvement done properly
              </h3>
              <p className="text-[14.5px] leading-relaxed text-gray-600">
                We are led by people with lived experience of gambling harm, and
                our HNA sets minimum standards for involvement, including paid
                Expert by Experience roles. We can support engagement design and
                best practice for studies that want lived experience embedded
                rather than consulted.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeBringSection;
