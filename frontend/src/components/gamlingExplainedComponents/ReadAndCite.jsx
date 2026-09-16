import React from "react";

const ReadAndCite = () => {
  return (
    <section id="read-and-cite" className="scroll-mt-28 my-12">
      {/* Accent Line & Header */}
      <div className="mb-8">
        <div className="w-10 h-[3px] bg-[#0093D0] mb-4" />
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
          Read, cite, use
        </h2>
      </div>

      {/* 2 Equal Edition Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1: The 2021 edition */}
        <div className="border border-gray-200  p-6 md:p-8 bg-white flex flex-col justify-between">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              The 2021 edition
            </h3>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              The original <em className="italic">Gambling Explained</em> PDF,
              written for the 2021 Gambling Act Review. Citation:{" "}
              <em className="italic">
                Gambling Explained 2021. Gambling Harm UK (then Gambling
                Education Network). Independently written and funded by
                researchers harmed by someone else’s gambling.
              </em>
            </p>
          </div>
          <div className="mt-8">
            <a
              href="mailto:research@gamblingharm.com?subject=Gambling%20Explained%202021%20PDF"
              className="text-[#0093D0] font-medium text-sm md:text-base underline hover:text-[#0076A8] transition-colors"
            >
              Request the 2021 PDF
            </a>
          </div>
        </div>

        {/* Card 2: The 2025/26 edition */}
        <div className="border border-gray-200  p-6 md:p-8 bg-white flex flex-col justify-between">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              The 2025/26 edition (in preparation)
            </h3>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              The revised edition incorporates the NatCen Holistic Framework
              (2025), the GambleAware archive, the bank-transaction mortality
              work, and the past five years of harm-to-others research.
              Expected publication late 2026 with associated parliamentary
              submission.
            </p>
          </div>
          <div className="mt-8">
            <a
              href="mailto:research@gamblingharm.com"
              className="text-[#0093D0] font-medium text-sm md:text-base underline hover:text-[#0076A8] transition-colors"
            >
              Email research@gamblingharm.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadAndCite;
