import React from "react";

const OurFundingCOI = () => {
  return (
    <section
      id="our-funding-and-coi"
      className="py-12 md:py-16 bg-[#1e1c1a] text-gray-200 antialiased"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header Section */}
        <div className="mb-10">
          {/* Subtle Accent Line */}
          <div className="w-12 h-[3px] bg-sky-500 mb-6"></div>

          <h2 className="text-3xl sm:text-4xl md:text-[42px] font-extrabold text-white tracking-tight leading-tight mb-6">
            Our funding & conflict-of-interest reflection
          </h2>

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-normal">
            Independence on gambling harm requires independence from
            gambling-industry funding. We take this seriously and are explicit
            about it. Reflection on our own potential COIs is a permanent
            operating discipline, not a one-off statement.
          </p>
        </div>

        {/* Content Breakdown */}
        <div className="space-y-6">
          {/* Item 1 */}
          <div className="pt-6 border-t border-dashed border-gray-700">
            <p className="text-sm sm:text-base leading-relaxed text-gray-300 font-normal">
              <strong className="text-white font-bold">
                No Industry Funding.
              </strong>{" "}
              We do not accept funding from gambling operators, their trade
              bodies, their associated charitable arms (including historical
              industry-funded charities), or other organisations whose continued
              funding depends on gambling-industry revenue.
            </p>
          </div>

          {/* Item 2 */}
          <div className="pt-6 border-t border-dashed border-gray-700">
            <p className="text-sm sm:text-base leading-relaxed text-gray-300 font-normal">
              <strong className="text-white font-bold">
                Staff And Trustee Declarations.
              </strong>{" "}
              All staff and trustees declare any prior or current interests
              connected to the gambling industry or its associated
              infrastructure (research, treatment charities funded by industry,
              advisory roles). Declarations are kept under review and updated
              annually.
            </p>
          </div>

          {/* Item 3 */}
          <div className="pt-6 border-t border-dashed border-gray-700">
            <p className="text-sm sm:text-base leading-relaxed text-gray-300 font-normal">
              <strong className="text-white font-bold">
                Research Independence.
              </strong>{" "}
              Where we commission or fund research, we do so with editorial
              independence, peer review where possible, open publication, and
              explicit reflection on residual potential COIs.
            </p>
          </div>

          {/* Item 4 */}
          <div className="pt-6 border-t border-dashed border-gray-700">
            <p className="text-sm sm:text-base leading-relaxed text-gray-300 font-normal">
              <strong className="text-white font-bold">
                Reflective COI Practice.
              </strong>{" "}
              Avoiding industry funding does not, on its own, deliver
              independence. We also reflect on the indirect ways our positions
              could be shaped by funder preferences, by professional incentives,
              or by lived-experience-as-currency dynamics. We publish our
              reflections.
            </p>
          </div>

          {/* Footer Link */}
          <div className="pt-6 border-t border-dashed border-gray-700">
            <p className="text-sm sm:text-base leading-relaxed text-gray-300 font-normal">
              <strong className="text-white font-bold">
                Open financials.
              </strong>{" "}
              Our annual report and accounts are published in full each year on the Charity
              Commission register (charity no. 1196538).{" "}
              <a
                href="https://register-of-charities.charitycommission.gov.uk/charity-search/-/charity-details/5155823"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 hover:text-sky-300 underline underline-offset-4 transition-colors duration-200 font-semibold"
              >
                View on the Charity Commission register
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurFundingCOI;
