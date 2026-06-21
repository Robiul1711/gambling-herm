import React from "react";

const FundingConflictOfInterest = () => {
  return (
    <section className="section-padding-x">
      <div className="max-w-5xl mx-auto text-center">
        {/* Top Accent Line */}
        <div className="w-12 h-1 bg-Primary mx-auto mb-6"></div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-[#2d2d2d] tracking-tight mb-6">
          Funding &amp; conflict-of-interest
        </h2>

        {/* Intro Paragraph */}
        <p className="text-[#4a4a4a] text-base sm:text-lg leading-relaxed mb-10 max-w-4xl mx-auto">
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
              Our annual report and accounts are published in full each year.{" "}
              <a
                href="#"
                className="text-[#6b7280] underline hover:text-Primary transition-colors"
              >
                [Annual report and accounts]
              </a>
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
