import React from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, Landmark, History, Scale, Award } from "lucide-react";

export default function FundingAndConflictsOfInterest() {
  return (
    <div className="w-full bg-[#FAFAFA] text-[#1f2937] antialiased">
      {/* Centred, image-free header */}
      <section className="w-full bg-white border-b border-gray-200 py-16 md:py-24 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Kicker */}
          <div className="inline-flex items-center justify-center space-x-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#1B80C4] mb-4">
            <span className="w-6 h-[2px] bg-[#1B80C4]" />
            <span>Who we are · Funding</span>
            <span className="w-6 h-[2px] bg-[#1B80C4]" />
          </div>

          {/* H1 Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-black text-slate-900 tracking-tight leading-tight mb-6">
            Funding &amp; conflicts of interest
          </h1>

          {/* Lead Line */}
          <p className="text-lg sm:text-xl md:text-2xl text-slate-700 leading-relaxed font-medium max-w-3xl mx-auto">
            Our interest is reducing gambling harm. The industry's is the revenue
            that creates it. The two are in conflict; our funding rules follow.
          </p>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
          {/* Section 1: No industry funding */}
          <div className="bg-white border border-gray-200 p-6 sm:p-8 md:p-10 shadow-sm">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-sky-50 flex items-center justify-center text-[#1B80C4]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                No industry funding, ever.
              </h2>
            </div>
            <div className="text-slate-600 text-[15px] sm:text-base leading-relaxed space-y-4">
              <p>
                We do not accept funds from the gambling industry: operators,
                their trade bodies, or organisations whose funding depends on
                gambling-industry revenue.
              </p>
              <p>
                This is a position we have acted on, not just stated: in 2023,
                after two years on the Gambling Commission's list of
                organisations approved to receive research, education and
                treatment contributions from operators, we asked to be removed
                to protect our independence.
              </p>
              <p className="bg-slate-50 p-4 border-l-4 border-[#1B80C4] text-slate-700 font-medium">
                Direct funding to GHUK through that route totalled £475, the
                lowest of any eligible organisation. For context: in a single
                year, our own lived-experience team donated £89,910 to keep the
                work going.
              </p>
            </div>
          </div>

          {/* Section 2: Historical funding */}
          <div className="bg-white border border-gray-200 p-6 sm:p-8 md:p-10 shadow-sm">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-sky-50 flex items-center justify-center text-[#1B80C4]">
                <History className="w-5 h-5" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Where our historical funding came from.
              </h2>
            </div>
            <div className="text-slate-600 text-[15px] sm:text-base leading-relaxed space-y-4">
              <p>
                Our early awareness workshops for children and young people in
                diverse communities were funded via YGAM and later GambleAware,
                from regulatory settlement funds: money operators are required
                by the Gambling Commission to surrender, not donations the
                industry chooses to make, and carrying no industry PR.
              </p>
              <p>
                Funding in the previous system was restricted: it never funded
                our public-health, systems or medical-education work.
              </p>
            </div>
          </div>

          {/* Section 3: The transition */}
          <div className="bg-white border border-gray-200 p-6 sm:p-8 md:p-10 shadow-sm">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-sky-50 flex items-center justify-center text-[#1B80C4]">
                <Scale className="w-5 h-5" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                The transition, disclosed in full.
              </h2>
            </div>
            <div className="text-slate-600 text-[15px] sm:text-base leading-relaxed space-y-4">
              <p>
                In 2024–25, with the settlement fund closed, our largest funder
                was GambleAware (£113,559, 61% of income) under the System
                Stabilisation Fund, which existed to let previously funded work
                for young people continue while the statutory levy was set up.
              </p>
              <p>
                No operator or industry actor has any influence over what we
                say, publish or recommend. The full account is in our Annual
                Report.
              </p>
              <div className="pt-2">
                <a
                  href="https://register-of-charities.charitycommission.gov.uk/charity-details/?regid=1196538&subid=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-bold text-[#1B80C4] hover:underline"
                >
                  View our Charity Commission register entry (charity no. 1196538) &rarr;
                </a>
              </div>
            </div>
          </div>

          {/* Section 4: Not funding us was influence too */}
          <div className="bg-white border border-gray-200 p-6 sm:p-8 md:p-10 shadow-sm">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-sky-50 flex items-center justify-center text-[#1B80C4]">
                <Landmark className="w-5 h-5" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Not funding us was influence too.
              </h2>
            </div>
            <div className="text-slate-600 text-[15px] sm:text-base leading-relaxed space-y-4">
              <p>
                A funding system the industry pays into shapes the sector by
                what it declines to fund as much as by what it funds. Work led
                by lived experience, critical of the status quo and focused on
                the evidence was restricted and left to run on volunteered time
                and our own team's donations.
              </p>
              <p>
                We were influenced by that system: it decided what we could
                afford to do. We say this plainly because pretending otherwise
                would understate what independence has cost.
              </p>
            </div>
          </div>

          {/* Section 5: Publicly funded, at last */}
          <div className="bg-white border border-gray-200 p-6 sm:p-8 md:p-10 shadow-sm">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-sky-50 flex items-center justify-center text-[#1B80C4]">
                <Award className="w-5 h-5" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Publicly funded, at last.
              </h2>
            </div>
            <div className="text-slate-600 text-[15px] sm:text-base leading-relaxed space-y-4">
              <p>
                From 2026 our core funding comes from OHID and the NHS: public
                money for the full breadth of the work: prevention and
                public-health systems, medical education, and support,
                including peer support.
              </p>
              <p className="font-medium text-slate-800">
                For the first time, the parts of our work the old system never
                funded are funded.
              </p>
            </div>
          </div>

          {/* Quick Links Back */}
          <div className="pt-8 border-t border-gray-200 flex flex-wrap items-center justify-between gap-4">
            <Link
              to="/about"
              className="text-sm font-semibold text-slate-700 hover:text-[#1B80C4] transition-colors"
            >
              &larr; Back to About GHUK
            </Link>
            <Link
              to="/policy-and-advocacy"
              className="text-sm font-semibold text-slate-700 hover:text-[#1B80C4] transition-colors"
            >
              Our policy positions &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
