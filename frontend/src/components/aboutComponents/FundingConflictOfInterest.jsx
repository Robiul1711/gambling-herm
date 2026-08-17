import React from "react";

const FundingConflictOfInterest = () => {
  return (
    <section className="w-full">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Top Accent Line */}
        <div className="w-12 h-1 bg-Primary mx-auto mb-6"></div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-[#2d2d2d] tracking-tight mb-6">
          Funding &amp; conflict-of-interest
        </h2>

        {/* Intro Paragraph */}
        <p className="text-[#4a4a4a] text-base sm:text-lg leading-relaxed mb-10 mx-auto">
          Independence on gambling harm requires independence from
          gambling-industry funding. We take this seriously and are explicit
          about it. The full statement is on our{" "}
          <a
            href="#"
            className="text-[#4a4a4a] underline hover:text-Primary transition-colors"
          >
            policy page
          </a>
          ; the summary sits here.
        </p>

        {/* Bullet Points List */}
        <ul className="text-left space-y-4 max-w-5xl mx-auto text-[#6b7280] text-sm sm:text-base leading-relaxed">
          <li className="flex items-start">
            <span className="text-[#2d2d2d] mr-2 select-none">•</span>
            <span>
              <strong className="text-[#2d2d2d] font-semibold">
                No industry funding.
              </strong>{" "}
              We do not accept funding from gambling operators, their trade
              bodies, their associated charitable arms (including historical
              industry-funded charities), or other organisations whose continued
              funding depends on gambling-industry revenue.
            </span>
          </li>

          <li className="flex items-start">
            <span className="text-[#2d2d2d] mr-2 select-none">•</span>
            <span>
              <strong className="text-[#2d2d2d] font-semibold">
                Staff &amp; trustee declarations.
              </strong>{" "}
              All staff and trustees declare any prior or current interests
              connected to the gambling industry. Updated annually.
            </span>
          </li>

          <li className="flex items-start">
            <span className="text-[#2d2d2d] mr-2 select-none">•</span>
            <span>
              <strong className="text-[#2d2d2d] font-semibold">
                Open financials.
              </strong>{" "}
              Our annual report and accounts are published in full each year on the Charity Commission register (charity no. 1196538).{" "}
              <a
                href="https://register-of-charities.charitycommission.gov.uk/charity-details/?regid=1196538&subid=0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-Primary underline hover:text-Primary2 transition-colors"
              >
                View on the Charity Commission register
              </a>
              , or email{" "}
              <a
                href="mailto:hello@gamblingharm.com"
                className="text-Primary underline hover:text-Primary2 transition-colors"
              >
                hello@gamblingharm.com
              </a>{" "}
              for a copy.
            </span>
          </li>

          <li className="flex items-start">
            <span className="text-[#2d2d2d] mr-2 select-none">•</span>
            <span>
              <strong className="text-[#2d2d2d] font-semibold">
                Research with editorial independence.
              </strong>{" "}
              Where we commission or fund research, we do so with editorial
              independence, peer review where possible, and open publication.
            </span>
          </li>

          <li className="flex items-start">
            <span className="text-[#2d2d2d] mr-2 select-none">•</span>
            <span>
              <strong className="text-[#2d2d2d] font-semibold">
                Reflective COI practice.
              </strong>{" "}
              Avoiding industry funding does not, on its own, deliver
              independence. We reflect on indirect routes through which our
              positions could be shaped, and publish our reflections.
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default FundingConflictOfInterest;
